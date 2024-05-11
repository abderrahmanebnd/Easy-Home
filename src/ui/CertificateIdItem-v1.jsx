import { useState } from "react";
import { FaMountainCity, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Buttons from "./Buttons";
import Button from "./Button";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { useAccept } from "../services/useAccept";
import { useDecline } from "../services/useDecline";

function CertificateIdItem({ request }) {
  const [viewDetails, setViewDetails] = useState(false);
  const { type,_id } = request;
  const { name, email, phoneNumber, job, profilePicture, wilaya } =
    request.worker;
  const { title, image } = request.certificate;
  const {isAccepting,acceptingRequest}=useAccept({type})
  const {isDeclining,decliningRequest}=useDecline({type})
  function handleToggle() {
    setViewDetails(!viewDetails);
  }
  return (
    <li className="flex flex-col items-center gap-3 rounded-2xl bg-customGray p-4">
      <section className="flex flex-col items-center justify-around">
        <img
          className="h-16 w-16 rounded-full "
          src={profilePicture}
          alt="worker profile"
        />
        <p className="text-sm text-primaryColor">{name}</p>
        <p className="text-sm text-slate-400">{job}</p>
      </section>
      <section className=" flex min-w-full  flex-col items-center justify-center  rounded-2xl border-2 border-slate-400 p-4">
        <MdEmail className="text-lg text-primaryColor" />
        <p className=" mb-3  text-slate-400">{email}</p>
        <FaPhone className="text-lg text-primaryColor" />
        <p className=" mb-3  text-slate-400">{phoneNumber}</p>
        <FaMountainCity className="text-lg text-primaryColor" />
        <p className="mb-6 text-slate-400">{wilaya}</p>
        {!viewDetails ? (
          <button
            onClick={() => handleToggle()}
            className="flex items-center gap-2 text-primaryColor hover:text-blue-800"
          >
            view {type} <BsArrowDownCircle />
          </button>
        ) : (
          <>
            <p className="mb-6 text-xl font-semibold text-primaryColor">
              {type} Validation
            </p>

            <div>
              <p className="text-center text-lg text-primaryColor">
                Description
              </p>
              <p className="mb-2 min-w-full rounded-2xl border-2 border-slate-400 p-3 text-primaryColor">
                {title}
              </p>
              <img
                className=" rounded-2xl border-2 border-slate-400"
                src={image}
                alt="certificate"
              />
              <Buttons>
                <Button color="emerald" onClick={()=>acceptingRequest(_id)} disabled={isAccepting}>Accept</Button>
                <Button color="red" onClick={()=>decliningRequest(_id)} disabled={isDeclining}>Decline</Button>
              </Buttons>
            </div>
          </>
        )}
      </section>
      {viewDetails && (
        <section>
          <button
            onClick={() => handleToggle()}
            className="flex items-center gap-2 text-primaryColor hover:text-blue-800"
          >
            hide {type}
            <BsArrowUpCircle />
          </button>
        </section>
      )}
    </li>
  );
}

export default CertificateIdItem;
