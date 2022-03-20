import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Checkout(){
    const coursePrice="99900";
    const [FirstName]=useState('');
    
    
    
   

    const [amount,setamount] = useState('');
   
   
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        
          var options = {
            // key: "rzp_test_DOijcznujpWSPM",
           
            
            // key_secret:"zDDVp3mL8G9XcxG77nKR9HWA",
            key: "rzp_test_LBcEjpP8IrbiLt",
            key_secret:"sNkCLCScxwXJkyW24PVxDXWc",
            
            amount :coursePrice ,
            currency:"INR",
            name:"GCO",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:FirstName,
              
              
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      
  
     
    return (
    
      <div className="maincontainer">
       <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h6 class="my-0 mr-md-auto font-weight-normal">Get  Certified Online</h6>
          <nav class="my-2 my-md-0 mr-md-3">
          
          </nav>
          {/* <a class="btn btn-outline-primary" href="#">Sign up</a> */}
        </div>
        <div class="container">
          <div class="py-5 text-left">
            
            <h2>Please Fill the below deatils before Checkingout</h2>

          </div>

          <div class="row">
           
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="FirstName">FirstName <span class="text-muted"></span></label>
                  <input type="text" class="form-control" id="FirstName" placeholder="Name" />
                  <div class="invalid-feedback">
                    Please enter your First Name
                  </div>
                </div>
                  
                  
                  <div class="col-md-6 mb-3">
                    <label for="lastName">LastName</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Name" />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                

                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

               

                <div class="row">
                  {/* <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                     
                      <option>India</option>
                      
                    
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div> */}
                  {/* <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>Andhra Pradesh</option>
                       <option>Arunachal Pradesh</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Maharashtra</option>
                     
                      
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div> */}
                  {/* <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div> */}
                </div>
                <hr class="mb-4" />
                {/* <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div> */}
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button" onClick={handleSubmit}>Continue to checkout</button>
              </form>
            </div>
          </div>

          <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">&copy; 2020-2021 Get Certified online.com</p>
            <ul class="list-inline">
           
            </ul>
          </footer>
        </div>
     
      </div>
      
)

}

export default Checkout;