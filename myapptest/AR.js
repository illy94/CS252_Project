
window.onload = function(){
   console.log('hi');  
   //console.log('bye');  
   setUpUrls();
};

var arr = [
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/0/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/D.patt',position:'0 0 0',scale:'0.1 0.1 0.1'},
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/1/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/dragon.patt',position:'0 0 0',scale:'0.1 0.1 0.1'},
{src:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/3dmodels/gltf/2/scene.gltf',url:'https://raw.githubusercontent.com/illy94/CS252_Project/master/myapptest/patterns/F.patt',position:'0 0 0',scale:'0.01 0.01 0.01'}   
]


function setUpUrls(){
    console.log('setUpUrls');
    var object = document.querySelector('#object');
    var marker = document.querySelector('#marker');
    createMultiMarker(object,marker);
    object.setAttribute('src',arr[0].src);
    marker.setAttribute('url',arr[0].url);
    marker.childNodes[1].setAttribute('scale',arr[0].scale);
    marker.childNodes[1].setAttribute('position',arr[0].position);
    return;
}

function createMultiMarker(object,marker){
  var assets = document.querySelector('a-assets');
  var scene = document.querySelector('a-scene');
  for(var i = 1; i < arr.length; i++){
      var tempObj = object.cloneNode(true);
      var tempMar = marker.cloneNode(true);
      tempObj.setAttribute('src',arr[i].src);
      tempObj.setAttribute('id','object'+i);
      tempMar.setAttribute('url',arr[i].url);
      //console.log(marker.childNodes[1]);
      //marker1.childNodes[1].setAttribute('gltf-model','#object1');
      //console.log(tempMar.childNodes[1]);
      assets.appendChild(tempObj);
      console.log(tempObj);
      tempMar.childNodes[1].setAttribute('gltf-model','#object'+i);
      tempMar.childNodes[1].setAttribute('position',arr[i].position);
      tempMar.childNodes[1].setAttribute('scale',arr[i].scale);
      scene.appendChild(tempMar);
    }
  console.log(assets);
  console.log(scene);
  return;
}