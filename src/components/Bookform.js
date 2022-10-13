import React, {useState}from 'react'
import Footer from './Footer';


function Bookform({submit}) {
 
    const [bookform, setBookform] = useState({
        fullname: "",
        contact: "",
        location: "",
        servicename: "",
      });
    
      const handler = (event) => {
        setBookform((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };
      const handleForm = (e) => {
        e.preventDefault();
        submit(Bookform);
      };
    return (
    <>
    <div className="formContainer">
        <h3>ORDER A SERVICE</h3>
        <form>
          <fieldset>
            <legend>Fill the empty boxes with correct information</legend>
            <div className="names">
              <div className="form-group">
                <label>
                  Fullname
                  <input
                    name="fullname"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="form-group">
                <label>
                  Contact
                  <input
                    name="contact"
                    type="tel"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  {" "}
                 Location
                  <input
                    name="location"
                    type="type"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Service name
                  <input
                    name="service"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="btn btn-info" onClick={handleForm}>
            Book here
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Bookform