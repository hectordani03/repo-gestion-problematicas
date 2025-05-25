import { useState } from "react";
import BiCopy from '@/assets/icons/BiCopy'

const CopyToClipboard = ({ children, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative inline-flex items-center group">
      {children}
      <button
        type="button"
        onClick={handleCopy}
        className="ml-1 p-1 rounded hover:bg-gray-200 transition"
        title="Copiar al portapapeles"
      >
        {copied ? (
          <BiCopy size={"12"} color={"fill-gray-400"} />
        ) : (
          <BiCopy size={"12"} color={"fill-gray-800"} />
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
