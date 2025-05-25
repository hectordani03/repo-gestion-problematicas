const LoadingMessage = () => (
  // flex flex-col items-center w-full min-h-screen pt-10
  <div className="flex flex-col items-center w-full min-h-screen justify-center">
    <span className="h-30 w-30 border-4 border-t-transparent rounded-full animate-spin mb-4" />
    <p className="text-xl text-gray-500 animate-pulse">Cargando datos, por favor espera...</p>
  </div>
);

export default LoadingMessage;
