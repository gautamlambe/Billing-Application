import { useEffect } from "react";

const CartComponent = ({cartItems,neededQuantity,settotalAmount})=>{
    // const calculateTotalAmount=()=>{

    //     let total=0;
    //     cartItems.forEach((item)=>{
    //         total+=item.price*neededQuantity;
    //     })
    //     settotalAmount(total);

    // }
    useEffect(()=>{
        let total=0;
        cartItems.forEach((item)=>{
            total+=item.price*neededQuantity;
        });
        settotalAmount(total);
    },[cartItems]);
    return(
        
        <div className="w-full min-h-[40vh] bg-gray-200 mt-2 p-2 border-2 border-black">
            <div className="grid grid-cols-5 gap-4 text-center font-bold border-b-2 border-black pb-2 mb-2">
                <div className="border-2 border-black rounded w-[100px]">
                    SR.NO
                </div>
                <div className="border-2 border-black rounded">
                    Name
                </div>
                <div className="border-2 border-black rounded">
                    Quantity
                </div>
                <div className="border-2 border-black rounded">
                   Unit Price
                </div>
                <div className="border-2 border-black rounded">
                   Total Price
                </div>
            </div> 
            {cartItems.length>0 && cartItems.map((item,index)=>(
                <div className="grid grid-cols-5 gap-4 text-center font-bold border-b-2 border-black pb-2 mb-2 bg-white">
                <div className="border-2 border-black rounded w-[100px]">
                    {index+1}
                </div>
                <div className="border-2 border-black rounded">
                    {item.name}
                </div>
                <div className="border-2 border-black rounded">
                    {item.quantity}
                </div>
                <div className="border-2 border-black rounded">
                    {item.price}
                </div>
                 <div className="border-2 border-black rounded">
                    {item.price*item.quantity}
                </div>
            </div> 


            )            )
            }  
            

        </div>
        
    );
}
export default CartComponent;