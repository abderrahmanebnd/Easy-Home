import { IoIosAnalytics } from "react-icons/io";

function Statistics({ children, numCols}) {
  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-lg text-primaryColor sm:text-2xl">General Stats</h3>
        <IoIosAnalytics className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section
        className={`mb-8 grid grid-cols-1  gap-4  rounded-2xl bg-customGray p-5 md:grid-cols-${numCols}`}
      >
       {children} 
      </section>
    </>
  );
}

export default Statistics;
