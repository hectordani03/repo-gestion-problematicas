const NotFoundMessage = ({ tableName }) => (
  <div className="flex flex-col items-center w-full min-h-screen justify-center px-4">
    <div className="text-center border border-red-300 bg-red-50 text-red-600 p-6 rounded-lg shadow-sm max-w-md">
      <h2 className="text-4xl font-semibold mb-6">Tabla no encontrada</h2>
      <p className="text-xl">
        La tabla <strong className="break-words">"{tableName}"</strong> no fue encontrada.
      </p>
      <p className="text-xl mt-2">
        Verifica la URL o contacta al administrador.
      </p>
    </div>
  </div>
);

export default NotFoundMessage;
