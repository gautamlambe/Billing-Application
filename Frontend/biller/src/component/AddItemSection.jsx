import axios from "axios";
import { useEffect, useState } from "react";


const AddItemSection = ({itemList,setitemList,addItem,setaddItem,query,setquery})=>{

    
    const onchangeTextBox=(e)=>{
        console.log(e.target.value);
        setquery(e.target.value);


    }

    useEffect(()=>{

        axios.get("http://localhost:8080/suggestion/items/"+query).then((Response)=>{

            setitemList(Response.data);

    })},[query]);

    const onclickList=(item)=>{
        setquery(item.name);
        setitemList([]);
        setaddItem(item);
    }
    return(

        <>
        <section className="w-full bg-white mt-2 p-2  flex flex-row border-2 border-black flex flex-row">
        <label className="text-center w-[10%] border-2 border-black p-1 m-2 ">Item Name : </label>
       <div className="w-[30%] border-2 border-black relative">
        <input type="text" className="border-2 border-black rounded p-1 m-2 w-[90%]" value={query} onChange={(e)=>onchangeTextBox(e)}/>
        {itemList.length>0 && query!=="" && !itemList.some((item)=>item.name===query) && (
            <ul className="absolute bg-white border-2 border-gray-300 shadow z-10 w-[40%]">
                 {itemList.map(
                    (item)=>
                        (
                    <li key={item.id}
                    className="cursor-pointer hover:bg-yellow-100 p-1 "
                    onClick={(e)=>onclickList(item)}
                    >{item.name}</li>
                 )
                )
                    }
            </ul>
        )}
        </div>
        <div className="w-[50%] border-2 border-black p-1 m-2 flex flex-row">
            <label className="m-2 p-1">Expiry Date :</label>
            <label className="m-2 p-1 min-w-[100px] border-2 border-black">{addItem.expiry_date}</label>
            <label className="m-2 p-1 " >Price :</label>
            <label className="m-2 p-1 min-w-[100px] border-2 border-black">{addItem.price}</label> 
            <label className="m-2 p-1">Stock :</label>
            <label className="m-2 p-1 min-w-[100px] border-2 border-black">{addItem.Stock}</label>
        </div>
         
         
        </section>
        </>
    );
    }

export default AddItemSection;