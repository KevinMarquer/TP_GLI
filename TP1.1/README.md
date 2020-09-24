# TP Web

Kévin MARQUER


L'objectif de ce TP est de créer un application web tout en décrouvant JavaScript.

La page web permet de créer des rectangles et des lignes avec la possibilité de modifier
la couleur et la taille du trait.

On se base pour ce TP sur un squellette donné.


1. L'interaction

On créer dans interaction.js une classe DnD pour obtenir les coordonnées lorsqu'on :
- CLic sur la souris sur le tableau de la page web
- Maintient le clic de la souris
- Le relachement de la souris

DnD aura plusieur attributs :
-les coordonnées x y de début et de fin
- le canvas
- interactor (pour plus tard)
- clicencours (boolean pour savoir si le clic est maintenue)

Les trois fonctions décris plus tôt devront simplement mettre les valeurs lu par getMousePosition(this.canvas,evt) au attribus de coordonnée (et mettre clicencours à 1 si on clique et à 0 si on relache).
Et on les enregistre auprès du canvas (addEventListener)

Ainsi, lorsqu'on lance canvas.html et qu'on clique sur la toile, on obtient les coordonnées.


2. Le modèle

On créer désormais dans model.js les 4 classes Drawing (une liste de forme), Forme, Rectangle et Ligne.

Pas de problème pour les créer, pour obtenir les cordonées finales du rectangle, il suffit de prendre la coordonée initiale et d'ajouté la largeur(pour x) (hauteur pour y).


3. La vue

On créer maintenant dans view la représentation graphique des modèles.
Dans l'intitulé du TP, on a le code pour 3 des modèles.
Pour Formes celui-ci va récuperer la couleur et l'épaisseur de la ligne.

'''js

    Forme.prototype.paint = function(ctx) {
    //TODO Manager colors
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
  };

'''

et je supose que l'on doit ajouter cet "fonction" dans Rectangle et Ligne pour obtenir des couleurs.
Mais dans mon cas rien ne change sur la page web.


On teste dans le main.js en créant manuellement les formes.
(dérsormais commenté )

'''js

    var rec = new Rectangle(10, 20, 50, 100, 10, '#F0CCC0');
    rec.paint(ctx);
    var ligne = new Ligne(10, 20, 200, 150, 10, '#00CCC0');
    ligne.paint(ctx);

'''



4. Le controleur

On va maintenant créer un controleur Pencil pour créer directement sur la page.
Pencil disposera d'attribut donnant :
- la forme actuelle
- la couleur actuelle
- la taille de contour actuelle
- currentShape (0 ou 1)permettant de savoir si on est en train de dessiné

Ainsi que de la classe DnD.
Les 3 fonctions du controleur vont permettre de :

- Pour *onInteractionStart* de dire qu'on va dessiné (currentShape à 1)
- Pour *onInteractionUpdate* de mettre à jour le dessin quand on bouge la souris (ne sauvegarde pas le dessin)
- Pour *onInteractionEnd* de mettre le dessin dans Drawing et de le conservé sur l'écran (et mettre currentShape à 0)

Il ne reste plus qu'à créer liés des widgets à la classe pour modifier le style des formes.

'''js

    this.butRect=document.getElementById("butRect");
	this.butLine=document.getElementById("butLine");


	this.butRect.onclick = function(){
	    this.currEditingMode =  editingMode.rect;
	}.bind(this);
	

	this.butLine.onclick = function(){
		this.currEditingMode =  editingMode.line;
	}.bind(this);


'''

Ainsi la fonction onclick permet de modifier currEditingMode pour pouvoir donné la forme que l'on veut au dessin quand clique sur les boutons butRect et butLine.



Malheureusement pour la dernière partie, je n'ai réussi la réalisé.
Je n'arrivais pas à savoir ce qui fallait faire pour créer cette liste de dessin dans la page web.