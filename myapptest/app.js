(function() {
  const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
firebase.initializeApp(config);

//conflict
const hostname = '127.0.0.1';
const port = 3003;

fs.readFile(index.html', (err,html) => {
    if (err){
        throw err;
    }
}
//conflict
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
>>>>>>> e69f03aefbf25d87a22c73fc03ddce729ddc6141

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

  writeNewPost(document.querySelector('#uname').value,document.querySelector('#upassword').value,document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value);  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
}

function writeNewPost(uname, upassword, name, imageurl, tdurl) {
  // A post entry.
  var postData = {
    iname: name,
    iurl: imageurl,
    turl: tdurl
  };
var updates = {};
var newPostKey = firebase.database().ref().child('Users').push().key;

firebase.database().ref().child("Users").orderByChild("iname").equalTo(uname).once("value",snapshot => {
    const userData = snapshot.val();
    if (userData){
      console.log("exists!");
    }
    else {
      var newPostKey = firebase.database().ref().child('Users').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.

      updates['/Users/' + newPostKey] = postData;
      updates['/user-image/' + uname + '/' + upassword + '/' + newPostKey] = postData;

    }
});
/*
var updates = {};
var newPostKey = firebase.database().ref().child('Users').push().key;

// Write the new post's data simultaneously in the posts list and the user's post list.

updates['/Users/' + newPostKey] = postData;
updates['/user-image/' + uname + '/' + upassword + '/' + newPostKey] = postData;

  // Get a key for a new Post.*/
  return firebase.database().ref().update(updates);
}
