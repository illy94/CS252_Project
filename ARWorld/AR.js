
window.onload = function (){
   getAR();
   //
};


function setUpUrls(arr){
    console.log('setUpUrls');
    //console.log(arr);
    var object = document.querySelector('#object');
    var marker = document.querySelector('#marker');
    //object.setAttribute('src',arr[0].src);
    //marker.setAttribute('url',arr[0].url);
    //set up position or scale, if they exist
    //marker.childNodes[1].setAttribute('scale','0.1 0.1 0.1');
    //marker.childNodes[1].setAttribute('position',arr[0].position);
    //console.log(object);
    createMultiMarker(object,marker,arr);
    console.log(object);
    //marker.childNodes[1].setAttribute('rotation', '90 0 180');
    return;
}

function createMultiMarker(object,marker,arr){
  var assets = document.querySelector('a-assets');
  var scene = document.querySelector('a-scene');
  for(var i = 0; i < arr.length; i++){
      //create elements has no problem.
      var tempObj = document.createElement('a-asset-item');//object.cloneNode(true);
      //use clone to decrease the size of code
      var tempMar = marker.cloneNode(true);
      //set up properties
      tempObj.setAttribute('src',arr[i].src);
      tempObj.setAttribute('id','object'+i);
      tempMar.setAttribute('url',arr[i].url);
      //append here first to load the object first and use it in a-marker later
      assets.appendChild(tempObj);
      //console.log(tempObj);
      //call a sepecific a-assets-item
      tempMar.childNodes[1].setAttribute('gltf-model','#object'+i);
      //set up position or scale, if they exist
      tempMar.childNodes[1].setAttribute('position',arr[i].position);
      tempMar.childNodes[1].setAttribute('scale','0.1 0.1 0.1');
      tempMar.childNodes[1].setAttribute('rotation',arr[i].rotation);
      scene.appendChild(tempMar);
    }
    console.log(scene);
  return;
}