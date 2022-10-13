import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Header from "../components/Header";

function Addcommercial({ submit }) {
  const [commercial, setCommercial] = useState({
    name: "",
    location: "",
    menu: "",
    address: "",
    contact: "",
  });

  const handler = (event) => {
    setCommercial((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(commercial);
  };
  return (
    <>
      
      
      <div className="formContainer">
        <h3>Add New Commercial Property</h3>
        <form>
          <fieldset>
            <legend>Commercial Property Data</legend>
            <div className="names">
              <div className="N">
                <label>
                  Name
                  <input
                    name="name"
                    value={commercial.name}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="W">
                <label>
                  Location
                  <input
                    name="location"
                    value={commercial.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="Y">
                <label>
                  {" "}
                 Category
                  <input
                    name="category"
                    type="type"
                    value={commercial.category}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Address
                  <input
                    name="address"
                    value={commercial.address}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Contact
                  <input
                    name="contact"
                    value={commercial.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="fbtn btn-btn-secondary" onClick={handleForm}>
            Add a Commercialproperty
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addcommercial;
