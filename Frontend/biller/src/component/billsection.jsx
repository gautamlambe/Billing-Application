import AccountHolderInfo from "./AccountHolderInfo";
import { useState } from "react";
import AddItemSection from "./AddItemSection";
import QuantityFillingSection from "./QuantityFillingSection";
import CartComponent from "./CartComponent";
import SubmitBill from "./SubmitBill";

const Billsection = () =>{
    


    const[itemList,setitemList]=useState([]);
    const[addItem,setaddItem]=useState({});
    const[baki,setbaki]=useState(false);
    const[cartItems,setcartItems]=useState([]);
    const[neededQuantity,setneededQuantity]=useState(0);
    const[totalAmount,settotalAmount]=useState(0);

    return(
        <>
        <div className="w-full  bg-yellow-300  text-center"> bill section</div>
       {/* for account Holder Details */}
        <div className="w-full ">

           <AccountHolderInfo />
        </div>
        {/* Items ADD Section */}
        <div
             className="w-full bg-white">

               <AddItemSection itemList={itemList} setitemList={setitemList} addItem={addItem} setaddItem={setaddItem}/> 
               <QuantityFillingSection addItem={addItem} setaddItem={setaddItem} cartItems={cartItems} setcartItems={setcartItems} neededQuantity={neededQuantity}  setneededQuantity={setneededQuantity}/>
               <CartComponent cartItems={cartItems} neededQuantity={neededQuantity} settotalAmount={settotalAmount} />
               <SubmitBill totalAmount={totalAmount}/>

        </div>
        </>
    );
}
export default Billsection;
