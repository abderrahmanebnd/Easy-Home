import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios/axios";

import CustomInput from "../ui/CustomInput";
import { useAuth } from "../context/AuthProvider";
import { IoIosWarning } from "react-icons/io";
import Loader from "../ui/Loader";

const LOGIN_URL = "/auth/login";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  function handleChangeEmail(value) {
    setEmail(value);
  }
  function handleChangePwd(value) {
    setPwd(value);
  }

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      const token = response?.data?.token;
      const role = response?.data?.user.role;

      setAuth({ email, pwd, role, token });

      navigate("/dashboard");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Network or Server Problems");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        console.error("Unauthorized");
      } else if (err.response?.status === 404) {
        console.log(err.response?.status);
        setErrMsg("Please Check Your Email or Password !");
      } else {
        console.error("Login Failed");
      }
      if (errMsg) {
        errRef.current?.focus();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="grid min-h-screen place-items-center bg-slate-100 py-10">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-10  max-w-6xl ">
          <div className="flex  items-center justify-center text-neutral-800 ">
            <div className="w-full rounded-xl bg-white shadow-xl">
              <div className="block md:flex ">
                <div className="mx-2 w-full p-6 pr-8 md:mx-0 md:w-6/12 md:p-8">
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="/assets/logo.png"
                      alt="logo"
                    />
                    <h4 className="mb-10 mt-3 text-2xl font-semibold">
                      We are <i>Easy Home </i>Team
                    </h4>
                  </div>

                  <form onSubmit={(e) => handleSubmit(e)}>
                    <p className="mb-2 text-center text-xl">
                      Please login to your account
                    </p>
                    <CustomInput
                      type={"text"}
                      value={email}
                      setValue={handleChangeEmail}
                      refType={emailRef}
                    >
                      Email
                    </CustomInput>

                    <CustomInput
                      type={"password"}
                      value={pwd}
                      setValue={handleChangePwd}
                      refType={pwdRef}
                    >
                      Password
                    </CustomInput>

                    {/* error message */}

                    {errMsg && (
                      <p
                        className="-mt-3 flex items-center gap-2 text-red-600"
                        ref={errRef}
                        aria-live="assertive"
                      >
                        <span className="text-md">
                          <IoIosWarning />
                        </span>
                        <span className="text-xs">{errMsg}</span>
                      </p>
                    )}

                    {/* <!--Submit button--> */}
                    <button
                      className=" mb-12 mt-5 inline-block w-full rounded-md px-6  py-2.5 text-center uppercase leading-normal text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl "
                      style={{
                        // background: "#1a2a6c",
                        backgroundImage:
                          "-webkit-linear-gradient(to right, #b21f1f, rgb(26, 42, 108,0.9))",
                        background:
                          "linear-gradient(to right, #c35747, rgb(26, 42, 108,0.9))",

                        //   backgroundImage:
                        //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        //
                      }}
                    >
                      Log in
                    </button>
                  </form>
                </div>

                <div
                  className="w-full rounded-b-xl md:w-6/12 md:rounded-l-none md:rounded-r-xl"
                  // style={{
                  //   backgroundImage:
                  //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  // }}
                  style={{
                    // background: "#1a2a6c",
                    backgroundImage:
                      "-webkit-linear-gradient(to right, #b21f1f, #1a2a6c)",
                    background:
                      "linear-gradient(to right, #c35747, rgb(26, 42, 108,0.9))",

                    //   backgroundImage:
                    //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    //
                  }}
                >
                  <div className="px-4 py-6 text-white md:p-12">
                    <h4 className="mb-6  text-xl font-semibold capitalize md:text-2xl">
                      We are more than just a company
                    </h4>
                    <p className="text-xs leading-5 md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Login;
