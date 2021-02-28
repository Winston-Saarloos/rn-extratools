# Overview

This was created so that I can port over the RR-Image-Browser from being built with Electron to instead be a hosted ReactJS app.  This allows anyone to access it and there will be no need for software installation.  This also allows me to collect better analytics and not worry about having everyone on the latest version since I can deploy out to the website live.

Production URL: https://rn-extratools.com/


I will update the image browser to version 0.1.9 and then I will more than likely hault all development on it so that I can get it working on here.

How to deploy to production (because I keep forgetting =] ):
npm run build
netlify deploy (does preview)
netlify deploy --prod (deploys live)

Bootstrap documentation: https://create-react-app.dev/docs/adding-bootstrap/
Bootstrap variables documentation (.sass): https://getbootstrap.com/docs/4.1/getting-started/theming/#css-variables

## Technology Stack
 - ReactJS
 -- https://reactjs.org/
 - Redux (?)
 -- https://redux.js.org/
 - React Router
 -- https://reactrouter.com/web/guides/quick-start
 - Material UI
 -- https://material-ui.com/getting-started/installation/
 
 ### Dev Tools
  - Visual Studio Code
