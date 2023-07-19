import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localforage from "localforage";

const fileCache = localforage.createInstance({
  name: "filecache",
});
export const pluginOnLoad = (codeInput: string) => {
  return {
    name: "fetch-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: "jsx",
          contents: codeInput,
        };
      });
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        const cacheResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cacheResult) return cacheResult;
      });
      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        const { data, request } = await axios.get(args.path);
        const escapeData = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");
        const contents = `
          const style=document.createElement('style');
          style.innerText='${escapeData}';
          document.head.appendChild(style)
          `;
        const result = {
          loader: "jsx",
          contents: contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result as esbuild.OnLoadResult;
      });
      build.onLoad(
        { filter: /.*/ },
        async (args: any): Promise<esbuild.OnLoadResult> => {
          console.log("onLoad", args);
          const { data, request } = await axios.get(args.path);
          const result = {
            loader: "jsx",
            contents: data,
            resolveDir: new URL("./", request.responseURL).pathname,
          };
          await fileCache.setItem(args.path, result);
          return result as esbuild.OnLoadResult;
        }
      );
    },
  };
};
