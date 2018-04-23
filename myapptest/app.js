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
//const dbRefList = dbRefObject.child('hobbies');

//sync object changes
/*dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});*/

//dbRefObject.on('value', snap => console.log(snap.val()));
//dbRefObject.on('child_added', snap => console.log(snap.val()));

//
//dbRefObject.on('child_removed', snap => console.log(snap.val()));

/*
dbRefObject.on('child_added', snap => {
  const li = document.createElement('li');
  li.innerText = snap.val();
  li.id = snap.key;
  ulList.appendChild(li);

});

dbRefObject.on('child_changed', snap => {
  const liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();

});

dbRefObject.on('child_removed', snap => {
  const liRemove = document.getElementById(snap.key);
  liRemove.innerText = snap.val();

});*/

//writeNewPost(document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value)
//writeNewPost(name, imageurl, tdurl)

}());

function myFunction(){
  /*console.log(document.querySelector('#hello').value);
  console.log(document.querySelector('#imageurl').value);
  console.log(document.querySelector('#tdurl').value);*/

  writeNewPost(document.querySelector('#uname').value,document.querySelector('#upassword').value,document.querySelector('#Auth').value,document.querySelector('#imagepdf').value,document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value);  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
}

function writeNewPost(uname, upassword, Auth, imagepdf, name, imageurl, tdurl) {
  // A post entry.
  var postData = {
    iname: name,
    iurl: imageurl,
    turl: tdurl,
    ipdf: imagepdf
  };

  var auths = {
    auth: Auth
  }

  var secure = {
    upassword: {
      iname: name,
      iurl: imageurl,
      turl: tdurl,
      ipdf: imagepdf
    },
    auth: Auth
  }

var newPostKey = firebase.database().ref().child('Users').push().key;

firebase.database().ref('/user-data/' + uname).once("value",snapshot => {
    const userData = snapshot.val();
    if (userData){
      console.log("exists!");
      firebase.database().ref('/user-data/' + uname+ '/' + upassword).once("value",snapshot => {
        const userpw = snapshot.val();
        if(userpw) {
          firebase.database().ref('/user-data/' + uname+ '/' +  Auth).once("value",snapshot => {
            const userauth = snapshot.val();
            if(userauth) {
              var newPostKey = firebase.database().ref().child('Users').push().key;

              // Write the new post's data simultaneously in the posts list and the user's post list.
              var updates = {};
              updates['/Users/' + newPostKey] = postData;
              updates['/user-data/' + uname + '/' + Auth +'/' + newPostKey] = auths;
              updates['/user-data/' + uname + '/' + upassword + '/' + newPostKey] = postData;
              return firebase.database().ref().update(updates);
            }
            else {
              console.log("Not allowed to upload");
            }
          });
        }
        else{
          console.log("wrong password");
        }
      });
    }
    else {
      //console.log("dont exists!");
      var newPostKey = firebase.database().ref().child('Users').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/Users/' + newPostKey] = postData;
      updates['/user-data/' + uname + '/' + Auth +'/' + newPostKey] = auths;
      updates['/user-data/' + uname + '/' + upassword + '/' + newPostKey] = postData;
      return firebase.database().ref().update(updates);
    }
  });
}

function readFunction(){
  /*console.log(document.querySelector('#hello').value);
  console.log(document.querySelector('#imageurl').value);
  console.log(document.querySelector('#tdurl').value);*/

  readNewPost(document.querySelector('#readname').value,document.querySelector('#readpassword').value);  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
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
