import { useQuery } from "@tanstack/react-query";
import { getRequestByType } from "./apiRequests";

export function useRequests(type){
  const{
    data:requests,isLoading,error
  }=useQuery({
    queryKey:[type],
    queryFn:()=>getRequestByType(type)

  })
  return{requests,isLoading,error}
}