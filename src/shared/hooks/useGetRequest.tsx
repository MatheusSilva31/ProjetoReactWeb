import axios from "axios";
import { useEffect, useState } from "react";


export function useGet<T>(endpoint: string){
    const [dataResponse,setDataResponse] = useState<T>()
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    const [sucess,setSucess] = useState<boolean>(false)
    const [send,setSend] = useState<object | boolean>(false)
    const [statusCode,setStatusCode] = useState<number | null>(null)
    const [getID,changeId] = useState<number | undefined>(undefined)


    const requestAxios = axios?.create({
        baseURL:'http://localhost:3000/',
        // headers:{
        //     Authorization:`Beares ${localStorage?.getItem("token")}`
        // }
        headers:{
            'Access-Control-Allow-Origin' : '*',
            'Content-Type':'application/json; charset=utf-8',
            'ETag':'W/"5277-wFAz6mcEUVF5o3zAEEu7TB6OoBY"'
        }
    });

    const request = async (params:object = {}) => {
        setLoading(true);
        await requestAxios
            .get(`${endpoint}${getID ? `/${getID}`: ''}`,{params:{...params}})
            .then((res)=>{
                setStatusCode(res?.status)
                setDataResponse(res?.data)
                setSucess(true)
            })
            .catch((err)=>{
                setStatusCode(err?.response?.status)
                setError("Algo deu errado na requisição")
            })
            .finally(()=>{
                setLoading(true)
            })
    }

    useEffect(()=>{
        if(send){
            request(typeof send == "boolean" ? {} : send)
            setSend(false)
        }
    },[send])

    useEffect(()=>{
        if(getID){
            request({}),
            setSend(false),
            changeId(undefined)
        }
    },[getID])

    return {
        dataResponse,
        loading,
        error,
        sucess,
        setSucess,
        setSend,
        setDataResponse,
        setError,
        statusCode,
        changeId
    }
}