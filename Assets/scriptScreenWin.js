//Win Screen Script

//var position = Vector3(Random.Range(-2,2), Random.Range(-3, 5), 0);
//
function OnGUI()
{
	GUI.Label(Rect(150,200,300,300), "YOU WIN!!!");
	
	if (GUI.Button(Rect(450,858,252,186), "Restart?"))
	{
		print("Start Game");
		Application.LoadLevel("sceneLevel1");
	}
	if(GUI.Button(Rect(864,18,270,153), "Exit Game"))
	{
		print("Exit Game");
		Application.Quit();
	}
}