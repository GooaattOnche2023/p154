// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables     
      var posX = (Math.random() * 3000 + (-1000));      
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createFishes(id, position);
    }
  } ,

  createFishes: function(id, position) { 
    
    var terrainEl = document.querySelector("#terrain");

    var ringEl = document.createElement("a-entity");

    fishEl.setAttribute("id",id);
    fishEl.setAttribute("position",position);
    
    fishEl.setAttribute("material","color","#ff9100");
    
    fishEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   

    terrainEl.appendChild(fishEl);
  }
});

