import CertificateIdList from "../ui/CertificateIdList"

function IdCard() {
   return (
     
         <div className="h-screen">
        <h2 className="mb-10 text-xl  font-semibold text-primaryColor sm:text-3xl">
             Verification : Identity Cards  
       </h2>
       <CertificateIdList type="IdPicture"/>
       
       </div>
         
   )
}

export default IdCard
