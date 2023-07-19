export const HTMLPreview = `
<html>
  <head>
    <style>
    html {background-color: white;}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
    const handleError=(err)=>{
        const root=document.querySelector("#root")
        root.innerHTML='<div style="color:red"><h2>we foun error</h2><br/>'+err+' </div>'
        console.error(err)
    }
    window.addEventListener("error",(event)=>{
        event.preventDefault()
        handleError(event.message)
    })
    window.addEventListener("message",(event)=>{
      try{
        eval(event.data)
      }catch(err){
        handleError(err)
      }
    },false)
    </script>
  </body>
</html>
`;
export const showFunc = `
import _React from "react";
import _ReactDOM  from "react-dom";
var show=(value)=>{
  const root=document.querySelector("#root")
  if(typeof value ==="object"){
    if(value.$$typeof && value.props){
      _ReactDOM.render(value,root)
    }else{
     root.innerHTML=JSON.stringify(value)
    }
  }else{
   root.innerHTML=value
  }
}
`;
export const showFunctNoop = "var show=()=>{}";

export * from "./plugin.onLoad";
export * from "./plugin.onResolve";
export * from "./bundler.build";
