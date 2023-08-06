$(document).ready(function () {
  const redWallClass = "youlose";  
  const startSts = "Click the \"S\" to begin.";
  const inprgSts = "Game started! Navigate through the maze to reach \"E\"."
  const stsElement = "#status";
  const startElement = "#start";
  const bdryElement = ".boundary";
  const mazeElement = "#maze";
  const endElement = "#end";    
  const winMsg = "You win! :]";
  const loseMsg = "Sorry, you lost. :[";
  const outMazeMsg= "You've moved your mouse around the outside of the maze!";
  
  let gameStarted = false;
  let hitBoundary = false;
  let outMazeflg = false;
      
  function onStartClick() {
    if (!gameStarted) {
      startGame();
    }
  }      
  
  function onBoundaryEnter() {
    if (gameStarted) {
		if(!hitBoundary){
			hitBoundary = true;
		}
      changeWall(redWallClass);	  
    }
  }
  
  function onMazeEnd() {
    if (gameStarted) {
	  finalJudge();
      stopGame();
    }
  }  
    
  function finalJudge(){
	if (!hitBoundary) {
		showAlert(winMsg);
      } else {
		showAlert(loseMsg);
      }
  }
  
  function stopGame() {
    gameStarted = false;
	hitBoundary=false;
	outMazeflg=false;
	resetWall();
	setStatus(startSts);      
  }
  
  function resetWall(){
	  $(bdryElement).removeClass(redWallClass);
  }
  
  function startGame(){
      gameStarted = true;
      hitBoundary = false;
	  outMazeflg=false;
	  setStatus(inprgSts);
  }

  function setStatus(sts){
	$(stsElement).text(sts);
  }
  
  function showAlert(msg){
	  alert(msg);
  }
    
  function changeWall(wallColor){	  
	  $(bdryElement).addClass(wallColor);
  }
  
  function onMazeLeave(){	  
	  if(gameStarted && !outMazeflg){
		  outMazeflg = true;
		  if(!hitBoundary){
			  hitBoundary=true;
		  }
		  showAlert(outMazeMsg);
		  changeWall(redWallClass);
	  }  	  
  }
  
  $(startElement).click(onStartClick);  
  $(bdryElement).mouseover(onBoundaryEnter);
  $(endElement).mouseenter(onMazeEnd);
  $(mazeElement).mouseleave(onMazeLeave);
});
