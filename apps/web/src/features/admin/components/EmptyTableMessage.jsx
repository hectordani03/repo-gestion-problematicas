const EmptyTableMessage = ({ tableName }) => (
  <div className="flex flex-col items-center w-full min-h-screen justify-center px-4">
    <div className="text-center border border-yellow-300 bg-yellow-50 text-yellow-700 p-6 rounded-lg shadow-sm max-w-md">
      <h2 className="text-4xl font-semibold mb-2">Tabla vacía</h2>
      <p className="text-xl">
        La tabla <strong className="break-words">"{tableName}"</strong> existe, pero no tiene campos ni registros definidos aún.
      </p>
      <p className="text-xl mt-2">
        Es posible que esta funcionalidad esté en desarrollo o incompleta.
      </p>
    </div>
  </div>
);

export default EmptyTableMessage;
