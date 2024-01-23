// Registering component in Target.js

AFRAME.registerComponent("floating-chests", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX = (Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.FloatingChests(id, position);
      }
    } ,
  
    FloatingChests: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var chestEl = document.createElement("a-entity");
  
      chestEl.setAttribute("id",id);
      chestEl.setAttribute("position",position);
      
      chestEl.setAttribute("scale", {x: 500, y: 500, z: 500});
      chestEl.setAttribute('animation-mixer', {})
      chestEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");   
  
      terrainEl.appendChild(chestEl);
    }
  });
  
  