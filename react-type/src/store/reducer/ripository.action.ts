import axios from "axios";
import { ACTION_TYPE,RepositoryAction } from "./ripository.type";
import { Dispatch } from "react";
export const searchRepositores=(term:string)=>{
    return async(dispatch:Dispatch<RepositoryAction>)=>{
        dispatch({
            type:ACTION_TYPE.SEARCH_REPOSITORY
        })
        try{
            const {data}=await axios.get("https://registry.npmjs.org/-/v1/search",{
                params:{
                    text:term
                }
            })
            const sucessData=data.objects.map((result:any):string[]=>{
                return result.package.name
            })
            dispatch({
                type:ACTION_TYPE.SEARCH_REPOSITORY_SUCCESS,
                payload:sucessData
            })
        }catch(error){
            if(error instanceof Error){
                dispatch({
                    type:ACTION_TYPE.SEARCH_REPOSITORY_ERROR,
                    payload:error.message
                })
            }
        }
    }
}