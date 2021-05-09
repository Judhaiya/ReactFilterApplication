import React,{useState,useContext} from 'react'
import {ContactContext} from './context'

export default function ViewState({editState,setEditState}) {
    const [contactInfo,setContactInfo] =useContext(ContactContext)
    const[name,setName]=useState("")
    const getId =(key)=>{
        if (editState) {
    const specifickey= contactInfo.find((contact)=>contact.key === key)
    setName(specifickey.title)
        }
    
    }
    return (
        <div>
            <input type="checkbox" />
        <label htmlFor=""></label>
        <button onClick={()=>setEditState(true)}className="edit">Edit</button>
        </div>
    )
}
