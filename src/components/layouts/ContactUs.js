import { useState } from "react";

const ContactUs = (props) => {
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    async function submitHandler(e){
        e.preventDefault()
        const newUser={
            name:userName,
            phoneNo:phone,
            mail:email
        }
        setEmail('')
        setPhone('')
        setUserName('')
        try{
            const response = await fetch('https://ecommerce-44d17-default-rtdb.firebaseio.com/users.json',{
                method:'POST',
                body:JSON.stringify(newUser),
                headers:{'Content-Type':'application/json'}
            })
            if(!response.ok){
                throw new Error('Something went wrong...')
            }
        
        }catch(error){
            console.log(error)
        }
         
    }
  return (
    <form onSubmit={submitHandler}>
        <div>Contact Us</div>
        <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <label>Phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) =>setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactUs;
