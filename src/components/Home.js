import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {

    const restaurants = [
        {
            name: "Shree Thaker Bhojanalay",
            location: "Mumbai, Maharashtra",
            specialty: "Authentic Gujarati thali",
            type: "Vegetarian",
            image: "/images/1.png",
            description: "A traditional Gujarati restaurant famous for its unlimited thali offerings and homestyle cooking.",
            rating: 4.5
        },
        {
            name: "Saravana Bhavan",
            location: "Chennai, Tamil Nadu",
            specialty: "South Indian dishes (dosa, idli, vada)",
            type: "Vegetarian",
            image: "/images/3.png",
            description: "Popular for serving authentic South Indian dishes, especially dosa, with branches worldwide.",
            rating: 4.3
        },
        {
            name: "Vidyarthi Bhavan",
            location: "Bangalore, Karnataka",
            specialty: "Crispy masala dosas, South Indian vegetarian fare",
            type: "Vegetarian",
            image: "/images/5.png",
            description: "An iconic restaurant serving thick, crispy dosas with a unique flavor, loved by locals and tourists alike.",
            rating: 4.6
        },
        {
            name: "Chokhi Dhani",
            location: "Jaipur, Rajasthan",
            specialty: "Rajasthani thali with cultural village experience",
            type: "Vegetarian",
            image: "/images/7.png",
            description: "A cultural resort offering an immersive Rajasthani experience with traditional thalis and village-style ambiance.",
            rating: 4.4
        },
        {
            name: "Rajdhani Thali Restaurant",
            location: "Multiple Locations",
            specialty: "Gujarati and Rajasthani thalis",
            type: "Vegetarian",
            image: "/images/9.png",
            description: "Known for its lavish thalis, Rajdhani serves unlimited Gujarati and Rajasthani dishes in a warm, inviting setting.",
            rating: 4.2
        },
        {
            name: "Karim's",
            location: "Delhi",
            specialty: "Mughlai cuisine, kebabs, mutton dishes",
            type: "Non-Vegetarian",
            image: "/images/2.png",
            description: "A legendary spot in Old Delhi known for rich Mughlai dishes like kebabs, nihari, and korma, attracting food lovers for decades.",
            rating: 4.5
        },
        {
            name: "Bademiya",
            location: "Mumbai, Maharashtra",
            specialty: "Kebabs, tikkas, rolls",
            type: "Non-Vegetarian",
            image: "/images/4.png",
            description: "Starting as a street food stall, Bademiya has become famous for its delicious kebabs and spicy rolls.",
            rating: 4.1
        },
        {
            name: "Dindigul Thalappakatti",
            location: "Tamil Nadu",
            specialty: "Aromatic mutton and chicken biryanis",
            type: "Non-Vegetarian",
            image: "/images/6.png",
            description: "Famous for its unique style of biryani from Dindigul, with a distinct flavor and rich spices.",
            rating: 4.3
        },
        {
            name: "Paradise Biryani",
            location: "Hyderabad, Telangana",
            specialty: "Traditional Hyderabadi biryani",
            type: "Non-Vegetarian",
            image: "/images/8.png",
            description: "A must-visit for biryani lovers, serving authentic Hyderabadi biryani with perfectly layered rice and meat.",
            rating: 4.6
        },
        {
            name: "Peter Cat",
            location: "Kolkata, West Bengal",
            specialty: "Chelo Kebabs and continental menu",
            type: "Non-Vegetarian",
            image: "/images/10.png",
            description: "An iconic Kolkata restaurant known for its signature Chelo Kebabs and Persian-inspired dishes.",
            rating: 4.4
        }
    ];
    
  return (
    <div className="container" style={{marginTop: '90px'}}>
        <h2 style={{textAlign: 'center'}}>Restaurants</h2>
        <div className='container d-flex justify-content-evenly flex-wrap' style={{marginTop: '35px'}} >
            {restaurants.map((name,index) => (
                <div key={index} className={`col-md-5 mb-3 bg-${props.backgroundColor} border border-${props.border} rounded`}>
                    <div className="col">
                        <div className={`card bg-${props.backgroundColor}`}>
                        <img src={restaurants[index].image} className="card-img-top" alt={restaurants[index].name} style={{width: '100%',height: '400px',objectFit : 'cover'}}/>
                        <div className="card-body">
                            <h5 className={`card-title text-${props.textColor}`}>{restaurants[index].name}</h5>
                            <p className={`card-text text-${props.textColor}`}>{restaurants[index].description}</p>
                            <p className={`card-text text-${props.textColor}`}>{`Location : ${restaurants[index].location}`}</p>
                            <p className={`card-text text-${props.textColor}`}>{`Ratings : ${restaurants[index].rating}`}</p>
                            <Link className='btn btn-danger' to = {restaurants[index].type === 'Vegetarian' ? '/veg' : '/non-veg'}>See Menu</Link>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home
