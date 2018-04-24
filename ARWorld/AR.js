
window.onload = function(){
   console.log('hi');  
   //console.log('bye');  
   setUpUrls();
};

var arr = [
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/0/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/D.patt',position:'0 0 0',scale:'0.1 0.1 0.1',rotation:'90 0 180'},
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/1/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/dragon.patt',position:'0 0 0',scale:'0.1 0.1 0.1',rotation:'0 0 0'},
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/2/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/F.patt',position:'0 0 0',scale:'0.01 0.01 0.01',rotation:'0 0 0'}   
]

function setUpUrls(){
    console.log('setUpUrls');
    var object = document.querySelector('#object');
    var marker = document.querySelector('#marker');
    createMultiMarker(object,marker);
    object.setAttribute('src',arr[0].src);
    marker.setAttribute('url',arr[0].url);
    //set up position or scale, if they exist
    marker.childNodes[1].setAttribute('scale',arr[0].scale);
    marker.childNodes[1].setAttribute('position',arr[0].position);
    marker.childNodes[1].setAttribute('rotation', '90 0 180');
    return;
}

function createMultiMarker(object,marker){
  var assets = document.querySelector('a-assets');
  var scene = document.querySelector('a-scene');
  for(var i = 1; i < arr.length; i++){
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
      tempMar.childNodes[1].setAttribute('scale',arr[i].scale);
      tempMar.childNodes[1].setAttribute('rotation',arr[i].rotation);
      scene.appendChild(tempMar);
    }
  console.log(assets);
  console.log(scene);
  return;
}