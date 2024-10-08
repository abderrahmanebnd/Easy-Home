import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Button from "./Button";

function CertificateIdItem({ request, setViewDetails, setRequestModal }) {
  const { type } = request;
  const { name, email, phoneNumber, job, profilePicture, rating } =
    request.worker;

  function handleToggle() {
    setViewDetails((v) => !v);
    setRequestModal(request);
  }
  return (
    <li className="flex flex-col items-center gap-5 rounded-2xl border-4 border-primaryColor bg-white px-6 py-8">
      <section className=" flex w-full  items-center justify-around rounded-2xl border-2 border-primaryColor bg-customGray pb-2 pt-6">
        <div className="relative">
          <img
            className="relative h-24 w-24 rounded-full border-4 border-primaryColor drop-shadow-md "
            src={profilePicture}
            alt="worker profile"
          />
          <span className="absolute -right-2 -top-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-primaryColor  bg-white text-sm font-semibold text-primaryColor">
            {Math.round(rating)}
            <span className="text-sm">⭐</span>
          </span>
        </div>
        <div>
          <p className="text-lg text-primaryColor">{name}</p>
          <p className="text-lg text-slate-400"> {job}</p>
        </div>
      </section>
      <section className="flex min-w-full flex-col items-center gap-3 rounded-2xl border-2 border-primaryColor bg-customGray p-4">
        <div className="flex items-center gap-2">
          <MdEmail className="text-lg text-primaryColor" />
          <p className=" text-slate-400">{email}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-lg text-primaryColor" />
          <p className=" text-slate-400">{phoneNumber}</p>
        </div>
      </section>
      <Button color="cyan" onClick={() => handleToggle()}>
        view {type === "IdPicture" ? `identity card` : `Certificate`}
      </Button>
    </li>
  );
}

export default CertificateIdItem;
