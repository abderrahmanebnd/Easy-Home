function CustomInput({ children, type, value, setValue, refType }) {
  return (
    <div className="relative my-6 ">
      <input
        type={type}
        value={value}
        ref={refType}
        onChange={(e) => setValue(e.target.value)}
        id={`floating_outlined_${type}`}
        className="peer block w-full appearance-none rounded-lg  border border-slate-400 bg-transparent px-4 pb-2.5 pt-4 text-slate-800 focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor="floating_outlined"
        className="absolute  start-1  top-2 z-10 origin-[0] -translate-y-5 scale-75 transform bg-white px-2  text-gray-700 duration-300 peer-placeholder-shown:top-1/2  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-orange-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {children}
      </label>
    </div>
  );
}

export default CustomInput;
