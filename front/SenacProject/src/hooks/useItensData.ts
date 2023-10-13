import axios, { AxiosPromise } from "axios"
import { ItensData } from "../interface/ItensData";
import { useQuery } from "react-query";

const API_URL ='localhost:8080'

const fetchData = async (): AxiosPromise<ItensData[]> => {
    const response = axios.get(API_URL + '/itens')
    return response;
}

export function useItensData() {
   const query = useQuery({
    queryFn: fetchData,
    queryKey: ['itens-data'],
    retry: 2,
   })
   return{
    ...query,
    data: query.data?.data
   }
}