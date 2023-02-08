import axios from 'axios'
import { useEffect, useState } from 'react'

export function usePutRequest<T>(endpoint:string){
    const [dataResponse,setDataResponse] = useState<any>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    const [sucess,setSucess] = useState<boolean>(false)
    const [putID,changeId] = useState<string | undefined>(undefined)


    const requestAxios = axios?.create({
        baseURL:'http://localhost:3000/',
        // headers:{
        //     Authorization:`Beares ${localStorage?.getItem("token")}`
        // }
        headers:{}
    });

    const setSend = async (data:any) => {
    setLoading(true)
    await requestAxios
    .patch(`${endpoint}${putID ? `/${putID}`: ''}`,data)
    .then((res)=>{
        setDataResponse(res)
        setSucess(true)
    })
    .catch((err)=>{
        setError('Algo deu errado na requisição')
    })
    .finally(()=>{
        setLoading(false)
    })  
}
useEffect(()=>{
    if(putID){
       setSend({})
       changeId(undefined)
    }
},[putID])

return{
    dataResponse,
    loading,
    error,
    sucess,
    setSucess,
    setSend,
    setDataResponse,
    setError,
    changeId
}

}