//Enemy Script

//Inspector Variable
var shapeColor		: Color[];			//Color of the object
var numberOfClicks 	: int 	= 2;		//number of clicks before destroyed
var respawnWaitTime	: float = 2.0;		//Wait until respawn
var explosion		: Transform;		//Load particle prefab
var enemyPoint		: int 	= 1;		//value of enemy object
var dropSpeed 		: float = -15.0;



//Private Variable
private var storeClicks : int = 0;

//Start is only called once in the lifetime of the behavior
function Start ()
{
	storeClicks = numberOfClicks;
	var startPosition = Vector3(Random.Range(-8,8), Random.Range(5, 5), 0);//Randomizes objects position
		transform.position = startPosition; //move the game object to new location
		RandomColor();
}

//Update - called every frame
function Update ()  
{
	transform.Translate(Vector3.down * dropSpeed * Time.deltaTime);
	
	if(transform.position.y <= -6)
	{
		transform.position.y = 7;
		transform.position.x = Random.Range(-7.0, 7.0);
	}
	
	if(numberOfClicks <= 0)
	{
		if (explosion)
		{
		Instantiate(explosion, transform.position, transform.rotation);//create the explosion
		}
		//var position = Vector3(Random.Range(-8,8), Random.Range(5, 5), 0);//Randomizes objects position
		transform.position.y = 7;
		transform.position.x = Random.Range(-7.0, 7.0);
		
		RespawnWaitTime ();
		//transform.position = position; //move the game object to new location
		numberOfClicks = storeClicks;
		
	}
}

//RespawnWaitTime used to hide/unhide object for set amount of time
function RespawnWaitTime()
{
	renderer.enabled = false;
	RandomColor ();
	yield WaitForSeconds(respawnWaitTime);
	renderer.enabled = true;
}

//RandomColor used to change material of object
function RandomColor ()
{
	if(shapeColor.length > 0)
	{
		var newColor = Random.Range(0,shapeColor.length);
		renderer.material.color = shapeColor[newColor];
	}
}
