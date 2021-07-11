import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as Config from '../../Config/SiteConfig';

var DevMode = true;

if (DevMode) {
    firebase.initializeApp(Config.firebaseConfigDev);
} else {
    firebase.initializeApp(Config.firebaseConfigProd);
}


export default firebase;