import React,{useContext,useState} from 'react';
import {ContactContext} from './context';
import Edit from "./Edit";

export default function Favourite({input,setInput}) {
    const [contactInfo,setContactInfo] =useContext(ContactContext)
   
  
  const DeleteContact =(key)=>{
   const Remaining = contactInfo.filter((trash) => trash.key !== key);
   setContactInfo(Remaining)
  }
   
    
    return (
           
           <div className="flex-container">
            
            {contactInfo.map(contactname=>(<div key={contactname.key}>
              <div className="info-container">
                <p className="title">{contactname.title}</p>
                <p className="email">{contactname.email}</p>
               <button className="favor"><i class="fa fa-heart" aria-hidden="true"></i></button>
                <button onClick={()=>DeleteContact(contactname.key)} className="trash-button">Trash</button>
                <Edit input  ={input} setInput ={setInput}/>
                </div>
                </div>))}
            
            
            
            </div>
           
        
    )
}
