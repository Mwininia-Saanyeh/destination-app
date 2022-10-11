import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Header from "../components/Header";

function Addhotel({ submit }) {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    menu: "",
    address: "",
    contact: "",
  });

  const handler = (event) => {
    setHotel((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(hotel);
  };
  return (
    <>
      
      <Header />
      <div className="formContainer">
        <h3>Add New Hotel</h3>
        <form>
          <fieldset>
            <legend>Hotel Data</legend>
            <div className="names">
              <div className="N">
                <label>
                  Name
                  <input
                    name="name"
                    value={hotel.name}
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
                    value={hotel.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="Y">
                <label>
                  {" "}
                 Services
                  <input
                    name="services"
                    type="type"
                    value={hotel.services}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Address
                  <input
                    name="address"
                    value={hotel.address}
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
                    value={hotel.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="form" onClick={handleForm}>
            Add a Hotel
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addhotel;
