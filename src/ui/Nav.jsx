import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { TbMessageReport, TbCertificate } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { MdHomeRepairService, MdOutlinePunchClock } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { IoIosLogOut } from "react-icons/io";

function Nav() {
  const { handleLogout } = useAuth();
  return (
    <ul className="h-full space-y-4  px-3">
      <li className="space-y-4 border-b pb-2 pt-3 ">
        <div className="mb-2 flex w-48 items-center gap-6  border-b px-2 pb-2 xl:w-52 xl:pl-4  ">
          <HiOutlineHome className=" text-xl text-gray-400 xl:text-3xl" />

          <span className="font-semibold text-primaryColor xl:text-xl  ">
            Dashboard
          </span>
        </div>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="dashboard/applications"
              className=" flex w-48 items-center gap-6 
              rounded-md px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <MdHomeRepairService className=" text-xl text-gray-400 xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl ">
                Applications
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="dashboard/workers"
              className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <GrUserWorker className="text-xl text-gray-400  xl:text-3xl" />

              <span className="font-semibold text-primaryColor xl:text-xl ">
                Workers
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/users"
              className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <HiOutlineUsers className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl">
                Users
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/certificates"
              className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <TbCertificate className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl ">
                Certificates
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/deals"
              className="flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <MdOutlinePunchClock className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl">
                Deals
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard/reviews"
              className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <AiOutlineComment className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold  text-primaryColor xl:text-xl">
                Reviews
              </span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="dashboard/reports"
              className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <TbMessageReport className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl ">
                Reports
              </span>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="dashboard/posts"
              className="  flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
            >
              <MdPostAdd className="text-xl text-gray-400  xl:text-3xl" />

              <span className=" font-semibold text-primaryColor xl:text-xl ">
                Posts
              </span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/certificates"
          className="  flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
        >
          <TbCertificate className="text-xl text-gray-400  xl:text-3xl" />

          <span className=" font-semibold text-primaryColor xl:text-xl ">
            Certificates
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reports"
          className=" flex w-48 items-center  gap-6 
          rounded-md   px-2 py-2 tracking-wide hover:bg-slate-100  xl:w-56 xl:pl-4  "
        >
          <TbMessageReport className="text-xl text-gray-400  xl:text-3xl" />

          <span className=" font-semibold text-primaryColor xl:text-xl ">
            Reports
          </span>
        </NavLink>
      </li>
      <li>
        <div
          onClick={handleLogout}
          className="flex w-48 cursor-pointer  items-center 
          gap-6 rounded-md px-2 py-2  tracking-wide hover:bg-slate-100 xl:w-56 xl:pl-4  "
        >
          <IoIosLogOut className="text-xl text-red-600  xl:text-3xl" />

          <span className=" font-semibold text-red-600 xl:text-xl ">
            Log Out
          </span>
        </div>
      </li>
    </ul>
  );
}

export default Nav;
