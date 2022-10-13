import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Header from "../components/Header";

function Addhospital({ submit }) {
  const [hospital, setHospital] = useState({
    name: "",
    location: "",
    services: "",
    address: "",
    contact: "",
  });

  const handler = (event) => {
    setHospital((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(hospital);
  };
  return (
    <>
      
      
      <div className="formContainer">
        <h3>Add New Hospital</h3>
        <form>
          <fieldset>
            <legend>Hospital Data</legend>
            <div className="names">
              <div className="form-group">
                <label>
                  Name
                  <input
                    name="name"
                    value={hospital.name}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="form-group">
                <label>
                  Location
                  <input
                    name="location"
                    value={hospital.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  {" "}
                 Services
                  <input
                    name="menu"
                    type="type"
                    value={hospital.services}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Address
                  <input
                    name="address"
                    value={hospital.address}
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
                    value={hospital.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="btn btn-info" onClick={handleForm}>
            Add a Hospital
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addhospital;
