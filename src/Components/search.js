import React,{useState,useContext} from 'react'
import {ContactContext} from "./context"
import Favourite from "./Favourite"
export default function Search() {
    const[contactInfo,setContactInfo]=useContext(ContactContext)
    const[input,setInput]=useState("")
    const[email,setEmail] = useState("")
    
  const key = contactInfo.map(keyItem=>keyItem.key)
   
    const addContact = ()=>{
        if(!input == ""){
        setContactInfo([...contactInfo,{title:input,email:email}])
        console.log(contactInfo)
        
        
        }
       setInput('')
       setEmail("")
       }
        
    
    const handleclear=()=>{
        setContactInfo([])
    }
    
    return (
        <div className="search-component">
            <label htmlFor="">Name</label>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="text"onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={()=>addContact()} className="favourite">Add Contact</button>
        <select onChange= {(e)=>console.log(e.target.value)} name="">
            <option value="all">all</option>
            <option key ={key}value="favoutie">Favourite</option>
          </select>
          <button onClick={()=>handleclear()} className="clear">Clear</button>
        <Favourite input ={input,setInput}/>
       
        
        </div>
    )
}
