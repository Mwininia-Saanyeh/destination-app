import React, {useState}from 'react'
import Footer from './Footer';

function Orderform({submit}) {
    const [orderform, setOrderform] = useState({
        fullname: "",
        contact: "",
        location: "",
        servicename: "",
      });
    
      const handler = (event) => {
        setOrderform((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };
      const handleForm = (e) => {
        e.preventDefault();
        submit(Orderform);
      };
  return (

    <div>
        <>
      
      
      <div className="formContainer">
        <h3>ORDER HERE</h3>
        <form>
          <fieldset>
            <legend>After you fill out this order request, we will contact you to verify 
        the details and availability before the order is completed.
         We work everyday from 8:30am to 8:30pm</legend>
            <div className="names">
              <div className="N">
                <label>
                Are you a new or existing customer?

                  <input
                    name="name"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="W">
                <label>
                What is the item you would like to order?
                  <input
                    name="location"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="Y">
                <label>
                  {" "}
                  Where do you want your product delivered?
                  <input
                    name="menu"
                    type="type"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                Your full name

                  <input
                    name="address"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                Any additional information?

                  <input
                    name="address"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  Phone Number
                  <input
                    name="contact"
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="btn btn-info" onClick={handleForm}>
            Place order
          </button>
        </form>
      </div>
      <Footer />
    </>
    </div>
  )
}

export default Orderform