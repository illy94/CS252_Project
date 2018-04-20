(function(){
const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
  firebase.initializeApp(config);

  //get elements
  const preObject = document.getElementById('image');
  const imageList = document.getElementById('dog');
  const ulList  = document.getElementById('list');

  const dbRefObject = firebase.database().ref().child('image');
  const dbRefODog = dbRefObject.child('dog');
  const dbRefOList = dbRefObject.child('something');

  //sync preObject
  dbRefObject.on('value', snap => {
    console.log(snap.val() );
  });

  dbRefODog.on('child_added', snap => console.log(snap.val()));

  /*dbRefODog .on('child_added', snap => {
    const lx = document.createElement('lx');
    lx.innerText = snap.val();
    imageList.appendChild(lx);
  })*/

  /*dbRefList.on('child_added', snap => {
  const li = document.createElement('li');
  li.innerText = snap.val();
  ulList.appendChild(li);
});*/

}());
