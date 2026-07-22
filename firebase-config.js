import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "blessed-divine-prasadam-d6699.firebaseapp.com",
  projectId: "blessed-divine-prasadam-d6699",
  storageBucket: "blessed-divine-prasadam-d6699.firebasestorage.app",
  messagingSenderId: "610812667945",
  appId: "1:610812667945:web:e795af1fcb6ac2706ad438"
};

const app = initializeApp(firebaseConfig);

export { app };
