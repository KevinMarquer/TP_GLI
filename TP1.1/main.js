
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD

ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
/*var rec = new Rectangle(10, 20, 50, 100, 10, '#F0CCC0');
rec.paint(ctx);
var ligne = new Ligne(10, 20, 200, 150, 10, '#00CCC0');
ligne.paint(ctx);*/
//var recc = new Rectangle(30, 30, 100, 50, 10, '#00CCC0');
//recc.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

