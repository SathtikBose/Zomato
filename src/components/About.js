import React from 'react'

function About(props) {
  return (
    <div className={`container text-${props.textColor} bg-${props.backgroundColor}`} style={{marginTop: '80px'}}>
        <div className="container my-4">
            <h2>About Zomato</h2>
            <p>Welcome to Zomato, a platform dedicated to enriching the food experience by connecting food lovers with the best dining options worldwide. Zomato provides a unique combination of food delivery, table reservations, and personalized recommendations, making every meal special. Our goal is simple: to make dining and food discovery an effortless, enjoyable, and inspiring experience for everyone, everywhere. By collaborating with thousands of restaurants across cities and countries, we bring together culinary diversity under one roof, giving our users access to a world of flavors with just a few taps</p>
        </div>
        <div className="container my-4">
            <h3 >Our Mission and Vision</h3>
            <p>Zomato’s mission is rooted in the belief that food has the power to bring people together. Our goal is to support local businesses while providing an exceptional platform for customers to explore new dining experiences. We envision a global community connected through food — one that celebrates flavors, promotes sustainable practices, and fosters a spirit of sharing and discovery. Every action we take aligns with this vision: to redefine the dining experience and create lasting, meaningful connections through food.</p>
        </div>
        <div className="container my-4">
            <h3 >Why Choose Zomato?</h3>
            <p>Zomato goes beyond traditional food services. Our app is built with cutting-edge technology to ensure a smooth, user-friendly experience that delivers results fast and reliably. We offer advanced search filters, smart recommendations based on your preferences, and an intuitive design that puts ease of use first. In addition, our platform empowers users to not only discover the best dining options but also enjoy exclusive offers, seasonal deals, and member-only benefits, making dining both exciting and affordable.</p>
        </div>
        <div className="container my-4">
            <h3>Key Features</h3>
        <ol className="list-group list-group-numbered">
            <li className={`list-group-item  text-${props.textColor} bg-${props.backgroundColor}`}>Unmatched Variety: With Zomato, users have access to a wide variety of cuisines and dining styles. From fine dining and casual eateries to food trucks and bakeries, we partner with diverse restaurants to cater to every preference and occasion.</li>
            <li className={`list-group-item  text-${props.textColor} bg-${props.backgroundColor}`}>Personalized Recommendations: Zomato learns from your tastes and offers personalized suggestions tailored to your dining habits. Whether you’re a frequent diner or a first-time user, Zomato helps you find exactly what you’re craving.</li>
            <li className={`list-group-item  text-${props.textColor} bg-${props.backgroundColor}`}>Order Tracking and Delivery Assurance: Zomato provides real-time tracking from preparation to delivery, so you can follow each step of your order. Our goal is to make every meal experience as seamless as possible, with reliable delivery times and high-quality standards.</li>
            <li className={`list-group-item  text-${props.textColor} bg-${props.backgroundColor}`}>Community Reviews and Ratings: Our platform fosters a vibrant community where users can share honest feedback, reviews, and photos. This helps you make informed choices and explore new dining options with confidence.</li>
            <li className={`list-group-item  text-${props.textColor} bg-${props.backgroundColor}`}>Sustainable Dining Initiatives: Zomato is committed to supporting environmentally responsible practices. We work with restaurant partners to encourage sustainable packaging, reduce food waste, and adopt eco-friendly practices, so you can enjoy your meals with peace of mind.</li>
        </ol>
        </div>
        <div className="container my-4">
            <h3>Commitment to Quality and Hygiene</h3>
            <p>At Zomato, quality and safety are paramount. We partner exclusively with restaurants that uphold rigorous hygiene standards and conduct regular quality checks to ensure that every order meets your expectations. Additionally, our stringent quality assurance processes mean that from preparation to packaging, every detail is managed with care. We also prioritize customer feedback and continually improve our processes to ensure the highest standards are met.</p>
        </div>
        <div className="container my-4">
            <h3>Exclusive Offers, Rewards, and Loyalty Programs</h3>
            <p>As a valued member of the Zomato community, you’ll have access to exclusive deals, special discounts, and loyalty rewards that make dining out and ordering in even more enjoyable. Our loyalty programs reward frequent diners with points redeemable for discounts, cashback, and other perks. With regular promotions and seasonal offers, we make it easier for you to indulge in your favorite dishes without stretching your budget.</p>
        </div>
        <div className="container my-4">
            <h3>Customer Care and Support</h3>
            <p>Zomato is dedicated to delivering exceptional service and customer satisfaction. Our customer support team is available around the clock to help with any questions or concerns, ensuring that your experience is always positive. From resolving issues promptly to gathering feedback for improvement, we prioritize your satisfaction at every step.</p>
        </div>
        <div className="container my-4">
            <h3>Partnerships and Innovation</h3>
            <p>Zomato partners with leading technology providers, local businesses, and sustainability-focused organizations to continually enhance the platform and introduce innovative features. By staying at the forefront of technology and adapting to evolving dining trends, Zomato aims to be more than a food app — we aim to be a trusted companion on your food journey, offering cutting-edge features like virtual menus, AI-powered suggestions, and live event notifications to keep your experience fresh and engaging.</p>
        </div>
        <div className="container my-4">
            <h3>Environmentally Conscious Choices</h3>
            <p>As part of our commitment to a greener future, Zomato is actively working to minimize our environmental impact. We are gradually introducing eco-friendly packaging options, supporting restaurants that prioritize local sourcing, and advocating for waste reduction across our platform. By choosing Zomato, you’re supporting a food community that values sustainability and cares about its impact on the planet.</p>
        </div>
        <div className="container my-4">
            <h3>Join the Zomato Community</h3>
            <p>Zomato is more than just a food app — it’s a community of passionate food enthusiasts, conscious diners, and dedicated restaurateurs. Whether you’re in the mood to try a new cuisine, connect with fellow food lovers, or simply enjoy a meal with peace of mind, Zomato is here to make it happen. Join us in celebrating the art of dining, supporting local businesses, and making sustainable choices that benefit everyone.</p>
        </div>
    </div>
  )
}

export default About
