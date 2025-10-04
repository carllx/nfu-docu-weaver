
## E01 Getting Started
------------------------

This is the first part out of three of making your first game with no code using visual scripting
And in this series
we're going to be making this game
You might have seen this game from one of Brake's tutorial
but in this series
we're not going to be using code
Insteadwe're going to be using a visual screen tripping
I'm gonna be using Unity for this series and the version that I'm gonna be using is 20
2021
So if you want to follow along
make sure you have a version 2021 installed and we'll start a new project by selecting and this version is gonna be 3D project and the project name I'll just call it the cube
Let's create it
The goal for the first part is to set up our scene for her game and also add player movement in this new project
We're gonna go to hierarchy and right click to bring a drop down menu and we'll go on the 3D object and add a cube
so this is going to be our ground and we can rename it right away
The hierarchy has the list of all the game objects that are inside of our scene
and this in the middle is our current scene
On the right side
we have the inspector for this game object
so you can see that the ground object is currently selected and in this inspector you can find components
So all of these groups right here are called components
The very top component is a transform
and this components is responsible for position
rotationand scale
So I want to scale this ground to cover more space
so I'll scale x to 15
and you can see that x is this red arrow here in this 3D space
and you can also see it right here
Now let's scale this ground in the z axis
So for Z
let's set it to 1000
and that's gonna be our ground
Let's go to hierarchy and add our player
Now it's also gonna be a cube
we'll name it player
and currently the player is in the ground
so we can use this area right here to bring it up above our ground to change the color
We can go to the project files right here
assetsand we can right click to bring a menu here
And in this menu
we want to select a material
we'll call it player material
When we have the material selected in the inspector
we have settings for this material and we want to change the color
So click on this white color
we'll change it to red
Now we have a red material and to assign the material to this cube
we can simply drag and drop on this object either in the scene or we can drag and drop
drop it in our hierarchy
Another option that you have is by selecting a player and dragging this material into our inspector
And that also changes to red
Now to test your game
you can click play right here
And currently our game doesn't do anything
So let's add some physics to our player object
By default
when you create a cube
we get a box collider with it
which is one of the physics components
A box collider is one of the collision shapes that we have in Unity
And if we click added Collider
you can see the shape here
You can resize it to what you like
but our collider is good
and we're going to leave it as that
Not to add gravity to our player
we can click Add component right here
and what we're looking for is the rigid body
The rigid body makes her player dynamic
And since the ground also has a box clearer
Now if we test the game
you can see that our player falls down on the ground
so we already have a ground or player
and now let's add an obstacle for the obstacle
I'm gonna use the same setup as I have for the player
So what you can do to make it faster is select the player
And if you press control D on the keyboard
that object that you had selected will be duplicated
And now we can move it forward
rename it to obstacle
and let's change the color of our obstacle
Right click in the access folder
create material
and this is going to be our obstacle material for the color
We're going to select a light gray and let's drag and drop it on our obstacle
Now in our hierarchy
we have a main camera
and currently you can see that the main camera is located right here in back of this cube
So what we're going to do in the game is move our player in this direction in the positive z
alsowhen we have the camera selected
we can see the preview of the camera and we can move the camera around to change the angle of our shot
And also you can rotate down and get the shot that you like
If you want to see a bigger preview of this shot
you can go to game and that's gonna display what we have right now
Now
currentlyboth of these objects are in the air and we want to position them on the ground
So to do that
we can go and set Y 2
1and we can do the same thing for our player
In the asset folder
we already have two materials
so let's go ahead and clean this up by adding another folder
We'll call it materials
and move both of these materials into the folder
Now that we have a simple scene setup
we can start looking at player movement
And in this series
we're not going to be using code
instead we're going to be using visual scripting
and that is why I'm using a version 2021 Unity added visual scripting into this version
If you use previous versions of Unity Unity to import a package called
but if you're using version 2021 or above
you don't have to import any packages
So to add move logic for our player
we can select our player and go to Inspector
click add component
and we're looking for a script machine
So like that
this will add two components
We have the variable components right here and the script machine component
We're going to set up some variables later on
but for now
we're going to work with the script machine
So in the script machine for source
we have two options embedded or graph
If we select embedded
then the logic that we will create only exists in this game object
But if you use a graph option
a new file is going to be created
And you can reuse this graph with other game object as well
So let's create a new graph
I'll call it player graph
We have the option for edit graph once you click edit graph for the first time
units is going to go ahead and import all the packages that are necessary for visual scripting
It will have to do only once in the new project in this new graph right here in the middle
we have these two units
a start unit event and an update unit event
The start event is going to be called only once per object when the game object goes to active state for the first time
But the update event is going to be triggered every single frame when the game object is active
To find and add other units to your graph
you can right click on the graph and you can search for a specific unit
The units are also grouped into categories
so if you're not sure what it's called
you can browse through the categories and find what you're looking for
One more event that I'm gonna mention is the Fix update
The fixed update is a little bit different than update
and the main use for the fixed update is for physics
So if you want to do any interaction with the physics
then you want to use the fixed update instead of the update
In our case
we want to get this cube to move
So we actually want to work with physics
Two of the options that we have to move our player is to add force or set velocity and to find exactly what you want to use
you can right click on the graph and search for one of those words
So let's look for force
We have all of these units that are available for us
and since we know our player has a rigid body
we can use one of these rigid body
add force
So let's click the first one right here and like that we add another their unit
So in this unit
we have some value inputs and you can see the value inputs are these circle inputs right here
And the triangle that we have right here is a flow input
And for this unit to do anything
we need to actually connect it to a output flow
And these three events actually output flow
Since we're working with physics
we're gonna use the fix update
Let's connect that right here for the force
we want to move in the z direction
So let's set the z direction to 10
And for the mode
the options that we have is force
accelerationimpulse
and the velocity change
Force is going to take the mass of our object into consideration
while acceleration is going to ignore that
Let's actually use acceleration in our case
and with this
let's go and test it out
As soon as the game starts
you can see that the player starts rolling
but we want our player to slide
The reason why our player is rolling is because there is friction between ground and the player
And with the acceleration that we're applying to the player
it makes the player start rolling to remove the friction between player and the ground
we can go to our assets or right click and create a new asset physics material
We're going to call this one
no friction
And in the inspector
we have some settings for this asset
so we can set dynamic friction to 0
Let's also set static friction to 0
and for the friction combined by default
it's set to average
meaning that's going to take the average between the two surfaces for the friction
So our ground still has friction and our player doesn't
It will end up still having friction
The options that we have here is instead of average
we can just go minimum
So it's going to select the smallest friction and use that value in the physics calculation
Now let's select a player
And how you use this physics material is by connecting it on the box collider
So right here for material
we can connect no friction
And now our cube is sliding instead of rotating
that's good
now the player is using acceleration to move
and that means that our player is going to be moving faster and faster
So the other option that I mentioned is using velocity
We can search for velocity
and we can see that we have rigid body set velocity
Let's add that in
And with the velocity
we can actually set a specific speed that we want our player to move in the z direction
So let's set it to 20
and instead of connecting to add force
let's connect it to set velocity
You can remove any unit by selecting and pressing Delete on the keyboard
And now
as soon as the game starts
the player starts traveling at that velocity
So you can use the option that you want
but I'm going to go with the velocity for this series
With the current setup
there's a slight problem
and it is with gravity
So if I pick up my player in y direction
you can see that the player is actually floating in air instead of falling down with gravity
And the reason why that happens is because I reset the rigid body velocity back to 0
So whatever gravity is trying to do with velocity I'm resetting it back to 0
which makes my player float
To get the gravity to work again
I need to get the current velocity in y direction and pass that instead of the zero
we can look for velocity
And right here we have rigid body get velocity
we get an output of a vector 3
and the vector 3 has those three components
xy
and z
but we
you only n​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌eed to get the y value
So I can drag this to the side and look for and get Y
and right there at the top
I have an option for vector 3
get y
and this returns a float value
which we can use for the y
The problem now is that the set velocity is looking for a vector 3
and I need to combine this value with the speed that I want to move
So what we can do is drag it out and add another unit
The one I'm going to use is create a vector 3
and this one has an x
yand z values that can be passed in
So let's add that in and I can pass in the y value from our get velocity and for z
I can set it to 20
Now if we test it
we can see that the gravity is working again
So now we can place our player down to the ground
Now that we got our player to move forward
we can add some keyboard input to move the player from side to side
So let's go back to our graph
and for keyboard input
we can look for input and some of the options that we have here is get key
But the easier option to go with is by using Get axis
And in this unit
we have one input
a string
and it's the axis name
The axis name that I'm gonna use is horizontal
and the place where you can find the axis name
you can go to project settings
And under Input Manager
we have list of access that are available
And right here we have horizontal
which is controlled by left and right button
and also alternative with A and D
and there's lots more access names that are available here
Now this is the legacy input system
and if you want to see how to set up with the new input system I'll create a bonus video after the series
And in that video I'll show how to convert from the legacy input system to the new input system
Now the value that we're going to get from this unit is a flow and it's going to be between a negative 1 and 1 that works perfectly for us because we want to move our player either in the negative x direction or in the positive x direction
but we want to move a little bit faster than one unit per second
And to increase that speed
we can use the multiply unit
And here we can multiply by the speed we want to move in the x direction
So let's set it to 10 for now and connect it to our x input of our vector 3
And now we can use A or D or the errors to move our player side to side
Now
it would be nice if we can control the speed of our player from the inspector
and we actually can use variables to set that up
So how we can do that is go back to our graph
And right here
we have a different variables that we can use
The variables that are displayed in the inspector are object variables
So we can go to the Object tab and we can add some variables
I'll name the first variable forward speed for the type
this is gonna be a float
and for the value
let's set it to 20
Now you can drag this variable and put it in the graph
And instead of using that hard coded 20 value
we can use the value of this variable
We can do the same thing for the site speed and a variable float
Let's make it 10
drag it into our graph and connect it instead of the 10 that we have here
If we now take a look at the inspector under variables
we can see both of the those variables
and we'll be able to modify them later from here
Now
the last thing that we're going to do in this part is get our camera to follow our player
and to do that I'm going to use cinema machine that's packaged that provided by uniting
So we can go to window package manager
select Unity registry
and we can search for sending machine
click install
we can close this window and now we can go to our hierarchy and right here we have a new option a cinema
So we can add a 2D camera in the inspector for this object that we just created
We can see a follow option
We want to pass player as the follow up
So let's drag at the player object into the follow option
And now our camera is going to follow our player
If we take a look at the game preview
you can see that the angle is the exact angle that we were viewing our scene in
so it copied our scene view to our virtual camera
So if you want to reset it back to default
we can go into the inspector under transform
click Reset
and that's going to reset the settings back to 0
0
Now I can rotate this virtual camera to where I want it to be positioned and if you want to get the camera closer to the player
there's an option for camera and distance
So adjust that and it's going to get our camera closer to the player
You can see this red and blue overlay
And this is because we have the virtual camera selected
So if you don't want to see that overlay
just dissel collect all of the objects and that should go away
Now let's click play and see if our camera is following our player
And there we go
We got our camera to follow our player
Now we have this skybox in the background to change it to a solid color
we can go to main camera and right here in the camera options
we can switch from Skybox to solid color
and then we can select background color that we want to use
So let's use something like that
And with this
we're going to wrap up with this part
In the next part
we're going to create a game loop
So we'll look at some collisions
how to restart the level and also add coins that we'll be able to collect

## E02 Gameplay Loop
------------------------

You made it to the part two of this mini series
And in this part
we're going to create the game loop for this game
This game is gonna be level based
so we need to add a way to win the level and a way to lose the level
Also in this video
we'll add the ability of picking up coins
so let's get started
The first thing that we're going to add is the ability of losing the level and the two possible ways that you'll be able to lose in this game is either if this cube falls off or if we collide with an obstacle
the way we can check if the player is falling down is by checking the Y axis of our player
So let's go to our graph
I'll remove
start and update
We're not gonna be using those units in this graph before we add a check
If we're followin​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌g down
let's add this graph in a group and we can do that by honing control on the keyboard and dragging that
selecting the these units right here
And these units are gonna be our movement After we finish the logic with the movement
I want to do that check if the y is less than zero
so I can drag out a connection and we can look for an a unit and the if unit accepts a Boolean input
so it's true or false and based on the value
we can choose what we want to do
So let's create that Boolean input and we can search for the transform component and we want to get the position of our cube
which just want to look at the y axis
so let's get y of a vector 3
and now we want to check if this y value is less than negative one
So we can use this less than unit
add that in
And for the b value
let's pass in negative one
and this less than unit gives us the Boolean
and we can connect it to our if unit
let's add another group
and I'll just call it if falling if we are falling off the platform
what I want to do is actually restart the game
And the way that we can do that is by loading a scene
we can find that under scene manager
load scene
and I'm going to select this unit right here
load scene by scene name
you could just pass in the scene name that we use right here
sample scene
and it's going to load the scene
but when we're going to add more scenes for the levels
this one
restart the current level
So to make it we start
start the current scene
we can again
use the scene manager and get active scene
this gives us a scene object and from the scene object
we can get the name and pass that name as the scene that we want to reload
so let's move this and let's now name it restart scene
let's go and test it out
So now if we fall off the platform
you can see that the scene actually restarts and we do have this different lighting for our scene and this only affects the editor if you export it
it's not going to have the problem
but to show it correctly in the editor as well
what we can do is go to window rendering lighting
create a new lighting settings
and right there we get a new light settings file
So I'll just name it as you want and we want to generate the lighting
click generate
it's gonna go through and generate the lighting
and now when we play
you can see that the lighting is the same when we start the game
Now let's also add the logic of losing when we hit an obstacle
And to do that
we can go back to our graph and then here we can look for on collision and the options we have for on collision is exit stay or enter
there's also the 2D versions of it
but we're doing a 3D game
The one we're interested in right now is on Collision Inter
So whenever we collide with an object
this event is going to be triggered and if you want to see which objects you're colliding with
we can use a debug log unit and pass in a message there one of the output values that we have from uncollared inter-unit is collider
and that is the collider of the object that we collect with
So what we can do is get name of that component
component get name is the unit that we want to use and pass that as the message for our debug log
and now when we click play if we go to the console
you can see that we collide it with ground
which is correct because our cube is on the ground
And then a little bit later
we collided with an obstacle
Now we want to lose the game only if we collided with an obstacle
so we need a way to filter out that collision
we could use the name of the object to filter it out
but at any point
if you rename that object
our logic is going to stop working
So the better way of doing it is actually using the tags
and you can find the tags in the inspector right here
Currently it's untagged
we can look at the options that we currently have if we want to create another tag
we can click add tag and add another tag
So I want to add a tag called enemy
click save
then we need to select the obstacle again
And now in this drop down menu we can find enemy
So select that and our obstacle has the enemy tag
Now let's go go back to our player graph
we'll remove this debug log component and now we can create another if statement here that will be checking if the collector has the tag enemy
Let's drag this value out and search for compare tag
This is is the unit that we're going to use
so add that in and this unit returns a Boolean so we can pass that to our if statement for the tag
we're going to put enemy and if we collide with an enemy
we're going to restart the scene just like we did when we were falling
So we can reuse this group that we have here
Let's put this in a group as well
just name it if collide with enemy and let's go and test it out and now whenever we collide with the obstacle
you can see that the level restarts
But instead of restarting right away
I want a little delay so we can actually see the collision
Let's go back to the graph
One of the ways we can do it is by adding a timer node between these units
so let's go ahead and do that from true
we're gonna going to add a timer and on complete
we're going to restart the scene
The duration is currently set to one second
so let's leave it at that
but there's a slight problem with this setup
currently we won't have a problem with it
but if we collide with another enemy within one second
then the timer is actually going to restart because whenever we trigger the start for the second time
it actually restarts the timer
and that's not what we're looking for
The way we can prevent that from happening is by using a once node
The ones node is pretty straightforward whenever it trigger this node for the first time
it's going to go through the once flow
and afterwards it's gonna go through the after
you also have a reset option for the once node if you need to do that
So let's put all of that into our group
Let's go and test it out
So now you can see that we get a collision with it and one second afterward the game restarts
Now one more thing that I want to do is after we collide with that upst for the movement logic to be turned off
And to do that
let's go to our graph once more
And right here in our movement logic
we can add another unit here that will be able to use to disable this logic
So under control
we can look for the talk flow
And in the toggle flow
we have an on state and an off state
Whenever the toggle flow is going to be on
we're going to be doing the movement logic
But if our flow is going to be in off-state
then the movement logic is going to stop
To switch the toggle flow into off
we're going to use the timer started output and connect it to off
So now whenever you collide with obstacle
you can actually feel that you lost control over that cube
And that's the feeling that we're trying to go for
Now that we covered both cases of us losing
let's cover the case where we actually win in the hierarchy
Let's add another 3D object
let's use a cube
this is going to be our finish
so let's position it at 0 and 1
let's add another material for it
We'll choose a green color for material
add that in
and we can move it to the end of our level
scale it up in X axis to 15
and let's select the finish tag for it
We can go back to our player
add a graph
and in here on collision
enter after we compare with an enemy
and we get unfound
I want to check for another tag to speed things up a little bit
What you can do is select these two units that you want to duplicate and click control D on your keyboard
That's going to duplicate those units for you
And now we can connect the If unit to the false output of the other one and also connect the collider to the pair tag
Change the tag name to finish
because that's what we're checking for
If we collide with the finish line
what I want to do is actually stop our cube from moving
And since we're using rigid body to control our player
what we can do is set kinematic of our rigid body too
trueand that will stop our player from moving or bouncing off the finish line
Since we're gonna take a look at the logic of loading at the next level in the next part
for now I'm gonna use the restart logic right here and connect it there
We can test it out now
So now if we reach the finish line
the cube is going to stop and the game is going to restart
The last thing they're gonna do in this part is add coins
So let's add another 3D object
Let's use cylinder this time
move it up
let's scale it 2．2 in a Y axis and rotated by 90 degrees in the X axis
rename it to coin
let's add another material
I'll name it to coin material
And for the color
let's choose a yellow color
Add that to the coin
So now we have a yellow coin
Select this coin
and for this coin
I want to do something different with the collider that we have here
So we have a capsule collider here
just gonna leave it as is
but I want to switch it to be a trigger so that our cube won't actually collide with it
And I think
The scale needs to be a little bit smaller
So let's set it to ．8 in x
．1 in y
and ．8 in z
Now let's add the coin logic to our coin object
So let's add a script machine
We'll use the embedded graph
but before we go and edit the graph
let's select a player and go to Inspector
Select a player tag for a player
select the coin and go Added graph
We can remove the start and update events
And now instead of adding on collision event
we want to add on trigger event
We'll do the same check
so add an if unit and let's add a compare tag unit
connect that to the if unit And the tag name that we're comparing to is player
If this event was triggered by a player
then what we want to do is add a coin to our counter and then remove this coin
Now there's several ways you can add a counter
You can add a counter as a scene variable
and then after you finish the level
you can add those points to a saved variable
which is be the total coins you receive
Or you can just count the total coins
I'm just going to count the total coins
So I'm going to use a saved variable
Let's initialize the variable coins
and this is going to be an integer set to 0
We can drag this coin variable into our scene
And now if the player triggers this event
we want to add one to this coin variable
So let's look for add
We'll use the scalar
The value for B is gonna be one
and now we need to save this variable back to coins
You can search for a save variable and add it that way
The other way you can do it is by dragging the variable from the list
To get the set option
You can hold Alt down
release it
and that's going to give you the set variable
connect that on true
and pass in the incremented value
The last thing we're going to do is destroy this game object so we can look for game object destroy and for the object input we want to pass in this because we want to destroy this game object
With that
our logic is complete
Let's click play
So now when we collide with a coin
that coin gets destroyed and our coin count increases
To check if the coin count increases
we can go back to our graph and check saved variables
and then instead of the initial
we can check for saved
And the current count is at 5
In the next part
we're going to look at UI and how we can display that coin count and also how to create levels
If you like the video
click on the like button if you have any questions right in the comments and I'll see you in the next one

## E03 UI & LEVELS
------------------------

In this part
we're going to add UI and levels to our game
So let's get started by going to our scenes folder
And in the scenes folder
let's create another scene and we'll call it start
This is gonna be the start scene of our game
And in the start scene
what I wanna do is go to UI and add an image
It's just gonna be a white image that I'm gonna have in the background
And when I'm working in UI
actually like to work in the game view instead
So let's go inside the game view and you can see the image is right here in the corner
Now I want to stretch this image covering the whole window here
And to do that
what I can do is click on this icon right here
holding all down on the keyboard
I can click on this icon to stretch it in both horizontal and vertical
So this is gonna be our background
And now I want to add some text
So let's go to UI text
this is gonna be our start game text
so I'll just name it like that
And the text is also going to have a start game
I'll increase the width to 800 and the height to 100
In the text settings
I want to increase the font size to 80 and also for alignment
I want to center it for the font type
If we click right now
you can see that there's only a one font that we have here
And I want to add a robot font
We'll create a folder called fonts
You can download the font that you wanna use
but right here I have a robota font
I'll add the folder here
and now if I start like start game again and go to fonts
we have more options and I wanna use the thin version
So this one right here
that looks pretty good
but there's one thing that I like to change in the UI so currently
if I make the screen bigger like this
you can see that the size of the text is still the same
And if you want your UI to scale with the size of the screen
what you can do is g​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o to Canvas and right here for UI scale mode
currently it's set to custom pixel size
You can switch to scale with screen size
and you can choose either to use width or height for your scaling
So I'm going to use the height
And now if the window gets bigger
the UI also gets bigger
And I just like it like that

### Scene Management

Now what I want to do for the start scene is when you click on the screen to start the next level
And the way we can create that is by selecting this image
let's actually rename it to UI background
And for this game object I'm going to add a component
a script machine
and I'll select embedded
go to added graph
We're not going to use these units
Let's remove them
And the unit they're going to use is on mouse input
And in here we have a choice of selecting which button we're listening for and what type of action
So what I want to do here is load my first level
And for that
we're going to use scene Manager
load scene
But for this one I'm not going to use the scene name
Instead I'm going to use scene build index and I'll show what that is in a little bit
And for the same bill index I'm going to pass in one and also I'll explain this in a little bit and that is it for our logic
Now let's go to our assets and go to our scenes
And let's rename our simple scene to level 1
And now we want to add these two scenes into our game
The way you do that is going to file build settings and right here at the top we can see scenes in build currently it's empty
We can add our start scene and then a level 1
And right here on the right
we have built index 0 and 1
and that's why I was using one for the build index that I wanted to load
We can close that and test out our start scene


### Level Design

So now if I click on the screen
you can see that the game starts and we can play our level
The level 1 is not a real
really much of a level
So let's go fix that
Let's select the level 1
But before you start copying the obstacles and the coins
what you want to do is create some prefabs
So let's create a folder
call it prefab
and the prefab is a saved configuration of a game object
So if we want all of our coins to be configured just like we have it in the scene
what we can do is drag this coin into the assets folder
and that will create a prefab
Nowif we use the prefab in our scene
so for instance
we duplicate this prefab now at any point
if you want to modify how our coin looks or how it behaves
what we can do is actually make those changes on the prefab
So for instance
let's scale it in X axis by 2
And as soon as we make that change on the prefab
you can see that both of those coins in our scene actually got modified
So that is the benefit and it works the same for the logic as well
Now for this coin
I used an embedded source
And although it's going to work right now without a problem
it is recommended to use graphs instead of embedded for a prefab because some of the logic
it won't actually update correctly
And like in our case
since we already created an embedded graph
what you can do is actually convert it to a graph
So click Convert right here
I'll just name the asset coin graph
click Save
and that switched our source to graph and created that file for us
So if we select these coins
you can see that updated here as well
and we shouldn't have problems with our graphs
Now let's also make a prefab for our obstacle
for our finish line
and for our player
For the player
we actually created a graph
so we don't have to do any conversions here
Let's actually create a ground as a prefab as well
But for the other objects
if we're not going to be changing anything with them between the levels
we can just keep them as they are
But in case if we want to change anything with our camera or light in all of our our scenes
what we can do is create another empty game object and call this level base
Now we can add these three objects inside here
And from this
we can create a prefab that can be used in all of our levels
The scene variables are meant to be unique per scene
so we're gonna leave that as a regular game object
Now let's just make some changes here
Select this obstacle and add some obstacles around
And these coins
we can move them around so that it would be easier to collect some like that
A very simple first level
let's save this level
go to assets and to our scene
select the level right here
and we can duplicate this level by hitting control D
that creates a duplicate and it actually increments the level 1 to level 2
Let's go to level 2 now to make the level design a little bit easier
you can actually change your view
so we can click on this Y to actually look from the top
And if we click on the center right here
it's going to switch from perspective to orthographic
So now we're in orthographic view and we can start creating our level like this from the top view
So let's move the finish line a little bit further
make our level longer
and then we can hold this square down to move in both x's
When you hold in an object
you can click control D
and it will create a duplicate of that object and leave it at the place where you're holding it
So it's a fast way that you and create your scene like that
Let's do the same thing with coins
So add some coins here
save level
and let's duplicate one more time to create level 3
Open level 3
move the finish line even further back if you have any difficulty of selecting that object
the ground always gets selected
One of the options we have here is to block selection
So right here in the hierarchy
if we click on this icon
we're no longer will be able to select the ground
so that might help you
We can hold down Shift to select more than one item
Alsoyou can scale the obstacles and develop logic is still going to work
so that is also an option
but let's just call that good for our level 3
click save
and we are done with our levels
Now we can go to file build settings and add the two levels that we just created
We can select more than one and those in
And now we have more levels that we can play
Now I haven't added the logic of loading at the next level
so let's go ahead and do that right now
And since we're using prefabs and graphs
if we're going to make a change in one level
the change is gonna be made to all levels as well
So let's go added graph
And in the previous part
what we did after we hit the finish line was just restart the level
And now we want to change it to loading the next level
So we can use the same approach scene manager
load scene by build index and the way we can load the next level is by incrementing our build index
because our build index is actually incrementing with levels
So we'll use that to load our next level
Let's get active scene first
and from this scene
we'll get build index
and to this index
we're gonna add one and pass it in
For our load scene
we can close that
go to our start scene and test out the game
So click on the screen and we start with the first level
Let's get those coins
We can go to the next one
And after we complete the fourth one
you can see that we get an error because build index 4 does not exist
So to avoid the error
what we can do is duplicate our start scene and make an end scene out of it
Let's open the Ensign
And in here for text
let's just call it text
And for text
which is
let's say thanks for playing
Nowcurrently
since we duplicate the start
if you click on the screen
it's going to go back to level 1 and let's change it to actually quit the game
So we can remove that load scene and look for application to
So now if you click on the end scene
it's going to quit the game

### Coin
But one more thing that we want to add is actually display the quaint count right here at the top
And for the change to be applied to all the levels
I'm actually going to use the level base
One way we can go and modify our prefab is by clicking this error right here
and it goes inside of our prefab
If you want to get out
you can click this error right there
It's going to go back to your scene
So let's go inside of our prefab
And inside here
let's add an image for the image source
Let's actually select one of the default images here
this knob
and change the color of it to yellow
something like our coin
Let's switch the UI scale mode to scale with screen size and switch it to use the height
Now I want to position this image in the top left corner
So we can just use that
And for the I'm going to set it to 50 by 50
something like that
And now let's add a UI text inside of our image
We're going to align it to left and then set position X to 140
For the height
Let's set it to 60 and position it in the center
For the font size
I think 30 will do
Put some numbers here
So that's how it's going to look
And we can switch our font to robot or light some like that
That looks a little bit better
and I think we can go and add some logic for changing the value
So let's add script machine
switch to embedded
add a graph
And in here
I want to set text for text object
So let's find sect text
And I'll do it on start and also on update
Now for the text
I need to pass in the amount of coins we have collected
And if you remember from the last part
we have it in the saved variables
currently it's at 16
So we can add that variable to our graph
But since our variable is an integer
we need to convert it to a string
So we want to look for integer to string unit that gives us a string output
and we can use that for our input
for our set text
we can save it
click play
and test it out
So right there
we have a coin count
and it increases each time we pick up an item
But we're still getting that error from our level 3
And it's because we have not added the Ensign to our build settings
Add the end scene in
and that should fix that problem
Now
a couple of things that I want to do before we try building this game is go back to assets
prefabsselect our player
And for the player
I think the forward speed is a little bit too fast
so I want to decrease it to 18
And that should change the forward speed of our player in all of our levels
One more thing I want to add is some fog
and the way we can add fog is go to window rendering lighting
go under environment
And right here we have an option for fog for the color
I want it to be our background color
so it's going to blend in with the background and I think I'll increase the density tells pretty good
Now if you go to our scenes and select level two
you can see that the settings are different here
So I'm gonna go ahead and do the same thing here as well
save it and do the same thing for our level 3
Save that
And now the way you can build and test the game is by going to build settings
Right here
I have a Windows platform currently selected
build and run
You can create a folder builds and just build it inside there
And after the game is built
it will run and you can test it out
So right there
we successfully have built a game
I'm still going to make some bonus parts for this series
and in one of them
I actually want to add the same transition
So if you're interested in that
make sure you subscribe and turn on that notification so you get notified
Once I post that out
I hope you guys enjoyed this mini series and that you found it helpful
Click on that like button
write in the comments what you thought about it
and I'll see you in the next one




## E04 Cutscene Animation
------------------------

In this video
we're going going to add a cutscene that's going to display a level complete
After we complete the level
that's going to involve some UI animation and it adds more live feel to it
So let's go to our level base again
And inside here
we're gonna reuse the cannabis that we have here
I'm gonna rename this UI coin
And let's add another UI image
This is gonna be our level complete
I want to go and stretch it
I'll click that inside here
let's add text and for text I'm just going to have a level complete
we'll choose a robot or bold set height to 100 with to 800
change font size to 80
center it
and I think that will be good
Now what I want to do is animate this cut scene
so faded in from transparent and the way we can do that is by going to animation animation that gives us this screen right here and we can create a new animation I'll call it level complete animation
click save and one of the ways you can record animations is by clicking this record button
And now any changes that we make here are actually going to be recorded
So let's start with an alpha channel at 0 and then go down one second and switch the alpha back to full
we can start recording and click play to preview it
but you have to go to the scene view to see the preview
So right there is the preview of our animation
And with this animation
we actually can animate the children of this game object as well
So now let's select our text and click the record button and we want to change the color of our text as well
switch it to full transparent
and then a little bit after we fade in that white background
we can switch to transparency back to full
And this is how it looks right now
But I want to start the fate of the text a little bit later than the background
so we can just drag this keyframe and put it right there
Let's test it out
and there we go
that's how our animation is going to look
We can tur​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌n off recording
and by default
the animation is going to play as soon as we enable the game object
So what we're going to do is by default
have it turned off
and when we complete the level
we need to turn the game object on

### Switch UI
So let's go to a player and add the logic of turning that game object on
So right here
before we load the next level
I want to add the logic for turning on that game object
And the unit that we're gonna use is game object set active
set it to true
But right here
I need to somehow connect that game object
And one of the ways we can do that is by going back to our level base here
And in this game object at variables
we'll add a new variable level complete
This is going to be a game object and connect this level complete right here
Now in a player
what we can do is game object find by name
and the object that we're looking for is level based
And from this game object
we want to find that variable
So let's look for and get object variable
connect that as our object
And the name of our variable is level complete and connect that as the object that we're trying to set active
Nowwe had to do that so that our player can find this level complete game object in all of our levels
And with this set up
that's exactly what's going to happen
Now
after I set that game object active
I wanted to switch to the next level
but after 3 seconds
so we can use a timer for that
set it to three
and after the timer is complete
then we want to load the next scene
So let's go to our start scene and test out our game
And you can see that that logic is working
But there's one thing that we need to change to our animation
Let's find the animation file in our assets
And right there
we have it turned on to loop time
You want to switch it out so that animation only runs once
we can build and run it
And there we go
We've successfully added cutscene to our game
Hopefully you guys enjoyed this video
Click on that like button if you did
If you have any questions right in the comments
and I'll see you in the next one

## E05 Coin Shop


------------------------

Another bonus part for this series
and in this video
we're going to create a coin shop for the game
So I'm going to start by duplicating the start scene
So let's start seeing Control D
and we're gonna call this coin shop
open it up
### Shop UI
let's go and change the text
So this is gonna be our shop and we'll anchor it at the top
move it down a little bit so it won't be all the way up there
Now in the shop
I want to create some of the items
So let's start by creating an Mt game object
And this is going to be our list
For this list
we have several options that we can use
So we can use horizontal layout if which is going to have one line
or you can use a great layout if you're looking to create more than one line or a vertical shop
you can use the vertical layout group
but I'm going to use the horizontal layout inside this list
I'm going to create a UI image and let's just select a blue color
Let's rename it to blue
Nowif we duplicate this blue color
you can see that we're adding new items here
but they're all stacking from the center
So let's go and fix that
First
let's add some spacing
20 spacing is going to be good
and let's use upper center to center the children
and for rectangular transform currently is width of 100 by 100
And that's why we're seeing that it's just overflowed following the list
So we can hold out and stretch it to fit the whole thing
When we do that
you can see that it's actually not using our spacing is just expanding them throughout the whole space and we can turn that off by selecting this option right there
child force expand
and that's going to make that nice 20 spaced items
So that's some of the things that we can do with horizontal layout
Vertical and grid layout also have similar functions
So if you prefer to use that
you can do that
Now let's remove the other ones and we need to add some more information here
for instance
how much this upgrade costs
So what I'm gonna do is actually go to my level
level 1
and inside Canvas I'm going to copy this UI coin game object
And let's go back to our coin shop and paste that in and put it in our UI background and that displays the current count of coins
So we're just seeing a reason what we already have created
Now let's also paste the same thing inside of our blue skin
Let's move it inside here and let's align it to bottom right
Move it down a little
and we can set the scale to 0．7
Let's go to our text and change to the price of the skin
So we can say it's going to cost us 10 coins
And this text has a script machine attached to it
And it's the one that we use to update the count of coins
We're not going to use it here
so let's actually remove it

### Item Config01
And now we can select this game object blue and add a script machine here
Let's create a new graph and we'll call it item graph
And before we start creating the graph
we'll need some variables for this object
One of them is going to be an ID
And this is going to be just a unique value per item
So we can use it for saving the state of our purchase
Let's add that
And for this
which is gonna use a string I'm just gonna call it blue
And another one is going to be our color
So let's add color and let's find a color type
We'll use the same color that we have here
We'll need another variable for our price
so let's add that price and it's gonna be an integer
set it to 10
and for the last variable we need the game object that has the text so we can actually change that value
And I'll just call it price text type game object
and just drag text here
So those are going to be our variables
Let's just go to edit graph and in our added graph
if we select object
we can see all these variables available for us


### Item Config02
So now in this graph on start
we need to configure our item and that is setting the correct color and price
So let's start with color
Let's say image set color right there
And the image is currently attached to this game object
So we can just drag the color that we have here and pass it as the value
Next thing is to set text
so let's use set text and for the text value
we can pass the price
but we'll have to convert it from integer to string
pass it in like that
And also our text is actually in another game object
and that's where we need to use this game object that we have saved as a variable to pass it in
So with this set up right now
what we can do is actually create a couple of more items and let's change the color of them
So let's say this one's gonna be orange
price 20
then the next one is gonna be green
and let's say 25
Alsowe'll need to change the ID
we're gonna use it later
but let's just change it right away
Orange and let's set red and red is gonna be our default color
So we'll set the value value to 0
I'm gonna rename the game object as well
So let's say rand
the values for the variables are set
but the colors and the price has not changed and we can actually go through and change it manually
But if we click play
the graph that we just created should change the values into the correct ones
And there we go
Now you can see that we have red price of 0
blue price of 10
and so on
So that part of a script is working correctly

### Purchasing Logic
And now let's create the purchasing logic
So let's go to one of these graphs
and in here
let's create a listener for on pointer click
The first thing we'll do is check if we have enough coins to make the purchase
So right here
I have a saved variable coins
and we can use that and check if this value is greater or equal to the price of our skin
So let's use an if statement here
connect that Boolean value if we have enough coins and we want to continue with our purchase
And in here
what we'll have to do is get our coins count and subtract the price of that skin
That value will have to save it
So holding out down
we can switch to set a variable and let's connect it untrue
And this can be our new value for our coins
Now after this
we want to mark this skin to be purchased
And for that
we'll be saving the state
But before we do that
let's take a look at how we can change the skin of the player
What I'm going to do is actually use a save variable
So let's go inside here and let's add a new variable color player skin
Click add for the type
In our case
we can just use the color because that's the only thing that we're changing in the skin is the color
But if you're actually modifying the mesh or if the player's skin is more complex
then you might even want to use a game object instead
But the color is going to work fine for us
So the default color of my player is going to be red
And now after I have purchased a new skin
I want to change this color to the color that I have just purchased
So holding y'all down
drag and drop it here
And after we have made that purchase
we can connect it right there
And for the value
we can go to our object and drag the color from here and connect it like this
So that's gonna save the skin setting for us
And I will have to go to our player prefab right here
And let's go add it
The graph
Inside this graph
I want to change the color of my player
so let's do that on start
can go to say it variables
pull the color that we have here and just look for material set color
So we're going to use this right here
And for material
we need to pass in at the material of our mesh render
So let's look for mesh render
get material right there
and for the color
we're gonna use the color that we have saved
And now to test this first we'll need to go to our UI backroom and site
Here we still have the graph of loading the first index
I'm gonna actually remove it from here and remove this component in the UI
we need a way to actually start the game after we have selected the right skin
and we can do that with adding another button
but what I'm going to do is actually after we have clicked on one of these squares and we have selected the skin I'm going to start the game
To do that
we can go back to our edit graph and right here
after we set the player skin
we can paste the load scene unit that we used to start the game and that should be all ready for us to test it out
Here is our shop
We currently have 111 coins
If I click on this blue skin
you can see that the purchase was made and our player skin is now blue
So let's go back and click play again and this time let's try the green skin
click on that our coin count got subtracted and now we have the green skin
But currently
since we are not saving the state
each time we go to the shop
we have to purchase the skin again
If I want to play the green skin
you can see that I'm being charged again at 25 coins

### Saving State
So that is where we need to actually save the state that we have purchased the skin
So we're going to have to purchase it again
For that
we'll go back to our graph
And after we make this purchase
we want to flag this item as a purchased item
To do that
we're gonna use a saved variable game
So after we've saved the coins
we're gonna save another variable
but for the variable name of this unit
what we're gonna do is actually use the ID that we've created for this item
So just drag that in here
pass it in as the name that will use the unique ID that we need to create for each item to save the state of this item for the value
I'm going to actually use a Boolean
So let's select that
And if we have purchased it
just set it to true
After that is successful
we can just go back to selecting this item
and that is the logic for that
Now we want to use this saved state to change what happens when we click on that item
So on click
before we go into checking if we have enough coins
we first want to check if we have purchased this item or not
So let's add that logic here
Add another if statement
And what we're checking here is if we have a saved variable with the ID
that is set to true
So let's look for get saved variable
And for the name
we're going to pass the ID and pass the value inside here
But there is one problem with this
We don't create variables for the items that haven't been purchased yet
And if we just leave it like that
it's actually going to be thrown an error
And it's because we're trying to get a Boolean value from an object that does not exist
So to avoid that
get variable has an option
the fallback
and for the fallback
we can pass in a default value that we want to use if that variable does not exist
And the default value is going to be a Boolean set false
And this will make sure that we don't get that error
Now
if we already purchased this item on click
we just want to select the skin
so we can reuse the same logic and connect right here
But if it's false
then we want to actually attempt purchasing it and we can pass it here
So let's actually group this right here
Say this is change skin and this is going to be by skin
And at the top
this is going to be our config
Now we have a default color that we don't have to actually pay any coins for
What we can do is actually go to saved and add that as an initial value
So let's just say red and add a Boolean type and say that we have it purchased
But if we're on it
you can see that even though we have the skins marked as purchased
we still displaying that price
So what we can do is add one more thing in our configurations
So let's reuse these units right here
That is checking if we have purchased this item or not
control D to duplicate it
and just move it here
If we have this item marked as purchased
we want to hide that price
You can use a set active to false
and for the game object
we want to get the parent of the text
which is the UI coin
We have the variable for price text
And we can just say get parent and pass that as the game object
And now if we click play
we no longer see the price displayed for the item that we have purchased
So let's try it out on another skin
So let's purchase the green 1 again
We have subtracted those coins and a green is selected
If we go back to the shop now
you can see that the price is no longer displayed
And if we click on it
we select the green skin
but the price is actually not changing
Let's purchase the orange 1
and now th​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e orange 1 is selected
And now that we have six coins
if we try to purchase the blue 1
nothing happens because it can't go through the purchasing process because we don't have enough coins
Now
the next step would be displaying some errors
If you don't have any coins or having the coins marked in red
there's lots of options that you can create and to be unique to how you want your shop to look like
Alsoyou would need to add some buttons so that you can go inside the shop from the game and be able to purchase the skin
And if you watch this series
you'll have all the information that is needed to actually create those things
So I'm not going to be making that in this video
but hopefully I gave you enough information for you to start your own coin shop system
Don't forget to click on the like button and I'll see you in the next video

## E06_How to Use 3 Different Touch⧸Mobile Controls
------------------------

Hi there
in this video I'm gonna show how you can add controls to your game so that your game can work on the mobile
I'm gonna use the cube game that I've created a tutorial on
Currently it's being controlled by a keyboard
so I can use A and D keys to move my character
There's several ways we can convert this game's controls for it to work on a mobile device
One of them is adding UI buttons that are going to do exactly the same as A or D keys on your key keyboard
The other option is adding a joystick so you can use a joystick to control the player movement
And another option is using drag or swipe to control the player
Now let's start by looking at how we can use UI buttons to control this cube
So I have a level base game object here that is used in all of my levels
So let's go inside here and add some UI buttons
So I'll just select the button
I'll call this left
resize it
let's make 500 by 500
and I'll anchor it at the bottom left
Now for the visuals
there's different approaches
You can show it or you can just hide it
I'm going to actually hide at the visuals for this one
but for a script to be able to see when we click on this button
the way I'm going to hide it is by switching the transparency
That way I can still use raycasting target on that image even though we don't see it
The button component that we have here I'm not going to use it
so I can remove it
And now we can add a script machine
Let's actually use embedded for this one
and it's pretty simple what we need to do here
So on pointer down
we need to store a variable
So let's use a scene variable and call it movement
It's gonna be a float
and the default value is going to be 0
So let's set the value for on pointer down to be a value of negative one
since this can be us moving to the left side
and then we can add on pointer up
Let's duplicate that and then ​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌pointer up
We're going to set the value to 0
So we'd stop moving into any direction
We can go back to our scene and now duplicate this game object
let's call it right
And for a right button
we need to anchor it to the right
and let's go inside the graph and change the value from negative one to 1
That is it for the setup of our buttons
Now we can go to our player script and a graph
And currently we're using horizontal access to control the movement and the values that we get out of it is negative one to one
so that will work perfectly with the movement variable that we just created
So we can add it here
And instead of using that get access horizontal
we can use the variable that we just created
One last thing before we test it
I don't have in the event listener for my UI inputs
so what I'm gonna gonna do is go to the level base and in here I'll go to under UI and add the event system
And that event system is gonna be the one that is gonna be triggering these on pointer down events
Usually they're added whenever you create a new canvas
but at 1 point I remove the event system in my setup
so now it is back here and we can test it
So now if I click on the right side we move right click on the left
we move left
Okaythat is one way you can do it by using those UI buttons
Now let's look how we can add controllers using joystick
For that I'm going to use the joystick plugin that I've already created
I have imported it here
but it was made using Bolt
so one thing that I'll have to do
go to project settings and fix missing scripts
So it will convert all bolt graphs to official scripting
Click okay
and now for restart project
those units are going to be fixed
So to add a joystick
let's go to a level base and right here I have a joystick object
so I can just drag and drop that into canvas and you can see that joystick is right here
You can modify the image by making it a little bit darker
Now to connect the joystick to the setup that we already have
we can add another component
Let's select embedded added script
and on update
we're going to set the value of movement and the value that we're interested in is the output variable that the joystick has
It's a vector 2
which is x for horizontal and y for vertical
We want to get the x value from the vector 2 and save that as our movement
That is all we had to do to connect the joystick
so now we can use a joystick to control our player
Now I said you can also use drag controls to control this player
There's a lot of different setup that you can make
but let's go into our level base
And first
let's disable this joystick control
And what we're gonna do is go to our player script
I'm going to use some super units that I've created for spuck
so I have a four way swipe that you can use and this won't work that great for the current game
But if you're making a game something like Subway Surfer where you have multiple lines and you're switching between them
the four waist swipe is probably what you would want to use for this type of game
You might use a touch move and the way that I can configure it
so I don't need to move in the y direction
And for the X screen I'm going to actually increase the move value from one to 3
So it's going to be more sensitive
Now I'm going to disconnect this value that we have for X velocity because everything is going to be controlled by this superunit
So all of this isn't needed
And with that we can click play
And I can move the cube with my mouse
You can use any of the options that I covered in this video for your mobile game based on what you find more suitable for the type of game that you're creating
You probably have to have different settings that would work better for your game
But I hope this video shed some light on different types of controls that you can make for your mobile game
If you want to see the setup from scratch for the touch move
here's a video that might help you with that

## E07_Unity Ads 4.3 with Visual Scripting
------------------------

Hi there
in this video I'm going to demonstrate the notes that I've created for UNC ads to make it extremely easy to monise your mobile game
To demonstrate these notes I'm going to use the Q project that I did a series of tutorial on with visual scripting
But first
before we import the package
we need to make sure that Unity as is installed
And one of the ways is going to add it project settings
And under services
we have the ads right here
Now for us to get access to the ads settings
we need to create or connect to the Unity project ID
So let's create a project ID just answer the question and that's all it took for us to create the project ID now we can see the options for the Unity ads
And currently the ads is actually in the off state
And to turn around
we just click and turn that on
And right here
I can see that my current version is 4．1 and the latest version is 4．3
So I'm going to go install the latest version
So these are the standard steps you have to take to add Unity ads into your game
And it works the same for C sharp or visual scripting
Now once we have completed that I'm going to add the packaging here
I called it Spock Unity Ads 4．3
4．3 is the Unity Ads version that this package supports
So I'm going Na
wait for it to complete importing
And after it's imported
you can see that we have this new folder inside of the acid's Spock folder called Unity Ads
If you go inside here
you can see that there are 6 nodes that come in this package and a script
Now anytime I import nodes into Unity
I like to go to project settings
visual scripting
and click on regenerate nodes
After that is done I'll also like to run and generate as well
When you click regenerate nodes
it regenerates all the nodes that could be made from your scripts that you have in your game
And I do have the uni ad controller that has some nodes that need to be create from that
And but click and generate
it makes sure that all the connections within graphs and subgraphs get connected appropriately
Once we have completed that
we can go and start adding ads to our game
The way that we can do that is go and create an empty game object
and I'll call this Unity ads
So these steps are specifically if you're using in this package
So UNC adds controller
We want to add to this game object
And in here
we can see that we have some options
So we can set the banner position
Quick note about banner position currently in version of Unity as 4．3
based on my test
it's not working properly on the Android devices
The banner appears in the default position
which is the top left corner
so I hope that will be fixed soon for Android
but for iOS is actually working properly and displaying at the bottom
Now there's also an option of switching in the testing mode
By default
it's in test mode
which is what we want to do right now because we want to test our game with ads
After we've created this game object and added a script to it
now we can go to the scene variables and create a new variable
You need to call it Unity Ads controller
So this is important to do and select this to be a game object and connect Unity as game object here
Now this is important to do so that the initial events could be captured with these notes
And that I have created
After that is done
you can start using these graphs
Now I made them in a way so it would be very simple for you to use them
So let's add a screen trip machine
I'll use embedded added graph
The first thing that you want to do is to initialize Unity ads
So let's search for initialize Unity ads
And that's one of the notes are that I've created in here
You can trigger when you want to initialize
So I want to internationalize it on start
so let's connect with that
And here we have two input fields and write game ID and iOS game ID
so those game Id's can be found on the Unity dashboard
or you can go to project settings ads
And under here
you can find the game Ids that were created for this game
Let's add those in
That's pretty much it
If we run it now Unity ads will initialize once the game starts
but to see that the Unity has initialized and working properly
let's load one of the ads
So uninitialized complete
let's add a banner ad
The note is called Unity banner ad
and here you can see that we have Android ad unit ID and iOS add unit ID
So for those
we'll have to go to our dashboard and right here I have the standard unit Id's that were created by Unity
So I'm looking for the banner and it's just better underscore iOS and better underscore Android
Copy those in
On this node
there's an option to show on load or you can manually trigger show when you want to show this ad
So that's all the configuration that we had to do
and let's click play and see if the banner ad shows up
And there we go
We have our banner working and it's displayed at the bottom center
which is what we selected in the setting for a banner position in the uni ad controller
Let's take a look at the other nodes that we have available
So these are the 6 graphs that are available in
the package of this one is a pretty simple one
If you ever want to check if the Unity ads is initialized
you can use this graph here
And it's a bullion
We just use the initialized Unity ads
which has the initialization complete event and also four reasons for an initialization to fail
If it fails
then we have the Unity banner ad
which we can load show or hide and all the events that could be triggered from a banner ad are also available here
Now for the Unity ad
And I'll show how the ads look like in a little bit
Now this one has more errors and events that can be triggered here
That's why I actually created three units instead of just one
These two nodes are actually expanding the different fails that you can get from this Unity ad
So right here
you can see that on Unity
a-d failed to load
which can have all these reasons why it would fail to load
And if you want to capture those reasons
you can use this unit to capture a specific reason for failing to load the Unity ads
And same thing on ad show failure
Also
These are all the reasons why an ad will fail to show
So that is available for you
If you need more info to act appropriately for the situation the ad is in
But other than that
you also have the show start
show click
and then we have three states for exiting in Ad
So either if someone skipped an ad is going to trigger this one
If someone's completed watching
the ad is going to trigger this one
And then an unknown state
which is also one of the options that Unity has for the closing of a Unity ad
So there's just a quick run through the options
Now let's instead of loading a better ad
let's load one of the unit ads
And in here
we can either load an interstitial ad or a rewarded video ad
So we can go back to our dashboard and get those ads
So I'm going to use a rewarded video ad
paste those Ids in
and we can click and run and test it out
And here is a rewarded video ad if we use a interstitial unit ID instead of the rewarded unit ID
then it will a load the interstitial address
So that's just a quick run through the package that I have available
I will create a second part that is going to actually show how I'm going to implement these units into the cube game
So that is my new package that I've created
This works with Unity Ads 4．3 and if you have purchased my Spock package
you will have this available for you for free
But if you haven't purchased the Spock
it will​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ be available separately as well
and I will leave the link to the package in the description
If you have any questions
be sure to mention them in the comments and any suggestions for this package
Alsobe sure to mention that in the comments
See you guys in the next video

## E08_Ad Placement Strategy for Monetizing your Unity Game
------------------------

Hi there
I have not posted a new video for a monetary
I was taking a little break
but before I went in a break
the last video that I did was on Unity Ads and I also recorded the second part as well
but I'm gonna actually rerecord it from scratch and let's get started
So in this video I'm going to actually show some strategies they can use to monetize your game with ads
The three things that I'm going to do is show how to create a rewarded ad that you can use to purchase one of the skin
So over here I have a shop
We'll add another item that you will be able to purchase by watching the reward
And then we'll also do the simple thing like show a banner ad on all the levels and also display an interstitial ad
And for that one I'm going to show how you can actually create a counter to make sure that you don't show
So the intellectual ant every time there's a game over so you wouldn't annoy your players
So first 1
I will do the rewarded
And so I'm going to go go to the shop list
And these are current list of skins that I have
I'm going to duplicate the green one
so I'll create another one
let's call it purple
and in here I'm gonna select sort of a purple color
sound like that
that looks fine
and let's actually also add a appropriate 80
So if you're interested in how the shop is working
I do have a separate video on that and the whole game that you will see here is actually part of a series
so there's a link to the whole play list of all the video parts for this game
So right here I have a price And I'm not actually going to redo a lot of things here
but I do want to change the visual look of it
So you can actually see that this is something different than purchasing a coin
So for the icon
which is currently
it looks like a coin
I'm going to switch it up to
let's use this kind of a rectangle instead and switch the color to red
So that's going to be a rewarded video ad for us
And then we can say for the text
instead of displaying the amount
we can just say add
So that's just a quick visual
Now for the setup
this is where we want to change it
and I have a script machine that is attached here
It's a item graph
and it's used for all of these items as well
If I would actually be doing it for my game
I would modify this graph so that I'll be able to change the variables here and switch what type of purchasing system to use
either use the coins or use rewarded videos
But since I'm trying to make this video as short as possible I'm not going to do that
So what I'm going to do is convert this to an embedded and that will duplicate that graph
And we'll copy the instance just for this item right here is that purple
So that's just how it works with script machines
So let's go to added graph and here there are some things that we're doing here
So there's the config
which is where we modify the text and the color
So this is going to change the color to purple instead of the blue square that we
and this is going to modify the text
I don't want to modify the text because the text for this one is gonna say add
so we're not going to do anything here
And this is a check if we already purchased it or not
We're going to leave that
And this what controls if we need to turn on the text or turn it off
So that is the configuration
Also
if you want to see more information
I already said that all of this structure and everything's going on here
I did cover this in the shop system video
So if you're interested in
you can check that video part
Now right here I have the Buy skin option and what I'm doing here is check and make sure that I have enough coins
But what we want to do instead is check if we have initialized Unity ads
Now the initializing part
I covered it in the previous video
So if you haven't watched that video or you forgot how to do it
you can check back in there
It's pretty simple
but that's where you can find the information
So we can look for unity as is initialized
and there is the unity as graph
and it's a Boolean
so you can connect it for the condition that we're checking here
And now
if that is true
if the ad is initializing
now we can enter the purchasing process
So in here
I subtract coins based on the price
but we're trying to launch a rewarded video app
so let's remove that and do Unity ad and I'll enable show unload
You can per load the video ad on start
so it'd be ready
And whenever the purchase is made
you can trigger the show
Now we can place the unit ads here
which you can get from the UNC dashboard
And now whenever you click on this item in the shop
it will attempt loading this rewarded ad
And on the right side of this unit
we can capture different responses if we have successfully watched the rewarded video ads
then this unit is going to trigger on ad show completed
You have all the other events that you can listen for if you want to make it a little bit more complicated and try to air handle why the ad didn't show
But the simplest implementation of of using the rewarded ad is just listen for the complete status
With that
we're done with adding the rewarded video ads
So let's test it out
save it
click play
So right here
I already have the Redskin
which is the default skin
and also I have the green purchased
but I have the purple here
So if I click on the purple
it's going to give me the rewarded video ad
Now if I close it
we have the purple skin
So if I restart the game again
which is going to go to the shop system
we should see that the purple skin is actually purchased
And right here
we can see that it is purchased and we can just play it with purple
Now that is how to implement a rewarded video ad to purchase skin or any items that you want to sell in your shop
Now let's go and see how to display Interset all ads
or if you want to display a better ad
So for that I'm going to go to my level 1 and how my levels are set up
I have this level base prefab
which is used in all of my levels so I can do all of my implementa​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌tions for the ads that I want to display in the levels inside the level base
So I'm going to go into this prefab
Now based on how your levels are set up
if it's actually possible for the game to be launched directly into the level instead of a main screen
you need to make sure that you can figure Unity ads before you start trying to load the ads
Nowin my game
the first thing that launches is the coin shop system
which has the industrialization of the Unity ads
So it's like my main UI here
So I don't have to do any initializations here
Now in this level base I'm going to add a component and it's going to be a script machine
I'm going to use an embedded so the video would be shorter
Let's go to added graph and now we can start implementing the ads that we want to display in the level
The first thing that I want to do is display a banner ad
so let's do that here
Unity banner ad
that's one of the units that I have here
And I can just pass in the Ids
I want to run it on start
but I'm also going to load in the structural ads on start as well
So let's use a sequence
And the first thing I'm gonna do is load them banner ad
That's pretty much it with a banner ad
And now let's do the logic for the interstitial ad
So for the interstitial ad
I want to create a counter so that I'll count how much times the game is played before I start displaying the ads
because I don't want to annoy the player by displaying the ad each time you complete a level or you lose a level
let's say that I want to display the ad every third time when the player plays the level
So we will do an check here for some condition
and this is where we need to add the counter and all of that
So let's create a variable
So get a variable and I will use the application variable and this is going to be try count you can initialize the game variable in your app
but I think it's better to use a fallback instead
That way
if you accidentally forget to initialize that variable or the variable gets deleted somehow
your code is going to recreate itself
So in here
we're going to create integer literal
and we're going to start with tri count of 0
Now we're going to compare it and see if it's greater than 2 so that it's actually going to display every third time
But you can increase this number if you want to give player more tries
So if that is true
the first thing that we want to do is actually a reset the try count
So let's set application variable and we can do try count and we'll set it back to our initial value
which was 0
And that's going to reset our count
If it's false
we want to increment our value
So we're going to use a set variable again
try count
and then we'll get our current value and add a scalar here 1 and pass that as the new value
So that's how our counter is going to work
And now we need to implement the ad
First thing
I need to pause the game
So how my game works
I just can set the time scale to 0 and that will pause my game
If you need something more to do for your game
you'll have to do it before you display the ad
otherwise the game is going to be running in the background
Setting Time scale to 0 will pause my game
and now I can use the Unity ads to load my interstitial ad
Let's pass the Ids
So now if you play three times any level
you will get an institue ad and we need to make sure also when we exit out of the interstitial ad and we don't pause the game
So for that
let's duplicate this set time
and we'll set the time back to one
Now for unpausing
you want to capture all of the events errors or a successful watch or a skip
So I'm going to connect all of them right here
You don't have to capture the other three events because on ad load is going to be used for the show on load
And the ad on show start is just to tell you that the ad is displaying
Or on ad show click if someone clicked the ad
So this is the implementation for Insta Ad
So let's click play and test it out
So right here
I start at this level
And you can see that I got an error
And that is because I actually loaded the game inside the level
which is not how my game is supposed to be running
So that's why I mentioned if you're going to be allowing the game to launched from a level
you need to make sure that the initialization of Unity ads is also inside the level as well
About how I made my game is to start from a coin shop system or my main menu
So if I started from here
now I can go and select my player and I don't get any errors
Now you can see that the banner ad is displaying that was the three tries
And now I get the interstitial ad
So I can close it and complete a level
and I can actually complete another level
so that's 2
And then if I fail this 1
I should get an interstitial add
So there is the interstitial ad
So you probably noticed that I had four tries
and it's basically how the math works when you watch an ad
that try doesn't actually count because I reset the account at that point
So you still get three tries after that
If you want that try to be counted as well
you can set this value instead of 2
0set it to one
and you'll count that first try after watching the ad as a one try as well
but I hope this gives you a good example of how the ads are commonly used in the games
and you can expand on that and make it work better for the type of game you're making
Againthanks for watching
be sure to subscribe to the channel and I'll see you in the next one



