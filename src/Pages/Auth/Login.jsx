import { useEffect, useRef, useState } from "react";

import CustomInput from "../../ui/CustomInput";
import { useAuth } from "../../context/AuthProvider";
import { IoIosWarning } from "react-icons/io";
import Loader from "../../ui/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const { isLoading, errMsg, setErrMsg, handleLogin } = useAuth();

  function handleChangeEmail(value) {
    setEmail(value);
  }
  function handleChangePwd(value) {
    setPwd(value);
  }

  useEffect(() => {
    if (!isLoading) {
      emailRef.current.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, setErrMsg]);

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

                  <form onSubmit={(e) => handleLogin(e, email, pwd)}>
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
                    <p className="text-xs leading-5 md:text-sm mb-2">
                      At Easy Home, we understand the value of convenience,
                      reliability, and quality when it comes to in-home
                      services. Whether you're seeking assistance with household
                      chores, repairs, or specialized tasks, Easy Home is your
                      one-stop destination for connecting with trusted
                      professionals who deliver exceptional service right to
                      your doorstep. 
                      </p>

                      <p className="text-xs leading-5 md:text-sm">
                      Our platform is designed to simplify your
                      life by providing seamless access to a wide range of
                      skilled service providers, all vetted for their expertise,
                      professionalism, and reliability. From cleaning and
                      maintenance to plumbing, electrical work, and more, Easy
                      Home offers a diverse array of services to meet your every
                      need.
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
