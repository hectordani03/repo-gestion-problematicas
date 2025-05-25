import BiCoBiArrowClockwisepy from '@/assets/icons/BiArrowClockwise'

const TableResetButton = ({ handleReset }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="text-sm font-medium text-gray-600">Resetear filtros</span>
      <button
        onClick={handleReset}
        className="p-1 hover:bg-gray-100 rounded-full transition shadow-sm"
      >
        <BiCoBiArrowClockwisepy size={"15"} color={"fill-gray-800"} />
      </button>
    </div>
  );
};

export default TableResetButton;
