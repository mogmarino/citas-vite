const Error = ({ children }) => {
  return (
    <div className="bg-red-800 font-bold text-center text-white rounded-md p-3 mb-4 uppercase">
      {children}
    </div>
  );
};

export default Error;
