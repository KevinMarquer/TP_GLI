
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.initx =  0;
	this.inity =  0;
	this.finalx = 0;
  this.finaly = 0;
  this.canvas =canvas;
  this.clicencours = false;

  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements
  this.pression = function(evt){
   
    this.clicencours = true;
    let res = getMousePosition(this.canvas,evt)
		this.initx =  res.x;
		this.inity =  res.y;
		console.log(this.initx);
    console.log(this.inity);
    this.interactor.onInteractionStart(this);
	}.bind(this);

	this.deplacement = function(evt){

    if (this.clicencours){
    let res = getMousePosition(this.canvas,evt)

		this.finalx =  res.x;
    this.finaly =  res.y;
    console.log(this.finalx);
    console.log(this.finaly);
    this.interactor.onInteractionUpdate(this);
  }

	}.bind(this);

	this.relachement = function(evt){
    
    if (this.clicencours){
      let res = getMousePosition(this.canvas,evt)
      this.finalx =  res.x;
      this.finaly =  res.y;
      console.log(this.finalx);
      console.log(this.finaly);
      this.clicencours = false;
      this.interactor.onInteractionEnd(this);
    }
	}.bind(this);
  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



