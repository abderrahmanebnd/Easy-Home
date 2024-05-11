import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptRequest } from "./apiRequests";
// import toast from "react-hot-toast";

export function useAccept({type}){
  const queryClient=useQueryClient()
  const {isLoading:isAccepting,mutate:acceptingRequest}=useMutation({
    mutationFn:(id)=>acceptRequest(id),
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[type]
      })
      // toast.success(`${type} Succesfully Accepted`)
      
    },
    onError:(err)=>{
      // toast.error(err.message)
  }
  
})
  
  return{isAccepting,acceptingRequest}
}