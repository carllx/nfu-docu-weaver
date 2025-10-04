# 8_Boid Particles
All right
now we're going to go ahead and take a look at the Boyd's particle settings
So on the cube
let's go the particles add a new particle settings
And here under the physics
let's change this from Newtonian to Boyds
Now the Boyds have a lot of options
as you can see right here
So we're going to go over this possibly in two different videos
but these are really
really coo​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌l
This physics of Boyds allows for us to simulate a flocking like behavior for the particles
where the particles which are going to be referred to as voids
move according to simple rules that we set here
And this could replicate behaviors such as a group of fish or a group of birds
or other swarming creatures or swarming things
So here we're able to create this with these Boyd particles and with these settings
control how they move
how they interact with each other
and how they respond to the environment
Nowthese again
are really
really cool
Again
we may take two videos or so to go over these because there's quite a bit of settings
So right here
first we have the mass and multiply mass with size
same settings as before
So I'm not going to go over them again
But again
this is the mass or how heavy the particles are
and you can see it's in kilograms
So again
the heavier or lighter it is
it will interact differently with things such as wind or gravity or force fields
Then we have multiply with mass
Once again
we took a look at this
If we enable this
depending on the size of the particles
it will multiply the size of that particle with the mass
So bigger particles
for example
if you have a particle that's the size of 3
it will multiply three times 1
So we will have a mass of three
But if you have a particle that's the size of 1
it will multiply one times one
which will have a mass of one
So again
multiply mass with size
it will just take into account the size
and bigger objects will have a larger mass
All right
so here
before we take a look at all these sections
you can see that we have movement
battlemis relations
and Boyd brain
What is all this
It's very cool
Before we do that
let's go to the lifetime right here and let's put the lifetime to 1000 right there
I'm also going to put the number of particles
let's put this to like 200
All right
very cool
So here to actually see how these work
let's go ahead and set up our kind of battlefield
So here with this cube
let's hit gnx
move it to the side over here
and then I'm going to hit shift D x
duplicate this one
and move it over here on this one
Let's make this one a single user by clicking L 2
And then let's make these particles instead of them
them being spheres
Let's give a different object to each of these particles
So I'm going to hit shift A
and here
these will be the cube
So I'm going to add a cube
move it over here
select the particle system
and under render
let's change the render as halo to object
and then select the instance object as this cube right here
So now we have a bunch of cubes
Let's also increase the scale a little bit so that they're a little bit bigger
like so
I'm going to go ahead and put to ．4 right there
or maybe ．3
Then for these ones
you can put whatever object you want
These ones for me are going to be the Suzanne S or the monkeys
So here
same thing
change this to object and select Suzanne and put the scale to ．3 as well
All right
very cool
So now we have both of these right here
as you can see
now you can see that when we play this right now
we get this particular effect that's happening
Kind of cool
But let's take a look at these settings
By the way
let's go ahead and make sure to save this
That way we don't have to reset that up
All right
so let's go over here
I'm going to go to the cube 1 and right here
let's actually toggle down all of these tabs right here
So toggle down all of them all the way to the Boyd brain
And we could toggle up the render and also toggle up the well
We'll leave the emission right here on the Boyd brain
Let's go ahead and remove both of these right here
So I'm going to remove both of these on the Boyd brain and same thing on this one
Let's remove both of them
All right
so right here
you can see again
we have a lot of options
So our first checkbox right here
we're going to take a look at the flight voids in this one
and then the next one
we'll take a look more at the land
Againthey're very similar
so right here we have a La flight
which is enabled by default
And this is going to allow the Boyds to fly through the 3D space so they can move freely throughout the 3D space
You can use this
for example
if you have birds or insects or anything that's airborne
flying spaceships etc
Right now
if I play this because I removed the two Boyd brain operations
you can see that it no longer really does anything
So let's quickly set up a quick operation
That way it actually does something
So right here you can see that we have the Boyd brain
And again
with this
we're going to take a look at this a little bit more as we go
So right here
the Boyd brain section is going to go ahead and set up rules that are going to govern the behavior of the Boyds or the particles
Nowthese rules right here that we can set up are going to determine how the voids react to the environment and to each other
So you can see that right here
we have a little plus icon and we could set up several different rules for it
as you can see right here
So we have goal
avoidetc
as you can see
Let's go ahead and select the flight 1 right here for now
And we're going to take a look at these more in depth
but for now
let's just go ahead and get the fight Boyd brain
So this one right here is going to allow for us to basically have these voids fight with other Boyds
Againwe're going to take a look at this more later
but for now
I just want to set it up
You can see right now it doesn't do anything
and that's because we need to set up a relationship right here
Againwe're going to take a look at this more in depth soon
but for now
let's just add a new relation
And here we need to set a target
So the target is going to be this other cube right here
And you can see that here we have a mode
Right now it's set to neutral
but we're going to change it to enemy
So now these voids are going to act as if this cube and these particles are the enemy
and they are going to fight it
So now if I play this
you can see that these fly to these other voids to attack them
Pretty cool
All right
so now that we have something happening
let's scroll back up again
We'll go back to those options soon
So right here
allow flight
allows for them to fly
You can see here
if I uncheck this
it grays this out
And right here
they just fall
which is very sad
So we want to enable allow flight
Then right here we have the different flight settings
So right here we have the max air speed
Againthese names are pretty self explanatory
let me expand this a little more
So the max air speed right here is going to control the maximum speed that the Boyds can achieve when they're flying
And this is measured in meters per second
So again
we could adjust this to adjust how fast these fly
So right now you can see at 10
we have this right here
if I put this higher to
let's say
you can see that they fly a lot faster
And if I put those 2．1 or so
you can see that they're going to be very
very slow
So this is just the speed of how fast they fly
Let me set this back to 10
then we have minimum air speeded right here
This is going to control the minimum speed that the voids have to have while flying
Nowthis is really good if you have
for example
a creature that needs to keep a certain speed to stay flying or to stay in the air
so it will prevent them from slowing down too much
So right here you can see that if I play this
I have this right here where right here
they're kind of slowing down a little bit
But if I put the minimum air speeded and I put this up like so
you can see that right here
they are not slowing down as much as you can see right there
They are keeping a minimum air speed even over here
Whereas if I put this down
let me play it from this angle
you can see that once these reach here
a lot of them are slowing down quite a bit
Especially when they reach here
you can see they're stopping
So all of these are stopping
But if I put the minimum air speeded up
you will notice that they don't completely stop
They have to maintain this minimum air speeded
So you can see that they're going back around and not just stopping
Let's also increase our end frame right here to 1000
That way we could actually not 100
Now the minimum air speeded is relative to the maximum air speeded
So if I put this higher to 100
the minimum air speeded is going to be
againrelative to this value of 100
As you can see
we get this right here
As you can see right there
And then if I put this minimum airspeed down to zero
you can see that we get this effect right here
So you can see the difference with how they're clumped up right here
as opposed to if I have this at one
and how they clump up with the value of one
So you can see right here
there's a pretty drastic difference with them maintaining a minimum air speeded
As you can see right here
they just continue spinning around this like so
All right
very cool
I'm going to put this max air speeded back to 10 and the minimum air speeded back to 0
Then we have the max air acceleration
This is going to go ahead and control how quickly the voids can increase their speed when they're flying
Againthis is relative to the max air speeded
You can see right here with a max air speeded of 10 and the max error acceleration at 0．5
we have this right here
but if I increase this to one
you can see that we have this right here where they accelerate faster
And if I put this to zero
you can see that we have this right here where they are not accelerating very fast at all
Or if I increase this a little bit
you can see that as I increase this
they will accelerate faster
Pretty self explanatory
All right
let me put this back to ．5
Then we have max air angular velocity
This is going to determine how quickly the voids can change direction when they fly
So a lower value of this is going to create smoother
more gradual turns
and a higher value is going to create more sharp
quick turns
So if I zoom in here to the cube right here and at 0．5
I play this
you can see that these are kind of spawning this way and then turning towards the enemy
But if I bring this down to about 1．2
you can see that these are kind of going this way a little bit and then turning
If I bring this even lower to like a 0．08
you can see that they're going this way and then they're turning
as you can see right here
So some of them are going this way and then turning
and then some of them are just turning and they're going all the way around
So you can see here
if I increase it a little bit more
once again
they are turning and then going towards the enemy
So again
this is going control how quickly the voids change direction when flying to their target or wherever they're flying
You can see if I put it to a value of one right here
they just automatically turn
It's a really sharp turn and they go directly to it
As you can see right here
these are spawning this way and then just doing 180 degree turn and going that way
Whereas again
if I put it down like that
you can see that they're kind of going this way and then turning
All right I'm going to put this back to ．5
All right
and then right here we have the air personal space
This is going to determine how close the Boyds can get to each other while they fly
So we could change this value to have them more separated or further away from each other or closer to each other
So this could help with avoiding the voids from colliding with each other
Now you can see that right here with this
since these are flying and attacking these with a value of one right here and a value of 10
we can't really see a difference because they are focused on going in this direction
So they're all still going in that direction
So we can't really see a difference
So here
what I'm going to do is I'm just going to hit shift a I'm going to add a cube
and I'm going to add a new particle system
I'm going to make this 1 a Boyds and I'm going to leave the Boyd brain to separate and flock right there
So now if I zoom in here
you can see that if I play this
I have these right here where they are very condensed or close to each other
let me put the lifetime up as well
Again
you don't have to do this as I'm just going to delete this
But you can see that here
these are very condensed
But if I go ahead and put the air personal space up to 10
for example
you can see that there is more space between the particles
whereas if I put this down
you can see that they are closer to each other and there's not as much space between them
And of course
if I put it to zero
you can see that they're all just kind of on top of each other
So again
this air personal space is going to go ahead and dictate the space or how close the Boyds can get to each other
All right
so that's the settings right here
In the next one
we'll take a look at the land in a different video
So right here you can see we have landing smoothness and all these options for those we need to enable allow land
We'll take a look at that a little bit later
but right here in the next one
we're going to take a look at Battle
which is going to be super awesome
We're going to have these two particle systems fighting each other
So with that
go ahead and save
I'll see you in the next one
Shop for now of Vo


------------------------

# 9_Boid Particles Battle
All right
in this one
we're going to go ahead and take a look at the battle section
It's time to duel
All right
that's dueling
but this is battling basically the same thing
Nowthis is really cool
Once again
we could have these particles fighting each other
so let's first set this up
Right now we have the cubes attacking the monkeys or the Suzanne's
but let's make the Suzanne's also attacking the cubes
So on Suzanne
on the Suzanne particles
we're going to set it up the same as we did here
but we are going to select this as the enemy
So first here on the Boyd brain
let's go ahead and select fight and in the relations
add a new relation
And the object is going to be this one right here
And we are going to change the mode from neutral to enemy
So now these two are going to meet in the middle and fight each other
as you can see right there
pretty cool
Now they are not really
there's nothing much happening
there's starting to disappear now
as you can see
But again
it seems kind of antic climatic
And that's because right here we have the battle section
So right here
let's go ahead and make this
Suzannethe winners
So on the Suzanne Cube or particles
you can see the first option we have here is health
This is going to represent the health of each void for this particle system and how much damage they could take before dying
So here we could increase or decrease their health depending on how long we want them to be able to sustain damage
So right now
the health is at one
You can see here
if I put the health to two
the Suzanne is are going to go towards the cubes and they're going to have more health
And now the cubes run away because they notice that the Suzanne S have more health
How awesome is that
So right here
they're running away because they notice the Suzanne is have more health
so they know they're not going to win the fight
But let's say we put the health at 5
which is even more
You can see that now when I play it
they run away right away
They don't even try to fight because they know they're going to lose since the Suzanne and have so much more health
It's like a bunch of Et's flying around now in order to change the cubes and have them fight
we could go to the cube particle system and right here we have aggression
Now the aggression
as the name implies
is going to control how aggressively these voids are going to pursue and attack other Boyds
So right now it's pretty low at 2
so they are running away since these ones have more health
If we increase this value
it's going to have a more aggressive behavior
so this could be useful for simulating predators or territorial creatures
So right here
if I go ahead and increase this to
let's say five
let's try and I play this
you can see that now they're more aggressive and they're still kind of fleeing after they're aggressive at the start
but then they retreat
So let's put the aggression to 10
and now with an aggression of 10
let's see if they stand and fight
Stand and fight
So you can see that here they are fighting
but the Suzanne is have more life
So you can see here that the cubes are starting to disappear slowly
and the Suzanne's look at these Suzanne's chasing that cube
so you can see that the Suzanne S are winning because again
they have more life
So that's the health and aggression
Now
let's say we want the Suzanne's to deal more damage
You can see here the cubes have a health of one
but the strength of the Suzanne says is 0．1
so they have to hit them 10 times to equates health of one
and for it to be killed or disappear
so here
the strength is going to control the damage that the Boyd can inflict on other Boyds during this battle simulation
So here we can control how much damage they do or how powerful they are if we put the Suzanne's to one now since the cubes have a health of one as soon as the Suzanne hits a cube
it's going to disappear and die
So you can see here
because we increase the strength
now they're running away yet again
because although their aggression is high now we gave Suzanne more health and more strength
So now they're like
forget this and they're running away
so let's put the aggression higher again
let's try 30
You can see at 30
they're still running away
so I'm just going to crank this up all the way to 100
And there we go
And now you can see that they are just disappearing
as you can see right there
and it's not even a fair fight
Look at these
Suzanne's going for that cube
and now they're running away even after that
How awesome is this
This is pretty cool
but you can see here that as soon as the Suzanne hits a cube
you can see that it disappears
For example
that one or this one right here
because again
they have such a high strength
And here you can see that they're running away
Now
if we want to make this a little bit more even
we could go ahead and give more particles to the cubes
So on the cubes
let's make it so that they have 500 particles
This reminds me of those battle simulators that you see on YouTube videos
We can do battle simulators for default cubes
and Suzanne's brilliant
And then right here I'm going to put just the strength to ．5
So now these cubes have 500 particles
health of one
strength of 0．5
and a lot of aggression
These ones only have 200 particles
but they have five health and a strength of one
Let's see who wins
I'm going to put my bet
I'm going to put my bet on the Suzanne's
why not
and let's see what happens
So you can see right here
they are fighting each other
I don't know
there's a lot of cubes
Ohbut the Suzanne is are going for it
I don't know
they're kind of all
they're kind of all dying
Okayyep
the Suzanne's no
the yep Suzanne's one
All right
the Suzanne's one
there's one more
get it
Super cool
So you can see how awesome this is
Jeez
they went really far over here
So how awesome is this
So we could create kind of like battle simulations with these Boyd particles
then we have accuracy right here
Now the accuracy is going to control how accurate a Boyd's attacks are
so if we put this higher
it will make the Boyds more likely to hit their target during an attack
If it's lower
it will make it less likely to attack their target
So you can see here
we can't put it above one
but if I put this to zero
for example
you can see that here
I think the Suzanne is are going to lose because they have no accuracy and the cubes are probably going to win
whichyep
yepthe cubes are just demolishing the Suzanne's because the Suzanne and have no accuracy
And again
how accurate their attacks are is basically 0
So they're just kind of standing there
but obviously you can see that one
which is what we had just before they are more accurate with their attack and they will just demolish the default cube
Look at all these incoming
that's pretty cool
Look at them
they're just going for it like sharks
All right
very cool
we already saw this one
so I'm going to stop it
All right
then lastly
we have range right here
the range is going to be the distance at which the voids can detect and attack other Boyds
So you can see with the range set to one right here
you can see that they just go and attack
But if I increase the range to say 11
you can see that they're going to first start attacking
but then when they're too close to the other boids
they're going to stop attacking because they are not far away enough
So right here
you can see that they start attacking
but then they stop because their range is below 11
because right now they're very close to the other voids
So they stop detecting it and they stop attacking other voids
As you can see right here
they're no longer doing anything if I put the range higher to 22
you can see that right here
they're not even detecting the other Boyds or going after them
as you can see right there
So again
this is the range right here
It's going to go ahead and determine the distance at which the voids can detect and attack other voids
So you can see what we get right here
very cool
So that is the battle options
Then right here we have misc or miscellaneous
So first one right here we have is banking
Now the banking is going to go ahead and control how much the Boyd's bank or tilt when they turn
so we could change this value and increase or decrease it if we increase it
they will tilt more dramatically during their turns
And this will simulate more realistic flight dynamics
So right here
you can see that right here
we can't really see anything
but let me change the health of the Suzanne's to one right here and the aggression to one as well
so that they run away like so
so you can see here on the cubes with a banking of one
we have this right here
You can see how they turn right there
as you can see
if I put this to two right here
you can see that they are going to now tilt when they turn a little bit differently
as you can see right there
and if I put this to 0 again
this is going to control
how much they tilt when turning
You can see right here at zero
they are not going to tilt when they turn
as you can see right there
So again
you can see the difference with that and with this
so I'm going to change the value as it's happening
you can see the difference with that and that right there
So that's the banking again
How much they're gon na tilt when turning that we have the pitch
The pitch is going to be controlling the up and down tilt while moving
So this again change how much the voids tilt forward or backwards as they change altitude
So right here
if I play this
once again
you can see right here
right here
when they're changing altitude
you can see what's happening there
And if I put the pitch to two again
this is how much they tilt forward or backwards when they change altitude
So you can see what's happening there
The difference with the tilting when they change altitude as opposed to the pitch at zero
you can see how they tilt when they change altitude right here
So you can see right here
they're not really tilting when they change altitude
as you can see
So let me go ahead and change this while it's playing
So you can see this right here
right there
And then if I change it to two
you can see the difference with how they tilt as they change altitude
All right
the last option we have here on the Mis is the height
Now the height is going to go ahead and control the desired flying height above the ground for the Bos
Now this only works if we have allow land right here
because you can see right now
if I play this and change this value
it does nothing
S​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o here
if I go ahead and hit shift A
add a plane
scale it up in edit mode
and I'm just going to make this a collision object
So now if I go over here and click on allow land right here
you can see that with the height
once again
it's going to control the desired height above the ground
So right here
if I put this to 0 and play it
you can see that the voids are halfway through the ground right there
But if I put the height to two
you can see that they're going to be above the ground and not going through the ground
So again
the height
you have to have allow land enabled
and this will control how high above the ground they have to be
If I put it to one
you can see that we have this right here
And again
at zero
they're halfway above the land and halfway through the land
So you can see here
as I adjust this dynamically
what's happening
Very cool
So that is all the battle and misc settings
Go ahead and save
I'll see you in the next one
Ciao for now
avoir
# 10_Boid Particles Relations
All right
next we have the relations part of the Boyds right here
Now the relations are going to go ahead and set up how the Boyd particles are going to interact with each other
So let's go ahead and take a look at this
So right here
first of allwe could add or remove relations
as you can see right there
And we could reorder them with these arrows right here
Now
the first option we have here is the target object
The tar​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌get object is going to be the object that contains the particle system that we want our voids to interact with
Nowthis target object has to have an active particle system for it to work
such as right here
The target object on this one right here
we've set it to this cube
And the target object for this one
as you can see
we set it to this cube
So here
this target object is going to be an object with a particle system that we choose where it's going to be the point of interaction for our Boyd system based on the mode that we choose right here
Then we have the system right here
I'm not going to go over this too much because we took a look at this when we took a look at the keyed particles
But right here
we could have multiple particle systems
and here we could decide which particle system it's going to interact with
So right now
we only have one particle system on here
But if we had multiple particle systems
we could choose which system or which particle system these voids are going to actually interact with
So for example
let me actually just do it quickly right here on this one
if I go ahead and add a new particle system
you can see this one is particle setting 0
So I'm going to go ahead and add a new particle system
And here I'm going to select particle settings 0
and I'm going to make it a single user
So now it's exactly the same as this one down here
I'm going to go ahead under render
I'm going to delete Suzanne
and I'm just going to put it back to Halo
So now these are just spheres
So right here
you can see that we have the Suzanne's and the spheres
So if I go back here
obviously here you can see that we have two particle systems
number one and 2
So you can see here on system 1
it's going to go ahead and attack the Suzanne's
as you can see right here
So it's going after the Suzanne object
as you can see there
So here it's going chasing these ones
etcchasing all the Suzanne's
But if I set it to system 2
it's not going to attack the Suzanne's and only these other ones
As you can see right here
it's not going after the Suzanne's
It's only attacking system number two
which is these particles
So that's the system right here
We're able to dictate which particle system it will interact with
All right
let me remove this second one right here over here
The last option we have is the mode
Now this mode dropdown is going to go ahead and it's going to determine how the voids are going to interact with the particle system on the target object
We could dictate whether they will view them as a friend
neutralor enemy
So right here
let's take a look at enemy first
since that's what we have with it set to enemy
Obviouslyas we've seen
as the name implies
the voids are going to consider these particles on the target system as an enemy or a threat
and it will fight them
This can be used to simulate aggressive behavior between the particle systems or a competition between the particle systems
as we've seen
Then
if we set it to friend right here with it set to friend
the particles are going to work together with the target particle system
and this could involve moving in a coordinated way or again
just not attacking each other and working together
So right here
if I play this
you can see that right here
they are not really doing anything because they're no longer going after these ones
Let's also make these ones a friend as well
So right here
let's change it from enemy to friend as well
And now you can see that they're just kind of chilling there
We also have this fights right here
So instead of fight
let's go over here
let's add a new 1 and let's select separate and let's do that on both of these
So here they will go ahead and separate as well as you can see right there
but you can see that they are no longer enemies
So if I bring these close together
they are now friends
So they're not attacking each other
As you can see right there
they're working together
Howeverif I switch this back to enemy right here
you can see that they are going to attack each other
as you can see they're running away again
All right
poor Suzanne's
So that is the friend again with the friend
they are going to be coordinated or aligned with the other particle systems with it set to neutral
They are neither going to align with each other nor fight with each other
So basically they will just ignore each other and just have independent behaviors for each system
So right here
if I set both of these to neutral
you can see that right here
they're just ignoring each other
going about their merry way
As you can see right there
that's a lot of cubes
So that is neutral right there
Againneutral
they won't align or fight
they just do their own thing
friendthey align with each other and enemy
obviously they fight each other
Now
right here
I can make these a friend right here for these
but on this 1
I can make this one an enemy
So these ones are going to think that these are friends
but these ones think that these are enemies
so the Suzanne's are going to go ahead and attack these ones right here if I put the aggression a little bit higher
like so
Poor cubes betrayed by the Suzanne is all right
but there's a lot of cubes
So there we go
that is the different modes right there and the relations
Let me go ahead and set both of these back to enemy
and there we go in the next one
we're going to take a look at the best part
Wellnot necessarily the best part
but the Boyd brain
which allows for us to do quite a bit
So I'll see you in the next one
Ciao for now over


------------------------

# 11_Boid Particles Brain
All right
in this one
we're going to take a look at the Boyd brain brains
So this one is pretty cool
The Boyd brain panel right here is going to control how the Boyd particles behave and interact with each other and the environment
So we have different rules here for the Boyd brain
and this is going to influence the Boyd's decisions And the order that we have these in is going to determine the execution of these rules and how it's going to prioritize these
So it is very important what order these are in
Just like modifiers
it will read the top one first and then the next one
and then the next 1 etc
So in this case right here
it will fight first and then separate
Let's go ahead and remove the separate on both of these
by the way
so that we just have fight
So again
the Boyd brain is going to allow for us to give rules to these voids
And again
these rules are processed or read from top to bottom
Once again
we could click the plus icon to add more Boyd rules
As you can see right there
we could remove them with the minus icon and rearrange them with these up and down arrows
All right
so right here
let's go to the fight first because there are quite a bit
as you can see
But since we've taken a look at fight
let's look at this first
Nowthe fight rule
as we've seen
as the name implies
the bods are going to move towards and attack other nearby boids
So right here
obviouslywhen we play this
you can see that these ones attack these ones right here
And again
we took a look at the battle settings earlier
So right here we have some other settings based on the fight
You can see first we have rule evaluation
Now we'll take a look at the rule evaluation in a second because in order to use this properly
we need other rules in here because the rule evaluation right here is going to go ahead and see how it evaluates these different rules
Right now we only have one rule
so this isn't going to do much
So we'll look at this in a second
Then we have rule fuzziness
Once again
we'll take a look at this when we take a look at the rule evaluation
but right here we have a checkbox in air and on land with this check right here in air
this is going to indicate that the current rule should apply to the Boyds when they are flying
which they are
So right here
it's going to apply the rule of fighting when these are airborne
Then we have on land
and again
on land when enabled is basically going to indicate that the current rule of fighting should apply when the boards are on the ground
which again
we're going to take a look at on the ground Boyds very soon
So these basically just if enabled
againthis will apply when they're in the air and this rule will apply when they're on the ground
If we disable these right here
you can see that
wellwe don't need to disable on Lsts
we don't have it
but these are flying
so if I disable in air
that means when these are in the air
they are not going to fight
So you can see that right here
they are not fighting because again
this rule doesn't apply to the Boyds in the air
but it only applies to the boards on the ground
Now you can see right here
they're still kind of chasing them
but they're not really fighting
As you can see right there
if I enable an error
obviously they are going to fight
meaning that the fight rule applies to voids in the air
So that's these two options
Then we have the fight distance right here
This is going to be the maximum distance at which the boyds will engage in an attack
So right here
you can see it's set to 100
If I play this
they attack
If I set this to
for example
one right here
you can see that they are not attacking because again
this is the maximum distance since at which they will engage in an attack
Since 1 m is not far enough
they will not engage
But here
if I set it to 4 m
you can see that it's still not enough
But as I increase this
you can see that they will start to engage or attack
So maybe you have some enemies that are closer
And based on this fight distance
they will attack those closer enemies
but not further away enemies
So let me set this back to 100
Then we have fleet distance
similar to the fight distance
but the flea distance is going be the distance to which the boyss will retreat after attacking
Right now you can see that we have this right here
Let me make the Suzanne's attack
So on the cubes I'm going to put the aggression back to one because it's at 100
you can see that they're still running away
So on the Suzanne's
let me put the strength to one
And right here they will still run away because we have more cubes
So even though these settings are the same
actually let me put the strength back to 0．5
So even though these settings are the same
they still run away because again
there are more cubes
So they notice that and they run away
So on the Suzanne
let me put the aggression to like 11 right there
and now they will attack
So here on the Suzanne's
this flea distance right here
it's going to once again be the distance to which the boyss will retreat after they attack
So you can see that right here with it set to 100
they're attacking
but then they are fleeing
as you can see right there
Whereas if I put this fleet distance
let's just exaggerate it
and I put it to zero
you can see here that they are going to attack
But then instead of fleeing
since the flea distance is at zero
they just stay there and they're not fleeing As you can see right there
right here
if I put it up a little bit
you'll see the difference
As you can see right here
they're attacking
And then based on this flea distance
they are fleeing
Nowsince they're very close to this
even if we put this to a low number
they still flee
but you can see the difference with it at 100 or even 6 and when it was at 0
So that's the fleet distance
All right
let's take a look at another rule right here
So let's take a look at the goal rule
let's actually remove the fight
so I'm just going to remove the fight on both of these right here
Againwe'll go back to the rule of valuation and rule fuzziness in a second
But here
let's go ahead and add the goal right here
So with the goal rule
the goal rule is going to have the Boyds seek out a specific goal or target
So here
if we hit shift A
let's just go ahead and add a UV sphere or whatever kind of mesh you want
And I'm going to put it over here
And here you can see that we have the object for the target
So the object is going to specify the target that the Boyds should move towards
So let's select the sphere
obviously
And now if I play this
you can see that these are targeting this sphere right here
pretty cool
as you can see right there
pretty self explanatory
Then right here
we have some other options
You can see these are the same
we have the rule evaluation etc
but we also have predict right here
Now the predict option is going to have the voids predict or attempt to predict the movement of the target to intercept it more efficiently and more accurately
So right here
if I animate this I'm just going to go ahead and turn on automatic keyframe insertion
And then I'm going to hit the spacebar to play
And I'm just going to move this sphere around
So spacebar to play
and I'm going to move it around like so
And then I'm going to hit spacebar and left click to pause it and put the sphere down
So now you can see that the sphere is moving around
as you can see right here
So right now you can s​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ee it doesn't have predict enabled
and they're kind of just going to the same spot that the sphere was in initially
But if I enable predict right here
as you can see
it's going to predict the movement of the sphere
And it's going to try to attempt to target it no matter where it moves
All right
let me go ahead and delete the sphere and turn off automatic keyframe insertion
And there we go
That is the goal again with this one
it goes towards a goal or target
Let's go ahead and remove this one and let's add the next one
which is going to be a void
Now
as this name implies
this one is going to go ahead and have the voids avoid predators or enemies attacking it
So right here we have an object to avoid
And right here
we could go ahead and select these voids right here
So you can see if I play it
they will avoid those voids
We could also select an object to avoid
So if I hit shift A and add a UV sphere
you can see here
I could go ahead and select this UV sphere as the target to avoid
And you can see here that as I move this
they are avoiding it
as you can see right there
pretty cool
So that is the avoid
We also have right here the predict
which again
is going to do the same thing
It will try to predict the movement of the object that they are avoiding
Then we have the fear factor right here
The fear factor is going to make it avoid the object if the danger from the object is above this threshold
So you can see here we have the fear factor at 0
So right now
if I grab the sphere
hit spacebar to play and move the sphere
you can see that they are avoiding the object
Because again
the danger from this object is above the threshold of 0
If I put this up to
let's say
you can see if I play this
they're not really avoiding this object because the danger from this object is not above 9 right here
So that is the fear factor right there
All right
let's move to the next one
The next one we have is the avoid collision right here
All right
now for the avoid collision rule
let me go ahead and reset this up
I'm just going to go ahead and change this to voids right here and go to the Boyd brain
I'm going to go ahead and delete both of these
And here
let's go ahead
Let me just add a cube as the particles quickly
So again
in the render object and cube right there
and let me increase this
then I'm going to hit shift A
I'm going to add a UV sphere over here
And here I'm going to make a goal
So let's add a goal
The goal is going to be the UV sphere
So now these voids go towards the UV sphere
Now for these particles
I want them all to be already spawned on frame one
so I'm going to put the end frame to one
and I'm going to put the number down to 100
So right here
if we add a
so right here
if we add the rule avoid collision right here
this one allows for us to have the void's attempt to avoid collisions with objects or with other voids
So right here
you can see we have two options
voids and deflectors
So right here
this Boyd's option is going to allow for us to have these objects collide with other voids in the system
So for example
hereif I go ahead and play this
by the way
let's put the avoid collision before the goal
Again
it's important what order they're in right now
The priority is to get to the goal and then to avoid colliding
But let's put avoid collision first by clicking the little up arrow
So right here
if I play this without the Boyd's check box enabled
and let me increase my lifetime to 1000
you can see that right here
the voids are just merging on top of each other and they are not colliding as you can see right there
But if I enable voids right here
you can see that they are going to collide with each other
as you can see right there
So they're no longer on top of one another or intersecting
not as much
at least
You can see that some still are
But if this is off
you can see that they're all like converging into 1
So that's what this does right here
It allows for the voids to avoid the collision with other voids
We also have this look ahead value right here
And this is going to go ahead and set the amount of time in seconds that the voids are going to look ahead to anticipate potent​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ial collisions
So right here
obviously with the Boyd's option
this isn't going to do much because they're already all kind of intersecting
As you can see right there
they're all starting at the same spot
But this is going to do more of an effect on the deflector
Againthere's not much looking ahead here to see where the other voids are because they're already clumped together
So let me put this back to 2
All right
but then we have another option
deflectors
So here
let's go ahead and add in a cube
And I'm just going to hit S and shift X to scale it on all the axes except the x axis
And maybe I'll scale it on the X a little bit
So right here
let's move these over
Right here
we have this collision object in between our voids and our right
Now if we play it
nothing's gonna happen
They're just gonna go through the cube
So let's make the cube right here a collision object right here
So now when we play it
they're going to bounce back
As you can see right there
they bounce off the cube
but on this avoid collision right here
we could go ahead and enable deflectors
This is going to make it so that it's going to try to avoid collisions with objects that are set up as deflectors or objects that have a collision physics enabled on them
So now when I play this
as you can see right here
they kind of slow down and then go up
as you can see right there
as opposed to if I turn this off
they just kind of go and hit it and then go around
So right here
it's going to detect it and try to avoid it
as you can see right there
And that's where this look ahead comes in
This look ahead is the amount of time
againin seconds that will look ahead to anticipate potential collisions
So if I increase that
you can see that they're going to slow down sooner
In fact
let me just put this to 100
You can see that they're going to slow down sooner and then go up right there and let me
in fact
bring this over a little bit so that they have a little bit more time
So you can see what happens right here
They kind of slow down and then go over
Whereas if I put this to 0
the look ahead
you can see that right here
there is no time in seconds to look ahead and they just hit it
So you can see the difference right there
If I put it to 4
we have this right here
As you can see
honestlya low value and a value of 100
there's not much difference
But you can see what this deflector option does
Againit allows for it to look ahead and go around or anticipate potential collisions
So that's this avoid collision rule
Let me re-enable this and watch what happens if I put this rule second
So right now it is avoiding collisions first and then going to this
If I put the second
you can see that the primary rule is to get to the goal and then avoid collisions
So you can see that we get a completely different result because the primary rule is goal and then avoid collision
and that's why it's important what order these are in
And in fact
while we have both of these
let's take a look at the rule evaluation and the rule fuzziness
So the rule evaluation is how it's going to evaluate these rules
You can see we have three different options
fuzzyrandom
and average
By default
it's on fuzzy
so the first one right here
the fuzzy rule
this one is going to be a rule to control how the Boyd particles decide which rule to follow
So for example
right here
we have goal and avoid collision
Let's put avoid collision before now the rule evaluation and the rule fuzziness applies to all the rules you can see if we change it here
it will be changed here because again
this setting is just for the global rules
So let me go ahead and put that back to ．5
So here we have a list of rules
we have a Vo collision and goal
so it's trying to avoid this collision and get to the goal
So the fuzzy rule evaluation means that the Boyds are not going to follow these rules equally all the time
Insteadthey're going to decide which rule is the most important at any given moment
So for example
right here
we have two rules
We have a void collision and goal with the rule fuzziness right here
if we set it high to
for example
onethe Boyds might decide that to get to the goal is more important right now than to avoid the collision
So it's going to follow the goal rule and avoid or ignore the avoid collision rule
So you can see right here
it's kind of ignoring the avoid collision and it's just going for the goal if we put the rule fuzziness to 0 right here
the Boyds are maybe not going to be as concerned to get to the goal and it might prioritize avoiding the collision more
As you can see right here
it's avoiding the collision a little bit more
So once again
with this rule fuzziness
basically the Boyds choose the most important rule to follow based on the situation
but they don't follow all the rules at once if we put a high fuzziness
it's going to go ahead and stick to the most important rule that it finds
So in this case
the most important rule that it finds is the goal rule
and it'll just stick to that and ignore the avoid collision
But if we put the rule fuzziness low
it means that it might not pick any rule to follow very strictly
So again
with the rule evaluation set to fuzzy
we have a certain amount of rules
If the rule fuzziness is very high
it's going to pick the most important rule out of those and just follow that one and ignore the other ones
Most likely
if the rule fuzziness is lower or at zero
it's not going to follow any rules strictly
and it will just kind of take all the rules
So that's with the rule evaluation set to fuzzy
And with this method
it just allows for a more natural behavior because the voids are not just going to follow a rigid set of rules
but instead it will adapt to the situation ination then the next rule evaluation we have is random as the name implies
a random rule is going to be selected for each Boyd at each decision point
This is going to make the Boyd behavior unpredictable
So we could use this random rule evaluation if we want it to be more chaotic or varied
So here you can see what we get right here
againa random rule is selected for each Boyd
you can see if I change this and put the avoid collision after
you can see it slightly varies it
but not really
because again
here it's just selecting a random rule for each void to apply
Then lastly
we have average here
and as the name implies here
all the rules are going to be averaged together
This means that the boards will try to follow all the rules simultaneously and each rule is going to contribute to the Boyd's behavior equally
We use this rule evaluation if we want a balanced kind of simulation with our Boyds
We not a single rule is completely dominating another rule
So here it's going to average all of them together
So you can see here
let me move this just to make sure it's updated
If I play this
we get this right here
as you can see
And if I put this before
it's going to be basically the same thing because again
it's just averaging the rules
So you can see that we get this right here
So again
in summary
right here
fuzzy is going to go ahead and read all the rules and determine which one is more important based on the rule fuzziness
The random is just going to give a random rule to each of the bods
and the average is going to average the rules together
So all the board's follow all of the rules simultaneously
Now again
we'll take a look a little bit more at this as we take a look at the other rules
but we're going to go ahead and continue in the next video
In the next one
we're going to finish this Boyd's part of the course
As you can see
we have a couple more left to look at and we will look at all those options
And then we're almost done because a lot of these settings right here we've already taken a look at
So there isn't much left on the particles
And then of course
we will look at the particle hair system
which again
a lot of the settings are the same
And then we will take a look at practical examples
So I'll see you there
Ciao for now
all Vo


------------------------

# 12_Boid Particles Brain Part 2
All right
let's go ahead and continue looking at these Boyd brain rules
So right here
let me go to this cube over here and let me remove the avoid collision and the goal
The next rule that we have is the separate rule
pretty self explanatory
This one is going to go ahead and the Boyds are going to try to get away from each other to avoid crowding
as the name implies
So this could be useful if you're simulating
for example
flocks of birds where they need to have a certain distance from each other
So you can see here
when I play this
the Boyds will separate
as you can see right there
pretty self explanatory
All right
let's remove that one
The next one is the flock rule
as you can see right there
So with the flock rule
they're going to go ahead and try to match the movement of nearby Boyds while still avoiding collisions
This can help us to simulate a flocking like behavior where the Boyd's move together
but again
they don't collide
So right here
you can see what we kind of get right there
Nowlet me go ahead and change the rule back to fuzzy right here
So once again
we have the flock rule right here where they will flock and basically match the movement of nearby voids
If I go ahead and add a goal rule right here and select the sphere as the goal
you can see that we have this right here
Let me go ahead and put the rule fuzziness to 0．5 right there
So you can see what we have right here where they are flocking together
And when we put the goal before the flock
So again
with flocking together
they're going to match the movement of nearby boyds
once again
simulating the effect of a flocking behavior
So you can see here
if I remove the goal
let me add maybe a separate
So here we could have them separate and then flock
So you can see here it's going to separate and then they're going to match the movement of nearby Bos and flock together
As you can see
we have this group right here and this group right here
So that's what the flock does right there
All right
let's remove both of these
Then we have follow leader right here
As the name implies
this is going to allow for the Bos to follow a specific leader object defined by here
so instead of following the other voids
they're going to follow a leader object
So here
for example
I could go ahead and just add a cone
And let me select the cone as the leader object right here
So now if I play it
you can see that they follow the cone
It's similar to the goal rule in a way
Howeverthey're basically just using this cone as a leader right here
As you can see
no matter where I move it
they're going to follow this cone
Pretty cool
Now we also have this additional option right here called distance
Now the distance is going to specify how far behind the leader that the boards should follow
So right here
if I animate this cone
for example
on frame 1
I can insert a keyframe and then on frame 100 I'm just going to bring it forward
Over here I can insert a keyframe so that now I have this right here
You can see that this distance right here is going to be how far the voids have to be behind the leader
So right now with a distance of one
you can see that we get this right here
as you can see right there
if I put the distance to 100
let's say
you can see that we have this right here where they're actually going further away from the leader because they're not far enough away
If I put it to 11 or so
you can see that we got this right here where they're once again going away
Let me put it lower
So if I put it to three
you can see that we have that right there
And then they kind of go backwards
as you can see
So they fall back and then start following it because again
this is the minimum distance that they have to be from the leader or how far behind the leader the voids should follow
So if I put this to two
you can see that we get this right here where they kind of fall behind and then follow
You can see that when they reach it
they still get way closer to it
But this is
againthe distance behind where they have to follow
Once the leader stops
the voids will collide or intersect with it
But as long as the leader is moving
this is the distance that they have to be behind
So right here with line enabled
it's going to have the Boyds follow the leader in a line
You can see that here we're going to have one Boyd go and then another one go
and then another one as if they're following each other in a line
as you can see right there
So they go one at a time
Now we also have this cue size right here
This is basically going to determine how many voids can follow the leader in a line formation
Now
I don't notice a difference with a value of one or 100 as you can see right here
I don't see a difference
I don't know if it's a bug and it's broken
But as you can see right here
there is no difference happening
But that is the line option
If we uncheck it
you can see that everything kind of clumps up and just follows the leader
Ironicallyit looks a little bit more like line when it's unchecked
all right
so that's the follow leader rule
Let's go ahead and remove that one
Then we have the average speed rule
The average speed rule is going to make the Boyd's try to maintain an average speed
as the name implies
Right here
you can see that we have three options now
right now you can see that if I play it
they just kind of separate out like that
Let me make sure that everything's updated as well
So they kind of just separate out like that
But right here
the first option we have is the speed
The speed is going to be the percentage of the maximum speed that the boards will try to maintain
So right here
if I put this to one
you can see the difference right there where they go a lot faster
And if I put this to zero
you can see right here their average speed
they're trying to maintain a 0
So right here
if I put this to like 1．1
you can see that right here
they try to maintain an average speed of a value of 0．1
Againthis value right here is a percentage of the maximum speed
So right now
it's trying to maintain a maximum speed of 0．1% of the maximum speed
So as you can see right there
so that's the speed right there
Let me put this to ．5
then we have wonder
the wonder is going to go ahead and control how much the Boyd's velocity is randomized over time
So right here
with it set to zero
you can see we have this right here where it's not randomized
If I put this to one
you can see that right here
the velocity is randomized over time
so some of them are going faster
some are going slower
etcso it randomizes the velocity of the voids
Againthe velocity being the forward motion that they have or that they're going in
So it's randomizing the speed
You can see some of them are not moving that much and some are moving a lot further and faster
Let's go ahead and put this back to ．5
then we have level right here and the level is going to be how much the Boyd's vertical or Z axis velocity is kept constant
So here you can see it with it set to 0
And if I put this to one right here
so you can see here with it set to 0 that are going up and down on the z axis
as you can see right here
we have some going higher
some going lower on the z axis
If I put this to one
once again
it's going to control the Boyd's vertical Z axis
So right here
you can see that it's just constant
We don't have any going higher on the z axis or lower on the z axis
They're kind of stuck in between this plane ri​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ght here as you can see if I put this a little bit lower
they will have a little bit of vertical Z axis movement
But if I put it a little bit higher
they will have a little bit less
As you can see right here
they will go on the Z a little bit
but not too much
Let me increase this even more and you can kind of see what that gives us
Very cool
so this basically just constrains the Z movement for the Boyds
All right
let me go ahead and put this back to 0
which means that they could just freely move however they want
All right
so that's the average speed rule
Then we have the fight rule
which we've already taken a look at
so we are good with that
All right
and there we go
That is all of the different Boyd brain rules and options
With that
in the next one
we're going to take a look at the very last thing
which is going to go ahead and be the land movement
So they allow land allow climbing and these options right here
and then we will be done with the voids
So I'll see you in the next one
Ciao for now


------------------------

# 13_Boid Particles Land
All right
in this one
we're going to go ahead and take a look at the Land Boyd particles
So let's just start a new scene
And here in the particles
let's add a new particle system under physics
change it to void
And over here under movement
let's disable allow flight
and we're going to enable allow land instead
Now with this
the allow land allows for the boards to move on land
Now we could have them flying and then go to land if we want
Again
we could animate these values as you can see right here by hitting the I key to insert a keyframe
So we could do that
let's also add a land right here
So I'm going to go to edit preferences
And under add-ons or extensions
if you don't already have it
search for the ant landscape
add on
and you have to type it n dot n dot t
so get the ant landscape add on
go ahead and install it and or enable it
And then here I'm going to hit shift a mesh landscape in edit mode
I'm going to hit the S key
scale it up a little bit
and then S shift Z to scale it on all the axes except the Z axis
That way it's not too tall
Let's go ahead and grab the cube
move it over here on the X
and bring this up
So right here with Allow land enabled
you can see if I play this
let's also put the lifetime of our particles to 1000 right there
You can see that here they're going to be able to go on the land
as you can see right there
veryvery cool
Now let's go ahead and set up a target over here
So I'm going to hit shift a I'm going to get a cube
move it over here
and let's go to the Boyd brain
And I'm going to remove separate and flock
And I'm going to add a goal
And I'm going to set this cube as the goal
So ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌now if I play it
you can see that they go towards this cube
Right now they are not going on the land because we have a La flight as well
So right now they can do both
Also on the land
we need this to be a collision object
otherwise it won't work
Let's go ahead and first disable allow flight so we can see what's happening
So you can see with the La land
it's going on the land
but it's going based off of the origin and the grid right here
So for it to go on the land
once again on the land
make it a collision
as you can see right there
And now we have them going on the land
All right
very cool
So now we have this right here
and they're going on the land pretty cool
Now if the particles are bouncing off the land
you could go to the collision and you could put the friction and the stickiness all the way up so that they don't bounce
If on this we also enable flight
you can see that they will be able to fly and go on the land
as you can see right here
So first they'r​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e kind of flying
but then when they hit the land
they're going on the land and flying as well
which is pretty cool
Let's disable allow flight
And as you can see
you could animate this
which is pretty awesome
So you could have them flying at first and then disable this by doing a keyframe
and then they will fall on the land
which is pretty sweet
All right
let's just enable allow land
And let's take a look at these options right here
Let me go ahead and expand this a little bit
So first right here
we have max land speed
This is going to be the maximum speed that the voids can reach when they are on the ground or on the land
This is in meters per second
so this is just the speed of them
You can see right here at 5
we have this
If I put this up
you can see that they're going to go a lot faster
as you can see
And obviously if I put this down
you can see that they're going to go a lot slower
So this is just the speed of the Boyds
Let's put this back to 5
Let's also increase the end frame to 1000 or so
Then we have jump speed right here
This is gonna be the speed at which the boards can jump off the ground again in meters per seconds
so it controls how powerful their jumps are
So we can see that right here with this right here
let me move this a little bit further back
You can see that we have this right here
So let me play this
You can see they're going up the mountain and then right here they're jumping towards the goal
As you can see right there
they're kind of jumping right here
If I go ahead and change this max jump speed or this jump speed
and I put it up to like 18
you can see what's going to happen
They're going to jump much higher and they're going to have more force in their jump
So watch what happens
You can see they're jumping over the target now
So again
the jump speed is going to be the speed at which boys can jump off the ground
So for example
if you have crevices or holes in the ground
they will jump
which is pretty cool
Let me put this to maybe two right there and play that
So right here
we could set this if we need the voids to jump over obstacles or simply just move by jumping
as you can see right there
So again
a higher value will make the boys jump faster and potentially further
All right
let me go ahead and put this back to 0
Let me also bring the cube back over here
Then we have the max land acceleration right here
This is going to control how quickly the voids can change their speed while moving on the ground
So this is a percentage and it's going to be a of the maximum velocity of the Boyds
So higher values of this means that they can speed up or slow down more quickly
Now we can use this to help the Boyds be more responsive to changes in direction or speed when they're on the land
So higher values of this are going to allow for quicker turns and sudden movements
So you can see here
if I put this to ．1 or so
we get this right here
as you can see
So again
this is going determine how quickly they can change their speed while moving on the land
And if I put this to one right here
you can see that we get this right here as you can see right there
So again
the voids are able to speed up or slow down more quickly
And then if they need to turn or make sudden movements
this allows for them to do that faster because they're able to speed up more quickly
So you can see the difference with one
And again
．1 right here
they're not speeding up quickly
they're going very
very slow at first
And then they're slowly picking up the speed a little bit more
as you can see right there
So this is the acceleration for the land
I'm going to put this to ．5
then we have max land angular velocity right here
Now let me go ahead and also make these particles a cube
so I'm going to add a cube under the Render tab
Once again I'm going to change it to object
and I'm going to select this cube as the object
I'm going to increase the scale a little bit
and I'm also going to put the amount of particles to 100
So now when I play it
I get this right here
All right
so let's go back to the settings right here
Max land angular velocity is going to go ahead and determine how fast the voids can rotate or change direction while on the ground
Nowthis is measured as a percentage of 180 degrees
So we could adjust this if we want the Boyds to make a sharper or quicker turn while on the land here
if we put a lower value
it's going to make them have a smoother
more gradual turn
So you can see at 0．5
we have this right here where they're turning like so
If I put this to like 1．1 or so
you can see that right here
especially towards the back
you can see how they have a gradual turn
If I put this even lower to like 0．07
you can see right here they have even more of a gradual turn
As you can see
they're turning all the way this way
And if I put this to zero
you can see that we have this right here where they're not even turning towards their target
they're just going based off of the normals
So right here
if I increase this a little bit
you can see they have more of a gradual turn as opposed to if I put one
they just turn directly towards the object
Now
obviouslythis has to do with them generating here and also if they're turning towards the object
for example
if I select this cube
I key insert a keyframe right here and then move it over here like so
You can see that here with this set to a 0．1 value
you can see if I play this
they're going to go towards the cube
And then when the cube moves over here
you can see that they're turning very slowly
as you can see right there
But if I put this to a value of one
you can see that when this cube moves over here
they're going to turn very sharply
So the cube moves
and you can see that these cubes turn very sharply and move towards the cube instead of a gradual turn
So that's the max land angular velocity
Let's put that back to 0．5
Let me also delete the keyframes on this cube
All right
then we have land
personal space
Once again
same thing as over here
the air personal space
This is going to be the space or the radius of each Boyd's personal space while on the land
Now this is going to be a percentage of the Boyd's size
so again
this is based off of a percentage
So the boys will try to avoid getting too close to each other based on this distance
So here we could increase this to maintain more distance from each other when on the ground
and this can help to prevent clustering
So right here you can see with it set to one
we have this right here
If I set this to six
you can see that we have this right here
Nowonce again
we can't really see the difference
As you can see
if I put this to 10 or a value of one or zero
we can't really see a difference right now because they're going towards the goal
So they are going to clump together anyways
So if we remove the goal right here
let's remove that as the Boyd brain
And right here
let's go ahead and instead get a separate right here
And now when I play this
you can see the difference with 0 right here
And if I put this to 10 right here
so you can see at 10
they separate and they have more personal space
whereas at zero
they're not going to separate or really have any personal space because we have this at 0
If I put this to like ．1
you can see that they're going to separate a little bit
as you can see right there
Let me put it a little higher
maybe to like a 0．8
You can see we get this right here
So keep in mind that when you're doing some of these Boyd brain rules
So take a look at these settings over here if they're not working properly
because as you can see with the separate
if you have this or this one for the air
the air personal space set to zero
it's not going to work
All right
let me set this back to one and delete the separate
And I'm going to add back the goal right here
And let me select this as the goal
Then we have land stick force right here sounds almost like a superhero school name
All right
so the land stick force is gon Na
determine how strong a force has to be to affect a void when it is on the ground
So basically this controls how sticky the ground is for the boards
So here we could use this to control how difficult it is for an external force
like a force field or a wind force to move the voids once they're on the ground
So a higher value is going to mean that we need more force to move them
So for example
hereif we add a force field
shift a force field force
and let's move this over here
And let me put this force field strength to 10
You can see that here
let me move them right there
You can see that if I play this
wellI guess 10 is too much
Let me put that to two
So if I play this
you can see that here
they're going on the ground
but they're being forced away by this force field
If I increase this stickiness right here
So if I increase the land stick force and put it up higher
againthis is going to make it so that we need more force to move them because they are more sticky to the ground and they have more friction
So you can see that now they're not really being affected by the force
So again
at zero
you can see right here they're being affected
And if I bring this up
let's say to one
you can see that now there's more stickiness to the ground
So the force field is doing less
Again
you could think of it as these have more friction on the ground
If I put it to 4
you can see right here
we need more force on the force field
So if I increase the force on the force field to
let's say 20 right here
you can see that we get this right here
Maybe 20 is too much yet again
So maybe 10
And then if I go here and increase this land stick force right here
increase this a little bit
you can see that right here
if I increase it enough
this force field won't affect it as much as you can see right there
So for example
you could have some particles
If I duplicate this and make this a single user
you could have some of them that are being blown away by the wind or a force more than others
For example
herelet me update this right there
For example
these ones right here are going to be blown away by the wind a lot more
And let me actually put this to 0 just so we can see what's happening
So you can see that these ones are being blown away
And then these ones right here are sticking to the land
as you can see right there
Pretty cool
All right
let me delete that cube
So that is the land stick force
then we have collision collection
Once again
same as before
we could specify a collection for objects that it's going to collide with
So for example
hereif I had a cube
and let me just scale this up
And right here
we need to make this a collision
obviously
And let me bring this down
and then let me hit shift D and duplicate this and just like that
So here
if I go ahead and just play this
you can see that right here
Let me
let's delete the force field
by the way
and let's update this
So just move everything to update it
So you can see that right here
they're going to collide with this wall right here
but I could go ahead and move this to a different collection
So M move to a new collection called Collection 2
And now I could go here
This one is in collection one or collection
and this one is in collection 2
So if I select the collection one right here
it's not going to collide with this one because again
it's only going to consider the objects in whatever collection we set here
If I set collection 2
it will collide with this one
but not that one
Pretty cool
All right
let me x that out
And then lastly here we have a La climbing
Now this setting right here is going to allow the boy-scout on specific goal objects
So right here they are able to climb over the objects
Now for some reason it doesn't work here
If I enable allow climbing
I've messed with this for quite a while and no matter what I do
it just doesn't work here
I've tried to set these objects as a goal object because again
they need to be a goal and even tried to put them as a goal force field
but for some reason
no matter what I do
it just doesn't work
So here
if I set force field to a Boyd Boyd force field
not a goal
you can see that I'm not really quite sure why it doesn't work
It seems to be broken
but they basically need to be climbing over this like a wall
so no matter what I did
it just didn't work
even if I put the stickiness to 10 etc
AgainI messed with this for quite a while
It just they just don't climb again
I think this is a bug once I find out the issue with this
I will update this video to show how this feature works properly
but again
no matter what I tried
it just doesn't seem to work
so once I figure out why this is not working
againI believe it's a bug
I will update this so that I show you how this properly works
but basically this allows for the particles to climb on objects
kind of like you can imagine ants climbing up this etc
So there we go
that is the Boyd particle system settings with that
go ahead and mess around with the settings
create some cool little simulations
We'll do some of that once we take a look at the practical examples
but with that I'll see you in the next one
Ciao for now a


------------------------
