/**
 * @author Yuri Alves/ https://submarine.com/
 **/
$(document).ready(function () {
  $("#Share").on("click",function(){
    $(".infoText").fadeOut("fast");
    $(".ShareLinks").fadeIn("fast");
    
  })

  $("#Info").on("click",function(){
    $(".ShareLinks").fadeOut("fast");
    $(".infoText").fadeIn("fast");
  })


  $(".closeInfo").on("click",function(){
    $(".infoText").fadeOut("fast");
  })

  $(".closeShare").on("click",function(){
    $(".ShareLinks").fadeOut("fast");
  })


 var url = "https://laughing-noyce-62b2c0.netlify.com/";

 // ON ELEMENT CLICK ADD HASH TO URL
 $("#airport").on("click",function(){
   window.location.hash = 'airport';
   $("#output").text("The Airport");
   shareLinks();
 })
 $("#bathingpools").on("click",function(){
   window.location.hash = 'bathingpools';
   $("#output").text("The Bathing Pools");
   shareLinks();
 })
 $("#BridgeCoop").on("click",function(){
   window.location.hash = 'BridgeCoop';
   $("#output").text("The Bridge Co-Op");
   shareLinks();
 })
 $("#CollegeFootsLane").on("click",function(){
   window.location.hash = 'CollegeFootsLane';
   $("#output").text("College Foots Lane");
   shareLinks();
 })
 $("#footslane").on("click",function(){
   window.location.hash = 'footslane';
   $("#output").text("Foots Lane");
   shareLinks();
 })
 $("#GE2").on("click",function(){
   window.location.hash = 'GE2';
   $("#output").text("Guernsey Electric");
   shareLinks();
 })
 $("#Grammar1").on("click",function(){
   window.location.hash = 'Grammar1';
   $("#output").text("Grammer");
   shareLinks();
 })
 $("#GuilleAlles").on("click",function(){
   window.location.hash = 'GuilleAlles';
   $("#output").text("Guilles alles");
   shareLinks();
 })
 $("#kgv").on("click",function(){
   window.location.hash = 'kgv';
   $("#output").text("KGV");
   shareLinks();
 })
 $("#LEree").on("click",function(){
   window.location.hash = 'LEree';
   $("#output").text("L'Eree");
   shareLinks();
 })
 $("#longstore").on("click",function(){
   window.location.hash = 'longstore';
   $("#output").text("The Longstore");
   shareLinks();
 })
 $("#pleinmont").on("click",function(){
   window.location.hash = 'pleinmont';
   $("#output").text("Pleinmont");
   shareLinks();
 })
 $("#StPPschool").on("click",function(){
   window.location.hash = 'StPPschool';
   $("#output").text("The Performing Arts Centre");
   shareLinks();
 })
 $("#townchurch").on("click",function(){
   window.location.hash = 'townchurch';
   $("#output").text("The Town Church");
   shareLinks();
 })
 $("#VazonCo-Op").on("click",function(){
   window.location.hash = 'VazonCo-Op';
   $("#output").text("Vazon Co-Op");
   shareLinks();
 })
 $("#vazonkiosk").on("click",function(){
   window.location.hash = 'vazonkiosk';
   $("#output").text("The Vazon Kiosk");
   shareLinks();
 })
 $("#airportVid").on("click",function(){
   window.location.hash = 'airport-vid';
   $("#output").text("The Airport (Video)");
   shareLinks();
 })
 $("#bathingpoolsVid").on("click",function(){
   window.location.hash = 'bathingpools-vid';
   $("#output").text("The Bathing Pools (Video)");
   shareLinks();
 })
  $("#BridgeCoopVid").on("click",function(){
   window.location.hash = 'BridgeCoop-vid';
   $("#output").text("The Bridge Co-Op (Video)");
   shareLinks();
 })
  $("#CollegeFootsLaneVid").on("click",function(){
   window.location.hash = 'CollegeFootsLane-vid';
   $("#output").text("The College Foots Lane (Video)");
   shareLinks();
 })
 $("#FootsLaneVid").on("click",function(){
   window.location.hash = 'FootsLane-vid';
   $("#output").text("The Foots Lane (Video)");
   shareLinks();
 })
 $("#GE2Vid").on("click",function(){
   window.location.hash = 'GE2-vid';
   $("#output").text("Guernsey Electric (Video)");
   shareLinks();
 })
  $("#Grammer1Vid").on("click",function(){
   window.location.hash = 'Grammer1-vid';
   $("#output").text("Grammar (Video 1)");
   shareLinks();
 })
  $("#Grammer2Vid").on("click",function(){
   window.location.hash = 'Grammer2-vid';
   $("#output").text("Grammar (Video 2)");
   shareLinks();
 })
  $("#GuilleAllesVid").on("click",function(){
   window.location.hash = 'GuilleAlles-vid';
   $("#output").text("Guille Alles (Video)");
   shareLinks();
 })
  $("#KGVVid").on("click",function(){
   window.location.hash = 'KGV-vid';
   $("#output").text("KGV (Video)");
   shareLinks();
 })
  $("#LEreeVid").on("click",function(){
   window.location.hash = 'LEree-vid';
   $("#output").text("LEree (Video)");
   shareLinks();
 })
  $("#LongstoreVid").on("click",function(){
   window.location.hash = 'Longstore-vid';
   $("#output").text("Longstore (Video)");
   shareLinks();
 })
  $("#PleinmontVid").on("click",function(){
   window.location.hash = 'Pleinmont-vid';
   $("#output").text("Pleinmont (Video)");
   shareLinks();
 })
 $("#StPPVid").on("click",function(){
   window.location.hash = 'StPP-vid';
   $("#output").text("The Performing Arts Centre (Video 1)");
   shareLinks();
 })
  $("#StPP2Vid").on("click",function(){
   window.location.hash = 'StPP2-vid';
   $("#output").text("The Performing Arts Centre (Video 2)");
   shareLinks();
 })
  $("#townChurchVid").on("click",function(){
   window.location.hash = 'townChurch-vid';
   $("#output").text("Town Church (Video)");
   shareLinks();
 })
  $("#VazonCoopVid").on("click",function(){
   window.location.hash = 'VazonCoop-vid';
   $("#output").text("Vazon Co-Op (Video)");
   shareLinks();
 })
   $("#VazonKioskVid").on("click",function(){
   window.location.hash = 'VazonKiosk-vid';
   $("#output").text("Vazon Kiosk (Video)");
   shareLinks();
 })
 
 // IF URL MATCHES ID ON PAGE LOAD
 if (window.location.href === url + "#airport") {
   $("#airport").click();
   shareLinks()
 }
 if (window.location.href === url + "#bathingpools") {
   $("#bathingpools").click();
   shareLinks()
 }
 if (window.location.href === url + "#BridgeCoop") {
   $("#BridgeCoop").click();
   shareLinks()
 }
 if (window.location.href === url + "#CollegeFootsLane") {
   $("#CollegeFootsLane").click();
   shareLinks()
 }
 if (window.location.href === url + "#footslane") {
   $("#footslane").click();
   shareLinks()
 }
 if (window.location.href === url + "#GE2") {
   $("#GE2").click();
   shareLinks()
 }
 if (window.location.href === url + "#Grammar1") {
   $("#Grammar1").click();
   shareLinks()
 }
 if (window.location.href === url + "#GuilleAlles") {
   $("#GuilleAlles").click();
   shareLinks()
 }
 if (window.location.href === url + "#kgv") {
   $("#kgv").click();
   shareLinks()
 }
 if (window.location.href === url + "#LEree") {
   $("#LEree").click();
   shareLinks()
 }
 if (window.location.href === url + "#longstore") {
   $("#longstore").click();
   shareLinks()
 }
 if (window.location.href === url + "#pleinmont") {
   $("#pleinmont").click();
   shareLinks()
 }
 if (window.location.href === url + "#StPPschool") {
   $("#StPPschool").click();
   shareLinks()
 }
 if (window.location.href === url + "#townchurch") {
   $("#townchurch").click();
   shareLinks()
 }
 if (window.location.href === url + "#VazonCo-Op") {
   $("#VazonCo-Op").click();
   shareLinks()
 }
 if (window.location.href === url + "#vazonkiosk") {
   $("#vazonkiosk").click();
   shareLinks()
 }
 if (window.location.href === url + "#airport-vid") {
   $("#airportVid").click();
   shareLinks()
 }
 if (window.location.href === url + "#bathingpools-vid") {
   $("#bathingpoolsVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#BridgeCoop-vid") {
   $("#BridgeCoopVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#CollegeFootsLane-vid") {
   $("#CollegeFootsLaneVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#FootsLane-vid") {
   $("#FootsLaneVid").click();
   shareLinks()
 }
   if (window.location.href === url + "#GE2-vid") {
   $("#GE2Vid").click();
   shareLinks()
 }
  if (window.location.href === url + "#Grammer1-vid") {
   $("#Grammer1Vid").click();
   shareLinks()
 }
  if (window.location.href === url + "#Grammer2-vid") {
   $("#Grammer2Vid").click();
   shareLinks()
 }
  if (window.location.href === url + "#GuilleAlles-vid") {
   $("#GuilleAllesVid").click();
   shareLinks()
 }
    if (window.location.href === url + "#KGV-vid") {
   $("#KGVVid").click();
   shareLinks()
 }  
  if (window.location.href === url + "#LEree-vid") {
   $("#LEreeVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#Longstore-vid") {
   $("#LongstoreVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#Pleinmont-vid") {
   $("#PleinmontVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#StPP-vid") {
   $("#StPPVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#StPP2-vid") {
   $("#StPP2Vid").click();
   shareLinks()
 } 
  if (window.location.href === url + "#townChurch-vid") {
   $("#townChurchVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#VazonCoop-vid") {
   $("#VazonCoopVid").click();
   shareLinks()
 }
  if (window.location.href === url + "#VazonKiosk-vid") {
   $("#VazonKioskVid").click();
   shareLinks()
 }
  
 // IF URL MATCHES ID ON HASH CHANGE 
 $(window).bind("hashchange", function() {
   if (window.location.href === url + "#airport") {
     $("#airport").click();
   }
   if (window.location.href === url + "#bathingpools") {
   $("#bathingpools").click();
   }
   if (window.location.href === url + "#BridgeCoop") {
     $("#BridgeCoop").click();
   }
   if (window.location.href === url + "#CollegeFootsLane") {
     $("#CollegeFootsLane").click();
   }
   if (window.location.href === url + "#footslane") {
     $("#footslane").click();
   }
   if (window.location.href === url + "#GE2") {
     $("#GE2").click();
   }
   if (window.location.href === url + "#Grammar1") {
     $("#Grammar1").click();
   }
   if (window.location.href === url + "#GuilleAlles") {
     $("#GuilleAlles").click();
   }
   if (window.location.href === url + "#kgv") {
     $("#kgv").click();
   }
   if (window.location.href === url + "#LEree") {
     $("#LEree").click();
   }
   if (window.location.href === url + "#longstore") {
     $("#longstore").click();
   }
   if (window.location.href === url + "#pleinmont") {
     $("#pleinmont").click();
   }
   if (window.location.href === url + "#StPPschool") {
     $("#StPPschool").click();
   }
   if (window.location.href === url + "#townchurch") {
     $("#townchurch").click();
   }
   if (window.location.href === url + "#VazonCo-Op") {
     $("#VazonCo-Op").click();
   }
   if (window.location.href === url + "#vazonkiosk") {
     $("#vazonkiosk").click();
   }
   if (window.location.href === url + "#airport-vid") {
     $("#airportVid").click();
   }
   if (window.location.href === url + "#bathingpools-vid") {
     $("#bathingpoolsVid").click();
   }
   if (window.location.href === url + "#BridgeCoop-vid") {
     $("#BridgeCoopVid").click();
   }
    if (window.location.href === url + "#CollegeFootsLane-vid") {
   $("#CollegeFootsLaneVid").click();

 }
  if (window.location.href === url + "#FootsLane-vid") {
   $("#FootsLaneVid").click();
   
 }
   if (window.location.href === url + "#GE2-vid") {
   $("#GE2Vid").click();
  
 }
  if (window.location.href === url + "#Grammer1-vid") {
   $("#Grammer1Vid").click();
  
 }
  if (window.location.href === url + "#Grammer2-vid") {
   $("#Grammer2Vid").click();
   
 }
  if (window.location.href === url + "#GuilleAlles-vid") {
   $("#GuilleAllesVid").click();
  
 }
    if (window.location.href === url + "#KGV-vid") {
   $("#KGVVid").click();
   
 }  
  if (window.location.href === url + "#LEree-vid") {
   $("#LEreeVid").click();
   
 }
  if (window.location.href === url + "#Longstore-vid") {
   $("#LongstoreVid").click();
   
 }
  if (window.location.href === url + "#Pleinmont-vid") {
   $("#PleinmontVid").click();

 }
  if (window.location.href === url + "#StPP-vid") {
   $("#StPPVid").click();

 }
  if (window.location.href === url + "#StPP2-vid") {
   $("#StPP2Vid").click();

 } 
  if (window.location.href === url + "#townChurch-vid") {
   $("#townChurchVid").click();

 }
  if (window.location.href === url + "#VazonCoop-vid") {
   $("#VazonCoopVid").click();

 }
  if (window.location.href === url + "#VazonKiosk-vid") {
   $("#VazonKioskVid").click();

 }
   shareLinks()
 });

 $("#fullscreen").on("click",function(){
  if (container.requestFullscreen) {
    container.requestFullscreen();
  } else if (container.msRequestFullscreen) {
    container.msRequestFullscreen();
  } else if (container.mozRequestFullScreen) {
    container.mozRequestFullScreen();
  } else if (container.webkitRequestFullscreen) {
    container.webkitRequestFullscreen();
  }
})
});  


function shareLinks(){
  $('#email').attr("href", "mailto:?body=Check out this site " + window.location.href);
  $('#facebook').attr("href", "https://www.facebook.com/sharer/sharer.php?" + window.location.href);
  $('#twitter').attr("href", "http://twitter.com/share?url=" + window.location.href);
  $('#linkedin').attr("href", " http://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href);
 }
 shareLinks();

$(".openMenuBtn").on("click", function() {
  $(".openMenuBtn").css("display", "none");
  $(".menu").slideDown("slow");
  $(".closeMenuBtn").css("display", "block");
});

$(".closeMenuBtn").on("click", function() {
  $(".closeMenuBtn").css("display", "none");
  $(".menu").slideUp("slow");
  $(".openMenuBtn").css("display", "block");
});

var camera, scene, renderer;

var isUserInteracting = false,
  onMouseDownMouseX = 0,
  onMouseDownMouseY = 0,
  lon = 0,
  onMouseDownLon = 0,
  lat = 0,
  onMouseDownLat = 0,
  phi = 0,
  theta = 0;

init();
animate();

function init() {
  var container, mesh;

  container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1100
  );
  camera.target = new THREE.Vector3(485, 35, 115);
        

  scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  var geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  const texture1 = loader.load(
    "img/default.png"
  );

  var material = new THREE.MeshBasicMaterial({
    map: texture1
  });

  $("a.views").on("click", function(e) {
    e.preventDefault();
    $("a")
      .children()
      .children()
      .removeClass("active");
    $("a")
      .children()
      .removeClass("active");
    $(this)
      .children()
      .addClass("active");
      $(".menu").slideUp("slow");
      $(".openMenuBtn").css("display", "block");

    var selected = $(".active").attr("src");

    console.log(selected);
    //active = new THREE.MeshBasicMaterial( {
    //   map: new THREE.TextureLoader().load( selected )
    //} );

    const texture2 = loader.load(selected);
    material.map = texture2;
    texture1.dispose();
  });

  $("a.videoViews").on("click", function(e) {
    e.preventDefault();
    $("a")
      .children()
      .children()
      .removeClass("active");
      $("a")
      .children().removeClass("active");
    $(this)
      .children()
      .children()
      .addClass("active");
      $(".menu").slideUp("slow");
      $(".openMenuBtn").css("display", "block");

    var selected = $(".active").attr("src");

    console.log(selected);
    if(texture3 != null){
    texture3.dispose();
    }
    var video = document.createElement("video");
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.setAttribute('playsinline', true);
    video.src = selected;
    video.setAttribute("webkit-playsinline", "webkit-playsinline");
    video.play();

    var texture3 = new THREE.VideoTexture(video);
    texture3.minFilter = THREE.LinearFilter;
    texture3.format = THREE.RGBFormat;
    material.map = texture3;

    if(texture1 != null){
    texture1.dispose();
    }
    // if(texture2 != null){
    // texture2.dispose();
    // }
  });

  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  
  stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );

  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("mouseup", onDocumentMouseUp, false);

  window.addEventListener("resize", onWindowResize, false);
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  isUserInteracting = true;

  onPointerDownPointerX = event.clientX;
  onPointerDownPointerY = event.clientY;

  onPointerDownLon = lon;
  onPointerDownLat = lat;
}

function onDocumentMouseMove(event) {
  if (isUserInteracting === true) {
    lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
    lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
  }
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;
}

function animate() {
  requestAnimationFrame(animate);

  update();
  stats.update();
}

function update() {
  lat = Math.max(-85, Math.min(85, lat));
  phi = THREE.Math.degToRad(90 - lat);
  theta = THREE.Math.degToRad(lon);

  camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
  camera.target.y = 500 * Math.cos(phi);
  camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

  camera.lookAt(camera.target);

  /*
    // distortion
    camera.position.copy( camera.target ).negate();
    */

  renderer.render(scene, camera);
}

document.body.appendChild(WEBVR.createButton(renderer));
renderer.vr.enabled = true;

// var clicked;

// $("#VR").on("click", function(){
//     if(!clicked){
//     renderer.vr.enabled = true;
//     clicked = 1;
//     }
//     else{
//         renderer.vr.enabled = false;
//     clicked = 0;
//     }
// })

renderer.setAnimationLoop(function() {
  renderer.render(scene, camera);
});
