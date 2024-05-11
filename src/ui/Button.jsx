function Button({ children, onClick, color = "blue" ,disabled}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-full bg-${color}-700 py-1 uppercase tracking-wide text-slate-100 transition-all duration-300 hover:bg-${color}-600 focus:bg-${color}-600 focus:outline-none focus:ring-4 focus:ring-offset-2 sm:p-2 lg:p-3`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
