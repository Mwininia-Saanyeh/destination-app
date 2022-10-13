import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Header from "../components/Header";

function Addeatry({ submit }) {
  const [eatry, setEatery] = useState({
    name: "",
    location: "",
    menu: "",
    address: "",
    contact: "",
  });

  const handler = (event) => {
    setEatery((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(eatry);
  };
  return (
    <>
      
  
      <div className="formContainer">
        <h3>Add New Eatery</h3>
        <form>
          <fieldset>
            <legend>Eatery Data</legend>
            <div className="names form-group">
              <div className="form-group">
                <label>
                  Name
                  <input
                    name="name"
                    value={eatry.name}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names form-group">
              <div className="">
                <label>
                  Location
                  <input
                    name="location"
                    value={eatry.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  {" "}
                 Menu
                  <input
                    name="menu"
                    type="type"
                    value={eatry.menu}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Address
                  <input
                    name="address"
                    value={eatry.address}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Contact
                  <input
                    name="contact"
                    value={eatry.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="btn btn-info" onClick={handleForm}>
            Add an Eatery
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addeatry;
