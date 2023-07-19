import * as esbuild from "esbuild-wasm";
import { pluginOnLoad } from "./plugin.onLoad";
import { pluginOnResolve } from "./plugin.onResolve";
// type coderSetter = (result: string) => void;
export const startServiceBundler = async () => {
  await esbuild.initialize({
    wasmURL: "https://unpkg.com/esbuild-wasm@0.18.13/esbuild.wasm",
    worker: true,
  });
};
interface bundelCodeResult {
  code: string;
  err: string;
}
export const bundlerCode = async (
  input: string
  // setCode: coderSetter,
  // setError: coderSetter
): Promise<bundelCodeResult | undefined> => {
  try {
    const result: esbuild.BuildResult = await esBuildFunction(input);
    if (result.outputFiles && result.outputFiles[0].text) {
      return {
        code: result.outputFiles[0].text,
        err: "",
      };
      // setCode(;
    }
  } catch (erroe) {
    if (erroe instanceof Error) {
      return {
        code: "",
        err: erroe.message,
      };
      // setError();
    } else {
      throw erroe;
    }
  }
};

const esBuildFunction = async (input: string) => {
  return await esbuild.build({
    entryPoints: ["index.js"],
    bundle: true,
    write: false,
    plugins: [pluginOnResolve(), pluginOnLoad(input)],
    define: {
      "process.env.NODE_ENV": '"production"',
      global: "window",
    },
    jsxFactory: "_React.createElement",
    jsxFragment: "_React.Fragment",
  });
};
