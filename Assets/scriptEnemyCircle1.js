//***Enemy Circle Script***

//Inspector Variable
var circleSpeed : float = 10.0;
var heightLimit : float = 200.0;

//Private Variables

//Game Loop
function Update () 
{
	transform.Translate(0, circleSpeed * Time.deltaTime, 0);
	
	if(transform.position.y <= heightLimit)
	{
		Destroy (gameObject);
	}
}