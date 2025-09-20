const SubmitBill =({totalAmount})=>{
    return(
        <>
        <div className="w-full bg-white mt-2 p-2 flex flex-row-reverse border-2 border-black ">
            
            <label className="border-2 border-black m-2 p-2 min-w-[150px] text-center "> {totalAmount}</label>
            <label className="border-2 border-black m-2 p-2">Total Amount :</label>
            <button className="min-w-[200px] border -2 border-black m-2 p-2 bg-green-300 rounded">Save</button>
            <button className="min-w-[200px] border -2 border-black m-2 p-2 bg-red-300 rounded">Print</button>

        </div>

        
        
        
        </>

    )
}

export default SubmitBill;