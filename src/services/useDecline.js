import { useMutation, useQueryClient } from "@tanstack/react-query"
import { declineRequest } from "./apiRequests"
import toast from "react-hot-toast"

export function useDecline(type,{setViewDetails}){
  const queryClient=useQueryClient()
  const {isPending:isDeclining,mutate:decliningRequest}=useMutation({
    mutationFn:(id)=>declineRequest(id),
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[type]
      })
      toast.success(`${type} Succesfully Declined`)
      setViewDetails(false)
    },
    onError:(err)=>{
      toast.error(err.message)
    }

  })
  return{isDeclining,decliningRequest}
}