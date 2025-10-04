

------------------------

# 1_Cloth Quality Stiffness & More
All right
we are now moving on to the cloth physics in Blender
We've done the rigid bodies
now it's time for cloth
Now the cloth physics in Blender
obviously as the name applies
allows for us to create realistic cloth simulations
Now this could be great for things such as clothing
flagscurtains
or really anything that we need to act like a cloth
So over here
let's go ahead
let's delete this cube and shift a
let's add in a plane and let's go to the physics tab
And right here
we're going to go ahead and enable the cloth physics
All right
let's take a look at all these different options right here
You can see if I play this
we get this right here
which is very
very boring
The cloth is just falling
So let's go ahead and hit shift
Let's add a UV sphere and bring it below the cloth
Now how do we get the cloth to collide with this
It is not a rigid body passive that we want to add as that will only interact with rigid bodies
but instead it is a collision
So collision allows for things like cloth to collide with it
So here
let's go ahead and add a collision to the sphere
We'll take a look at the settings a little bit later
All right
let's go back to our cloth and now when we play it
you can see the cloth falls on top of the sphere
Let's also right click the sphere and shade it smooth
Veryvery boring
Not really cloth like this is a very stiff cloth
The reason that it's acting this stiff is because right here
if we go into edit mode of our cloth
you can see we only have four vertices
So yes
it is very important how many vertices you have for your cloth simulations
Whereas rigid bodies
the rigid bodies wouldn't change or deform
Obviouslycloth is going to change and deform
And for it to change in form
it needs more geometry
So right here I'm just going to right click subdivide
and in the bottom left here I'm going to increase the number of cuts to 10 and let me go ahead and close this tool shelf with the T key
So now if I play it
you can see we get this right here
pretty cool
Let's also right click
shade it smooth
So now we have this right there
All right
we have a very basic cloth set up
let's take a look at these different options
the first one is the quality steps
This is going to determine the overall quality of our cloth simulation
The higher the value
the more quality and the more accurate it will be
but obviously it's going to take more computation
So right here
for example
if I put this to one
this is going to be a low quality computation and it's going to be less accurate
as you can see right there
the center acts like so if I put this to
let's say
Nowright now
it's not really doing much of a difference between 1 and 80
So right here
instead of the UV sphere
let's actually hit shift a add a monkey or Suzanne and right click shade
smoothmake Suzanne a collision
And now let's go ahead and play this cloth simulation
So here you can see what's happening
The cloth acts like so if I put this to one
you can see that right here
the cloth is not really sliding off as much and it's kind of staying stuck up here because again
the quality of the simulation is less
If I put this to 80
you can see it's much higher
Nowobviously
you wouldn't crank it to a value of 80
you'll probably put it in between a value of 5 and maybe 30
Againit all depends on what you're doing
but again
this is going to be the quality
the overall quality of the simulation
So again
if you notice that things are not simulating properly and the cloth is not falling or interacting as it should
it might be the quality steps that are not high enough
as you can see right there
All right
let's set this to the default of five
Againwe'll look at all these options even more as we use them
The quality step can also help with reducing jittering or the cloth passing through itself as well
So again
it increases or decreases the overall quality
Then we have the speed multiplier right here
This is going to adjust the speed of the cloth simulation without changing any of the physics settings
So you can see right here
if I play this as this certain speed
if I increase this to 10
for example
it's going to multiply the speed of it
As you can see right there
Now you can see that as speed of 10 right here
we have a lot of jittering
And again
this has to do with the quality
So here
if I increase the quality to say 33 and play it
you can see that there's a lot less jittering
All right
let me go ahead and put the quality back to 5
So again
the speed multiplier just multiplies the speed that goes at without changing any of the other settings
Let me put this back to one
So again
the higher this is
the faster it will play
if we bring it down
it will play like it's playing in slow motion
as you can see right there
So we could put it to a lower or higher value
Pretty cool
All right
let's set this back to one and this back to 5
Then we have vertex mass right here
this is going to be the mass of each of the vertices of our cloth mesh
Now the heavier the cloth or the vertex me
the heavier it will be and the less it will be affected by things such as wind or forces
So here you can see that it's set to ．3
If I play it
we have this right here
If I set this
for example
to 11 and play it
you can see that it doesn't really do any difference
And again
that's because this has to do with forces or when the cloths collide with each other
So for example
right here
back to ．3
I'm just going to hit shift A and go to force field and add a force
Againwe're going to take a look at force fields later
but for now
let me just add one down here and right here
If I play this with a mass or a vertex mass of 0．3
you can see that right here on the force field
Let me put the strength to 10
And when I play this
let me also bring it up a little bit like so
and let me put the strength maybe higher to 500
there we go
So you can see here with the strength of 500
you can see that this is raising up and the vertices or the mass of this cloth is 0．3
But if I change this to
let's say
you can see that it's much heavier
Againthis is kind of like the mass on the rigid body physics
So if I put it to two
you see we have that
If I put it to it's 8
you can see we have this right here where it's kind of floating
And ．5
you can see we have this right here and the default of 0．3
So again
this is basically the mass like we had on the rigid bodies for the vertices of the cloth
All right
let's delete this force field
Next
we have air viscosity right here
Nowthe air viscosity is going to be the resistance or the error resistance that the cloth has as it moves through the air
So if we put this value higher
it will make it look like it's moving through a denser medium
such as water or oil or something that's heavier than air
So righ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌t here
if I play this or some very dense air
so if I play this
you can see right here
there's still the force field that's cached
Just go ahead and change any of these settings so I can put the quality steps to 4 and then back to 5 and it will update it
So right here
againthis is basically the thickness of the air or the resistance of the air
So right now you can see that we have this much resistance
If I put this higher to say 10
you can see right here
it looks more like it's moving through water or again
a very dense air if I put it lower to
let's say
point oneyou can see right here
it has less air resistance
All right
let me put this back to one
So again
the air viscosity is going to be the resistance of the cloth as it moves through the air
The higher the value
the more resistance
the lower the value
the less resistance
Then right here we have bending model
You can see we have angular and linear
This is going to dictate how the cloth is going to bend at the edges and corners
So right here
it's set to angular by default
And this is going to give us more realistic bending as opposed to linear
So right here
if I play this
you can see we get this certain bending
Againthis is the bending around the edges and the corners
And if I set this to linear
it's going to be slightly less realistic
As you can see right there
Againyou can't really see it that well
but you could already see that it's giving a lot more jittering and issues
But again
the bending model is going to be how it bends around the edges and corners
Angular is going to give you a more realistic
better result compared to linear
So I would just leave this to Angular by default
Then over here
we have the stiffness tab
So here
let's go ahead and save this
By the way
I know we don't have much
but let's save it anyways
All right
so over here
the first option we have under the stiffness tab is the tension
Now the tension is going to control how much the cloth resists stretching
So higher value
it's going to resist stretching more and it's going to stay more to its original length and size and not stretch easily
If we put this to a lower number
the cloth will stretch more easily
Now here you can see that if I play it with a value of 15
and if I put this to 0 right here and play it
you can see that there's not much difference
And that's because these other values under stiffness are also influencing it
So let's go ahead and put this back to 15
and let's put all these values right here to 0
Againmake sure to save as I'm just going to reopen my file to reset these after I'm done showing the tension
So I'm going to put these to 0
So right here with all these to 0 tension at 15
you can see that we get this right here
but if I put the tension to zero right here
you can see it's going to stretch more
As you can see right there
it stretches like so
So again
the tension
if I bring this all the way to like 100
is going to be how much it resists stretching and how much it keeps its original shape
And here
if we put the tension lower
it's going to be stretching the cloth more
As you can see right there
it's kind of drooping and stretching
If I go into edit mode and scale this up a little bit more
I could right click subdivide it two more times
And you could see with a tension of 0
what we get right there
Obviouslyit's causing some terrible artifacts
And if I put the tension up
what we get right here
it's keeping its original form more and not stretching as much
All right
let's go ahead and reopen our file that we just saved right here
So that's the tension
how much it resists or doesn't resist stretching
All right
next we have compression right here
As the name implies
this is basically going to control the resistance to compression or how the cloth compresses the higher the value
the more it's going to resist compression
And it's basically going to help to maintain its volume of the cloth
And the lower the value
the less compressible and the less it will maintain its volume for it if we create a makeshift pillow
So in edit mode
let's go ahead and hit the and extrude this down so that we have a very simple pillow
Let's actually bring it down a little bit further
that way it's thicker
There we go
very square
blocky pillow
looks comfortable
So right here
when this is compressed
the material and the cloth is going to squeeze together and this could cause things such as wrinkles or folds or basically compression
so it's going to compress under a certain force here If we change the resistance to compression again
the higher it is
the more it's going to try to maintain its original shape and not be compressed
You could think of it as resisting it being compressed
This means that it won't be flattened easily and it won't have pressure applied to it
So here
for example
if we take Suzanne
let's just delete Suzanne
add a cube
And on the cube
let's make it a collision
If I play this
you can see right here with the compression of 15
it compresses a little bit and it gets pushed down a little bit
But if I put the compression to 0
you'll see that it's going to be completely flattened out
as you can see right there
because again
there's no resistance to it being compressed
And you can see it basically flattens out
So again
this setting is going to resist how much the cloth is being compressed
All right
let's reopen our file
All right
the next option is the shear right here
Now right here
the shear is going to dictate how much the cloth resists shearing
Now what the heck does that mean
So right here
shearing is going to refer to how much our cloth resists changing in its shape when we apply sideways forces to it
So again
a sideways force is going to be shearing
and this is how much it's going to resist that
So for example
if we delete the monkey and hit shift A and add a plane
bring it down in edit mode
scale it up
Let's go ahead and make this a collision
So now the cloth just falls on the plane
Let's then create some forces that come in from either side
So shift a
add a cube over here
rotate it a little bit
m​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ake this a collision
and go ahead and duplicate this cube right here on frame one of both of these
hit the I key
insert a keyframe on frame 40
go ahead and bring this one in so that it's over the cloth
And same with this one
So bring them in so that they're colliding with the cloth
Obviously our cloth has fallen
but that's fine
So both of them
I key insert a keyframe
So right now
if we play this
you can see that we have this right here
And again
these are sideways forces or shearing
If I select this again
the higher the value
the more it will resist shearing
So right here
the higher we set this
it's going to resist changing its shape and it's going to try to stay a there as you can see right there
So this cloth stays as a square
so it acts a little bit more rigidly
But if I put the shear to 0 right here
instead of staying a square
it's going to deform more into a diamond shape when these are pushed sideways
So you can see here
it now turns more into a diamond
So again
the shearing is how much it's going to resist the change in shape when we apply sideways forces to the cloth
So you can see here with a share of 0
it changes into a diamond and it doesn't retain its square shape
And if I put this to the default of five that we had
you can see it resists that change in its shape and it stays as a square
very cool
All right
let's go ahead and reopen our dot blend right here
Lastly
under the stiffness
we have bending
which is pretty self explanatory
and this is going to be how much resistance the cloth has to bending
The higher the value
the more resistance it will have to bending
and the lower the value
the less resistance it will have to bending
So the lower it is
the more bendable it will be
And the more flexible
the higher
the stiffer it will be
So here at a default of 0．5
you can see we have this right here
If I put this to zero
you can see that it will bend even more
and if I put this really high
you can see it will bend even less
Now maybe that's too high of a number
Let me put it to like 11
And you can see right here
it acts a lot more stiff
kind of like rubber
So if you wanted rubber or leather that bends less
you can see we have that
And again
if I put it lower
you could see we have a lot more bending
So this is going to resist or not resist the bending water
Earth fire bending
No I'm kidding
not that kind of bending
All right
let's go ahead
I'm just gonna reopen my file because I forget what setting is original since I keep changing these
All right
then lastly
for this video
we have damping right here
Now
first of allagain
what is damping
Damping here is going to refer to the reduction of the motion over time of our cloth
Againthese settings are going to control how fast the movement of our cloth slows down or comes to a stop after forces or things like wind
gravityor collisions
So again
damping is the reduction of movement or motion over time
So for example
if we have high damping values
the cloth is going to quickly lose energy and stop moving faster
This is going to make the cloth look heavier or resist movement more
If the damping values are lower
the cloth is going to continue to move and flutter or move for a long time before it comes to a stop
This is going to make it look lighter and more fluid
So let's take a look at these different damping values
You can see that each of these damping values corresponds to the stiffness values
so we have tension
compressionshear
bending on stiffness
and on damping
we have tension
compressionshear
and bending
so these have to do with damping
have these values here
So right here we have first the damping for the tension
Againthe tension is how much the cloth is going to stretch or not stretch
So right here
if we change the tension damping value
it's going to reduce the movement that's caused by the tension
or it's going to reduce the stretching
so you could think of this as applying a break to the stretching of the cloth
So here
once again I'm going to go ahead and put all these 0
And right here
let's go ahead and put the tension to 15
You can see we have this I'm actually going to put it down to like 2
so that it stretches more and let me actually put it to like 0．2 maybe
because that's definitely not enough
And let me put it to 0
just exaggerate it
So there we go
So right here you can see it's stretching quite a bit and if I put the tension up
it's going to resist or dampen the tension or the stretching
so if I put this up to like 50
you can see what we have right there
It's kind of resisting it
But if I put this to 0
for example
it's going to stretch a lot faster
as you can see right there
especially in the back
you can see what's happening right there as opposed to a value of 50
againthe damping is going to slow the motion of our cloth
So right here
it's kind of slowing the tension or the stretching of the cloth or damping it
or making the motion come to a stop sooner
againadding more resistance to it
All right
let me go ahead and reopen my file right here
So that is the tension damping
then we have compression once again
let me go ahead and add the cube
We could have looked at these at the same time
but it just makes it easier to block everything out individually and look at it individually
So right here we have the compression damping
againthis is the same thing as the tension damping
but for compression
this is going to go ahead and slow down the movement that's caused by the compression
Once again
the compression is how much or how little it is compressed
So right here
if I go ahead and play this
you can see that we have this right here
if I put the compression damping to zero
you can see that we have that
and if I put the compression damping to 50
you can see that we have this
Now we can't really see a difference here
so let me put the compression down to like ．1 right here
and now you can see right here when it's moving or when it's being compressed
so you can see right here
when it gradually gets compressed right there
so right here
you can see what it looks like at 50 right there
And if I put this to 0 right here
so again
this is going to control the damping for the compression
as you can see right there
againhow fast or slow it will lose energy over time
and again
this is for the compression
all right
let's reopen the file over here
then we have the sheer damping
so once again
let's go ahead and set up that quick little scene
So right here I'm going to go ahead and scale up my plane
make it a collision
once again
add in a cube
rotate it and make this a collision
duplicate it
and right here I'm going to go ahead and select both of these
Ike on frame 40
I'm just going to bring these in like so
Select them I key
And then I'm going to select with both of these cubes
I'm going to select the original keyframe shifty and duplicate it to frame 80
So now these go in and then they go back out like that
So right here we have the shearing damping
This is going to be how quickly the cloth is going to return to its original shape after being sheared
So again
shearing is the force applied sideways
So here with a shear of 0 and the shear damping at 5
you can see that we have this right here
And if I put this to a higher value
once again
the shear damping is going to control how quickly the cloth is going to recover from shear deformations
So here
if I play it
you can see that right here
it's resisting and it's not being sheared as much or turning into that diamond shape
As you can see right there
there's more damping applied to the shearing
If I put this to zero
you can see that we get this right here where it just kind of melts or melts into itself
which is kind of interesting
We could also animate these values
as you could see right here
We could change them as the cloth simulation is happening
which is really cool
So again
this is going to be the damping that has to do with the shearing
All right
let's reopen our file
then lastly
we have the bending damping right here
Waterearth
fireall right
not that kind of bending damping
So here
the bending damping is going to control how quickly the cloth is going to stop bending and how fast it's going to return to its original shape or state
So right here
you can see that if I play this
we have this right here
Let me go ahead and put the bending up on the stiffness
So I'm gon na put the bending up
So we have this right here
So you can see right here with a bending damping of 0．5
we have this
and it's kind of quickly returning to its original shape right here
You can also see that it's kind of flickering
and that's where we could increase the quality steps to
let's say
So you can see we have this right here
Now
if I put the bending damping down right here
the cloth is going to continue to bend for longer periods of time
So here you can see I play it and it continues bouncing and bending
as you can see right there
But if I put the bending damping up to
let's say
one right here
you can see that it bends and it quickly returns to its shape
Or if I put it to
let's say
four right here
you can see if you put it too high and not enough quality
it will kind of crumple up
So right here
let me put it to maybe two and play it
So you can see right here
it bends and it stays in that shape
So again
the higher the bending damping is
the more quickly it will stop bending
As you can see right there
it just kind of bends once and then it stays in the shape
but if I put the bending damping down to zero
you can see that it continues bending and bouncing even after it initially hits Suzanne
So it will continue bending after even the initial force is applied
In this case
the plane falling on
Suzanne
So that is the bending damping right there
Againit's going to control how quickly the cloth stops bending
So again
all of these damping is are basically going to control how ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌fast all of these settings come to a stop and how fast or slow the motion or the movement is reduced over time
So again
the higher the bending we put there
the faster the bending came to stop
At 0
the bending was continuing
and it was continuing to bend
And that's the same thing for the tension
compressionshearing and bending damping
It will control how fast these come to a stop or how fast they slow down
Once
obviouslya force is applied
In this case
the force is the plane hitting Suzanne
So with that
that is the settings here
we'll continue looking at the rest of the settings in the next one
Go ahead and reopen the original file that we saved
I'll see you in the next one
Ciao for now Vo


------------------------

# 2_Internal Springs
All right
in this one
we're going to go ahead and take a look at the internal springs and the cloth simulation
So the internal springs are basically going to act as a kind of structure or a internal structural integrity for the clot
It's basically going to help it to not collapse in on itself or stretch out too far
And it's going to do this by connecting points within the cloth mesh
So this is going to help for it to maintain its shape and again
resist stretching or compressing too much
So right here
let's go ahead and delete both of these
Shift A
let's add a plane
scale it up in edit mode
shift A
let's add a cube
bring it up
And with the cube
let's just right click
subdivide it and bring it to 10 cuts right here
all right on the floor at a collision on the cube at a cloth
So right here
if I play this without internal springs
you can see it just kind of collapses in on itself
kind of like a bouncy house castle deflating right there
If I turn on internal springs right here
you can see that it acts more like a soft body and there's internal springs connecting the inside points of the cloth
Againthese act like an invisible section within the cloth that helps it to stay together
Againit's going to help it to maintain its shape
and this could help it from becoming too loose or too floppy by
againretaining its shape
So right here
let's take a look at the settings that we have
You can see here we have max spring creation length
This is going to determine the maximum length for the springs that connect the vertices of the cloth together with it set to 0
It's actually not being used
So with it at zero
it's not using this
But if I bring this up just a little bit
you can see that we have this right here where it looks like the internal springs is not enabled
And if I bring it up
you can see that here the springs are longer for where it's connecting them
So right here
if I bring it down
you can see we have that
If I bring it to like ．5
you can see that we have this right here
So again
this is the maximum length for these internal springs that connect the vertices
So here
if the distance of the vertices within the mesh are greater than this
it won't create a spring
For example
let me go into Wireframe and let me get my annotation tool
For example
let's say the point from here to here is greater than ．5
So it's not going to create a spring between these two vertices
But let's say that from here to here
it is not greater than 0．5
so it's going to create a spring between these vertices
Or maybe it will create it from here to here and create a spring from here to here
And again
this is going to be based off of the max creation version right here
which we'll take a look at in a second
So again
the max spring creation length is the maximum distance that these points have to be in order to create an internal spring
Againif they are further than this distance
it will not create a spring
And that's why right here
if we increase this to quite a bit
you can see that now these right here are not further than a value of 7
So right now
it's creating springs from the bottom to the top and throughout the whole thing because there is no distance from the vertices that is greater than 7
But here
if I put it to like ．2
you can see that we get this right here
If I put it to like ．6
you can see that we get this right here
And that is because
once again
some of these springs are a value that is greater and some are a value that is less
So it's only creating springs for the values that are less than a distance of 0．6
as you can see right there
Then we have the max creation diversion right here
So this right here is going to go ahead and control the angle
As you can see
it's set to angle at which these internal springs are allowed to connect to the vertices
Now the angle is measured relative to the normal of the surface
So again
the normal is the direction that the surface is pointing in
So for example
right here
you can see we have it set to 45
which is the maximum angle
So right here
the lower we set this number
for example
to 0
the more it's going to go ahead and restrict the creation of the springs
Two vertices are more aligned with the surface normals
So again
the normals are the direction
perpendicular direction of the faces
So right here
it's going to create springs that are more perpendicular or aligned with the normals of the faces
like so
So it's going to create springs like that
But the higher we put this angle
it's going to allow for the springs to connect more freely
So for example
the springs can connect like this at different angles and diagonally if they need to
So this gives us more flexibility in the springs
So right here
if we take a look at this
how it looks
you can see right here with it set to 45
we get this right here
And with it set to 0
we get this right here
As you can see
as you can see
with it set to 0
it collapses more from top to bottom
kind of like that
And with it set to 45
it's collapsing more at several different angles
As you can see right there
It kind of bends that way
And that's because
againwith it set to a lower number
the springs are going to be based along the normals
so created like so
But with it set to higher
they're going to be able to be at angles like so
So now you can see that here
it's bending like that
As you can see
very cool
All right
let me go ahead and erase that
So again
this is the maximum amount that the points can diverge from the normals to create these springs
Then we have check surface normals right here
so this is going to require for the points in order for them to create a spring
they need to have opposite normal directions
So for example
hereif I delete this cube
shift a add in a Suzanne right here
I'm just going to go ahead and I'm going to select these top 4 faces control
I invert them and x delete these faces
It's just going to be easier to see with it slightly sloped like so
I'm then going to go ahead and add a cloth and right here
enable internal springs
So right here
if I just play this
we get this right here
If I go ahead and hit the A key
select all these shifty
duplicate these like this
you can see that right here
if I have check surface normals enabled
againthe normals of the surface or the faces is the perpendicular direction
In edit mode
we could go ahead and go over here to the mesh edit mode overlays
turn on the face normals and increase the size
So right here you can see that the normals of these faces are both facing up wars like that they're facing in the same direction
So with check surface normals enabled
you can see that here
If I play it
it's not going to create a spring because again
this makes sure that the normals of the faces have to be facing in opposite directions for it to create a spring
And this could help to maintain the integrity and the structure of our cloth
especially if it's folding a lot or has sharp bends
etc
So here
it's only going to create springs based on if the normals are in opposite directions
So again
right here
it's not doing anything
But here in edit mode
if I select just these faces here
and I hit Rx 180 and flip it
you can see that these normals are pointing down and these are pointing up
So now with check surface normals
if I play it
you can see that here it creates a spring because they are facing in opposite directions
If I disable this right here
it's not going to check the normals of the faces
So it's just going to add springs no matter what
If it's like this
or if I rotate this back for the normals to face up
you can see that it still adds a spring
as you can see right there
even though it falls over a little bit
As you can see right there
there is a spring there
If I enable this
you can see that here
it's just going to collapse with no spring
So again
with this enabled
it's going to check the surface normals and only if they're in opposing directions will it create springs between them
If this is unchecked
it will just create springs even if the normals are not opposing and they're facing in the same direction
So let's just enable this again by default
All right
let me go ahead and delete this
add back a cube
and subdivide it a bunch of times right there
-1
Let me also disable the normals and at a cloth internal springs
All right
then we have tension right here
againmuch like the tension over here and over here
this is going to have to do with the stretching for the internal springs
because this is the tension for the internal springs
So this tension right here is going to control how much the internal springs are going to resist to being stretched
So right here
for example
if I go ahead and add in a Suzanne
and let's make Suzanne a collision and let's bring this up a little bit like so
You can see that here
If I play this
let's also put the max spring creation to like 0．8 or 0．9
You can see that here I have this right here where it's resisting the stretching quite a bit
But if I put the tension down to zero
you can see that we get this right here where it's not resisting this stretching
And it has a completely different kind of result
Againhigher values on the tension right here are going to make it more resistant to stretching and it's going to behave more stiff
So again
you can see at 0
we have that
And if I put this back to 15
we have this right here again
acts more stiff then right here I'm going to go back to compression of vertex groups
but you can see here we have a max tension right here
So this maximum tension right here is going to set a limit on how much tension the internal spring can resist before it fails or breaks
And this is going to help to prevent the cloth from overstretching by capping the tension resistance
Now you can see here that we can't bring it below whatever our tension value is right here
so we would have to bring this lower
but we could increase this right here
And this will be the maximum tension
Againwhich​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ sets a limit for the tension right here
As you can see right there
you can see that here
if I bring this down
the max tension right here can be higher than this
But again
it can't be lower than whatever I set here
So right here
if I have the max tension at 8
or I could put the max tension higher
as you could see right there
So again
you could kind of cap off the tension by setting a limit right here
Then we have compression
againacting much like the compression up here
So let me go ahead and delete both of these
I'm just going to add a new cube that is subdivided a bunch of times with a cloth and internal springs
So right here
the compression
againthis is for the internal springs
is going to control how much the internal springs resist to being compressed right here
Once again
if I put this to like 0．8 or 0．9
you can see that this plays like this and it compresses in a certain way
The higher the value
the more it's going to resist to being compressed
So if I put this to zero
you can see it's going to compress a lot faster and much easier
As you can see right here
there is no resistance to it being compressed
but if I put this higher
you can see we have this right here
Once again
we have a max compression right here
So right here
we could use this to either help it from compressing too much so that it maintains the structure of the mesh or the cloth
Then we have a vertex group right here
Now the vertex group is going to help us to control the tension and compression of the internal springs based on vertices that we select or assign to this group
So we could dictate which parts of our mesh are going to have more tension and compression
So right here
if we go to the object data tab
nowwhat a vertex group is
is we're able to assign vertices to a group
and then we can make changes to just that group of vertices
So here
if I hit the plus icon to add a new vertex group
I could double click it to rename it
I'll just name it test 1
And if I go into edit mode here
I could hit one to go into front view
and I can left click and drag and select just these front faces and in top view
hit the B key and box
select these faces as well
And here
if I click on Assign
it will assign these vertices to this group
So now if I go to my cloth physics and the internal springs
let me put the max spring creation length to like 1．2
and I'm going to put the tension and compression down to ．1
So right here
if I play this without the vertex group
you can see that we just have this right here
But if I go ahead and put the vertex group test one right here
you can see that we've now assigned this area and this area to this vertex group
So now the max tension and max compression is controlled by this vertex group
So right here
you can see that when I play it
I have this with these values at 15
But if I put these values to point one right here
and if I play it
you can see that these areas now have less tension and less compression
Whereas if I put it to 15
you can see that when I play it
these areas have more tension and more compression
For example
if I go over here to the back and I select these vertices or faces right here
once again
when I'm playing it
you can see that the back crumples
But if I assign these to our vertex group
so assign
you can see that now this part is assigned to that vertex group
So now it's going to be controlled by this max tension and max compression
which right now is pretty high
So now this side
this side
and this side is being controlled by this Mac tension and max compression
which is set pretty high
If I go to the vertex group and select these vertices in front
for example
so those ones and I go to the vertex group and click on remove
Now we only have these top faces that are assigned to the group and these side faces
So right here
it's not assigned
So it's going to crumple this way
As you can see right here
it's crumpling forward like so
So with this vertex group
we're able to dictate which parts of the mesh or cloth are going to have more or less compression based on the vertices we select and the values that we put here
So this is great if you want parts of your cloth to be stronger
For example
you have some reinforced parts of fabric
Wellyou would use this vertex group and change these values
All right
so there we go
That is the internal springs in blender cloth physics
I'll see you in the next one
Ciao for now of
wellwe will take a look at the pressure
one of my favorite ones


------------------------

# 3_Cloth Pressure
All right
in this one
we're going to take a look at the pressure section of the cloth simulation
probably one of my favorites
So right here
let's go ahead and delete this default cube
shift a add in a mesh plane in edit mode
go ahead and right click subdivide and increase the number of cuts to about
let's just put them to 10
So increase the number of cuts to 10
then in edit mode
eke extrude this out just a little bit
So we have something like this in object mode
let's hit Gz
bring it up a little bit
shift a
add another plane in edit mode
scale it up on the floor
make it a collision
And this right here
make it a cloth
All right
so right now
if we play this
you can see we just have this very boring
but if we go to the pressure and enable this again
this is one of my favorites
the pressure is going to add internal air pressure to our mesh or to our cloth
kind of like inflating a balloon or a piece of cloth that is filled with air
So this is what this pressure option does
It could allow for us to add internal air pressure or remove it by putting it to a negative value
So right here
obviously we have our mesh and we have the inside of the mesh right here
so here with pressure enabled and with it at 0
if I play it
there's nothing really happening
But if I increase this pressure to
let's say one
you can see when I play it
it adds internal air pressure
And now we get this kind of pillow or balloon effect
How awesome is that
Pretty awesome
Now if I put it to negative one
it's actually going to put negative air pressure
but it's going to look the same because it basically flips the mesh inside out
You can see this better if we ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌animate it
So on frame 1
let's go ahead and put the pressure to one
hover the mouse
and hit the I key
And then on frame 40
let's go ahead and hit the I key again
Don't worry about this
This will update
And then I'll move ahead to frame 50 or so
and I'll put the pressure to negative one and hit the I key
So now when I play it
you can see it has a pressure of 1
and then it goes to negative one
and it basically inverts itself
as you can see right there
So right here
if I put the pressure to like negative ．1 right here and hit the I key
you can see that right here
it's going to deflate a little bit better
As you can see right there
Pretty cool
We could obviously also put this value to 0 and this will just deflate it to a value of 0
as you could see right there
But if you want it to kind of suck the air out
you want to put it to a negative value
I don't recommend negative one or higher than that because then it will kind of invert it
So I recommend values like negative ．5678
anything below negative one
So right here
if I put negative 0．5
you can see that we get this right here
Pretty cool
And even right there at negative ．5
it's kind of inverting itself
So maybe I'll put negative 0．2 right here and add a keyframe right there
And there we go
it deflates very
very cool
All right
let's go ahead and hit the A key
select all these keyframes
delete them
and let's put this pressure to one
So again
this pressure is going to add internal air pressure to our mesh
kind of like simulating a balloon being blown up etc
If we put the pressure way higher
such as five
you can see that we get that if I put it to something like 22
you can see that we get this right here where there's a lot of internal air pressure
As you can see right there
We could also grab the plane right here and kind of make it bounce up and down
which is very satisfying and very cool
So here
if I go ahead
let me scale this up and let me move this over
if I put this air pressure to one shifty X
put this one to 5
shifty X
put this one to 22
you can see the difference with these three air pressures
as you can see right there
And again
we could kind of make them bounce
and that is very satisfying
Once again
who
All right
there's glitching
not really glitching
I was just moving it too fast
All right
veryvery cool
Let's take a look at the next option
So right here I'm just gon na have my pressure set to one
We then have this option
custom volume by default it's disabled
you can see that the target volume is grayed out
but if we enable this
we're able to set a custom target volume for the cloth or for this pressure
So now we're able to change this target volume
and this is useful if we want to specify a specific volume for the clot that we want
So this target volume right here is going to set the volume that we want for the clo
so the volume that we want it to achieve when custom volume is enabled
So right here
let me put the pressure to like ．1
And you can see with the pressure of 0．1 and the target volume at zero
you can see I get this right here
But if I put the target volume to
let's say three
you can see that now it's going to fill this target volume regardless of the pressure
So this is the volume that it's aiming for
If I disable custom volume
which is going to disable the target volume
it's just going to have a pressure of 0．1
and it's going to fill the volume based on the mesh
So again
the mesh has a certain volume
and you can see it tries to fill that volume with only a pressure of 0．1
But if we put a custom volume
it will look to fill this volume of three
regardless of the initial volume of the mesh
So now I play this
You can see that it just goes to a target volume of three
So again
with this off
it's going to go ahead and look to fill the volume that's defined by the geometry of our cloth
And with custom volume
it's going to look to fill the volume that's defined by here
All right
let's go ahead and turn that off
Then we have pressure scale
So we have the pressure right here
The pressure scale is basically just a multiplier for the pressure
so if I have the pressure at one and the pressure scale at 1
it's multiplying the pressure by one
So the pressure is just going to be one
But if I put the pressure scale to
let's say
five right here
it's going to multiply the pressure by 5
So the pressure is going to be 5
So right here
you can see we have this
this would be the same thing as if I put the pressure to one or the pressure scale to one
excuse me
and the pressure to 5
You can see that we get the same result if I put the pressure to 2 and the pressure scale to 3
this will multiply the pressure by 3
so it will be a value of 6
And you can see that we get this right here
If I go ahead and let me hit shifty
duplicate this on this 1
I put the pressure scale to one and this to 6
This is also a value of 6
So you can see we get the same result
So again
the pressure scale is just going to multiply our pressure right here
and this just allows for us to fine tune the pressure or the intensity of the pressure
So right here
we could obviously also multiply it by 0．1 right here
And you can see that we now get this result right here
So again
pressure scale is going to scale or multiply this pressure value depending on what you put here
Obviouslyif you have it set to one
it's just going to be the same value as here because anything times one is going to be the same value as whatever you put here
All right
very cool
Let me go ahead and go back to this one
and I'm going to put the pressure to 2 and the pressure scale to one
then we have fluid density right here
So the fluid density right here is going to determine how dense the fluid inside the cloud is going to be
So if we have higher values right here
it's going to increase the weight of the fluid and it's going to make it look more like there's water in of our cloth as opposed to air
So right here
you can see that
Let me move this over
Fluid density of 0
We have that
If I hit shift Dx
duplicate this over
and right here
you want to make sure not to put this too high
You can see if I put it to one
it just kind of goes crazy
So I'm going to put the fluid density to ．1 right here
You can see that we have this right here where it looks more like it's filled with water
If I hit shift Dx again
let me scale up my floor and put this to put the fluid density to like ．5 right here
You can see that I have this right here
that's still a little bit too high
Let me put it down to ．3
Maybe we have this right here
So you can see the difference of fluid density of zero
fluid density of 0．1
Let me put my end frame to like 60
So fluid density of zero
fluid density of 0．1
and fluid density of 0．3
So it basically increases the density of inside the cloth
So right here it looks more like it's air
And here it looks more like it's filled with water
So if you're doing like a water bed or a balloon or something like that
you would increase the fluid density
Againmake sure not to increase it too much because otherwise you're going to get some really weird results
as you can see right there
All right
very cool
So right here
let me put this to ．4
Right here
You can see we have that
Obviouslyif we change the pressure of these
it's also going to affect how that acts
As you can see right there
it's kind of messing up again
depending on if we put these values too high
you can see that we get some weird results
So you want to be careful or aware of that
So here
if I put the pressure of all these to four
you could see the difference with the pressure at 4
and the different fluid density is of 0．1 and ．3
pretty cool
All right
let me delete these 2 and let me put the fluid density to 0
which it already is
All right
and then we have vertex groups
Once again
we're able to specify a vertex group
As influenced by this pressure
so we're able to apply this pressure effect based on a vertex group
So right here
if I go into edit mode Z wireframe
I select this half of the pillow or whatever this is
go to the vertex groups new and assign
You can see that here
if I go over here without the vertex group
it plays like so
Let me go ahead and put the pressure down to 2
So without the vertex group
it plays like so
But if I put the vertex group
it's going to inflate
or the pressure is going to start right here from the vertex group
and then move this way
and it's going to kind of shoot the pillow out that way
So if I play it
you can see what we get right there
Pretty cool
For example
if I go to the vertex group
remove all this
and right here
if I
for example
go ahead and just select these vertices and click assign
you can see that now if I go over here and just play this and mess around with these settings
the pressure is just going to be confined to this area of the vertex group
Of course
we could increase this
for example
if I put this to five
you can see that there's more pressure etc
We could also select a custom volume
and then we start to get some interesting results
but again
the vertex group allows for us to specify a part of the mesh where the pressure will be applied
For example
if you want to inflate only a specific part of a balloon
or let's say you're inflating like a kayak or a canoe
and you only want to inflate one certain part or section of that kayak or canoe
you could do so using this vertex group right here
So with that
that is the pressure settings
one of my favorite
A lot of fun
as you can see right here
you could create some really cool pillows and balloons and a bunch of other things like that
Againvery
very satisfying and very cool
we'll definitely be using this in the future projects that we make right here
So with that I'll see you in the next one
Ciao for now


------------------------

# 4_Cloth Cache
All right
in this one
we're going to go ahead and take a look at the cache settings of the cloth simulation
Nowthese are basically the same as the rigid body cache
so I'm going to go over them quickly
If you want to go more in depth
make sure to check out the rigid body cache because again
a lot of these settings are exactly the same
So here I'm just going to add a floor and make it a collision
That's not a collision
a collision
And I'm just going to go ahead and add in a cube
let's say
and I'm going to subdivide it a couple times and make it a cloth
So I have this cloth cube
In the settings of the cloth
you can see that we have cache right here
Nowwhereas with rigid body
we had our cache here in the scene tab for the rigid body
as you can see right here
we have the cachet here for the cloth
We have it in the cloth settings
Now again
the settings are basically exactly the same
So again
the cache is going to save your simulation and cache it
Much like if you go to a website and you log in once
you don't have to log in again every single time because it is cached or saved
So this will save our simulation so that we can actually render it out and so it doesn't have to calculate it again
So right here
you can see that we have a plus and minus
We could add more or less caches
as you can see right here
So we could have several different caches at once
We could click the minus icon to delete the cache
This could be useful
let's say you want to have the first cache from frame 1 to 250
And then you want to have another cache from frame 250 to frame 500
That way
you only have to delete a certain cachet or a certain amount and not everything
That way you could kind of cash things in batch or in sections
So right here we have the simulation start and end pretty self explanans
This is the range for how long the simulation is going to run
So right here
it's only going to store and calculate the data from frame 1 to 250
If I put the end frame right here to 300
you can see that here
if I play this
you can see that right here
once I get past frame 250
it's going to stop moving
As you can see right there
it's no longer moving
So right here
you can see it's still kind of moving
as you can see right there
And then after frame 250
it's no longer moving
So just like with the rigid body cache
if your simulation is longer
you want to increase this
Then right here we have the memory
So you can see it says 250 frames in memory
You can see that when you play it
once again
you get this little blue or purple line
If I move this
it's going to disappear
but as soon as I play it
you can see I get this blue or purple line
And this is the frames
As you can see
if I pause it
it's 103 frames in the memory
So right here
it's putting all these frames in the memory or caching them
So now I could scrub through this and replay it
So this is the number of frames that are in the cache
Then right here we have these options
You can see that these options are disabled until the file is saved
So let's go ahead and save this
And now you can see that we can enable these options
So right here we have disk cache
If we enable disk cache
it's going to go ahead and save the simulation or the cache to the hard drive of the computer rather than in the memory for the Ram
So this is great for large simulations
which require a lot of memory
because if you try to save this without disk cache and it just saves it on the memory or Ram
it might get too full and just crash
So here
you could save it directly to your disk or to your hard drive
Then right here
we have the option to use the library path
This is going to use the library path instead of the default directory
Now the library path can be found under Edit Preferences
And here you can see we have file paths right here
and then here you could set the library paths for different things such as fonts
texturessounds
render outputs
render cache right here
So you can set the different paths right here
All right
very cool
Now library path is very useful if you're working in projects with other people
because you could set a certain path or location for this cache to save to
and then those other people can access it from that certain path or location it makes the CA and any other assets are saved in the library path easily accessible by anyone who's working on the project
basically
So that's the library path right here
Againyou could set a specific destination for your cache
And aga​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌in
this is only if you're doing the disk cache
you can see if I disable this
it disables the library path as well
So again
this is only if you're saving to the disk
Then right here we have compression
This is going to allow for us to compress the cache files
and this could help to save disk space
So right here we have compression none
this is going to use no compression
and it's going to make writing and reading the files faster
but also the files are going to be bigger and it's going to take up more disk space
Then we have light right here with it set to light
it's going to apply light compression
and this is going to be a balance between saving disk space and maintaining performance
And then we have heavy right here
probablyas you guessed it
it's going to apply heavy compression
And this is going to save the most disc space
but it will also slow down the reading and writing of the cache files
So it all depends what you want to go with
All right
let me disable disk cache right here
Now again I'm going to go over these rather quickly because once again
these are the same settings as in the bake for the rigid body physics
But right here we have bake
This is going to go ahead and calculate the entire simulation from start to finish based on what we have here
And it's going to store the cache
And then the simulation won't change unless we delete the bake
So right here
if I click on bake
you can see right here
it's baking
And you can see right here we have the percentage
So now I can scrub through this as I want
And again
the simulation won't change
Another thing
just like before
you can see that we can't change any of the settings of our cloth now because it is baked
So all the settings are saved here in the cache or the bake
If we want to change any of these settings
we could click on delete
BakeDelete
bakeas the name implies
is just going to delete the bake
And then we could go ahead and make any changes that we want
Then we have calculate to frame
Once again
let me move this
so calculate to frame
if we say on frame 100
I could click on calculate to frame and it will basically go ahead and cash up to frame 100
So now you can see it's just like I played through it and it caches it
It's not baked
but it is cached
As you can see
we have 100 frames in the memory
then if we want to bake it
we could select on current cash to bake
Againcurrent cash to bake is going to take the current frames or what is currently cached
In this case
it's from frame 100
As you can see the blue or purple line or right here
and it's going to actually bake it
So if I click current cache to bake
you can see that now we've baked those hundred frames or these ones right here
So now these are baked and you can see it's basically saved it
I'm going to go ahead and click on delete bake again
and once again
the current cash to bake
You could do the same thing if you just play it
So right here
if I play it
you can see it's caching it
If I then click on current cache to bake
it's going to bake these 54 frames that I just played
Pretty cool
Let me click on delete
bakethen we have bake all dynamics
This is especially useful if you have a bunch of physics or dynamics in your scene
So let's say you have cloth
smokefluid
and other physics simulations in your scene
You could click Bake all dynamics
and this will bake all of them
not just the one that you're clicking on
So right here
let me click on delete bake
Again
If I click bake here
it will just bake this 1
bake all dynamics
will bake everything in the scene
Then we have delete all bakes
As the name implies
this is going to delete all the bakes in the scene for all the dynamics
So again
if you have multiple objects or simulations
this will delete the bake for all of them
Then we have update all to frame
Once again
if I'm on a certain frame and click Update Alta frame
this is going to update all of the simulations in the scene up to the current frame that I'm on
So if I go to this frame and click Update Alta Frame
it's going to update all of them
Againif you make any changes or tweaks
or let's say once again
the old CA is still kind of stuck in there
just like when we were resetting the gravity for the previous project of the car
wellwe could click on Update Alta Frame and it will update everything
And again
this goes for all of the simulations in the scene
So once again
that's the cash here
very similar
very much the same as the cash in the rigid bodies or any of the other caches that you could find throughout Blender
Now
one thing to keep in mind when using the disk cache right here
it's going to go ahead and save the cache wherever your file is saved
So right here
if I save this file again
and I save it in this new folder that I made
saveas you can see that right here
if I click on bake
it's going to bake this cache to the disk
And you can see that in this folder where I saved my file
we have the cache for that cloth physics
Pretty cool
And then once again
we have the use library path
Againthis is useful if you are working in a team and you are working with linked objects
So your objects are linked between different blender files
And you want the object to share the same cache
So when this is enabled
againthe linked versions of the object will share the same cache
Otherwiseif it's not
they will all have independent caches
So again
that is the cache option here with the blender cloth
All right I'll see you in the next one
Ciao for now
avo


------------------------

# 5_Cloth Pinning & Sewing
All right
in this one
we're going to go ahead and take a look at the shape settings in the cloth
Another one of my favorites
So here
let's go ahead and hit shift A
let's add a mesh plane and let's subdivide it 10
Then let's go to the cloth and add a cloth
And down here
you can see that we have under cache the shape right here
Nowthe shape has several different options
One of my favorite is the pin group right here
This pin group allows for us to basically dictate a certain vertex group that is going to stay fixed or partially fixed in place and not move
So right here
for example
if I play this
you can see it just falls down
But if I go to the vertex groups and in edit mode
add a new vertex group
And for example
herealt left
click this line right or this loop
I could click on assign
We could rename this by double clicking it
I could name it test one if I want
and then right here
if I go to the physics tab under pin group
I could select this pin group
And what this is going to do is it's going to pin these vertices or this group based on the weight that I as signed it with
So right here
because I assigned it a weight of one
you can see that here when I play it
it basically holds these in place
How awesome is that
If I go into edit mode and assign this a weight of like ．4
click assign
you can see that it kind of holds it
but it's also kind of falling
And if I put a weight of ．08 or lower
you can see that here
it's not really holding it
So again
this has to do with the weight that you assign it with
Againa weight of one
it will pin it 100% and just leave it there and not move and lower weights
It will slightly move
But this is awesome because this allows for us to create things such as a flag or curtains or any kind of cloth that will be pinned or attached to another object
Pretty cool
All right
so that is the pin group right there
Then we have the stiffness right here
The stiffness is going to control how strongly the pinned points are going to resist movement now with it set to a value of one
they're going to resist movement 100% regardless because it's a weight of one
But let's say right here
I alt shift
left click these loops right here
and I assign this a weight of ．3 or so and click assign
Wellright here
if I go to this stiffness again
this is how much these pinned vertices or points are going to resist movement
so right here
if I play this
you can see that right now they're kind of moving
but not really that much
If I put the stiffness down to zero
you can see that they're moving a lot and they're not resisting any movement
But if I put this higher
so if I start to put this up to point two
you can see that they resist movement a little bit
And the higher that I put this
the more these pinned vertices or this pinned group is going to resist movement
Now
againthis only applies if the vertex group is assigned with a value less than one
because you can see that the vertices with the value of one
it doesn't matter
What I change this to it will just stay the same
But here you can see that if I put the stiffness way higher
these ones act as if they have a value of one
meaning the stiffness is very high and they will resist movement a lot more than if the stiffness is at 6 or something or less than 6
And again
you could animate this value
And check this out
So with this
we could make a RA canopy for like a camper van or anything like that
which is pretty freaking awesome
Alright
so this is the pin group and the stiffness
Againthese work together
and then we have sewing right here
Now sewing is really
really awesome
What it does is it's going to pull parts of the cloth together as if they're being sewn
obviouslyas the name implies
So right here
if I go ahead and delete this
I could go into front view
In front view I'm going to add a plane Rx 90
and here I'm going to create a very simple t-shirt
So in edit mode
let's hit Ctrl R add loop cut right here
Let's go ahead and select this edge right here
E to extrude X
bring it over this way
And let's hit Ctrl R add loop
cut down the middle
select these X
delete faces in the modifiers
add a mirror modifier with clipping enabled
And then right here
we're going to go ahead and hit Ctrl R
add a couple loop cuts right here
left click
right click
select this vertex
OK
turn on proportional editing Gz and bring this down slightly to kind of create the neck area like that
And then what we want to do
we want enough geometry for this
So once again
with cloth
you want enough geometry
So I'm going to hit Ctrl R
add loop cuts right here
CR R
add a couple loop cuts right here and one right there
So we have a very simple rough shirt right there
I could also hit Gz
kind of bring this down a little bit more
so that's a little bit longer
All right
so with this
let's add a cloth physics to it
And right here under sewing
what we could do
once again
this is going to pull the mesh together as if it's being sewn
Now to do this
we need to go into edit mode
a key to select everything
And we need to hit the E key and extrude this out like so
Also sure that the normals are facing outside
So here
if we turn on the face normals under the mesh edit mode overlays up here
you can see that right here
these facings are all facing inside
as you can see right there
which is not good practice for anything
So let's hit the A key
select everything
alt n
recalculate outside
and then we could turn these off
So for this
what you want is you want to have the two sides of the fabric
so the front and the back
and then we want to alt left
click the interior faces right here and hit X and delete only faces
Don't select faces because otherwise it will delete the edges
We want to hit X and select only faces so that the edges are left here
So now what it's going to do is it's going to sew the front and the back based on these edges connecting it
So these edges are going to pull the two parts of the cloth together as if it's being sewn
So again
it's going to connect these points to these points with these invisible springs or these edges
and they're going to pull them towards each other
againlike stitching fabric together
So here
if I enable sewing and then play this
you can see we get that right there
How awesome is that
Pretty cool
Let's go ahead and turn off gravity temporarily just to see this a little bit easier
So under field weights I'm going to put the gravity to 0
So here you can see that these gets sewn together
very cool
and then we have max sewing force right here
This is going to limit how hard the sewing springs pull together
So at 0
it is just using all its force as you can see right there
But if we bring this up to point one
you can see that it's using less force
and if we bring this higher
it's going to use more force
and if we bring it really high
it's going to almost look as if it's at zero or just using all of its force
So again
this is how much force it's using to pull these cloths together or to sew it together
Pretty cool
So again
this max sewing force is going to prevent the cloth from behaving unrealistically by again
limiting the pulling strength
especially if the pieces are very far apart
This could help with it being more realistic because obviously
if you have this to 0 and they just snap together instantaneously
especially if I select this in edit mode and hit S and Y
you can see that that's not very realistic
So we could increase this to have it being sewn together more slowly or having less force
All right
let me hit control plus Z and undo that
Now with this
we could sew close together
So for example
if we had a character here
let's make Shift a very simple character
I'm going to alt shift
leftclick these two vertex loops right here
and I'm just going to hit shift D y
move this to the center
then let's hit P separate selection
And now this is a new object
Let's go ahead and remove the cloth physics from this and make it a collision in​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ the modifiers
You can see that the cloth is a modifier
so the collision right here is a modifier and the cloth right here is a modifier
So on this one that we have right here
just the vertices
let's add a skin modifier to give it thickness
And then let's hit Ctrl 2 to give it a subdivision surface level of 2
So now we just have this very simple kind of person right here
I'm going to go into edit mode of this
a key
select everything
and I'm going to hit CR A and shrink everything down a little bit so that it's skinnier
I could go ahead and select these vertices right here and control A and kind of fatten these up a little bit for the torso
Againjust a very crude person right there
All right
so then in view
let me hit Gz and bring this down
So here we have this person
if I play this
you can see we get this right here where it's not really doing anything
And that's because these modifiers
the collision and the cloth
are very important what order we put these in
So right here
you can see that the collision modifier is before the skin and before the subdivision surface
We want this to happen after both of these so that it takes into account the skin and the subdivision surface modifier
So now when I play it
you can see that we get this right here
very cool
Now it's colliding way too strongly
As you can see right here
it continues moving
so that's where that max force comes in
So down here
we could go ahead and increase the max sewing force
so maybe 0．4
And now when I play it
you can see that we get this right here
And it's sewing this together around the person
as you can see right there
Now you can see that the bottom is not doing too much of a good job
And again
this is very crude mesh right here
but for example
if we go ahead and scale this up a little bit and play it again
you can see that now it's sewing the bottom a little bit more
Maybe we could put the force up a little bit again
We'll be doing some clothing simulations later on with some characters
so don't worry about that
But you can see that this sews the clothes around our character
Pretty freaking cool
as you can see right there
All right
and then we have a shrinking factor right here
By the way
go ahead and make sure to save
Now
the shrinking factor
as the name implies
is going to make close shrink or expand
So the higher we put this positive value
it's going to make it shrink more
So you can see what happens right there
Let me go ahead and put it to a smaller number
maybe to like ．04
And you can see that the close shrink
if I put this to a negative value
the closes are going to grow or expand
As you can see right there
we got some extra large clothing for our character
brilliant
So you can see right here
the clothing either expands or shrinks
as you can see there
So that's the shrinking factor
Obviouslyat zero
it doesn't expand or shrink
It just stays to the default
All right
then we have dynamic mesh
This is going to update the shape of the clothes
If there's any changes in the mesh
like if it's being animated with shape keys
So here
for example
let's delete all of this shift day
let's add a Suzanne and make her a collision and shift a
add a plane
bring it up
subdivide it a bunch of times
and make it a cloth
So right here
if I play this
we get this right here
Let's go to the shape keys and add two new shape keys
Againthe basis shape key is the original shape and key one is going to be our changed shape
On key 1
go into edit mode
hit S X and scale this up on the x axis
So now when we change this value on key one
it should do this on the timeline
On frame 1
let's hit the I key
insert a keyframe for frame 1
and on frame 40
let's insert a keyframe with a value of one as well
Then let's go to frame 60 or so and put this value to one and hover the mouse I key insert a keyframe
So now if we play this
it should go from this square to then being stretched out and E elongated
So if I play this
you can see that it's not happening and that's because it's not taking into account the change in the shape of the cloth
And that's what this setting is for the dynamic mesh
It makes the mesh dynamic and continuously updated on every frame
especially if there's changes like it being animated or there's armatures on it
or shape keys
etc
So every frame
it's going to update it and it's going to base the simulation on that update
againmaking it dynamic
So it's going to adapt to any change in its shape
So if I enable this
you can see that here
it's going to then expand
And again
the simulation takes into account this change in the shape
Againyou can see without it doesn't do anything
and with it right here
now the last option that we have right here is the rest shape key
This only shows up if you have shape keys on your mesh and you can see that it gets disabled if we enable dynamic mesh
Now what this does is it allows for us to start the simulation from a specific shape or shape key instead of the resting shape or shape key
So for example
right here
we have our resting or our basis shape key
which is this one
and key one
which is this one
By the way
let me go ahead and delete these keyframes
So again
key one is like so
So here
if I go ahead and I put it on basis
it will start it from the basis shape key or the original mesh
If I change it to key one
it will start the cloth being started
stretched out or elongated on the x axis
Now you can see that right here for some reason in Blender 4．3
it is not working
So again
you can see that it's not working here and that's because it's a bug
I'm on Blender 4．3 right here
it's not working
I believe some of the other previous versions
It also still has a bug
so hopefully they fix this
But if I go to Blender 3．4
you can see that on Blender 3．4 right here
I have the same setup with this shape key right here
And once again
if I go here and I select the basis shape key
it's just going to use the original shape of the mesh
But if I select key 1
it's going to start the simulation with that shape key applied
So you can see when I play it
the mesh is elongated like that
Now
this is very useful if you want to
for example
let's say you have some cloth curtains and you want to start them already crumpled up or folded or things like that
Wellyou can start the resting shape from a certain shape key
So again
for example
if you have already draped curtains and you want it to start from that draped position instead of just starting from here and falling down and then swinging
you could again set what shape key the simulation should start on
And again
you can imagine
for example
a beach towel where you already want it folded and you don't want it to just run the simulation and for it to settle into its position during the simulation
you could just start it folded or in that specific shape key as I've said 50 times
So there​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ we go
keep in mind
once again
this feature does not work in the newer versions of Blender just yet
Againthere seems to be a bug on it
They have reported on it
as you can see right here
but hopefully it's fixed soon
If you really want to use this
you could switch to an older version of Blender
So with that
that is the shape options in the cloth settings
All right I'll see you in the next one
CIA for now avo


------------------------

# 6_Cloth Collision
All right
in this one
we're going to go ahead and take a look at the collision settings in the cloth
So let's go ahead and delete the default cube
add in a plane
move it up in edit mode
Let's go ahead and subdivide this to 10
And once again
let's add a Suzanne
On the Suzanne
we're going to make it a collision
And this
we're going to make it a cloth
Then on the cloth
let's go all the way down to the collision section right here
So right now
when we play this
we got this right here
and the first option we have is the quality for the collision
Now the quality right here is going to control the overall accuracy of the collision detection
So this is how the quality is when it collides with other objects
Nowthe higher the quality
so the higher we put this
you can see the max is 20
but we could put it higher if we type in a number
Nowthe higher the quality
the more time it's going to take to calculate the simulation
but it will be more precise and it will be less likely for the cloth to pass through other objects
and the collision will be higher quality
Now you can see that right here with this setup
there is no difference really
if I put it from 2 to 20
as you can see
there's no reason to increase this quality because the quality of two gives us the same result
But if you have more complex collisions and cloth simulations
or it's not colliding properly
or the cloth is passing through the objects
you could increase this quality or this collision quality
For example
hereif we go ahead and add in a cube
so let's add a cube
move it to the side
and bring it up in edit mode
Let's subdivide this a bunch of times like so
And right here
let me undo the subdivision
Let me show you one thing as well
Let's add a cloth to this and then add in a plane
and on this plane
let's make it a collision
You can see here that if this is not subdivided enough
it will just act more rigid
So you want this to have enough subdivisions
one more right here for it to actually collapse on itself
But right here
you can see that with the quality collisions set to two
if I play this and then grab this plane and move it up and down
the cloth is going to go through the plane
As you can see
the quality of the collision is not that good
But if I take this and put the quality collisions to 20 and now play it
you can see that the cloth is not going through the plane unless I move it very drastically like that
it will
but you can see that here
it's not going through the plane
It has much more quality when it collides with this as opposed to a value of 2
As you can see right here
it's kind of going through the plane
even if I move it very slightly
So that is the quality collision
all right I'm going to leave both of these simulations here and let's go to the next one that we have object collisions right here
This right here is just a check mark
and this will obviously enable for the cloth to collide with collision objects
If we uncheck this
you can see everything's grayed out and this will just pass through the collision object as you can see right there
So let's go ahead and enable this and let me go ahead and actually delete this as it's a little bit distracting
All right
then we have the distance
So this is going to set the distance or how close our cloth object can get to our collision object before it starts to be pushed away or before it starts to act as if it's colliding
So you can see here the distance by default is 0．015
So we have a little bit of distance between the collision object and the cloth
But if I put this up to like 0．7
you can see that now I have a value of 0．7 for the distance before it acts as if it's colliding with the object
So again
smaller distance will make it look like the cloth is closer to the object when it collides
And if we ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌put larger distance
it will look as if it hits the object before it actually hits it
So that is the distance
You can see what happens if we put it to 0．001
We get this right here
Againby default
it was at 0．015
So I'm just going to set it back to that
And you can see that that looks basically the same as all the way down
Then we have impulse clamping right here
This right here is basically going to go ahead and limit how much the cloth moves after it collides
Now this is mainly if a cloth
when it collides with a collision object
it can explode or makes sudden unrealistic movements when it collides with our objects
And this is going to help with that
So especially when you do cloth simulation in tight spaces
it can kind of explode or create
once again
unrealistic movements
And the higher you put this
the more this will help to make the cloth not move after it collides
Now
right here
we don't have that issue of it creating unrealistic movement or explosions after it collides
But if you notice that you're doing a cloth simulation
especially in tighter spaces
where when the cloth collides with the object
all of a sudden it explodes or does some really unrealistic movements
you could increase this impulse clamping
and this will basically help limit how much it moves after it collides
Once again
right here
we don't have that issue
so it's not really doing anything
Let's put this back to 0
Then we have vertex group right here
this is going to allow for us to exclude specific parts of the cloth from colliding with our collision objects
So here
if I go into edit mode
select half the mesh and create a vertex group and assign this half to it
If I go back over here and select that vertex group
you can see that this side of the cloth is no longer going to collide with our object
As you can see right there
it just goes through it
So we could set which parts of the mesh are going to collide and which parts are not
So here
whatever vertices we put in this group will ignore the collision
Pretty cool
All right
let me go ahead and x that group out
Then we have collision collection right here
This is going to restrict collisions to objects within a specific collection
So for example
if I hit shift A and add in a plane and make this a collision as well
I'm going to go ahead and I'm going to go ahead and move this plane to a new collection called Collection 2
And if I go to my top plane right here under the collision collection right here
I could specify which collisions in which collection are going to influence this
So Suzanne is in collection 1
So if I select collection one right there
you can see it collides with Suzanne
but the plane is in collection 2
So if I select collection 2
it won't collide with Suzanne
but only collection 2 or this plane right there
And again
this can help us to manage complex scenes by setting different collision objects into different collections
So that's the collision collection
All right
let's go to self collision
A really
really cool 1
Let's go ahead and delete these two objects right here
And on our top plane right here
let's go ahead and on the vertex group
let's go into edit mode
click Remove to remove everything
and let's select the center vertex right here
In fact
let's subdivide it one more time
Select the center vertex and assign it
Then let's go to the cloth settings and let's go to shape quickly
And under the pin group
which we took a look at before
let's select this group or this vertex group
So now when I play it
you can see it pins it with that vertex
and so it falls down like this
kind of like a handkerchief
Pretty cool
Now you can see that here the cloth is intersecting with itself
and that's where self collision comes in
This enables the cloth to collide with itself
This is going prevent the cloth from passing through itself and obviously make it look more realistic
So if I enable self collision right here
you can see it now collides with itself instead of passing through itself
Then we have friction right here
The friction is going to determine how much the cloth resists sliding over itself
Nowright now
it's not really sliding over itself
So let me go ahead and add a new plane right here and let me move it over here
I'm going to subdivide this a bunch of times like so
and make it a cloth
Then I'm going to go ahead and add in a torus
and I'm going to make this a collision
And I'm just going to place this under the cloth
And then lastly I'm going to hit shift a
add a plane
move it over
and make this a collision
So now this cloth is going to fall through here and fall onto the plane right here
Let me center it a little bit better
All right
so on this cloth
let's enable self collision right here
And if I play this
you can see that the cloth is falling over onto itself
as you can see right there
like so
And so this friction is going to determine how much the cloth resists to sliding over itself
So the higher the friction
the cloth is going to stick more to itself when it touches
kind of like cotton
And the lower the friction
it's going to make it slide more easily like silk
So here
if I put the friction to zero
you can see that we get this right here where it kind of slides over itself
As you can see right there
it's kind of more fluid or like silk
But if I put the friction very chi all the way to 80
it's going to act more like cotton
You can see that now it's not sliding over itself as much
So once again
you can see friction of 80x more like cotton
where it's not sliding over itself
and friction of 0
it slides over itself a bunch
As you can see right there
You can see the difference when I change this as it's actually playing
you can see how it slides over itself and then how it less sliding and more stiff or with more resistance to sliding
Then we have impulse clamping right here
just like before where we had it here
This impulse clamping is going to limit the amount of movement after the cloth collides with itself
whereas this one was limiting the movement when it collides with other objects or collision objects
This is limiting the movement when it collides with itself
And this is going to help to prevent extreme or unrealistic movements when we have simulations that are in a tight space
So right here
if we play this again
this is not going to do much because once again
this helps to prevent unrealistic movement or explosions in the cloth
So you can see that right here
it's still behaving the same once again
because again
this is if you have the animation in tight spaces and it's kind of moving in an unrealistic way or exploding right now
this is moving a little bit weirdly
but that's because of the friction of the floor that we have right here
So that's the impulse clamping
If you notice that your cloth
when it's self colliding
it's kind of exploding or creating really unrealistic movement
you could increase this number right here
And then we have the vertex group right here
Once again
this is going to limit or exclude certain areas of the cloth from self colliding
So if I go back to this one
you can see everything is colliding with itself
But here
if I go ahead and create a new vertex group
and I select these vertices here and click assign
and then I go over here and select that new vertex group here
these vertices are not going to collide with themselves
as you can see right there
So this is going to exclude these vertices from self collision
And again
this is useful if you want to specify or remove parts of the cloth that don't need to collide with itself
And this can help to reduce computation time or time to run the simulation
So again
this is useful for efficiency if you only need a certain part of the cloth to collide with itself and not the whole thing
because otherwise then it will calculate the whole thing
Whereas if it only calculates part of it
it will be faster
So that is the collisions options right here
Veryvery useful with that
In the next one
we'll continue
I'll see you there
Ciao for now
a Vo


------------------------

# 7_Property Weights
All right
in this one
we're going to take a look at the property weights in the cloth settings
So the property weights are going to allow for us to
So the property weights are going to allow for us to constrain certain cloth properties to certain vertex groups
So here
let's go ahead and with the cube Gz
bring it up and subdivide it a bunch of times like so
And then just add a plane
scale it up a bit
Let's go to the physics tab
make the plane a collision and the cube a cloth
So right here
you can see that we have different properties and we could set groups for these properties
You can see that these properties are the same properties that we found previously up here
such as the tension and compression and shearing and bending
etc
So you can see right here we have the max tension
max compression
shearingbending
and the shrinking right here
So right here
we're able to set a vertex group so that we could specify these values to be more or less based on that vertex group
So let's take a look at the first one
the structural group
This can control how stiff the cloth is across different parts of the mesh based on the vertex group
So again
this is going to control the max tension and the compression
Againthe max tension is going to control how much the cloth resists to being stretched
and the max compression is going to control how much it resists to being squished
So right here
let me also add in a plane
Let me move the plane up
Let's move the cube to the side
And on this plane
once again I'm going to subdivide it a bunch of times like so and maybe scale it up a little bit in edit mode
And I'm going to make it a cloth
And let me add a Suzanne or monkey right here and make her a collision
So right now you can see that when we play this
the cloth just falls like so
All right
so here on this cloth I'm going to go ahead and put the tension and compression to 0 and also the tension and compression damping to 0
Then if I play this
you can see that this cloth is stretching quite a bit
but I could go ahead and hit tab to go into edit mode
I could select half of this right here and go to the vertex groups
add a new vertex group and click assign
And now I could specify right here under the structural group
I could select that group
And here I could put the max tension higher
So now this side of the mesh is going to have the max tension and the tension settings of right here
But this side right here that we set under the vert max group is going to have this max tension right here
So now when I play it
you can see that this side has less tension and it's stretching more
and this side has more tension and it's stretching less
You can see this if I increase it even more and you can see what's happening right there
where again
this side is stretching a lot more
whereas this side has more structural integrity and it's not stretching as much as you could see
Obviously
if I select the whole plane
a key
and I assign everything to this vertex group and then play it
you can see that we get this right here
Once again
pretty cool
Or if I go into edit mode
remove everything and select all of this
let me actually go into front view
I'm going to select all of this and click Assign
You can see that now everything right here is going to have higher tension except for this part right here
As you can see right there
it's kind of stretching a little bit more
Nowright here
we can't really see it that much
so let me go ahead and remove all of this right here
So I could remove all that
remove
And now once again
you can see that right here
it's stretching more and right here will have more tension
It's the same thing for the compression
So right here
if I just delete this plane
bring this cube back over here and delete Suzanne
so now I have this cube cloth and this floor right here
I'm going to go ahead and put the tension and compression to 0 and the tension and compression damping to 0
And then down here we have our max compression
So right now
if I play this
you can see everything is just kind of falling
there is no resistance to it being compressed as you can see right there
but once again
I could go into edit mode
vertex select mode
select these vertices
add a new vertex group
and click assign
And right here I'm going to go down here and select this group right here
So now once again
the left side of the cube is going to take the compression settings from here
but the right side that's assigned to the group is gon na
Take the max compression from here
So now you can see that we have this right here
or again
the left side has no resistance to it being compressed
but the right side has this max compression right here
If I put this max compression to zero
you can see it acts as if there's no compression anywhere
and if I increase this really high
you can see we get this right here
So that is the structural group
And then it's basically the same thing for all these other ones
So right here
if I delete this cube I'm going to go ahead and add in a plane
bring it up a little bit
subdivide it a bunch of times like so
and then for the shearing
once again
I could add a cloth
And here I'm just going to add a CE
move it to the side
rotate it
and make this a collision
I'm then going to go ahead and hit shift D
duplicate this on both of these just like we did before at a keyframe on frame 20
I'm going to bring these in like so and hit the I key
Insert a keyframe
So now we have this right here
like so
Obviously
if I go to this plane and over here
let's say I put the shear down to 0 and the shear damping down to zero
you can see that we have this right here where it's shearing
againit's skewing the plane and adding this sideways force right here to it
as you can see right there
Nowif I go into edit mode and I select this half right here and just assign this to a vertex group assign
and I go back here under the shear group
I could select that group
and now if I play it
you can see that this side doesn't shear like the other side
Againthis side right here is taking the shear settings that are up here
and the group that we assigned is taking the shear settings that are right here
If I put this to 0
obviously it will just act like it has 0 everywhere
and if I increase this
you can see that once again
it doesn't shear it right here
So that's the shear group right there
So again
this one handles the shearing forces or the twisting forces of our mesh
All right
let's x this out
then we have the bending group
you probably guessed it
same kind of thing
so right here I'm just going to delete e​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌verything and reset it that way it's from scratch with the default settings
so cloth
and let me add a Suzanne with collision
So right here you can see that this bends like so
Obviously right here we have the bending
so let me go ahead and put this bending and bending damping to 0
So right here we have that and it's bending a lot
but once again we could change that
so I could select half of this
go to the vertex groups
assign it
And right here
I could go down here
select that group
And now if I play this
you can see that this side has less bending
Now the bending is only at 0．5
So let me put this up a little bit
and you can see that here
it has less bending
So now it's acting more like leather or like rubber
as you can see right there
Let me put it
You can see if you put it too high
it starts to kind of tweak and glitch like that
So you'll have to increase the quality
although right there it's not too bad
but you can see that right here it is going ahead and it is bending this less
So we're able to control the bending based off of a vertex group
Againthis can be the resistance to bending
And then right here we have the shrinking
So once again
let me just delete that
I'm going to add a plane and subdivide it a couple times
then I'm going to extrude it like so
Alt left
click this face loop X
delete only faces
and right here
add a cloth
Let me go to frame 1
All right
so right here
if I enable the sewing
so under the shape
you can see that we have the sewing and the shrinking
So let me enable sewing
you can see that right here
the shrinking is at 0
But once again
we can change that
So right here in top view I'm going to select these vertices
go to the vertex group
same thing as always
assign it
and right here
let me go to the cloth settings
I'm going to select my group right there
and now I could increase the shrinking for these vertices
So now when I play this
you can see that we get this right here
Maybe that was too much shrinking
So you can see that here
these vertices are assigned to that group
our shrinking
Let me put this down to a lower number
So right here you can see exactly what's happening
So if I play it and pause it
you can see the difference with this half and that half right there
as opposed to if I exit this group out
you can see that everything is uniform
But if I select this group right here
so once again
if I put this up to say like that
you can see the difference right here
As you can see right there
we could also put this to negative value
You can see that right now we're not able to
though
And that's because right here
the shrinking factor
we need to put this to a negative value to be able to bring this to a negative as well
So right here
if I put this to a very high negative value
I could put this one to a lower negative value
And you can see the difference that we have there
As you can see
Or I could put this to a positive
as you can see right there
So once again
these right here allow for us to dictate how much of these settings
the tension
compressionshearing
bendingand shrinking are going to be applied to specific parts based on vertex groups
Pretty cool
So we can have more control over our cloths
All right
so with that
that is the property weights
I'll see you in the next one
Ciao for now over Vo


------------------------

# 8_Cloth Field Weights
All right
lastlyin the cloth settings
we have the field weights
So let's go ahead and delete the cube
add a plane
subdivide it a couple times
and move it up
Over here in the cloth settings
you can see that the last option is field weights
Now this is the same as the field weights for rigid bodies or for anything else in Blender
So right here
we will take a look at these more
When we take a look at the force fields
But these field weights basically control how different force fields or forces such as gravity
windand other effects will affect our cloth
So for example
right here
you can see that we have gravity
If I play this
we have gravity affecting our cloth
I could put the gravity to 0
and now we have no gravity
as you can see right​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ there
But if I go ahead and add a cube
that is a collision object
and I go ahead and play this and move this on the cloth
you can see that this is influencing the movement
which could result in some really
really cool looks or simulations
as you can see right there
kind of looks like we have a slow motion paper flying through the air because again
we've stopped the gravity
Pretty cool
And then over here
we have other options
we have the effector collection
Once again
we could set a collection that will influence these
So for example
hereif I add a force field force right here
you can see that when I play this
let's also put the strength of the force field to like 10 or a little bit higher
Let me put it to 300
You can see that here
this is affecting this
but once again
I can move this to a different collection
So move to a new collection
And then here
let's say I get a force field vortex
Once again I'm going to put this to a strength of like 100
You can see that right now if I play this
both of them are affecting this
but if I go over here
I could select what collection of force fields is going to affect the cloth
So here
if I select just the collection
it will be just the vortex
As you can see right here
it's now spinning around
And if I select the collection
collection 2
it will just be the force force field
Also right here
you can see that we have values ranging from 1 to 0
and this is how much these forces influence this cloth
So for example
right here on collection 2
we have our force force field
which falls under force
Obviously right now at one
it's influencing it 100%
So you can see that right there
But if I put those 2．5 or so
it will influence it or have an effect on it only 50%
Or if I put it to zero
you can see it has no effect
Or I could put it to
let's say
．03and you can see it only has a little bit of an effect
Likewise
I could have both of these in the same collection right here by xing this out
and now we have the force and vortex affecting this
But then I could turn off the vortex
So now there's only the force or vice versa
turn off the force so there's only the vortex
or maybe I have both of them
but on the vortex
since it's way too much
I could put the Vortex down to like ．04 and now let me put it a little bit higher
And now you can see that we have both
let me put it a little bit higher
So now it has a vortex and a force
let me put the force down a little bit and this down
and now you can see that we have this and it spins as well
pretty cool
So with these field weights right here
we could influence
That looks cool
It looks like some kind of flying saucer is beaming up a tablecloth or a napkin
brilliant
So again
with these field weights
we're able to dictate how much influence these forces have on our cloths
Againwe'll take a look at this a lot more when we take a look at the force fields
So with that
that is all the settings for the cloth simulation
In the next one
we're going to go ahead and take a look at these collision settings
which is not too much
This should be done in a video or 2
And then we will create some practical cloth simulations and effects
So with that I'll see you in the next one
Ciao for now avoir


------------------------

# 9_Collision Settings
All in this one
We're going to go ahead and take a look at the collision and see how that works
We've been using it throughout this section
but now let's take a look at the settings
So here
let's go ahead and delete the cube and add in a plane
In the physics settings
let's go ahead and add a collision
Now the collision is going to act as a collision or an object that interacts with particles
soft bodies
and also cloth
Nowit does not interact with rigid bodies
You can see here
if I hit shift A and add a cube and make the cube a rigid body
you can see it does not collide with it
For that
you would have to have this be a rigid body set to passive
And now you can see it collides with it
Let me go ahead and X out the rigid body
So once again
collisions are for particles
soft bodies
and cloth to collide with it
Now we've taken​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ a look at cloth
we'll take a look at soft bodies later
which are here
and also particles later as well
But we'll see a little bit about them as we take a look at these settings
Now
the first option we have here is field absorption
This almost sounds like a superpower
Now what this one is going to do is it's going to control how much of the force from a force field is absorbed by our collision object
Nowwhat does that mean
Wellfor example
herelet me go ahead and scale this up
All right
and right here
let's hit shift A and go to force field and let's add a force force field and bring it below the plane
So now if I hit shift A
let's add a mesh plane
bring it above the collision
And let's subdivide this a couple times and make it a cloth
Let's also go ahead and on this force field
we'll put the strength to negative
let's say 100
so negative 100
So now if we play this
you can see that this force field pulls this paper towards the floor
We could even turn the gravity off on the cloth
So on the cloth
let's go all the way down here under field weights and turn the gravity to 0
And you can see that this is being pulled by this force field
as you can see right there
Now
for this option to be able to use the field absorption on the force field
we need to enable absorption right here
And this will allow for us to use that
So now if I select the floor with the field absorption
againthis is going to go ahead and control how much of the force from this force field is absorbed by this collision object
So with it at 0 right here
it means that nothing is going to be absorbed as you can see right here
the force is going through this collision object
But if I put the field absorption to one
you can see that now 100% of this force is being absorbed by this collision object
If I put it to
let's say
you can see that only 50% of the force is being absorbed
So basically
you can think of this
If you have a wall and you have some force fields behind the wall
and you don't want those to affect any of the objects that are on the other side of the wall
you can this field absorption right here
Againat 100%
it means that no force passes through this object
It's all being absorbed
And right here
you can see if I duplicate this paper and put it over here
or this cloth
and I play it here
you can see that this one is being pulled because there's nothing to stop the absorption
But if I go ahead and extrude out this collision like so
you can see that now here it's blocking it
And for example
if I go ahead and delete this face right here
you can see that now this one is being blocked
but not this one
So again
that's the field absorption
So if it's a lower value than one
it will allow for the forces to pass through this wall or collision
Very cool
down right here
you can see that we have the section particle
So this has to do with how the particles interact with this collision object
So let's go ahead
and I'm just going to delete
let me delete these
and I'm going to go ahead
let me just delete this as well
add a new plane
and make it a collision
So again
this has to do with particles
we're going to take a look at particles a little bit later
But here to look at this
let's take a look a little bit at particles
So here I'm going to hit shift A
add a plane
bring it up
and on this plane I'm going to go to the particle tab right here and add a new particle system
So now you can see that if I play this
I got this right here
Let's go ahead and on this floor right here
you can see it's a collision
And these right here are just kind of ending
So let's go ahead and hit G Z and bring this down a little bit so that now when we play it
you can see that these bounce off of the plane
If I rotate the plane like so
you can see I get this right here where these particles are bouncing off of the plane
Pretty cool
So let's take a look at these options
First
we have permeability right here
This right here is going to go ahead and determine how many of the particles can pass through the object
So a value of 0 means that no particles are going to pass through
And if we increase this value
that means that more particles are going to pass through
So here you can see that if I rewind this shift left arrow
if I start to increase this
you can see that some of the particles are passing through
And the more I increase this
you can see at one
all of the particles are passing through
At 0
none are passing through
And once again
as I change this
more or less particles will pass through the collision object
Pretty cool
So that's the permeability
let's put that to 0
Then we have stickiness right here
the stickiness
probablyas you imagine from the name
is going to control how much particles stick to our object after colliding with it
So right here
you can see
againwith the stickiness of zero
none of them are sticking
they're just bouncing off
But if I increase this a little bit
you can see that here they are sticking and then sliding off
If I put this to a lower number like one
you can see that we get that
right
Twoif I increase it a little bit more to around two
you can see that right there
they're sticking a little bit more etc
So this will determine how much the particles stick
So the higher the value
it's going to make the particles more likely to stick to the surface
You can see a 0．5 value
I got this right here
etc
So again
stickiness is how much they will stick to the surface
Let's go ahead and set this to 0 once again
Then we have killed particles right here
thiswhen enabled
it's going to delete the particles when they hit our collision object
So this is great if we're using
for example
in effect where the particles are going to disappear when they collide
So here
if I enable kill particles
you can see as soon as they hit here
they die or disappear and they don't bounce off
So that is the kill particles right there
Then we have damping right here
Againremember damping from all the previous damping is the damping is going to be the slowing of the motion or energy of the object
in this case
the particles
So this right here
this damping
is going to reduce the speed of the particles after they collide
So you can see with no damping
we have this right here
If we put the damping up to one
you can see that we have this right here
let's put it down a little bit less maybe to here
And you can see that here they have less of a jump
so they have or a bounce
so they bounce a little bit less
So again
this is going to reduce the speed of the particles after they collide
Againhere a higher value means that the particles lose more speed and that will make them less bouncy
Then right here we have randomized
This has to do with the damping
This randomized right here is going to go ahead and add variation to the damping effect
So you can see here
if I put the damping to 0．5
let's say
and the randomized to 0
we have this right here
if I put the randomized to one
you can see that we now have this right here where some of them are not bouncing as much and some of them are bouncing more
So again
it's going to randomize this damping effect
so it's going to make it look a little more natural by varying how much the particles are slowing down as you can see right there
All right
let's go ahead and put the randomized and damping to 0
Then we have friction right here
As the name implies
this is going to control how much the particles slow down when they slide along our collision
So right here
you can see friction of 0
We have this right here
and if I put the friction to one
you can see that we have this right here
Now
right now
we can't really see much because they are bouncing and not sliding along our surface
So we need to go ahead and put the damping up again
If I put the friction down and the damping up
you can see that now they will slide
So with the damping to one and the friction at 0
we have this right here where there is no friction as they slide
But if I put the friction to one
you can see that they will have friction
And now they're not moving at all
If I put the friction down a little bit
you can see that when they slide
there is more friction when it's sliding along the surface
as you can see right there
Pretty cool
So that's what the friction does
Againit slows down particles when they slide along the surface
Then we have randomized
once again
this randomized has to do with the friction
this is going to go ahead and randomize or add variation to the friction effect
meaning it's going to add randomness to how much the particles slow down when sliding
So right here
you can see that all the particles are slowing down the same amount
but if we put the randomized to one
you can see that sum will slow down more or less
and let me go ahead and put this friction down a little bit like so
so you can see here like so
let me zoom in a little bit
and with the randomized to zero
you can see what that gives me
So randomized to 0
And randomized to one
So again
this randomized is going to go ahead and add randomness to how much they slow down when they slide
And let me go ahead and mess around with this a little bit to get a better result that is easier to see
So you can see here
randomize of zero
randomize of one
very cool
It's a little tricky to see it here because they're all clumped together
But here
if I go to the particles
let me go to the particle system
I'm going to put the number here from 1000 to maybe let's put 100 instead
and let me go back here and let's see if I could see it a little bit better here
So you can see here with randomize of one
they have randomization of the friction and randomized of zero
You can see that we have this right here where they're all sliding the same amount or they have the same amount of friction and randomized of one
You could clearly see the difference now how this one is more kind of jittered because it has randomness of friction
Pretty cool
So that is the particle settings right here for the collision
Then we have soft body and cloth
so these will be the settings for the soft body and the cloth physics
So again
if you change these are just for particles as it says right there
the field absorption can be for particles
It can be for cloth or for soft bodies
So here we have soft body and cloth
Againthis is going to dictate how it interacts with soft bodies and cloth
So right here
let's delete this particle system
and I'm going to hit shift a
add a plane
bring it up
subdivide it a bunch of times
and add a cloth to it
All right
so right here
if I just play this with the default settings
you can see we have this right here where the cloth falls
Again
in front view
I have my plane or my collision tilted so that it slides down like so
So we just have this with the default values
First option
you probably know it because we've gone over damping quite a bit
So you probably understand what it is now
But here we have the damping
The damping is going to control how much the soft bodies and cloth slow down after colliding with our collision
So a higher value is going to make the material lose more energy
It's also going to reduce the bouncing
Now to see the damping effect
let's actually add a soft body as we're able to see that better with a soft body
So here
shift date
add in a cube
bring this up
and let's click on soft body
Now a soft body is basically the opposite of a rigid body
whereas a rigid body doesn't move or change its shape in any way
a soft body is more fluid and able to change its shape
You can think of it as jello or maybe some rubber etc
Now here
if we try to play this
you can see that just kind of floats back and forth
So we need to disable goal
Once again
we'll take a look at all these settings later
and now if I play it
you can see it kind of folds and collapses
So let's enables self collision
And now we get this right here
kind of like a little jello cube
So here the damping is going to go ahead and control how much the soft bodies are cloth slow down after colliding with this object or our collision object
So higher values
it's going to make the material lose more energy and reduced bouncing
So you can see damping at 0
We have this
And if I put the damping at one
we have this right here
As you can see right there
it kind of gets stuck in place
And if I put it to 0．5 or so
we have this right here
if I put it a little bit lower
you can see it's going to slowly slide down
As you can see right there
it's slowly sliding
So that is the damping
I'm going to go ahead and put this back to 0
then we have thickness outer
so the thickness outer is going to add additional thickness or padding around our object
This is going to help to prevent objects from intersecting
So right here
you can see with the thickness outer
it's set to 0．02 by default
And we have this right here
If I set this higher
you can se​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e that we have this right here where it collides
Let me put it even higher where it collides before it even hits the mesh
as you can see right there
So it's much like on the rigid bodies
the thickness that we had for the collision or the spacing that we had
So again
you can see zero
we have that and one
we have this
Againit creates padding on the outside
So again
that is the thickness outer right here
it's going to go ahead and see if these vertices are close enough to the outside thickness
and then it's going to repel that face or push it out
So again
that's the outer
The inner works much the same way
but for the inside of the face or the inside of the collision
So again
keep in mind that the thickness outer
it detects where this outer thickness is
and then once it hits that
it will repel it or push it outwards
Now here
once again
this is based on the normals of our face
If I go into edit mode and here under the mesh edit mode overlays
I turn on the face normals and increase the size
You can see that the normal is pointing out this way
meaning that this side right here is the outer
Now the inner is the other side right here where the normal is not facing
So if I go into front view R 180 and flip it
this is now the inner
So here
if I put the inner thickness up like so
you can see that when I play it
it sucks the mesh through
Now why is that
Wellit's basically detecting
And again
this is for soft body only
As you can see right there
it's detecting if the vertices of this soft body are close enough to the inner side or the inner thickness of this mesh right here
And if it is within the distance of this inner thickness
it's going to repel or push this geometry out
So it's pushing it outwards
So right here
you can see that if I bring this up
as soon as it gets within a distance of an inner thickness of ．6
you can see that it's going to push it out
Now
why is this useful
Let me go back into front view and edit mode and rotate this back so that the outer is going this way
Let me also go ahead and hit Alt R to clear the rotation
So right now
let's go ahead and put the thickness outer to here
and I'm going to put the inner to 0
So with the thickness outer
you can see that right here
let me actually put it higher
so the thickness outer here
it's going to give us an outer thickness of where it detects it for it repelling outwards
But here
let's say that this right here is starting in the middle of the plane
like so
So this is intersecting with the plane
Well here
if I have the inner thickness all the way down like so
you can see that when I play it
it's not repelling it outwards because the inner thickness is too low
But if I put the inner thickness up a little bit
it's going to determine a thickness for the inner side right here
So let's say right here it is 0．225
So anything within here and here
it's going to repel and push it out
So now if I go ahead and play this
you can see that here it pushes it outwards
So that's what this inner thickness is good for
If your soft bodies are intersecting and you need it to push out from the opposite side or the opposite side of the normals
So again
both the thickness
outer and inner are going to push outwards and they are just to detect how far or how thick it is on either side
Pretty cool
All right
then we have friction
pretty self explanans
Let me rotate my plane like so
and let me delete the soft body
I'm going to hit shift a
add a plane
and subdivide this again
Let me disable the face normals and make this a cloth
So right here
if I play this
you can see we have that right there
If I go here and increase the friction
you can see the cloth has more friction and it's not sliding down
So as this implies
obviously it's going to control how slippery the surface is or how much friction it has
So the higher this value is
the harder it is for objects to slide across the surface
In this case
soft body and cloth objects
Then we have single sided right here
which by default is enabled
This is going to go ahead and treat the object as having only one side for collision
and this is going to be the side that has the normal facing in that direction
So once again
you can see the normal is facing this way
So only this side is acting as collision right now
If I hit R Y 180 to rotate this 180 degrees and I go into edit mode
you can see it's now facing this way
So this side is not going to act as collision
If I play this
you can see that just goes through it from the inner thickness right here
But if I disable single sided right here
this side
it will collide with this side as well
So it will collide with either the side that has the normal facing that way or where it doesn't have the normal facing that way
or the opposite side of the normal
as you can see right there
Pretty cool
Let's re-enable that
And then lastly
right here
we have override normals
To see this in action
let's go ahead and delete this plane and let's add a Suzanne and make her a collision
Then on the cloth that we have up here
let's go ahead and subdivide it again
and maybe even one more time and I'm going to scale it up a little bit
Let me also turn off the normals
make sure the normals are facing outwards
So hit Alt N and recalculate outside
and you can see that the mesh is flipped the wrong way
So in object mode I'm going to hit R Y 180 and flip it so that now if I go to edit mode
alt n recalculate outside
everything is good
All right
let me turn off these overlays right here
All right
so the override normals right here
Now what this is going to do when we enable this
it's going to use the normals of the collider object to dictate the direction of the collision force for the cloth
Now what this is going to do is it's going to basically ensure that the cloth or the soft body
Behaves in a way that is consistent with our collision shape right here
Basically
the cloth is going to be pushed away directly from the normals of our collision object
So right here
you can see that we have the normals
So the force where it's going to be pushed away is going to use these normals instead
So right here
if I go ahead and select the cloth and Suzanne shift Dx
duplicate these on this 1
I will enable override normals
and on this 1
I won't
So now you can see that if I play this right here
you can see that we get this right here
Now let's go ahead and actually scale these up so that they go over the ears as well
So right here
let me delete these
That way they're exactly the same
So this one is going over the ears and let me hit shift dx with both of these
So both of these right here
shift dx
duplicate these
and override normals
So now if I play this
you can see that right here
If I pause it
you can see that the mesh right here with override normals is conforming more to Suzanne
Because again
it's going to basically take the collision normals and use that as the direction to push away the cloth
So the cloth is going to conform exactly to the mesh
If this is disabled
the collision forces might not perfectly align with the collider's normals right here
especially if we have complex or intricate surfaces
This may result in it acting in a strange way
such as the cloth sliding off the surface
or just not being close enough or conformed enough to the shape of the collider
So you can see that we have this right here
Let me go ahead and try to get a little bit of a better setup here
So let me adjust and mess around with the size of this plane right here
And here
what I'm actually going do is increase the quality steps on the cloth right here
So I'm going to increase them to
let's say 33
You can see it's going to be a lot slower
but you're going to be able to see a little bit better what this does
So right here
let me go ahead and duplicate these
And on this one I'm going to enable override normals and play it
So here
if I pause this and let me play it a little bit more right there
you could see that here the cloth with the override normals on this collision are conforming much better to the ears because again
it's using the normals of this object to dictate how it's pushing the cloth away
Whereas with this one
you can see that around the ears
it just didn't push it in the same direction
So this one right here was pushed kind of like this into itself instead of pushing it away from the normals of Suzanne right here
As you can see
if I go to object mode right here
so instead of pushing it away out from the normals
it just kind of crumpled in on itself right there
as you can see
And you can see kind of what's happening in the back as well
So this gives us a better result
Again
this is going be
if you have more complex simulations
this override normal can give you a better result because it will basically take the normals as the collision object and use those as the direction to push away the cloth
So with that
that is all the cloth collision settings
We did it in one video with that
I'll see you in the next one where we will take a look at making some practical cloth sims and animations
So I'll see you there
Ciao for now a


------------------------

# 10_Objects Interacting With Cloth
All right
now we're going to take a look at some practical examples of creating cloth simulations
We're going to start off really simple by making a cube collide with a curtain like cloth
So here with the cube
let's hit Gz one
move it up one blender unit
and then shift a
let's add a mesh plane in edit mode
scale it up for the floor
Then let's hit shift A
let's add a plane again
R x 90
rotate 90 ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌degrees Gz
bring it up S key
let's scale it up a little bit and SZ scale it on the Z to make it more like that
Then let's hit Ctrl
apply the rotation and scale
let's move it in front of the cube
And in edit mode
let's right click subdivide
change the number of cuts right here to 10
and then right click subdivide one more time
Then on this
let's go to the physics tab
let's make this a cloth
let's make the floor a collision
and now if I play this
you can see we just have this right here where it's just collapsing
brilliant
All right
let's animate the cube so that it moves forward
I'm going to select the cube on frame 1 Ike I'm going to move to frame 100 and hit G
move it forward and hit the I key
and now you can see that when I play this
we get this right here
obviously we need to make the cube a collision
so let's make it a collision
And now we have this where it's taking the cloth with it
which is pretty cool
but I don't want it to take the cloth with it
so we need to pin the cloth once again to do that if we go into edit mode alt left click this vertex loop right here
go to the object data
add a new vertex group
and click Assign
Then in the Physics tab under the shape for the cloth
let's select that pin group
And now when we play it
you can see that we have this right here
pretty freaking cool
so let's also enable on this cloth
let's enable under collision self collision
so that it collides with itself
And then if we want more geometry on this
we could subdivide it
But again
keep in mind that these cloths are modifiers
So these physics
for example
this cloth is a modifier
So here in the modifiers
we could hit CR 2 to add a subsurface level of 2
Now once again
this is important
what order this is in
If it's after the cloth modifier
it will do the cloth physics first
and then it will subdivide it
So it's not taking into account this additional subdivided geometry for the cloth simulation
as you can see right there
In order to do that
we need the subdivision modifier before the cloth
So now when we play this
you can see it has a lot more geometry to it
as you can see right there
Veryvery cool
So now we got this cool effect right here
Let's select the cloth
right click shaded smooth
Now the cloth is stretching a little bit too much
As you can see right here
it's kind of stretching again
this depends what kind of cloth you want
but I want it to stretch a little bit less and be less bending
So I'm going to select this in the cloth settings
I'm going to go ahead and put the tension up again
The tension is how much it resists stretching
so I'm going to put this to like 40 and I'm going to put the bending again
this is how much it resists bending
I'm going to put the bending to 20 right there
We could also increase the quality steps
Againthe quality steps is going to be the overall quality of the simulation
so I'm going to put this to 10 right there
and now when I play this
you can see that we have this right here again
it's going to be slower
the higher the quality and the more vertices you put
but you can see that here it looks really
really nice
So now we got this right here
pretty freaking cool
So again
this is a very simple cloth simulation
but very satisfying and very cool
so with that
let's go ahead and save this feel free to change any of these settings that you want
totally up to you
You could change the quality for the collision
you could change some of the settings on the collision
make the collision object something else
but right here
once we have everything that we want and like we just need to go to the cache
so let's go to the cache and right here
we're going to go ahead and click on bake
We could set it to disk cache
but I'm just going to bake it and it's going to bake it to the Ram
So here I'm going to click on bake
and here it's going to go ahead and bake the 250 frames
so I'll be back once this is done
All right
so now that it's baked
if I go ahead and play this
you can see that we get this right here and it plays in real time
Pretty freaking cool
So now we can go ahead and add a material to this
Now of course
depending on the cloth that you make right here
this cloth has no thickness to it because it's completely flat
So keep in mind that you could
of course
extrude this out and give it some slight thickness
If you need thickness in your cloth
Againit all depends what you're doing
Keep in mind more geometry
the slower it will be and the more it will take to calculate
But now with this
let's go ahead and save this and add a simple material to this
So here
let's hit Z and go to render V port shading mode
Let's select the light and let's change it to a sun lamp value of 4
Hit R twice to tumble
rotate it
select our cloth
and let's change this to the Shader Editor
Click on New to add a new material
Then right here
I want to create a kind of velvet material
So here we're going to go ahead and get a sheen bsdf Now this is only available in cycles
so make sure to change the render engine to Cycles
So here I'm going to hit shift A
add a sheen bsdf right there
and let's move this over here
Let's get a mix shader
so mix shader
drop it after the principal bsdf I'm going to put the principal bsdf on the bottom and the sheen on the top
Let's go ahead and change this color to a red color
So I'm going to change this to like a lighter red color and on the base color of the principle bsdf I'm going to make this a darker kind of red color then right here on the roughness for the sheen
you can see this changes the roughness for the sheen
how shiny or not shiny it is on this
I'm going to go ahead and get a noise texture
So it's going to give us this nice kind of velvety look
Let's also hit CRL tab
add a mapping texture coordinate and change it to UV
so change this to UV in Edit mode
select everything and hit you and unwrap it
All right
so here I'm going to uncheck Normalize
I'm going to go ahead and put the scale up a little bit so you can see right here
it's creating some patches that are less shiny
I'm going to put the detail up to about 6 or so
and I'm going to put the roughness up as well
So now you can see exactly what's happening right here
as you can see
So we get this kind of cool look
We could also go to the sheen of the principal bsdf and put the weight to one and put the roughness up a little bit for the tint
I'm going to hover my mouse on this color Ctrl C to copy it and Ctrl V to paste it here
All right
so now we got this kind of velvety material
pretty cool on the cube
Add whatever kind of material that you want
I'm just going to put the metallic to one and the base color down and the roughness down to make it just a shiny cube
And there we go
I'm going to hit 0 to go into camera view
And in fact
I want the camera to be from front view
So I'm going to hit one on the numpad CRL
alt numpad 0
And I'm just going to place the camera right here is good
And now if I play this
you can see that we get this right here
Veryvery cool
As you can see right there
pretty cool
I also want to put the roughness up on this
so on the principal bsdf I'm going to put the roughness up to like 1．8 or so
Once again
feel free to adjust anything as you want
So now we got this right here
maybe for the camera angle I'm going to select under view camera to view and I'm going to position it more at an angle right here
All right
super cool
So now that we have this I'm just going to go ahead and render this out
Again
very simple animation
feel free to expand on this
feel free to make it your own
but right here I'm going to go ahead and do the same thing that we've done in all the other videos
I'm going to render this out
All right
and there we go
it's rendered out
So now let me go ahead and put this into an animation in the video sequencer
Once again on frame 1
shift a image sequence and go ahead and load in all the rendered out images
And then we just need to go to the output properties
change this to fff
mpegand under encoding
Once again
change it to Mpeg 4 and then render and render animation once again
And it's going to render it out as an animation
All right
let's see what this looks like
Obviouslyit's very simple
but you can see it looks pretty freaking cool
So with that
make sure to share your project from this video on the Q&A here on udesh or on blender mania 3 dot com dot
I'll see you in the next one
Ciao for now avo


------------------------

# 11_Making Stage Curtains
All right
now we're going to go ahead and create some curtains
such as stage curtains closing
So go back to the file from the previous video
Let me hit the end key and turn off camera to view
And right here I'm going to delete the images from the video sequencer and I'm going to change this to the timeline
So here
let's go ahead and we're going to continue from this curtain that we made here
Let's go ahead
we could delete the cube and on the cloth
let's go ahead and delete the bake of the cloth
So now let's make sure that it is actually deleted
You can see it's still kind of cached in there
So go ahead and move this so that it updates it
All right
very cool
So now what I'm going to do is I want the curtain to be held right here
kind of like held by rope
and then kind of just fall down where it's resting like this and covering the stage
And then we're going to duplicate it to the other side
So first
we need to create the curtain so that it's held over here
To do that
let's select our plane or curtain shift S cursor to selected
And in top view
we first need to add some thickness to this
So in edit mode
with everything selected
let's hit the E key
extrude this out just a little bit to add a little bit of thickness to it
maybe a little bit more since these are stage curtains and they're kind of thick
So to about here
And then I'm going to hit the A key
select everything alt N I'm going to select recalculate outside to make sure the normals are all recalculated outside
I'm also going to right click set Origin to geometry once again since we extruded it
Then I'm going to hit shift S cursor to select it again
And then here we need to create an object that's going to hold the curtain
So let's hit shift A
let's add a mesh torus
In edit mode Z
go into the wireframe
select half of the torus right here and hit X
I'm just going to delete these faces right here
Then with all of this in edit mode I'm going to hit s y and scale this along the y axis so that it's a little bit skinnier right here where it's going to clamp it or where it's going to grab it because I want the curtain to stay within this and not be
you know
all the way over here
All right
then I'm going to hit g．x
let's bring this out on frame 1
Let's hit the I key
insert a keyframe on frame 100 right here
let's hit Gx and bring this so that it is at the end of the curtain
but not past the curtain
You want this to still be grabbing the curtain
so about right here and hit the I key
Let's obviously then make this a collision
So make it a collision object
And now we have this right here
If I play it
let's also on the curtain in the modifiers
let's put the levels viewport and render viewport to so that we only have one subdivision because we don't need that much
So now we have this right here where this is grabbing our curtain
just like so
Pretty freaking cool
All right
very cool
Now for this
for the cloth
you could feel free to change the bending
the tension
etc
Maybe I'll put the bending from 20 down to 10
that way it bends and crumples up a little bit more like so
but again
feel free to change the settings that we changed before to kind of get the look and feel that you want
But here I'm just going to put the bending down and leave everything else the same
So right here
go ahead and play it until this part right here settles and it looks like it's being held by this
Also another thing on the quality
I'm going to put the quality up to 30 and I'm going to put the collision quality from 2 to 10
And then let me go ahead and replay this
It's going to be much slower
but don't worry
we're going to be applying this as an actual shape key
So right here
just go ahead and play it and let the curtain settle down
Settle down
So let me go ahead and play this and I'll be back once it's done
And there we go
So now I have something like so
Now you can see that right here
it's kind of going past this like that
I don't really like that
so I'm going to go ahead and grab this and in edit mode I'm going to hit S X
scale this up like so
so that it's able to grab it more
And then let me just move this so that it updates it
And let me go ahead and play this and see what this looks like
And there we go
So now we got this right here
So you can see here the curtain is being held like so
Once again
depending on your computer and your specs
you might have to put the quality steps lower
or maybe you could put it higher
But again
adjust the settings for what you want it to look like and also what your computer can handle
So now that we got this right here
let's go the modifiers here
We want to apply the subdivision surface modifier
By the way
let's go ahead and make sure to save this first
So right here
saving ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌it
And then on the subsurface modifier
let's apply it
And then on the cloth right here
once again
this is a modifier
If we click on the little drop down
you can see that we could apply as shape key
so not save as shape key right here
but apply as shape key
So this will apply it as a new shape key
So let's click that
Now if I go to the object data right here
you can see we have the basis shape key and if I click on cloth and put it to a value of one
you can see that we have this look as a shape key
Pretty cool
Let's select this object right here and just delete that
And now with this
let's add a cloth again
because now the cloth is gone since we applied it as a shape key
but we're going to add another cloth here
let's also go to frame 1
then we need to pin this because as you can see
it's just falling
So in edit mode
let's go ahead and alt left
click this middle loop
In fact
let's just go to front view Z
go into wireframe and box
select these vertices here in the object data under group
You don't need to create a new group
just go to the group and click on assign
and then in the Physics tab under Shape
select that pin group
So now if we play this
you can see we get this right here
How awesome is that
Pretty cool
now it's intersecting
So once again
we need to select self collision right there so that it doesn't intersect with itself
as you can see right there
pretty awesome
we could also go ahead and change the bending
So right here
I could put the bending stiffness up a little bit
So again
this is how much it resists bending
I could put this to maybe 20 so that it bends a little bit less
and now we get this right here
let me put it to maybe 10
and let's see what that looks like
There we go
I think 10 is still a little bit too much maybe for another setting that we could change the vertex mass
So right here on the vertex mass
we could change this from ．3 to let's say two
and this will make it a lot heavier as you can see right there and it acts more like that
Againit depends how you want it to act
If I put the vertex mask
for example
the 22
you can see we get this right here where it's really heavy
and it's also stretching quite a bit
So again
you can mess around with the settings if you want I'm going to put it to around 3
I think the bending is a little too high
I'm going to put it back down to one
and there we go
I get something like that
that looks awesome
So now that I have this
againfeel free to tweak the settings as you want
but here again
I put the vertex mask to three
bending to one
and right here you can see I have the quality steps only to 5 right now
which is fine
As you can see
againyou don't want to increase the quality steps here or for the collision if you don't need them
If you don't need to increase these
you don't want to
because otherwise it will just create it will be a lot slower
So now we need the curtain on the other side In order to do that on frame 1
let's hit tab to go into edit mode A to select everything
shift D x
duplicate it over
and hit XX negative one to flip it or mirror it
and then just hit gnx and move it over so that the top is next to the top of the other one
just to make sure
Because sometimes when you flip things
the normals go inside out
select everything
alt n
recalculate outside
And now if I play it
check this out
they're going to fall down and they're going to collide with each other
check that out
how awesome is that that is so cool
pretty freaking sweet
and of course we still have our sweet material that we have on there
pretty neat
Let's go ahead and save this once again
so save it
So once again
make sure to save
and then once you've saved
you can mess around with the settings because if you change the settings and you don't like it
you could always open your save file
So for example here
if I put the quality steps to 11
maybe I put the tension up and the bending up a little bit right here
And then right here
I could go ahead and change the friction
let's say
on the self collision
And let's say I want to change the compression
increase that again
I could go ahead and play it
And if I don't like the settings that I've changed
I could just reopen my saved file
So you can see here
it looks slightly different
I'm just going to go ahead and go with what I had before
So I'm going to reopen my save file
So right here
I have this right there
pretty awesome
Now once again
feel free to adjust this as you want
like I said
make this scene your own
But now with that
let's go ahead and just texture the floor
Make it a wooden floor
Obviously with the floor
let's bring it up so that it's next to the curtain
Let's also make sure the floor is a collision so that the curtain kind of falls on it
and if you want the curtain to kind of fall on the floor as well
bring it a little bit higher
So that the curtain can basically interact with the floor and kind of collide with it like that
That looks really awesome
as you can see right there
So now with the floor
I just want to make it a kind of kind of a wooden floor
So right here
let me go to material preview and I'm going to go to the Shader Editor
So Shader editor I'm going to click on new
And right here out of the base color
let's get a wave texture right there
CRL T mapping
texture coordinate
and right here
this can be very simple
I'm just going to add a color ramp
So let's add a color ramp right here on the black of the color ramp
I'm going to make this a kind of brownish color for the wood right here
like so
And now I'm going to hover my mouse here
Ctrl C to copy
go to the white and Ctrl V to paste
On this one right here
I'm going to make it slightly darker
so I'm going to scroll my mouse wheel down to make it slightly darker
And then I'm going to bring this stop down to contrast it so that we have wooden planks like so
We could increase the scale on the wave texture for however small we want the planks
And then lastly
out of the normal right here of the principal bsdf
let's get a bump node Out of the height
We're going to get a noise texture right here
And now we're going to go ahead and hit CRL T once again
So Ctrl T mapping
texture coordinate
and then right here
I want it to look like wood grain
So on the scale
let's increase this quite a bit
And then on the Y scale
on the mapping node I'm going to put the y scale down to ．1 so that it looks like that
And it looks like grained wood
like so
I'm going to increase the scale
And then on the bump I'm going to put the distance down to like ．1 or maybe ．3
something like that
so that we get this kind of look also on the noise texture
I'm going to deselect Normalize
and I'm going to go ahead and put the detail to 15 so that we get this nice looking grained wood
As you can see with detail at 2
it looks like that detail of 15
And we could change the roughness if we want
but I'm just going to increase it maybe a little it
And now we get this nice wood looking texture
Pretty cool
Maybe I'll put the distance of the bump down to ．1 now
All right
and then in rendered viewport shading mode
you can see that right here
this is way too intense
so I'm going to put the distance down to ．05
maybe like so
and I'm also going to make this color darker so that the cracks in between the wood are a little darker
And I'm going to adjust these color ramps like so
I'm going to put the roughness up so that it's not so shiny
and then for the back wall
I don't want just a gray wall
let's go ahead and put a brick wall there
So in material view I'm going to hit shift A
let's add a mesh plane
By the way
this is the setup for the grained wood
As you can see right there
If you nee​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌d to take a look at it
once again
my dot blends will be in the resources of this course so you can check those out
But then for the brick wall
let me go ahead and save this incrementally
I'm just going to hit shift A
add a new mesh plane Rx 90
rotate 90 degrees
scale it up
scale it on the X CRL A
apply the rotation and scale
add a new material
and from the base color
let's get a brick texture right here
Once again
let me go ahead and bring this back like so
Let's hit Ctrl T mapping texture coordinate
You can see right here
it's acting a little weird
So let's change this to UV right here
And then just in case it's not UV unwrapped in edit mode
hit U
unwrap it
and then right here
you can see that the bricks are rotated the opposite way
So right here I'm ju​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌st going to go to the UV editor in edit mode
I'm going to select all the UV lights here
a key
and I'm going to hit R 90
rotate them 90 degrees like so
We could center it if we want
And then in the shader editor
let's go ahead and put color 1 and color 2 to different brick colors
so kind of like a reddish brick texture
like so
Ctrl C to copy
Ctrl V to paste
and then make it a slightly different color like so
And then the mortar
make it a white color
kind of like a grayish whitish color
Then here we have mortar smoothness
so let me expand this right here
So we have mortar smoothness
let's increase this so that it's smoother where the mortar and the bricks meet
And then of course
the magic is in the bump
So out the normal gets a bump
node bump
And let's plug the factor into the height right here
Then I could Ctr shift
leftclick the factor just to see how the mask is
You can see here the mortar is white and the bricks are black
meaning that the mortar is going to be pushed up and the bricks are going to be pushed in
So we want the opposite
We want the mortar to be pushed in and the bricks pushed out
So we could click on inverts right here and it will invert it
and now it is proper
All right
then here I'm just going to hit one on the numpad
go in front view CR
alt numpad zero
position my camera here
I'm going to grab the camera
obviously adjust the wall all in all
and it was just another brick in the wall
Heckyeah
All right
here in edit mode I'm just going to scale this up like so
adjust it like so
I also don't want the
I want the floor to be big enough so that it's within the camera
So I'm going to scale this also in edit mode
Let me adjust that like that
I'm going to select the camera under the camera properties under the Viewport display
I'm going to put the past part out to 1
and I'm going to center this like this
maybe bring it down so that I can't see the top of the curtains
And there we go
Let me go to render Viewport shading mode
You can see that that looks pretty sweet
Obviously
on some stage curtains
we would have some more curtains kind of covering the sides as well
So here
just to quickly make that
let's add a plane
bring it over and hit Rx 90
Flip it like so
In edit mode
let's hit SZ
scale it up like so
and then put it right here in front of these curtains
So like that
go ahead and adjust it so that it is the same height
And in camera view
make sure to adjust it so that it's covering this area right here that's not being blocked off
So something like that
Obviously make sure that it's in front of it
but that they're not going through each other
So something like that
And now I'm going to hit Ctrl A to apply the rotation scale now to make it more curtain
like I'm just going to go into edit mode
ctrl R
add a bunch of loop cuts by scrolling my mouse wheel up
So something like so
something like this right here
left click
right click
And then I'm going to go to select and check or deselect
This is going to select every other edge
I'm just going to hit G Y and bring these back like so
So now I have this kind of look
I'm also going to hit CR 2 at a subsurface level of 2
Bring it forward
right click
shade smooth
And I want it to have the same material as this
So I'm going to select this shifts like this 1 C L link materials
All right
now I'm just going to duplicate it
shift Dx
duplicate it to the other side like so
And there we go
Obviously here we can't see our velvet or our sheen setup
But if we go to rendered viewport shading mode
you can see that it's there
And we got this sweet setup
Now these bricks are way too big
So on the brick texture I'm going to put the scale maybe to 22
That's too small
something like that
And there we go again
Adjust this as you want
I could spend another couple of hours on this
like I've said
So go ahead and spend a couple hours on this and make it look however you want
Just a couple other finishing touches right here
the light
I don't want a sun lamp
obviously this is a theater
so I'm going to hit Alt R
clear the rotation
and I'm going to change this to a spotlight lights
camera action
Let's put the power to like 1000 right there
and we have the spotlight right here that's going to go on the theater and then maybe over here
let's hit Shifty Y
duplicate it over Rx and put a spotlight shining towards the stage as well
Againfeel free to adjust the lighting as you want
Totally up to you
Let me center this a little bit more and bring it further back so that we could see the wall
which is pretty cool
All right
so something like that
Lastly
I just want to right here
you can see that the sharp transition from the wood to the brick
I don't like it
so I'm going to add just a kind of
kind of like a baseboard right here
So here I'm just going to hit shift a
add a cube
move it over like so
cheesybring it down
and I'm going to scale it way down
Let me go into side view
doesn't help because these are completely flat like that Sx
Scale it way up like so
Sy
scale it down and obviously CR A apply the rotation and scale
And on this in the modifiers
let's add a bevel modifier
AgainI can change the segments to three right here
I'm going to put the amount to 0 and then hold down shift and slightly increase it
and then I'm going to right click it
shade it smooth
And for the material I'm just going to select this shift
select the floor CR L link materials so that it has the same material
Now I don't want the stripes on here
so I'm going to select this and I'm going to make it a single user by clicking the little two button right here
This is going to make it so that I could change this material without changing this one
So I'm going to make it a single user
And right here I'm going to remove the wave texture and the texture coordinate right here
So I'm going to remove those
I'm going to plug the noise into the factor of the color ramp
and then I'm going to put the bump distance down to ．01 right here
And I'm also going to change the scale to like three or so
maybe not three
maybe like 11
like so
Againfeel free to adjust it as you want
So right here you can see what we got
Let me adjust the scale right here
Also I'm going to put the Y scale on the mapping to one
and I'm going to put the x scale to ．1 so that it has grained wood in that direction
In fact
I don't like this different colors with the color ramp
so I'm just going to delete the color ramp and remove it
And I'm just going to have this a solid kind of brown color like that
something like that
I'm going to leave the bump so that it creates this kind of this kind of grained wood look
But I didn't like the color ramp
All right
and there we go
this looks pretty freaking awesome
So with that
go ahead and save one more time again with the setting up of the scene and the materials
I'm going through it a little bit fast because I don't want to spend too much time on it because once again
that's not the focus of this course
Otherwisethis course would be way too long
But here is my brick setup right there
This is the setup for the baseboard right here and the floor set up right here
And we already set up the curtain in the last video
but here it is again
So again
you could pause it or look at my blend file
Now
one thing right here before we bake this
you can see that here
this shape key
So if I go to the shape keys
you can see that this right here
if I put it to 0
the other curtain goes into the other one
Now this will work fine
but if you don't want that
we could just apply this shape key because we don't really need it
So in this dropdown
we could click the little dropdown and select apply all shape keys right here
And if we apply that
we no longer have shape keys
what this allows for us to do to is reset the origin of the object
Because you can see before
if I hit Ctrl Z and I right click set origin
origin to geometry
you can see it stays there because that is the origin if I put this back to 0
But if I apply these shape keys right here
I could right click set origin
origin to geometry
and I could reset it right there
And it just looks neater
as you can see
And it will still act exactly the same
We don't really need that shape key
That was just to get the initial kind of look of the cloth
All right
very cool
Let's go ahead and bake this
So in the physics tab
let's go to here and we're going to click on bake
So click on bake
I'll be back once this is done
And there we go
it is now baked and check that out
Veryvery cool
So now we got that right there
pretty freaking sweet
So again
feel free to tweak this as you want
You can see right here
there's a little bit of a gap when they first close
So you can make these curtains way bigger so that when they fall down
there's curtains over here a little bit more
Againlike I said
feel free to tweak this scene as you want
So make this scene your own
Then once again I'm going to render this out
You want to make sure to be in cycles to get the texture of this
So here I'm going to go ahead and render out and I'll be back once I've rendered out the images
All right
now here I forgot to change it from fff Mpeg from the previous file back to PNG
So it rendered it out directly as a movie
which is fine since this is such a simple scene
So let's see how this looks
And you can see that that looks pretty freaking cool
So there we go
go ahead and tweak the scene as you want
change it as you want
and again
make sure to share your results on the Q&A here on udesh or on blender mania 3D dot com dot


------------------------

# 12_Character Cape Cloth Physics
All right
now to the good stuff
We're gonna see how to do some cloth clothing simulations and physics
First one we're going to do is going to be a little simpler
It's going to be a cape
So we're going to see how to create the cloth simulation for a cape
First thing we're going to do is get our character and animation
So go ahead and go to mixamo dot com
do forward slash
hashtag forward slash
You need to make sure to put the hashtag
otherwise it won't work
You can also Google mixamo once you're here
just go ahead and sign up and then log in
which I've already done
Then we're going to click on browse characters on here
We're going to go ahead and go to page 2
As you can see right here
I already have the character
And on page 2
we're going to go ahead and get this character down here Arisa and click on her and click use this character
So we have that one again
it has the cape as you could see right there
Now we could tumble around by left clicking and dragging
zoom in and out by mouse scrolling and middle mouse button to pan
So right here
we're then going to go to animations and under animation
we're going to search for punching right here and let's go ahead and get the punching bag animation right here
You'll be able to import any animation you want
I'll show you how to do that after
But for now
get this character and get the punching bag animation right here
very cool
Now right here
there's a bunch of different settings
The only 1 I want to change is the trim right here
I want to put this all the way down and this all the way up so that the animation lasts longer
As you can see right here
it's going to be a little bit longer
All right
so now that we got that
all we want to do is click on download
and we're going to leave all the settings to default
It's going to be Fbx with skin means
it's going to be with the mesh
If you put without skin
it will just be the armature
And then 30 frames per seconds keyframe reduction
none and click on download
Then go ahead and put this Fbx into a folder
All right
back in Blender
let's go ahead and delete the cube and go to file
import Fbx and find your file
So this one right here I'm going to hit delete on the numpad to zoom in
And now you can see that we got this awesome little animation right here
Pretty cool
Of course
if we go to Material Preview
you can see that we have all the textures and everything
So we have our character and our animation
pretty sweet
All right
let's go into solid view right here
let's pause this and go to frame 1
So for the cape
you can see that if we select the cape
we also have the hair as part of the object and also this collar area
So I want to separate out the cape as just the cap and the cape
So in edit mode
select a vertex on the cape shift
select a vertex on the cap
and hit Ctrl L to select a link and then P separate selection
So now we just have this
Once again
you want to make sure that the scale is applied on everything
which it already is
So we're good with that and that the normals on your mesh are proper
So if I go into edit mode and turn on the normals
you can see everything is good
If you're in doubt
you could just in edit mode with everything selected
hit Alt N and recalculate outside
but we're already good
All right
then on this
let's just go ahead and add a cloth and we are done
No I'm just kidding
So now we have this right here
brilliant or cap is just going off by itself
Niceall right
very cool
So now we got that right there
she's bald
All right
sweet
So now we need to make the cape pinned somewhere
So let's go to the vertex groups
add a new vertex group
and here let's just name it
I'm just going to name it cape in edit mode
I'm going to select everything and for now I'm just going to assign everything with a weight of one and click Assign
Then in the Physics tab under the Shape the Pin group I'm going to select Cape
Now everything is pinned so it looks exactly the same because again
everything is pinned
Now what we're going to do is in side view 3 on the numpad
go into edit mode Z
go into wireframe
and we're going to box select the vertices all the way just below the place where it's holding the arrows or the bow and arrow right here
So go ahead and select all the way to here
So minus those
so all the way to here
as you can see
minus that
So all these with all these vertices
we're going to go back to our vertex group and put the weight to 0 and click Assign
So now all these vertices from here to here are pinned
but these ones right here are not pinned
And so now if we play this
you can see that we get this right here
pretty freaking cool
Nowright here
the cloth is intersecting with itself
so let's handle that
Next
let's go to the physics tab down here under collisions
Let me pause this
let's enable self collision
Now when I play this
you can see that we get a little bit of an issue
the cape just lifts up as if there's a ghost
and that's because of this distance right here for the self collision
it is way too high
So right now it's just colliding with itself and kind of pushing away from itself
If we put the distance to 0 or all the way down
you can see that that fixes that
but we don't want it all the way down
otherwise it might intersect with itself
so I'm going to bring this up to like a ．002 or so like that
And there we go
we'll adjust it if we need
in fact I'll bring it to like a point zero zero four for now
All right
very cool
So now we have it acting like a cloth and colliding with itself
next we need it to collide with the character
so let's select the character and make her a collision
She's a collision
All right
brilliant
So now you can see it's colliding with the character
now it looks fine
but if we want it to collide a little bit better
we could select the cape down here under the collision
let's put the quality to like 15 right there to make it a little bit better
all right
very cool on the collision object or the person
we could also enable override normals
Once again
this is going to push the cloth away based off of the normals or the perpendicular direction
so this is going to give it a little bit better of a look as you can see right there
and you can see that this looks great and there we go
we now have the cloth physics for the cape
pretty cool
Now a couple other things I want to do right here
I want to go ahead and select the cape
you can see that right here
it's not that high of a quality for the cloth
so I'm going to go ahead and first go to the modifiers C 1 to add a subsurface modifier level of 1
And once again
we want to put this before the cloth so that it takes into account the additional geometry
So now you can see that we get something that's a lot better
however now with this additional geometry quality is again
not that good
so let's go to the physics tab and under the quality steps
which again is the main quality
let's put this up to like 20 or so
So now when I play it
obviously it's going to be a lot slower
but it's going to look a lot better
as you can see right there
So now you can see right here and you can see that right here
it's kind of wrapping around itself
So let's take a look at the self collision again to kind of figure out the issue and debug it
For example
now that I've increased this
we get this right here
ObviouslyI could change the quality and bring it down
but I still want the quality to be high
But if I disable self collision right here and play it
you can see that I no longer have that issue
So I know that the issue comes from the self collision
If you still had the issue
I would then go to the character and disable the collision of the character
And if it fixes it
you know that the issue is within the character
but here the issue is within the self collision
So let me enable self collision and right here
let me put the distance to 0
And you can see here with the distance at zero
we solve that issue
The distance isn't actually at 0
it's at 0．001
So maybe I'll put this distance to ．004 right here
And now you can see that we shouldn't have that issue
There we go
you can see it's still colliding within itself a little bit right there
So maybe I'll put 0．008 right there
All right
now you can see at ．008
we have that happening
so I'm going to put it to 0．005
Another thing that we could do
because the thickness of this cloth is pretty thin
So I can hit tab to go into edit mode CR L
select the linked
and I can hit Alt S
and this will allow for me to shrink in or fatten the cloth
So I'm going to hit Alt S and just fatten this a little bit so that there's a little bit more spacing on the inside of the mesh
And that should help a little bit
All right
very cool
So now we got this right here
as you can see
veryvery cool
Now it's still kind of intersecting there
so maybe I'll put the quality steps to 35 right here and then play it again
The higher the quality steps
the better the quality
but obviously the slower it will be
So you can see that that looks nice
All right
one other thing that I want to do before I tweak this a little more is over here
I want to enable dynamic mesh because this mesh does have vertex groups
it does have an armature
so it is changing its shape
So I want to enable dynamic mesh
Againthis is going to respect the deformation of the mesh
And each frame
it will update the simulation depending on how the mesh deforms with the armature
So let's make sure to enable dynamic mesh as well
And there we go
Now I'm actually getting a better result with lower quality steps
so I'm going to put this to 15 right here
And again
a lot of this is just playing around with it and tweaking some of the settings
As you can see right here
a value of 15 gives me better results
And then right here
I could kind of mess with the self collision
Maybe I'll put it back down to 0．002 as that was giving it a little bit of a better look as well
There we go
so again
feel free to tweak it
But you can see that this right here looks awesome
And there we go
We now have this cloth simulation for the cape
Check that out
Let me go ahead and play this whole thing through
and then I'll play it
All right
and check this out
How awesome is that
That is pretty freaking cool
Nice
All right
let's go ahead and make sure to save this
All right
so now that we got this
let's go ahead and add in any animation that we want from memo to this
So let's go back to mixim o dot com and right here
let's x out the punching and here in the search
you can pick whatever you want
So pick whatever kind of animation you want
I'm just going to go ahead and click on combat right here
and I'm going to go ahead and find a combat animation that I like
Againyou can pick whatever you want
I'm going to pick this one right here
the chappa go toia probably said that completely wrong
but I'm going to pick this one
So right here on this one I'm going to go ahead and click on download
But this time I want without skin because I don't need the mesh
I only need the armature and I'm going to click on download and I'm going to put this Fbx into the same folder
All right
back in Blender
let's go ahead and go to file
import Fbx and import the chappa
guratoia
or whatever you got
So I'm going to go ahead and load in this one
So you can see that on this one
we have the animation right there
But how do we put it to this rig right here
Once again
you got to make sure that you have the exact same character picked
otherwise you could have issues
But right here
since I downloaded this rig with the same character picked I'm going to go to this armature Ctrl tab
go into pose mode A to select all the bones
which they already are
and on the timeline hit the A key to select all the keyframes
As you can see right here
they already are
Then hovering my mouse over the timeline
I'm going to hit Ctrl C to copy
I'm then going to go to object mode
select my other armature from my main character Ctrl tab
go into pose mode
and I'm going to place my cursor over here and hit Ctrl V to paste
And now I'm going to go ahead and bring this over with the G key
like so
Let's also extend the end frame so that all the keyframes are included
So now let's go back to object mode
Frame one
we could delete the other armature
so just delete the other one
And now you can see that when I play this
we have both of these combined
So let me go ahead and let this play through
So now check this out
If I play this
you can see that we're going to have some issues though
But if I play this
that looks great
And then it's going to go to the second animation
you can see that we have two issues
First of all
the cache isn't long enough
so let's put the end frame here to 300
And let's put the cache of the cloth
So over here under CA
let's put that to 300 as well
Then you can see the second issue is that here with the new animation
it jumps from one frame with the character posed like this to the next frame
The character is posed like this
So that creates an issue with the cloth
as you saw
because when this happens
the cloth is all of a sudden jumping from here to here
And so there's a lot of momentum and the cloth gets draped over her head
And a bunch of issues happen because obviously it's not realistic for a person to move from here all of a sudden to move to a completely different position
So that causes issues
Very easy fix
All we're going to do is with all these keyframes selected
we're just going to create some spacing between the old animation and the new one
So we're just going to hit the G key and move this over so that now there's a little bit more key frames As you can see
it gradually changes from the previous pose to the next pose
This is looking like some spawn cape stuff happening right here
But you can see that right here
we have it more gradually transitioning from the first pose to the second animation
So now let me go ahead and play through this
you can see I have to extend the frame again
Let me see how fast or slow she is moving from here to here
Againright now it's playing at like two frames per seconds
but I have 196 to 220 about
it's about 30 frames
so it should be fine
Again
you could refine the animation mo​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌re if you want
I'm going to extend this out to frame 320
Frame 320 as the end
And let me go ahead and play this
And I will play it again once it's cached
All right
so now if I play this
check it out
we now have her punching and then doing the other animation
as you can see right there
Veryvery cool
Now
obviously right there
the transition from the first animation to the second one is
yeahit's pretty bad
Like I said
this is not an animation course
its main focus is the physics
but let me go ahead right here
it is transitioning way too slow
so I'm going to go ahead and bring this in a little bit
so that's not that slow
All right
let me go ahead and rerun this and tweak it so that it looks a little bit better
Go ahead and do the sa​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌me
tweak yours
and again
you could import as many of these mixamo animations
you could then copy and paste the keyframes to this character or to this rig
and you could stack as many of these as you want
So go ahead and do that however you want
All right
so now here
check this out
we got the punching and then the other animation
whatever it was called
so check this out
how awesome is that
Now obviously depending on your animation and the clips that you put in here
you may have to tweak the settings for the cloth and the collision
but go ahead and mess around with it
Once again
make this your own
tweak it as you want
make this into a full scene
and then render it out here
I'm going to go ahead and save this
so make sure to save it and since it's already cached
all I need to do right here in the physics is go to the cache and I could select current cash to bake
That way I don't have to rerun through this
It's just going to take the cash and put it into bake
So now you can see that we got this and it looks awesome
veryvery cool if you want to make the cloth even smoother
you could add another subsurface modifier after this
So right here
I could add a modifier subdivision surface right here
and I could add another one after
This may be a little bit overkill
but you could always do that
It looks great right now
so I'm just going to leave it as is
So right here
if I go to rendered viewport shading mode
let me go ahead and get my light
change it to a sun lamp value of 4
I'm going to rotate this tumble
rotate it like so
and I'm going to go ahead and get my camera
So right here
maybe I'll leave the camera to the default position and let me make sure that everything is within the camera view
Check that out
Very
very cool
Right now it's playing a little bit slower
I actually want this a little bit better camera angle
so I'm going to go to view camera to view and I'm going to adjust this a little bit
maybe kind of this view right here
So check that out
That is pretty cool
maybe from this side
Yeahlike that
Veryvery cool
So here I'm just going to do a quick animation of my camera
Go ahead and do the same thing
In fact
for this
let's just do something simple and that's going to be cool
Let's zoom it out to something like this
I'm going to hit N key
uncheck camera to view
and then I'm just going to go ahead and hit shift A
add a mesh circle in edit mode
I'm going to scale it up like so
And I'm just going to go ahead and select the camera shifts like the circle CR P parent to object
and then with the circle
hit the N key
go to item
and we're going to go to the Z rotation right here
And in here
we're going to type in hashtag frame forward slash or divided by 30
So what this is going to do is it's going to add a driver
and it's basically going to go ahead and every frame
it's going to add a value of one and then divide it by 30
So right here
if I now play this
you can see we have this right here
Pretty cool
Now
if you want to make it slower or faster
you could go over here
just click on this and change the number
So the lower the number
the faster it will go
And the higher the number
the slower it will go
So maybe I'll put it to 50 right there
That way we get some shots from every angle and I think this will look better
So let me just make sure that I have everything in there
And there we go
pretty awesome
All right I'm going to render this out an EV
let's see how it looks like an evon cycles just to see
So right here I'm going to go ahead also for the end frame
Let me bring it down a little bit
So I'm gon na stop it right here
As soon as she puts her foot down
So frame 300
otherwise there's some dead space or non movement of the animation
So right here
let me go to rendered viewport shading mode
So this is evol
this is cycles
honestlyit looks basically the same
I'm just going to do it in evon it will be faster
I could enable ray tracing as well
which I will do
And then the light
let me go ahead and tumble
rotate this to a certain way like that
that looks cool
Of course
we could add a floor
Otherwise we're just going to have a gray background
You can see from the back here
we don't see much
So I think I'm going to also add an Hdri quickly
So let's go to polyhaline dot com
On polyhaline dot com
go to browse Hdri maps and get whatever Hdri you want
I'm going to go ahead and search for Mountain right here because
you know
she looks kind of like a elf archer or something
So I'm gon na get the Champagne Castle one right here
and I'm just going to click on download
You could also download this in 1K or 2K if yo​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌u want
if you want it to be a little bit faster
go ahead and put that image into your folder
Back in Blender
go to the World tab under color
click the little dot and select Environment texture and open that image
Then let's go to the render properties under film
enable Transparent so that we don't see it
and there we go
that way our lighting is a little bit better
All right
veryvery cool
As far as the floor
we could add a floor if we want
like so
Againtotally up to you
I kind of like it without a floor
although let me see
let me do a test render quickly
So without a floor
it looks like that
I don't know
I kind of like it without a floor
Againmake this scene and animation your own
expand on it
make it however you want
Once you've got everything set up
once again
make sure to save
go to the output properties
PNGselect a folder
So right here I'm going to create a new folder renders
make sure that you've baked the animation for the cloth
make sure you have your end frame set for the cloth and the animation
And then go ahead
save one last time and go to render render animation
All right I'll be back once this is done
This should be pretty fast since this is with Eevee and what the heck is going on with her face
All right
let me check what's happening
All right
so I figured out the issue
very simple and stupid issue
You can see that right here
it's intersecting with her head
And that's because on the subsurface modifier right here
we have the render level set to 2
So it's smoothing it out too much
and it's basically intersecting with the head
You can see if I put the viewport levels to 2
we get exactly that
So right here I'm going to put the render levels to one right here so that now if I render this out
you can see that it is fine
And we don't have that weird issue
All right
so now save and let's go ahead and render all this out again
I'm doing it in Eev
so I'll be back
Once this is done
you can see it's going pretty fast
It's already on frame 12 plus already
This looks pretty cool
So I'll be back once this is rendered out
All right
and they are now rendered out
that took about two minutes
so right here I'm going to go to the video sequencer and same thing as always
load in that image sequence right here
and then in the output properties
change it to Fff
mpeg video and Mpeg 4
and then render render animation
And let's see what this looks like
It's looking pretty sweet here
All right
so let's see what this looks like
Check that out
Pretty freaking cool
So that looks awesome
It's a little bit hard to see the cape with the black background
so I'm going to go ahead and do another one again on my own time
On my own time
sounds like I'm hired somewhere
and I'm just going to go ahead and add a white floor
in fact
to kind of match the circle
I'm going to add in a circle and make it an end gun here
And I'm just going to scale it up like so
and then add a very basic material
Maybe I'll put the roughness down a little bit to make it shiny
maybe even more like so
That'll look pretty cool
And I'm just going to go ahead and render out
I'm going to delete this strip
and I'm going to render this out as images once again
And I'll be right back and show you the video of this one
All right
so here is the new one with a little bit of a better backdrop so that we could actually see the cape
So let's check it out
And you can see that that's a little bit better visually
a little bit easier to see
Veryvery cool
So with that
go ahead and make this scene your own
Againspend more time on it
tweak it
make it your own
and then once you've render out your video
make sure to share it on the Q&A here on udesh or on blender mania 3D dot com
I'll see you in the next one
Ciao for now avo


------------------------

# 13_Clothing Simulation
All right
in this one
we're going to go ahead and take a look at how to do clothing and cloth simulations for clothing
So let's go back to mixamo dot com again
that's mixamo dot com forward slash hashtag
I don't know why that's there
All right
we're going to go to characters and the character that we want to pick
because all these characters that seem to have clothing
they have clothing
but then there's no body underneath it
So we want to have both
So we're just going to go to the mannequin right here
Go ahead and get the mannequin
and then let's go to animations and get whatever animation you want
I'm going to get dancing animation
So I'm going to search for dancing again
You can get whatever you want
You can see that there's a red or female and a blue or male
So these are female animations and these are male animations
so pick whatever you want
Againit doesn't have to be a dancing
it could be a fighting animation
whatever you want
Like this right here
Yeahmaybe I'll pick that
You could always click it and preview it as you can see right here
YeahI like that this has
this has good movement as well
so I'm going to go with this
All right
then let's click on download
make sure to log in obviously
and I'm going to go ahead and download this
leave all the settings to the default and download
and then put that Fbx into a folder
Alrightso now back in Blender
delete the default cube
go to file
import Fbx
and load in your character with his animation
So right here we have this right here
pretty freaking cool
Againyour animation can be different
totally fine
so now with this
I want the character to be standing still so that we could actually put the shirt on him
So here
go into pose mode of the armature
a key
make sure all the armatures or bones are selected
a key
make sure all the keyframes are selected
and just move them out of the way on frame 1
Let's hit alt R
alt G
and alt S to clear everything
And we're going to hit the I key
insert a keyframe
then select that keyframe
shift D
and just duplicate it over
So now when we play this
he's going to stand still for a little bit before he goes into the animation
This is going to allow for us to put the clothes on the character
All right
back in object mode
we're going to go into front view shift A
let's add a mesh plane Rx 90
rotate 90 degrees Gy
bring it forward Gz
bring it up and in edit mode
go ahead and scale it down like so
Now we're just going to go ahead and create a very rough kind of clothing or shirt
So right here
go ahead and bring that down to there
Againin edit mode E Z
bring this up to about here and let's hit CRL R add loop cut right here
Make it so that it's just under the armpits and make this one so that it's just above the shoulders right here
Then I'm going to go ahead and shift select both these E key to extrude XX
scale it on the x to about right here
So something like that
Then let's turn on X mirror and just go ahead and adjust these a little bit so that it fits the character
Very cool
I'm going to select everything
right click subdivide
and I'm going to subdivide again
then I'm going to box select these vertices right here
xand delete faces for the neck area
All right
then right here
right here
it's a little bit too congested
so I'm going to al left
click this loop G twice edge
slide it
I'm going to out left click this loop right here
x delete edge loops
and same thing with this one right here
delete the edge loop
And then I'm going to edge slide this a little bit by Alt left clicking and hitting G twice just so that the geometry is evenly spaced out
All right
then I'm going to hit the A key
select everything E
and just extrude this out to the other side like so
brilliant
Now we could do the sewing on this and make this sew together
but there's an easier way to just do this
and that is with the shrink wrap
So right here
let's go ahead and let's add some loops right here
So I'm going to hit Ctrl R
and here I'm going to go ahead and add in like 4 or 5 loop cuts right here so that we have enough geometry like so
Maybe I'll add one more
So like that
left click
right click
And now we just want to delete the geometry
That is where the arms
headand torso is
So in face select mode
go ahead and hit the C key and we're just going to select these faces here
these faces right here
these ones on the other side right here
and these ones on the inside
and select the ones on the side as well right here
So right there and right here
minus that
So you can hit middle mouse button to deselect when you're in the brush tool
So with all these faces selected
that one as well
againyou can go in wireframe
sureyou have them all selected
so it should look like this
Let's hit X and delete faces
All right
then on this
let's go to modifiers
a modifier
get the shrink wrap modifier on the target
get the little picker icon
and select the mannequin
Very cool
Let's go ahead and increase the offset and bring this up a little bit so that the shirt is outside the body like so
And then we just want to adjust this a little bit
So in edit mode
we could go ahead and go to Vertex select mode
turn on proportional editing with the O key
and then just go ahead
scroll the mouse wheel down a little bit so that's not so high and just adjust this like so
So just adjust this geometry a little bit
I also want to connect these edges right here
So I'm going to select this edge and this edge F key
fill that and this one and that one F key
fill that
and then I'm going to add a loop right here
And obviously we need to connect these two vertices
So this one
let me turn off proportional editing and this 1 M key merge at center
Then I'm just going to go ahead and adjust this like so and just go all around and make sure that it's properly shrink wrapping
So here for the armpit
for example
you can see it has a little bit of an issue
Once again
we could grab this geometry right here and just kind of grab it if we need
like so
Againwith proportional editing and adjusting it
make sure you have X mirror enabled so that it adjusts both sides
Now it doesn't have to be perfect as we are going to go ahead and adjust this in a second
You can see I cut too much out of the back as well
so let me select these edges F key to fill these right here
and CRL RA loop cut right there
And just make sure that these are connected together
All right
very cool
So now we have this
the rough outline of the shirt
Now in the armpit area
it's a little bit rough
but don't worry
againis just to block out the shirt
So now that we got this
let's go ahead and apply this shrink wrap
So click on the drop down
click apply
and then go into edit mode
And right here
we're going to select everything in vertex mode
right click and smooth vertices
Let's go ahead and do that twice like so
Then I'm going to hit Alt S
kind of fatten this a little bit like so
And then I could right click smooth vertices again just to smooth that area out a little bit more
All very cool right here
Make sure that these are connected from before
There we go
all right
so now we have our shirt just to make sure that it's not going through the character
select everything
alt S and go ahead and fatten it right here
It's a little short
so I'm just going to hit Gz
bring it down
very cool
So now with this
let's go to the cloth settings right here
clothand let's make the mannequin a collision
If we play this right now
you can see it kind of fattens up and inflates like that
and that's because down here on the collision
we have the distance
which is too high
So let's put the distance all the way down
And on the mannequin or the collision
let's put the thickness outer down all the way and the inner down all the way as well
We could increase these a little bit after if we want
So now if I play it
you can see that we get this right here
Pretty freaking cool
He's got a baggy shirt
very cool
Of course
we could always adjust the shirt
For example
right here
I could alt left click this loop Ctrl plus
increase the selection and hit Alt S and kind of shrink this down a little bit so that it's not so big
so kind of like that right there
And then if I play this
you can see that it's a little bit thinner or not so thick
All right
then let's go ahead and go to the self collision
let's enable self collision
and let's also put the quality for the collision
Let's put this to like 20 and the overall quality
let's also put this to 20
So now when we play this
you can see that we're going to get this right here
Now you can see that there's some issues right now
It's kind of like scrunching up like so
And once again
this has to do with the self collision distance right here
It is way too high
So let's also put this all the way down to 0 or not 0
but the lowest
which is 0．001
And now you can see that that's fine
It's going to collide with itself
So we're going to have to increase this a little bit
but it's just easier to just bring these values to 0 and then adjust them
So right here
let's see how this looks
So right here
you can see he's moving
And we have the T shirt animated
Pretty freaking cool
Now right here
you can see it's kind of colliding with itself a little bit
Alsowe don't have enough geometry
so I'm going to put the self collision distance to ．007 or so
Also
I want more geometry
so in the modifiers I'm going to hit control one
add a subsurface level of one
but I'm going to make sure to put it before the cloth so that it takes this additional geometry
Also on the shirt sleeves
you can see right here that are kind of curved
So I could alt left click this loop
turn off proportional editing and hit S X 0 to straighten it out like so
All right
very cool
You can see right here
it's kind of going through the mesh
So you can always adjust this
turn on proportional editing and just kind of adjust it as you want
For example
right here
it's kind of pinching
so I could go and you can still adjust things even after all of this
So totally up to you
For example
here I could hit s
ykind of scale these on the y a little bit
etc
All right
so now you can see that we have this right here
Now you can see that it is acting up yet again
So right here
if I turn off the subsurface modifier
you can see that it works okay
as you can see right there
But if I turn this on
there is an issue right here
as you c​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌an see
So it seems that the quality is not high enough
So on the quality steps I'm going to put this to 35 right here
and let's see what that get us
So now you can see it's still having issues and I believe that the self collision distance is too high once again
So once again
to kind of figure out what the issues are
if we just put this to 0 and it fixes the issue
we know
as you can see
it fixes it
So we know that the issue is in this distance
So let's go ahead
I guess 0．007 was too much
I'm going to put it to 0．002
And now we get this right here
He's got a really baggy shirt
but this will really drive home the advantages of using cloth simulation for clothing because obviously if he has a tight shirt
we're not going to see anything for the cloth simulation
So a baggy shirt is good
I'm going to right click
shade it smooth right there
And let's see what this gives us
We're going to remove this whole spacing that we have right here
obviously
All right
so here
let's go ahead and change the keyframes a little bit because we don't need him standing for so long
So I'm going to go ahead and bring this down to like frame 5
and then I'm going to select all of these
deselect these with B middle mouse
click and deselect
And I'm going to bring these in closer
That way the animation happens faster
So right here
you can see that we're going to get the animation
check this out
pretty cool
Now make sure that from the TPO to the animation
it's not a sudden jump
Otherwiseonce again
the clock could just shoot out and act really strangely because obviously it's just moving from one pose to another within one frame
But right here
you can see that we have this right here
How awesome is that
Now I'm going to go ahead and cache everything
but before we do that
let's also do some pants because that will be cool to take a look at as well
So right here
let's save this first
Now for the pants
we have to go about it a slightly different way because here with the shirt
we have the shoulders to hold up the shirt on the pants
There's nothing to hold up the pants if we were to do it the same way and just pin the vertices
the pants would just stay in place
So let me quickly go ahead and do it the same way as the shirt
and I'll show you the issues that arise
Againyou don't have to do this as we are not going to do it this way
but let me go ahead and time lapse this and show you the issues
So here you can see I have the pants to copy the exact same settings as the shirt
I could shift select the shirt
And again
this is a modifier
so I could click on the little drop down for the cloth and select copy to selected
So now these have the same settings
Let me go ahead and disable the subsurface modifier on the shirt as well
just so it plays faster for now
So you can see the issue with doing the pants this way is that here
if I play it
the pants are just going to fall because once again
there is nothing holding them
So they are just going to fall off the character
which is not good
Then right here
if we try to pin this group or these vertices right here
So here I could create a new group and assign
And I could go ahead and pin these under the shape
pin these
So now if I pin these
the issue with this is that when the character moves to a different place
you can see that here
these are going to be pinned and they are going to stay there
So the pants are basically going to be stuck here the whole time
So in order for this to work
we want to go ahead and have these pants be also influenced by the armature or the weight paints of the armature
so that when the armature moves
the pants move kind of like how we had the cape set up on the other character
where when the other character moved
it was still weight painted to the armature
whereas this right here is not
Now we could shift select the armature right here and hit CRL P and assign it with automatic weights and this could work a little bit
but there's an easier way to do this
So right here
let me just delete these pants and let's go ahead and create the pants for the character
So here on the character
all we're ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌going to do is go into edit mode Z
go into wireframe
and here go ahead and box
select the vertices for the pants
So all of this right here
and then right here
Let me zoom in a little bit
The middle mouse click
deselect these right here
So right there
and then over here
going to be middle mouse click
deselect these right here and let me select them a little bit higher
I actually want all of these right here
so this big group of vertices right there
I want that for the pants
All right
very cool
So now we have these vertices selected
we're just going to go ahead and let me make sure that they're selected good here
All right
so we have all of this selected
let's hit shift D to duplicate it
right click P separate selection
so now this is its own object
let's go into edit mode
a key
select everything alt S and go ahead and fatten it up a little bit to increase the size
So now we have these pants
howeverthey still look like the body as you can see right there
we have the butt and the knees and everything because obviously it's the same mesh
so here we want to go ahead and smooth this out in edit mode
right click smooth vertices
and I'm going to go ahead and do it a couple times
In fact
right here
we could change the repeats to repeat that a bunch of times like 11 times
then we can hit alt S again
and just fatten this up once again
So now you can see that it looks more like pants
of course
you could adjust this manually
So for example
right here
I could turn on the X mirror with proportional editing
I could go ahead and adjust this
You can see it's not mirroring to the other side because it's not exactly symmetrical
So I could just do each side 1 at a time
Againthis is clothing
so it doesn't have to be symmetrical
It could be asymmetrical
All right
right there and right here
So now we have these pants
So another way that we could kind of change the form or style of this is if we hit CR tab and go to sculpt mode over here on the draw brush
let's put the strength down to like 1．1 or so
and let's go to the smooth brush right here
And let's put the strength of this to like 1．2
Let's go back to the draw brush and we could enable X mirror right here
We could change the scale of our brush with the F key and the strength with shift F or change it up here
and now I could just left click and draw right here
And I could also hold down shift and smooth it out
So I could kind of draw and then hold down shift and smooth it
And I could do that a little bit everywhere depending on how I want to change this
So if I shift and smooth it too much where it goes through the mesh
I could just draw on it and that will fix it
So right here
I could just go ahead and kind of draw and smooth to kind of make this look a little bit more like pants and not so conform to the body
So like so very
very cool
Againwe could just draw right here and it will kind of inflate it
So kind of drawing a little bit everywhere
All right
super cool
So now we got the pants
Let's hit control tab
go back to object mode
But the cool thing about this is right here
let's go ahead and remove the collision from the pants
By the way
they are on there because we duplicated it from the body
but here you can see that these pants are going to follow along with the armature because we duplicated it from the mannequin
It has all the vertex groups for the armature
so it's following along
We just now need to make it a cloth physics
So let's select the pants shift
select the shirt
go the modifiers
click the little drop down on the cloth
and click on copy to selected right here
So now this will have the exact same cloth settings and everything
So now if I play this
you can see that we get this right here
veryvery cool
Howeveryou can see that the pants are falling just as much
if not more so unless you want that on your character
which I don't
we need to also pin the top of the vertices
So once again
we duplicated it
So that has these vertex groups that follow along the armature
but we still need to pin it
otherwise the pants fall like so
So right here
let's go into edit mode
I'm going to go into wireframe
I'm going to alt left
click this loop right here at the top
and I'm just going to hit CRL plus twice or three times to increase the selection
I'm going to click New to add a new group
I'm going to name this to pants and I'm going to click as sign
Then in the Physics tab
obviously under shape
let's select the pin group pants
So right here
pantsso now the pants will be held up here
but they will also move along with the armature because they have the vertex groups of the armature
So now if we play this
you can see that we have this right here
veryvery cool
So now it's playing like so
pretty cool
super sweet
Now you can see that because we duplicated these pants from the body
they have a lot more geometry than the shirt
So first of all
we don't really need a subsurface modifier
But let's also make sure that this is not intersecting with the geometry
So I'm going to hit Alt S in edit mode and just fatten these a little bit like so
Alsojust to make sure in edit mode
alt N recalculate outside
and now we got the pants like so
So now if I play this
check it out
Now you can see that the bottom is a little bit kind of jumps up
And that's because we have so many vertices condensed in this area right here
So I could actually delete some of these loops
I'm going to alt shift
left click these loops
and then CR plus increase my selection there
And I'm actually going to delete these vertices because it's just way too many vertices right there
So just like that
And I could even alt left click
alt shift
left click these loops and bring them down a little bit like so
And there we
so you can see that that looks a lot better
Now it's not jumping up
There was just way too many vertices converged at that spot
Alrightvery cool
You can see that that looks really good right there
Once again
we don't really need a subsurface modifier for before because we have enough geometry
but I am going to add a subsurface modifier after the cloth
This is going to make it so that we don't have additional geometry for the cloth physics
but it will smooth this out
So you can see here
if I add a modifier subdivision surface after the cloth
you can see we get it a lot smoother
You can see the difference before and after
Howeverthis is not going to add more geometry for the cloth itself because it is placed after
I'm going to do the same thing for the shirt
You can see on the shirt
if I re-enable this first subdivision surface
you can see that right here we have a certain amount of wrinkles
So let me play it 2 seconds
You can also see the shirt and the pants are intersecting
We're gon na fix that in a second
but you can see right here we have a certain amount of wrinkles
So here
if I were to increase this levels viewport to two right here and play this
you'll see that I have way too much geometry for the cloth
and it's going to have a lot of wrinkles and just look bad
As you can see right there
it just looks like an old raisin or something
It's way too many wrinkles
So I actually want it to be a level of one for the render as well
Make sure to put the render to one
And then here you can see if I play it
I could add a subsurface
another subsurface after the cloth
and this will basically just smooth out what I already have
So here
if I add another subsurface after
you could see the difference before and after
Let's also put the render to one on this one
So this is not adding geometry because it is after the cloth
Let's also make sure that here the subdivision is render level of one as well
All right
let's make sure to save this
All right
so now we need to make it so that the pants and the shirt collide with each other
We could join these meshes together
and then that way the self collision will make both of these collide with each other
But that can also get a little bit messy
So instead I'm going to select the pants and on the pants I'm also going to add a collision right here to the pants
So the pants are also going to have a collision with these settings right here
Let's also go to the modifiers
make sure that the collision of the pants is before the subdivision surface modifier and after the cloth
So now the shirt will collide with the pants since the pants are a collision as well
as you can see right here
veryvery cool
Now you can see his shirt
It's kind of lifting up
He's got like a belly button shirt for some reason
So in edit mode
we could select Alt
leftclick this loop S key
scale it up a little bit like so
and Gz bring it over the pants like so
so that we already hav​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e the shirt over the pants
All right
veryvery cool
So now if I play this
let me let it buffer or cash a little bit
And so now we have this right here
How awesome is that
Check it out
veryvery cool
Of course
you can feel free to on the cloth
change the stiffness settings
change the bending settings etc as you want
I'm just going to leave it like this
kind of silky
but we could change the different tension and compression and bending if we want it to be more cotton like
Because right now these are very kind of like velvety fabrics as you can see right there
But I'm going to go ahead and leave it like that for now
Let's go ahead and save
Now
one last thing is you may want to add thickness to your clothes
So you can see that right here
they are completely paper thin
Now if we were to go into edit mode and extrude this out and add thickness to it
then all of those geometries or all those vertices will be colliding with the other vertices
So it could result in a big mess and very complicated
So an easier way to do it and a quick
nondestructive way to do it is if we go the modifiers right here and on the modifiers
because once again
you can see that right here
it's paper thin
As you can see
we could go ahead and add a solidify modifier right here
and this will basically add thickness
but it will just take however the cloth looks and then add thickness to however it looks
So you can see we've placed it after the cloth and after the subdivision surface
So right here
if we change the thickness
we could change how thick the clothes are
but this is a non destructive way because here it's going to take how it already looks and add thickness to it
This is not going to contribute to the cloth physics
It's going to be solidifying it after the cloth physics
And so now we get thickness on the close
Pretty cool
Let me go ahead and bring this down a little bit to something like that
Now again
this will obviously take a little bit more computation and rendering time
you may or may not need or want it
but here I'm going to go ahead and add a solidify on both the pants and the shirt and just solidify it a little bit like so
because it does add a bit to it
You can see the pants
not so much
but definitely the shirt
Pantswe don't really see a difference since it's only over here
All right
so now we got that
very cool
All right
now I just want quickly add some materials to these
So let's go ahead and save
Of course
feel free to tweak the settings
You can see that on the collision itself
the mannequin
we've set all these thickness
outer and inner all the way down
So if your mesh is intersecting and going into the mesh
So if your clothes are going into the mesh and intersecting
you could increase the slightly and or increase or change the collision distance and the self collision distance
the quality
etc
So feel free to adjust it as you may need
Like I said
on the clothes
if you don't want them so fluid
you could increase the bending and the tension
stiffness and damping
But right here I'm going to save and let's unwrap this
So in edit mode I'm just going to hit you smart UV project and unwrap
do a quick unwrap
Same with this right here
I'm going to select the pants
a key
select everything you smart UV project
unwrap on the shirt
I'm going to go to the shader editor
Againfeel free to add whatever kind of materials you want
but here I'm going to click on New
Let me go to Material preview
and you can see his pants is the same color as his body
So right here on the shirt
first I'm going to go ahead and get a color ramp
So I'm going to get a color ramp right here
I'm going to hit Ctrl T mapping texture coordinate
I'm going to remove the image and here I'm going to get a gradient texture
I'm going to plug the vector into here and the factor into the factor of the color ramp
Then right here
I want to go ahead
you can see we have this right here
but it's not giving me the kind of look that I want because of how we unwrapped it
So I'm actually going to hit one
go into front view tab to go into edit mode
With everything selected I'm just going to go ahead and hit you and project from view right here and this will project it straight on like so
So now I can go ahead and bring this black slider up and you're going to see we have this line like that
Now I actually want it to be vertical
So right here I'm going t​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o go ahead and change the rotation
I'm going to change the rotation on the Z right here to negative 90
so negative 90 right here
then I could bring this down like so
I'm going to change this from linear to constant
I'm just going to make the shirt very basic
but I do want it to have a little bit of color to it
that way it looks a little bit different and we could actually see it moving
So here
put this to whatever colors you want
I'm going to make this maybe blue right here will be white
And now I'm going to control left click
add a new stop
and I'm going to make this red right here
And maybe I'll put the red before the white
something like that
He's got a French shirt on
brilliant
All right
so that's going to be the shirt
againvery basic
I'm then going to select the pants
All right
now for the pants
we want to go ahead and make this a single user first
So click on the little two
make it a single user
select these nodes right here and X to delete them because those are the colors for the mannequin
Then I think I'm just going to give this a solid color
So on the base color I'm going to give it kind of a khaki kind of color like so
So something like that right there
Let me go ahead and find another color that I like better
Yeahmaybe some kind of black blackish color right there
That way it contrasts a little bit more with the mannequin itself
All right
very cool
Once again
feel free to texture this however you want
I'm going to go ahead and save
And now let's go ahead and bake this
So I'm going to go to solid view
Let me go to the timeline here and let me see
he holds that pose for a little bit
which is fine because we need the close to kind of settle
And then right here you can see that this animation is quite long
But I'm just going to go ahead and bake the first 250 frames because this is going to take quite a while to bake as well
So right here
selecting the cloth I'm going to go to the cache right here
I'm going to have the start frame 1 and frame 250
and I'm going to click on Bake all dynamics so that it bakes the shirt and the pants
So go ahead and click that
I'll be back once this is done
This may take up to one hour
I'll let you know how long it takes once it's done
Alright
so I went ahead and baked the animation
now I did a couple changes
I put the end frame to 100 because it was just taking a little bit too long
Also on the pants
I put the quality steps to 60 and the collision steps right here
or the quality to 30 because when I was doing it before
the pants would just fly off because they didn't have enough quality for the simulation
Alsowhen I clicked on Bake All Dynamics
for some reason it wasn't baking both the pants and the shirt
So I just did both of these individually by selecting them and clicking on bake on each of these individually like so
So now I've rendered it out
I just created a circle right here for the floor and very simple lighting As you can see right here
it is just a sun lamp
I've already rendered it out
So here I'm going to go to the video sequencer and I'm going to go ahead and load in that image sequence
so right here
and I'm going to render this out as a movie
So go ahead and do the same thing
make any tweaks or changes that you want
But let me go ahead and render this and let's see how it looks like
All right
so here it is
Let's see how this looks
Veryvery cool
So now you can see that we have the cloth simulation with the pants and the shirt
As you can see right there
it looks awesome and it's flowing very nicely
Once again
depending on the kind of cloth or material that you're making
you may want to change some of the settings
change the bending
the stiffness
etc
Obviously make the animation longer
Right here I made it pretty short just because it was taking a little bit of time
but you can see that it looks really
really sweet
So with that
go ahead
make this scene your own
expand on it
make the clothes however you want
make the animation however you want
make it with whatever character you want
and again
mess around with the settings and get the look and feel that you want
But there we go
that is cloth simulation for clothing and blender
I'll see you in the next one
Ciao for now Vo


------------------------

# 14_Ball Inflation Animation
All in this last practical example for the cloth physics
we're going to go ahead and create a ball inflation animation
Ball inflation animation
brilliant
All right
let's hit Gz
bring the cube up
We're actually going to use the cube
Let's go ahead and add in a floor first
so add a plane and edit mode
scale it up
And on the plane
let's make it a collision
Then let's select the cube
And here
the reason we're using a cube is because if we use a sphere as the ball
so UV sphere right here and here
if I go ahead and add a cloth to it
you can see that when I play it right here
the top of the sphere
because we have triangles here
it's not going to give us a good look
As you can see right here
it gives us this kind of pointed look right here with the topology
So here with this cube
we're just going to hit C 3 at a subsurface level of 3
and we're going to apply the subdivision surface modifier
So go ahead
click the little drop down and apply
Then let's add a cloth physics to it
And now you can see that we have a sphere
but it's made all out of polygons or four sided faces
very cool
Now you can see that it's not compressing enough
So in edit mode
let's right click and subdivide it
and there we go
All right
so we got this right here
Let's go ahead and go to the cloth settings
And over here
let's turn on the collisions and self collisions
and then we get this right here
Let's also put the collision quality to 22 or so
and then let's play this and we're actually going to apply this
so play it like so
and then we're going to go to the modifier in the drop down
we're going to click apply
Now apply a shape key
we're just going to apply it
So now you can see that this is the actual geometry and mesh of this
as you can see right there
let's then add another cloth physics to it
and if I play this
you can see we get this right here
We're then going to go down here
Let's turn on self collision again
and under the pressure
let's enable pressure
So here with the pressure
if I play this
you can see that we got that
let's go ahead and enable custom volume and let's put the target volume to like 22 and let's play this
so you can see at a target volume of 22
it's not fully inflated
it still has creeses
So let's increase this to 55
We just want to see what number we need for it to be fully round
You can see that that doesn't work either
so I'm going to put the target volume to 100 maybe right there
let's also put the pressure to ．2 and see what that gives us
So that still doesn't work
Let's do a target volume of 150
So 150
you can see we still have a little bit of creativity
so I'm going to put 200 as the target volume and you can see that we still need a little bit more
So I'm going to put 300
So you can see here 300
it's still a little
not smooth
so I'm going to put it 400
So we're just trying to see what value we need to be at for it to be smooth
Againlet me put the pressure to 0 to see if it's still smooth and we're good
So we know that we need to get to a target volume of 400 right here
So right here I'm going to put the pressure to 0 and the target volume
you can see 400 gives us the look we want
So here
let's go to frame 1 and let's put the target volume to 0 and let's hit the I key
insert a keyframe
Let's go forward 10 frames
So I'm going to go forward 10 frames
and I'm also going to insert a keyframe at a value of 0
Then I'm going to go forward 5 to frames
so the frame 15
and I'm going to put the target volume to let's say two
and I'm going to insert a keyframe
So now if I play this
you can see we get that right there
Now that's inflating a little bit too fast
So I'm going to put the target volume maybe to one
reinsert a keyframe
So there we go
then I'm going to move ahead
maybe up to frame 25% or so
Againit doesn't have to be the same exact frames as me
and with a target volume still at 1 I'm going to insert a keyframe
So right here it has a target volume of 0
then it goes up to one
and then it holds this target volume of one
Then I'm going to go forward 5 frames
I'm going to put the target volume to 1．5
insert a keyframe
and so now when I play this
you can see it inflates a little bit more
Once again I'm going to hold this for a couple frames
so maybe till there
and I'm going to hit the I key
insert a keyframe
then I'm going to go forward five more frames
Let me put this to an even number
just makes it easier
so I'm going to go to frame 45
I'm going to put the target volume maybe to 2 and insert a keyframe again
So now we got this
and then it increases even more like so
We could also select this keyframe
shiftyduplicate it to make it hold that position until here
and then I'm going to go forward 5 frames again
this time I'm going to put the target volume to 4
So a little bit of a bigger jump and insert a keyframe
So you can see we get that right there
And aga​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌in
just repeating the same process
shiftyduplicate the keyframe so that we hold that certain amount of pressure for a little bit
Againwe're going to have a pump pumping this up
this is why I want it to hold it for a little bit right here
Going forward
I'm going to put the target volume to
let's say seven or so
insert a keyframe
and of course
you could play it to see how that looks and then duplicating it so that it holds
and then go to frame 90
Maybe I'll put this one to 15 again
jumping up a little bit more like that
And again
just repeating the same process like so
So right here
then I think I'm going to go to maybe 30
So now I'm kind of just doubling it right here like that
Make this one hold for a little bit and then to frame 120
maybe I'll put this one to 60
Now 60
duplicate it
go to frame 135
I'll put it to 120
insert a keyframe
duplicate it right here
go to frame 150
and here I'll just put it to 300
insert a keyframe
So there we go
and let me put it to 400
So right here
let me select this
duplicate it there
and then 400
So now we have this right here
So the ball is being inflated by a pump
as you can see right there
So now we just need the pump to actually be inflating it
So to create that
very simple
Again
you can make this as detailed or as complex as you want
I'm also going to right click shade
smooth the ball
Let's also make sure to save this
So right here I'm just going to hit shift A
let's add a cylinder
move it over
and in edit mode
let's hit S shift Z
scale it
except on the Z like so
Then right here at the top I'm just going to select this top face I key and set it
and then I key extrude it down
Then with this face still selected I'm going to go ahead and hit shift D to duplicate it
I'm then going to scale it down a little bit and let's hit P separate selection
So now this interface is a separate object right here
Then with this in edit mode
we're just going to hit the E key and extrude this back out like so
So we basically just have this separate cylinder within the other one
like so
In edit mode control our loop cut up here
we're going to in front view one on the numpad
I'm going to select these faces right here
CR 1 to go to the opposite side
I'm going to select the same faces on the other side
so we have these right here selected and let me make sure I have the same amount selected
So right here I'm just missing that one
then we're going to hit E to extrude s
yscale it on the Y
and then right here
let's change our pivot point to individual origins right here
And then just hit S Y 0 to flatten those out like so
All right
very cool
I'm going to change this back to median point then right here for the pump base I'm just going to let's bring both of these up out of the floor
I'm going to go into edit mode
add a loop cut here CR R I'm then going to go ahead and alt left
click this loop E key to extrude and then S shift Z
kind of scale it up like so
And then once again here in front view I'm going to grab these faces right here
So these ones right here and here on this side
go ahead and select the same amount vertices or faces here as well
All right
very cool
We're going to do the same thing that we did at the top E to extrude s
yscale it on the y
and we could obviously change this back to individual origins again
s y 0 once again
And here I'm just going to hit SZ
kind of scale these down
Gzbring this down like so
All right
let me go ahead and bring this so that it's actually touching the floor
And then for the kind of hose that's going to connect to the ball I'm just going to hit shift A
let's add a curve
busier curve
bring it over
And on this curve
let's go to the curve properties under geometry
increase the depth right here to give it some volume and then go ahead
grab this curve and move it over so that obviously it's not in the whole ball
And something like that
of course
feel free to go ahead and model a nozzle for the curve right here
Totally up to you
So now we need to animate this pump right here so that it matches with the ball being pumped
So right here
you can see that here
this is where it gets inflated
So we just need to select this
hit Gz in object mode
bring it up
and then hit the I key
insert a keyframe
then select the ball
go to the frame where it's being inflated right here
And with this
hit Gz and bring it down and hit the I key
Then once again with the ball
we could go to this frame
This is where it's being held
So with this as well
we're going to hold it to here
then we're going to go to this frame again
This is where it gets inflated
So we actually
on this frame
want to bring this back up and hit the I key
insert a keyframe
So right here
this is going to go back up
and then right here on this frame
it's going to go down
I key insert a keyframe
then here on this frame it's going to go back up a​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌nd you get the point
We could also enable automatic keyframes in right there so that we don't have to hit the I key every time
And right here
bring this down
I messed up my bowl
so you can see right here
it's being pumped
how awesome is that it's pretty cool
So right here
G Z bring this up
select the ball
go to the next frame
Gzbring this down
AgainI have automatic keyframe insertion
so I don't have to hit the I key to insert a keyframe
So here I'm just going to go ahead and do all of these frames
go ahead and do the same thing as well
All right
very cool
So now we got this right here
How awesome is that
And the ball is being inflated
pretty sweet
Let's go ahead and save this incrementally
All right
and then here to kind of animate the tube right here I'm just going to go into edit mode of the curve
select this control point
and I'm going to hit Ctr H and select hook to new object
This will add an empty and it will basically parent that control point to this empty
So now we can go ahead and animate this as it's being pumped up
First of all I'm going to kind of hide it behind here
Once again
if you want to spend more time on this
you can
but here I'm just going to go ahead and when the ball kind of starts to bounce up like so I'm going to insert keyframes and then kind of adjust this and move it with the ball like so
So just like that
againkind of just grabbing this
I have automatic keyframe insertion once again
So right here
I could grab it
insert a keyframe there
and then right here
bring it there
and then bring it back down
etc
So kind of adjusting it with the ball like so
So there we go
now this is animated with the ball and it's kind of going to stay with the ball
as you can see right there
Very
very cool
Obviously you could spend a little bit more time on it
This was just a quick and dirty way to do it
Obviously here you can see it's kind of
I mean
it actually looks good right here
This is a little bit thick
so I'm going to put the depth down a little bit like so
All right
so now with that
we just need to go ahead
add material to the ball
If you wanted to give it a certain kind of material
you would have had to do it before
For example
if you wanted to add some stripes or beach ball material
in fact
you could still kind of do it if you alt left click these loops
But right here
let me go to Material Preview
And right here
I have the white material
I'm going to make this a red color
like so
I'm also going to put the roughness down
make it kind of like a beach ball like that
And I don't know if I just want it a single material like that
And actually
I kind of like that right there
kind of like a red dodge ball
I'm then going to go ahead and add some very simple materials to the pump
just kind of make it a grayish black color
Same thing with the handle and the hose
I'm just going to give all of this the same material CRL link materials right there
and maybe the inside part I'm going to add a new material
Go into edit mode
alt left
click this loop
assign it to this new material
and I'm going to make this metallic
I'm also going to select the pump and everything right here
right click shade
auto smooth
All right
brilliantcheck this out
Now we got this right here
pretty freaking cool
All right
go to set up the camera angle
kind of want the camera angle this way
scale up the floor
and I'm going to position the camera here like so
And once again I'm going to scale up the floor
And right here you can see
I can't see the handle
so let me zoom this out a little bit
adjust it in
rendered viewport shading mode
I'm just going to change the light to a sun lamp value of 4 and tumble rotate it until I get a kind of angle that I like
So right there on the ball itself
it is way too kind of jagged
So in the modifiers
let's hit control to add a subsurface level of two right there
That's going to make it look a lot better
In fact
let me see how it looks like with one
I think
yeah
I'm going to put it to two
So render to most important thing
All right
very cool
So now we got that right there
You can see the pump is still going out of the camera
so let me adjust that
It's because I have automatic keyframe insertion enabled
I've been adding keyframes on the camera
dang it
All right
so right here
so right here
let me zoom it out a little bit
there we go
I've added keyframes to everything
brilliant
All right
there we go
Once again
feel free to adjust this as you want
Now for this I'm actually going to go ahead and just render this out directly as a movie
I know I've said that you shouldn't do that
but since this is such a simple scene
and again I'm going to put the end frame to 200
Since this is such a simple scene I'm just going to go to the output properties and I'm going to render this out directly as a movie encoding set to Mpeg 4
Now again
I don't recommend this
especially if it takes longer to render and if it crashes
this is not good
But I know that this is going to render very fast
So I'm just going to do it like this for this one
All right
let me name this renders and let me go ahead and save this once again and save and render render animation
You can see that right here I'm rendering an EV
You can see it's already on frame 10
and that's the only reason I'm rendering it directly as a movie
because this is going to take about
you know
So totally fine
I don't need to go through the whole process of converting the images to a movie etc
right here
Let me stop it
There is
for some reason right here
the inside of here
I actually I'm just going to put it to white and not metallic and maybe not completely white since the background is white
maybe I'll put this part to black like that
Or actually
maybe I'll put this to black and then this to a grayish color
Againfeel free to adjust as you want
Alrightgo ahead and render yours out as well
And I'll be back once this is done
Alright
so let's go ahead and take a look at this video
And check that out
that is awesome
So with that
go ahead and tweak this as you want and share your results on the Q&A here on udesh or blender mania 3 dot com
With that
that is all the practical examples for the cloth simulation and physics
Go ahead and create your own examples and cloth physics and animations
You can do a bouncy house castle
You could do some drapes and curtains
you could do some flags
you could do clothing
etc
Share whatever you do on your own time
againon the site or here on udesh
So with that I'll see you in the next one
Ciao for now avo







