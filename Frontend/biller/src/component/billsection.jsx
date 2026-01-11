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
    const[Accountholder,setAccountholder]=useState({});
    const[query,setquery]=useState("");

    const handleParentAdd=()=>{
        setquery("");
    }

    return(
        <>
        <div className="w-full  bg-yellow-300  text-center"> bill section</div>
       {/* for account Holder Details */}
        <div className="w-full ">

           <AccountHolderInfo Accountholder={Accountholder} setAccountholder={setAccountholder} />
        </div>
        {/* Items ADD Section */}
        <div
             className="w-full bg-white">

               <AddItemSection itemList={itemList} setitemList={setitemList} addItem={addItem} setaddItem={setaddItem} query={query} setquery={setquery} /> 
               <QuantityFillingSection addItem={addItem} setaddItem={setaddItem} cartItems={cartItems} setcartItems={setcartItems} neededQuantity={neededQuantity}  setneededQuantity={setneededQuantity} handleParentAdd={handleParentAdd} />
               <CartComponent cartItems={cartItems} neededQuantity={neededQuantity} settotalAmount={settotalAmount} />
               <SubmitBill totalAmount={totalAmount} cartItems={cartItems} Accountholder={Accountholder}/>

        </div>
        </>
    );
}
export default Billsection;
