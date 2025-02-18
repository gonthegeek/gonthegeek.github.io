import React from "react";

function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="print-btn" onClick={handlePrint}>
      Print / Save as PDF
    </button>
  );
}

export default PrintButton;