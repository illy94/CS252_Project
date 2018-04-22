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

  const dbRefObject = firebase.database().ref().child('image');
  //sync preObject
  dbRefObject.on('value', snap => {
    console.log(snap.val() );
  });
  //var Object = firebase.database().ref().child('image');

  var userRef = firebase.database().ref().child('image');

  userRef.set ({
   Dog: {
      imageURL: "https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/0/scene.gltf"
   },
 });

userRef.push ({
   Cat: {
      imageURL: "https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/0/scene.gltf"
   },
 });

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
