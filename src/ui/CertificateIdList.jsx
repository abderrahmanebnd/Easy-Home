import { useRequests } from "../services/useRequests";
import CertificateItem from "./CertificateIdItem";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { FiInbox } from "react-icons/fi";
import { useState } from "react";
import CertificateIdModal from "./CertificateIdModal";
function CertificateIdList({ type }) {
  const [viewDetails, setViewDetails] = useState(false);
  const [requestModal, setRequestModal] = useState({});
  const { requests, isLoading, error } = useRequests(type);
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <ErrorMessage />;
  return (
    <>
      {requests?.length ? (
        viewDetails ? (
          <CertificateIdModal
            setViewDetails={setViewDetails}
            request={requestModal}
            type={type}
          />
        ) : (
          <ul className="grid grid-cols-1 gap-5 min-[800px]:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) => (
              <CertificateItem
                request={request}
                key={request._id}
                setViewDetails={setViewDetails}
                setRequestModal={setRequestModal}
              />
            ))}
          </ul>
        )
      ) : (
        <div className="mx-auto flex min-w-full flex-col items-center gap-3 rounded-2xl bg-customGray px-4 py-6 sm:w-3/4 md:py-8 lg:w-1/2">
          <FiInbox className="h-20 w-20 text-slate-400 drop-shadow-lg md:h-28 md:w-28 lg:h-32 lg:w-32" />
          <p className="text-xl font-semibold text-primaryColor">
            Your List Of {type === "Certificate" ? "Certificates" : "ID Cards"}{" "}
            Is Empty
          </p>
        </div>
      )}
    </>
  );
}

export default CertificateIdList;
