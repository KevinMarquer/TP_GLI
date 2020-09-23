
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = document.getElementById("spinnerWidth").value;
	this.currColour = document.getElementById("colour").value;
	this.currentShape = 0;



	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.butRect=document.getElementById("butRect");
	this.butLine=document.getElementById("butLine");

	new DnD(canvas, this);

	this.draw;

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		this.currentShape = 1;


	};

	this.onInteractionUpdate = function(DnD){
		drawing.paint(ctx)
		if(this.currentShape){
			if(this.currEditingMode){
				this.draw = new Ligne(DnD.initx,DnD.inity,DnD.finalx,DnD.finaly,this.currLineWidth,this.currColour);
			}
			else{
				this.draw = new Rectangle(DnD.initx,DnD.inity,(DnD.finalx-2*DnD.initx),(DnD.finaly-2*DnD.inity),this.currLineWidth,this.currColour);
			}
			this.draw.paint(ctx);
		}
		
	}.bind(this);

	this.onInteractionEnd = function(DnD){
		drawing.listForme.push(this.draw)
		drawing.paint(ctx)
		this.currentShape = 0;
	};



	
	this.butRect.onclick = function(){
		this.currEditingMode =  editingMode.rect;
	}.bind(this);
	

	this.butLine.onclick = function(){
		this.currEditingMode =  editingMode.line;
	}.bind(this);

	
};


