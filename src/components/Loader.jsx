const Loader = () => {
  return (
    <div className="flex">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-custom-bounce-1"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-custom-bounce-2"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full animate-custom-bounce-3"></div>
      </div>
    </div>
  );
};

export default Loader;
