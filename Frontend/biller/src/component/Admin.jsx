import axios from "axios";
import { useState } from "react";

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
    const[data,setdata]=useState(new AccHolderInfo("","","","",""));
    const handleonChangeOnTextBox=(e)=>{
        const {name,value}=e.target;
        setdata({...data,[name]:value});
        console.log(data);
    }

    const handleonClickOnSave=()=>{
        console.log(data);
        alert("Saved Successfully"+data.name);

        axios.post("http://localhost:8080/accholderinfo/save",data).then((Response)=>{
            console.log(Response.data);
        })
        setdata(new AccHolderInfo("","","","",""));

    }

    return(
        <div className="w-full h-screen bg-gray-300 text-center items-center flex flex-col border-2 border-black">
            <div className="bg-blue-300 w-[200px] text-center item-center p-2  m-2  font-bold border-4 border-yellow-500">
            ADMIN SECTION
            </div>
            <div className="w-full min-h-[40%] bg-white m-2 border-2 border-black content-center">
                <div>
                <label className="m-2 p-1 font-bold border-2 border-black">Account Holder Name -</label>
                <input type="text" name="name" value={data.name} onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2 w-[30%]"/>
                </div>
                <div>
                    <label className="m-2 p-1 font-bold border-2 border-black ">Mobile No-</label>
                    <input type="number" value={data.mobile} name="mobile" onChange={(e)=>handleonChangeOnTextBox(e)} className="border-2 border-black m-2"/>
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
            <div className="w-full min-h-[40%] bg-white m-2 border-2 border-black">
                

                <label className="m-2 p-1 font-bold border-2 border-black">Item Name -</label>
                <input type="text" className="border-2 border-black m-2 w-[30%]"/>
                <label className="m-2 p-1 font-bold border-2 border-black">Price -</label>
                <input type="number" className="border-2 border-black m-2"/>
                <label className="m-2 p-1  font-bold border-2 border-black">Quantity -</label>
                <input type="number" className="border-2 border-black m-2"/>
                <label className="m-2 p-1 font-bold border-2 border-black">Expiry Date -</label>
                <input type="date" className="border-2 border-black m-2"/>
                <button className="m-2 p-1 border-2 border-black bg-green-300 rounded w-[100px]">ADD</button>
            </div>
        </div>
    )
}
export default Admin;