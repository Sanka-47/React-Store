import React from 'react'
import { useState } from 'react'

export function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
function handleSubmit(){

}

  return (
    <>
    <h1>Contact Us Below</h1>
    <input placeholder='Name' onChange={(e) => setName(e.target.value) } />
    <input placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder='Question/Comment'  onChange={(e) => setComment(e.target.value)}/>
    <button onClick={()=>handleSubmit()}>Submit</button>
    </>
  )
}

