import CertificateIdList from "../ui/CertificateIdList"

function IdCard() {
   return (
     
         <>
        <h2 className="mb-10 text-xl  font-semibold text-primaryColor sm:text-3xl">
             Verification : Identity Cards  
       </h2>
       <CertificateIdList type="IdPicture"/>
       
       </>
         
   )
}

export default IdCard
