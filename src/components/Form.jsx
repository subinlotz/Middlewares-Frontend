import React, { useState } from 'react'
import { handleSubmit } from '../utils/HandleApi'

function Form() {
  const [response, setResponse] = useState(null)
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prevData)=>{
      return(
        {
          ...prevData,
          [name]:value
        }
      )
    })
  }

  return (
    <div >
      <form onSubmit={(e)=>handleSubmit(e,setResponse,formdata)}>
        <input name="name" type="text" placeholder='Enter Your Name' onChange={handleChange} />
        <br />
        <input name="email" type="email" placeholder='Enter Your Email' onChange={handleChange} />
        <br />
        <input name="message" type="text" placeholder='Enter Your Message' onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>   
      </form>
      <h2>Response:</h2>
       {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  )
}

export default Form
