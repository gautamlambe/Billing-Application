import FinalPrintBill from "./FinalPrintBill";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InvoicePrint from "./InvoicePrint";



const Printbill = ({ cartItems = [], Accountholder,totalAmount = 0 }) => {
  // debug: show incoming props
  console.log("Printbill props:", { cartItems, totalAmount });

  const printRef = useRef(null);

  
const handlePrint=useReactToPrint({
        contentRef:printRef,
         documentTitle: "Bill_Receipt",
    });

  return (
    <>
      <button
        className="min-w-[200px] border-2 border-black m-2 p-2 bg-blue-300 rounded"
        onClick={handlePrint}
      >
        Print
      </button>
       <InvoicePrint cartItems={cartItems} Accountholder={Accountholder} ref={printRef} />
     
      
    </>
  );
};

export default Printbill;