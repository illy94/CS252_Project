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
- MySQL
- AR.js (AR library) 
- Firebase (Web Hosting)

---

## Notes for Developers 

### Local
- to run the app locally we have to download Node.js
- go to the CS252_Project/myapptest directory
- run node app.js 
- then go to your local browser and use http://localhost:*portnumber* (where *portnumber* is based on what is mentioned in the command line)
  
### Online
- make changes necessary to CS252_Project/myapptest/index.html
- go to CS252_Project directory and run firebase deploy again to push it to Firebase Hosting

### Pattern making
- submit image files here to create new patterns: https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

---

## TODO List 
- allow users to add new 3D models, animations and patterns to see through AR
- make a database to save the links to those models, animations or patterns 
- update the seen models through javascript
- user authentication for logins

---
