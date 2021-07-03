// DEV MOD <SWAPS>
const DEV_MODE: boolean = false;
var graphQL_uri: string = '';

if (DEV_MODE) {
    graphQL_uri = 'http://localhost:4000/';
} else {
    graphQL_uri = 'https://lamentis-api.herokuapp.com/';
}

// Auth0
//export const AUTH0_DOMAIN: string = 'dev--648o4ct.us.auth0.com';
//export const AUTH0_CLIENT_ID: string = '0Az9shnZNFXE6rfBNqDHRhKCDnMu4p8g';

// GraphQL URI
export const GRAPHQL_URI: string = graphQL_uri;

// FireBase Config
const API_KEY_PROD: string = "AIzaSyAOWSGpmjM5KpjDbcqaZiO0zd70Mu4qXEI";
const AUTH_DOMAIN_PROD: string = "rn-extratools.firebaseapp.com";
const PROJECT_ID_PROD: string = "rn-extratools";
const STORAGE_BUCKET_PROD: string = "rn-extratools.appspot.com";
const MESSAGING_SENDER_ID_PROD: string = "1018988864198";
const APP_ID_PROD: string = "1:1018988864198:web:129e2e3994cf20aa262dc7";
const MEASUREMENT_ID_PROD: string = "G-CTYDN0MJ6H";

export const firebaseConfigProd = {
    apiKey: API_KEY_PROD,
    authDomain: AUTH_DOMAIN_PROD,
    projectId: PROJECT_ID_PROD,
    storageBucket: STORAGE_BUCKET_PROD,
    messagingSenderId: MESSAGING_SENDER_ID_PROD,
    appId: APP_ID_PROD,
    measurementId: MEASUREMENT_ID_PROD,
  };


  const API_KEY_DEV: string = "AIzaSyAUlltvWN7R_J6JPIw5chO4VdPk3L6BVWQ";
  const AUTH_DOMAIN_DEV: string = "rn-extratools-dev.firebaseapp.com";
  const PROJECT_ID_DEV: string = "rn-extratools-dev";
  const STORAGE_BUCKET_DEV: string = "rn-extratools-dev.appspot.com";
  const MESSAGING_SENDER_ID_DEV: string = "616292290549";
  const APP_ID_DEV: string = "1:616292290549:web:a587badb2a1d2f866fdabc";
  
  export const firebaseConfigDev = {
      apiKey: API_KEY_DEV,
      authDomain: AUTH_DOMAIN_DEV,
      projectId: PROJECT_ID_DEV,
      storageBucket: STORAGE_BUCKET_DEV,
      messagingSenderId: MESSAGING_SENDER_ID_DEV,
      appId: APP_ID_DEV,
    };

export {};