(function(){
const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
  firebase.initializeApp(config);

  //get elements
  const preObject = document.getElementById('object');

  const dbRefObject = firebase.database().ref().child('object');

  //sync preObject
  dbRefObject.on('value', snap => console.log(snap.val()));
}());
