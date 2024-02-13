import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
export default defineNuxtPlugin(() => {
    console.log("HALO PLUGIN");
    const firebaseConfig = {
        apiKey: "AIzaSyCSogQf4E1udXqc2EpN6xA_lwoCmLhcR1A",
        authDomain: "ngani-87091.firebaseapp.com",
        databaseURL: "https://ngani-87091-default-rtdb.firebaseio.com",
        projectId: "ngani-87091",
        storageBucket: "ngani-87091.appspot.com",
        messagingSenderId: "653513783943",
        appId: "1:653513783943:web:94dad29941031bdfebd622",
        measurementId: "G-YP7KL5KG0X"
      };
      const database = getDatabase(initializeApp(firebaseConfig));
    return {
      provide: {
        firebaseData: database
      }
    }
  })
  