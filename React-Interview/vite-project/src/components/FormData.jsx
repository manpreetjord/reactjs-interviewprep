import React, { useState } from 'react'

const FormData = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    setUserData({...userData,[name]:value  });
      }
  return (
    <div><h3>FormData</h3>
    <h5>
    Q4.Build a form with Firstname,lastname,email . Use only one state to
    manage all fields
  </h5>

  <form onSubmit={(e)=>{
    e.preventDefault();
    console.log(userData);
  }}>
    <label htmlFor="firstname">First Name :</label>
    <input
      type="text"
      name="firstName"
      id="firstname"
      onChange={handleInputChange}
    />
    <label htmlFor="lastname">Last Name :</label>
    <input
      type="text"
      name="lastName"
      id="lastname"
      onChange={handleInputChange}
    />
    <label htmlFor="email">Email :</label>
    <input
      type="email"
      name="email"
      id="email"
      onChange={handleInputChange}
    />
    <button>Submit</button>
  </form>
  </div>
  )
}

export default FormData