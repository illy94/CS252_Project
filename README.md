# CS252 - Lab 6: Augmented Reality for Education

An web-based application that will allow students to view 3D models through augmented reality. This will allow them to orientate the models as they wish while the teacher of the class explains it to them. 

Current host link: https://cs252-ar.firebaseapp.com/

---

## Contributors

- Christopher Kok Kye Shyang (<ckok@purdue.edu>)
- Eric Chan Hon Wing (<chan194@purdue.edu>)
- HyeJin Kim (<kim2411@purdue.edu>)

---

## Technologies and Services

- Node.js
- firebase.js
- AR.js (AR library) 
- Firebase (Web Hosting)

---

## Notes for Developers 

### Local
- to run the app locally we have to download Node.js and install firebase using *npm install -g firebase-tools*
- go to the CS252_Project/myapptest directory
- run *firebase serve -p portnumber*
- then go to your local browser and use http://localhost:portnumber
  
### Online
- make changes necessary to items in CS252_Project/myapptest directory
- go to CS252_Project directory and run firebase deploy again to push it to Firebase Hosting

### Pattern making
- submit image files here to create new patterns: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

---

## TODO List 
- ~~(CHRIS) Fix links to Login/Signup page~~
- ~~(CHRIS) Change downloads~~
- ~~(HJ) Show user if input is incorrect (login page and upload auth)~~
- ~~(CHRIS) Hide authentication during sign up as well~~
- ~~(CHRIS) Sign up and Login page multiple statements bug~~
- ~~Incorrect auth, still adding to database bug~~
- ~~(HJ) make the password and auth columns * or dots to hide password and auth.~~
- ~~(CHRIS) Log in page reset button~~
- ~~(CHRIS) make the download page pdfs be hyperlinks~~
- (HJ) Check for edge cases (uppercase and space)
- (HJ) Show user if the upload is successful
- (ERIC) allow users to add new 3D models, animations and patterns to see through AR
- (ERIC) make a database to save the links to those models, animations or patterns 
- (ERIC) maybe add button to go back home from AR
- (ALL) clean up
- Give trial 3D models to users if they haven't signed up or logged in
- Login with Username and Auth bug
- (ALL) agree on and change UI elements like text color and main background
- Reset button looked pressed? 
- Same auth and password bug? Technically it's okay
- Check if image name or url has already been uploaded and disallow it. 
- Allow the user to remove a particular image? 

---
