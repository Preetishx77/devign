
import './App.css';
import Login from './components/Login';
import SignupDesign from './components/SignupDesign';
import Signup from './components/SignupDev';

function App() {
  return (
    <div className="App">
<Signup/>
<SignupDesign/>
<Login/>
    </div>
  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCbkNRe_djZkBL1NxooWGZu_5Pd6xDZwzA",
//     authDomain: "devign-44ed5.firebaseapp.com",
//     projectId: "devign-44ed5",
//     storageBucket: "devign-44ed5.appspot.com",
//     messagingSenderId: "75208804210",
//     appId: "1:75208804210:web:86ea7d5e3ef0a435273feb",
//     measurementId: "G-HSE6Y6ZG6Y"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
