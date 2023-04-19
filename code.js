var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

textFont("Comic sans");
var ball = createSprite(200, 300, 20, 20);
  var box1 = createSprite(55, 50, 40, 20);
  var box2 = createSprite(105, 50, 40, 20);
  var box3 = createSprite(155, 50, 40, 20);
  var box4 = createSprite(205, 50, 40, 20);
  var box5 = createSprite(255, 50, 40, 20);
  var box6 = createSprite(305, 50, 40, 20);
  var box7 = createSprite(55, 80, 40, 20);
  var box8 = createSprite(105, 80, 40, 20);
  var box9 = createSprite(155, 80, 40, 20);
  var box10 = createSprite(205, 80, 40, 20);
  var box11 = createSprite(255, 80, 40, 20);
  var box12 = createSprite(305, 80, 40, 20);
  var box13 = createSprite(55, 110, 40, 20);
  var box14 = createSprite(105, 110, 40, 20);
  var box15 = createSprite(155, 110, 40, 20);
  var box16 = createSprite(205, 110, 40, 20);
  var box17 = createSprite(255, 110, 40, 20);
  var box18 = createSprite(305, 110, 40, 20);
  var box19 = createSprite(55, 140, 40, 20);
  var box20 = createSprite(105, 140, 40, 20);
  var box21 = createSprite(155, 140, 40, 20);
  var box22 = createSprite(205, 140, 40, 20);
  var box23 = createSprite(255, 140, 40, 20);
  var box24 = createSprite(305, 140, 40, 20);
  var box25 = createSprite(55, 170, 40, 20);
  var box26 = createSprite(105, 170, 40, 20);
  var box27 = createSprite(155, 170, 40, 20);
  var box28 = createSprite(205, 170, 40, 20);
  var box29 = createSprite(255, 170, 40, 20);
  var box30 = createSprite(305, 170, 40, 20);
  var box31 = createSprite(355, 50, 40, 20);
  var box32 = createSprite(355, 80, 40, 20);
  var box33 = createSprite(355, 110, 40, 20);
  var box34 = createSprite(355, 140, 40, 20);
  var box35 = createSprite(355, 170, 40, 20);
  var player = createSprite(200, 350 , 150, 10);
 var score=0;
 var gamestate = "start";
 
 ball.shapeColor = "teal";

createEdgeSprites();

function draw() {
  background ("white");
 
  if(gamestate == "start"){
textSize(30);
   text("press space to start",50,250);
       if(keyDown("space")){
    ball.velocityX = 2;
    ball. velocityY = 5;
    gamestate = "play";
  }
  }
  
  if(gamestate == "play"){
     ball.bounceOff(edges);
  ball.bounceOff(player);
  
textSize(20);
  text("score = " + score,10,20);
  
  player.x = World.mouseX;
 
    if(ball.isTouching(box1)){
    ball.bounceOff(box1);
    box1.destroy();
    score+=1;
  }
  if(ball.isTouching(box2)){
    ball.bounceOff(box2);
    box2.destroy();
    score+=1;
  }
 if(ball.isTouching(box3)){
    ball.bounceOff(box3);
    box3.destroy();
    score+=1;
  }
 if(ball.isTouching(box4)){
    ball.bounceOff(box4);
    box4.destroy();
    score+=1;
  }
 if(ball.isTouching(box5)){
    ball.bounceOff(box5);
    box5.destroy();
    score+=1;
  }
 if(ball.isTouching(box6)){
    ball.bounceOff(box6);
    box6.destroy();
    score+=1;
 }
 if(ball.isTouching(box7)){
    ball.bounceOff(box7);
    box7.destroy();
    score+=1;
  }
 if(ball.isTouching(box8)){
    ball.bounceOff(box8);
    box8.destroy();
    score+=1;
  }
 if(ball.isTouching(box9)){
    ball.bounceOff(box9);
    box9.destroy();
    score+=1;
  }
 if(ball.isTouching(box10)){
    ball.bounceOff(box10);
    box10.destroy();
    score+=1;
  }
 if(ball.isTouching(box11)){
    ball.bounceOff(box11);
    box11.destroy();
    score+=1;
  }
 if(ball.isTouching(box12)){
    ball.bounceOff(box12);
    box12.destroy();
    score+=1;
  }
 if(ball.isTouching(box13)){
    ball.bounceOff(box13);
    box13.destroy();
    score+=1;
  }
 if(ball.isTouching(box14)){
    ball.bounceOff(box14);
    box14.destroy();
    score+=1;
  }
 if(ball.isTouching(box15)){
    ball.bounceOff(box15);
    box15.destroy();
    score+=1;
 }  
 if(ball.isTouching(box16)){
    ball.bounceOff(box16);
    box16.destroy();
    score+=1;
  }
 if(ball.isTouching(box17)){
    ball.bounceOff(box17);
    box17.destroy();
    score+=1;
  }
 if(ball.isTouching(box18)){
    ball.bounceOff(box18);
    box18.destroy();
    score+=1;
  }
 if(ball.isTouching(box19)){
   ball.bounceOff(box19);
    box19.destroy();
    score+=1;
  }
 if(ball.isTouching(box20)){
    ball.bounceOff(box20);
    box20.destroy();
    score+=1;
  }
 if(ball.isTouching(box21)){
    ball.bounceOff(box21);
    box21.destroy();
    score+=1;
  }
 if(ball.isTouching(box22)){
    ball.bounceOff(box22);
    box22.destroy();
    score+=1;
  }
 if(ball.isTouching(box23)){
    ball.bounceOff(box23);
    box23.destroy();
    score+=1;
  }
 if(ball.isTouching(box24)){
    ball.bounceOff(box24);
    box24.destroy();
    score+=1;
  }
 if(ball.isTouching(box25)){
    ball.bounceOff(box25);
    box25.destroy();
    score+=1;
  }
 if(ball.isTouching(box26)){
    ball.bounceOff(box26);
    box26.destroy();
    score+=1;
  }
 if(ball.isTouching(box27)){
    ball.bounceOff(box27);
    box27.destroy();
    score+=1;
  }
 if(ball.isTouching(box28)){
    ball.bounceOff(box28);
    box28.destroy();
    score+=1;
  }
 if(ball.isTouching(box29)){
    ball.bounceOff(box29);
    box29.destroy();
    score+=1;
  }
 if(ball.isTouching(box30)){
    ball.bounceOff(box30);
    box30.destroy();
    score+=1;
  }
    if(ball.isTouching(box31)){
    ball.bounceOff(box31);
    box31.destroy();
    score+=1;
  }
    if(ball.isTouching(box32)){
    ball.bounceOff(box32);
    box32.destroy();
    score+=1;
  }
    if(ball.isTouching(box33)){
    ball.bounceOff(box33);
    box33.destroy();
    score+=1;
  }
    if(ball.isTouching(box34)){
    ball.bounceOff(box34);
    box34.destroy();
    score+=1;
  }
    if(ball.isTouching(box35)){
    ball.bounceOff(box35);
    box35.destroy();
    score+=1;
  }
  }
 
 if(score === 35){
   gamestate = "end";
 }
 
 if(gamestate == "end"){
   ball.velocityX = 0;
   ball.velocityY = 0;
   ball.destroy();
   player.destroy();
   textSize(25);
   text("Congratulations",50,250);
 }
 
  drawSprites();

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
