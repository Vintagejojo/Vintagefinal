import React, { useState } from "react";
import "./Contactform.css";
import ROUTES from '../constants/apiRoutes';


const Contactform = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: ''
  });

  const updateForm = (event) =>{
    setFormData({ ...formData, [event.target.name]: event.target.value} )
}
// i quit Will Kelly did this
async function handleSubmit(event) {
    event.preventDefault();
    formData.phone_number = Number(formData.phone_number);
    try {
      debugger
    let response = await fetch(ROUTES.postEmailList,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(formData) // body data type must match "Content-Type" header
  })
    let data = await response.json()
    console.log(data);
    console.log(response);
    } catch (error) {
      console.log(error)
    }
    
   
}
console.log(formData)

  return (
    <div>
      <div className="container">
        <div className="row header">
          <h1>CONTACT US &nbsp;</h1>
        </div>
        <div className="row body">
          <form action="#" onSubmit={(e) => handleSubmit(e)}>
            <ul>
              <li>
                <p className="left">
                  <label htmlFor = "first_name">first name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={formData.first_name}
                    onChange={updateForm}
                  />
                </p>
                <p className="lastname_mods">
                  <label htmlFor = "last_name">last name</label>
                  <input type="text" name="last_name" placeholder="Smith" value={formData.last_name}
                    onChange={updateForm} />
                </p>
              </li>
              <p className="lastname_mods">
                <label htmlFor = "phone_number">Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  placeholder="777-777-7777"
                  value={formData.phone_number}
                    onChange={updateForm}
                />
              </p>

              <li>
                <p>
                  <label htmlFor = "email">
                    email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    name="email_address"
                    placeholder="john.smith@gmail.com"
                    value={formData.email_address}
                    onChange={updateForm}
                  />
                </p>
              </li>
              <li>
                <div className="divider"></div>
              </li>

              <li>
                <input className="btn btn-submit" type="submit" value="Submit"  />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
