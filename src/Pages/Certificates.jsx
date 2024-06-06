import CertificateIdList from "../ui/CertificateIdList";

function Certificates() {
  return (
    <>
      <h2 className="mb-10 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Verification : Certificates
      </h2>
      <CertificateIdList type="Certificate" />
    </>
  );
}

export default Certificates;
