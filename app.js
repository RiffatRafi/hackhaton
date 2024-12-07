
// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAjQoE0EmNC5VJBrFV1b3tu7JNf2pEYSbU",
//   authDomain: "riffat-first-project-quizz-app.firebaseapp.com",
//   projectId: "riffat-first-project-quizz-app",
//   storageBucket: "riffat-first-project-quizz-app.firebasestorage.app",
//   messagingSenderId: "168990920716",
//   appId: "1:168990920716:web:b4dfe260d1e610868d1e29",
//   measurementId: "G-E725J1KSZ4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Get DOM elements for Sign Up
// const signupEmail = document.getElementById("signup_email");
// const signupPassword = document.getElementById("signup_password");
// const signupBtn = document.getElementById("signup_btn");

// // Get DOM elements for Sign In
// const signinEmail = document.getElementById("email");
// const signinPassword = document.getElementById("password");
// const signinBtn = document.getElementById("signin_btn");

// // Handle user sign-up
// signupBtn.addEventListener("click", () => {
//   const email = signupEmail.value;
//   const password = signupPassword.value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("User signed up:", user);
//     })
//     .catch((error) => {
//       console.error("Error signing up:", error.message);
//     });
// });

// // Handle user sign-in
// signinBtn.addEventListener("click", () => {
//   const email = signinEmail.value;
//   const password = signinPassword.value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("User signed in:", user);
//     })
//     .catch((error) => {
//       console.error("Error signing in:", error.message);
//     });
// });

// // Monitor user authentication state
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User is logged in:", user.uid);
//   } else {
//     console.log("User is not logged in");
//   }
// });
  



// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQoE0EmNC5VJBrFV1b3tu7JNf2pEYSbU",
  authDomain: "riffat-first-project-quizz-app.firebaseapp.com",
  projectId: "riffat-first-project-quizz-app",
  storageBucket: "riffat-first-project-quizz-app.firebasestorage.app",
  messagingSenderId: "168990920716",
  appId: "1:168990920716:web:b4dfe260d1e610868d1e29",
  measurementId: "G-E725J1KSZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements for Sign Up
  const signupEmail = document.getElementById("signup_email");
  const signupPassword = document.getElementById("signup_password");
  const signupBtn = document.getElementById("signup_btn");

  if (!signupBtn) {
    console.error("Signup button not found");
    return;
  }

  // Handle user sign-up
  signupBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const email = signupEmail.value;
    const password = signupPassword.value;

    // Basic validation for empty fields
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // Sign up using Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Redirect to create post page after successful sign-up
        window.location.href = "createppst.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorMessage);
        alert("Error signing up: " + errorMessage);
      });
  });
});
