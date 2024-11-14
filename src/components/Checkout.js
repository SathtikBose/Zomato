import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Checkout(props) {
  const navigate = useNavigate();
  const audioRef = React.useRef(new Audio('/zomatoalert.mp3'));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!name || !phone || !address || !paymentMethod) {
      alert('Please fill all the required fields.');
    } else {
      alert('Your order has been placed and will be delivered within 30 minutes.');

      // Play the song when the form is submitted
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
      
      // Redirect to the home page
      navigate('/');
    }
  };

  return (
    <div className='container' style={{marginTop: '90px', paddingBottom: '40px'}}>
      <h2 style={{textAlign: 'center'}}>Checkout</h2>
      <div className="container" style={{width: '100%', marginTop: '40px'}}>
        <form className="was-validated" onSubmit={handleSubmit}>
          <h4>Personal Details</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="Phone Number" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" id="address" rows="3" placeholder="Address" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address (optional)</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>

          <h4>Payment method</h4>
          <div className="mb-3">
            <select className="form-select" id="paymentMethod" required aria-label="select example">
              <option value="">Choose payment option</option>
              <option value="1">Google Pay UPI</option>
              <option value="2">Add credit or debit card</option>
              <option value="3">Pluxee</option>
              <option value="4">Bhim UPI</option>
              <option value="5">Amazon Pay UPI</option>
              <option value="6">Add new UPI ID</option>
              <option value="7">Amazon Pay Balance</option>
              <option value="8">Mobikwik</option>
              <option value="9">Simpl</option>
              <option value="10">Lazy Pay</option>
              <option value="11">NetBanking</option>
              <option value="12">Cash on Delivery</option>
            </select>
          </div>

          <h4>Products details</h4>
          <div className="container">
            <p>Product Name : <span style={{fontWeight: 'bold'}}>{props.itemName ? props.itemName : 'no item selected'}</span></p>
            <p>Product Price : <span style={{fontWeight: 'bold'}}>{props.price ? `${props.price} + ${((props.price)*18)/100} = ${Math.floor(props.price + props.price*18/100)} (including all taxes)` : 'no item selected'}</span></p>
          </div>

          <h4>Delivery Instruction</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="avoidCalling" />
            <label className="form-check-label" htmlFor="avoidCalling">Avoid calling</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="dontRingBell" />
            <label className="form-check-label" htmlFor="dontRingBell">Don't ring the bell</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="leaveWithGuard" />
            <label className="form-check-label" htmlFor="leaveWithGuard">Leave with guard</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="petAtHome" />
            <label className="form-check-label" htmlFor="petAtHome">Pet at Home</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="delivery" id="leaveAtDoor" defaultChecked />
            <label className="form-check-label" htmlFor="leaveAtDoor">Leave at door</label>
          </div>

          <div className="mb-3">
            <label htmlFor="customInstruction" className="form-label">Custom instruction (optional)</label>
            <input type="text" className="form-control" id="customInstruction" placeholder="Add custom delivery instruction" />
          </div>

          <div className="d-flex justify-content-between">
            <Link className="btn btn-danger" to="/" role="button">Cancel</Link>
            <button className="btn btn-danger" type="submit">Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
