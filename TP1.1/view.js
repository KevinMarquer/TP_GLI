
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
  };

Rectangle.prototype.paint = function(ctx) {
  Forme.prototype.paint(ctx);
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY());
    ctx.stroke();
  };

  Ligne.prototype.paint = function(ctx) {
    //TODO Manager color
    Forme.prototype.paint(ctx);
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
  };

  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.listForme.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });

}

this.shapeList;

updateShapeList = function(ctx){
      this.listForme.forEach(function (eltDuTableau) {
        this.shapeList += "<th>"+eltDuTableau+"</th>";
      });
};