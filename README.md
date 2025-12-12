# BuyCom
A modern eCommerce web application built with React, featuring product browsing, dynamic product pages, categories, cart system, responsive UI, and EmailJS-powered newsletter subscription.

🛒 BuyCom

A modern and fully responsive eCommerce web application built with React, designed for browsing products, viewing detailed product pages, managing cart interactions, and subscribing to a newsletter powered by EmailJS.

BuyCom focuses on clean UI, smooth user experience, and scalable front-end architecture.

🚀 Features
✨ Modern Shopping Experience

Fully responsive across devices

Clean and elegant UI

Featured sections: New Arrivals, Top Selling, Customer Reviews

🧭 Navigation System

Dynamic active state highlighting

Mobile-friendly hamburger menu

Smooth page transitions with auto scroll-to-top

🛍 Product Features

Product grid layout

Detailed product pages with images, rating, and pricing

Dynamic :id routing with React Router

Clickable related items

📩 Newsletter Subscription

EmailJS integration

Users can subscribe with their email

Custom email template: sends notifications to admin

🧱 Components

Header

Footer

Home

Categories

Account

Cart

Contact

ProductDetail

ScrollToTop

🛠 Tech Stack
Technology	Purpose
React	Frontend framework
React Router DOM	Routing and navigation
EmailJS	Newsletter email delivery
CSS / Flexbox / Grid	UI styling
React Icons	Iconography
📁 Project Structure
/src
  /components
    Header.jsx
    Footer.jsx
    Home.jsx
    Categories.jsx
    ProductDetail.jsx
    Cart.jsx
    Account.jsx
    Contact.jsx
    ScrollToTop.jsx
  /assets
  /data
  App.jsx
  main.jsx

🔧 Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Nodstan/BuyCom.git
cd BuyCom

2️⃣ Install dependencies
npm install

3️⃣ Run the project
npm run dev

🔐 EmailJS Setup

To enable newsletter email delivery:

Create an EmailJS account

Add a Service ID, Template ID, and Public Key

Insert them inside Footer.jsx in the emailjs.send() function

🎯 Future Improvements

Add full cart functionality

Add backend for user accounts

Add product filtering & search system

Add payment gateway integration

Improve SEO & metadata

📜 License

This project is licensed under the MIT License.

👤 Author

Stanley (Nodstan)
Front-end developer & project creator
