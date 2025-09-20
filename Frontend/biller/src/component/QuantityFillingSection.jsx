const QuantityFillingSection = ({ addItem, setaddItem,cartItems,setcartItems, neededQuantity, setneededQuantity}) => {
   
    class CartClass{
            constructor(id,name,price,expiry_date,quantity){
                this.id=id;
                this.name=name;
                this.price=price;
                this.expiry_date=expiry_date;
                this.quantity=quantity;
            }
        }

   const handleonClickOnAdd=()=>{

    const cart = new CartClass(addItem.id,addItem.name,addItem.price,addItem.expiry_date,neededQuantity);

    //const array=[...cartItems,addItem];
    const array=[...cartItems,cart];
    setcartItems(array);


   }
   const onchangeInput=(e)=>{
   
    setneededQuantity(e.target.value);

   }
    return (
        <>

        <div className="w-full bg-white mt-2 p-2  flex flex-row border-2 border-black ">
            <label className="m-2 p-1">Quantity:</label>
            <input type="number" className="m-2 p-1 border-2 border-black rounded" onChange={(e)=>onchangeInput(e)} />
            <button className="m-2 w-[30%] p-1 border-2 border-black rounded bg-green-300" onClick={()=>handleonClickOnAdd()}>Add</button>
        </div>
        </>

    );
}
export default QuantityFillingSection;