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

  writeNewPost(document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value);  //document.querySelector('#hello').value, document.querySelector('#imageurl').value, document.querySelector('#tdurl').value
}
function writeNewPost(uname, upassword, name, imageurl, tdurl) {
  // A post entry.
  var postData = {
    iname: name,
    iurl: imageurl,
    turl: tdurl
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('image').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/image/' + newPostKey] = postData;
  updates['/user-image/' + uname + '/' + upassword + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
