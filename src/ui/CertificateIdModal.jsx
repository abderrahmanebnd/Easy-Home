import { FaMountainCity, FaPhone } from "react-icons/fa6";
import { GoX } from "react-icons/go";

import { MdEmail } from "react-icons/md";
import Buttons from "./Buttons";
import Button from "./Button";

import { BsCalendarDateFill, BsFillMouse3Fill } from "react-icons/bs";
import { useDecline } from "../services/useDecline";
import { useAccept } from "../services/useAccept";
import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function CertificateIdModal({ setViewDetails, request, type }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (type === "Certificate") {
      setImage(request.certificate.image);
    }
    if (type === "IdPicture") {
      setImage(request.worker.idPicture);
    }
  }, []);

  const { type: typeDoc, _id } = request;
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
  const { isAccepting, acceptingRequest } = useAccept(typeDoc, {
    setViewDetails,
  });
  const { isDeclining, decliningRequest } = useDecline(typeDoc, {
    setViewDetails,
  });

  function handleAccept() {
    acceptingRequest(_id);
  }
  function handleDecline() {
    decliningRequest(_id);
  }

  return (
    <div className="fixed inset-0  overflow-y-auto  bg-slate-700 bg-opacity-30 py-10 backdrop-blur-sm">
      <div className="scroll relative mx-auto flex w-3/4 flex-col gap-6 rounded-2xl border-4 border-primaryColor bg-white px-6 py-8 lg:w-2/3 xl:w-1/2">
        <button
          onClick={() => setViewDetails(false)}
          className="absolute -right-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-primaryColor bg-white transition-all duration-300 hover:scale-110 hover:bg-slate-300"
        >
          <GoX className="text-4xl text-primaryColor" />
        </button>
        <section className="grid grid-cols-2  items-center justify-items-center gap-3 rounded-2xl border-2 border-primaryColor bg-customGray p-6 sm:grid-cols-3">
          <div className="relative row-start-1 row-end-3 sm:row-end-2">
            <img
              className="relative h-24 w-24 rounded-full border-4 border-primaryColor drop-shadow-md "
              src={profilePicture}
              alt="worker profile"
            />
            <span className="absolute -top-4 left-14 flex h-12 w-12 items-center justify-center rounded-full border-4 border-primaryColor  bg-white px-1 py-2 text-sm font-semibold text-primaryColor">
              {Math.round(rating)}
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
        <section className=" mx-auto flex w-full flex-col  gap-6 rounded-2xl border-2 border-primaryColor bg-customGray p-6 lg:gap-8">
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
              {typeDoc} validation
            </h1>
            <h2 className="mb-1 text-center text-lg text-primaryColor lg:text-2xl">
              Description
            </h2>
            <div className="flex items-center justify-center">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    className=" rounded-2xl border-2 border-primaryColor"
                    src={image}
                    alt={type === "Certificate" ? "certificate" : "id Picture"}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="mt-2 text-center text-lg font-semibold text-primaryColor lg:text-xl">
                {" "}
                Zoom With The Scroll Wheel
              </p>
              <BsFillMouse3Fill className="text-lg text-primaryColor lg:text-xl" />
            </div>
          </div>
        </section>
        <section className="mx-auto w-full rounded-2xl border-2 border-primaryColor">
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
              decline
            </Button>
          </Buttons>
        </section>
      </div>
    </div>
  );
}

export default CertificateIdModal;
