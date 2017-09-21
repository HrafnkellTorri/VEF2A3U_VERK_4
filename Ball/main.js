var canvas = document.querySelector('canvas'); //canvas skilgreindur

var ctx = canvas.getContext('2d'); //canvas hefur 2d stillingu



var width = canvas.width = window.innerWidth;

var height = canvas.height = window.innerHeight;



// function to generate random number



function random(min,max) { //gert er random function

  var num = Math.floor(Math.random()*(max-min)) + min;

  return num;

}

function Ball(x, y, velX, velY, color, size) { //Bolta constructor
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}


Ball.prototype.draw = function() { //breytt ball í gegnum prototype
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

var testBall = new Ball(50, 100, 4, 4, 'red', 1000); //gert test bolta


Ball.prototype.update = function() { //update sem sýnir hreyfingar boltanna
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}


var balls = [];
 
function loop() { //parturinn sem Parturinn sem ákveður hvernig boltarnir líta út og hraða þeirra
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 1400) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      random(1,12)
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}


loop(); //kóðinn endurtekur sig

Ball.prototype.collisionDetect = function() { //kannar hvort boltarnir hafi snerts....næ ekki að láta það virka
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

balls[i].collisionDetect();
