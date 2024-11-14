import React from 'react'
import { Link } from 'react-router-dom';

function Veg(props) {


  const vegDish = [
    {
      name: "Paneer Butter Masala",
      rating: 4.5,
      image: "/images/veg1.png",
      description: "A creamy curry with paneer in a spiced tomato-based sauce.",
      price: 200
    },
    {
      name: "Aloo Gobi",
      rating: 4,
      image: "/images/veg2.png",
      description: "A dry, spiced curry with potatoes and cauliflower.",
      price: 150
    },
    {
      name: "Palak Paneer",
      rating: 4.5,
      image: "/images/veg3.png",
      description: "Spinach-based curry cooked with paneer cubes.",
      price: 220
    },
    {
      name: "Chole Bhature",
      rating: 4.5,
      image: "/images/veg4.png",
      description: "Spicy chickpeas served with fried bread.",
      price: 180
    },
    {
      name: "Baingan Bharta",
      rating: 4,
      image: "/images/veg5.png",
      description: "Mashed roasted eggplant cooked with spices.",
      price: 160
    },
    {
      name: "Vegetable Biryani",
      rating: 4.5,
      image: "/images/veg6.png",
      description: "Aromatic rice with mixed vegetables and spices.",
      price: 200
    },
    {
      name: "Dosa with Sambar and Coconut Chutney",
      rating: 4.5,
      image: "/images/veg7.png",
      description: "Crispy rice crepe served with lentil stew and chutney.",
      price: 120
    },
    {
      name: "Pav Bhaji",
      rating: 4,
      image: "/images/veg8.png",
      description: "Spicy mashed vegetable curry with buttered bread rolls.",
      price: 140
    },
    {
      name: "Vegetable Korma",
      rating: 4.5,
      image: "/images/veg9.png",
      description: "A mild curry made with mixed vegetables in a creamy gravy.",
      price: 210
    },
    {
      name: "Methi Thepla",
      rating: 4,
      image: "/images/veg10.png",
      description: "A flatbread made with fenugreek leaves and spices.",
      price: 80
    }
  ];
    
      
  return (
    <div className="container" style={{marginTop: '90px'}}>
      <h1 style={{textAlign: 'center'}}>Veg</h1>
      <div className='container d-flex justify-content-evenly flex-wrap' style={{marginTop : '35px'}}>
        {vegDish.map((name,index) => (
          <div key={index} className={`col-md-5 mb-3 bg-${props.backgroundColor} border border-${props.border} rounded`}>
            <div className="col">
              <div className={`card bg-${props.backgroundColor}`}>
                <img src={vegDish[index].image} className="card-img-top" alt={vegDish[index].name} style={{width: '100%',height: '400px',objectFit : 'cover'}}/>
                <div className="card-body">
                <h5 className={`card-title text-${props.textColor}`}>{vegDish[index].name}</h5>
                <p className={`card-text text-${props.textColor}`}>{vegDish[index].description}</p>
                <p className={`card-text text-${props.textColor}`}>{`Ratings : ${vegDish[index].rating}`}</p>
                <p className={`card-text text-${props.textColor}`}>{`Price : ${vegDish[index].price}`}</p>
                <Link className='btn btn-danger' to = '/checkout' onClick={() => props.buyItem(vegDish[index].name , vegDish[index].price)}>Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Veg
