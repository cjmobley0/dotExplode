//Lose Screen Script

/*
//Test Variables when needed. CopyPasta: (xaxis, yaxis, height, width)
var xaxis: float = 50;
var yaxis: float = 50;
var height: float = 50;
var width: float = 50;
*/

//
function OnGUI()
{
	GUI.Label(Rect(310, 150, 120, 70), "Too Slow!");
	
	if (GUI.Button(Rect(235, 180, 95, 50), "Restart"))
	{
		print("Start Game");
		Application.LoadLevel("sceneLevel1");
	}
	
		if (GUI.Button(Rect(345, 180, 95, 50), "Level Select"))
	{
		print("Start Game");
		Application.LoadLevel("sceneScreenLvlSelect");
	}
	if(GUI.Button(Rect(580,10,89,56), "Exit Game"))
	{
		print("Exit Game");
		Application.Quit();
	}
}