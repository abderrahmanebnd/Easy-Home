
import CertificateList from "../ui/CertificateIdList";

function Certificates() {
  return (
    <>
   <h2 className="mb-10 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Certificates sent by workers
  </h2>
  <CertificateList type="Certificate"/>
  
  </>
    );
}

export default Certificates;
