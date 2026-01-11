import { useState,useEffect } from "react";
import axios from "axios";

const AccountHolderInfo = ({Accountholder, setAccountholder}) => {

    const[accountholderinfo,setaccountholderinfo]=useState([]);
    const[query,setquery]=useState("");
   
   
    
    useEffect(()=>{
        if(query===""){
        setaccountholderinfo([]);
        return;
        }
        
        axios.get('http://localhost:8080/accountsholder/name/'+query,{
             headers: {
          "Authorization": "Basic " + btoa("gautam:root")
        }
        }).then((Response)=>{
            setaccountholderinfo(Response.data);
        });
    },[query])
    

    const onchangeTextBox=(e)=>{
        console.log(e.target.value);
        setquery(e.target.value);
    }
    const onclicklist=(info)=>{
        console.log("SetAccountHolder:",setAccountholder);
        setquery(info.name);
        setaccountholderinfo([]);
        setAccountholder(info);
       
    }

    return (
        <>
        <div className="w-full flex flex-row border-2 border-black">
         <div className="w-[50%] mr-0 border-2 border-black  items-center  p-2 flex flex-row">

            <label className="w-[30%] border-black border-2 ml-1 p-1">Account Holder -</label>
            <div className="w-[80%] relative">
            <input type="text" className=" w-[90%] border-2 border-black rounded p-1 m-2 bg-white" value={query} onChange={(e)=>onchangeTextBox(e)}/>
            {
            accountholderinfo.length>0 && query!=="" &&  !accountholderinfo.some((info)=>info.name===query) && (
            <ul className="absolute bg-white border-2 border-gray-300 shadow z-10">
                 {accountholderinfo.map((info)=>(
                 <li key={info.id} onClick={()=>onclicklist(info)}
                 className="cursor-pointer hover:bg-yellow-100 p-1 "
                 >{info.name}</li>
            ))
            }
            </ul>
            )}
            </div>
            </div>
            <div className="w-[50%] ml-0 border-2 border-black flex flex-row justify-center items-center  p-2">
                <label className="Font-bold">OutStanding:</label>
                <div>
                    {Accountholder?.outstanding}
                </div>
            </div>
        </div>
        </>

    );
}
export default AccountHolderInfo;