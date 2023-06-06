const Button = ({ children }) => {
  return (
    <button className="bg-rose-500 font-bold py-3 px-8 text-slate-50 text rounded-md hover:-translate-y-1 hover:scale-110 transition">
      {children}
    </button>
  );
};

export default Button
