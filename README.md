# 🚀 SwifParcel

swifParcel is a modern and responsive delivery management website designed to provide users with seamless and efficient parcel services. It offers a robust system for managing deliveries, payments, and user interactions with advanced UI/UX.

![SwifParcel Banner](https://i.ibb.co.com/B5mhPsVc/Screenshot-172.png)

## 🌐 Live Demo
🔗 Live Site: https://assignment-12-5d452.web.app

---

## 📌 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Admin Credentials](#admin-credentials)
- [Contributing](#contributing)
- [License](#license)

---



## 🛠️ Technologies Used
- **Frontend:** React, React Router, TailwindCSS, React Icons
- **Backend:** Firebase, Stripe API
- **State Management:** React Query, React Hook Form
- **Libraries:** Leaflet, ApexCharts, Axios, SweetAlert2
- **Build Tool:** Vite  

---


## ✨ Features
- 📦 **Parcel Management:** Users can track, send, and receive parcels efficiently.
- 🔐 **Authentication:** Secure user authentication with Firebase.
- 🗺️ **Interactive Maps:** Integrated with Leaflet for real-time location tracking.
- 💳 **Payments:** Stripe API for seamless payment processing.
- 📊 **Dashboard:** Admin panel with analytics and insights.
- 🎉 **Animations & Effects:** Engaging UI with React Confetti & SweetAlert.

## 📦 Dependencies
This project relies on the following dependencies:

```json
"dependencies": {
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.0",
  "apexcharts": "^4.3.0",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "leaflet": "^1.9.4",
  "lucide-react": "^0.471.1",
  "react": "^19.0.0-rc.1",
  "react-apexcharts": "^1.7.0",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-leaflet": "^5.0.0",
  "react-router-dom": "^7.1.1",
  "sweetalert2": "^11.15.10",
  "tailwindcss-animate": "^1.0.7"
}
```

## 🛠️ Installation & Setup
Follow these steps to run the project locally:

1. **Clone the repository**
   ```sh
   git clone https://github.com/ummesalma303/swift-parcel-client.git
   cd choice-master
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```


### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```
(Replace values with your actual Firebase credentials)

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Build for production**
   ```sh
   npm run build
   ```

6. **Preview the build**
   ```sh
   npm run preview
   ```

## 🖥️ Usage
- **Users** can sign up, book deliveries, track parcels, and leave reviews.
- **Admins** can manage users, monitor deliveries, and process payments.
- Secure authentication & authorization is handled via Firebase.

---


## 🔑 Admin Credentials
Use the following credentials to log in as an admin:

- **Username:** mahdiba jahan mahvi  
- **Email:** email@gmail.com  
- **Password:** 123456


## 🔑 Delivery Men Credentials
Use the following credentials to log in as Delivery Men
- **Email:** mahira@gmail.com 
- **Password:** 123456

## 📚 Additional Resources
- [React Documentation](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase Documentation](https://firebase.google.com/docs/)
- [Stripe API](https://stripe.com/docs)
























<!-- # swifParcel  

swifParcel is a modern and responsive delivery management website designed to enhance the user experience by providing convenient and efficient parcel services.  

## Features:  
- Fully responsive design for seamless browsing on mobile, tablet, and desktop devices.  
- Integrated payment system using Stripe for secure and reliable transactions.  
- Includes an admin panel for managing users, bookings, and deliveries efficiently.  
- Enhanced UI/UX with advanced components and design using *shadcn*.  
- Visual analytics through bar charts and line charts displayed using *React Apex Charts* for booking and rating insights.  
- Form validation powered by *React Hook Form* for a smoother user experience.  
- Authentication and authorization handled through *Firebase*, ensuring secure login and registration.  
- Data storage and management using *MongoDB* for scalability and reliability.  
- User profile update functionality to keep personal information up to date.  
- Post-delivery review system where users can rate and review the delivery personnel.  

## Admin Credentials:  
- Username: mahdiba jahan mahvi
- user email:email@gmail.com 
- Password: 123456  

## Live Site URL: https://assignment-12-5d452.web.app
-->
