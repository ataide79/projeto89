
// Crie uma variável canvasfeito
var canvas=new fabric.Canvas("myCanvas")

//Defina as posições iniciais da bola e do buraco.
var ball_X=0;
var buracox=200;
var ball_Y=0;
var buracoY=200;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvasfeito
    fabric.Image.fromURL("golf-h.png",function(ing){
        objbroco=ing;
        objbroco.scaleToWidth(50);
        objbroco.scaleToHeight(50);
        objbroco.set({
            top:buracoY,
            left:buracox

        });//cabo a linha,
        canvas.add(objbroco);

    });
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas feito
	fabric.Image.fromURL("ball.png",function(ing){
        objetobola=ing;
        objetobola.scaleToWidth(50);
        objetobola.scaleToHeight(50);
        objetobola.set({
            top:ball_Y,
            left:ball_X

        });//cabo a linha,
        canvas.add(objetobola);

    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if(
		(
			ball_X==buracox

		)&&(ball_Y==buracoY)	){
			canvas.remove(objetobola);
			document.getElementById("hd3").innerHTML="voce errou";
			document.getElementById("myCanvas").style.borderColor="red"
		}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_Y >=5)
		{
			ball_Y=ball_Y-block_image_height;
			canvas.remove(objetobola);
            newImage();
		}
	}

	function down()
	{
		if(ball_X <=450)
		{
			ball_Y=ball_Y+block_image_height;
			canvas.remove(objetobola);
            newImage();
		}
	}

	function left()
	{
		if(ball_X >=5)
		{
			ball_X=ball_X-block_image_width;
			canvas.remove(objetobola);
            newImage();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X=ball_X+block_image_width;
			canvas.remove(objetobola);
            newImage();
		}
	}
	
}

