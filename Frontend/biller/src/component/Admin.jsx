import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Admin =()=>{
    class AccHolderInfo{
        constructor(name,mobile,adhar,contactperson,address){
            this.name=name;
            this.mobile=mobile;
            this.adhar=adhar;
            this.contactperson=contactperson;
            this.address=address;
            
        }
    }
    class Item{
        constructor(itemname,price,quantity,expirydate){
            this.itemname=itemname;
            this.price=price;
            this.quantity=quantity;
            this.expirydate=expirydate;
        }
    }
    const[data,setdata]=useState(new AccHolderInfo("","","","",""));
    const handleonChangeOnTextBox=(e)=>{
        const {name,value}=e.target;
        setdata({...data,[name]:value});
        console.log(data);
    }
    const [ItemData,setItemData]= useState(new Item("",0,0,""));
    const handleonChangeOnItemTextBox=(e)=>{
        console.log(e.target);
        const{name,value}=e.target;
        console.log(name+" : "+value);
        setItemData({...ItemData,[name]:value});
        console.log(ItemData);
    }


    const handleonClickOnSave=()=>{
        console.log(data);
        alert("Saved Successfully"+data.name);

        axios.post("http://localhost:8080/accholderinfo/save",data).then((Response)=>{
            console.log(Response.data);
        })
        setdata(new AccHolderInfo("","","","",""));

    }

    const handleonClickAddItem=()=>{
        console.log(ItemData);
        
        axios.post("http://localhost:8080/Items/add",ItemData).then((Response)=>{
            console.log(Response.data);
        })
        alert("Item Added Successfully");
    }

    return(
        <div className="w-full h-screen bg-gray-300 text-center items-center flex flex-col border-2 border-black">
            <div className=" flex flex-row">
           <div className="bg-blue-300 w-[200px] text-center item-center p-2  m-2  font-bold border-4 border-yellow-500 ">
            ADMIN SECTION
            </div>
            <Link to="/" className="item-center text-center absolute right-2  p-2  m-2  font-bold hover:text-blue-500">Home</Link>
            </div>

            <div className="w-full min-h-[40%] bg-white m-2 border-2 border-black content-center">
               <div className="mb-4 font-bold border-2 border-blue bg-gray-500 text-yellow-500"> Customer ADD Section </div>
                <div>
                <label className="m-2 p-1 font-bold border-2 border-black">Account Holder Name -</label>
                <input type="text" name="name" value={data.name} onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2 w-[30%]"/>
                </div>
                <div>
                    <label className="m-2 p-1 font-bold border-2 border-black ">Mobile No-</label>
                    <input type="number" value={data.mobile} name="mobile" onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2 text-center item-center"/>
                    <label className="m-2 p-1  font-bold border-2 border-black">AdharCard No-</label>
                    <input type="number" value={data.adhar} name="adhar" onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2"/>
                    <label className="m-2 p-1 font-bold border-2 border-black">Contact Person-</label>
                    <input type="text" value={data.contactperson} name="contactperson" onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2"/>

                </div>
                <div>

                    <label className="m-2 p-1 font-bold border-2 border-black">Address-</label>
                    <input type="text" name="address" value={data.address} onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2 w-[50%]"/>
                </div>
                <button onClick={()=>handleonClickOnSave()} className="m-2 p-1 border-2 border-black bg-green-300 rounded w-[100px]">Save</button>


            </div>
            <div className="w-full min-h-[40%] bg-white m-2 border-2 border-black flex flex-col items-center">
                <div className="mb-4  w-screen font-bold border-2 border-blue bg-gray-500 text-yellow-500"> Item ADD Section </div>
                
                <div className="w-full flex justify-center">
                <label className="w-[10%] m-2 p-1 font-bold border-2 border-black">Item Name -</label>
                <input type="text" value={ItemData.itemname} name="itemname" onChange={(e)=>handleonChangeOnItemTextBox(e)} className="border-2 border-black m-2 w-[30%] text-center"/>
                </div>
                <div>
                <label className="m-2 p-1 font-bold border-2 border-black">Price -</label>
                <input type="number" value={ItemData.price} name="price" onChange={(e)=>handleonChangeOnItemTextBox(e)} className="border-2 border-black m-2 text-center"/>
                <label className="m-2 p-1  font-bold border-2 border-black">Quantity -</label>
                <input type="number" value={ItemData.quantity} name="quantity" onChange={(e)=>handleonChangeOnItemTextBox(e)} className="border-2 border-black m-2 text-center"/>
                <label className="m-2 p-1 font-bold border-2 border-black">Expiry Date -</label>
                <input type="date" value={ItemData.expirydate} name="expirydate" onChange={(e)=>handleonChangeOnItemTextBox(e)} className="border-2 border-black m-2"/>
                </div>
                
                <button onClick={()=>handleonClickAddItem()} className="m-2 p-1 border-2 border-black bg-green-300 rounded w-[100px] justify-contain items-center">ADD</button>
            </div>
        </div>
    )
}
export default Admin;