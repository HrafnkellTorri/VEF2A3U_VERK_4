// Liður #1

var prototypeOF = {
  		Name: "Shield",
  		Voice: "Deep",
  		Talk: function () {
  			return this.Name, this.Voice;
  		}
};

var OS = Object.create(prototypeOF);

OS.Name = "Archer";
OS.Voice = "Light";

document.getElementById("child").innerHTML += "Child ---> " + OS.Name + " " + OS.Voice + "<br> End of Part I";

// Liður #2
i = 0;

function Spaceship(n,h)
{
	this.name = n;
	this.health = h;
	this.shoot = function() 
	{return this.health = this.health - 1}
}

var Constilation = new Spaceship("Constilation",50);
var SpaceRacer = new Spaceship("SpaceRacer",10);
var Beast = new Spaceship("Beast",30);
var Damage = new Spaceship("Damage",20);

function showname(Name)
{
document.getElementById("spaceship").innerHTML += Name.name;
}

Spaceship.prototype.fly = function() {
this.speed = 5, this.speed + 1;
};

SpaceRacer.name = "SpaceDrifter";

showname(SpaceRacer);

showallpropsandmethods();













function showallpropsandmethods()
{
	for (var prop in SpaceRacer) 
	{
		Prefix(i)
		i++;
      	document.getElementById("disp").innerHTML += (" 1. " + prop + " = " + Constilation[prop] + "<br>");
        document.getElementById("disp").innerHTML += (" 2. " + prop + " = " + SpaceRacer[prop] + "<br>");
        document.getElementById("disp").innerHTML += (" 3. " + prop + " = " + Beast[prop] + "<br>");
        document.getElementById("disp").innerHTML += (" 4. " + prop + " = " + Damage[prop] + "<br>");
	}

	document.getElementById("disp").innerHTML += ("End of Part II");

function Prefix(i)
	{

	 	if(i == 0)
		{
			document.getElementById("disp").innerHTML += ("<h2>Names of the ships <br>");
			
		}
		else if(i == 1)
		{
			document.getElementById("disp").innerHTML += ("<h2>Health values <br>");
			
		}
		else if(i == 2)
		{
			document.getElementById("disp").innerHTML += ("<h2>Shoot method <br>");
		}
		else if(i == 3)
		{
			document.getElementById("disp").innerHTML += ("<h2>Fly prototype <br>");
			
		}
	}
}
