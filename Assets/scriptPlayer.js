//Player Scripts

//Inspector Variable
var tagName 	: String;		//Allow the designer to setup a tag in inspector
var rayDistance : float = 0;	//length of the ray for our raycast
var score		: int = 0;		//Score for our player
var gameTime  	: float = 20;	//Amount of time game will last
var loadWaitTime: float = 3.0;	//Amount of time before next scene
var scoreToWin	: int = 10;		//Amount needed to win game

//Private Variable


//
function Start()
{
	InvokeRepeating("CountDown", 1.0, 1.0);		//Repeat coundown every sec
}

//Update - called every frame
function Update () 
{
	//Use mouse button to select game objects in the scene
	if(Input.GetMouseButtonDown(0))
	{
		var hit : RaycastHit;
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);//gets mouse position
		
		if(Physics.Raycast(ray, hit, rayDistance))
		{
			if(hit.transform.tag == tagName)
			{
				var enemyScript = hit.transform.GetComponent(scriptEnemy);
				enemyScript.numberOfClicks -= 1;
				if(enemyScript.numberOfClicks == 0)
				{
					score += enemyScript.enemyPoint;
				}
			}
			else
			{
				print("This is not an enemy");
			}
		}	
	}	
}

function CountDown ()
{
	if(--gameTime == 0)	//Subtract from gametime & avoid going neg seconds
	{
		CancelInvoke ('CountDown');
		if(score >= scoreToWin)
		{
			Application.LoadLevel("sceneScreenWin");
		}
		else
		{
			Application.LoadLevel("sceneScreenLose");
		}
	}
}

//
function OnGUI ()
{
	GUI.Label(Rect(10,10,100,20), "Score: " + score);
	GUI.Label(Rect(10,25,100,35), "Time: " + gameTime);
}