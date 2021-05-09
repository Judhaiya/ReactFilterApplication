import React,{useState,useContext} from 'react'
import {ContactContext} from './context'
import EditState from "./EditState"
import ViewState from "./ViewState"

export default function Edit({input,setInput}) {
    const [contactInfo,setContactInfo] =useContext(ContactContext)
    const[editState,setEditState]=useState(false)
    function editTask(key, title) {
        const editedTaskList = contactInfo.map(contact => {
        // if this task has the same ID as the edited task
          if (contactInfo.key=== contact.Key) {
            //
            return {...contact, title:title}
          }
          return contact;
        });
        setContactInfo(editedTaskList);
      }
      
   
    
    return (
        <div>
         {editState?<EditState editState={editState} setEditState={setEditState} />:<ViewState editState={editState} setEditState={setEditState} />} 
        </div>
    )
}
