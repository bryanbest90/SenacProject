import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ItensData } from '../interface/ItensData';

const API_URL = 'http://localhost:8080';

const postData = async (data: ItensData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/itens', data);
    return response;
}

export function useItensDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['itens-data'])
        }
    })

    return mutate;
}