export interface RepositoryState{
    loading:boolean,
    error:string|null,
    data:string[]
}
export enum ACTION_TYPE{
    SEARCH_REPOSITORY="SEARCH_REPOSITORY",
    SEARCH_REPOSITORY_SUCCESS="SEARCH_REPOSITORY_SUCCESS",
    SEARCH_REPOSITORY_ERROR="SEARCH_REPOSITORY_ERROR"
}
interface SearchRepositoryAction{
    type:ACTION_TYPE.SEARCH_REPOSITORY
}
interface SearchRepositorySuccessAction{
    type:ACTION_TYPE.SEARCH_REPOSITORY_SUCCESS,
    payload:string[]
}
interface SearchRepositoryErrorAction{
    type:ACTION_TYPE.SEARCH_REPOSITORY_ERROR,
    payload:string
}
export type RepositoryAction=
    |SearchRepositoryAction
    |SearchRepositorySuccessAction
    |SearchRepositoryErrorAction