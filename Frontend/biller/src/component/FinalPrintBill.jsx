import React from "react";
const FinalPrintBill = React.forwardRef(({ cartItems = [], totalAmount }, ref) => {
  const computedTotal =
    typeof totalAmount === "number"
      ? totalAmount
      : cartItems.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.quantity || 0)), 0);

  return (
    <div ref={ref} style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Final Bill</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>SR NO</th> 
                    <th style={{ border: '1px solid black', padding: '8px' }}>Item Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Unit Price</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item, index) => (
                    <tr key={item.id ?? index}>
                        <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{index + 1}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                        <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
                        <td style={{ border: '1px solid black', padding: '8px', textAlign: 'right' }}>{item.price}</td>
                        <td style={{ border: '1px solid black', padding: '8px', textAlign: 'right' }}>{(Number(item.price || 0) * Number(item.quantity || 0)).toFixed(2)}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="4" style={{ border: '1px solid black', padding: '8px', textAlign: 'right', fontWeight: 'bold' }}>Total Amount</td>
                    <td style={{ border: '1px solid black', padding: '8px', textAlign: 'right', fontWeight: 'bold' }}>{computedTotal.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
});
export default FinalPrintBill;