function Buttons({ children }) {
  return (
    <div
      className=" flex flex-col 
    items-center gap-3 rounded-2xl bg-customGray 
    p-4 w-full sm:flex-row sm:gap-6 md:col-start-1 md:col-end-3 lg:p-5"
    >
      {children}
    </div>
  );
}

export default Buttons;
