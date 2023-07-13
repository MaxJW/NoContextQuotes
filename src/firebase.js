import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",
	authDomain: "nocontextquotes-86d30.firebaseapp.com",
	projectId: "nocontextquotes-86d30",
	storageBucket: "nocontextquotes-86d30.appspot.com",
	messagingSenderId: "704558739601",
	appId: "1:704558739601:web:f92bb50736b7c0cb360f30",
	measurementId: "G-RHFY5NDBMG"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
(async () => { await setPersistence(auth, browserLocalPersistence); })();
export const db = getFirestore(app);