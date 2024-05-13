import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptRequest } from "./apiRequests";
import toast from "react-hot-toast";

export function useAccept(type,{setViewDetails}){
  const queryClient=useQueryClient()
  const {isPending:isAccepting,mutate:acceptingRequest}=useMutation({
    mutationFn:(id)=>acceptRequest(id),
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[type]
      })
      toast.success(`${type} Succesfully Accepted`)
      setViewDetails(false)
    },
    onError:(err)=>{
      toast.error(err.message)
  }
  
})
  
  return{isAccepting,acceptingRequest}
}