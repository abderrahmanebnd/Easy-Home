import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-xl">this page is unavailable please move back 😔</p>
      <span
        onClick={() => navigate(-1)}
        className="cursor-pointer text-blue-600  hover:underline"
      >
        &larr;Go Back
      </span>
    </div>
  );
}

export default PageNotFound;
