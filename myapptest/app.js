(function() {
  const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
firebase.initializeApp(config);

//Get Elements
const preObject = document.getElementById('Users');
const ulList = document.getElementById('list');
//const name = document.getElementById('hello');

//Create references
const dbRefObject = firebase.database().ref().child('Users');
}());

var newPostKey;

function signup() {
  signupjs(document.querySelector('#uid').value, document.querySelector('#upassword').value, document.querySelector('#auth').value);
}

function signupjs(username, pw, auth) {
  var auths = {
    tmp: 1
  }

  firebase.database().ref('/user-data/' + username).once("value",snapshot => {
      const userData = snapshot.val();
      if (userData){
        console.log("exists!");
        //PRINTERROR
        document.getElementById('uid').style.borderColor = "red";
        document.getElementById('idErr').innerHTML = '&#9888; This ID already exists. Please try another ID.';
        document.getElementById('success').innerHTML = '';
      }
      else{
        //ADDING DATA
        newPostKey = firebase.database().ref().child('Users').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/user-data/' + username + '/' + auth +'/' + newPostKey] = auths;
        updates['/user-data/' + username + '/' + pw + '/' + newPostKey] = auths;
        document.getElementById('success').innerHTML = 'Succesfully Signed Up';
        document.getElementById('idErr').innerHTML = '';
        document.getElementById('uid').style.borderColor = "lightgrey";
        return firebase.database().ref().update(updates);
      }
   });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUsername(){
  var str = getCookie("cookie");
  var res = str.split(":");
  return res[0];
}

function getPassword(){
  var str = getCookie("cookie");
  var res = str.split(":");
  return res[1];
}

function login() {
  loginjs(document.querySelector('#uid').value, document.querySelector('#upassword').value);
}

function loginjs (username, password) {
  firebase.database().ref('/user-data/' + username).once("value",snapshot => {
      const userData = snapshot.val();
      if (userData){
        console.log("exists!");
        firebase.database().ref('/user-data/' + username+ '/' + password).once("value",snapshot => {
          const userpw = snapshot.val();
          if(userpw) {
            //change back the input field to default status
            document.getElementById('upassword').style.borderColor = 'lightgrey';
            // document.getElementById('passwordErr').innerHTML = '';
            document.cookie = "cookie=" + username + ":" + password + ";";
            console.log("user: " + getUsername() + ", pass: " + getPassword());
            document.getElementById('success').innerHTML = 'Login Successful';
            document.getElementById('pwErr').innerHTML = '';
          }
          else{
            console.log("Password Incorrect");
            document.getElementById('upassword').style.borderColor = "red";
            document.getElementById('pwErr').innerHTML = '&#9888; Password incorrect';
            document.getElementById('success').innerHTML = '';
          }
        });
      }
      else {
      //console.log("dont exists!");
      document.getElementById('uid').style.borderColor = "red";
      document.getElementById('idErr').innerHTML = '&#9888; User does not exist';
      }
    });
}



function myFunction(){
  /*console.log(document.querySelector('#hello').value);
  console.log(document.querySelector('#imageurl').value);
  console.log(document.querySelector('#tdurl').value);*/

  writeNewPost(getUsername(),getPassword(),document.querySelector('#Auth').value,document.querySelector('#imagepdf').value,document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value);  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
}

function writeNewPost(uname, upassword, Auth, imagepdf, name, imageurl, tdurl) {
  // A post entry.
  var postData = {
    iname: name,
    iurl: imageurl,
    turl: tdurl,
    ipdf: imagepdf
  }

var newPostKey = firebase.database().ref().child('Users').push().key;

firebase.database().ref('/user-data/' + uname).once("value",snapshot => {
    const userData = snapshot.val();
    if (userData){
      console.log("exists!");
      firebase.database().ref('/user-data/' + uname+ '/' + upassword).once("value",snapshot => {
        const userpw = snapshot.val();
        if(userpw) {
          //change back the input field to default status
          //document.getElementById('upassword').style.borderColor = 'lightgrey';
          //document.getElementById('passwordErr').innerHTML = '';

          firebase.database().ref('/user-data/' + uname+ '/' +  Auth).once("value",snapshot => {
            const userauth = snapshot.val();
            if(userauth) {
             //change back the input field to default status
              document.getElementById('Auth').style.borderColor = 'lightgrey';
              document.getElementById('authErr').innerHTML = '';
              var newPostKey = firebase.database().ref().child('Users').push().key;
              // Write the new post's data simultaneously in the posts list and the user's post list.
              var updates = {};
              updates['/user-data/' + uname + '/' + upassword + '/' + newPostKey] = postData;
              document.getElementById('success').innerHTML = 'Update Successful';
              document.getElementById('authErr').innerHTML = '';
              return firebase.database().ref().update(updates);
            }
            else {
              //authentication incorrect
              //console.log("Not allowed to upload");
              document.getElementById('Auth').style.borderColor = "red";
              document.getElementById('authErr').innerHTML = '&#9888; Incorrect authentication password';
            }
          });
        }
        else{
          //console.log("wrong password");
        }
      });
    }
    else {
      console.log("dont exists!");
      //document.write("We don't have anything to show up");
    }
  });
}

function readFunction(){
  /*console.log(document.querySelector('#hello').value);
  console.log(document.querySelector('#imageurl').value);
  console.log(document.querySelector('#tdurl').value);*/

  readNewPost(getUsername(),getPassword());  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
}

function readNewPost(readname, readpassword) {
  // A post entry.
  firebase.database().ref('/user-data/' + readname).once("value",snapshot => {
    const userData = snapshot.val();
    if(userData){
      firebase.database().ref('/user-data/' + readname + '/' + readpassword).once("value",snapshot => {
        const passData = snapshot.val();
        if(passData){
          snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.val().ipdf);
            // var currentDiv = document.getElementById("mainBox");
            // var newContent = document.createTextNode(childSnapshot.val().ipdf);
            // currentDiv.appendChild(newContent);
            if (childSnapshot.val().ipdf){
              var p = document.createElement("p");
              p.style.fontSize = "small";
              var newContent = document.createTextNode("PDF of " + childSnapshot.val().iname + ": " + childSnapshot.val().ipdf);
              p.appendChild(newContent);

              var br = document.createElement("br");

              document.getElementById("mainBox").appendChild(p);
              //document.getElementById("mainBox").appendChild(br);

            }
          });
        } else {
          console.log("Password incorrect");
        }
      });
    } else {
      console.log("User doesn't exist");
    }
  });
}
