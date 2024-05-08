import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/login", { replace: true });

  return (
    <section>
      <h1 className="my-5 text-center text-4xl text-red-600">Unauthorized</h1>
      <br />
      <p className="text-center">
        You do not have access to the requested page.
      </p>
      <br />
      <button
        onClick={goBack}
        className="m-auto block w-1/2   rounded-lg border border-slate-300 py-1 text-center text-2xl font-semibold text-red-600 hover:bg-slate-50 hover:underline"
      >
        Go Back
      </button>
    </section>
  );
};

export default Unauthorized;
