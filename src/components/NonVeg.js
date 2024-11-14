import React from 'react'
import { Link } from 'react-router-dom';
function NonVeg(props) {

  const nonVegDish = [
    {
      "name": "Butter Chicken",
      "rating": 4.8,
      "image": "/images/nonveg1.png",
      "description": "A creamy, spiced chicken curry in tomato gravy.",
      "price": 300
    },
    {
      "name": "Chicken Biryani",
      "rating": 4.7,
      "image": "/images/nonveg2.png",
      "description": "Fragrant rice dish with spiced chicken.",
      "price": 280
    },
    {
      "name": "Mutton Rogan Josh",
      "rating": 4.5,
      "image": "/images/nonveg3.png",
      "description": "Slow-cooked mutton curry with rich, aromatic spices.",
      "price": 350
    },
    {
      "name": "Fish Curry",
      "rating": 4,
      "image": "/images/nonveg4.png",
      "description": "Tangy curry made with fish, often in coconut or tamarind base.",
      "price": 320
    },
    {
      "name": "Tandoori Chicken",
      "rating": 4.6,
      "image": "/images/nonveg5.png",
      "description": "Marinated chicken grilled with yogurt and spices.",
      "price": 250
    },
    {
      "name": "Chicken Tikka Masala",
      "rating": 4.7,
      "image": "/images/nonveg6.png",
      "description": "Grilled chicken in a creamy, spiced tomato gravy.",
      "price": 300
    },
    {
      "name": "Prawn Masala",
      "rating": 4.5,
      "image": "/images/nonveg7.png",
      "description": "Tangy and spicy prawn curry in a tomato-based sauce.",
      "price": 350
    },
    {
      "name": "Kabab (Seekh or Shami)",
      "rating": 4.5,
      "image": "/images/nonveg8.png",
      "description": "Minced meat kababs with spices, grilled or fried.",
      "price": 200
    },
    {
      "name": "Chettinad Chicken Curry",
      "rating": 4.5,
      "image": "/images/nonveg9.png",
      "description": "Spicy, aromatic chicken curry from South India.",
      "price": 320
    },
    {
      "name": "Lamb Vindaloo",
      "rating": 4.5,
      "image": "/images/nonveg10.png",
      "description": "Spicy, vinegar-based lamb curry with bold flavors.",
      "price": 340
    }
  ];
    
      
  return (
    <div className="container" style={{marginTop: '90px'}}>
      <h1 style={{textAlign: 'center'}}>Non Veg</h1>
      <div className='container d-flex justify-content-evenly flex-wrap' style={{marginTop : '35px'}}>
        {nonVegDish.map((name,index) => (
          <div key={index} className={`col-md-5 mb-3 bg-${props.backgroundColor} border border-${props.border} rounded`}>
            <div className="col">
              <div className={`card bg-${props.backgroundColor}`}>
                <img src={nonVegDish[index].image} className="card-img-top" alt={nonVegDish[index].name} style={{width: '100%',height: '400px',objectFit : 'cover'}}/>
                <div className="card-body">
                <h5 className={`card-title text-${props.textColor}`}>{nonVegDish[index].name}</h5>
                <p className={`card-text text-${props.textColor}`}>{nonVegDish[index].description}</p>
                <p className={`card-text text-${props.textColor}`}>{`Ratings : ${nonVegDish[index].rating}`} </p>
                <p className={`card-text text-${props.textColor}`}>{`Price : ${nonVegDish[index].price}`}</p>
                <Link className='btn btn-danger' to = '/checkout' onClick={() => props.buyItem(nonVegDish[index].name , nonVegDish[index].price)}>Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NonVeg
