import { forwardRef, useRef } from "react";

const InvoicePrint = forwardRef((props, ref) => {

  const totalAmount = props.cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <>
      {/* INLINE PRINT CSS */}
      <style>
        {`
          .print-only {
            display: none;
          }

          @media print {
            .print-only {
              display: block;
            }

            button {
              display: none;
            }
             @page {
              size: 210mm 148.5mm; /* HALF A4 */
              margin: 8mm;
            }

          }
            
        `}
      </style>

      <div
        ref={ref}
        className="print-only"
        style={{
          width: "100%",
          height: "100%",
          padding: "8px",
          border: "1px solid black",
          fontFamily: "Arial",
          fontSize: "12px",
          boxSizing: "border-box"
        }}
      >
        {/* ===== HEADER ===== */}
        <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
          Laxmi Agro Service And Hardware
        </h2>
        <h3 style={{ textAlign: "center", marginTop: "0" }}>
          Bill Receipt
        </h3>

        <div style={{ borderBottom: "1px solid black", paddingBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p><b>Name:</b> {props.Accountholder?.name}</p>
              <p><b>Address:</b> Nashik, Maharashtra</p>
              <p><b>Contact No:</b> 9876543210</p>
            </div>

            <div>
              <p><b>Bill No:</b> 101</p>
              <p><b>Date:</b> {new Date().toLocaleDateString()}</p>
              <p><b>Outstanding:</b> ₹{props.Accountholder?.outstanding}</p>
            </div>
          </div>
        </div>

        {/* ===== ITEM DETAILS ===== */}
        <div style={{ marginTop: "12px" }}>
          <table
            width="100%"
            border="1"
            cellPadding="6"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
             
              
              {props.cartItems.map((item, index) => (
                <tr key={index}>
                  <td align="center">{index +1}</td>
                  <td>{item.name}</td>
                  <td align="center">{item.quantity}</td>
                  <td align="center">₹{item.price}</td>
                  <td align="center">₹{item.quantity * item.price}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>

        {/* ===== TOTAL SUMMARY ===== */}
        <div style={{ marginTop: "12px", textAlign: "right" }}>
          <p><b>Sub Total:</b> ₹0</p>
          <p><b>GST :</b> ₹0</p>
          <h3><b>Grand Total:</b> ₹{totalAmount}</h3>
        </div>
      </div>
    </>
  );
});

export default InvoicePrint;
