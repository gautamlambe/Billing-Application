import Printbill from "./Printbill";
const SubmitBill =({totalAmount,cartItems,Accountholder})=>{
    return(
        <>
        <div className="w-full bg-white mt-2 p-2 flex flex-row-reverse border-2 border-black ">
            
            <label className="border-2 border-black m-2 p-2 min-w-[150px] text-center "> {totalAmount}</label>
            <label className="border-2 border-black m-2 p-2">Total Amount :</label>
            <button className="min-w-[200px] border -2 border-black m-2 p-2 bg-green-300 rounded">Save</button>
            <Printbill  cartItems={cartItems} Accountholder={Accountholder} />

        </div>

        
        
        
        </>

    )
}

export default SubmitBill;