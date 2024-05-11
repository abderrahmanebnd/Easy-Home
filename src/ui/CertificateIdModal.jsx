import { FaMountainCity, FaPhone } from "react-icons/fa6";
import { GoX } from "react-icons/go";

import { MdEmail } from "react-icons/md";
import Buttons from "./Buttons";
import Button from "./Button";

import { BsCalendarDateFill } from "react-icons/bs";
import { useDecline } from "../services/useDecline";
import { useAccept } from "../services/useAccept";

function CertificateIdModal({ setViewDetails, request }) {
  const { title, image } = request.certificate;
  const { type, _id } = request;
  const {
    name,
    email,
    phoneNumber,
    job,
    profilePicture,
    wilaya,
    rating,
    certificates,
    experience,
  } = request.worker;
  const { isAccepting, acceptingRequest } = useAccept({ type });
  const { isDeclining, decliningRequest } = useDecline({ type });
  function handleAccept() {
    acceptingRequest(_id);
    setViewDetails(false);
  }
  function handleDecline() {
    decliningRequest(_id);
    setViewDetails(false);
  }

  return (
    <div className="fixed inset-0  overflow-y-auto  bg-slate-700 bg-opacity-30 py-10 backdrop-blur-sm">
      <div className="scroll relative mx-auto flex w-3/4 flex-col gap-6 rounded-2xl border-4 border-primaryColor bg-white px-6 py-8">
        <button
          onClick={() => setViewDetails(false)}
          className="absolute -right-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-primaryColor bg-white transition-all duration-300 hover:bg-slate-300 hover:scale-110"
        >
          <GoX className="text-4xl text-primaryColor" />
        </button>
        <section className="grid grid-cols-2  items-center justify-items-center gap-3 sm:grid-cols-3 bg-customGray border-2 rounded-2xl border-primaryColor p-6">
          <div className="relative row-start-1 row-end-3 sm:row-end-2">
            <img
              className="relative h-24 w-24 rounded-full border-4 border-primaryColor drop-shadow-md "
              src={profilePicture}
              alt="worker profile"
            />
            <span className="absolute -top-4 left-14 rounded-full border-4 border-primaryColor bg-white px-1 py-2 text-sm font-semibold  text-primaryColor">
              {rating}
              <span className="text-sm">⭐</span>
            </span>
          </div>
          <div>
            <p className="text-lg text-primaryColor">Name : {name}</p>
            <p className="text-lg text-gray-400">Job : {job}</p>
          </div>
          <div className="col-start-2 sm:col-start-3">
            <p className="text-lg text-gray-400">
              Certificates : {certificates.length}
            </p>
          </div>
        </section>
        <section className=" mx-auto flex w-full flex-col  gap-6 rounded-2xl border-2 border-primaryColor p-6 lg:gap-8 bg-customGray">
          <div className="grid grid-rows-1 justify-items-center gap-y-3 sm:grid-cols-2 sm:grid-rows-2 lg:gap-y-6 ">
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg text-primaryColor lg:text-2xl" />
              <p className="   text-gray-400 lg:text-xl">{email}</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaPhone className="text-lg text-primaryColor lg:text-2xl" />
              <p className="   text-gray-400 lg:text-xl">{phoneNumber}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMountainCity className="text-lg text-primaryColor lg:text-2xl" />
              <p className=" text-gray-400 lg:text-xl">{wilaya}</p>
            </div>
            <div className="flex items-center  gap-3">
              <BsCalendarDateFill className="text-xl text-primaryColor lg:text-2xl " />
              <p className=" text-gray-400 lg:text-xl">
                {experience} (Experience)
              </p>
            </div>
          </div>

          <div className="mx-auto w-full">
            <h1 className=" mb-3 text-center text-2xl font-semibold text-primaryColor lg:text-4xl">
              {type} validation
            </h1>
            <h2 className="mb-1 text-center text-lg text-primaryColor lg:text-2xl">
              Description
            </h2>
            <p className="mb-2 min-w-full rounded-2xl border-2 border-dotted border-primaryColor p-3 text-primaryColor">
              {title}
            </p>
            <img
              className=" rounded-2xl border-2 border-primaryColor"
              src={image}
              alt="certificate"
            />
          </div>
        </section>
        <section className="mx-auto w-full border-2 rounded-2xl border-primaryColor">
          <Buttons>
            <Button
              color="emerald"
              onClick={() => handleAccept()}
              disabled={isAccepting}
            >
              Accept
            </Button>
            <Button
              color="red"
              onClick={() => handleDecline()}
              disabled={isDeclining}
            >
              Decline
            </Button>
          </Buttons>
        </section>
      </div>
    </div>
  );
}

export default CertificateIdModal;
