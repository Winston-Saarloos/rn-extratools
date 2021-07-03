import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as Config from '../../SiteConfig/Config';

firebase.initializeApp(Config.firebaseConfigDev);

export default firebase;