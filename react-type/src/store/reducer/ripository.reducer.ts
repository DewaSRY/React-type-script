import {RepositoryAction,RepositoryState,ACTION_TYPE} from "./ripository.type"
const InitRepositoryState:RepositoryState={
    loading:false,
    error:null,
    data:[]
}
export const  repositoryReducers=(
    state=InitRepositoryState,
    action:RepositoryAction
    ):RepositoryState=>{
    switch(action.type){
        case ACTION_TYPE.SEARCH_REPOSITORY:
            return {
                ...state,
                loading:true,
            }
        case ACTION_TYPE.SEARCH_REPOSITORY_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case ACTION_TYPE.SEARCH_REPOSITORY_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state
    }
}