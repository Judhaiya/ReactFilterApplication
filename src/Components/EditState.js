import React,{useContext} from 'react'
import {ContactContext} from './context'
export default function EditState({editState,setEditState}) {
    const [contactInfo,setContactInfo] =useContext(ContactContext)
    function editTask(key, title) {
        const editedContactList = contactInfo.map(contact => {
        // if this task has the same ID as the edited task
          if ( contact.Key === contactInfo.key) {
            //
            return {...contact, title:key.title}
          }
          return contact;
        });
        setContactInfo(editedContactList);
      }
      
    return (
        <div>
            <form action="">
           <label htmlFor="">Enter the Contact Name</label>
           <input key={contactInfo.map(contactkey=>contactkey.Key)} type="text" />
          <button onClick={()=>setEditState(false)} className="cancel">Cancel</button>
          <button  onClick={()=>editTask()}className="save">Save</button>
       </form>
        </div>
    )
}
