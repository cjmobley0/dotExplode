//Main Menu Script


//
function OnGUI () 
{
	
	if (GUI.Button(Rect(275,180, 120, 71), "Play"))
	{
		print("Start Game");
		Application.LoadLevel("sceneScreenLvlSelect");
	}
	if(GUI.Button(Rect(555,6,89,56), "Exit Game"))
	{
		print("Exit Game");
		Application.Quit();
	}
}