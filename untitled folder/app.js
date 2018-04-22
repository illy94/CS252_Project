(function() {
  const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
firebase.initializeApp(config);

//Get Elements
const preObject = document.getElementById('image');
const ulList = document.getElementById('list');

//Create references
const dbRefObject = firebase.database().ref().child('image');
//const dbRefList = dbRefObject.child('hobbies');

//sync object changes
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

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

});

writeNewPost("fox", "blah", "blah")
}());

function writeNewPost(name, imageurl, tdurl) {
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
  updates['/user-image/' + name + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
