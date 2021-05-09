import React,{useState} from "react";
export const ContactContext = React.createContext()
export const ContactProvider =({children})=>{

const data = [
    {
      key: 1,
      title:"Achina",
      email:"xyz@yahoo.com",
      favourites:true
    },
    {
      key:2,
      title:"Ria",
      email:"xyz@gmail.com",
      favourites:false
    },
    {
      key:3,
      title:"Barbie",
      email:"abc@yahoo.com",
      favourites:false
    },
    {
      key:6,
      title:"princess",
      email:"abc@gmail.com",
      favourites:true
    },
    {
      key:5,
      title:"Ariel",
      email:"ryz@yahoo.com",
      favourites:true
    }

  ]
  const[contactInfo,setContactInfo]=useState(data)
  

 
  return (
    <ContactContext.Provider value={[contactInfo,setContactInfo]}>
        {children}
    </ContactContext.Provider>
  )
}