//*****Level Select*****


/*
//Test Variables when needed
var xaxis: float = 50;
var yaxis: float = 50;
var height: float = 50;
var width: float = 50;
*/

//GUI 
function OnGUI ()
{
	
	if (GUI.Button(Rect(100, 140, 100, 50), "Dip n' Dots"))// Web App(100, 140, 100, 50)
	{
		Application.LoadLevel("sceneLevel1");
	}
	
	if(GUI.Button(Rect(220, 140, 100, 50), "Raining Dots"))//Web App(100, 140, 100, 50)
	{
		Application.LoadLevel("sceneLevel2");
	}
	
}