import React, { useState } from "react";
 import Footer from "../components/Footer";
  import Header from "../components/Header";

function Addschool({ submit }) {
  const [school, setSchool] = useState({
    name: "",
    location: "",
    category: "",
    address: "",
    contact: "",
  });

  const handler = (event) => {
    setSchool((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(school);
  };
  return (
    <>
      
      <Header />
      <div className="formContainer">
        <h3>Add New School</h3>
        <form>
          <fieldset>
            <legend>School data</legend>
            <div className="names">
              <div className="N">
                <label>
                  Name
                  <input
                    name="name"
                    value={school.name}
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
                    value={school.location}
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
                    value={school.category}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Address
                  <input
                    name="address"
                    value={school.address}
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
                    value={school.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="form" onClick={handleForm}>
            Add a School
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addschool;
