
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(canvas, interactor){

    this.listForme = new Array();

};
    
function Forme(couleur, epaisseur){

    this.couleur = couleur;
    this.epaisseur = epaisseur;
}
    


    function Rectangle(x,y,l,h,ep,couleur){
        Forme.call(this.couleur,this.epaisseur)
        this.hautgauche = x;
        this.hautdroit = y;
        this.largeur = l;
        this.hauteur = h;          

        this.getInitX = function(){
            return this.hautgauche;
        };
        this.getInitY = function(){
            return this.hautdroit;
        };
        this.getFinalX = function(){
            return this.hautgauche+this.largeur;
        };
        this.getFinalY = function(){
            return this.hautdroit+this.hauteur;
        };

    };

    function Ligne(xdeb,ydeb,xfin,yfin,ep,couleur){
        Forme.call(this.couleur,this.epaisseur)
        this.xdeb = xdeb;
        this.ydeb = ydeb;
        this.xfin = xfin;
        this.yfin = yfin;

        this.getInitX = function(){
            return this.xdeb;
        };
        this.getInitY = function(){
            return this.ydeb;
        };
        this.getFinalX = function(){
            return this.xfin;
        };
        this.getFinalY = function(){
            return this.yfin;
        };  
    };
