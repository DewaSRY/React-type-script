import React,{useState} from "react"
import {useRipository} from "../hooks"
export function RepositoryList(){
    const [terms,setTerms]=useState<string>('')
    const {hadleSearchRepository,data,error,loading}=useRipository()
    const handleSubmitForm=(event:React.FormEvent<HTMLFormElement> )=>{
        event.preventDefault()
        if(!terms)return
        hadleSearchRepository(terms) 
        setTerms("")
    }
    console.log(data)
    console.log(error)
    console.log(loading)
    return <div>
        <form action="" onSubmit={handleSubmitForm}>
            <input type="text" value={terms} onChange={e=>setTerms(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h3>we ger some error</h3>}
        {loading && <h3>Loading....................</h3>}
        <ul>
        {data&& data.map((data,id)=><li key={id}>{data}</li>)}
        </ul>
    </div>
}