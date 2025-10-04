
# 2_Particle System Source
Alright
so let's go ahead and take a look at these next settings
Here
I put these settings
Let me put this to 1000 again
So I have the default settings
The next option is the source right here
So the source is basically going to be the source from where these emit
The first drop down that we have is emit from
So we have faces right here
You can see that here with it set to faces
Let me go into Wireframe as it's going to be easier to see
You can see that it's emitting from the faces
as you can see
pretty self explanatory
It's going to emit it from the surface of the faces
If we change this to vertices
as you can see here
it's going to emit it from the vertices of the mesh
If we change it to volume right here
it's going to emit from inside the cube
You can see this
especially if in edit mode
I scale this up
you can see the difference with faces right here where it's emitting from the faces
and volume right here where it's emitting also from the inside of the cube
as you can see right there
very cool
So that's the first option
e it from
Let's go ahead and just leave it to faces
Then we have use modifier stack
This is going to make it so that it takes into account any modifiers that are applied to our emission object
such as subdivision surface modifier
So you can see that here
If I go to the modifiers
once again
the particle system is a modifier
But here
if I hit Ctrl 2 at a subsurface level of 2
and here again
this is very important what order these are in
So we want to put the subdivision surface modifier before the particle system
And then right here
we also want to make sure that the levels viewport and render is the same as it says right here
When you have over it
you can see that you want to make sure that they are the same as it will give you correct results
whereas if it's not
it may not work properly
Now
right here
you can see that if I enable this or disable this
we see a little bit of a difference
but we see it even more if we change this from faces to vertices
So with it disabled
you can see that it's not taking into account the subdivision surface modifier
where right here
it's just emitting from the 8 vertex points as if there's no subdivision surface modifier
But if I enable use modifier stack
it will take all the new vertices that are applied from the subdivision surface modifier
And you can see that we have particles emitting from all of those
So again
if I go to the modifiers and turn off optimal display
you can see that we have all of these vertices now on the mesh
Whereas if I turn on optimal display
or if we didn't have this
we only have these four vertices
So again
this use modifier stack is going to use the modifiers in the emission of the particle system
not just t​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌he base mesh
So again
if we enable this
the particles will be influenced by changes made by the modifiers
All right
let's go ahead and remove this modifier
And I'm going to go back to particles
change this back to faces
and I'm going to disable use modifier stack
Then right here we have the distribution
The distribution is going to be how the particles are distributed across the emitter objects
Right here you can see it's set to jittered by default
Now with it set to jitter
the particles are evenly distributed across our particle system or object with a slight randomness or jitter to avoid it being a perfectly even grid
So right here
you can see they're kind of jittered
As you can see right there
We could change this to random right here With random
the particles are going to be distributed randomly across the emitter object
as you can see right there
Againwith Jittered
it's more even and just has a little bit of jittering
But with random
againthese are completely random
And then we have grid right here
the particles are going to be distributed completely evenly
like a grid
as you can see right there
So there is no randomness
as you could see
very cool
All right
and then we have some options over here
depending on the distribution method
So let's take a look at these one at a time
let's go to jittered
So first we have random order right here
if this is enabled or checked
which it is by default
the particles are going to emit in a random order rather than in the exact order of the vertices
edgesor faces
So you can see here the difference
If I uncheck this
you can see we get this right here where it's first emitting from the top face
then it's emitting from the side face
then it's emitting from that one
this one
this one
and then this one
If you're familiar with geometry nodes and indices
or the index of the faces
againeach of these faces have an index from 0 to 5
because right here we have 6 faces
again0 being one of them
and it will basically emit it in that order
So it's emitting from this face
then that face
then that one
then that one
Same thing is true
If we change this to vertices
you can see we have random order by default
it's enabled
and it's just going to randomly distribute the particles on any of these vertices
But if we uncheck random order right here
it will do 1 vertex at a time
As you can see right there
it's going through one at a time based on the index
All right
let's go back to faces and re-enable random order
Then we have even distribution right here
This is going to ensure that the particles are distributed as evenly as possible across the faces of our emitter object
This is going to help to prevent clusters of particles in some areas
So right here you can see with it enabled
we have this right here
So it evenly distributes them
If I uncheck this
you can see that if I play this right here
there's not too much of an issue
But again
sometimes you might have your particles clumping in some areas and there's
let's say there's more over here and they're clumped together as opposed to here
Wellthis will help to evenly distribute them
For example
right here
if I go into edit mode and extrude this out
make a smaller face
extrude this out
make it bigger
and make this one smaller and bigger
You can see that right here
if I play this
we have more particles clumped over here
But if I enable even distribution
you can see that right here
they are more evenly distributed
As you can see right here
the difference
In fact
let me go ahead and add a bunch of loop cuts right here
And now you can see that right here
we have a lot more particles without even distribution
But if I enable even distribution right here
you can see that the particles are evenly distributed
Now
againthis is going to have to do with the topology or how many vertices in your mesh
as you can see right there
So once again
let me go ahead and go to face select mode
If I select this and subdivide this even more
you can see that right here without even distribution
all the particles are here
but with even distribution
they are evenly distributed
All right
in edit mode I'm just going to hit the A key
select all this X
delete vertices
and shift a
add a new cube in edit mode
So that's even distribution right there
Then we have particles face or particles per face
This is going to control the amount of particles that are emitted for each face of our mesh
If it's set to 0
which it is by default
the number of particles emitted per face is just going to be determined by the amount of particles and these distribution settings
So right here
it's just distributing them based on the number and these settings right here
So we just have this right here
but let's say I only want one particle or one stream of particles emitted from each face
If I put this to one
you can see that now from each face
I only have one particle stream
If I put it to two
you can see that now from each face I have two particle streams
If I put it to three
you can see that I have three particle streams from each face etc
So you could change this value to make sure that each face emits a specific number of particles
Nowthis could be useful if you have an effect where you need a uniform amount of emitted objects or particles for each face
All right
let's put this back to 0 right here
Then we have jittering amount
This is going to determine how much randomness or jittering it's going to be applied to the particle system when the distribution is set to jitter right here
So a value of one right here is going to be more jittering
For example
if we put it to zero
you can see that we have this right here if we put it all the way to two
you can see that we have this right here
So again
right here with the jittering
the higher the amount
the more chaotic the distribution of the particles
and the lower the amount
the more orderly it's going to be
You can see this a little bit better if we uncheck random order and put this to 0 right here as opposed to putting
let's say
to two
As you can see right there
it's still pretty random
But again
this is going to affect how much these are jittered or how much randomness is applied to the particles
Let me recheck random order and put jittering amount back to one
And then right here we have random
you can see that we have these same options here
random order or even distribution
And we have grid right here where we have some other options right here
So once again
with it set to grid
it's going to evenly distribute it as a grid
as you can see right there
which gives us some really interesting results
So right here we have invert grid
if it's not selected
it's just going to create a grid based off of the mesh
We could see this easier if we add Suzanne
So in edit mode
let's X delete the vertices
shift a
add Suzanne or monkey
And then right here
if I play this
you can see that right here
it's going to create a grid that aligns with Suzanne
Let me actually go into Wireframe so we can see it better
So you can see that right here
we could see that it's creating a grid based off of Suzanne
Now
before we take a look at invert grid
let's go ahead and take a look at the resolution and random as this will help us to see the invert grid
So right here
the resolution is going to be the amount or the resolution of the grid
So a higher resolution
it's going to mean more grid points
Againthis is kind of creating a grid based on the mesh
So more grid points or more resolution is going to be a denser arrangement of these particles
So again
this is going to control how much the grid is divided
So if I increase this to 50
you can see the difference that we have here now
So let me go ahead and play this
So you can see the difference right there
We have much more particles
as you can see right there
as opposed to Re of 10 right there
as you can see
So again
this is going to increase the amount of subdivisions or resolution of the grid
So you can see that here
Without it set to invert grid
it is creating a grid around Suzanne
But invert grid is going to invert where the grid is
and it's going to see what's not an object
So if we hover over this
you can see it says invert what is considered object and what is not
So if I enable this
you can see that it's now inverted it to the visible domain box right here
So if I play this with inverted grid
you can see that it's basically playing it around Suzanne
or this basically invisible box around Suzanne
So it's inverting what it's considering the object
So instead of distributing these grid particles on object
it's distributing it around the space of the object
Or again
this invisible shape
If we go to the object properties right here under viewport display
you can see that here
I could go ahead and turn on the bounds for Suzanne
And this is this invisible bounding box for Suzanne
And once again
you can see that the grid is conforming to this invisible bounding box around Suzanne
as you can see right there
Let me go ahead and turn this off
So that's what this setting does
Againit inverts it so that instead of detecting the object
it detects this invisible bounding box
So let me uncheck that
then we have hexagonal grid
so right here
without it checked
they're just arranged like so
but if I enable this and going to arrange them in a hexagonal pattern
now let me go ahead and delete Suzanne and add in a plane
So right here
let me put the resolution back down to 10 as well
So without hexagonal grid
you can see that if I go into top view
they're aligned in a perfectly straight pattern like that
but if I enable hexagonal grid
you can see that they're staggered one from the other
and it creates this more hexagonal grid pattern
as you can see right there
And that's what that does
So right here
this could be useful for creating a kind of honeycomb pattern or other kind of mesh patterns
as you can see right there
Then lastly
we already took a look at resolution
We have random right here
So the random is going to go ahead and give randomness to the grid pattern
Let's disable hexagonal grid
So by default
the grid pattern has no randomness
but if we increase this
you can see that now it has a little bit of randomness
Let me go ahead and put this all the way to one
And you can see the difference right there
It's not so much grid like anymore
It has more randomness to it
so it makes the pattern less uniform
So here
this could make the grid pattern look a little bit more organic
as you can see right there
So that is all the settings for the source
I'll see you in the next one CIA for now Ava


------------------------

# 3_Particles Cache
All right
in this one
we're going to quickly take a look at the next option
which is the cash
Now I'm not going to go over this in depth because we've already taken a look at the cash for the rigid body and the cloth
and it is basically exactly the same
So if you want to go in depth with the cache
check out the rigid body cache in the rigid body section and the cloth cache in the cloth section
But right here
the cache is going to go ahead and allow for us to store the simulation data or cash it or save it
That way it doesn't have to recalculate it every time
This allows for us to play it faster
for it
againto not have to calculate it and use memory to calculate the simulation
and for it to be able to render
So once again
you want to cache your particle system and animation
Once again
you can think of this like going on a website and you log in
You don't have to log in again the next time you go because it's already cached and saved in the cookies and the cache
So this is the same thing for the particle system
You can see here
once again
we could add or remove some caches
So here we could create different caches based on different parameters that we set for the simulation
We could cache it at different times
For example
we do one cache from frame 1 to 100
and then another cache from frame 100 to 200
etc
So we could add multiple caches to cache different setups
For example
maybe on the first cache
we want to cache it with certain settings
and then on the second one
we want to cache it with different settings
So this is what this allows for us to do
Let me go ahead and remove that
Then here we have external
unfortunatelythis does not work
Apparently there's a bug with this that's been going on for years and it is still not fixed
but this basically allows for us to save the cache
So here we could bake the CA externally on a hard drive or a disk
And then here
if we enable external
we could then pull that cache from our saved folder or from wherever we saved it
And this is going to pull that cache data so that it reads that cache data that you baked on your hard drive
Once again
this doesn't work
and there's still a bug after all these years
who knows if they're going to fix it
So I'm not even going to go over that since it doesn't work
All right
then let's take a look at the other options
We have cash step right here
which we didn't have on the other ones
and this is going to allow for us to determine how frequently it caches a frame
So right here
a value of one means that it's going to cache every frame right here
So here
if I go to my folder
by the way
make sure to save this because you can see if we don't save the file
we can't select disk cache
So let's save this file first
So right here I'm going to go to file save as
and I'm going to save it as one
So now I could enable disk cache
So again
with the cache step at one
if I click bake
you can see that right here we get this red solid line that goes throughout
That means that it's baked these frames
If I go to my folder here
you can see that we have this right here
Againit's going to save the cache wherever you save your file
if you have disk cache enabled
So right here
you can see that every frame is saved
If I hit Ctrl plus A to select everything
you can see I have 251 items selected
meaning that there are the 250 frames right here selected
I'm not sure why there's 251
I don't know what the extra one is right there
Interestingbut right here
let me go ahead and delete this cache right here
So let me me delete this delete and here
if I put the cache step to 2
this is going to make it so that every other frame is saved
So it's going to half the caching file size
S​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o here
only every other frame is going to be saved
And again
this is going to reduce the amount of cache data
For example
if we don't need every single frame to be saved
So now if I click on delete
bake and bake again
and you can see that right here
the line is different
We only have a little line at the end
But if I go to my folder here
you can see here
if I hit Ctrl A to select everything
I have 127 frames
So now I only have half of the frames cached
Very cool
let me go ahead and delete this right here
so delete the folder
So again
the cache step
it's basically whatever number you set
it's going to cache every nth or every number of frames that you set
So if you put 5
it's going to cache every 5 frames etc
Then right here we have disk cache and library path
and also the compression
Once again
we went over these settings in the other cache videos
It's the same exact stuff
so I'm not going to go over it
Same with all of these options
they're exactly the same
but I'll go over it within a minute or so
Once again
if you want to get more in depth on the cache
check out those other two videos
So right here we have delete bake
this is obviously going to delete the bake that you do
We have bake
This is basically going to go ahead and bake or save the simulation data as you saw in that folder
It's going to save it as files
As you can see right here
we have it saved as these files right here
BP Ys file
I'm not even familiar with that extension
but that's what it's saved as
Then we could delete the bake again
This will delete it from here
But you can see that the bake is still in the folder
So if you want to save computer space
you could also delete it here
as you can see right there
because it will delete it from being connected with Blender here
but it won't delete it from the actual folder
So basically when we click on Bake
once again
it's going to lock in all these settings
You can see when I click bake
I can't change those settings anymore
and now it's basically locked into this
So it's basically saved the simulation like this
If you want to change the simulation
you got to click on delete
bake and change it
and then rebase it
Then we have calculate to frame right here
You can see that right now we have this red line
But if I move this cube
the red line is going to disappear
If I put my frame over here
if I click on calculate to frame
it's going to cache it all the way up to that frame
As you can see right there
it hasn't baked it yet
meaning that it hasn't saved it as these files right here
let me go ahead and delete this folder
So delete and right here
let me do that again
So I'm going to move it
If I click calculate to frame
it's just going to cache it right here
you could think of caching as a temporary save of the information
You can see that none of this is grayed out
and if I move it
this disappears
You can also see that here
when I calculate it to frame
it creates the very same kind of folder as you can see right here with the cash
Now right here
we have current cash to bake
So it's going to take the current cash
Againthe cash is going to be kind of a temporary save
So here current cash to bake is going to take the cash
which is going to be temporarily stored in the memory or in that folder
and it's going to bake it
meaning it's going to make it permanent until we choose to delete it
So right here
I can click on current cache to bake
and it's going to take the current cash and bake it
You can see that now if I move this
you can see that this red line doesn't go away and all of this is grayed out
You can also see that when I move this and play it
the particles are still playing from here because it is now baked
Whereas here
if I click on delete bake
and I just go ahead and move this
if I play it
you can also see that when I play it
it caches it
But if I go over here and click on calculate to frame and cache it
you can see that if I move it
the particles move with the cube
But when I bake it
it's basically locked in
Then we have bake all dynamics
This will bake all the dynamics in the scene
meaning cloth simulations
rigid body particles
etc
It will bake everything
We have
delete all bakes
so this will delete all the bakes in the scene
whether it's cloth
rigid body
etcand then we have update all to frame right here
And this will basically update all the simulations to the frame that you're on
So let's say you change some of the settings or this isn't acting as it should
you can click update Alta frame and it will just update the simulation to the current frame for all of the physics or simulations so it could be clock or rigid body or particles
So there we go
that is the cache
Very quickly run down again if you want to see it more in depth
check out those other two videos
I'll see you in the next one CIA for now
avo


------------------------

# 4_Particle Velocity
All in this one
We're going to go ahead and take a look at the velocity settings
So let me re add a particle system
And under the velocity
you can see that we have all the settings right here
So by default
if we play this
we have this right here
Now the velocity settings are going to control how the particles are emitted and how their initial motion is defined
So basically how the velocity of the particles is defined
So let's take a look at this first one
which is normal right here
The normal is going to control the velocity of the particles along the surface
Normal
againif we go into edit mode right here and I go to the top right under mesh edit mode overlays and turn on the face normals and increase the size
you can see that the normal again is the perpendicular direction or the direction that the faces are facing
So these blue lines are the normals for these faces
Let me go ahead and turn that back off
So right here we have a normal velocity
And right here
you can see it's set to meters per second
So right here with it set to one
you can see that these are shooting out in the normal direction with a velocity of 1 m per second
Let's increase this to exaggerate it
If I put it to 10
you can see that now we get these shooting out from the normals of the faces
As you can see right there at 10 m per seconds for the velocity
So with this
we could simulate the particles shooting out directly from the surface
So if
for example
we have sparks flying off of a welding surface
we can use this to make the particles shoot out from the normals right here
If we put this to 0
as you can see right here
they're not going to have any initial motion in the normal
So you can see here the difference between 0 and 1
They have a little bit of normal velocity or movement
So that's the normal
Let's go ahead and reset that back to one
Then we have tangent right here
The tangent is going to go ahead and move the particles or create the velocity along the direction or along the direction that is tangent to the surface
Now the direction that's tangent to the surface is just the direction that's parallel to the surface
So right here in edit mode
let me delete the cube and let me add a plane as this will be easier to see
So right now with normal and tangent set to 0
we have these shooting up a little bit along the normal
But if I increase the tangent right here
these are going to move parallel to the plane
so along the plane
So here
they're going to move along the plane surface as you can see right here
So they're moving in this direction
So right here
they're moving along the tangent or the parallel direction of the plane or the surface
Pretty cool
If I go ahead and add a cube back right here
you can see what that gives us
Let me put the normal to 0 and the tangent up
you can see that these are moving along the surface of the plane or the cube
So these ones are moving along that way
these ones are moving along that way
these ones along that way
etc
So that's what the tangent allows for us to do
so it makes the particles slide along the surface as they are emitted
Then we have the tangent phase
let me once again go ahead and delete the cube and add back the plane
So the tangent phase is basically going to rotate the tangent direction that the particles are going in
So you can see right here with it set to zero
they're going this way
But here
if I start to increase this
you can see it's rotating them where they're going that way
I could also bring it to a negative number and it will rotate them the other way
So you can see that right here
if I rotate this right here
it's going counterclockwise rotation
and this way it's going clockwise rotation
So that's what the tangent phase does
It basically just rotates the tangent direction for the particles
and again
this is rotating the direction that the particles are emitting around the normal of the face
So again
this is going to rotate the tangent velocity
Let's go ahead and reset this to 0
I'm also going to go ahead and put the tangent to
I believe it was at 0 before
and the normal back to one
All right
there we go
then right here we have object aligned x
yand z velocity
Let me go ahead and once again add the cube back
And right here
if I go to the object properties right here
you can see that if I go to viewport display
I could turn on the axes of the object
So right here
you can see that we have x
yand z axis of the object right here
Let me go back to the particles
And here we have a velocity that we could define on any of these axes
You can see it's in meters per seconds as well
So these right here is going to control the initial velocity of the particles in these local x
yand z directions
So for example
hereif I play it with nothing
you can see we have this
But if I increase the x and just increase this
you can see that they're shooting along the positive x direction
If I put this to a negative number
you can see that they're going to shoot along the negative x direction
Same thing with the y
we could increase the y
it will shoot along the positive y direction
as you can see right there
So this is the positive y
and negative
it will shoot along the negative
And same thing with the z
as you can see right here
So this gives it a velocity along the object x
yand z
Now keep in mind that this is based on the object
so right here
if I put the z
let's say I put it to 22
it's shooting straight up
But right here
if I hit r twice and tumble
rotate the cube
you can see that now the z axis is pointing this way
So they're going to shoot this way because again
it is based off of the object axis
not the global axis
Pretty cool
So let's say we want particles shooting out of a certain axis or direction
We could use this right here
All right
let me hit Alt R
clear the rotation
and let me put this back to 0
Then we have object velocity
This is pretty cool
this allows for us to basically transfer the velocity of the object to the particles
So this right here is going to add a little bit of the velocity from the object to the velocity of the particles
So first here
we need the emitter object to move
So for example
let's go to frame one
hit the I key and sort of keyframe and just go to frame 20 or so G x
let's move it over and I key insert a keyframe
So now if I play this
you can see I have this right here
But if I change the object velocity and increase this
you can see that I have this right here
And you can see especially the difference towards the end where the particles get kind of shut out
as opposed to if I have it at zero
you can see that I have this right here
And they're not shut out because they don't have velocity from the object
Now
this can be useful if we have things such as a smoke trailing from a moving car or sparks from a grinding wheel
or if you have a car that has sparks flying and you need the object to give the sparks some velocity
we could also put this to a negative and you can kind of see what that does right there
But again
you can see the difference with 0
There is no velocity from the object transferring to the particles
and one right there
there's velocity transferring to the particles
Then right here we have randomize
let me go ahead and delete these keyframes and put the object velocity back to 0
So right here we have randomize
and this is going to randomize the velocity or the initial velocity of the particles
So this is going to give it a more random look and natural appearance
So you can see here
if I play this
we have that
if I put the randomize up
you can see that we have this right here where it's basically randomizing how much initial velocity the particles have
Let me put it to a lower number
like one
And you can see that here
some of them have more velocity
some have less
as you can see right there
So this will just randomize th​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e velocity
Of course
it's going to take into account all of these settings
So if we put the normal up to 5
you can see that the randomize will randomize it based on these settings as well
Pretty awesome
Let me set this back to 0
All right
so with that
that is the velocity settings
very useful and very fun to use in the particles
So with that I'll see you in the next one
ciao for now
avoir


------------------------

# 5_Particle Rotation
All right
in this one
we're going to go ahead and take a look at the rotation settings for the particles
So right here
you can see that we have rotation
Let's go ahead and enable this
Obviouslyas the name implies
this is going to dictate how the particles rotate as they are emitted and move through space
So this can be very useful
for example
if we want leafs spinning in the wind or sparks rotating around as a fly
or again
particles being aligned in a certain direction or rotation
Now
if we take a look at this
we're not really going to see much because here we have spheres
So we can't really see how these are rotated because no matter how we rotate them
they all look the same
So instead I'm going to hit shift A
let's add a Suzanne or monkey
move her to the side
And in the particles
we're going to quickly go under the render settings right here
and we're going to change it from render as halo to object
And then here on the instance object
go ahead and select Suzanne
So now we have a bunch of Suzanne's emitting
which is kind of funny
Let's also go ahead and put the scale right here up so that we could actually see them
All right
very cool
Let's go ahead and toggle the render up so that that doesn't distract us
And on the number
let's put this to something like 20
That way we don't have so many of them
All right
so let's take a look at this rotation and these rotation settings here
So here
the orientation axis is going to determine the axis around which the particles are orientated
obviouslyas the name implies
or basically which axis they're going to be rotated around when they emit
So right here
you can see that's set to velocity here
So the particles are going to align with the direction of their velocity vector
So the direction that they are moving
So this is useful for things such as streamers or hair strands
where they should face the direction that they are moving in
So right here
you can see that wherever these are being emitted from
that's the direction that they are facing
as you can see right here
So these ones right here emitting this way
Suzanneis facing that way
These ones emitted this way
Suzanne is facing this way
these ones emitted that way
Suzanne is facing that way
etc
So that's the velocity hair
Againthis is going to face in the direction of the velocity or the direction that they're going in
You can see here
if we go to velocity and let's change the velocity
let's put the normal to 0 and the x velocity to two
you can see that they will all be facing that way now because the velocity is set to two on the x
so again
they're all facing aligned with the velocity
All right
let me go ahead and put this back to 0 and the normal to one
Then right here we have global and object
so we have global XYZ
and object XYZ
first the global
so let's select global x
the global is going to align the particles along the global x
yand z
Obviouslythis can be regardless of their velocity
So here we could choose global x
yor z if we want these to align uniformly in a global direction
So right here
if we have global x
you can see that they're all facing that way
if we select global y
you can see that they're all facing along the global y and global Z
Suzanne is going to be facing up or down
as you can see right there
So she's facing down along the global Z
as you can see
very cool
So that's the global Z axis
againthese are the global axes
then we have object x
yand z
so with this one
as you probably guessed
it's going to align the particles on the local or the object x
yand z axis of the emitter object
So this is useful if we want the particles to follow the local orientation of the object
for example
hereonce​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ again
if we turn on under viewport
display the axes and go into wireframe
you can see that we have the x axis right here
the object x axis
As you can see
if I go ahead and hit R and Y and rotate this so that the X axis is pointing this way
you can see that it's still going to be orientated or rotated based off of the X axis or the object X axis as opposed to if I put it to the global X axis
You can see that right here
Suzanneis still facing this way because
againthis has to do with the global x axis
But if I change this to object x
you can see that she's facing along the object x axis
If I hit alt R
you can see that she's facing this way just like on the global X
but if I move this around
wherever the X axis is pointing
that's the direction that Suzanne is going to be facing
as you can see right there
And we have the same thing for the object Y
so here she's going to be facing along the object y
as you can see right here
the Y is here
and she's facing that way and the object Z
as you can see here
she's facing along the object z ax​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌is
Pretty cool
Let's hit alt R to clear the rotation
then we have the normal right here
so the normal pretty self explanans this is going to go ahead and emitted from the normals
so you can see here that Suzanne is facing towards the normal or the direction that the face is pointing in
as you can see right there
So once again
if I turn on the normals and right here I turn on the normals of the faces and increase them
once again
they're going to be emitted or rotated based off of these normals as you can see right here
so Suzanne is facing each of these faces when she is omitted as you can see right there
very cool
Then we have the normal tangent
so this also is going to rotate them along the normal
but it's going to take into account the tangent direction
so they're going to be orientated based off of the normal and the tangent direction Now the normal tangent orientation can be useful if we want them to have a more varied rotation motion
because here we could have it rotate relative to the normal and the tangent direction
So for example
right here
if I go to velocity
I could go ahead and put the tangent
let's say I put the tangent to 1
I could change this tangent phase
and you can see that they will be rotated based off of the tangent phase
as you can see right there
Whereas if I just put normal
they are no longer rotated based off of the tangent phase
but with it set to normal tangent
againthe tangent phase is going to affect the rotation as well
Pretty cool
All right
let me put the tangent and tangent phase back to 0
and there we go
so that's all these options right here
You can also see that we have none where right here
they just won't have a rotation or it won't orient them around a particular axis
All right I'm going to set it back to velocity hair
then we have randomized
you could probably guess what this does
this adds some randomness to the initial rotation of the particles
So right now you can see that we have this with it set to velocity here
but if I increase the randomize
you can see that here it randomizes the rotation of the particles
As you can see right here
they are now randomly rotated
pretty cool
Now we can use this to create a more natural or chaotic appearance
for example
if we want leaves falling from a tree
we might want to randomize the rotation so that they're not all falling with the same rotation
So that's the randomized right there
Let's go ahead and put this to 0
then we have the phase right here
now the phase is going to control the initial rotation of the particles
so if we adjust the phase right here
it's going to change the starting angle of the particles around their orientation axis
So you can see right here
if I change this phase
you can see what's happening with the particle
so it's changing the initial or the starting rotation of the particles if I play it a little bit and then change this
you can see that we don't see any difference
And that's because it only changes the initial or the starting rotation at the very top of the settings
Let's put the end frame to one as well
so we have all the particles here
and now if I change the phase because right now on frame 1
they are at their initial rotation
you can see that the phase right here is going to change the initial rotation of the particles
So the phase is especially useful if you need the particles to start at a specific rotation angle
So this is what this allows for us to do
Let's go ahead and set the end
I'm going to put the end to 50
that way they go a little bit faster
then we have randomized phase
You could probably guess what this does
This is going to randomize the phase or the initial rotation
so this is going to make the starting rotation angle different from particle to particle
So if I increase the randomized phase
you can see that right here
it's going to randomize the initial rotation for the particles
Pretty cool
Let me put this randomized to 0 right here
And let me put this to 0 and this to 0
So you can see that right here
we have this right here
Let me actually change this to global x so that they're all facing the same way
That's kind of creepy
So you can see Susanna's facing that way
if I change the phase
once again
this is going to change the rotation of the initial or starting rotation
As you can see right here
since they're all facing the same way
they're all still facing the same way
but they're just changing their rotation
But then I could change the randomized phase
and this will randomize some of them
So you can see that now some of them are rotated further and some are not rotated as much
So that's what this randomized phase does
Again
the phase is going to change the initial rotation
and the randomized phase is going to give a random rotation to these objects or to this emitter
So right here with the randomized phase
we can make them not start at the same angle
which can make it look more natural
Let me go ahead and put the randomized phase to 0 and the phase to 0 as well
Then we have dynamic right here
which is a little checkbox
This one is going to enable particles to rotate dynamically
as the name implies
during the lifetime of the particles
and this can be influenced by things such as gravity wind or collisions
So this means that the rotation is not just set initially
but that it can change over time
So for example
if we have particles such as leafs that need to be spinning as they fall
we could enable dynamic
You can see that here
Without dynamic
we have this right here
But if I enable dynamic right here
you can see that they kind of rotate as they fall
as you can see right there
And again
this has to do with forces such as wind or force fields or gravity
So you can see that here as they're falling
free falling
you can see that they're rotating
whereas here they're all still rotated exactly the same
and it looks a little bit fake
whereas here
once again
they will rotate based on forces such as gravity and force fields etc
If I hit shift A and add
for example
a force field force
bring it down and change the strength to
let's say 1000
that might be too strong
yep
They just went flying away
That's still too strong
Let me just put it to 10
So right there
you can see that here
if I disable dynamic
so I disable it
you can see that Suzanne is still rotated exactly the same
which is kind of weird
But if I enable dynamic
you can see that she will rotate based on the force right there
which again
gives a much more realistic result
Again
you could think of leafs blowing in the wind etc
All right
so that's that
Let me go ahead and delete that and disable dynamic
And then lastly
right here we have angular velocity with two different options
So with the angular velocity
againangular is the rotation
Velocityis the speed at which it moves
So this is going to determine the rotation of the particles as they move
So right here we have the axis
The axis is going to determine the axis around which the particles will rotate as they move
So right here
you can see that first we have none
with it set to none
we will have no angular velocity
so the particles won't rotate
Now
for this to work
we need to re-enable dynamics
So let's re-enable that
otherwise we're not going to have any difference
So again
with it set to none
you can see that they do not rotate
then we have velocity right here with it set to velocity
the particles are going to rotate around the axis of the velocity vector
So again
the direction that they're moving
So right here
if I play it
you can see that they rotate around the direction that they're moving
So these ones are moving forward this way because we have the normal right here under the velocity set to one
so everything is shooting out along their normals
So you can see that these ones are rotating forward this way
these ones are rotating that way
these ones that way
these ones are rotating backwards that way
So they are rotating based off of their velocity
This could be useful if we want to create effects where particles are going to spiral or kind of corkscrew as they shoot out
and you can see that right here
they will continue rotating that way
as you can see
Pretty cool
Now we also have an amount right here
and this is going to control the strength of the angular velocity
so basically how fast the particles will spin around the axis that we choose
So a higher value is going to make them spin faster
So if we put this up
you can see that we get this right here
As you can see
veryvery cool
Let me put this to a lower amount
maybe 2
So you can see we get that right there
So again
the amount is basically going to be the amount or strength of the velocity or how fast they will spin around our given axis
Then right here we have horizontal
So horizontal
you can see right here
if I play this
they will spin horizontally
as you can see right there
And then we have vertical here
they will spin vertically
as you can see right there
So you can see the difference between horizontal and vertical
Once again
we have this amount where we could choose how fast they will spin
So if I put this to zero
you can see we have that right there
If I put it to 0 and vertical
So if I put this to
let's say one
you can see we have that right there
Let me actually put it to like 5
So we have this right here where they're spinning on their vertical axis
As you can see right here
Suzanne is spinning around the top right there
or the vertical axis
And then horizontal
Suzanne is spinning around the horizontal axis
as you can see right there
Then over here we have global x
yand z
just like before up here
So it's the same exact thing
If I have global x
you can see it will spin around the global X
as you can see right there
Let me put the amount higher
maybe not that much to 10
So right here
we'll spin around the global x
this is kind of funny
the global Y right there
Now you can see here
when I change it to global y
it's still rotating around the global X for some reason
Let me try changing the value
There we go
as you can see
it's caching it
so it's still
it was still stuck around the global Y
so it was still stuck around the global Z
so it was still stuck around the global X
so it was just changed the value and it will update it
So the global Y and global Z
once again
right there
you can see global z
if it's still rotating around one of the other axes
just update this to update the cache
And there we go
veryvery cool
And then we have random right here
which will just go ahead and choose a random axis for the angular velocity
Now you can see that right here
for some reason
it's not updating
There we go
when I was changing the amount
it wasn't updating
So if that doesn't update
just move the cube and then left click it and confirm it
and then it will update it
So you can see right here
the random obviously makes them spin around a random axis
as you can see right there
veryvery cool
Once again
you can see I put it to zero
it's not updating
so I'm just going to move that and now it's updated
So keep in mind the cache
sometimes it doesn't update it
but moving the object and left clicking it and confirming will always update it from what I've noticed
So that is the rotation options very useful as you can see
I'll see you in the next one
Ciao for now a


------------------------

# 6_Newtonian Physics
All right
let's go ahead and check out the physics section
So once again
over here in the physics section
you can see that right here
we have several different physics type
We're going to take a look at these one at a time in different videos because there's quite a bit to go over
So let's just leave it to the default Newtonian right here
Now the physics is going to go ahead and dictate the kind of physical behavior the particles will follow
So right here
we have it set to Newtonian
Newtonian is going to go ahead and follow Newton's laws of motion
meaning that these are going to be influenced by this is like gravity or wind
And this is going to give us the most realistic type of particle motion with it set to Newtonian
And that's why it's the default
Once again
we'll take a look at the other ones in other videos
but here
let's take a look at the settings for the Newtonian physics type
First we have the mass
this is going to be the mass of the particles in kilograms
as you can see right there
So this is going to affect how much these particles are influenced by things like gravity and wind and force fields
For example
with a mass of 1 kg
you can see that we have this right here
and if I hit shift A and add a force field force
and I move it to the side
and on this force field
I go ahead and put a strength of 10
You can see that here
Let me go back to my particles with a mass of 1 kg
These are affected like so because they're not very heavy
but if I put these to a mass of 10 kg right here
you can see that these are affected less by the force field
Or if I put it to 0．1 kg
this is going to be affected more by the force field
So again
this is going to be the mass of the particles or how heavy the particles are
So the heavier they are
the more sluggish they will be and the less they will be influenced by things such as force fields or gravity
Then we have multiply mass with size right here
which is a checkbox
Now to see this
let's go ahead and add Suzanne once again
So I'm going to add Suzanne
and right here I'm going to once again go to the render
change this to object and select Suzanne as the object
Let's then go ahead and put the scale of Suzanne up
And let's put the scale randomness up quite a bit like so
so that we have randomness or different sizes of Suzanne
So this right here
let me go ahead and toggle that up
The multiply mass
widthsize
it's going to go ahead
If we enable this
it's going to take the size of the particle
and it's going to multiply the mass with the size of the particle
So the larger the particle
it will have more mass
and the smaller the particle
it will have less mass
So let's say a big Suzanne has a size of 2
Wellit will multiply two times
Let's put this to 1
two times 1
If a particle has the size of 0．1
it will multiply ．1 times one
So the bigger particles will have more mass
smaller particles will have less mass
So this will make them behave differently under the same force that we have here
So right here
you can see we have this
if it's unchecked
all the particles have the same mass
but if I enable multiply mass with size
you can see clearly that the smaller ones are being blown away faster or further or with more force because they have less mass
because again
it's taking the size of the particles and multiplying it with the mass
So smaller particles have less mass
bigger particles have more mass
pretty cool
All right
let's go ahead and uncheck that
All right
now for this forces area
I just added a new key with a new particle system
That way everything's reset to the default
So first we have Brownian right here
Now the Brownian is going to add random movement to the particles
it's going to kind of simulate a jittery or chaotic motion similar to how particles are going to move in fluid due to the collision with molecules in the fluid
So right here
you can see with the Brownian of zero
we get this here
And if I put the Brownian all the way up to 20
we get this right here
Now we can't really see that much of a difference
so right here
if I hit shift d x and duplicate the cube and move it over a little more
I could go all the way up here to the particles
click the two to make it a single user so that I could change the settings on just this one
And on this 1 I'm going to put it to 0
So this one has Brownian of 20 and this 1 0
Let's also move the cubes to make sure that it updates the cache
And now if I play this
you can see the difference right here with a Brownian of 20
We have this right here
Againit gives it a jittery or chaotic look or movement to the particles
And at Brownian of zero
we have this right here where they're not as chaotic as you can see right there
Pretty cool
All right
let's go ahead and delete this one right here
I'm gonna put the Brownian back to 0 right here
All right
then we have drag right here
Now you can see in my scene on my cube
once again
I added a Suzanne and in the render tab
I just changed it to object and Suzanne with a higher scale and a scale randomness once again
So right here
the drag is going to go ahead and act or simulate air resistance
So this is going to slow down the particles as they move through the 3D space relative to their speed that they're going at and their size
So you can see that right here
I have some Suzanne's that are smaller and some that are bigger
Nowwithout any drag
there is no air resistance
So they're all falling at the same kind of speed
But if I put the drag all the way up to one
you will see that the bigger ones have more air resistance because there's more air pushing around it and slowing it down
and the smaller ones will fall faster
As you can see right here
all of the smaller ones are reaching the bottom faster than the big ones
Again
the drag is relative to the size of the particles and also their speed
So once again
you can see drag of zero
they all reach the bottom at the same time drag of one
the bigger ones have more drag or air resistance
as you can see right there
All right
let's put the drag to 0
then we have damp right here
and this is going to reduce the velocity of the particles
This can be similar to the drag
but with the damp we could reduce the velocity of the particles to a complete stop
So right here
for example
damp of 0
we have this
If I put the damp all the way to one
you can see that they've just stopped their velocity
as you can see there
Or I could put it to point two
and you can see that right here
it does that again
this is going to dampen or slow or reduce the velocity
as you can see right there
very cool
All right
let's put that to 0
Then down here we have two other section
so let's go to deflection
So right here under deflection
we have size deflection
this one when enabled
it's going to take into account the size of the particles when they collide with other objects
so large particles will collide earlier or at a greater distance than smaller ones
So right here
if I hit shift A
let's add a plane
bring it down
scale it up in edit mode
and on this
let's make it a collision
and let's go back to the particles
So right here
you can see that if I play this
these colliding with the floor
I enable size deflect
right here
you can see the difference where right here
if I play it
you can see that the particles are kind of going through the floor
Againit's not taking into account the size of the particles
but if I enable size deflect right here
you can see that the particles are no longer going through the floor and it's taking into account the size of the particles pretty self-sexualization
And so this size deflect can be useful
againfor example
if you're simulating rain and there's larger and smaller raindrops
and you need the big raindrops and the small raindrops to hit according to their size
So again
this is going to use the particle size in the collision or deflection
Then we have die on hit
this is pretty self-sexualization
and if we enable this
the particles are going to be removed or disappear as soon as they collide with another object
As you can see right there
they are disappearing
So you'd want to use this when you need particles to disappear upon impact
such as
for example
if you have sparks hitting the ground and then extinguishing
So you can see what that does right there
Whereas these right here
as you can see
let me move this right there
So you can see right here
these are just bouncing up
die on hit
they're going to disappear
Pretty cool
Then we have collision collection
same thing as before
this is going to allow for us to specify a CERN collection of objects that these particles will collide with
and only objects in that collection will interact with the particles
So for example
if I duplicate this plane right here and put it up here right now
these will interact or collide with this plane
Let me go ahead and remove the die on hit
but if I go ahead and put this plane
select it M key
move it to a new collection right here and name it collection 2
If I go over here
this plane is in collection one
but this plane is in collection 2
So here
if I select the first collection right here
it's going to go ahead and only collide with this plane
If I select collection 2
it will only collide with this plane
Again
This allows for us to specify which objects it will collide with or which collection of objects it will collide or interact with
as you can see right there
All right
and then we have integration right here
Let me go ahead and delete this plane as well right there
and let me remove collection
So here with the integration
you can see we have the integration drop down right here
So this integration right here
you can see we have several different options in the drop-down
This is going to go ahead and determine the method that Blender is going to use to calculate the motion of the particles over time
So different methods
which we could choose right here
are going to affect the accuracy and performance of the simulation
You can see it's set to midpoint by default
Nowmidpoint is a more accurate method
and it's going to balance speed and precision
So this is a good choice ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌for most simulations
but we also have Euler right here
So Euler is going to be a more simple method that is fast
but it's going to be less accurate
And this could often result in errors and complex simulations
Now
right here
you can see that there's not any difference really between the two
because this is not a complex simulation
But just know that Euler is less accurate and midpoint is more accurate
Then we have verletzt here
this one is useful for simulations where you want to maintain stability and minimize errors over a long period of time
This is especially useful if it involves things such as constraints like cloth
soft body dynamics
or particles with spring like behaviors
Now
once again
here we don't really see a difference as our system or our particle setup is exactly the same
And then lastly
right here
we have Rk 4 sounds like the name of a gun or something
So right here Rk 4 is going to be a highly accurate method
It stands for rungs kuua fourth order
Now don't ask me what that means
I have no idea
but this one is slower and it's going to be more computationally expensive
So this one is similar to midpoint
but it's going to be slower and more accurate
So you can use this method where you need the accuracy to be very accurate
So again
quick breakdown
We have Euler
which is the least accurate
We have midpoint
which is accurate and fast
and we have Rk 4
which is the most accurate
but also will be the slowest
And then of course
we have Verlet
where if you have other constraints
such as cloth and soft body
this one would be the best
By default
it's set to midpoint
Nowfor the most part
you won't really need to change this
but it depends on the complexity of your particle system
Then we have time step right here
this is going to be the amount of simulation time in seconds that passes during each frame
So you can see right here at ．04
we have this right here
If I increase this
you can see that we're going to have more time that passes between each frame
so it goes a lot faster
If I increase this even more
you can see that we get this right here where it just automatically goes to the floor
If I put this to 0 again
this is going to be the amount of simulation time that passes during each frame
So here you can see that there's less time passing during each frame
and it's a lot slower
So that's the time step right there
Let me go ahead and put it back to the default of ．04
Right here
right there
Then we have sub frames right here
This is very similar to in the rigid body world we had right here
the sub steps per frame
So it's very similar to that
where this right here
the sub frames
it's going to go ahead and increase the number of calculation blender makes between frames
So the more subframes we have
it's going to lead to a smoother simulation
especially if we have fast moving particles
But obviously
it's going to also increase the simulation time
So here
iffor example
our particles are moving fast and they're skipping over some collision objects
we could increase the subframe
So again
this is going to increase the stability of the simulation
especially if you have faster moving particles
Obviouslyright here
it's not going to do much because the particles are not moving fast
But if you have fast moving particles and you notice that they're going over some collision objects
you could change this subframes
Alrightthat's it for these settings
I'll see you in the next one
Ciao for now
avoir


------------------------

# 7_Keyed Physics
All right
in this one
we're going to go ahead and take a look at the keyed physics type
which is really
really awesome
So right here
let's go ahead and go once again to the particle settings
add a new particle settings
And right here under the physics
we could change this to keyed right here
Now the keyed physics type is going to allow for us to animate the par​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ticles by making them move from one key or state to another
This is great for creating controlled particle system animations
such as moving particles from one object to another
or making them change from one shape to another
Now here to actually get this to work
because right now
if we just play this
we don't have much happening
We actually need it to work in conjunction with other particle systems
So let's move in top view the cube to the side over here
And on this particle system of this keyed particle system
let's go ahead and put the end frame to 1 and a lifetime
let's put it to 250
Then let's hit shift A
let's add in a monkey or Suzanne
move her to the side
and let's add a new particle system
On this one
we want to put the physics to none
and we just want to put the same settings that we have on this keyed particle system
so we want to put the end frame to one and the lifetime to 200 as well
Then let's add two more objects
So let's hit shift A
let's add a UV sphere and shift A
let's add a torus and move it to the side
We're going to select both of these objects
shiftselect Suzanne and ctrl L and copy modifiers
so that now these three objects have this same particle system that is set to none on the physics
And this cube is set to the keyed particle system
Let me go ahead and save this quickly
So now here
let's go down here
You can see that right here we have the same options of the mass and the multiply mass wid size that we took a look at in the last video
So once again
make sure to watch that last video where we go over these
But right here under relations
this is the important tab right here
So this is where we set up the relationship for where this particle system should go
Let's click the little plus icon right here and right here
you can see that we can set a target object
Right now it says invalid target because we didn't set anything
So the target object is going to be the object that we specify that the particles should move to as a target
So right here
we need to select a target object for this key particle system to work
So right here
if I click the little dropper and select Suzanne as the target
you can see that here
If I play this
we don't get much
And the reason we don't have much right now is because you can see that all of these particles that were here are now here
You can see that right here
if I exit this and reselect Suzanne
the particles that were here are in the same exact spot as these particles right here
Now we're going to see this a little bit easier once we add the next one
So right here
let's set up our second object
And again
this is all going to make sense as we look at it
If I click the little plus icon
I could go ahead and select the sphere as our second object
and then let's click the plus icon again and select the Taurus as our third object
So here we have Suzanne
the sphere and the Taurus
So here
what's going to happen is if we play it
check it out
we have these particles going from Suzanne to here
Technically they're going from the cube to Suzanne
and then to the sphere and then to the Taurus
As you can see right there
Pretty freaking awesome
Now
it's very important the amount of particles to be the same on this particle system
And this one right here
if they are not the same amount
againwhat's happening is it's taking these particles and aligning each of these thousand particles to these thousand particles here
You can see that here
If I go ahead and change this to
let's say 22 for this
So with it at 22
we are now going to have 1000 particles from this one stacked on top of 22 different spots
So right here
it looks like there's 22 particles
but there's actually 1000 from here
but they only have 22 locations to go
So as you can see
we only have these
So here there's a bunch that are stacked on top of each other
So if you wanted to have 22
you would change both of these numbers to 22 so that you have actually 22 particles
But if I put this to 1000 right here
I want this to also be at 1000 so that these thousand particles are taking over or going where these thousand particles are
Basicallyit places these on top of these ones right here
And I put it to 100
not 1000
I was going to say
that doesn't look like 1000
All right
there we go
brilliantso check that out
pretty awesome
Now here
if we don't check use timing
it's going to use the time of the lifetime of the particles
So you can see that right here
it takes 250 frames or the lifetime to reach all the way to the end
as you can see right there
But if we put the lifetime on this key particle to
let's say
as you can see right there
So this lifetime on the keyed particle is going to dictate kind of the lifetime or how fast this goes between objects
Let me put this to 250 again
So this lifetime will dictate how fast it goes
We're going to take a look at the used timing and some of these other options here in just a second
But before that
we have loops
So for example
if I put this lifetime to 20
this loops is going to dictate how many times it loops between these objects
So obviously
with it set to one
it's only going to go through one time
If we set it to two
you can see it's going to loop through two times
If we put it to 5 etc
it's going to loop through five times
Let me put this to a little bit higher lifetime so that it doesn't go so fast
And you can see that we have that right there
pretty cool
So again
the loops is how many times this can loop through the objects
All right
let me go ahead and put the loops back to one
Nowright here with just setting this lifetime
we don't get much control because we could just set how fast it goes for all of the objects or all of these particle systems
As you can see right there
we don't have much control
So we could click on use timing
You can see right now this timing is grayed out
But if I click on use timing
we can now use this timing right here
Before we take a look at the timing
we also have this system right here
This is going to dictate the particle system that is going to be used for the target object
So for our target objects right here
obviouslyyou could have multiple particle systems
as you can see right there
So here we're able to dictate which particle system it's going to use
For example
once again
let me actually add this back
If I add a particle system
let me add this one with an amount of one
I'm going to put the end frame to one and the lifetime to 250 right here
Let me change it to none
And let me go back to my keyed particle system
Let me turn off use timing
And right here now Suzanne has two particle systems
The first one is the particle system with 1000 particles
as you can see right there
But if I put it to the second one right here
this is the one with 20 particles
as you can see right there
So you can see right here
it's using the first particle system
and right here it's using the second particle system
as you can see
All right
let me set this back to one
and let me remove this second particle system
All right
let's re-enable use timing right here and then right here
With use timing
it enables the timing here
So with this timing
we're able to control when the particles should start moving towards the key to object and how long they should stay there
And this is measured in frames
So here
let's go ahead and put the time on the first object to one
That way all the particles are on this object on frame 1 and the duration to 0
That way they stay on this object for 0 frames
Let's then go to the sphere right here
Againthe time is going to be how long it takes to go to the sphere
So if we put this up to
let's say around 30
you can see that here
If I play it
it's going to take 30 frames for these particles to go from here to here
If I put it to 2
it's going to take two frames
As you can see right there
it kind of breaks it
If I put it higher to 70
it's going to take 70 frames for these to go from here to here
So let's put this time to 30
And then the duration is how long they're going to stay on this sphere
So I'm going to put the duration to 20 right here
So now we have it taking 30 frames to go from here to here
and then a duration of 20 frames to stay here
Let's then go to our third object and the time right here that we want it to take
Againthis is in frames
So because the last one is here for 50 seconds total
againit takes 30 seconds to get there and then stays there for 20 frames
not seconds
It takes 30 frames to get there and 20 frames to stay there
We want to start this time after frame 50
So if we put this to 70 right here
it's going to take 20 frames because again
it's going to be a 20 frame difference
So if I play this
it's going to take 30 frames to get here
it's going to stay for 20 frames and then take 20 frames to get here
Pretty cool
If I put the time higher
let's say to 150
it's going to take 100 frames to get from here to here
So we can see if we look at the timeline to get from here to here
againyou can see it 30 frames
So as you can see right here on frame 30
they're all here
They're going to hold for 20 frames here
and then they're going to take 100 frames to go from here to here
as you can see right there
Now
the lifetime of these particles is not long enough
So let me put the lifetime up to 250
And then let me replay this so you can see we got that
And then it's taking 100 frames to go from here to here
So keep in mind that you have to take into account the previous time and duration
Because here
if we just put the time
let's say you want it
you think you want it to take 20 frames to go from here to here
If we put this to 20
it doesn't work like that
So as you can see here
it's not working
it's kind of broken
It's basically the frame amount
So if you want it to take 20 frames
you have to see before this has taken 30 frames to get there and it's holding for 20
so we are on frame 50 by the time that this is over
So if we want this to take 20 frames
the time would be frame 70 because then from frame 50 to frame 70
it will transfer from here to here
and then we can make it hold if we want
but that's the end of it
so we don't need it to hold and you can see that we get this right here
pretty cool
Now this is really cool
we're going to be using this later when we do the practical examples
we're going to create a cool kind of sandman animation and we're going to make sand particles forming into a human
which is going to be super sweet
but that is the keyed particles again
allows for you to control the particles and make them change from one form to another
which is awesome
So with that
go ahead and mess around with it
You can also see here that we have these little up and down arrows
so we could change the order of these
for example
if I want this one to be second
I could click the little up arrow and this one will be second
And now you can see that it goes directly to the Taurus and then it will go to the sphere
although now the timing is all messed up
So I would have to adjust these and change the timing of this
make this timing higher like that
and there we go
So again
feel free to mess around with this
It is really awesome
Of course
you could remove these by clicking on the minus icon or you could add more of them etc
So with that
that is the key physics type
I'll see you in the next one
Ciao for now
oh


------------------------

# [[Source_4_Particle Systems_Boid]]

---



# 14_Fluid Particles Part 1
All right
it is time to take a look at the last physics setting
which is the fluid setting
So in the particle system
let's go ahead and under physics
select the fluid
Now you can see that this has quite a bit of options
but we're going to go a little bit faster than we did on the voids
So right here
let's go ahead and hit Gz
bring this up
I also want to hit shift A
let's add a UV sphere
move it to the side
and I'm going to set this UV sphere as the object
So here under render
select object and select the sphere as the object
Let's put the scale up a little bit so that they're a little bit bigger
And let's add a floor shift a
add a mesh plane
scale it up in edit mode and add a collision to it
Now if we play it
we have this right here
You can see that the balls are bouncing
so I'm going to put the stickiness to 10
that way they don't bounce and they just fall like so
Also I'm going to increase the lifetime of these particles to 1000 right here
All right
so let's take a look at this
Let me increase the floor a little bit because there's a lot of spheres
All right
so here in the physics tab with it set to fluid
the fluid particle system or physics allows for us to simulate fluid like behavior using particles
as the name implies
So here you can see that we have the mass and the multiply mass with size
This is the same as before
so I'm not going to go over it again
As we already went over this
Then we have Sph solver right here
Sph stands for smooth particle hydro dynamics
Now right here
you can see that we have two options for the solver
Againthis is just how it's going to solve this fluid physics type
We have double density and classical
You can see that it's all the same options
but on double density
we have this added springs option
They will act slightly differently on both of these solvers
but we're just going to stick to the double density right here as that is the default
All right
so the first option we have here is the stiffness
So the stiffness is going to control how incompressible the fluid is
so the higher the stiffness
the more it's going to make the fluid act more like a solid
so it's going to resist compression
and if we put the stiffness lower
it's going to allow for it to compress more easily
So for example
hereyou can see if I put this to 0 and play it
we have this right here
and if I put this to 10 right here and play it
you can see that it's more stiff
so it's not acting as fluid or not as compressible as you can see right there
So that's the stiffness right here
Let's go ahead and put that back to one
Then we have the viscosity
The viscosity is going to determine how thick the fluid is
so the higher the viscosity means the fluid will be more thick and resist motion and flow more slowly
you can think of honey
honey has a higher viscosity than water
If we put the viscosity lower
it will flow more freely and it will be more fluid like water
So here you can see with the viscosity of 0
we get this right here
it's more fluid and it's not as heavy or thick
and if we put the viscosity to like 10
you can see that's more thick and it acts more like something like honey or like goo
So that's the viscosity
Then we have the buoyancy right here
The buoyancy is going to add an artificial buoyancy force based on the pressure differences inside the fluid
Now the buoyancy force is going to act in the opposite direction or opposite to the gravity
and it's going to make lighter parts of the fluid rise
So you could think of simulating or doing the effect of bubbles rising in the liquid or less dense fluid layers floating on top of denser ones
So you can see the buoyancy of 0 right here
We have this
and if I put the buoyancy to one
you can see that right here
againit's acting the opposite way of gravity
So you can think of bubbles rising to the top right there or rising in the liquid
And you can see that these right here
because they're clumping together
they become heavier and they fall
But these right here
since they're not clumping
they are rising
Let me put this to about a 0．4 or 0．5
and you can see what we get right there
So this is kind of like a foam like effect of the bubbles in the foam rising and then the water falling or the heavier parts of the foam falling
So that's the buoyancy right there
Let's go ahead and set that back to 0
Then right here we have forces
so we have the Brownian right here
Once again
the Brownian is going to add random jittery motion or movements to the particles
So this can simulate the effect of small random forces acting on each particle
You can see here with the Brownian of zero
we have this right here
and if I increase this Brownian to 10 or 20
you can see that we have this right here
Nowit's a bit tricky to see
but you could see it
especially when I increase this as it plays
So you can see right here I'm going to change this value as it plays and you can kind of see the difference in the jittering of these particles
So right here
you can kind of see what's happening
So take a look at the particles right here
When they start to come over here
how they're moving right there
And if I put this to 20
you can see that there's a lot more jittering motion to it
So that is the Brownian
Againit's going to add more chaotic random motion to the particles
All right
let's put this back to 0
then we have drag right here
This is going to simulate air resistance or any similar resistive force that is going to slow down the particles as they move
So right here you can see a drag of 0
We have this right here
if I put the drag up to one
you can see that right here
it's resisting and has a little bit of a longer time to fall down
As you can see right there
there is more air resistance
So here
if I bring this up a little bit more
you can see what that looks with at 0
And if I put this to one right here
againit's very subtle
you can especially see it if I change this value as it's playing
so watch how it changes from a drag of 0
where the particles fall much easier
And a drag of one
the particles have more air resistance
So right here
watch as I change this and as it plays
so you can see the difference right there
especially when I change it from one to zero
you can see that the particles speed up
So watch what happens when I'm at a value of one and change it to 0
You can see how they speed up
Againit's pretty subtle
but that's what the drag is
it's the air resistance
Now
obviously the drag or the air resistance also has to do with the mass
So you can see here
if I put the mass down to 0．1 kg
we could see it a lot better
So here with the drag at zero
you can see we have this
And if I put the drag all the way to one
you can see that we have this right here
And there's a lot more air resistance because these spheres are much less heavy
So that is the drag
Let me go ahead and put this back to one and this to 0
And then we have the damp or the damping
The damping is going to reduce the particle's andocs over time
so it's basically going to damp their motion
So this means that the particles are going to gradually lose their speed until they come to a stop
You can see a damping of 0
We have this right here
And if I put this up to one
you can see that here
they just dampen and they lose their speed right away
That's actually kind of cool
Looks like a molecule or something
If I put it to like 1．4 or so
you can see that right here
they gradually lose their speed and slow down
as you can see
Let me put this to a little bit of a lower number and you can see what that is giving us
So this could be useful if we want to gradually slow down particles until they stop
For example
if we want to simulate something where the particles need to settle down naturally
as you can see right here
and of course
we could animate this value
So for example
I could put a damp of 0 on frame 1
and then on frame 80
I could put a damp of one and put a keyframe there
And now you can see that we get this kind of effect right here
which is kind of cool
It's kind of like a foam
kind of a foam that's forming and expanding
All right I'm going to remove these keyframes by hitting Alt I to remove the keyframe
So again
just hovering my mouse over here
we could also remove the keyframe in the timeline
but you could hit Alt I
All right I'm going to put the damp to 0
then we have deflection right here
So again
we took a look at this earlier
but the deflection is going to control how the particles are going to interact with other objects in the scene
such as our collision floor
So right here we have size deflect
With size deflect
it's going to basically take the particle size into account when it collides with objects
This means that the larger particles are going to collide earlier or at a greater distance from the object's surface compared to the smaller ones
Nowright now
they're all the same
So let's go to render and increase the scale randomness right here
So right now
if I play this
you can see we have bigger and smaller ones
and if I play this without size deflect
you can see it interacts like so
But if I enable size deflect
againit's going to take into account the size of the particles
And now you can see that right here
they're not going through the floor
And you can see
once again
it takes into account the size of the particles
whereas here it doesn't take into account the size
and they're all just kind of halfway through the floor
So we could use size deflect when we want it to be more realistic
againconsidering the actual size of the particles
All right
let's go ahead and put the scale randomness back to 0 right here and deselect size deflect right there
All right
then we have die on hit again
same thing when we enable this
the particles are going to die once they hit the collision object
And then we have collision collection
Once again
same exact thing
We could set objects in different collections and then select that collection so that the particles only interact with those collision objects in those collections
All right
let's go to integration
Nowright here on the integration
you can see that these are the same exact settings as on the Newtonian physics type
So right here
if I add a new cube and go to the physics right here
you can see under Newtonian and the integration
we have these same exact settings
So we've already gone over these
I'm not going to go over them again
but if you want to know what these do
againcheck out the Newtonian settings where we go over all of these
You can see that we do have two extra options here on all of these
So you can see on all of these right here
let me change it back to midpoint
We have adaptive here
Now adaptive
as you can see
it's to automatically set the number of subframes
So if we enable this
it's going to automatically set the number of subframes based on this threshold right here
So right here
the threshold
againworks in conjunction with adaptive
As you can see right there
it's grayed out if we don't have this selected
and the threshold is going to go ahead and basically define the tolerance level for how much the simulation can deviate from exact results
Now
a lower threshold right here
it's going to mean that the simulation will be more strict about maintaining accuracy
And this means that we will have smaller sub frames and time steps
whereas a higher threshold right here allows for more deviation and potentially larger subframes and time steps
So we could adjust the threshold right here depending on if we need more performance or we need more accuracy
Againa lower threshold is for higher precision simulations
while a higher threshold is going to be for less critical animations
​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌allowing the simulation to run faster
So for example
hereif I put this to zero
you can see we have this right here
If I put this to 10
you can see that we have this right here
Nowright here
obviouslythis is a very simple simulation
so this isn't going to do anything really
once again
because this is relatively simple
But if you have a more complex simulations and you want more precision
you would bring this threshold down to a lower number
Again
this is pretty simple
so it doesn't really matter
All right I'm going to deselect Adaptive
Once again
if you want to know what all of these are
check out the Newtonian particle system section or lesson
I'm gonna leave it to midpoint
All right
and we're almost done with these settings
I think I'm going to end the video here because otherwise it will be a little bit too long
but in the next one
we'll take a look at these last three tabs right here
and we will finish with all of these physics settings
Don't worry
these are the longest ones and the ones with most options
This physics tab right here
but right here
all of these will be relatively quick
So with that I'll see you in the next one
Ciao for now


------------------------

# 15_Fluid Particles Part 2
All right
and this one
we're going to take a look at the last of the fluid physics settings
So right here
the next option we have is the springs
Right here
The springs is going to basically go ahead and control the strength of the springs connecting the fluid particles
So you could imagine invisible springs connecting these particles to be closer together or more strongly connected and resisting separation
or more loosely connected and not resisting separation as much
So you can see the force at 0
We have this
And if I bring the force up to
let's say
fiveyou can see we have this
If I bring it all the way to 10
you can see we have this
So you can see the difference with 10 right here and with it set to 0 right here
Again
this is the force of the springs connecting the fluid particles
which is going to determine how much they resist separation or how much they're connected
So here we could create more elastic like materials or materials that are more tightly bound and more stiff
So here I'm going to put the force to
let's say
two
All right
Then right here we have visco elastic springs
Now when this is enabled right here
we get options right here
Now when we enable this
you can see that we can use these settings and when enabled it's going to use the viscoelastic spring instead of the traditional hooks lost springs
Now the viscoelastic springs is going to combine both elastic or elasticity and viscous properties
or it's going to have a high viscosity
Againviscous or viscosity means that the liquid is very dense and thick
kind of like honey
So viscoelastic springs is combining elastic or springiness and viscous or thick
heavygluey like substance
kind of like honey properties together
This means that it can deform and return to shape
but with some resistance
So you can see here with this enabled and these to the default
we have this right here
All right
let's take a look at these settings
And once again
we could use this for particular materials that have flowing like and elastic like properties such as certain polymers or biological tissues
etc
So here the first option we have is elastic limit
This is going to control how much a spring needs to be stretched or compressed before it begins to change its rest length
So right here
you can see that at 0
we have this right here
and if I put this all the way to one
we have this right here
So here we could set a higher elastic limit for materials that can be stretched a lot before permanently deforming
such as rubber
So you can see the difference with the elastic limit here and the elastic limit here
Againthis sets the limit that it needs to be stretched or compressed before it begins to change its resting length
So again
you can see that these spheres or particles are stretched a certain amount from each other
and then they reach their resting length
Again
you can think of a rubber that you stretch
and then once you stretch it enough
it reaches a certain length where it just rests in that newly stretched position
So this is the limit that it could stretch elastically
All right
let me put this back to ．1
Then we have plasticity
So plasticity is going to define how much the spring's rest length can permanently change after the elastic limit is crust
So higher plasticity means that the material will deform more permanently
so we can put a higher value on plasticity
on materials that change shape more permanently under stress
such as clay or soft metals
So you can see here with the plasticity at 0．1
we have this and plasticity at 100
you can see we have that
which is way too high
let me put it to like 4
and you can see we have that right there
if I put it to 11 right there
you can see we have this right here
Again
this is going to be how much the springs rest length can permanently change after it reaches or crosses this elastic limit
You can see if I change the elastic limit
that it also changes how the plasticity works
because now the elastic limit is higher
then we have initial rest length right here
so if we enable this
it's going to go ahead and use the initial length of the spring as its resting length instead of using the length based on the particle size
So you can see here
if it's unchecked
it will use the length of the particle times 2
but with this
it's going to go ahead and use the initial length of the spring
So we could use this to have more controlled simulations where the starting distance between the particles is important for their behavior
So you can see right here with this enabled
we have this right here
and if I disable it
you can see we have this right here
All right
very cool
Then lastly we have frames right here
now the frames is gon na control how many frames after a particle is born or after a particle appears that the springs are created for it
So a setting of zero means that the springs are created immediately on frame 0
But if we increase this to
let's say
frame 45 or so
it means that the springs are going to be delayed for forming and then they will only be created or formed after frame 45
So this means we could create effects where the fluid particles initially move more freely
but after they form the springs
they move more structured
So right here
you can see they move like so
And after frame 45
the springs are created as you can see right there
let me increase this a little bit right there to frame 100
And you can see what happens there
Very cool
of course
if I put this force up a little bit and let me put this to like 33
I put the force up to like 10
you can see right here
and then after frame 33
you can see that the springs are formed
as you can see right there
So again
that is the frames right there
Then under advanced
you can see that right here we have rest length
Now the rest length is going to define the natural length of the springs connecting the particles when they are at rest
this is going to mean that no external forces are acting on them
Nowthis value right here is going to determine how far apart the particles are when the system is in equilibrium or at rest
So you can see right here with the rest length at 1
let me put this force down into 2 because it's way too much
you can see the rest length at 1
let me put the frames to 0 as well
So rest length at one
if I change this and increase this
you can see that the rest length is much longer for the springs
As you can see it kind of pushes them out as well
so if I play it with the rest length of zero
you can see that the particles are really clumped together because the spring's rest length is 0
So there's no spacing between the particles
But if I play this and start to increase this
you can see that they space out from each other
So again
you can see if it's at 0
and then I increase this
the springs rest length or how long the spring is when the particles are resting is being increased
So again
you can see at zero
they're clumped together
And then as I increase this
they have longer resting springs
So again
the rest length is basically going to adjust how tightly or loosely the particles are connected
So a lower rest length is going to pull the particles closer together
as you see right here
creating a denser or more compressed material
and a higher rest length is going to pull these or push these apart
resulting in a looser or more expanded structure
as you can see right there
Then we have factor rest length right here
which is already enabled
When this is enabled
it's going to go ahead and multiply this rest length factor by a certain value
and this value is going to be the size of the particles
As you can see right here
spring rest length is a factor of two times the particle size
So when this is enabled
it allows us to multiply this value based on the particle sizes
So right here
you can see without this enabled
we just have this right here
but with this enabled
especially if we have particles that are different sizes
So if I put the scale randomness
this factory rest length is going to allow for us to multiply this rest length based on the size of the particle
So we could enable this factor when we want the rest length to dynamically adjust based on the particle size or other factors
And again
this is going to make the simulation more adaptive
And again
this is very useful when we're working with particles that have varying sizes
as you can see right there
because it's going to ensure that the spacing between the particles remains consistent in relation to their sizes
So you can see right here with the smaller and bigger ones
we have that
But if I turn this off factor rest length
you can see that we have this right here
And you can see that the sizing is not relative or in relation to their size
It's just kind of all over the place
Whereas here
this takes into account the size of the particles
All right
very cool
So that's the springs settings and the visco elastic springs
Let me go ahead and disable this
And on the springs I'm going to go ahead and put the force to 0 and toggle that up
Then we have advanced right here
So here in the advance
this is going to control how the particles interact with each other in terms of forces
viscositydensity
and radius
So first we have repulsion factor right here
this is going to go ahead and control how strongly the fluid particles repel each other
basically how much they resist clustering together
So a higher value means that the particle will push each other away more strongly
leading to a more dispersed fluid
So here we can see it's set to one
You can see what we get right here
let me put the scale randomness back down to 0
So you can see we have this right here
repulsion factor
and they're not repulsing themselves that much
But if I put this to two
you can see right here
they will repulse themselves or push themselves away from each other more
whereas if I put it to zero
you can see that we have this right here
very cool
Then we have factor repulsion right here
When this is enabled
it's going to treat the repulsion as a factor of another
In this case
it's going to treat it from the stiffness
so it's going to allow the repulsion strength to scale dynamically based on the stiffness parameter
as you can see right there
So right here
if I go back up
you can see we have stiffness
If I increase the stiffness
Tolet's say
You can see that we have this right here
And then here
it's going to go ahead and scale this repulsion factor based on the stiffness
So you can see here
if I change it
we get this right here where it's repulsing a little bit more
And if I put it to zero
you can see that we get this right here where it's repulsing a little bit less
And you ca​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌n see
especially when I change this value in real time
you can see at 0 and at one how it's changing the repulsion
And again
if I change the stiffness to one
you can see that right here
it's going ahead and doing just that
Nowif I put the stiffness back to 10
now if I turn off factor repulsion right here
and I change this
you can see it's going to repulse them or push them
but it's no longer taking the stiffness into factor
So now this stiffness no longer influences how much it is repulsing them
You can see here
we get the same effect with a value of one stiffness
as you can see right there
and a value of 10 stiffness
as you can see right here
So you can see right here
it's the same amount of repulsion
But if I enable this
you can see that there's a big difference
All right
very cool
Let me go ahead and set this back to one
And I'm going to put the stiffness back to two or so
Then we have stiff viscosity right here
This is going to go ahead and add viscosity that specifically acts when the fluid is expanding
And right here you can see that we have factor stiff viscosity right here
So this is going to multiply the original viscosity
So right here you can see we have​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ the viscosity
Again
it's going to do the same kind of thing
but take into account the viscosity here
So here you can see that if I go ahead and turn this off and play it and change the stiff viscosity right here
you can see that we get this right here where it has more viscosity or less
againviscosity or the viscous of the fluid is how heavy or thick it is
Again
water has low viscosity
Something like honey or goo has higher viscosity
Now if I enable factor stiff viscosity
it's going to multiply this by this viscosity
So if I put this
let's just leave it at 2 for now
and I play this and change this
you can see that it's making it more
have more viscosity or less
And again
multiplying it with this
if I put this to like 10 right here
you can see that right here
if I change this value
we have less viscosity and more viscosity
as you can see right there
So right there
you can kind of see what's happening kind of breaking it if I bring it too high
But you can see the difference right there of what's happening
Let me put this to like 6 or so
Veryvery cool
So again
this stiff viscosity is going to go ahead and it's going to add a viscosity that only acts when the fluid is expanding
And again
this will multiply this normal viscosity
All right
let me go ahead and put this back to one
And I'm going to put the viscosity to 2
Then we have the interaction radius right here
This is going to go ahead and define the radius within which particles interact with each other
So larger values mean that the particles will influence each other over greater distances
Now
right here
we also have a checkbox
And this checkbox
when it's enabled
it's going to take into account the particle size
So this is going to allow for the interaction distance to scale dynamically based on the size of the particles
So here you can see if I play this and put this to 0 or two
you can see that right here
it's creating this interaction radius
Againthis is the radius with which the particles interact with each other
So right here
againyou can see the difference with 0
And as I bring it up now
againwith factor radius right here
it's going to take into account the size of the particles
If under render
I put the scale ran randomness up like so
and right here
I don't have the factor radius
You can see that here
If I play this and change this value
it's not taking into account the smaller spheres and the bigger ones
It's just applying the same radius to everything
But if I enable the factor radius
it will take into account the radius or the scale or size of the spheres
So now you can see that I get a much different result right here with the smaller and bigger spheres
as you can see right there
Pretty cool
All right I'm going to put the scale randomness back to 0 and the interaction radius to 1
Then lastly
right here we have the rest density
So the rest density is going to set the density that the fluid tries to maintain when it's at rest
So this is going to influence how tightly packed the particles are when the fluid is not in motion
And then we have the factor density right here
Once again
it's going to scale this rest density based on the initial or default density
And again
this density is going to have to do with the scale of the particles
So right here
you can see that if I play this and I change this value
you can see right here
it changes the density of the particles
So you can see here
this is going to define how densely packed they are
whether they have more space between them
or again
how tightly packed the particles are or are not
All right
so that's all these settings right here
Let me put that back to one
And then lastly
we have fluid interaction
So with the fluid interaction right here
we can basically set it up so that we could use and manage how different particle systems interact with each other with the fluid setting or the fluid physics
So this can be useful if we have multiple fluid systems in our scene and we want to control how they influence one another
So here
for example
if I go ahead and hit shifty
duplicate this right here and make this a single user right there
I could go ahead and click on the little plus icon
add a new fluid interaction
and the target can be this right here
On this one
I could also add a new 1 and I can make the object this one right here
So now they will interact with each other
As you can see right there
you can see that they are not converging onto one another
whereas if I were to remove these right here
so let me remove those
you can see that these particles right here are just going into the space over here
And these ones right here are going into the space here
But if I go ahead and put a relation or interaction between these two
like so
you will see that they will interact with each other
So this one right here is going to interact and collide with this one
And this one is going to interact and collide with this one
And you can see that both the fluids are interacting
So you can use this
For example
let's say you have an oil type fluid in your scene and a water type fluid in your scene
and you want the oil particles to repel the water particles
Againyou could simulate that with this fluid interaction
And then once again
right here
we have system where we could set which particle system it's going to interact with
So for example
here I have a particle system set up with Suzanne
So I have one right here
and you can see that right here with the fluid interaction
it's set to this cube and system one of this cube
And on this cube
I have two particle systems
so system 1 and system 2
So system 1 is the cubes
system 2 is the torus is right here
I've hidden system 1
and right here you can see that I have system 2 set up to interact with this one
Nowright now here there is no second system because we only have one particle system
So right here
if I have this set to system 2
that means that this one is going to interact with system 1
which is the cubes right here
which I've hidden
And this one is going to interact with system to which this doesn't have
So if I play this
you can see that the Tauruses are just going past the Suzanne is because they're not interacting with them
But if I change this to system 1
that means that these toruses are going to interact with these Suzanne right here
which are system 1
So if I play this
you can see I have this right here
So now they're being
they're colliding with each other
Now if I set the torus is right here to system 2
and then I go to my cubes right here and enable them and set these to system 1
that means that the toruses are not going to interact with the Suzanne is
but the cubes are So right here
Suzanne's are set to interact with system one of this right here
which is the cubes
and this is set to interact with system one of this
which is the Suzanne's
So if I play this
you can see that the cubes are colliding with it
but the toruses are going past it because they are no longer part of the fluid interaction
as you can see right there
Pretty cool
So again
the system allows for us to set the particle system on the target object
So right here
if we change the system here
it's choosing the system that's on the target object
cube 0
So again
this is choosing which system it's going to interact with
Againyou have system one here
etc
So you can specify which particle system these will interact with
All right
so with that
that is all the fluid physics settings
We are done with the physics settings
That was quite a bit
but hopefully you learned a lot
In the next one we're going to continue
these are going to be relatively fast
so I'll see you in the next one cuff for now
Avo


------------------------

# 16_Particles Render Settings
All right
in this one
we're going to go ahead and take a look the render settings in the Particle system
Now render
as the name implies
is going to be how the particles appear during rendering right here
The first option we have is render As
and you can see we have a drop down with different options right here
Now
right here
by default
it's set to Halo
which is great for visually seeing how your particles are in the viewport
Howeverhalo line and path are all old systems for Blender 2．7 and the Blender internal render engine
So these three right here
halo line and path
don't really work in cycles or in EV
There is a way to kind of get it to work if you use a point density node in the shader to kind of get the halos to show up
But otherwise
nothing else works
And again
none of these really work
So right here
againhalo line and path
This is for the old Blender internal renderer engine
and I believe that they're going to remove these in future updates of Blender
In fact
it's already been proposed because again
these aren't used
Halo is great for visually seeing how it looks in the viewport
but you can see here
if I go to render and render image
whether I'm in Eev or in Cycles right here
it doesn't show up
So again
we won't use these or take a look at these options
Now
you could use a point density node with a bounding box to kind of get the same effect
For example
right here
Let me go ahead and do that quickly
You don't have to do this
If I hit shift A and add a cube
scale it up to add a domain
I have to be in cycles for this
But if I go to the shading tab
I could add a new material
delete this
and add a point density right here
point density
And here I could get a emission shader
I could plug the density into here and the emission into the volume
and then right here
I can select my object
my emitter object cube and the particle system
Particle system
Then if I change the space from object space to world space and render this out
you can see that I get the particles
But again
it's not very intuitive or very useful
You can see that here we could change the radius
So here I could change the radius of these particles
and it will change it here
Howeverif I go back to my layout tab here and delete this
you can see that right here
we have a scale and scale randomne​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ss
These aren't going to affect it at all
And same on the line and the path right here
all these options right here are not really going to work properly
So again
we're going to skip over the halo line and path as these are no longer used right here
We have none
Obviously
as the name implies
it won't show anything
So the two that we use that are very useful are object
which we've kind of taken a look at
But right here
it will allow for us to render out an object instead of just halo particles or invisible particles
So right here
if we hit shift A and just add a Suzanne or monkey right here
we could go and under object
we could select our instance object
Now an instance is basically just a duplicate of an object
So right here
if we turn on the statistics via the viewport overlays
you can see that right here
I have 515 vertices
And here
if I select the Suzanne as the instance object
you can see that even though now I have a bunch of Suzanne's about 1000
you can see my vertices count hasn't increased
And that's because right here
these are instances or duplicates of an object
So it doesn't increase the vertex count if I was to go to the modifiers and apply this particle system as an actual object or mesh
So if I click Make instances real right here
and then right here
I go ahead and apply this
You could see that these Suzanne's are all individual meshes
but they are still instances
Because if I select a Suzanne and go to the object data
you can see that they're all linked
We have 253 copies
Againan instance is a copy of an object
So these are all copies
It's just like hitting Alt D
when you hit Alt D
you can see it will make a copy of it and the vertices don't increase
but if I hit Shift D
you can see that the vertex count increases
So the particles are basically Alt
ding your object and link
duplicating it or making an instance of it
If I was to select all of these right here and go to object and relations and right here
I can select make single user
and I'm going to select object and data
you can see that now I have 130000 vertices because all of these
as you can see
we no longer have that number
All of these are individual objects
as you can see right there
So let me go ahead and just create a new scene
So file new to restart all that
I just want you to understand that the particles
even if they're objects
they won't take up more vertices because they are all linked or basically instances or duplicates of the object
So here
let me add Suzanne Beck and change this to object and select Suzanne
So here it's making instances or duplicates of Suzanne right here
Obviously
we have the scale
This is going to be the scale of our object
as you can see right there
and we have the scale randomness
Againwe took a look at this a little bit
This will randomize the scale of the object
And right here
let me change the number to like 500 because there's way too many
So right here
the scale will change the scale and scale randomize
as you can see
it will randomize the scale between the instances or particles
pretty cool
Then right here we have show emitter
againthis is the render tab
so this will basically show or not show the emission object
So right now you can see that when we render it
we could see the cube
which is our emission object
If we deselect show emitter
it will not show the cube or the emission object
as you can see right there
the cube is invisible
Pretty cool
Usually
for the most part
you'll deselect Show Emitter
It all depends what you're doing
Let me re-enable that
Now
Right here we have the instance object
obviouslySuzanne
then we have global coordinates right here
so instead of using the coordinates of the emission object
it's going to use the global coordinates of our emitter object or Suzanne
So you can see here
if I enable this
it will emit from this object
So wherever I move this
it will emit from there as opposed to emitting from our emission object right here
as you can see
So that's global coordinates
then we have object ro​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌tation
this will use the rotation of the object
so here
if I go ahead and play this and enable this and select Suzanne and rotate her
you can see that when I rotate her
it rotates the particles as well
Whereas if this is unchecked right here
you can see that when I rotate her
it doesn't affect these right here
All right
And then lastly
we have object scale
this is going to use the size of our object right here
as the name implies
So if I go ahead and play this
you can see as I scale this up or down
it changes the scale here
And obviously
if it's disabled
it won't
as you can see right there
by default
only this one is enabled because the global coordinates
it's not very practical to have it emit from your object
And the object rotation
usually with the particles
you want to set the rotation with the rotation tab up here
Then right here we have extras
extraextra
read all about it
Right here we have parent particles
So this is going to go ahead and it's going to render the parent particles as well as the child particles when we use children
So you could think of it right here
we're going to take a look at children
but here we have children particles
much like when you parent an object to another object or you create a child parent relationship
these children right here
So let's go to children and enable simple
these children are going to basically follow and duplicate the parent object
Let's put the display amount to one
So right now there is one child per parent
but right here
it's not showing the parent particle
So if we enable parent particle
you can see right here we have the parent particle showing up
let me play a little bit
So right here
you can see that the parent particle shows up
whereas if it's unchecked
the parent or the original particle won't show up
and only the children will show up
AgainWe're going to take a look at children soon
So right here
let me click on none and toggle that up
Then we have unborn right here
so unborn is going to render the particles before they're even born or before they even show up
You can see right here
if I render this out
we just have this one particle here as we see in the viewport
But if I enable unborn
you can see it's going to render out all the particles
even if they weren't supposed to show up yet
So it will still show them even if they weren't supposed to appear yet
As you can see right there
very cool
And then dead
You guessed it
this will show the particles even after they have died
So for example here
if I go ahead and hit shift A
add a plane
bring it over
scale it up
and add a collision right here
I could select kill particles
So this will just kill the particles once they hit the floor
as you can see right there
But with this enabled
let me go back
uncheck this
You can see with dead disabled
these will disappear
But if I enable dead
it will show the dead particles right here
Now this can be very useful if we want to
for example
cover our object or our collision object with the particles that have died
So you can see right here
if I uncheck this and play this
if I render this out
we don't have any particles on the floor
And let me move my camera a little bit
Let me move it to here
So right here
you can see that we don't have any particles on the floor
but let's say we want the dead particles to pile up on our collision object
Wellwe could enable dead right there
and they will stay on the collision
as you can see
So that is object
Then we have lastly the collection
which is the same thing
Howeverwe're able to have a collection
So here
let's hit shift a
add a Taurus
move it over
let's shift select Suzanne and hit M and move to a new collection
I'll just name it object and create
So now with this
we're able to set a collection as the object
So here under instance collection
you can see instead of instance object
we have instance collection and we can select our collection objects
So now we have the Suzanne and the Taurus
as you can see right there
All right
so the first option we have is whole collection
This is going to go ahead and use the entire collection as a single unit
So basically
each particle will have the whole collection or all the objects of the collection
where normally each particle is assigned a different object
Hereif we enable a whole collection
it will assign all the objects of the collection to each particle
So for example
hereif I play this and enable whole collection
you can see right here
it's a little bit tricky to see what's happening
But if I put my particle count to two
you can see that right here without whole collection
each of these two particles will be either assigned a Suzanne or a Taurus
As you can see right here
we have a Suzanne
and we're going to have a torus
But if I enable whole collection
the whole collection will be instanced on each of these particles
So each of these particles is going to have a Suzanne and a torus
So you can see right here on the first particle we have a Suzanne and a torus
And the second particle has a Suzanne and a Taurus
So that is whole collection right here
You can see when I enable this
it grays these out as well
Let me go ahead and put this number back to 500
You could also see that here without whole collection
if I move these
it doesn't affect it
only this affects it
But if I enable whole collection
you can see that here
If I move the Taurus or Suzanne
it affects how the collection is scattered around
as you can see
All right
so that's whole collection
Then we have pick random right here
This is going to randomly pick objects from the collection as you can see right here
So when we enable this
it's going to randomly select objects from the collection to display for each particle
And only one object from the collection is chosen for each particle
This can be good to help to randomize the collection or the instancing of these objects
So for example
hereif I go ahead and add a third object to this collection
so let me go ahead and add a UV sphere right here
And let me hit the M key
move it to the object collection
And here
let me put three particles
We have three objects
so I'm going to put three particles right here without pick random enabled
You can see here
we're going to get a Suzanne
a Taurus
and a sphere
So we have Suzanne Taurus and a sphere
So it's not random
It picks one after the other
But if I enable pick random
it will randomly pick it
So we could have two spheres or we could have two Suzanne S or two toruses etc
So here you can see we have a sphere
we have a Suzanne
and we have another Suzanne
so it randomly picks it
Whereas if this is not enabled
each particle will be assigned one of this
So it will be sphere Suzanne Taurus
and then it will repeats fear
Suzanne Torres
etc
So there will be an even amount of these
whereas pick random
we could have more spheres
we could have more of these etc
So that is pick random
let me go ahead and disable that
Then once again
just like with the render as object
we have the global coordinates right here
So let me re-enable this to 500
and this is going to take the global coordinates of the objects wherever we move these instance objects
you can see that it will basically distribute those based on where these are located
as you can see
which can be a pretty cool effect
All right
againthat's the same exact option as on the object collection
Then once again
we have the object rotation
againobject rotation
and object scale
same exact thing right here
it's going to go ahead and take into account the rotation of the object
So if I play it
you can see as I rotate
Suzanneshe is rotating over here
And if I enable object scale
which it is by default
the scale of the object will affect the scale of the particles
All right
very cool
Now
right here
we have use count
So here we can specify exactly how many times an object is used in the particle system
So we could use an object multiple times if we want
So if we enable use count right here
you can see that we have Suzanne torus and sphere
and we have one for each of these
And right here
if I play this
you can see we have this here
So once again
it's going for Suzan 1 Taurus
and then going over again
But right here
let's say I put the Suzanne count up
let's say to 80 or 90 or 100
You can see here that when I play it
I will get 96 Suzanne's and then one Taurus and one sphere
and then again back to 96 Suzanne's 1 Taurus and one sphere
So you can see here I get 96 Suzanne's 1 sphere and 1 Taurus somewhere in there
Then again
Suzanne's another sphere and a Taurus 96
Suzanne is etc
Or I could put the Suzanna 22
the Taurus to 12 and the sphere to one
So now we'll get 22 Suzanne's 12 Tauruses and one sphere
as you can see right there
pretty cool
So here we could set up how many times the objects will show up in the particle system
We could also specify the order of these
So let's say I want the sphere to show up first
I could click the little up arrow
put the sphere first
and now the sphere will show up first
And let's say I want Suzanne to be last
Suzanne last
and now we get the sphere toruses
And then Suzanne
we could obviously remove some of these right here or add some of these right here
As you can see
Now you can see that here
when I added it
I have the torus twice
as you can see
So we could click on refresh instance objects
and when I click this
you can see that it will re a Suzanne and I could remove one of the toruss
So you can see here
if I remove all these
I could just click on refresh and it will add whatever objects are in the collection
If I remove Taurus
and if I add it and it doesn't add the Taurus
I could just click on refresh and it will re-edit
I could also have these multiple times
So here you can see I have Sphere
then Suzanne
then Sphere
and then Taurus
So let's say I want sphere 22 times
then Suzanne
I could have 11 times
and then sphere again 22 times and Taurus 11
So now I'm going to have sphere 22
then Suzanne
then sphere again
and then Taurus
as you can see right there
So sphere
Suzanneand then sphere again
and then Taurus
as you can see
pretty cool
So with that
that is the render settings right here
Againyou'll be using collection or object for the render settings
Of course
you can use Halo to preview how your particles look
This is great for previewing in the 3D space or in the 3D viewport
So with that I'll see you in the next one
Ciao for now Avoir


------------------------

# 17_Particles Viewport Display
All right
so the next one that we have is the viewports right here
So we have viewport display
As the name implies
this is going to show how the particles show up in the 3D viewport
So this is going to be how we visualize the here in the 3D viewport
whereas render was for rendering
Nowobviously
with rendering
we could also see it changed in the 3D viewport
But this is only for 3D viewport
so this won't affect the rendering
So right here
you can see in the viewport display
we have display as rendered
So right here
it's going to display the particles exactly how they would be when they're rendered out or their final output
as you can see right there
So here we basically get a real time preview of the particles
Then right here
we could display it as none
so obviously we have nothing
Then the next option we have right here is point
so we could display these particles as points or as halos
so we could use this for a kind of minimal display that just shows where each particle is without adding any mesh or geometry
Againjust like the halos
you can see that right here we have an amount
so we could change the amount percentage
so we could put that lower
as you can see right there
you can see here that displaying the percentage makes dynamic inaccurate without baking
So you can see here when we play it
it's not accurate unless we bake it
but we also have the size right here where we could change the size of these particles as you can see right there
so I could have them displayed bigger or smaller
All right
my blender crashed
but I am back to the point
so that's the point option
Then we have circle right here
So right here
it's going to display the particles as a flat circle that is always facing the camera
So you can see here
if I move the camera around
enable camera to view
you can see that these will always be facing the camera as you can see right there
and also the size is independent of the distance of the camera
as you can see there
So we could display them as this
Then right here
againwe have the same options over here
we could display them as a cross
So once again
obviously pretty self explanatory
it's going to display them as a six point cross right here as you can see and these crosses are going to align with the rotation of the particles
So this could give you a simple visual representation of both where the particles are and their orientation or rotation
So you can see right here
if I go to the rotation
enable rotation and randomize it
you can see that right here
if I play it again
you can see that they have their rotation and you can see it based on the axis
as you can see right there
as opposed to if I put it at zero
they're all facing straight up like that
All right
very cool
Let me disable that
Then we have axis right here
where it will just display it as the x
yand z axis
So again
this could help to see their orientation or their rotation
So here we can use this if we need to see the exact rotation or orientation of the particles
So once again
here you can see if I play this
we get that
And if I enable rotation
increase the randomize
you can see that we could see where their x
yor z axis is pointing for each particle
which is pretty cool
And of course
you could go ahead and change the size
etc
Let me put that back to ．1
and let me put the randomized 0 and disable rotation
So that's all of these right here
As you can see
we could change how they display
let me go back to rendered
then we have color right here
So this is going to go ahead and display our particles in different colors based on certain properties
And this could help us to analyze the behavior of the particles more easily
So first of all
we want to change it from rendered to point
otherwise some of these won't work and we won't be able to see it properly
And then right here
we first have none
Now with none
it's going to go ahead and not display any color
Now these should be black
but right here
I believe none is not working properly because even when I have a material
it's still showing the material
even when it's set to none
So right here
it should display the particles black with no material or color
Then right here we have material
So right here
it's going to display it with the material color
Now this is going to be the material on the particle object
So if we go over here
you can see it's not the color that is right here
as that won't do anything
but it is the color
Let me go ahead and put this back to white
It is the color that is under the Viewport display color
So this one right here
as you can see
so this will display the particles based on the color that we have on the viewport display color
And you can see that now they're green
You can also see if I change this to none
againthe particles should be black
but they are still green
Againthis is not working properly
so we have none and material
Then we have velocity
which is pretty cool
This is going go ahead and display the particles based on their speed
So the color gradient is going to go from blue or the particles going slow or having low velocity to red
meaning that the particles are going fast or have a high velocity
So this could help us to visualize the velocity of the particles
So you can see here
if I play this
we have the ones starting off here
blueand then they become red as they go faster
So you can see what we get right here
Then we have the fade distance right here
If we change this
it will increase the distance at which it fades these color to show the velocity
So you can see that now we can see it a little bit better where these particles right here that are blue and green are slower
and then as they pick up velocity and go faster
they become red
as you can see right there
Pretty cool
So this could help us to visualize the velocity that the particles are having
All right
and then lastly
we have acceleration
much like velocity
Let me go ahead and put the fade distance to one right here
The acceleration is going to go ahead and color the particles based on their acceleration or how fast they accelerate
so this could help us to see the particles when they speed up or slow down
So you can see here
if I play it
you can see that we have this right here
I could also
once again
change the fade distance as you can see right there
Let me put the fade distance to one and here if I go to the field weights and I put the gravity down
you can see that right here
they are not having as much acceleration because the gravity is down
So here you can see with low acceleration
it's a dark blue
as you can see right there
So if I put the gravity up to one
you can see that the ones that don't have a high acceleration are dark blue
And then as they accelerate more
they become this lighter green color
as you can see right there
So if I animate this gravity
for example
if I put the gravity to 0
insert a keyframe
move to frame 120 or so
put the gravity to one
insert a keyframe
you can see that right here
they have low acceleration
And then as they accelerate from the gravity
they change to the screen color
So again
dark blue for low acceleration
and then this greenish color when they have a higher acceleration
And once again
we have this fade distance
which allows us to control the distance of how it's going to fade them based on their acceleration
All very cool
and then the last option we have
let me change this back to rendered
You can see on rendered
we don't have these showing
as you can see
So you want this again
to be to point to show those
All right
let me also put this to material right here
Now the last option we have is show emitter by the way if you want to add a material to the Suzanne's
you will need to add a material to the original Suzanne object right here
As you can see
either right here
I added it to here for the base color
and that will show up in material preview or rendered viewport shading mode
But if you want it to show up in solid view
just change it under the viewport color right there
All right
veryvery cool
And you can see that here
unrendered
If you change any of these
it won't change anything because again
these are for the point system right here
As you could see
if you put this on the cross as well
you could have it there as well as you could see
but again
if you want it rendered
it won't show up or use these
Then lastly
we have show emitter
Againthis will show or not show the emitter object in the viewport
Againif you don't want it to render it out
you want to deselect Show Emitter in the Render tab right here and not the viewport one
but this​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ will disable the emitter in the viewport
So that is those options
I'll see you in the next one
Cuff for now
avo


------------------------

# 18_Particles Force Field Settings
All right
let's go ahead and take a look at these last particle settings
Now here we're going to go ahead and skip the children because right here on the children
there's a lot of settings that have to do with the hair particle system as well
So we'll take a look at that when we take a look at the hair
and we'll go back to the emitter and go between the emitter and hair to take a look at the children
So let's skip children and go to field weights
Once again
with the field weights
same thing as before
We've seen this before in the rigid body and in the cloth
This basically allows for us to dictate how much these forces influence our particles
So for example
if I play this
I could put the gravity down
And again
this is a percentage
So right here
if I put it to ．1
it's going to be 10% gravity
And at 1
it's going to be 100% gravity
etc
Then right here we have all the different force fields
So if I shift a go to force field
addfor example
a force force field
move it over a little bit
and in the force increase the strength
I could go over here and I could go ahead and turn down
You can see that we have force right here
So this relates or corresponds to the force force field
whereas vortex corresponds to the vortex force field etc
HereI could go ahead and put this down and it will change how much this force force field influences the particles
As you can see
we could also turn down all
which will basically tone down all of the influence of all the forces
And of course
we have an effector collection
or we could put these force fields and forces into a collection and then select that collection so that only that collection influences our particles
All right
let me go ahead and delete this force field
And right here
you can see the cube has not up
So let me move it like so
Againwe've gone over this quite a bit of time
so I'm not going to go over it​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ much more
but that's the field weights
Then we have force field settings
This is pretty cool
whereas we could add force field objects or scripts into the scene
we could actually have the particles themselves act as force fields
So right here
for example
you can see we could add two different force fields to our particles
Let's go to type 1 and select the Force force field once again
And I'm going to go ahead and increase the strength a little bit
So now the particles are acting as force fields
So if I hit shift A
let's add a UV sphere and move it over
and let's add a new particle system to it
Now if I go back here
the particles
if I play it
you can see
are acting as force fields
Pretty cool
Now
right here
influencing or affecting other particle systems
But if we want it to affect itself
we could enable self effect right here
And this will basically make it affect itself as well as other particle systems
Let me go ahead and disable self effect
We also have a effector amount right here
This is going to dictate how many of these particles are going to have this force field and affect the other particles or itself
So right here at zero
it's going to be all the particles
But for example
if I set this to two right here
we're only going to have two particles affecting this right here
So to see this a little bit easier
let me put the number right here to 22
So now we have 22 particles
And only two of these are going to have this force force field
So you're going to see when I play this
that this will only be blown away by the force when these two particles show up
So if I play this
you can see right there
and then it dies down
And then once that other particle spawns
you can see it gets pushed away or forced away and then dies down
If I put it to four
you can see I have four particles that are going to influence this
And of course
if I put it to 1
it's going to be one particle that influences it
And then once that particle goes away
you can see it's no longer influenced
And again
at zero
it's all the particles
So there we go
of course
we could enable
for example
if I put 2 and put self effect
So here
if I play it
one particle will influence this
and then it will die down
And then once the second effector particle shows up
it will influence it and then die down
Pretty cool
All right
let me go ahead and disable self effect
and I'm going to put this to 0
Then down here we have fall off
So the fall off is basically going to dictate how the force of the force fields is going to diminish or fall off with distance from the source
So first right here
we have z direction
This is going to be how the falloff is applied on the Z axis
You can see right here with both Z
it's going to affect objects equally in both the positive z direction and the negative z direction
So you can see here
if I play this with both z
it will just affect it on the positive z and negative z the same
But here
if I change it to positive z
only the force field's influence is primarily going to affect the object in the positive z direction
So upwards
as you can see right here
it's primarily affecting it upwards
If we select negative z
it's going to primarily influence it downwards
as you can see right there
So it's pushing it downwards
So again
this basically allows for us to dictate the force in the z direction
Let me set this to both z
then we have the power right here
The power is going to be how quickly the force field strength decreases with distance
So right here
if we have a higher power
it means that the value of the force field will drop off more sharply as opposed to a lower power
it will drop off less sharply
So right here
if we go ahead and play this with a power of zero
you can see we have this
And if I move this over or move it closer
you can see it has no influence or no change
But if I put this to a power of one right here
you can see that when I bring it away
it's going to the power of the force field is going to drop off and the particles won't be blown away in the wind as much
And if I bring it closer
they will be blown away with more force
So you can see here
if I bring it over
and then I bring it closer
you can see that the power is falling off depending on the distance of this cube right here
Now here
let me go ahead and increase the strength of the force to very high
And now you can see even more drastically what's happening when I'm closer to it
It has more force
Of course
I could increase this
So let's say a value of three
let me reset it
So right here
value of three might be too much
let me put it to 2
So you can see right here
when I'm really close to it
it's blowing it away
but when I go away
the force or the power is falling off
Very cool
all right
so that's the power right there
Let me go ahead and set that to 0
and I'm going to set the strength up here to 11 or so
Then we have minimum and maximum distance right here
This can to be the minimum and maximum distance for the force field fall off
So right here
minimum distance doesn't work
If I enable this right here
this is going to be the minimum distance at which the force field starts to take effect
So below this distance
it won't have any influence or effect
But you can see if I play this and if I move this closer
no matter what
I move this to or no matter where I move the object
it just doesn't do anything at all
So I believe the minimum distance doesn't work properly
There is a support ticket from a long time ago on this
but the minimum distance doesn't seem to work
We do have the maximum distance though
The maximum distance right here is going to dictate the maximum distance for the force field to take effect
So you can see right here
if I play this with it at 0
we have this
But as I increase it
so let's say I increase it to like 4 or so
if I go past this maximum distance
it will no longer take effect
So you can see here as I grab this and move it
once I go past this distance of 4．18 m
you can see it's no longer taking effect
And if I bring it closer
it will start to take effect
As you can see right there
If I increase this
obviously I could go a lot further
So right here
once it plays
you can see that I could go further and once I reach this distance of 11．9
you can see it no longer takes effect
But once again
as I bring it back in
you can see it takes effect
So that is the minimum and maximum distance
Then right here
we just have the same settings again
we could set up two of these force fields
so right here we have type 1
and then right here we have type 2
wherefor example
we could set up a vortex force field
and then we have the fall off for that force field
So obviously I'm not going to go over this
it's the same exact thing
we're able to do this twice
so now you can see that we have a force force field
let me put the strength of this down a little bit like so
and we have a vortex force field
let me put the strength of this down a little bit like so
So here you can see we have a vortex and a force
pretty cool
so we get this now
so that is the force field settings right there allows for us to do that
We're gon na have one more video to take a look at these last three options right here
which should be relatively quick
I know I keep saying that
but there's a lot of options in the particle system
hopefully you're enjoying it
hopefully you're learning a lot
and with that I'll see you in the next one
ciao for now a


------------------------

# 19_Particles Textures
All right
in this one
we're going to go ahead and take a look at the final settings for the particle emitter system
So here in the particles
let's add a plane
by the way
So I'm going to delete the cube and add a mesh plane instead
and add a particle system
So you can see that over here we have vertex groups
Now this is really
really cool
This allows for us to control the particle system based on vertex groups
So we could control the density
and this will apply to the emitter as well
And you can see that right here we have a bunch of other ones as well
and these apply to the hair system for the particle system
So we'll take a look at these
When we take a look at the hair system
But for example
hereif I go to edit mode
right click
subdivide this a couple times and scale it up like so
you can see that here I could define the density based off of a vertex group
so if I go into edit mode and go to the vertex groups
add a new vertex group
and for example
just select some of the vertices and click assign
you can see that here
if I go back and under density
I select my group
you can see that all the particles are only within that vertex group
pretty cool
So now I could define based on a vertex group
where the density of the particles is
I could also
for example
if I select this right here
put a lower weight
such as a weight of 0．2 or so
and assign it
So now we have more density right here because this has a weight of one and less density right here
because this has a weight of 0．2
Pretty cool
So that is the vertex groups
Once again
all of these right here have to do with the hair
The only one that works with the emitter is the density right here
So let me go ahead and x this out
All right
then we have textures right here
which is super
super cool
this one allows for us to influence the particle system based off of textures
So right here
if I go to the first slot and I click on new
this will add a new texture slot to actually select the texture and change what it influences on the particle system
we need to go to the texture properties right here
Then right here under the type
we could select whatever kind of texture we want
I'm going to go ahead and select the wood texture
So let's select this as this will be easy to see
Now
one thing to keep in mind on the textures is that the black colors are a value of 0 and white is a value of one
So right here
if we go to influence and let me go ahead and toggle this up right here
you can see that we could dictate what the texture is going to influence on the particle system
Pretty cool
So right now it's influencing the general time
You can see we have check boxes to enable what it's going to influence or what it's not going to influence
and then we have a factor that goes from 0 to 1
Zero means it has no influence or 0% influence
and one means that it has 100% influence
or the texture has 100% influence on this general time
So you can see here with general time
this is going to control the influence of the texture on the timing of the particles
so this is going to affect when the particles are emitted during the simulation
So you can see here
if I play this
we get this right here
pretty freaking cool
Now
just to see this a little bit easier I'm also going to add this wood texture on the actual plane itself
just so we could get a better visual of what's happening
So let me change this to shading
And up here I'm going to add a new texture or a new material slot
And right here out the base color
let's get a wave texture
The wave texture is basically the same as the wood texture
Now right here you can see that we have it this way
but we want it diagonally
so we're going to change this from x to diagonal right there
All right
very cool
Then for the scale
we want to go ahead and bring the scale down to
I think we want it around 3 or 2
So right here
if I play it
yepa scale of 2
so we want the scale here to be 2 so that it matches this
So now we could actually visually see what is happening
Again
a color that's white is a value of one
Black is a value of 0
So here
let me go back to layout and let me change this to Material Preview by hitting the Z key and Material preview
​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌So you can see here with general time
if I play this everywhere where there's a white band
the particles are going to appear
And just to adjust the texture a little bit
let me quickly put this to density right here
So this is going to control the density
And on the particle system
let me put the end frame to one so that they are already spawned on frame 1
You can see it's not updated
so let's just hit the G key and move it and then right click it to leave it there
So you can see that here
it's not properly aligned
We have it kind of inverted
So let me go back to the shading
And right here where these are
it should be a white color
So let me change the scale right here and there we go
Something like this right here
So something like a 2．2 right there
You can see that it aligns it
All right
let me go back to layout again
where the particles are
it should be white
and where they're not
it should be black
So right here
let me put the end frame back to 200 and let me go back to the texture and let me re-enable general time
So you can see that here when I play it
And again
you can see it's not perfectly aligned because the scale of this has a different scale of this
But here it could help us to visually see what's happening
So you can see here based on where these colors are of the texture
it will influence the general time
All right
let me disable that and enable lifetime
So with this one
it's going to go ahead and it's going to affect the lifetime of the particles
So it's going to affect how long these particles last
Againwhere it's black
it's going to be a value of 0
and then where it's white
it's a value of one
And then of course
we have in between values here
as you can see
it goes from black to a grayish color
Againgray is a value of 0．5
etc
So here we can use this to create variations in the particle lifetime based on the texture
So here you can see what we get right there
pretty cool
All right
so that's the lifetime
Then we have the density
As the name implies
this will control how dense the particles are depending on where the texture is
So once again
if we put the particle system and to one and update this
you can see exactly what we have
So the density of the particles is going to be dense where it's white on the texture and not dense where it's black
Pretty cool
So that's the density right there
Once again
we have this slider to have it have zero influence or 100% influence
as you can see right there
sometimes it doesn't update
so you just need to move your plane
Then we have size right here
this will affect the particle size based on the texture
Now for this
we need to add an actual object
So let's add a UV sphere
and let's make our particle systems have this UV sphere
Under the render
select the UV sphere
and let me go back to the texture so you can see that here
once again
where it's white
it has larger scale
and then where it's black
you can see that they're very small and even disappear
As you can see right here
if I put this down
you can see that some are completely gone where it's completely black
Againit goes from black to like a grayish color
so this grayish color is probably a value of 0．1 or so
and then white is a value of 1
black a value of 0
So you can see here that it is now influencing the size of the particles based on the texture
Pretty cool
All right
then we have physics velocity right here
The physics velocity is going to influence the initial velocity
the particles based on the texture
so it's going to affect how fast the particles move when they are emitted
So right here
if I play this
you can see we have this right here
Now there's not much of a change you can see from one right there and zero
we could see it a little bit where if I go to front view
you can see at 0
we have this and at one we have this right here
Let me update the plane right there
Let me actually go to kind of this view right here
actuallyso you can see that right here where it's a white color
it's influencing the velocity more and you can see we get this kind of look right here
Pretty cool
Nowof course
if we go to the particle settings and go to velocity
we can go ahead and change the velocity right here
So right here
if I increase the normal
and let me just put this to like four
you can see what we get right there
We get a very much more dramatic kind of V effect based on the texture
So you can see where it's white and where it's black
againwhere it's white
it's affecting the velocity 100% based on the texture
It's black
It's not affecting the velocity or affecting at 0%
as you can see right there
And we get this cool kind of effect
All right
let me put this back to one on the normal
So that's the physics velocity again
allows for the texture to control the velocity or the speed of the particles
So this could be useful for things like explosions or things like that
Then right here we have damp
So this is going to damp or slow down the particles based on the texture
It's going to make particles lose speed more quickly or less quickly
So you can see here we have this where we
againwe don't really see a difference with one or 0
But if we go to our particle settings and here under physics
if we put the damp value
you can see the damp is at 0 right now
And so right here
the texture
whether it's a value of one or zero
it's affecting a value of 0
so it's going to be 0 anyways
So if we put this to one
you can now see what this gives us
So again
you can see where it's white
It's dampening it more or slowing the particles down more
And where it's black
it's not damping or slowing down the particles at all
as you can see right there
Pretty cool
And of course
as we change this value
it's also going to change how the texture is influencing it
As you can see right there
pretty cool
All right
let's put this back to 0 and go back to the texture
So that's the damping
Then we have gravity
as this implies
obviouslythis is going to affect the gravity based on the texture
So if we play this
you can see that again where it's black
because black zero
we have no gravity
so these ones are going up like that
And where it's white
we have 100 gravity
So they are falling down
as you can see right there
All right
and then we have force fields
so this is going to allow for us to influence the effect of force fields based on the texture
So here
if I add a force force field right here
and I just bring it up a little bit
let me put the strength to 10
You can see if I play this right here
let me actually bring it under
And maybe a strength of 10 is too much
Let me put it to 2
Let me actually go to the particle settings and under the particle settings
let me go to field weights and let me put the gravity of the zero so that only the force field is affecting it
So you can see that here
Let me go back to the texture
If I put the force field to zero
it's affecting all of it the same
but if I put force field to one or just check it
you can see that here
it's affecting the particles based on the texture
So again
it's making the force field influence the particles differently based on the texture
as you can see right there
Pretty cool
Now again
right now
these colors are a value of 1 and 0
but here
if I go to colors and go to the contrast
you can see I could increase this contrast to like 5
And now these values are higher than one and below 0
So this is a negative value and the white is above one
So now when I play it
you can see we get this right here where where it's white right here
it has a positive value and where it's black because we contrasted it
it is now a negative value and it is sucking the particles into the gravity right there
As you could see
we could also enable clamp right here
This will basically clamp the values between 0 and 1
so they won't go above one and they won't go below 0
So now you can see that we have this right here pretty cool
so obviously you can feel free to mess around with the texture settings etc as you want
but that is all of them
These ones right here are once again for the hair particle system
So we'll take a look at that later
But these ones all affect the emitter particle system based on the texture
which is awesome
You could also see that here we could influence multiple things
so for example
we could influence the density
the force field
and the size if we want
So now it's influencing all of those
I could deselect force Field if I want
and let me delete the force field as well
So now I'm influencing the density and the size
I could also influence the damping right there
Of course
we could stack these texture influences
So for example
if I have this wood texture influencing the density
I could go back to the particle system on the second slot
I could click on New and go to the texture properties
And right here
I could change this one to clouds and I could have this one influence
for example
the size of the particles
So now you can see that the wood texture is influencing the density of the particles
And this cloud's texture is influencing the size of the particles
as you can see right there
Pretty cool
So here
if I go to my particle settings
you can see I now have these two textures and they influence two different things
Of course
I could reorder these right here
which doesn't do much
but I could also remove them by clicking on the little X right here
and it will remove them as you can see right there
All right
very cool
So that is the Textures panel
Then lastly
once again
we have custom properties
This allows for us to create custom properties that could influence other values within our particle system
You can see right here we have the settings where we could set these custom properties
as you can see right here
So this allows for us to create things such as drivers or again
have these properties influence other aspects of our particle system
So that is it for the emitter particle system
That was quite a bit
but we made it through
don't worry for the hair 1
As you can see
it is much the same settings
As you can see right here
a lot of these settings are exactly the same
We do have a couple different settings obviously
but it will be much faster because a lot of the settings are the same as on emitter
So with that I'll see you in the next 1
ciao for now Avo


------------------------

# 20_Hair Particles
All right
in this one
we're going to go ahead and take a look at the final settings for the particle emitter system
So here in the particles
let's add a plane
by the way
So I'm going to delete the cube and add a mesh plane instead
and add a particle system
So you can see that over here we have vertex groups
Now this is really
really cool
This allows for us to control the particle system based on vertex groups
So we could control the density
and this will apply to the emitter as well
And you can see that right here we have a bunch of other ones as well
and these apply to the hair system for the particle system
So we'll take a look at these
When we take a look at the hair system
But for example
hereif I go to edit mode
right click
subdivide this a couple times and scale it up like so
you can see that here I could define the density based off of a vertex group
so if I go into edit mode and go to the vertex groups
add a new vertex group
and for example
just select some of the vertices and click assign
you can see that here
if I go back and under density
I select my group
you can see that all the particles are only within that vertex group
pretty cool
So now I could define based on a vertex group
where the density of the particles is
I could also
for example
if I select this right here
put a lower weight
such as a weight of 0．2 or so
and assign it
So now we have more density right here because this has a weight of one and less density right here
because this has a weight of 0．2
Pretty cool
So that is the vertex groups
Once again
all of these right here have to do with the hair
The only one that works with the emitter is the density right here
So let me go ahead and x this out
All right
then we have textures right here
which is super
super cool
this one allows for us to influence the particle system based off of textures
So right here
if I go to the first slot and I click on new
this will add a new texture slot to actually select the texture and change what it influences on the particle system
we need to go to the texture properties right here
Then right here under the type
we could select whatever kind of texture we want
I'm going to go ahead and select the wood texture
So let's select this as this will be easy to see
Now
one thing to keep in mind on the textures is that the black colors are a value of 0 and white is a value of one
So right here
if we go to influence and let me go ahead and toggle this up right here
you can see that we could dictate what the texture is going to influence on the particle system
Pretty cool
So right now it's influencing the general time
You can see we have check boxes to enable what it's going to influence or what it's not going to influence
and then we have a factor that goes from 0 to 1
Zero means it has no influence or 0% influence
and one means that it has 100% influence
or the texture has 100% influence on this general time
So you can see here with general time
this is going to control the influence of the texture on the timing of the particles
so this is going to affect when the particles are emitted during the simulation
So you can see here
if I play this
we get this right here
pretty freaking cool
Now
just to see this a little bit easier I'm also going to add this wood texture on the actual plane itself
just so we could get a better visual of what's happening
So let me change this to shading
And up here I'm going to add a new texture or a new material slot
And right here out the base color
let's get a wave texture
The wave texture is basically the same as the wood texture
Now right here you can see that we have it this way
but we want it diagonally
so we're going to change this from x to diagonal right there
All right
very cool
Then for the scale
we want to go ahead and bring the scale down to
I think we want it around 3 or 2
So right here
if I play it
yepa scale of 2
so we want the scale here to be 2 so that it matches this
So now we could actually visually see what is happening
Again
a color that's white is a value of one
Black is a value of 0
So here
let me go back to layout and let me change this to Material Preview by hitting the Z key and Material preview
​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌So you can see here with general time
if I play this everywhere where there's a white band
the particles are going to appear
And just to adjust the texture a little bit
let me quickly put this to density right here
So this is going to control the density
And on the particle system
let me put the end frame to one so that they are already spawned on frame 1
You can see it's not updated
so let's just hit the G key and move it and then right click it to leave it there
So you can see that here
it's not properly aligned
We have it kind of inverted
So let me go back to the shading
And right here where these are
it should be a white color
So let me change the scale right here and there we go
Something like this right here
So something like a 2．2 right there
You can see that it aligns it
All right
let me go back to layout again
where the particles are
it should be white
and where they're not
it should be black
So right here
let me put the end frame back to 200 and let me go back to the texture and let me re-enable general time
So you can see that here when I play it
And again
you can see it's not perfectly aligned because the scale of this has a different scale of this
But here it could help us to visually see what's happening
So you can see here based on where these colors are of the texture
it will influence the general time
All right
let me disable that and enable lifetime
So with this one
it's going to go ahead and it's going to affect the lifetime of the particles
So it's going to affect how long these particles last
Againwhere it's black
it's going to be a value of 0
and then where it's white
it's a value of one
And then of course
we have in between values here
as you can see
it goes from black to a grayish color
Againgray is a value of 0．5
etc
So here we can use this to create variations in the particle lifetime based on the texture
So here you can see what we get right there
pretty cool
All right
so that's the lifetime
Then we have the density
As the name implies
this will control how dense the particles are depending on where the texture is
So once again
if we put the particle system and to one and update this
you can see exactly what we have
So the density of the particles is going to be dense where it's white on the texture and not dense where it's black
Pretty cool
So that's the density right there
Once again
we have this slider to have it have zero influence or 100% influence
as you can see right there
sometimes it doesn't update
so you just need to move your plane
Then we have size right here
this will affect the particle size based on the texture
Now for this
we need to add an actual object
So let's add a UV sphere
and let's make our particle systems have this UV sphere
Under the render
select the UV sphere
and let me go back to the texture so you can see that here
once again
where it's white
it has larger scale
and then where it's black
you can see that they're very small and even disappear
As you can see right here
if I put this down
you can see that some are completely gone where it's completely black
Againit goes from black to like a grayish color
so this grayish color is probably a value of 0．1 or so
and then white is a value of 1
black a value of 0
So you can see here that it is now influencing the size of the particles based on the texture
Pretty cool
All right
then we have physics velocity right here
The physics velocity is going to influence the initial velocity
the particles based on the texture
so it's going to affect how fast the particles move when they are emitted
So right here
if I play this
you can see we have this right here
Now there's not much of a change you can see from one right there and zero
we could see it a little bit where if I go to front view
you can see at 0
we have this and at one we have this right here
Let me update the plane right there
Let me actually go to kind of this view right here
actuallyso you can see that right here where it's a white color
it's influencing the velocity more and you can see we get this kind of look right here
Pretty cool
Nowof course
if we go to the particle settings and go to velocity
we can go ahead and change the velocity right here
So right here
if I increase the normal
and let me just put this to like four
you can see what we get right there
We get a very much more dramatic kind of V effect based on the texture
So you can see where it's white and where it's black
againwhere it's white
it's affecting the velocity 100% based on the texture
It's black
It's not affecting the velocity or affecting at 0%
as you can see right there
And we get this cool kind of effect
All right
let me put this back to one on the normal
So that's the physics velocity again
allows for the texture to control the velocity or the speed of the particles
So this could be useful for things like explosions or things like that
Then right here we have damp
So this is going to damp or slow down the particles based on the texture
It's going to make particles lose speed more quickly or less quickly
So you can see here we have this where we
againwe don't really see a difference with one or 0
But if we go to our particle settings and here under physics
if we put the damp value
you can see the damp is at 0 right now
And so right here
the texture
whether it's a value of one or zero
it's affecting a value of 0
so it's going to be 0 anyways
So if we put this to one
you can now see what this gives us
So again
you can see where it's white
It's dampening it more or slowing the particles down more
And where it's black
it's not damping or slowing down the particles at all
as you can see right there
Pretty cool
And of course
as we change this value
it's also going to change how the texture is influencing it
As you can see right there
pretty cool
All right
let's put this back to 0 and go back to the texture
So that's the damping
Then we have gravity
as this implies
obviouslythis is going to affect the gravity based on the texture
So if we play this
you can see that again where it's black
because black zero
we have no gravity
so these ones are going up like that
And where it's white
we have 100 gravity
So they are falling down
as you can see right there
All right
and then we have force fields
so this is going to allow for us to influence the effect of force fields based on the texture
So here
if I add a force force field right here
and I just bring it up a little bit
let me put the strength to 10
You can see if I play this right here
let me actually bring it under
And maybe a strength of 10 is too much
Let me put it to 2
Let me actually go to the particle settings and under the particle settings
let me go to field weights and let me put the gravity of the zero so that only the force field is affecting it
So you can see that here
Let me go back to the texture
If I put the force field to zero
it's affecting all of it the same
but if I put force field to one or just check it
you can see that here
it's affecting the particles based on the texture
So again
it's making the force field influence the particles differently based on the texture
as you can see right there
Pretty cool
Now again
right now
these colors are a value of 1 and 0
but here
if I go to colors and go to the contrast
you can see I could increase this contrast to like 5
And now these values are higher than one and below 0
So this is a negative value and the white is above one
So now when I play it
you can see we get this right here where where it's white right here
it has a positive value and where it's black because we contrasted it
it is now a negative value and it is sucking the particles into the gravity right there
As you could see
we could also enable clamp right here
This will basically clamp the values between 0 and 1
so they won't go above one and they won't go below 0
So now you can see that we have this right here pretty cool
so obviously you can feel free to mess around with the texture settings etc as you want
but that is all of them
These ones right here are once again for the hair particle system
So we'll take a look at that later
But these ones all affect the emitter particle system based on the texture
which is awesome
You could also see that here we could influence multiple things
so for example
we could influence the density
the force field
and the size if we want
So now it's influencing all of those
I could deselect force Field if I want
and let me delete the force field as well
So now I'm influencing the density and the size
I could also influence the damping right there
Of course
we could stack these texture influences
So for example
if I have this wood texture influencing the density
I could go back to the particle system on the second slot
I could click on New and go to the texture properties
And right here
I could change this one to clouds and I could have this one influence
for example
the size of the particles
So now you can see that the wood texture is influencing the density of the particles
And this cloud's texture is influencing the size of the particles
as you can see right there
Pretty cool
So here
if I go to my particle settings
you can see I now have these two textures and they influence two different things
Of course
I could reorder these right here
which doesn't do much
but I could also remove them by clicking on the little X right here
and it will remove them as you can see right there
All right
very cool
So that is the Textures panel
Then lastly
once again
we have custom properties
This allows for us to create custom properties that could influence other values within our particle system
You can see right here we have the settings where we could set these custom properties
as you can see right here
So this allows for us to create things such as drivers or again
have these properties influence other aspects of our particle system
So that is it for the emitter particle system
That was quite a bit
but we made it through
don't worry for the hair 1
As you can see
it is much the same settings
As you can see right here
a lot of these settings are exactly the same
We do have a couple different settings obviously
but it will be much faster because a lot of the settings are the same as on emitter
So with that I'll see you in the next 1
ciao for now Avo


------------------------

# 21_Hair Particles
Alright
it is time to take a look at the hair particle system
So let's go the particles right here
add a new one and click on hair
Now keep in mind that a lot of these settings are the same as on the emitter
So the settings that are the same
I will not go over them again
So I'll just mention that these are the same settings
And again
just make sure to take a look at the emitter video for those settings
Now
the hair type for the particle system allows for us to either create hair or fur or to distribute objects onto a mesh that basically stay there
So for example
we could distribute a bunch of rocks on an object etc
Now we do also have the new geometry nodes hair system as well
which is really great
And with that
you could also create hair and distribute objects
But this one
you could also use it
And again
this one might be a little bit simpler and give you a little bit simpler results
but it is a great option to know and to have
So let's go over this
First of all here
Once again
we have it set to here
Here we have the particle systems
we have basically the indices or the container for the particle system
and here the particle system
once again
we could add some
remove some
and we could copy them etc again
same settings as on the emitter
Now the first options we have right here is Regrow
Now the regrow right here is going to regrow these particles or this hair
the same on every single frame
so every single frame it will regrow it in the same position
This is useful
for example
if your object is being animated or deformed and you want the hairs to be in exactly the same position on every frame
So for example
hereif we go to the shape keys
so let me add a new shape key and let me add another one
Then right here in edit mode I'm going to go ahead and R twice and rotate this like so
So here on frame 1 I'm going to insert a keyframe with a value of 0
I'm going to go to frame 60 or so and insert a keyframe value of one right here
Now here for this to work
we need to enable hair dynamics
so let's just that quickly
So here
if I play this without Regrow
you can see that the hair will follow along with the deforming mesh
but if I enable Regrow
and let's make sure to move the cube because you can see right here
it's cached it
So let's remove it so that it removes the cache
You can see if I play this
the hair doesn't deform with it
and that's because on every frame
the hair is quote unquote
regrowing in the same position every single time
so it basically stays in the exact same spot
Whereas if I disable Regrow
you can see we get this right here and the hair actually moves along
Now again
if you enable that
you need to make sure to move the cube to update it
so that's what Regrow does
So ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌you can use this
for example
if you have an animated character or object that deforms
but you want the hair to remain consistent in its placement throughout the whole animation
All very cool
Let's go ahead and disable Regrow
And I'm going to disable hair dynamics
and I'm just going to delete these keyframes and also delete these shape keys
All right
so that's Regrow
then we have advanced right here
This advanced just gives us some advanced options
So you can see here that when we enable this
we get additional tabs
such as our velocity tab
our rotation tab
our children tab
hair shape
field weights
force field settings
etcetera
So if this isn't checked
we don't have those options
But when we enable this
we have those additional tabs or options
Let's leave this enabled
All right
let's go to emission right here
Very similar to the emitter right here
we have the number
This is the number of hairs
as you can see
so the number of hair strands
Then once again
just like before
we have the seed
So this is the random distribution of the hair particles
so you could change this to change how they're distributed
Then we have the hair length
Pretty self explanatory
This will change the length of the hair
Then we have segments right here
This is basically how many segments or subdivisions our hair strands have
So if we have less segments
we will have less flexible or smooth hair and it will be stiffer
and if we have higher segments
we will have more smooth and flexible hair
So for example
right here
if I turn on hair dynamics
once again
you can see that right here we have a certain amount of bending on the hair
If I put the segments down to 2
which is the minimum can have
you can see that they're much stiffer right there
and if I put the segments up to
let's say
you can see that right here
it's a little bit slow at 22
So let me put it to like 15
You can see that right here
we have a lot more segments to the hair and again
it has more bending
So again
you could think of the segments as the amount of subdivisions
So for example here
let's say this right here is our hair strand
Againyou don't have to do this
So this right here is our hair strand
You can see that with two segments
it would look like so
So we have one segment here
one segment here
if I go ahead and subdivide it
now we have 1
etc．
So if I subdivide it again
we have more segments
And again
this allows for the hair to bend more freely and have a more smooth animation or less freely and be stiffer if it has less segments
Obviously
as you saw
the higher the segments
the more computation it will take
All right
let's put this back to 5
And then right here we have the source
Once again
the source is the same as on the emitter right here
So I'm not going to go over them
They are exactly the same settings as you can see right there
So if you want to know what these do
if you skip that video
make sure to check out the video on the emitter that goes over the source
So with that
that is this section right here
the emission section
I'll see you in the next one
Ciao for now Avo


------------------------

# 22_Particles Hair Dynamics
Alright
now let's go ahead and take a look at the particle system hair dynamics
So here
going back to the hair
let's go ahead and enable hair dynamics
So here when we enable hair dynamics
it's going to go ahead and it's going to control how the hair particles behave in a dynamic simulator
such as how they react to forces like gravity
windand collision
So here
if we enable this
you can see if I play it
the hair falls down and reacts to gravity
This one right here is another story
It's being stubborn and just staying straight up
I'm also going to go into edit mode
delete the cube or delete the vertices
shift A
let's add a UV sphere
that way it looks a little bit better and it's a little bit easier to see the hair falling and it looks nicer
All right
looks like a hairy spider
So here we have hair dynamics
we could enable this to enable the hair dynamic
So here first we have quality steps
now the quality steps is going to go ahead and determine the number of calculation or steps that Blender is going to use to simulate the hair dynamics per frame
So again
it's just like the quality steps in the rigid body or in the cloth
So the more steps we have
the higher quality and the more accurate the simulation is going to be
but it's also going to increase the computation time
So we could increase this
for example
if we have hair passing through objects or jittery movements or other things that are not accurate
So here
for example
with quality steps of 5
we have this right here
Nowkeep in mind
this is a very simple hair setup
and if we increase this to
let's say 16
you can see that we have this right here
Again
this is a very simple setup
We don't have any issues
You want to keep this at the lowest value possible where it's still has good quality and it's still calculating the simulation properly
So you can see here a value of 5 and a value of 26
There is no difference in how it looks
but it's a lot slower
So you want to keep that in mind
You can see if I put it to one
we have this right here
againalmost the same as equality steps of 5
pretty much the same actually
We'll see the quality steps once we do some more complex hair simulations
Then we have pin goal strength right here
which is basically going to control the stiffness of the hair particles
So you can see at 0
we have this right here
But you can see that if I play it as I increase this
it will basically increase the stiffness of the particles
As you can see right here
if I put it to 6 or 6．9
you can see that we have this right here
And as I move this around
you can see that right here
it makes it more or less stiff
as you can see right there
So that's the pin goal strength right here
Let's put that back to 0
All right
then over here we have collisions
so let's take a look at the collisions tab
So this is basically the same thing as with the cloth
This collisions is basically going to determine whether the hair collides with other objects in our scene
So here
if I add a cube and just move it to the side
of course we need to make the cube a collision object
And now you can see that if I play it
the hair is colliding with the cube
as you can see right there
Now on this
we have the same kind of settings as on the cloth
So here we have the quality
This is going to adjust the precision of th​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e collision detection for the hair
so obviously a higher value
it's going to increase the accuracy for the collision
but once again
it's going to require more computation
So if I put this to like 14 or so
you can see that we get this right here
Againyou can see here with the hair
especially here we have a better quality of collision if I put this to 20
as you can see there again
same kind of collision settings as on the cloth
let me put this back to 5
I believe it was
Then right here we have the distance
Againthese are the same settings
I am going over these quickly just because
but here we have the distance
which is going to be the distance between the hair and the collision objects
So right here you can see if I play it right now with a distance of 0．005
the hair is pretty much on the object
But if I increase this to
let's say
point twoyou can see that when I play this
we have this distance between the hair and the collision object
All right
let me put this back to 0．005
Then we have the impulse clamping
Once again
same thing
this is going to go ahead
And if we have issues where the hair is in a tight area or tight space
if it's not acting properly and there's things like explosions or the hair is not reacting properly
you could increase the impulse clamping
And this is going to go ahead and help to prevent explosions by basically restricting the amount of movement after it collides
Then we have collision collection
Once again
same exact thing
Any object that is within that collection
only those it will collide with
All right
so that's collisions
I'm going to go ahead and toggle this up
let's then go to structure right here
So here the structure is going to determine and control the physical properties of our hair particles
specifically how they behave in response to forces like gravity
windand collisions
So here we have vertex mass
You probably guessed it
kind of similar to the cloth vertex mass right here
This is going to go ahead and control the mass of the vertices of the hair
meaning how heavy each of these segments of the hair strands are
So here
if we put right now
it's at ．3
You can see we have this right here
If I put this to
let's say 16
you can see that we have this right here where they are a lot heavier
As you can see right here
they're all kind of falling down right here
As with ．03
they're not really all falling down because again
they're not so heavy
I think it was at 0．3 because now at 0．03
they're not even falling at all
There you go
So again
this is how heavy the hair vertices or segments are
So here we could adjust this to get the desired weight and behavior for our hair
Then we have stiffness right here
This is going to control the bending stiffness of the hair strands
So higher stiffness values obviously is going to make the hair more resistant to bending
So right here
you can see that if I play this
we have this right here where they're pretty stiff
If I put this all the way to zero
you can see that we have this right here where they are not stiff
And obviously
if I put this quite high to 28
you can see they just stay in place
They are very stiff
Think of it like putting gel in the hair and just making it stiffer or less stiff
All right I'm gon na
put this back to ．5
then we have random right here
this will randomize the stiffness for the hair strands
So you can see at 0
all of them have a stiffness of 0．5
But if I put the random up to one
now let me go ahead and move this sphere so that it updates it and there we go
you can see that some hair strands have no stiffness and then a lot of them do
So this is how much it randomizes it
Againthis is a percentage or a factor
so 0% to 100%
All right
let me put the stiffness back to ．5
Then lastly
we have damping right here
once again
the damping is going to control the bending motion or how much it slows down the movement when it bends
This is going to reduce the oscillation of when it bends
basically making the hair settle more quickly after it falls down or it moves
So the higher we put the damping value
the less motion and quicker the hair is going to stabilize
And if we put this lower
obviously the hair is going to swing or bounce and stabilize less fast
So right here
you can see with the damping of 0．5
we have this right here
where right here
you can see it's kind of bouncing and oscillating and kind of settling
If we put the damping up
for example
to 26 or so
you can see that here
it just falls
but then it doesn't bounce back and forth or oscilla​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌te
It comes to a stands still motion much faster
as you can see right there
If I put the damping to zero
you can see if I play this
it's going to like bounce back and forth a bunch of times until it finally settles
As you can see
let me also move this
the cache keeps it keeps caching it
so you want to move it sometimes to update it
So you can see here
it's not damping right here
So again
it's not slowing down the motion or movement of the hair
Whereas if I bring this up to
let's say 194
wellright here
it's damping way too much
but again
this is going to control how the movement of the hair slows down
So more damping
it will slow down faster
less damping
it will slow down slower
and it will oscillate or bounce more and bend more
All right
let's put this
I forgot what it was at
but I'm going to put it to ．5
So again
this is the damping of the bending motion
so how much it dampens it bending again
resulting in it bending and oscillating
more or less
All right
then we have volume here
Now the volume tab right here is going to calculate our hair simulation using volume
So it's basically going to use something called a voxel grid
as you can see right here
and it's going to simulate this based on the space around the hair
And again
it's going to take into account the entire volume of our object and our hair particle system
So this is going to give us a more complex and realistic behavior for the hair particles as opposed to simulating it like it's a normal solid object with solid surfaces
Again
it takes into account the volume around the particles and the volume within the simulation
So here you can imagine that we have a volume surrounding this
So I'm just going to add a cube right here
like so
that's surrounding it
So here with this
you can see the first option is air drag
This is going to control how much the air surrounding the air dynamics
it's going to slow down the hair movement
So obviously
the higher this is
the more it's going to slow it down and act more like
Air and the lower we put this
it's not going to slow it down as much and it's going to act like thinner air and it won't resist as much
So you can see here with the air drag of 1
let me hide this cube for now
If I play it with air drag of one
you can see we have that right there
If I put this to zero
you can see we have this right here
And if I put this to
let's say 10
you can see that we have this right here
We have much thicker
heavier air and more air resistance
So here it's almost like the hair is underwater or in a thick environment
So that's the air drag
I'm going to put it back to one
Then right here we have internal friction
So this internal friction is going to determine the amount of friction between the individual hair strands
So you can see here
if I play it
it plays fine
but as soon as I increase this a little bit
you can see that here it's very
very slow
So this is quite taxing on the computational
So what I'm going to do
let me go ahead and put this back to 0
You can see that here
this is with it set to 0
as you can see right there
we get this kind of result and look right there
what I'm going to do now I'm going to move this to update it
and I'm going to put the internal friction to like ．2 or ．3 right there
and I'm going to play it for a couple frames so that it caches it
and I'll be back once it's cached
So here I'm going to play it
you can see how slow it is
so I'm just going to play up to frame 30 or 40 and I'll be back
So here I actually put the internal friction a little bit higher to 0．5
And you can see that now when I play it
we get this right here
So again
the internal friction is the amount of friction between the individual hair strands
So right here
let me go in the front view
So right here
we're going to have friction in between the hair strands like so
As you can see right here
because again
this is calculating with the volume
So it's taking the friction and seeing in between the hair strands and creating friction between them in that empty space
So as you can see right here
we get this like so pretty cool
Alright
againthis takes quite a bit to compute
so I'm going to put it back to 0
Then we have voxel grid cell size
This right here is going to control or determine the size of the cells in the voxel grid used for our volumetric simulation right here
So let me go ahead and unhide that volumetrics box that we had
So here
the voxel grid
basically the space around our hair particles is divided into a grid of small cubes
And these small cubes are called voxels
So here
you could imagine if I scale this down
let me just
againyou don't have to do this
I'm just going to add an array modifier and increase this right here
and then I'm going to duplicate this
So duplicate
and I'm going to put this one on the Y
and then I'm going to duplicate it again
And I'm going to put this one on the Z right there
So right here
there we go
So here you can see that we have this grid
and this is called the voxel grid
Let me position it within this right here
like that
All right
so again
the space within our simulation is divided into this grid of small cubes
Againthese small cubes are called voxels
So here you can see that we have voxel grid cell size
Now these voxels are going to contain information about the properties of our simulation
So here within our hair simulation
these voxels and this volumetrics way of calculating it is going to be used to simulate how air moves through and interacts with the hair or how the hair strands interact with each other
Againtaking into account the volume of the space that they occupy
So right here
we have these voxels
And on here
you can see that we have voxel grid cell size
So this is going to control the size of these voxels
So if the boxes are smaller
let me go ahead and make these smaller just to show you
So if they're smaller
and then let me increase these values to let me just put 33 like this
So if they're smaller
the simulation is going to be able to capture more details about how the hair moves and interacts with our environment right here and the air within it and everything
Howeverthis is obviously going to make it compute much slower and need more power
obviouslyif the boxes are larger
So let me put these to larger
Let me put these to 11 right here
and let me scale this up
So if the boxes are larger
the simulation is going to be faster and require less computing power
But it won't capture as many details about the hair movement
So you can see that once again
here we have this voxel grid cell size
and it controls the size of this voxel grid
which again
is going to control how detailed the simulation is of the hairs moving through this volumetric air
or how not detailed it is
Againthe lower the value right here
the smaller these grids will be
or these voxels will be
the higher number
the bigger they will be
Now you can see that here
if I put this to 0 and play it
and if I put it to
let's say 40 or something and play it
let me move it to update it
you can see there's no difference
And that's because we need to also change the density target and the with at 0
This is not doing anything at all
So the density target right here is going to specify the maximum density of the hair within the voxel grid
So it's going to determine how much can occupy a given volume within this grid
So basically
we could use this setting the density target to control how densely packed the hair strands are within the simulation volume right here
So again
this is going to specify the density of the hair within this voxel grid
So here
if I put this up a little bit like so
you can see that we still don't have any difference between if I put the voxel cell size to 0 and if I put it up to like 40
And that's because lastly
we need to change the density strength
As you can see
we have density target
The density strength is going to control the strength of the density target
So here the density strength is again going to control how the density target is going to influence the simulation
So the higher we put the density strength
the more the density target is going to have an effect on the simulation and the hair behavior
So obviously
right now it's set to 0
So because this influences this
but this influences this
you can see with this set to zero
nothing's happening
Because again
for this to work
we need to adjust this and this
But as soon as I put this up a little bit to like 1．03
you can see that now it's taking into account pretty cool
So now you can see that here
if I put the voxel grid cell size to zero
these grids or these voxels are going to be very small
So it's going to have a very high quality
And the quality of the hair simulation is going to be very good
But again
it's going to be very heavy
As you can see right now I'm playing it
but just now it went to frame 2
And now frame 3
you can see it's very heavy
If I put the voxel grid cell size up
that means that these voxels will be bigger and it won't be as high quality or as accurate
but it will be faster
And then right here
we could change the density target
Againthis is going to be the maximum density of the hair within the voxel grid
So right here
you can see what happens if I change that and put it to 17
or if I put it to 0
as you can see right there
And then we could change the density strength right here
So if I increase this
once again
you could see what that does
And again
with these
it's great to mess around with them and play around with them to visually kind of see what's happening
Again
the voxel grid is going to basically be the resolution of the hair simulation
Within this voxel grid right here
the density target is going to be basically how density is
And the density strength is going to be the strength of this
So again
that's the volume tab
Again with this
it's going to act as a volume metrics or a voxel grid volume like so
All right
let me go ahead and delete that
So there we go
that is all the hair dynamics settings
I'll see you in the next one
Ciao for now
Avo


------------------------

# 23_Particles Hair Render
All right
in this one
we're going to go ahead and take a look at the Render tab for the hair particle system
So over here
you can see that we have render
As you can see
very much the same as before
but I'm going to go over some of this because we could actually use this in a very practical way
not only for creating hair
but also for distributing objects in our scene
So ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌first right here
you can see that we have render as path
Obviouslywe have none
which will render it as nothing
but path is going to be our hair strands
Nowunlike the emitter
the path setting right here actually works
So you can see if I go into camera view and go to render render image
we have our hair strands
as you can see right there
Then of course
right here
we have the material and we have a coordinate system right here
Now this right here is currently not working
but what this does is basically allows for us to set a coordinate system based on an object
So this coordinate system
we can basically define which coordinate system it's going to use for calculating the orientation and positioning of the hair strands
Now
againright here
this isn't working
so I'm just going to skip over this
Then of course
we have show emitter
this will either show or not show the emitter object
in this case
the cube
As you can see
let me re-enable this
Then we have the path right here
Now this is going to be obviously the path are basically our hair strands
it's the same thing
So here under path
you can see we have B spline and steps
so if we enable B spline right here
you could kind of see what's happening to the hair strands right there
Let me go ahead and zoom into some of them right here
As you can see right here
you can see what's happening to them
Now
if we enable B spline
it's going to enable the B spline interpolation for the hair strands
Basicallythe B spline interpolation smooths the path of the hair by creating a curved path that passes near the control points rather than directly through them
So this gives us a smoother
more natural looking curve for the hair strands
Now
right here
it's obviously a little tricky to see what's happening
but let's take a look at B spline interpolation with a shader
because again
it's going to be easier to see
So here
by the way
you don't have to do this
I'm just going to go ahead and add a plane and go to shading
Then with this plane I'm just going to add a new material
And here out of the base color I'm going to get a color ramp
Color color ramp
if I could type color
my gosh
all right
color ramp and out of the factor here I'm going to get a separate XYZ set to x
and then I'm going to hit CRL T mapping texture coordinate
I'm going to delete the image texture
plug this into here
and I'm going to change this to generated
All right
so right here you can see that we have the color ramp
we have black right here and white right here
As you can see right here
if I move this
you can see what we get
Now
right now
the interpolation is set to linear
but I could change the interpolation to B spline right here
and you can see it gives us a much smoother fall off or interpolation
So you can see if I go back to linear
we have this
And if I bring this over like so
you can see this is a linear interpolation
and this is AB spline interpolation
You can see that the gradient from black to white is much smoother on the B spline as opposed to the linear
And that's basically what it's doing for our hair strands
Let me go back here
So it's using B spline interpolation
which again
gives us a much smoother interpolation for our hair
As you can see
You can also see that here at the beginning of the box
it kind of removes the connection because again
it is giving a smoother interpolation
So it's kind of disconnected
as you can see right there
All right
let me go ahead and deselect that
Then we have the steps right here
The steps is going to define the number of subdivisions for the hair strands
So obviously
the higher the steps
the more segments we will have for the hair
which means it's going to have a finer
smoother kind of simulation or hair strands
whereas if we put this lower
we will have less
So for example
right here
if I enable hair dynamics and play this
you can see that right here at this angle with a steps of three
In fact
let me put the steps to 0
You can see if I render this render image
we get this right here where the hairs are completely straight
If I put the steps up to
let's say
you can see that here
If I render it out
we get much smoother hair strands
So you can see the difference
If I go to slot 2 by hitting two right here and then put these to 0 and render image
you can see the difference
If I switch from slot 2 to slot one right here
as you can see right here
So that is the steps right here
It's basically the resolution of the hair again for the render
because you won't see this in the viewport again
this is the render tab
You can see here
if I change this
we can't see anything in the viewport
All right
let me set this back to 3
then over here we have timing
So here under timing
we basically have the starting time of the hair particles and the ending time of the hair particles
So this kind of trims the hair curves in a way
So here you can see if I change the start time of the hair particles
we get this right here
whereas if I change the end time of the hair part
you can see that we get this right here
So if I mess with these values
I could even do something like this
And you can see that when I render it
I get this right here
Now we could also randomize this start and end time by increasing this random right here
As you can see it will randomize it
let me go ahead and put this a little bit more like that
And you can see that this random button will randomize the start and end time
Pretty cool
If we enable absolute path time
it will basically allow for us
You can see that right now here
these are as a factor
so from 0 to 1
if we enable absolute path time
it basically allows for us to change these based off of frames
So you can see here
we could change it based off of the frame instead of a factor of 0 to 1
as you can see right there
And again
we have the randomness right here
Let me go ahead and deselect absolute path time and put this back to 0 and 1 and the random to 0
And then here we have extra
once again
extraextra
Read all about it
This is the same settings as the emitter
so I won't go over these again
So we have these right here
Againthis is for the render as path
Now what's really cool is that with the hair particle system
myself and others mainly use it to distribute objects on another mesh
So for example
hereif I go ahead and in edit mode
delete the vertices
shift a
add a plane
and scale it up
you can see that we have the hair particles right here
Then here I could go ahead and change this from path to object
And now let's say I want to distribute rocks on here
I could hit shift A
add in an ICO fearre
change the subdivisions to one
and just move this out of the way
Then on here
I could select as the instance object
the ICO fear-related
You can see I have a bunch of rocks distributed on here
I could change the number of hair particles or rocks right here to put a little bit less
And of course
I could enable rotation
making sure that the advanced tabs on and here with rotation
I could change the face and randomized phase
You can see if we change randomize
it won't do anything when it's set to velocity here
So we could change this
for example
to object z right here and then change this
So I could change this to change the rotation and the phase and randomized phase if I want
And now we have them randomly rotated
Of course
if I go into edit mode of this and move this
you can see it will move based on the origin point
as you can see right there
which is pretty cool
So maybe here
let me go ahead and put these rotations back to 0
And also let me change this back to velocity here
You can see if I go into edit mode of this and hit G z
it moves like so
So if I hit G and y
I could bring it up so that it's closer to the surface
And then right here
once again
I could change the phase and the randomized phase to randomize them
Very cool
how awesome is that
So we can distribute objects in our scene
Of course
if I go ahead and extrude this
you can see that here the rocks will be distributed wherever we have this
And then of course
right here
instead of object
we could also use a collection
so I could select collection
And here I could create a collection
So let's say I want rocks
and let's say sticks or logs
I can hit shift A and add a cylinder
move it to the side S
shift Z
scale it like so
and here kind of make a very crude stick
So selecting that face control
right click to extrude it like so
So let's say that that's a stick
I could shift like both of these M key
move to a new collection
call it rocks and sticks create
And now going back to here
I could select the collection rocks and sticks
And you can see that now I have rocks and sticks right here
Pretty cool
Of course
we could use the use count right here to decide how many rocks or sticks I have
So let's say I want less sticks on the rocks
I could put the rock count up so that I only have a couple of sticks
Of course
I could also use vertex groups
So in edit mode
if I select all this and subdivide it a couple times like so
I could then select some random vertices right here
like so
Go to the vertex groups
create a new one
and click Assign
And then right here in the particle system under the vertex groups for the density
I could select group
And now we only have those rocks and sticks right here
As you can see
pretty cool
Now you can see that here
some of them are intersecting with other ones
So if we don't want that
We could just go up here
We could put the number down
but we could also change the source
For example
herewe could change the particle's face and just change this so that they are distributed a little bit more everywhere
We could also change and put the number down so that we have less
as you can see right there
So something like that
But this is a very cool way to use the hair particle system
which I do all the time
Again
distributing objects or collections onto your meshes using the hair particle system
So that is the render
We also have the viewport display
which is exactly the same as you can see right here
Same kind of options as before
So we won't go over that either
In the next video
we're finally going to take a look at the children
Now these are really cool
so we'll take a look at it for the hair particle system and the emitter particle system
we'll take a look at simple first and then interpolated
So with that I'll see you in the next one
Ciao for now Avo


------------------------

# 24_Particles Children Simple
All right
and this one we're gon na Go ahead and take a look at the children
Nowonce we're done with this
there is not much more else regarding the particle system
So we're almost there
hang in there
and then we will do some practical examples of hair and emitter particle system and create some cool scenes
So here for this one
obviously we can use the children for emission and for hair
So I'm going to set up
let's set up a cube right here with the particle system emitter and let's hit shift D x
duplicate it
make it a single user by clicking the little 2 and changing this one to hair on this emitter one
Let's also give it an emitter object
Otherwisesome of the settings won't work properly
So let's go to render
And right here
let's change this from Halo to object
You can get whatever object you want
I'm going to get a Suzanne or monkey because that's going to help us to see kind of the orientation move her to the side and select Suzanne as the render object and put the scale up a little bit right there
All right
so now we have the Suzanne's and the hair
Let's go ahead and open the children tab on both of these
And you can see that already automatically opens it when you open it on one
So the children right here basically allows for us to add additional hair strands or particles
basically adding complexity to our particle system without significantly increasing the number of particles and the amount of computation that the computer has to do
So it basically adds instances or duplicates of our objects and our hair strands
So right here
we have simple and interpolated the options on
These are basically the same
but let's take a look at simple first
So let's enable simple on both of these
You can see automatically when I enable this
it's now added children to our main particles
Again
this is the same kind of thing when you have a child parent relationship
So for example
hereif I have a cylinder and a cone
if I select this shift
select this CR P
parent it
Now this is the parent and this is the child
So this is the same thing with our particles
We have our parent objects
which is the original emitter objects or the original hair strands
and then we have the children which are around these original hair strands or emitter objects
All right
let's go ahead and take a look at this
First option right here we have is display amount
This is the amount that is going to be displayed in the 3D viewport for the amount of children
So you can see here
let me play this so that this one goes a little bit
So again
this is only the display
so if I put this down
you can see what's happening right here
For every original hair strand right here
whatever we set this to
for example
if I set it to 5
for every original hair strand I'm going to have five additional children around each additional hair strand
So if I have 1000 particles right here
times 5 I'm going to have 5000 particles
Now with these children
same thing with the emission
You can see that right here
Againthese are kind of clustered together even more
You can see here that I have X amount of children in the viewport
pretty cool
Then we have the render amount
Thisas the name implies
is going to be the amount that's rendered out
Now this is very useful because obviously if you put the display amount to 100 or the render amount
your scene might crash because that's going to be very heavy
So you can put the display amount to a lower number
But then when we actually render it out
you can see that right here
it's going to render it out with 100 and same width right here
So now when I render it o​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ut
you can see that the hairs right here have 100 children
and these have 100 as well
Of course
we could put this render amount to the same as the viewport
So if I put both of these to five
you can see that here we have 5 in the render as well
And of course
you could put the display amount to 100 if you want
But again
this will lag or slow down your computer and it might crash it
So it's recommended to put the display amount lower and the render amount higher if you need
I'm going to go ahead and put this back to 100 and the display to 5 on both of these
All right
very cool
Nextwe have length right here
Obviouslythis has to do with the hair
You can see on the particles
this is not going to do anything
but on the hair you can see that we have the length of the hair right here
Again
this is the length of the children
then we have the threshold right here
The threshold is going to control how many of these children particles are left untouched by the length right here
So the higher we put the threshold
the more of these particles will be at their original length
So you can see if I change this threshold right here
and I change the length right here
you can see that more of them stay at their original length
Whereas if I put it to one
they're all staying at their original length
But if I put this down
you can see what we get right here
So again
this is kind of like a randomization
You could think of it
Againthis will do nothing on here because these are not hairs
All right
So we got that right there
then we have the seed right here
The seed is going to change the random distribution of the child particles
So you can see right here
just like anything else
this will change how it's distributed
And of course
this will work here as well because this is just the distribution
You can see it's giving us this weird kind of a jittering
jiggling motion
which is kind of funny
All right
so we have the seed
then we have the size right here and randomized size
You can see on the hair strands
this won't do anything because obviously the hair strands don't really have a size
But if I go over here
you can see if I change the size right here
this is going to go ahead and change the size ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌of the particles
This is basically a multiplier for the scale right here
So this will multiply that scale
So here we could change the size and of course
the size randomness
againvery much the same as this right here
does the same thing
but you could think of this right here as multiplying this already existing size and scale randomness
So that's the size and the randomized size
I'm just going to put that back to one and 0
Then we have the radius right here
This is really cool because right here you can see that everything is clumped together
this radius is going to be the radius around the main or parent particle that the children are surrounding
you can see with the radius of ．2
they are very close
But if we increase this
you can see that separates them out a little bit
as you can see
So this is going to be the radius of the children around the parent
then we have roundness right here
this is how round that radius around the parent is going to be Now
right here
it's a little bit trickier to see because we have so many Suzanne's
let's put the number to 2
that way we could see what's happening
So right here you can see
let me put the radius down for each Suzanne
so right here we have one there
and I don't know where the other one is
all right
let's just put it to one right here because it's just kind of stacking all of them right here
So let's just put this to one right there
So right here
you can see that with the radius
so we have one parent and five children
then with the radius you can see it changes how far or close they are to the parent particle as you can see right there
Now
once again
the parent particle is not showing up because again
under render
if you remember under extra
we need to enable parent particle right here for the parent particle to show up
So if you're wondering
where's the parent particle
you need to enable this for the parent particle to show up I'm just going to disable it for now because it doesn't really matter
Then you can see the roundness right here kind of distributes the children in a more spherical way around the parent
where you can see right here
if I go into a front view
it's all just a straight line
If I increase the roundness
you can see that it will again make this more of a spherical influence or kind of fall off
Let me increase the display amount so that we could see a little bit better
And you can see the difference with roundness right here
and of course
with the radius right here
So the radius kind of separates them and the roundness will give it a rounder fall off
We have the same thing on the hair particles
So you can see right here
if I change the radius
we get this right here where it separates them out more
And we have the roundness right here where it kind of gives it a rounder kind of look or fall off
Obviouslyit's a little bit different here
You can see it's more giving the roundness
Let me go into front view
So right here
it's going to give it a roundness at the start and end because you can see right now it's completely straight like so
But if I increase the roundness
you can see what that gives us
It gives us this roundness fall off
pretty cool
All right
so that's that
let me put the roundness back to 0 and let me put this back down a little bit because it's going off of the faces of the cube
And this right here
I'm also going to put the roundness to 0 and I'm going to put this back down a little bit
I forgot the exact number it was at
but there we go
All right
so that's all these settings right here
Then you can see that we have clumping right here
So let's take a look at the clumping
All right
so here
first of allwe have used clump curve
So here you can see that we have certain parameters which are kind of fixed that go from negative one to 1
Let me set that back to 0
but if we enable use clump curve right here
and it allows for us to use a curved to control the clumping instead of those fixed parameters
So right here I'm just going to click on the little drop down and click on reset curve right there because it's not showing up
So now we have this curve right here if I left clip
And drag
I could add a new point
And now you can see that I could control this
I could also left click and drag to add a new point
So another point
as you can see right there
And now I could just add however many points I want
and this will control the clumping
as you can see right there
Pretty cool
We have a couple of options here
So we could zoom in or zoom out
Then right here
I could change whether it's clipping the graph or how much it's clipping it
As you can see right here
I could increase this
so I could increase the x and Y
and now I could zoom out even more
As you can see right there
Let me set these back to one and just zoom back in
In fact I'm going to click this little drop down in this dropdown we have reset view and reset the curve
so I'm just going to reset the curve
We could also reset the view
for example
if we zoom out too much
we could reset the view
And then we have extend horizontal right here
This will basically let me go ahead and turn off use clipping
So now I could zoom out more
If I enable extend horizontal
you can see that right here at the start and at the end
it's going to once it finishes this
it's going to extend it horizontally forever
and if I select extend extrapolated
it's going to extend it extrapolated
meaning it's going to continue that projection
And again I'm going over this relatively fast
But for example
if I increase the max x and y and zoom out
you can see that right here
if I select extend horizontal
we get this right here or extends horizontally and extend extrapolated
you can see it will continue whatever kind of angle that your curve end point is at
As you can see right there
it will just extrapolate it like so
Again
reset view
I could reset the view
let mess the x and y back to one
and let me reset the curve again
and right here
let me reset curve and reset view
there we go
So right here
once again
we have this right here
we have the kind of curve
whether it's an auto handle
a vector handle
or a auto clamped handle
I'm not going to get into this too much
but you can see that here with the auto handle
it's based going to give us a smooth fall off with the vector handle
it gives us a sharp fall off
as you can see right there
And with the auto clamped handle
the auto clamped handle were similar to the auto handle
but it clamps it so that it doesn't overshoot the handle
It basically prevents overshooting of the handles so that we don't get any spikes or bumps in our curves
Let me change this back to auto
Then right here we have the position of the curve on the x and the y axis
As you can see right here
the X is going left and right
The y is going up and down
As you can see right here
we could delete that curve point
so I could hit the X key to it again
left click to add more
So there we go
that is the use clump curve
Againwe could use a curve to control the clumping of our particles
Now again
the clumping is going to determine how much the children particles clump together
So right here
if I disable use clump curve
you can see we have clump right here
if I put it to one
you can see that the children are clumping together
And if I bring it to zero
you can see that they're not clumping together
So you can see this right here
You can see
especially when we look at where they connect on the cube
so you can see right here
they are clumping or not clumping as you can see right here
So you can see what's happening right there
You can see out of negative one
it's clumping all together where they just meet up right there
And at a value of one
they clump in a positive direction like so
obviously zero being no clumping
And like I said
you could use the clump curve to create a curve for the clumping instead of just a value
So you can see what that gives us
If I reset this and kind of change these values
you can see how the curves are clumping
especially as they start to extend right there
So you can see more clumping or less clumping
All right
let me disable that
You can see over here on the particles
we could also change the clump right here
So they clump more or less
as you can see right there
And if I enable use clump curve and reset the curve
once again
we could use a curve to determine the clumping of these particles
Pretty cool
All right
let me disable use clump curve
then we have shape right here
this is going to be the shape of the clumping
So right here
if I put the clump to
let's say
to one right here
I was wondering why I wasn't doing anything
it's because I have the Suzanne selected
All right
let me put this
let me put this back to one or no
it was at 0．5
I think it was a 0．5 and put this back to 0．5 as well
All right
let me go over here
I guess it was at 0
that's fine
we're gon na go to that
Anywaysso right here
if I change the clump
you can see we get this right here
if I change the shape
you can see it's going to change the shape of the clumping
as you can see right there
And you can see the clumping at the end as well
quite well
how it clumps together
And then of course
we have this on here as well
So if I put the clump to one
you can see this will change the shape of the clumping
very cool
then we have twist right here
this will dictate the twisting of the clumping
So once again
if we go over here
so right here
if I change the twist
you can see what that gives us
Now if I put the clumping to 0 right here
you can see that this twist will basically twist the clumping
so you can see that especially right here
let me zoom in
so right here
watch these hair strands
You can see how it twists them together
as you can see right there
So this will twist the clumping as you can see
And of course
all of these values are going to influence themselves
All right
then we have it over here
we're over here
it's not going to do anything
againthese settings are more for hair
but of course you could use it on emitters
you could use children on emitters
but you'll be using more of these settings here
whereas all of these settings down here are more for hair particle systems
All right
then we have used Twist curve
so once again
instead of using just a value here for the twisting
we could enable once again a curve reset the curve and we could use some curves to determine the twisting
As you can see right here
pretty cool
All right
let me disable that
Then we have clump noise right here
So here
if we enable this
this is going to go ahead and add variation to the clumping of the children particles
so it's going to make it look less uniform as you can see right here
with and without it
Then right here we have the clump noise size
This is going to control the size of the clumps when we have clump noise enabled
obviously
So you can see right here
you can see what's happening right there
So that is the clumping section right here
let's go ahead and toggle that up and next let's take a look at roughness
And in fact
I think we'll continue and finish the simple and interpolated children in the next video because this one has gone on long enough
So in the next one
we'll finish with roughness and kink
and then also take a look at the interpolated
So with that I'll see you in the next one CIA for now avoir


------------------------

# 25_Particle Hair Kinks
All right
let's go ahead and continue with the children's setting
So right here w​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e have roughness
This is going to be the roughness of the children particles
So here you can see that we have a used roughness curve
Once again
same thing
this will allow for us to use a curved to control the roughness instead of the fixed parameters
So here
if I reset the curve
you can see that here
this will control the roughness of the hair strands
as you can see right there
Let me go ahead and deselect that
Then right here we have uniform right here
this is going to apply a uniform or consistent amount of roughness throughout the hair particles
So you can see what this gives us right here
So again
this is going to apply a uniform or evenly amount of roughness across the entire length of the hair or the child particle strands
as you can see
So here you can see
the higher the amount
the more this is going to create roughness
as you can see right there
All right
let's put this back to 0
So here I'm going to bring this up a little bit because next we have size right here
The size is going to determine the scale or size of the roughness effect
So here you can see that when I change this
it changes the roughness effect
as you can see right there
So you can see the smaller the value
the more rough and disheveled it looks
And the higher I put this
the more it kind of irons out the roughness
as you can see right there
All right
let me put the size back to one and the uniform roughness back to 0
We can see what happens if we do it over here to our particles
So you can see right here
we have the roughness
and then we have the size right here
as you can see
All right
very cool
Let's go back to the hairs
Then we have endpoint and shape
So again
this has to do with the roughness because we're in the Roughness tab
Now the endpoint is going to add roughness to the end points or the tips of the hair or child particles
So this is useful if we want to create effects like frayed or split ends on the hair
So you can see here
if I increase the endpoint
you can see what's happening to the ends of the hair
Againit's adding roughness to the hair tips or the endpoints of the hairs
as you can see right there
Then we have the shape right here
which is going to control the shape of the roughness of the endpoints
So if we change this
it's going to adjust how the roughness is distributed towards the end of the hairs
So you can see right here
we have roughness only here
and then the hair strands right here are completely straight
If I change the shape
you can see that the roughness goes down all the way to the start of the hair right here
as you can see
So you can see what that gives us
And as I change this again
it changes where the roughness for the endpoint kind of starts or ends
as you can see
Pretty cool
let me go ahead and put the shape to 0 and the end point to 0
Now if we try this on here
you can see that obviously it does something
but again
these settings are more for hair particles and strands
All right
then the next one is the random size and threshold
So right here
the random is going to go ahead and give randomness to the roughness for the child particles
So the higher we put this
the more unpredictable and varied the roughness is going to be
So you can see here
if I increase this
the roughness is more and more random
as you can see right there
Pretty cool
All right
then we have size
so this is going to control the size of the random roughness
So if I put the random roughness up a little bit
you can see if I change the size
this will again affect the random roughness size
So you can see that here
the smaller I put it
the more random it looks
and the higher I put this value
the more ironed out it looks
Then we have threshold right here
which is kind of like a random value
This is going to go ahead and determine the percentage of particles that are going to be affected by the random roughness here
So you can see here
as I change this
if I put it to one
none of these hair strands are affected by this random roughness
And as I put it down
you can see more and more hair strands are pretty cool
All right
let's put all of these back to 0
And once again
you can see that here
it's going to change it
But again
these are more for hair strands
but you can see what we get right there
All right
then lastly
we have kink right here
Now this is really cool
This allows for us to basically change the kind of shape of our hair
So you can see here we have a bunch of different kink or hair types right here
Now the kink is going to determine how the children particles are going to rotate around the parent particles
So we could create various kind of looks for our hair
By default
it's set to nothing
so this will give it no kink or no rotation around the parent particle
The next one is curl
So you can see here with curl
it's going to add a spiral curl to the children particles around the parent particles
So here I'm going to go over these rather quickly
First we have amplitude
the amplitude is going to control the height or intensity of the curl or the kink
So here you can see if I change this
it controls the height or the intensity of it
Pretty cool
Let me hit Ctrl Z
put that back to ．2
then here we have clump
this is going to determine how much the kink is affected by clumping
so here
if we put it to a value of one
it means that the kink is fully affected by the clumping
You can see right now it's not doing anything because we have no clumping
So if I put the clumping up a little bit
you can see that now this value determines how much of the clumping is affecting the kink as you can see right there
Pretty cool
Let me put the clump back to 0
All right
then we have flatness right here
The flatness is going to be how wide or flat the kink is
so if we increase this flatness
it's going to make it so that the curls or waves are flatter as if they were pressed down or stretched out
so you can see that right here
if I zoom in
you can see what this flatness does right here
It's basically flattening it out like so
All right
then we have frequency right here
this is going to control how many times the strand curls or kinks along its length
so a higher frequency is going to mean more curls or kinks
so if we change this you can see right now it's not doing too much because we don't have enough steps or resolution for our hair
So let's go to the viewport display right here and let's put the strand steps up
let's put this to like 7 right there
and now if I go back here and change the frequency
you can see that here
the more I increase this
the more times it basically curls
as you can see right there
And we start to get some really cool hair effects
as you can see
All right
let me put that back to two for the frequency
then we have the shape right here
this is going to determine the start and end shape of the kink along the length of the strand
So you can see here
as I change this at negative one or negative 0．99
it basically starts right here
and as I increase it
it goes from there and goes all the way to the end of the strand or the hair particles as you can see right there
So we could change the shape right here to basically adjust when the curls start and make them start tighter and end looser if we want
or vice versa
So for example
if I increase the frequency right here
you can see if I change the shape
you can see what that gives us
So we can kind of dictate where they start
if they start towards the end of the curve or towards the beginning
or just throughout the whole curve
as you can see right there
Pretty cool
All right
let me put the frequency back to 2 and the shape to 0
Then after curl
we have radial
So the radial one
as the name implies
radial having to do with radius or a circle
this one is going to go ahead and create a wave like or spiral like effect
It's going to radiate outwards from the hair or the particle strand
and it's going to form a circular pattern around
againthe parent strand
So here
once again
we have the same kind of settings
so I'm going to run through these pretty quickly
So here we have the amplitude
it's going to control how high or intense these radial waves are
So you can see we get this right here
Let me put that back to the default
We have clump right here
This is going to determine how these clump together
so let me actually put this amplitude up a little bit
and if I put the clump
you can see how these are clumping together
it's a little bit tricky to see
Let me zoom in here
try to see if I we could get an actual visual
Let me try increasing the display amount for the children to like 20 right here and right here
let me change the clump so you can kind of see what that does
it's very
very subtle as you can see it's very hard to see what it's actually doing
but basically this is going to control how the radial waves clump together
So a higher value
they will clump closer together and a lower value will keep them more separate
All right
let me put the display amount to like 10 or so then of course right here
let me put this amplitude to like two
then of course
right here we have the flatness
This is going to once again determine how flat these waves are
Once again
you can see it's a little harder to see it on this one as opposed to on the curl
You could clearly see what's happening with the flatness on radial
you can see that this is very subtle and not doing much
All right
and then the frequency
once again
is going to determine how many radial waves is going to be throughout the hair
So here
if I change this
you can see that I get more radial waves
as you can see right there
And obviously if I put it lower
I have less
as you can see
and then the shape once again is going to determine the shape
And where it starts on the curve
so here at negative one
it's nowhere
And as I increase it
it starts from the base and increases all the way to the end of the hair
Or if I put it over here
you can see it's only at the end of the hair
but not at the start or base of the hair
Pretty cool
Now these right here don't do anything really for the emission particle system
obviouslybecause
I mean
what is it going to kink or curl
So right here
you can see if I would do curl
it will kind of shift things around
but again
these aren't really made for the emitter system
they are made for the hair
So I'm not going to go over these on the emission because again
they just kind of shift things around and it's rather pointless to use these on an emission particle system
All right
let's go back here
you can see what we get right here
pretty cool
So that's radial
then we have wave
once again
we have the same exact settings
so I'm going to run through them even faster
We have the amplitude again
the height or intensity of the waves
let me put the shape to 0 as well
since it's only doing it there
So here you can see we could get some cool wave like hair patterns
that's the amplitude
we have the clump right here
which is going to determine how much they clump together
Once again
a little trickier to see
On here we have the flatness
againhow flat or compressed or squash they are
or how not flat or compressed
We can see this a little bit better on this one
as you can see right there
you can see how it's changing here
very cool with the flatness up
It's kind of compressing them together or squashing them together
Againit's making them flatter against a parent strand
so you can see what we get right here
In fact
maybe we'll see this a little bit better if I put the number of hairs to one so that I just have a single strand
you can see that right here
let me zoom in a little bit
If I change the flatness
you can see what's happening here with the flatness at zero
they're kind of separated
and as I increase the flatness
it basically flattens them towards the parent strand
kind of like they're ironed out
so it's like ironing out the hair as you can see right there
pretty cool
and of course
the amplitude is the intensity of it right there
All right
let me change this back to 1000 right there
Again
you could change things to a single particle when you just want to isolate what it does
it can make it a little bit easier
then we have the frequency right here
obviously this is going to be how many times
it creates a wave
So here
if I put it to 1
we got that
and as I increase it
you can see we get more waves
pretty cool
and once again
the shape
so kind of where the waves are starting and the shape of the waves
as you can see there
then we have braid
once again
same exact settings
but for a braiding type
let me put the shape to 0
I'm going to run through these even faster
Okayso the amplitude
once again
the intensity of it
the clump
how much these clump together again
not really doing much here
flatnesshow much these are compressed or flattened towards the parent particle
the frequency is how many times it is creating this braid effect as you can see there
And the shape kind of where this braiding starts or ends
you can see that with the shape on this one
it is quite different
as you can see it doesn't go through the whole hair strand
as you can see right there
which is rather interesting
so you can see what that gives us all right
And then lastly
we have spiral
As you can see this
this is pretty intense right here
You can also see the spiral type has a couple more options
Let me put the shape to 0 right here
and let me put the frequency to two right there
And there we go
So once again
as always
we have the amplitude
So with the spiral 1
it's going to create a spiral or corkscrew type pattern
So here we have the amplitude again
The amplitude is going to be the height or radius of the spiral
So here
this is going to make the loops or the spiral loops wider
so it's going to increase their distance from the center of the spiral
as you can see right there
So we get this right here
Againit's creating this kind of hair
and then it's spirals like that
Then we have randomized amplitude
This is going to vary the amplitude along the strand
So you can see right here
as we change this
it varies the height or the intensity of the amplitude
Then we have additional settings right here such as axis
The axis is going to specify the axis around which the spiral is going to be formed
You can see we have it set to Z
if I set it to Y
we have this right here
And if I set it to X
you can see that we have this right here
pretty cool
Then we have randomized access
This is going to add some randomness to our access direction
This basically can cause the spiral to deviate slightly from the axis that we specify here
So if I change this
you can see obviously at 1
it's going to deviate a lot
but you can see what that gives us
Let me also set this back to Z just because I like it better on the Z
all right
so you can see right here
it's going to deviate or randomize it based on the axis
Then once again
we have the same settings here
we have the frequency
so this is how many times it turns around
So you can see right here
it was set to about a two
but if I change this
you could see we could change how many times it rotates around or it spirals around
So let me just do it like that
And then we have the shape kind of where it starts and how it behaves
So this is going to adjust kind of the profile of the spiral along the hair strands
So you can see what this one gives us here
We got like a hair monster here
Pretty coo​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌l
Let me set that back to 0
And then here you can see we have an additional setting the steps
This is basically
let me increase the frequency
this is basically the resolution for the spiral
You can see right here
it's very blocky
but if I increase the steps
you can see that right here
it increases the amount of resolutions for the spiralling effect
So obviously at two
it's very rough
And then right here
as we increase this
you can see we could get a much smoother kind of spiralling effect
as you can see right there
And let me bring this down
there we go
So you can see right here
we got much smoother curls or spirals
Pretty sweet
All right
there we go
That is all the settings for the children
We obviously need to take a look at the interpolated
very simple
it's almost the same
a lot of the settings are basically all the same
There's one extra tab in here
as you can see right here
we have parting
so we'll take a look at that in the next video because this one has gone on long enough
but I'll see you in the next one
Ciao for now Avo


------------------------

# 26_Particles Children Interpolated
All right
in this one
we're gonna go ahead and take a look at the interpolated children right here
Now
first of allwhat does interpolated mean
Because if we understand what this means
we will understand what it does better
So to interpolate means that it's going to estimate or give us or insert values between two known values
So for example
if right here we have a hair strand right here
and let's say we have one right here
kind of like we have right here and right here to interpolate
If we do it on simple
it's just going to add children particles like so and like so
But if we do it with interpolated
it's going to add values between these two values or between these two hair strands
So here
it's going to interpolate and add hair strands in between them
just like so
So here you can see if I turn on interpolated
we have exactly that
where we have values inserted or hair strands inserted between these major hair strands
So whereas with simple right here
it's going to generate the children exactly where the parent hairs are at the same location and everything interpolated
it is going to add children hair particles in between the parent hair particles
So this is going to give us a smoother
more evenly distributed result
So if you're going to create fur or hair
you're definitely going to want to use interpolated for the most part
as simple
just looks kind of bad
So you can see what that gives us on our particles over here
You can see what this gives us
Againit adds it in between
whereas with simple
everything is clumped together
With interpolated
you can see everything is separated out a little bit more
Now you can see that here
these settings are exactly the same
As you can see right there
we actually have two less settings right here
and we have one additional setting here
And the only difference is that we have a parting tab right here
So let's take a look at this
Once again
we have the display and render amount
the length
the threshold
the seed
as you can see right here
And then the only difference right here is we have this virtual parents and long hair
So first here we have virtual parents
So with virtual parents
it's going to go ahead and it's going to make some of the children particles become virtual parents
So basically they will become parent particles and they will help to influence the nearby particles
So you can see here at 0
we have this
And as I increase this
you can see how it changes the distribution of the interpolated particles
So again
with these virtual parents
it's going to make some of these children particles become temporary parents
And this is going to help to control more of the distribution because these child particles that are now temporary parents will help to interpolate or distribute the particles much better
Then we have long hair right here
which we could enable or disable
With the long ha​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ir
it's going to go ahead and adjust the behavior of the child particles to better suit long hair strands
So this is basically going to make it so that these children particles behave more naturally for long hair strands
So you would enable this if you have longer hair strands
And those are the only two additional options here
And then the additional tab that we have is the parting tab right here
First
we have the parting tab right here
This is going to control how much hairs or strands interpolates between the parent articles
so you can see at 0 right here
we have a lot of strands interpolated between these
But as I bring this up
you can see at one
it just looks like simple
where we have nothing interpolated
As I bring it down
you can see what this gives us
Pretty cool
Then right here we have a minimum and maximum
so if I put the parting up a little bit
this minimum and maximum is going to determine the maxim or minimum angles in which the parting right here will take effect
And this is relative to the direction of the parent particles
So you can see here
as I increase the minimum right here
if I increase it high enough
you can see that the parting will no longer take effect
as you can see right here
So if I put it above a minimum of 90 right here
you can see that this parting no longer takes effect
So you can see that this is a 90 degree angle
Again
you can see right here
we have a 90 degree angle
So if I bring this above 90
the parting no longer takes effect
Let me bring this to 0
If I bring the maximum up like so
you can see that as I bring it past 90
So once it reaches past 90
which is the angle that we have here of the parent particles
you can see that it's changing how the parting is taking effect
So right here below 90
we have the parting taking effect
As I bring it above 90
you can see that's not taking effect as much as you can see right there
So again
this is the minimum and maximum angles for the parting to take effect
Pretty cool
All right
and that is pretty much it
that is the interpolated type
And again
of course
we have these options over here
you can see that here
these don't do anything
as you can see
because again
this is more for hair particles
And you can see that the virtual parents right here
it does something
But again
this is more for hair particles
So with that
that is the children
we are basically done with all of the settings for the particle system
We do have one more which we haven't seen
which is the hair shape right here
And you can see that all of these down here are the same as on the emitter system
So we don't need to go over them
So in the next one
we're going to take a look at hair shape
and then we're going to take a look at practical examples for using the particle emitter and hair systems
So with that I'll see you in the next one
Ciao for now
a Vo


------------------------

# 27_Particles Hair Shape
Alright
it is time for the last settings of the particle system
This is a bittersweet
but in the next videos we're going to take a look at practical examples of using the particle system
So it's going to be even funner
So over here we have hair shape right here
Now you can see that currently this
if I change any of these settings
it's not doing anything
And that's because we need to first take a look at another setting in the render properties
So over here in the render properties
you can see we have curves and we have two options
We have strand and strip
Right now it's set to strand and that's what these are
So with that set to strand
it's going to render the curves as thin strands
As you can see right here
it's going to ignore the curve diameter
If we change it to strip right here
it's going to go ahead and render the curves as flat ribbons with rounded normals
And these ones are going to be more detailed than strands
and they're going to be able to have a diameter or thickness
So you can see here
if we change it to strip and go back to the particle settings
if I change the strand shape right here
it is now doing something
So let's take a look at these options right here
So right here
the strand shape is going to go ahead and control how the hairs thickness transitions from the root of the hair to the tip
So you can see here
as I change this
we have it tapering off or transitioning from the root to the tip
So you can see what this gives us right here
If we bring this to a lower value
you can see that it transitions off later in the hair
And as I bring this off
you can see it's transitioning or tapering off earlier on the hair strands
So that's the strand shape right here
Let me put this to 0
Then we have the diameter root right here
Obviously this is the diameter for the root or the start of the hair
so if I change this
you can see that this will increase the thickness of the start of the hair
as you can see right there
So you can see here
this is changing the diameter of the root of the hair
Then we have the tip right here
this is the diameter for the tip of the hair or the thickness at the tip of the hair
as you can see right there
Let me put that to one as well
Then we have diameter scale right here
This is going to go ahead and multiply both the root and the tip diameters
so we could scale the entire thickness of the hair strands
So right here you can see that this multiplies both of those values
obviously if we have the tip at 0
this is going to multiply this times 0
So you can see it's not doing anything to the tip
If we put the root to 0
obviously we have no hair
But right here
you can see that this will multiply both of those values
Then right here we have close tip
this is going to force the tip of the hair
the scale to 0
regardless of the tip diameter or the multiplier of the diameter scale
You can see if I uncheck this right here
the tip or the end of the hair has a certain thickness to it
But right here
if we enable close tip
no matter what these are set to
it will still taper it off into a point and have 0 thickness at th​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e tip
If we enable close tip
very cool
So that is these settings
We have one last setting over here
Under the curves
we have additional subdivisions
Once again
you can see if I change the strand
this doesn't take effect or the settings we looked at doesn't take effect
so let me change it back to strip right here
Obviously this is subdivision
So if we increase this
it's going to increase the smoothness of the hair strands and it's going to give it higher resolution
So this is just like adding a subdivision surface modifier
You can see what's happening here
as you can see
so this is subdividing the hair strands
So there we go
that is all the settings in the particle system
Well done
you have learned every single setting in the particle system
In the next videos
we're going to use these practically
So with that I'll see you in the next one
Ciao for now Avo


------------------------

# 28_Sandman Animation
Alright
we have taken a look at all of the settings of the particle system
Now it's time to see how to use the particle system practically
In this one
we're going to create a Sandman animation using keyed particles
So first thing we want to do is go to mixamo dot com
So go to mixamo dot com
forward slash hashtag forward slash
once again
sign up or log in
Then right here under characters
you can pick whatever character you want
I'm just going to pick the mannequin character once again as this will fit nicely for the Sandman animation
And then under animations
let's get a getting up animation
So I'm going to search for getting up right here
So right here
you can see that we have this one right here
which will be very nice for a Sandman animation
or maybe even this one actually
because this is more like a kind of Sandman kind of feel
So I'm going to get this
Once again
you can feel free to get whichever one you want
All right
then here we're going to click on download
We're going to download with all the default settings
download it and put that into your folder
All right
now back in Blender
let's delete the default cube
go to file
import and Fbx
go ahead and import your animation Fbx and check it out
We now have this right here
very cool
Let's add in a floor
So add a plane in edit mode
scale it up like so
Then on the plane
let's go ahead and add a new particle system
Let's put the lifetime to 1000 right there
and let's go to the physics tab
and we're going to change this from Newtonian to keyed right there for keyed particles
Then on the character
let's select the character
add a new particle system
Also put the lifetime to 1000 right here
And under the physics
we're going to change it to none
So now if we play this
we just have this right here
brilliant
So now we need these particles on the floor to go to our character
Let's select the floor and under relations right here
we want to select this as the relation
Howeverif we do this as the first relation
you can see if I add a new relation and select the mannequin as the target
you can see that here the particles automatically go to the mannequin
which is not what we want
Even if I enable use timing and increase the time
you can see that they just automatically show up there
So I'm going to X out this target object
Let's put the time to 0
And right here I'm going to leave it blank
As you can see
once again
if we want the target object to be the same object
we can leave it blank or leave it empty
So right here I'm going to leave this one empty
I'm going to add a new one
And on this one I'm going to select the mannequin
Now if I play it
you can see it automatically goes there
But if I put the time up
you can see that now they merge onto the person
Pretty cool
All right
let's change these to actual sand particles
So I'm going to hit shift a
go to mesh
add in an ICO
fear-related behaviors
change this to one subdivision right there
Let's move it to the side and on the floor under render
change it to object and select the ICO fear-related object
So now we have this right here
Now these halos are blocking us from seeing what's happening
So select the person under the render tab where it says Render as Halo
Change it to none so that we could actually see what's happening
And check it out
We now have this rock guy
Right now
it's a little bit big to be sand particles
but this is like a rock person
which is pretty freaking awesome
All right
let's make it look more sand like on these particles right here
Let me play a little bit so that we could actually see something
I'm going to go ahead and put under the render
I'm going to put the scale all the way down
and I'm going to put the scale randomness up a little bit
Don't put it to one
otherwise some of the particles will just disappear
So now we have this right here
very cool
Now we don't have enough particles
So here on the floor I'm going to change the amount or number to 10000 right there
Now the thing is that we have 10000 on the floor
but the mannequin only has a thousand points
So these 10000 particles are going to all merge and stack on top of each other on top of 1000 points
So we also need to change the mannequin to 10000 right here so that they're distributed on 10000 points
And there we go
All right
now because I want a little bit more I'm going to go ahead and add some children particles to the floor
So on the floor
let's go to the children and select Simple right here
Now you can see that first of all
we have way too many
Let's put the display amount to like 2
I'm also going to put the render amount to 2
Then right here
the reason it's not conforming to the person is because of our radius
Remember the radius is how far away or close they are to the parent particle
So let's put the radius and bring this down so that we get this right here
something like that
And then we have the roundness
Rememberthe roundness is how round or spherical the fall off is
So let's increase this and put this to one
and then you may need to adjust the radius
Again
you don't want to put the radius to 0
otherwise they will be on top of each other
You can kind of see what's happening right here
You can see it's separating them out
You don't want to separate it out too much where you no longer see the form of the human
and you don't want to put it to 0 because then they're just on top of each other
So something like so
like that
And again
feel free to adjust it as you want
So something like that right there is good
As you could see
againthis is with none and with simple
it just adds a little bit to it as you can see right there
I'm going to increase the random size right here
so that we have a little bit of randomness and also the size right here
yeah
I'm just going to leave it to one
All right
veryvery cool
Now I'm not going to do interpolated because you can see with interpolated
when I play it
it just kind of breaks
it only shows up when I pause it
so I am going to leave these to simple
All right
nextlet's hide the mesh because obviously we don't want the actual mesh to be there
So we're going to select the character here
We're going to go to the character
not the floor
go to the armature
So toggle down the armature
the character is Ch 36
We're going to hide the character in the viewport and the render
so uncheck both of those
And now if I play it
you can see we get this right here
Pretty freaking awesome
Now all that's left to do is add a material to the sand
and then of course
we could increase the amount
I'm going to increase it to maybe 20 or 30000 so that we have more and maybe make them a little bit smaller
But check that out
How awesome is that
Nowanother thing
obviouslywe could change the timing of this
So right here
if we go to the floor
we could go over here and under the relations
where is it
where is it right here
We could change the time
So if I put two right there
you can see it forms much faster
Whereas if I put the time to like 200
you can see we get this right here
I kind of like around 22 ish or something like that
That's a little fast
maybe like 55 right here
So right there
we could also change the start and end frame
Right now you can see that the end frame is 200
So particles are still spawning
If I put the end frame to one
for example
all the particles will already be spawned and it will take them x amount of time
whatever we set right here to fully form into the character
So maybe 200 is too much because particles are still spawning forever
So maybe I'll change this to like 100 right here
So right there
I'm also going to put the same settings on the character
So on the character himself
let me unhide them
Let me put the end to 100 as well
Right there
You want to keep the settings on the character and the floor the same right here for the most part
otherwise you could have issues
So again
feel free to adjust it how you want
adjust the timing
how long it takes
etc
I think I'm going to do something like that
That looks cool
Let me hide the character once again
Let's also save this
All right
for the sand particles
let's add some colors or materials to this
This is a giant sand particle
let's go in material preview
Now for this
I want to add a random sand color to each particle
so over here
let's change the timeline to the shader editor
And here on the giant sand particle
click on New
Then out of the base color
we're going to get a color ramp and out of the factor of the color ramp
let's get an object info set to random
So object info set to random
Thisas you can see
will give a random value between 0 and 1 to each particle
So again
right here
it goes from 0 to 1
This is giving a random value between 0 and 1 to each particle
So you can see each particle has a random color
very cool
Now obviously we don't want black or white
so let's change these to some sand colors
So I'm just going to go here
maybe Ctrl C to copy that Ctr V
paste it
make this one darker
You could CR left click to add new color stops and just make them whatever kind of color you want
CR left click
add another one
maybe make this one a little bit more white or darker
however you want
maybe a little bit more kind of like a brownish color
Againall depends what kind of sand color you're going for
We could then click the little drop down
distribute stops from left so that they're evenly distributed here
You could of course change this from linear to constant if you want
but I'm just going to leave it to linear right here
in fact
constant looks a little bit better
so I'll put it to constant
All right
let's move this out of the way
Againfeel free to adjust the colors etc as you want
Then for the floor
obviously I want the floor to have these same ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌colors
so I'm going to select the floor shift
select the sand particle C
L link materials on the floor
we're going to make it a single user by clicking the little 2
And here
instead of an object info
we're going to out of the factor
get a noise texture
So noise texture right here
we're going to change this from constant to linear because I don't want it to have sharp
sharp contrast
and on this we could change the scale
so let's bring the scale up
we could change the detail
bring the detail up
and bring the roughness up to make it look a little bit more like So Maybe I'll bring the scale down a little bit like that
something like that
Againwe're just matching the color of this to the color of the sand
pretty cool
Now I also want to add a bump to the floor
So here are the normal
Let's get a bump node again on the floor and plug the factor into the height of the bump
So now the floor will have bump to it
Let's also put the distance to ．01 right there
there we go
I'm also going to put the roughness up a little bit on the floor and the roughness on the sand particle up bit
so that's not so shiny
All right
now I don't particularly like the sand colors
so what we could do is just go to Google
And here on Google
we could type in sand hex code
So here we could get the hex code for sand
So I'm going to get this one right here
Ctr C to copy
And over here on the floor I'm just going to go ahead and paste this into here
Ctr V to paste
Then on these other sand colors I'm just going to paste the same thing
but I'm going to scroll my mouse wheel down or up to make it slightly different
So on this one I'll scroll it up a little bit and this one I'm going to paste the same thing and maybe change it slightly like so
so that it's a little bit more like that
AgainI didn't really like the colors before
Now for this Sandman to match this I'm just going to click on the color ramp Ctrl C to copy
I'm going to select the sand right here
Ctrl V to paste
You can see it didn't copy it
so let me copy it again
CRL C CR V to paste
I don't know why it's not copying it right here
CRL C copy CRL V paste
there we go
I'm going to delete that one and plug this one into here
That way I have the same colors
All right
very cool
Nextlet's set up the lighting and to render out quickly
So let's go to rendered viewport shading mode right here
I'm going to change the light to a sun lamp value of four R twice to kind of tumble rotate it however I want something like that
Obviously the floor is way too flat
so I want to have this a little bit bumpy
To do this I'm just going to select the floor
Let's go to the modifiers
And right here we're going to add a displacement modifier in edit mode
Obviously we don't have enough vertices in edit mode
Let's right click subdivide and let's increase the subdivisions or number of cuts to 10 right there and let's go back to object mode
I'm also going to go to solid view
Now
right here
we need a texture for it to displace
So let's click on New
go to the texture panel
and right here
we're going to change it to clouds
So now we have this right here
very cool
now it's not smooth enough
so let's hit Control 2
add a subsurface level of 2
and right click
shade it smooth
Now you can see that the particle system is before these
which is not good because as you can see
the particle system is basically emitting from the original plane
We want the particle system to happen after the displace and after the subdivision
so let's bring the particle system after both of those so that actually emits from this displaced and subsurfaces floor
very cool
All right
so now we have this right here
Now you might notice that if your character is going through the floor too much like right here
it's fine
but if I increase the strength of this
you can see that here
the character is again kind of going through the floor
what you could do is on the display
there's a vertex group
So we could go to the vertex groups
add a new vertex group
and just select the vertices where the character is
So these ones right here
and click assign
Then on the displacement modifier
we could go ahead and select the vertex group right here
and then we could click this little invert button right here
So it will basically displace all the geometry except for our vertex group
So you can see right here
it's still flat where he is so that he doesn't go through
As you can see
he doesn't go through the mountain
So now we could increase this however much we want
and right here
we'll stay flat the whole time
obviously that's too much I'm going to put it to like three right there
All right
very cool
So now all we need to do
hit Ctr alt numpad 0
position your camera
Obviously I don't want to see this background
so I'm going to hit G middle mouse button Rx twice
tumble rotate it
and I'm just going to position this something like that
Obviously we could scale the floor up if we want
So in edit mode
scale it up a little bit like so
I'm also going to subdivide it one more time because there's not enoug​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌h geometry
And let me on the vertex group
I'm going to remove that and reassign just these vertices right here
There we go again
I'm going a little bit fast on this because you don't have to follow me exactly
Make this your own
It doesn't have to look the same as me
So now we have this
we could turn off the overlays here by clicking these two little spheres so that we could actually see what it looks like and check that out
that is so cool
Let's obviously position the camera
turn back the overlays on
position the camera so that we could see him when he standing up
Let me select the camera
So right here and obviously need to move this
So G shift Z
move the floor like so
So like that there
let me scale it up
and I'm going to have to reassign this right here
So right here I'm just going to bring this out a little bit like that right there
that I'm going to ass these vertices to this group
there we go
I'm also on the camera as always
going to increase the past part out
All right
let's turn off the overlays
see what this looks like
So you can see right here the sand is forming
how awesome is that
That is so cool
And check it out
We now have Sandman
That is just so awesome
So obviously
let me save this
Feel free to adjust this as you want
make it your own
change the colors as you want
change the lighting
obviouslymake sure that
you know
it's not clipping off where the camera is like it is right there
Let me go ahead and scale this up even more
There we go again
adjust it as you want
It's totally up to you how you want this to look
You could add more or less to it etc
So with that
we are pretty much ready to render out
go ahead and see when this ends
So you can see here
this ends at frame
yeahframe 250 is good
This is about 250 frames
Then here
of course
we could do a quick test render
We could also change this from evol cycles if we want
So you can see cycles
it looks almost the same
I'm going to leave it in Eev because it's going to be faster to render because it doesn't look much different
But feel free to change it how you want
Let me do a test render here
And you can see that that looks awesome for the floor of the sand
I want to do one last thing
So here on the floor
I want to add a wave texture
so wave texture right here and here
if we ctrl shift
leftclick to preview it
you can see what this gives us
Let's go ahead and increase the distortion and the detail
bring that up and bring the detail scale up a little bit
So now we will have waves in the sand
I'm going to put the scale down a little bit and I just want this to act as a bump
so CRL shift left
click the principal bsdf
And here I'm going to duplicate the bump node
And I'm going to plug the factor into the height of this bump node right here
And then I'm going to put the distance
Let's see at one
You can see that that looks a lot cooler
Obviously one is too much
maybe I'll put it to like ．2 or so
And you can see that that looks a lot better
Feel free to adjust the distance and adjust this however you want
You could change the distortion
change the scale
the detail
etc
Againchange it for however you want it to look
it's totally up to you
This is your scene
all right
so that looks really
really cool
All right
lastlyI just want to add more particles and make them a little bit smaller because they're still a little bit big
So right here
going to solid view
make sure to save before in case it crashes because obviously we're going to be increasing this quite a bit
I'm going to increase it from 10000 to 20000 right there on the floor
So the floor is 20000 and obviously on the character as well
I want to put the number to 20000 on the character as well right there
And then I'm going to go to the floor
You can see that here
the scale
I can't bring it down anymore
So in order to change the scale
we could change the scale of our original sand particle in edit mode
So we could scale this down in edit mode
and it will scale the particles down
as you could see
Let me move it to the side
So here I scaled it in edit mode
but then I need to increase the scale here a little bit because now it's way too small
You could either have it this small and just increase the number of particles
but I want it a little bit bigger because otherwise I'm going to need way too many particles
So something like that right there
that looks good
And you know what
It all depends on your computer
what your computer can handle
I think I'm going to try 30000
But again
if your computer can't handle it
just put the number down to like 10000 or even 5000 and just make the sand particles bigger
I mean
it looks really awesome when they look like rocks
so go ahead and put them bigger if you want
I'm going to put the number on the character also to 30000
And there we go
Let me save this incrementally
save incremental
and let me play this
I could probably increase it to like 100000 honestly
but
You can see that that looks awesome
Pretty cool
I think
Let me do a test render
I think I may increase it to like 50000
so you can see that that looks pretty sweet right there
So go ahead and tweak it as you want
I'm going to tweak it a little bit here
I'm going to tweak the materials a little bit and the particle system
and I'll be right back
All right
so I went ahead on the sun lamp
just added a kind of sun color
And on the particles
I changed it to 50000 for each of these and tone down the bump for the wave texture a little bit because it was a little intense
Alsolast thing I want to add
because right here
you can see that the floor is a little barren and it's a little empty
I want to add a little bit of kind of dust or fog effect to the floor
So here
let's just go ahead and hit shift A
let's add in a mesh cube and scale this up S shift Z to scale it on all the axes except the z axis
I don't want this to be very high
So let's hit tab to go into edit mode S
shift Z and basically create a box like so
Let's then select this top face Gz and bring it down to right about here
then add a new material to it and rendered viewport shading mode
delete the principal bsdf and out of the volume right here
get a principled volume
So now we will have some volume metrics to go with the sand
And you can see that it looks a lot better
So this is with it
if I hit the H key to hide it
you can see that that's without it
let me hit Alt H to unhide it
so right here
we could change the density if we want
So we could make it more or less dense
ObviouslyI don't want the sand to be or the dust above the sand to be that dense
so maybe I'll put it to like 2
and for the color of it
I also want the color of it to be kind of based off of the sand
So I'm going to put this to like a kind of yellowish kind of color
Maybe I'll put the density
let me see
maybe I'll put the density to one or so
I also kind of want to give it a little bit of emission strength because that makes it look nice
so I'm going to put the emission strength to like 1．3
but the emission color
obviously I don't want it white
I'm going to put it to
once again
a kind of yellowish kind of color
Maybe you can see what this is giving us right here
Againfeel free to adjust this as you want
I'm going to give it kind of yellow
kind of like a dark yellowish color
something like that
Of course
once again
feel free to adjust this
You can bring this up
Do I have the
I have the human in edit mode
Select the volumetrics
you can bring this up if you want
you know
if you want a full sandstorm
you could bring it up
put the density down to like ．1 or so
although actually that looks kind of cool
that looks pretty cool
You can put the emission strength down a little bit
I kind of want this only towards
wellI don't know
that looks pretty sweet actually
but you can see the difference with this if I hit the H key to unhide it
it gives it a little bit extra
extra kick to it
I kind of want this to be mainly on the floor ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌of it
Yeahactually I'll just put it on the whole thing
So again
adjust this as you want
totally up to you
And actually one other thing I'm going to do for the density instead of it all being dense like this
I kind of want it to look like there's wind blowing through here
So there's more and less dense spots
So out of the density
let's get a noise
texturenoise
texture
And this noise texture will control the density
Nowright now
you can see that it's just way too dense
and that's because we have a density between 0 and 1
So here let's get a color ramp
color ramp
drop it after the noise texture
Once again
white is a value of one
black is a value of 0
So if we make this white color black
you can see that we have no more density right there
As you can see
this right here is just coming from the emission
So if I put the emission strength
you can see what we have right there
let me actually put this also into the emission strength
So I'm going to put the color also into the emission right there
So now I could change this slider
the second 1
I could make it a slightly dark grayish color right here
And what you'll notice is that here
as I change the scale of this
it's going to change the density and the emission strength based on this noise texture right here
So if I control the shift left click this noise texture
you can see what we have right here where we have grayish and whitish areas
Let me also Ctrl shift left
click the color ramp
so we have this right here as you can see if I change the scale
we get this
So if I remove this from the surface
you can see that this is going to give us some very subtle differences in the kind of the dust or the smoke
Whereas here
i​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌f I remove the noise
if I select the noise and hit the M key to mute it
you can see right here
it's just one solid kind of density and emission
Whereas this
it's going to vary it
Of course
feel free to change the detail on this and the roughness
I could bring this up a little bit and change the scale as you want
We could also contrast the color ramp
So if I bring this up and bring this down
you can kind of see what this is giving us we right here
you can see exactly what's happening
We're getting these kind of wisps of sand
Againfeel free to adjust this as you want
I just want a little bit of a subtle kind of change or difference with it
Againthis is pretty subtle
once again
the closer you bring this to white
the denser it will be
so I'm just going to leave it something like so
like that
All right
enough tweaking because I could be here all day
literally right here
Maybe I want a little bit more of the smoke in the in the distance
so I'm going to move my camera angle a little bit
and there we go as far as us being able to see this background
I don't like that
so I'm just gonna go ahead
I'm gonna hit shift a I'm going to add a plane right here and on this plane I'm just going to add an ocean modifier
so ocean modifier right here and this will add this right here and then here I could just go ahead and change the viewport and render resolution
I could put this up a little bit and then here I could just put this behind right here like so
I do want it to be a little bit more dooney looking
so I'm going to go to the waves here and under the waves I'm going to increase the scale to make it look a little more intense
I'm going to put the choppiness down and I'm going to put the smallest wave up
So that looks a little bit more like sand
And then I'm just going to place this kind of under here
Againthis is just to block out the background
make it so that we can't see past into the 3D viewport
Obviously with this
I want it to have the same material as this
So I'm going to shift select the floor
The floor
not the volumetrics
Let me hide the volumetrics like this
Shift select the floor
Ctrl L link materials and link the materials
Obviously with this
it's way too small
So here with Node Wrangler enabled I'm going select this CRL T
add a mapping and texture coordinate
I'm going to plug this also into the noise texture
and I'm going to change this from generated to object right here
like so
Then right here
you can see that the scale is way too small
Right here on the scale
I'm going to left click and drag down hold shift
and I'm going to bring this down so that the scale is like 1．1
something like that right there
So something like that
All right
and there we go
Now we don't have just a gray background
Let's hit alt H
unhide the volumetrics or the dust
and there we go
all very cool
Againfeel free to adjust this as you want
I could spend another couple of hours
YesI said hours on this scene
tweaking it and messing around with it
I'm not going to do that because otherwise we'll be here all day
But again
tweak this as you want
I'm going to save this and I am now going to render out the 250 frames
Once again
same exact rendering process
just select your output folder
you can see that here on particle systems when they're set to keyed or none
Obviouslyby the way
you don't have to do this
I'm just showing you that we don't have a cache
So here you can see we have a cache for Newtonian
but on keyed or obviously none
we don't have a cash
so you don't need to bake it
We are good to go
So again
just set your output folder and your frames and render out your animation
And I'll be back once this is rendered out and composed into a movie
go ahead and do the same thing
Very last thing I want to do on the volumetrics right here
I want to animate it
otherwise it's just going to stay still like this
And obviously I want the dust moving and blowing in the wind
So I'm going to change the noise texture for the volumetrics right here to 4D
then with it on 4D
we have this double value right here
And when we change this
you can see it's going to displace the texture
So here
if we click on the W
we could just type in hashtag frame
forward slash
and then for example
So here
it's basically going to animate this value
And on every frame
it's going to be that value divided by 50 because we put forward slash 50
So if I play this
you can see we get this right here
Let me hit shift h
hide everything except for this
So you can see here
we get this right here
And you can see it changing and moving
As you can see right there
if I pause it
if I put the 50 to a lower number
for example
As you can see right there
Againyou can see what it's doing right here
And again
if we put it to a higher number
it will be slower
So again
a lower number
if I put it to two
you can see we get this right here where it's just shifting very fast
But obviously
I don't want it to move that fast
I'm going to put it to forward slash 50
I think
so that it has a subtle movement
as you can see right there
it has a little bit of movement
This will just help with it not being so stale and static
Obviously
it's dust or sand particles
So we want this to be moving
All right I'm going to hit alt H
and now you can see that we got this right here and it just looks a lot better
Againevery subtle little thing helps
very cool
So now I'm going to re render this because I did render it already
but I wanted to add this
So now I will re-render this
Go ahead and render it out as well
All right
so let's take a look at the final video
Let me go ahead and play it and check that out
That is pretty cool
you can see the dust blowing in the wind
Looks great
the particles coming together
There's a couple things I would tweak
For example
right here
seems his feet are a little bit above the floor
Alsowhen he initially gets up
you can see this isn't touching the floor right here
so I would kind of adjust that so that he's more inside of the sand because right now it looks like he's a little bit above the sand
But of course
you could tweak that on yours
AlsoI would probably make the particles go a little bit slower because they're going a little bit fast here
but you can see the overall effect looks awesome
So again
with this project
go ahead
tweak it
make it your own
add a second mixo animation to this if you want
Again
Ctrl C
copy the keyframes
paste it on the keyframes of this armature and add more to the animation
You know
make them walk through the desert etc
Expand on this scene
make it your own
add some sound effects
and once you're done with your project
go ahead and upload it to YouTube or Vimeo and share it on the Q&A here on udesh or on blender mania 3 dot com
With that
that is the first project for the Particle system section
We're going to move on to the second project in the next one
so I'll see you there
Ciao for now
avo


------------------------

# 29_Bee Swarm Animation
All right
this one is gonna be a lot of fun
We're going create a character that bumps into a beehive
and then the swarm of bees follow and attack the character
So let's first get all of our assets
I'm going to go back to mixamo dot com and here let's go to characters
Now you can pick whatever character you want
You can see that there's a bunch
Againpick whichever one you want
does not matter
I'm going to pick this one up here
the Warwick W Kia 1
probably mispronounce that like crazy
but I'm going to pick this one
I'm going to pick this one right here
Then for the animations
we want first a walking animation
So let's search for a walk
So here I'm just going to get this
We just want like a normal walk animation
so I'm just going to get this one right here
I'm also going to expand it
so I'm going to put the trim right here all the way down
and then all the way up so that we have enough walking
So here
this is going be the walk cycle
Let's go ahead and download this
For the first one
we will download with everything the default
so we're going to download it just like this and click download
Then we want a run animation
so I'm going to search for run right here and once again
you could kind of get whichever one you want I'm gon Na
get this one
That looks pretty funny
I just want to play this because it looks ridiculous
All right
brilliant
I'm going to get
I think I'm going to get this one right here
it looks a little comical
Yeahthere we go
that one again
you can pick whichever one you want
you can pick that if you want
but this one is way too intense for me
I kind of want it to be comedic and this one looks pretty funny
Then we're going to click on download
but we don't want to download it with the skin
Againwith the skin is with the mesh
we just want the armature
so put without skin and then right here
just leave everything the default and download
Last thing we want is an animation of him swatting away at the bees
so I'm just going to search for right here
I'm going to search for fists again
you can search for whatever you want
this one could be pretty funny as far as swatting away at the bees
but you can pick whatever you want
I'm gon na
Go ahead and pick
There was one that I had liked
I'm going to pick this one right here
fist fight a right here
I think this will be kind of funny him like fighting
fighting the bees
So we're going to click on download once again without skin and download it
Then let's go ahead and put all of these into a folder
Alright
then we need AB model
So let's go to Google
type in B free 3D model
And here again
you can feel free to use whatever you want
but here
let's go on turbosquid
and here on turbosquid I'm going to go ahead and get this one right here
monstrous blood wasp right here
So I'm going to get that and I'm going to click on download
I've already downloaded it
So here on the download
just click on show all and right here download the blood wasp dot obj and the blood wasp textures dot rar
make sure to extract the textures and put that in your folder as well
You can see right here I have the animations and the blood wasp
All right
back in Blender
let's go ahead and import all this
So here
delete the cube
Let's go to file import and Fbx
let's import the character first
So here we're going to import the fist fight running and walk
You could just hold down control and select all of them
and here we're going to click import Fbx
So now you can see that we have all of these
As you can see right here
we have all three of them
Pretty cool
You can see that's pretty funny
Also on the run Fbx
you can see that's not long enough
So let me go back to mix a mode
And right here on the run
let me put the trim all the way down and all the way up and re-download this
All right
back in Blender
let me reimport that
So right here
the run
And now you can see that we have a little bit more of a run
which is good
All right
very cool
Then here
let's go to file import and the B is a obj
so go to obj and get the blood wasp obj right here and just move it to the side for now
All right
so let's go ahead and start setting this up
Let's first save our file and let's combine all the animations for our mixo character right here
So we need to put the run animation after the walk and then this one after the run
So let's do this once again
we're kind of going to fake the movement of it because otherwise he's going to snap back to the center here
So with the character
let's hit shift A and let's add in an empty plan axes
and we're going to parent the armature
So the original armature of this walk right here
So let's go ahead and select it
go into wireframe if you need
So this one right here
and we're going to on frame 1
shift select
Make sure you're on frame 1 shift
Select this empty CP
parent it to the object
So now this empty is going to control everything
Now for the walk
I want it to be slightly longer
So once again
let's go to the armature of the walk cycle right here
Let's go ahead and hide these two for now
So I'm going to hit the H key and hide those
Let's select this armature Ctrl tab
go into pose mode a key
make sure everything's selected
And right here
a key
make sure all the keyframes are selected
Hit Shift D
duplicate these keyframes and put it right after the last one
So now we have this right here where he's going to walk twice
but once again
he snaps back to his original position
So here on the keyframe before the one we duplicated
let's go to object mode
select the Empty I key
insert a keyframe
go to the next keyframe right here
and just go ahead and see where he is right here
So he's right about there
you could even put a placeholder
So shift A
we could add a cube and just place it
for example
right in front of the face so that you know where he is
So right there
and then grab the empty
go to the next frame Gy and bring him so that he's right in that same exact spot
hit the I key
insert a keyframe
So now you can see that he will continue the walking
And now we've extended the walk cycle
as you can see right there
Pretty cool
Let's move this cube aside as we might need it
Let's hit alt H
unhide the other animations
Nextwe need the running one
which is this one
So select this one CR tab
go to pose mode
make sure all the bones are selected and all the keyframes
Hover your mouse over the keyframes CRL plus C to copy them
and then go to this armature over here
For this armature
let's also select it
go to the armature properties under viewport display
select in front so that we could see it
hit Ctrl tab to go into pose mode of this one
go to the end of the keyframes over here and we're going to hit Ctrl V to paste these in and just bring them right after the original ones
So now we have this right here where he's going to start running once again
he snaps back to over here
so let's go to this frame before he snaps back
select this empty
I key
insert a keyframe once again
inside view
place the cube right here so you know where he is
select the empty
go the next frame and just bring them to the same spot right there and hit the I key
insert a keyframe
So now we have this right here
so boom
and then he starts running
all right
very cool
So now we have this right here where he walks twice and then goes to running
and then we need him to fight
So let's get the fighting one control tab going to pose mode a key
select everything
make sure all the keyframes are selected
Ctrl C to copy
go back here to this armature and in pose mode CRL V
paste it and place it once again after the keyframes right here
Once again
we need to go to this frame inside view
bring the cube here like so
and then select the empty I key
insert a keyframe
move to the next frame G and bring this over like so
something like that
I can insert a keyframe and there we go
So now he goes from running to fighting
Pretty cool
Let's go ahead and move this cube
All right
veryvery cool
So now we got all this right here
Now you can see that he's changing his stance pretty sharply right here
and also when he runs right here
when he goes from walking to running
he changes his stance pretty sharply
so the transition is not that smooth
don't worry
we'll change that a little bit later
But there we go
Right now
we got this right here
let's go ahead and delete the other armatures and the cube as we don't need those anymore
and now we got him walking and then he's going to go ahead and run and then he's going to go ahead and fight pretty cool
let's also extend the end frame right here a little bit
and there we go so that we could see his whole fighting sequence
Brilliantall right
let's make sure to save this save incremental
Next
let's go ahead and quickly add in a floor
so add a plane
scale it up in edit mode
let's go ahead and add in the beehive and the tree
So here we need to see when he's walking and then when he starts running
this is when he's going to have hit the beehive
So right about here is where we need the tree
So here
let's go to edit preferences under add ons or get extensions
search for the Sapling tree generator
so here under get extensions I'm going search for Sapling tree generat​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌or and click install
Then here let's hit shift a go to curve sapling tree generator
And here in the bottom left you have all the settings for the tree
You can set it to whatever you want
I'm going to go ahead and just put a under load preset
you could change what kind of tree you want
so maybe I'm going to choose
I think I'm going to choose a Japanese maple right here
I'm also going to go to the Leafs up here and enable show Leafs and I'm going to put the leaf scale up a little bit like so
All right
now I'm going to select the tree and the Leafs G shift Z
move it over here
I want this branch right here to hang over the character so that the beehive is there
So I'm going to hit Rz and just rotate this around like so
Manthat was so much harder than it should have been
Rzthere we go
So that this tree branches right there
Next
let's make the beehive
This is going to be pretty simple
we're going to hit shift A
add a mesh UV sphere
Let's hit Gz
bring it up
Let's go into edit mode SZ
scale it up a little bit to make it more oblong
Then we're going to select every other loop
So right here
starting here
let's alt shift
leftclick every other loop right here
so like that
and right there
then we're going to hit CRL B to bevel
bevel it just a little bit
And in the bottom left
increase the number of segments to 2 so that we have this right here
Then we're going to alt shift
left click this new middle loop that we have on all of these
so right here
hereand here
and then we're going to hit S shift Z to scale it on all the axes except the Z axis
scale it in
and then just hit Ctrl 2 at a subsurface level of 2
Right click shade smooth
Then in edit mode
you can alt left click these loops
scale them up a little bit and make them a little bit different
So some can be bigger
some can be smaller to kind of vary it and make it look a little bit less uniform
like so
So something like that
a traditional beehive
brilliant
All right
then I want a opening for the beehive
So in side view right here and here
let's hit shift A and let's add in a cylinder in the bottom left
let's change it from ngon to triangle fan right here
and then hit R Y 90
rotate 90 degrees in edit mode
wireframe mode
go ahead and left click and drag select the bottom vertices and X delete vertices so that we just have half of it like so
Let's grab it
bring it down
scale it down like so
and G x
bring it forward
and this will be once again
the opening for the beehive control A
apply the scale and rotation
And then here
let's select the beehive in the modifiers
add a Boolean modifier and select the cylinder as your Boolean object
With this object
let's go ahead and go to the object properties under viewport display
change it from textured to wire right here so that we could see through it
Now
right now
you can see that it's not bullying our object
And that's because here we have a hole in it
So select this edge right here in edit mode shift
select that edge F key to fill that
and there we go
All right
brilliant
With the selected shift
select the Beehive CP parent to object so that when we move this
it moves both of them
All rig​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ht
let's move this over
That's a giant beehive
obviously
Bring it down S key
scale it down
and put it somewhere like that
Obviouslymake it big enough so that the character actually hits it
And again
maybe this is a fantasy world where the beehive is huge
so totally fine
All right
there we go
control a
apply the scale
Let's go ahead and save this
You can see how I'm blocking things out
So first we added the character
then the floor
and then the tree and the beehive
and now we're going to add the bees
but we're not really detailing anything just yet
we're kind of blocking things out
So now for the bees
let's go ahead and we want these to come out of the hole right here of the beehive
obviously
So we could actually make this Boolean object our emitter object
I'm going to go ahead and add a particle system to this
And here
let's change it under physics from Newtonian to Boyd's
Obviously
Let's also go to render and change it to object
and our object is going to be the B
which is I'm just going to get the little eyedropper and select the B
Or the wasp
And I actually
I want this to be in the same place as that object
but I actually want it to be separate because I don't want it in wireframe mode
So with this right here I'm actually going to hit shift D to duplicate it and right click to leave it on this one that's still there
I'm going to delete or remove the particle system and this one will just be the Boolean
And then this one on the particle system
let's go to the viewport and change this to rendered or textured right there
Obviously in the particle settings
we need to make sure to deselect Show emitter so that it doesn't show the emitter object right here
All right
then right here
if we play this
so let me go to frame 1
If we play this
you can see we get this right here
which is already pretty freaking cool
Now you can see that the bees are all upside down or the wasps
I got stop calling them bees
the wasp
but right here
if we go ahead with our main wasp
it's the queen
Definitely
You can see right here
the rotation and scale is not applied
You can see that right here we have rotation is set to 90 and the scale is applied
but not the rotation
So right here I'm just going to hit CA and I'm going to apply
I'm just going to apply the rotation and scale
And now you can see that they are right side up or they are properly orientated
All right I'm going to leave this giant B right here just for now as we are tweaking this
All right
veryvery cool
Now for these bees
I only want them or wasps for crying out loud
I only want these to start generating once this character hits the beehive
So I'm going to go to that frame
which is right about here
So right about here
which is frame 124 on the particle settings
I'm going to change the frame
start to 124 and the frame end
I'm just going to put it to 400 for now
So now if I play this
you can see that the bees will only generate
the wasps will only generate once our character actually hits the beehive
As you can see right there
boomand then he runs away
How awesome is that
All right
now the wasps
we obviously want them to follow our character
so right here
let's go to the Boyd brain
And I'm actually going to leave the separate and flock right here
I'm just going to go ahead and add a goal
Againthe goal is basically going to make these go towards a goal or target
The target object is obviously going to be like character
so select the character
the warlock
and now if I play this
you'll see that it doesn't really do much
Also right here
let's go to the render settings
And under Simplify
let's enable simplify and put the max subdivisions to 0
That way
anything with a subsurface modifier will be at 0 for now in the viewport
So you can see right here
they're not really following him
and once again
that's because the order that these are in
So let's click the up arrow and put the goal between separate and flock
So now if we play this
they will separate and then they will go towards the goal and flock
So you can see right here
they are going towards the character
howeveryou can see that there's a slight issue right here where they're going to the wrong direction
Let's go ahead and enable predict to see if that helps with it
Againpredict is going to predict the movement of the object
And you can see that right here
it's going towards the empty instead of the warlock
So you can see that here with the goal
this is not going to work because this is based on the origin point of the object
So here
even if I was to
by the way
don't do this as I'm going to reopen this file
if I was to delete the empty right here
and I was to put the goal right here as the character
you can see that it's still not going to work because the origin of the character or the armature is still over here
as you can see
So this is still not going to work
You can see that here as he's walking the origin of the armature and the geometry is over here because obviously he's being displaced by the bone movement and the wasps are going to go to the origin point
Wow
I said wasps and not bees as you can see
So let me reopen this
and we're going to do this a different way
Keep in mind
whenever you run into an issue
there's always a different way to go about it
So right here I'm actually going to remove the goal
And instead
let's go ahead and create a fight
And I'm going to put the fight to be second as well
Let's also create a relations
And for the relations
let's click new
And let's make the warlock right here the relation and the mode is going to be enemy
Now right here
you can see it says invalid target because the warlock has no particles
So here
if I was to play this
it's not going to do anything because again
we need particles for these to attack
So let's the warlock add a new particle system
and let's change these to voids right here
Now for these
I want these
you can see that they kind of linger behind
which is not good
because then the wasps will be attacking these lingering particles
So I'm going to put the lifetime of these to one
So now you can see that these just continuously spawn on the Warlock
And now when he walks by
you can see the wasps are going after him
Pretty cool
or rather after these voids
Pretty awesome
Now on these
the lifetime is not long enough
so let's put the lifetime on the ones in the beehive to
let's say 500 right there
And also on the Warlock can see that we have the end frame of these set to 200
We need to increase this to like 500 as well so that they continue spawning on him
All right
let's go ahead and see what this looks like
Let me go ahead and select the wasps so we can actually see them and you can see that now they go after him and attack him
This is awesome
pretty cool
That is hilarious
All right
very cool
So now he's swarmed by wasps
pretty freaking awesome
All right
because I get the feeling that we're still gon na spend a little bit of time on this to texture everything lighting and also to smooth out the animation etc
We're going to continue in the second video
That way this doesn't go on too long on this first one
but you can see that here we have now blocked out everything
We have the walk cycle
we have the wasps
the wasps spawning and attacking him and all that
Pretty freaking awesome
So with that
go ahead and save this and I'll see you in the next one
Ciao for now
avo


------------------------

# 30_Bee Swarm Animation Part 2
Alright
let's go ahead and finish this scene
So the first thing I want to do is fix the animation for our character
So you can see that right here
especially when he goes from this to the fighting or the squatting
the wasps or bees away
you can see that it's a very sharp transition
Now
the issue right now is if I go into pose mode and right here
you can see I have all the bones and all the keyframes for the fighting animation selected
You can see right here
if I drag these out like so
it messes up the movement of the character
So what I'm going to do
let me hit Ctrl Z to undo that
is we're going to set this up slightly differently
So we could use the empty technique
but I'm going to do it differently
So let's actually select the empty and delete it
So now when we go through this
he's just going to continuously snap back to reality
No I'm just kidding
he's going to continuously snap back to the beginning here
Now what's making him snap back is this bone right here
the hips bone
As you can see
this one controls the whole movement of the character
So let's select just this bone in pose mode and let's go to the graph editor right here
Then let's go ahead and click this little dropdown and click this little eye icon to hide everything
to hide all of these graphs
And we're just going to enable the Z location graph right here
Then if we take a look at this
you can see that right here
we have this graph for the Z location
which is this movement
Let's hit the A key
select all of it
and delete on the numpad to kind of reposition it and reframe it
So you can see right here
this is the movement of the character
like so Again
on the Z location of the bone
you can see in the world
it's the Y location
But if we turn on the bone axes right here
you can see that it's moving along the Z axis of the bone as you can see right there
That's why it's the Z location
Let me turn off axes
So right here
you can see that this is the first movement
As you can see when I move here
and then when it snaps back to here
that's this drop off right here
as you can see
and then this drop off
and then this drop off
So what we want to do for it to continuously move is we want all of these
As you can see
we have the walk
walkrun
and fight
We want all of these to align diagonally
So what I'm going to do is I'm going to hit the C key
bring up the brush tool and middle mouse click and drag and deselect all these
So now if I go over here
you can see that right here
he snaps to here
But if I hit G and y with all these graphs selected
and I align this one after this one
you can see that's moving him along the Z location or the global y
and now all we have to do is align this one so that it continues from the previous one
And now we have it like so
And then we just need to do the same for all the other ones
So right here
this one from the walk to the run
once again
see middle mouse
clickdeselect those G
bring this up
and just make it so that it continues this trajectory right here
like so
Again
you want it to align
you don't want to dip
and you don't want it to peak like that
You want it to be a nice straight flowing line like so
All right
and then lastly
same thing with the fighting
Let's hit Gy
bring this up and on this one
we want it to bring it
As you can see
this one levels out because he's no longer moving
So we want this one to go right here and then level out
And this will look like so
so right here
like that
But what's cool now
now that we've done this
let's go back to the timeline and let's hit the A key
select all the bones and select all the keyframes for the fighting animation
So right here
you can see this is the run and this right here is the fight
Now
with all the fighting keyframes
we could just hit the G key and bring these out
And now we could create an interpolation between the two
as you can see right there
So instead of it just snapping to the fighting like that
we could bring this out for it to transition to the fighting
however slow we want
So obviously
that's way too slow
I'm going to bring it in and there we go
something like that
So now he goes from the run to the fight and it's much smoother
as you can see right there
Feel free to adjust this as you want
so I'm going to put it to something like this right there
All right
very cool
Let's make sure that the walk to the run is good
So right here we have the walk
Now you can see that right here
he does transition a little bit sharply
as you can see right there
So right here we could do the same thing
we could go to right here where it switches to this frame
keep these selected and just be middle mouse click and select these on top of the other ones
And then right here
we could just G bring these out a little bit so that here he has a nicer kind of transition between the walk and the run
as you can see right there
I'm going to bring it in a little bit
All right
very cool
So now we have this right here
we have our animation
All right
super cool
Let's go into object mode
let's also save this
Now let's go ahead and add the materials to the wasp
So on the main wasp model
let's go to the shader editor
add a new material
click the principle bsdf CRL
shift T with Node Wrangler enabled
and go to the Blood Wasp textures
Hit the A key to select all of them and principal texture setup
So now we have these textured
as you can see
veryvery cool
Now right here we have a couple issues
First of allit seems that a lot of them are going backwards
also they are not flapping their wings
So you can see right here
they're all going backwards
brilliant
So right here
let's select the wasp and in edit mode of the wasp
a key
select everything
just hit Rz 180 and rotate it 180 degrees in edit mode so that they are now facing that way
Let's also right click set origin
origin to geometry right there
All right
now the other issue is that their wings are not flapping
I don't think we use flapping for bees or wasps
that's more of a bird thing
But anyways
their wings are not fluttering
so we want to go ahead and add a quick rig to this to do that with the wasp selected shifts cursor to selected
And then right here
we're just going to let me go into a solid view and delete on the numpad
To zoom back in I'm going to hit shift A
we're going to add an armature
Againthis is going to be very simple
we're going to go into edit mode of this armature Gz
bring it down right here
and then let's go ahead and turn on the X right here
Let's then hit
let me go to wireframe
let's hit shift E to extrude and mirror it and bring it right here to the start of the wings
and then we could go into front or back view
align it
and then hit the E key and extrude this out for the wings just like that
Of course
we need to align it in top view
so in top view
let's go ahead and select all the bones Gy
bring them so that they are more centered with the wings right there
and then once again
just align it so that this right here is at the start of the wing because this is where it's going to be pivoting from and this right here is at the end of the wing like that
all right
then all we're going to do again
this is a very simple rig
we're going to select the wasp shift
select the armature and CR P
let's try automatic weights
it might not work
we might want to assign these manually
but let's try automatic weights
So now if I rotate this
you can see that actually works pretty good and it even moves the legs a little bit
which is nice
so righ​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌t here
you can see that we have the wings now let's say we don't want it to move the legs
wellwe could just go ahead
go to the B or the wasp go to the vertex groups and right here
you can see that this one is bone R 0 0 1
so we could go to Bonar 0
just click with everything selected
click remove to remove everything
so now it's not doing anything
then in edit mode
select 1 face or one edge of this wing CRL to select the linked
so we just have this wing selected and on this bone
click assign
so now just this wing is assigned to this bone
let's do the same on the other one
so on the other one
it's this right here
select everything
click remove
select just one edge control L and click assign
so now this bone
just moves the wing and this one
just moves that wing
All right
now we just need to animate this on the timeline
let's go to frame one on frame 1
select these two bones
I key insert a keyframe
move ahead
maybe three frames right there and in back view control one
let's just grab one bone
rotate it like so
and rotate this like so as well
select both of them
I key
insert a keyframe
then go ahead and move two more frames
we're going to select the first keyframe right here with both of these bones
shiftyduplicate it to here
and then move ahead 2 keyframes
and then rotate these up like so
select both of them
I key
insert a keyframe and there we go
and then let's go forward 1
select the keyframe on frame 1
shiftyduplicate it to here
So basically we have this right here
pretty cool
Now obviously we want this to continuously animate
so let's go ahead and go to the graph editor right here
let's select the bone right here
one of the bones
so the first one and this right here is the Y rotation or the X rotation
Let me select X delete on the numpad to zoom in
You can see that this is going to the Z rotation my bed
so this is going to be the Z rotation right here
So what we want to do is hit the N key
make sure you have the Z rotation channel selected
go the modifiers
Add modifier cycles
And this will basically just cycle it so that it continuously flaps or moves like that
Let's then copy this modifier
go to the other bone right here
go to the Z rotation
see rotation
and paste it in
So now we have both of these continuously flapping like that
very cool
Now what's cool is because this is instanced with our particles
you can see that all the bees are flapping their wings
Pretty cool
Againvery subtle
but obviously you don't want the bees to just be
nono pun intended
You don't want the bees
they're not bees
you don't want the wasps to just be
with their wings not fluttering
So now we have their wings fluttering and attacking
Attackattack
attack
This is awesome
veryvery cool
So now we got this right here
which looks awesome
All right
let's go ahead and move this main
Be the queen
be out of the way
I'm just going to bring it under the plane
That way it's not in the viewport
All right
and then lastly
for the tree
we want this to be animated when he hits it
Let me change this back to the timeline
So here
when he hits it
we want this to actually move
Now to do this with the tree sapling
we could actually add armatures
So to do this
we need to actually delete our tree and re add it
So let's select the tree and leaves
delete it
shift a go to curve
and go to the sapling tree generator
And then right here again
change your tree to whatever you want
So right here I'm going to change it to the Japanese maple
I'm going to up here
turn on the Leafs and then lastly under armature I'm going to go to armature and click on use armature right here
So now you can see that here
let me go to the leaves and make them a little bit bigger as well
like not that big like that
You can see that here
Now we have an armature for our tree
So I could go ahead and animate the branch
pretty cool
So now with the tree
with the armature
let's select everything
move it back here and position it once again
So I'm just going to rotate it
Let me go into top view
rotate it
move it
and move it like so
And just align it so that this top branch is basically connected with the beehive
You could even make it go through the beehive because usually beehives are like wrapped around branch
Then let's go ahead and go to pose mode of the tree armature and go to the frame where he's going to hit it
So right about here where he starts to make contact
So go to the frame right before he starts to hit it
right about here
And I'm going to move this bone right here
So this one right here
because if we move this one
it moves kind of the root of it a little bit too much
So this one here
now I want to parent the beehive to that bone
So I'm going to select the beehive in object mode shift
select the bone
we could hide the tree temporarily H key to hide
select the beehive shift
select the armature CR tab
go into pose mode and select this bone
then hit Ctrl P parent to bone right here
So now if I go to object mode and back to pose​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ mode
you can see that when I rotate this
it moves the beehive
All right
so here on this frame with this bone in pose mode I'm going to hit I key
insert a keyframe I'm going to move ahead to right about here
where it kind of goes through the beehive and I'm going to hit R twice and kind of tumble
rotate it and maybe even from top view Rz
rotate it
tumble rotate it
and kind of move it as he hits it like that
And I key insert a keyframe
So right here now that's a little bit too much of a hit
let me go ahead and rotate it back in like that
Againyou can hit R twice
tumblerotate it
obviously hit the I key
insert a keyframe
and then right here as he runs through it
maybe I'll give another kind of hit like that right there
I key
insert a keyframe
So now we got this right here
and then obviously I want to swing back after so right here
right here
he's still kind of hitting it
so I'm going to exaggerate it even more like that
I can insert a keyframe
So now I got this right here and then right here as he runs past I'm going to select the keyframe on frame on the first one
the first keyframe
shiftyduplicate it so that it swings back like that
So now we got this right here
how awesome is that
Now I want it to kind of swing back and forth from the momentum
So right here it goes back and right here
maybe I'm going to swing it over this way a little bit more
and then I'm going to go forward a couple frames
right here I need to make sure to insert a keyframe
So insert a keyframe forward a couple frames
and then right here I'm going to hit R
swing it that way
Ike
insert a keyframe
move ahead a couple frames R
swing it that way
insert a keyframe
move ahead a couple frames R
swing it that way
insert a keyframe
so that has this kind of kind of bouncing back and forth motion
as you can see right there
Now it's moving a little bit too fast for me
so I'm going to position my cursor right here
select these keyframes and hit the S key and scale them up a little bit so that it moves a little bit slower and I want to continue settling like that
so I'm just going to move ahead a couple frames or rotate a little bit
I can insert a keyframe and once again right here
make it move a little bit less each time
There we go
So now we got this right here where he hits the beehive
very cool
All right
let's go ahead and make sure to save
let's also hit alt H
unhide the tree
and save
All right
so now we got this right here
You can see that that looks pretty awesome
All right
so now all that's left is basically to texture everything and add some lighting etc
So here for that
feel free to do it however you want
You could texture and light this however you want
I'm going to go ahead and do my setup here
You could follow along and copy my setup if you want
but I encourage you
make it your own and tweak it as you want
Againyou don't have to make it look the same as me
So here
this is where you could just kind of do your own thing and again
make it look however you want
But here
first things first
I want to texture the beehive
And again
you could follow along with me on what I'm doing here
And then you could tweak it and make it your own
totally up to you
Or you could just go off on your own right now and just make it look however you want
Now I'm going to keep this fairly simple
but let's get right into it
So first
the beehive
Let me go into material preview
obviously save
and let's change this to the Shader Editor once again
I'm going to go a little bit faster than normal since again
this is not the main focus of the course
but I'll try not to go too fast either
So right here on the beehive out of the base color
let's get a color ramp
By the way
if you want to learn all about nodes
I have a course that goes over every single shader node
every single compositor node
and another course that goes over every single geometry node
So check those out
they are awesome
Then right here
out of the color ramp
let's get a noise texture right here
And then right here I'm just going to change these colors to yellowish colors
So right here
maybe this color I'm going to hover my mouse here
CRL C to copy
go to the white color Ctrl V to paste
and on this one I'm going to make it a slightly darker color like so
I'm then going to contrast these a little bit by bringing them in like so
And on the noise texture I'm going to go ahead and bring the detail up and the roughness
which will give us this finer detail like so
Then lastly
I just want to add a bump node
So add a normal
get a bump
and plug the factor into the height
And there we go
That is pretty much it for the beehive
Obviouslyit's a little bit too bumpy
So let's put the distance down to like ．1 or so
maybe even ．05 right there
All right
very cool
Then right here for the floor
let's select it
add a new material in the resources of this video
there will be some textures
go ahead and download all of those
But here
let's go ahead and hit CRL shift T with the principle bsdf node selected
and we're going to go ahead and get the dead grass right here
Let's get the base color
normal map and roughness map and click principal texture setup
Then I want to mix this with some dirt or mud
Now obviously this is way too big
So here on the mapping
let's left click and drag down and put the scale up to like 5 or so
Then I'm going to hit shift A
let's get another principle bsdf and let's select it CRL
shift T
and this time we're going to get the dry mud
small puddles
and once again
get the base col​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌or
normal and roughness map And go ahead and move this up a little bit
Now we want to mix both of these
So let's hit shift a
get a mix shader
drop this right here
and let's plug the mud 1 into one of those sockets right there
So now a factor of 0 is 100
the grass factor of 1 is 100% the mud
So here I want to drive this factor with a noise texture
So let's get a noise texture right there and here
After the noise texture
let's get a color ramp and drop it after
So now I can use this noise texture
I could contrast these color ramps right here and kind of drive how I want this to look
So here I could get more or less mud
As you can see
Again
if I CR shift left click the color RA
you can see that we have black and white values
Againthe black values will be this top slider or the grass and white values will be this bottom slider or the mud or dirt
Now
obviouslywe could change the scale of this like so
We could uncheck Normalize as well if we want and kind of change the detail
We could also increase the detail and the roughness
Let me recheck normalize to kind of see what that gives me
Of course
I could contrast these
something like that
and then if I CR shift left
click the mix shader
you can see I have a mixture of the mud and the dirt and the grass
Againfeel free to adjust this as you want
totally up to you
You could adjust it however you want
So I'm going to put it something like that
All right
that's looking cool
Then for the tree
let's select the tree
add a new material
same thing
select this control plus shift T
and this time we're going to get the birch bark right here
So let's select that once again
base color
normal map
roughness map
and let's load these in right here
You can see that on the tree
we get this right here
and we are good
by the way
on the mud
I want to change the mapping scale of the mud to 5 as well
So right here on the mapping of the mud I'm going to put it to 5 because it's a little bit
maybe a little bit less
maybe 2
All right
againfeel free to adjust it as you want
Then for the leafs I'm going to keep it very simple
I'm just going to add a new material and here out of the base color I'm going to get a color ramp out of the factor
I'm going to get a noise texture
And now I'm just going to change these black and white colors to some green colors
So maybe a dark green
Ctrl C to copy
Ctrl V to paste and make this one an even darker green
And then right here
let me zoom in a little bit
I'm going to contrast these a little bit like so
and then maybe change the scale
So I'm going to change the scale a little bit
maybe bring it up quite a bit
The screen is way too dark
let me change it
I'm going to put the detail and roughness up a little bit
and then of course
out of normal I'm going to add a bump
plug the factor into the height
and put the distance down to ．01 or so
I'm also going to bring the roughness up so that's not so shiny
Againvery
very simple
These are way too dark of a green
so I'm gonna make them more like a yellowish
greenish kind of color
Kind of like that
kind of like a desaturated color
Againfeel free to make it however you want
All right
and then lastly
I want to add a couple of rocks to this scene
Obviouslywe're going to do this with particles
let's hit shift A
let's first add our rock
so I'm going to go to mesh and right here I'm going to add a cube
With this cube I'm going to hit C plus 3 at a subsurface level of 3
Obviously we can't see it because we disabled or we enabled Simplify
so in the render properties
uncheck Simplify
then with this I'm going to go ahead and add a displacement modifier
so displacement and I'm going to add a new texture and the texture properties I'm going to change it to clouds right there
Then going back to the modifiers I'm going to bring the strength down a little bit like so
and in edit mode I'm going to hit Sx kind of scale this and make it a little bit more rock shaped
I'm then going to go ahead and apply the subdivision surface modifier
So apply and in edit mode
turn on proportional editing
And just go ahead and grab these vertices randomly and just give it a little bit more shape to it
something like that
and then right click shade Smooth
All right
let's add a material to this again
deform it however you want
I'm going to click New
once again CRL shift T
and this time we're going to get the mossy rock
Once again
color normal and roughness map
Load that in
And there we go
We got a nice looking rock right there
Now let's distribute this as particles
Here I want to create a collection so that we have a couple of different rocks
So on this one I'm going to hit shift D x
move it over
and then with proportional editing
just go ahead and deform it however you want like so
Shift the X
duplicate it again and do the same thing
Make it a little bit different like that
And there we go
And one more for good luck
why not
Let's do something like this
and there we go
So now let's shift select all of these M to move them to a new collection
And let's name it rocks
Then on our floor
let's add a particle system
And we're going to go down here under render render
which is right here somewhere
right here
Let's change this to collection and select the collection rocks
Obviously
we want to change this from emitter to hair
and there we go
We got a bunch of rocks on here
It looks absolutely terrible
So let's go ahead under render
increase the scale
which looks even worse
Let's increase the scale randomness right here
and you can see that all of these are flipped the wrong way
So let's enable advanced and let's enable rotation right here to quickly change the axis
you can hold down control and scroll your mouse wheel
And you can see that it will cycle through the options
So right here
let's go ahead and change this to any of these where it's rotated properly
So I'm going to change it to global X
then right here
we could change the randomize right here to randomize them a little bit and the phase and randomized phase to give them a little bit of random rotation like so
Nowobviously
there's way too many of them
I only want these on the outskirts
So in edit mode of our floor
let's right click and subdivide it a couple of times
So I'm just going to right click and subdivide over a couple times
and then right here
let's hit the C key
bring up the brush tool
and I want the rocks to be kind of surrounding this area like so
Let's go to the vertex groups
add a new 1 and a sign
and then here in the particle settings under vertex groups
select that group like so
Now obviously there's way too many of these
so going up here and right here
let's put the number down to
let's say 100
That's not 100
Brilliantnow here I'm going to change the emit from faces to vertices right here so that it's not so many
And I'm also going to put the number down even more
I also want to scale these up a little bit
I want these to be like giant rocks
kind of like our first scene with the car
So something like that
That looks pretty cool
Againfeel free to adjust this as you want
but check that out
All right
then I'm going to go ahead and position the camera
I'll do that on my own since we've done that quite a bit of times
but right here
let's go ahead and quickly do the lighting
So in rendered viewport shading mode
I think I'm going to put this to cycles
I mean I'm going to see how each of them looks
Let's select the lamp and change it to a sun lamp value of 4 and go ahead and tumble
rotate this until you get something that you like
something like so
I also want to add an Hdri in here
In fact
one last thing
since again
we're learning about particles
we could use some particles to distribute some trees around here as well
which will help to kind of block off this area
So here
let's make sure to save
by the way
And here I'm going to select the tree and the leafs and I'm going to hit shift D and move them where the rocks are with this tree
Let's go ahead and select it
We're going to convert it to an object
So go to object
convert to mesh
and then here I'm going to select the leafs shift
select the tree CR J to join them so they're all one single object
You can see that right here
this is parented to that armature
So let's hit Alt P and clear parent and keep transformation right there
So that's no longer parented
Let's make sure that this one is still working properly so you can see it is
So we're good
Then on this one
let's hit shift A
let's add a mesh plane
On this plane
let's add a particle system
change it to hair
and let's put the number to 11 for now
Under render
let's change it to object
And the instance object is going to be this tree
Now you can see once again
it's not rotated properly
So here
enable advanced
enable the rotation
Now keep in mind that for the rotation
we could change the orientation axis or we could go to our object right here
And if I rotate this
for example
if I hit R x 90 negative and rotate negative 90 degrees
you can see that here
Now if I place this and orientate it based on the origin point
it's going to go ahead and move it
Let me also
you can see the rotation isn't applied in object mode
let me apply the rotation right here
So now moving this in edit mode I'm able to change the rotation right there
And again
it's going to be based on the origin point
So I want to place this where the origin point is
So now they are standing straight up like so
Then right here I can change this from velocity here to global Z and I could increase the randomize and the phase and the randomized phase right here
So I could change these a little bit to give them a little bit more random rotation
Now
what's cool that I like to do with particles is right here
you can see that we have this floor
but we can use a different separate mesh to distribute these around our scene
So here
if I just move this over here and I go into edit mode
I could then select an edge and just extrude this like so and extrude it however I want
And there will be trees distributed on that
I could also select a face
duplicate that face
and just have a single face over here
And now you can see what's happening
Pretty cool
Let's also increase the scale of these
So right here I'm going to put the scale and bring this up
obviously because they are way too small
put it to about the same scale as the other one
So right there and then right here
once again
I could go ahead and adjust this however I want
I could widen this if I want more trees and for it to have a more depth to this
I could obviously connect these
If I want trees there
I could then duplicate this
add a single plane here and here to add trees right there etc
Now I want a little bit more trees
so let me increase the number right there and there we go
So now when we're looking at it from over here
let's also make sure to bring this plane down
We will see trees in the background
as you can see
pretty cool
And of course
you can make this as dense as you want
So we could increase this to
let's say
That way we have the trees blocking out that kind of gray background
Let me connect these right here
rotate this
and just grab it like that
There we go
all right
super cool
So now we got that right there
you can see this is what we have
very cool
So now with this I'm going to go ahead and set up the camera and tweak a couple more things
I'm going to time lapse this
so I'll be back once this is done and I'll show you what I've done
and then we'll render out
All right
so as you can see
I have set mine up
You can see this is what it looks like Now
I went ahead and did a couple things
so I'm just going to go over it quickly
First of all
obviously I animated the camera
You can see for the camera
I just added keyframes to my single camera right here
so you can see what that looks like
So right here
I just have a couple of keyframes where the camera switches
pretty self explanatory
pretty easy
It's just switching from different spots
Then right here for the tree
all I did is I added some roots
So to do that
you could just go into edit mode of the tree
select a curve
shift D to duplicate it
and then just extrude it
And you could create some roots like that
You can also hit Alt S to shrink in or fatten the end of the root
Alsoyou can hit Ctrl L to select the whole route
So I just added a couple of routes here
As you can see
I have one right here and a bunch of others
and I just duplicated it and rotated it around the base of the tree
Also
another thing that I added is just like with the Sandman animation
if I hit Alt H
you can see here I added some volumetrics
So here I added a Volumetrics box for some volumetrics on the floor and in the background right here
which adds a nice effect
As you can see right here
it adds a little bit of mist or volumetrics
W​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ith this Volumetrics
I did the same exact thing that we did with the Sandman
I went ahead and added a noise texture and a color ramp
plugged that into the density
I didn't do the emission this time
but I animated the w value once again
Againwe do this in the Sandman animation
So for whatever reason you miss that
make sure to check that out
Alsofor the Hdri
I did remove it
I didn't like how it looked
in fact
let me remove it fully
I just added a sun lamp without the Hdri
All right
and that is pretty much it
One last thing I want to do
I want to add a little bit of grass here because it's a little bit
a little bit empty
So once again
we're going to do particles for this in the resources of this video are some vegetation models
so go ahead and go to file
import Fbx
and right here
go to the vegetation folder and select Vegetation Fbx
Then right here
move it to the side where all these other collections are
And here we're just going to hit M
move it to new collection and call it grass or whatever you want
You can see here
this is what these look like
so they look like
so you can also see that the origin point of these are in the middle
So in edit mode
let's go ahead and hit Gz and bring it up so that the origin point is at the bottom of all of these
Then I just want to add these to the floor right here
so let me hide my Volumetrics box
I'm going to select the floor and I'm going to add a new particle system on top of the rocks one
So new
change it to hair
And obviously this is going to be a collection and the collection is going to be grass right here
Now
right here
you can see that some of them are rotated differently than others
so the issue has to do with these
Let's make sure select these CR A
apply the rotation
and now they're all orientated properly
Then let's go here and let's select
for example
global X
let's make sure it's actually rotated properly
So right here
five hours later there
you can see this scene is getting pretty intense
So you can see that right here
it is all right now
obviouslywell
not obviously
but I don't want these in the path of this character walking
So right here
we're going to go into solid view
And I also don't want these under the rocks
I'm going to go into edit mode
go to the vertex groups right here
I'm going to select this vertex group
and then I'm going to hit Ctrl to select the inverse
and then I'm going to add a new vertex group
And on this group
I'm going to deselect by hitting the C key middle mouse
clicking and dragging right here
So that deselects the path where he's walking
and I'm going to click on Assign
AlsoI don't want these all the way here either
that's just a waste
So I'm going to hit the C key and deselect all of these as well
since we won't see them anyways
And I'm going to click Assign right there
Then on the vertex groups right here I'm going to select the density grass right there
So now I have that
and in fact I want this on velocity hair and you can see that they're laying flat now with velocity hair
So I'm going to go over here
select all of these
and I'm going to change the pivot point to individual origins
and I'm going to hit R X 90 and then hit Ctrl A Apply the rotation
You can see that they're flip the other way
so I'm going to hit Rx 180 to flip them the other way
control A
apply the rotation
That way they're facing correctly
So now let me make sure that they are properly orientated with the alpha image
which they are
So now I'm just going to increase the phase and the randomized phase to give these a little bit of a random rotation
You can see that obviously this doesn't work because it's set to velocity here
All right
very cool
So now if I go into here
you can see that we get a little bit of vegetation
Now you can see that here
the some of these transparencies are black
and that's because we don't have enough transparent rays
So let's go to our settings right here
the render properties and under light paths
let's put the transparent rays from 8
Let's put them up to like 20
And now you can see we no longer have black backgrounds on these transparent images
All right
on this
we can go ahead and increase the number if we want
Totally up to you
againit depends how much your computer can handle
I know this video has gone on quite a bit
We're almost done
I'm going to select interpolated right here to add interpolated children
and I'm going to put the number in the render to 10 as well
And let's see what that looks like
That might be a little bit too much
Yeahit's too much
it doesn't look good
Also we could change the scale randomness
bring this up to randomize the scale a little bit
And maybe let me try to right there
That looks better
I'm going put the render amount to two as well
So you can see in this scene
we have used quite a bit of particles
particles for the bees or wasps
particles for the trees
the rocks
the grass and flowers here
etcwhich is pretty awesome
So with that I'm now going to go ahead and render out
Of course
if I hit alt H
I have my volumetrics right there
which looks really sweet
I'm going to go ahead and render this out
go ahead and do the same
Let's do a test render quickly because I believe we could see this in the render
So right here
all I did I'm going to render this in cycles
I put the time limit to 30 seconds for cycles
and let me change this to GPU
I don't know why it was on CPU
let me enable my GPU
All right
there we go
let me render this out and you can see that right here
we could see this box right here
which is not good
So let's go ahead and see which one that is
because again
we have two of them on here
We have one for the Boolean and the one for the particles
So here you can see that if I go to the particles we have
let's make sure we don't have show emitter enabled
So show emitter is disabled
And then the other 1
let me hide that one H key to hide it
This one right here
which is over here
it should be under the
should be under the sphere
So this one right here
this cylinder
you can see this cylinder right here for the Boolean is not unchecked in the in the render or the viewport
So I'm going to disable that right there and hit alt H
so now if I render this out
let me go over here like so
renderrender image
We are now​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ good
as you can see right there
we don't have the box
very cool
you can see this scene is looking pretty sweet
of course
feel free to do a couple of test renders
so I'm going to do just that just to make sure everything's working properly
It's good to do a couple test renders before you render out the whole animation so you can see
for example here
this looks good
but there's no volumetrics on this side
which I forgot to add
so here I'm going to get my volumetrics box
So right here
let me just go ahead and raise the side here like I did here
So I'm going to add a loop cut right there
I'm just going to delete these faces
and then I'm going to select this edge and that edge and this 1 E key
extrude this up on the Z right there
and then here I'm just going to shift
select that vertex and that one and merge at center
Same with here
mmerge at center
and then fill this with the F key
And there we go
So let me re-render that
and now I have volumetrics
but I'm missing some rocks here and here
So for that
let me hide my volumetrics I'm going to go to the vertex group for the rocks
And I'm just going to select here and click Assign to add some rocks there and here
a sign
And maybe over here
maybe all of here
I'm just going to assign all of that so that I have more rocks there and a sign right here
I think I need a little bit more rocks as well
so let me go to the rock particle system and add a couple more rocks
There we go
all right
And once again
test render
All right
there we go
that looks cool
Maybe a little bit too much rocks
there we go
And then just do a couple test renders
make sure everything's good over here
I want some rocks there
so I'm gon na assign
There we go
maybe do a test render here
Make sure that the wasps are spawning
Of course
make the wasps as big as you want
I think I'm going to increase their scale a little bit just to exaggerate it
And then final test render
You can see that that looks good
I'm actually going to leave them like this because otherwise they're going be too big
So you can see that that looks awesome
Lastly
there's a little bit too many of these white flowers here
They're kind of
you know
they distract you
So on the particle system for the flowers
obviously we could go over here to the use count and right here I'm going to change it so that we have less of those because there's a little bit too many of them
So right here you can see that we have the names of the flowers
Againyou don't have to do this
it's totally up to you
You can see that this one is plain 0
So over here
if I increase all of them except plane 0 0 7
which is this last 1
I will have more of those
So I'm going to put all of these to 11 or so
and plain 0 0 7 to like 3
That way there are less of those
That just looks better for me
All right
with that
go ahead and set up your folder
render out the whole animation
You can see I've already put the start and end frame
And also for the let's make sure to cache these
So right here
you can see that under the voids
we do have a cache
So above the physics tab
we have cache
Let's go ahead and click on bake right here
So this is going to bake all of the frames
Obviously we're starting at this frame and ending at the end of the animation
And there we go
So now that's baked and we are good to go
Go ahead and tweak this as you want
render it out
I'll be back with the final result
All right
let's take a look at this final render
By the way
my file
while I was filming the tutorial got corrupt and it wouldn't open
so I had to redo the scene from the beginning of this video
So it might look slightly different because I had to redo everything
But let's take a look at the final result
Check that out
Super cool
All right
veryvery awesome
So with that
go ahead and share your results
upload your video to YouTube or Vimeo
and then share it on the Q&A here on udesh or on blender mania 3 dot com
Once again
make it your own and go ahead and share it
I'll see you in the next one
Ciao for now a


------------------------

# 31_Snow Fall Animation
All right
and this one
we're going to go ahead and create another practical particle scene
This one is going to be simpler
We're going to go ahead and create some snow falling using particles
So here I want the scene to be the camera looking out a window and there's snow falling outside the window
So I'm going to hit one to go into front view one on the numpad that is CRL alt numpad 0 to position the camera right here
Then let's go ahead and grab the cube in edit mode S key
scale it up like so
Then I'm going to hit tab to go into edit mode
Ctrl R
let's add a loop
cut right here
left click
right click
In wireframe view
select this half of the cube and delete it
Let's then add a mirror modifier
so mirror and turn on clipping
Let's then go ahead and edit mode S
yscale it on the Y and let's hit S X
scale it on the X as Z
scale it on the Z so that it basically encompasses the whole camera like so
All right
very cool
Then I want to go ahead and here I'm going to hit Ctrl R
let's add a loop
cut down the side right here and CRL R
let's add a loop cut right here as well
So now we have these four panels
let's go ahead and select these four panels on the front and the four on the back
Then hit the I key to inset it
And in the bottom left
let's select individual right here to make it individually offset
And let's change this value a little bit so that it's a little bit less like so then with these faces in the front and the back I'm just going to go ahead and hit X and delete faces
Let's then alt shift
left click these two opposing loops
go to edge and bridge
Edge loops do the same thing for all of these right here
So all of these you can hit shift R to repeat the last action
so shift R will repeat the bridge edge loops
then for the windows
let's go ahead and select one of these faces
On the bottom
We're going to hit shift D to duplicate all these
right click to leave it there
and then P separate selection
So now we have the separate pieces right here in edit mode
a key to select everything E key
extrude it up like so
and then a keys
select everything S Y
scale them in a little bit
And now we have these glass panes
Go ahead and scale them down so that they're skinny like so
Againobviously this is glass
we don't want them super thick
All right
so now we have this window right here
let's go ahead and save this by the way
All right
very cool
Once again
we're gon na quickly block out the scene first and then detail it more
So here
let's hit shift A
add a plane
bring it over behind the window in edit mode
scale it up
and bring it above the window
This is where the snow particles are going to emit from
Let's add a particle system set to emitter
and for the snow particles
we're just going to use an iOS forre
So let's hit shift A
add an iOS forre
so iophet change it to subdivision of one
move it to the side
and over here
let's go to render
render as object and change it to the ICO fear-relat​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ed
So now we have this right there
obviously go ahead and scale this up enough so that it goes on the whole window and apply the scale
Alsoobviously
make it so that it's only behind the window or outside
Very cool
let's go ahead and make the windows transparent
So let's go to Render Viewport shading mode and let's add a new material to this
So here on the windows
you can see that there's already a material
so let's make it a single user
we could even rename it Windows
And here
let's go to the transmission
put that to one right here to make it transparent
and let's put the roughness right here to 0
Then in the render properties
let's enable ray tracing right here and back in the material
let's go to the thickness right here
and instead of the default
we're going to change this right here to value right here
And let's put the value down a little bit Now to make sure that this is transparent
let's hit shift A
let's add a cube behind the windows to see if we could see it
And you can see that right now we can't
So right here
let's go over here
and we're going to turn on ray trace transmission right here
And now you can see that we could see the cube
We could change the thickness of the glass for the Ior right here
So right here
we could change this
I'm going to put this to just 1．01 value or maybe even less ．001 right there
I kind of like it at a value of 0
so maybe I'll just put it to 0
All right
so now we could see the snow falling behind the windows
very cool
Now obviously we need a little bit of a scenery back here in the background
So what I'm going to do with the tree sapling add-on enabled
let's hit shift A and go to Curves
sapling tree generator
and right here I'm just going to leave it to the default
I'm going to make this kind of look like bushes
so like kind of like twigs from a bush in edit mode
let's go ahead and select this vertex here and then let's turn on proportional editing and hit SZ and scale this down like so
Then I'm going to select some of these vertices here as z
scale them down like so
and then maybe select some of these Gz and kind of bring them down and make this look a little bit more like a bush of some kind
There we go
let me go ahead and put this towards the floor and scale it up
control a apply to scale
So these are going to be like bush trees that are outside
something like that
Then to add snow to this I'm going to go to Edit preferences and under Get extensions
Let's get the real snow add on
So real snow
add on
enable that or install it
And then with the selected then we can hit the N key and under real snow right here
you can see that we can use the real snow add
Now this is really cool
What it does is we could select any object and add snow on top of it
so we could change how much it covers and the height of the snow
And if we go into edit mode
we could just add snow on the selected faces now in order to add the snow on this
we need to convert it to a mesh first
So let's go to object
convert to mesh
and then let's click add snow with all the default settings
So here you can see it's added snow to the top and around the branches
pretty cool
So now let's select the snow and the tree
so the tree and the snow
And I'm just going to go ahead and hit shifty
duplicate it
and duplicate another one over here
That way we have two snowy bushes right there
Maybe on this one I'll hit Rz and rotate it randomly
so that's not the same
Let me also delete this cube
we no longer need it
All right
very cool
So now we have this right here
Againwe're going to tweak it as we go
Then let's select the light
make it a sun lamp value of four as usual
And right here
we're going to go ahead and put the sun
Obviously the sun is outside now you can see that this plane right here is blocking the sun
which is not good
So for this
we could just go ahead and add a material on this plane
and we could change it from a principled bsdf to a transparent shader right here
And now you can see that it's transparent and it won't block the sun
All right
as far as the windows
I don't want any of the light from outside coming in to the inside because obviously we're inside a house
So let's make shift some walls
I'm going to hit Shift A
let's add a cube
and just go ahead and scale this cube up in top view
Go ahead and scale it enough and place it just like that that the walls go through the window and make sure that it encompasses the camera
And there we go
That's all we have to do
And this way
this will block any light from outside
Now
obviouslywe need to cut a hole through the wall
So right here
let's just hit Ctrl R
add a loop cut
We could do it from outside CRL R add loop cut right here
Ctrl R
add another one right here
CRL R add one right here and one right here
And then select that face
delete it
and there we go
very cool
All right
so this looks great so far
windows are way too sharp
let's bevel them on the modifiers
let's add a bevel modifier
so bevel right there
and I'm going to increase the number of segments to 3
Once again
bring the amount to zero
hold down Shift and bring it up slightly to bevel it slightly
and then right click
shade it smooth
All right
super cool
So now we got this right here
and you can see that the snow is falling
although we can't really see the snow
it's quite hard to see
so obviously we're going to have to change some of this
Now for the background here
I would like to add an Hdri for the background
So let's go to polyhaline dot com and on polyhaline dot com
click on browse a cri's
And here we'll type in winter or snow
This does not look like
wellthis one a little bit
Let's see if I type in snow
maybe this one has even less
There we go
so I think I'm going to go with this one
I'm gonna go with something like that right there
So I'm gonna go with this one right here
snowy forest path
you could go with whichever one you want
I'm going to click on download and I'm going to put this in my folder
All right
back in Blender
let's go to the World tab
That's not the world
the World tab
click on the color
the little yellow dot
select environment texture
and open that Hdri
So right here
we're going to open the snowy forest path and check that out
That already looks pretty cool
Now you can see that right here
this is lighting the inside of the house
which I don't want
So let's go ahead and change some of these settings
I'm going to put the strength down a little bit like so
and I'm going to bring it to like 1．1 or so
I think this will look good
All right
let's then select the light
the sun lamp right here
And let me tumble
rotate this a little bit so that I have something that I like right there
Alsofor the Hdri
I kind of want to rotate it
So going to the Shader Editor
let's change this to World
And with Node Wrangler enabled
select this node CRL T
add a mapping and texture coordinate
I'm not really sure what happened there
CR T
why is it adding like 20 of them
So right here
select just this node
For some reason
it has all of them selected
just this one CRL T
there we go
And on the mapping
we could change the Z rotation to change the rotation of the Hdri
so we could change it to something that we like
such as this right here
Now I want the background to be blurred
And I only want us to be able to see kind of where the bushes are
So let's select the camera
and right here
let's enable depth of field
For the depth of field
I like to add an empty object that acts as our depth of field object
So I'm going to hit shift A
let's add an empty plane axes and bring it to where the bushes are
Then on the camera
let's select that empty as the focus object
empty
And right here
you can see if I bring the F stop down to zero
you can see that everything is out of focus
But if I bring it up a little bit
you can see that this is basically going to keep everything out of focus and just focus on this empty
So if I hit G and Y and bring this empty closer in like this
you can see that the background blurs out
And if I bring it further
you can see that the foreground blurs out because again
it's focusing on this empty
So I'm going to bring this empty to about right here
something like so
I can bring it a little bit more
I'm going to bring it to
yeahright about there
Maybe I'll bring it in front of the window
In fact
that way the bushes are a little bit blurred out right there
All right
very cool
Now if I play this
you can see our snow is way too small
we can't even see them
Let's go to the particle system
And in the settings
obviouslylet's put the scale up a little bit like so
And there we go
So now we can see some snow falling a little bit
Now obviously we need to give the snow a material
Alsothese are a little bit big for snow particles and there's not enough of them
So right here I'm going to go ahead and increase the number
I'm going to put the number from 1000 to 10000 right there
So now we have 10000 particles
You can see that that looks a lot better
I'm also going to change or increase the scale randomness
so let me go right here
I'm going to increase the scale randomness right here so that we have some smaller and bigger spheres for the snow
I'm also going to uncheck Show emitter
That way we don't see the emitter in the render
And there we go
pretty cool
Now of course
we need to add a material for the snow
so let's select our original iospora
go to the object shaders or nodes
add a new material
Let's also right click and shade it smooth
And on here
add the base color
Let's get a color ramp right there
And now the factor
let's get a noise texture
then let's change the color ramp
the black color to like a bluish color
so kind of a white bluish color like so
And then for the snow
we want it to be a little shiny
So let's put the roughness down quite a bit
And from the normal
let's get a bump node
plug the factor into the height
and then we're going to have to put the distance down a little bit
So let's put the distance down to ．01
or maybe ．1 right here
like so
I also want to put subsurface scattering
Subsurface scattering basically means that the light will penetrate and scatter through the surface
So right here on subsurface
let's put the weights to one
And right here we have red
greenand blue
the red
greenand blue channels
So right here
red is set to one
I want to set the blue right here to one instead
so right here I'm going to put the blue to one and the red to 0．1
And then I'm going to increase the scale a little bit from 0．05 to like a point six five
like so
Also for this
if we change this to cycles
it will just look nicer in cycles as well
But let me change it or leave it to Eev for now so that it loads a little faster
All very cool
Let's give the snow on our trees the same material
So select the snow on both of these shift
select the snow flakes and Ctrl Link materials
That way we have the same material
Then for our windows
we want to go ahead and put some frost on the windows right here
So in order to do that
let's select the windows and let's go over here
Let me move this over
select just this node
move it over out of the base color
I'm going to get a color ramp
let me CRL shift left
click the color ramp so we can see what's happening and out of the factor of the color ramp
let's get a separate XYZ
and set it to z
then CR T
add a mapping and texture coordinate
delete the image texture
just the image texture right there
plug this back into there and change this to generated right there
So now you can see it's giving us this gradient from black to white
Now right here
I actually want to separate these out so that we have another gradient up here
So in edit mode
let's select one of the top faces of each of these window panels
Ctrl L to select the linked so that we have all of this selected and P separate by selection
So now you can see that we have a gradient from black to white on these windows and these ones right there
very cool
Now for this area where it's black
I want it to be the snow
So for that
let's go to our snow right here
And I'm going to select all of these nodes right here
hover my mouse
Ctrl C to copy
so Ctrl C to copy
go back here and Ctrl V to paste
And let's move them over
Let's then go ahead and add a mix shader
So mix shader right here and drop this after the color ramp right here
Now I actually want to plug the principal bsdf into this
not the color ramp
Now right here
anything that's black is going to be this top shader
anything that's white is going to be this bottom shader
So obviously for the black areas
I want it to be the snow
So let me put the snow principle bsdf into that one
and then let me put the transparent glass into this bottom right here
Let's go ahead and remove this from this principle bsdf
and we're going to use this as a factor instead and plug that into here
So now you can see that down here
we're going to have snow
And over here it's going to be transparent
Let's also contrast this because it's going to be a little tricky to see
So on the color ramp
we can bring the black slider up a little bit and bring the white slider down
and now you can see exactly what's happening
How awesome is that
We now got this snow outside on the windows at the bottom
Nowright here
I don't want it to be completely straight because right now it's just completely straight
I want this to have a little bit of variation
So right here
let's go ahead and get a mix color and drop it after the mapping out of B
let's get a noise texture and then bring this up over here
Not that far
just a little bit
And now we're going to plug this mapping into the vector right here
So what this is going to do is a factor of 0 is our original vector is
and a vector of one
the vector is are being distorted by this noise texture
But you can see that the vector is are moving off the window or the texture is moving off the window
So let's change this from mix two linear light right here
And now you can see that they won't move off
they will just distort as you can see right here five hours later
So you can see right here
it just distorts it
So let's increase this a little bit and then let's change the scale of the noise and just bring this up a little bit to something like so
We could increase the detail a little bit and increase the roughness a little bit as well
And now we got this awesome kind of snow forming at the bottom of the windows
how awesome is that
Very awesome
All right
very co​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ol
So go ahead and tweak this however you want
totally up to you
So now we got that right there
pretty sweet
All right
go ahead and save and we will finish this scene in the next video
I'll see you in the next one
ciao for now of the


------------------------

# 32_Snow Fall Animation 2
All right
let's go ahead and finish the scene
First thing I want to do is select the camera
Go to the camera properties under Viewport display
put the past part out to one
Then I'm going to hit G middle mouse button and zoom this out slightly
Then in the World tab
I want to put the strength of this down a little bit from 0．1 to 0．03 or so
I want it a little bit darker
Then right here
obviouslywe're not going to have a sun lamp because we have no sun
So let's select the light and change it to a point light with a power of 1000 right here
Let's also make it a slightly yellowish color
And we're just going to place these right here next to the wall of the house
making it look like there's lights outside right here
And I'm going to position and shifty and duplicate one right there
All right
now it gives it this warm glow
I also want to add a little bit more to it and make it look like there's Christmas lights over here
So for that I'm not going to put the actual lights in the window
but I want the emission from these lights to kind of glow on our scene
So in top view I'm going to hit shift A
let's add in a mesh UV sphere
move it to the side
and in edit mode I'm going to grab the top vertex with proportional editing on okke Let's hit G and Z and kind of shape this like so
Brilliant
Let's right click
shade it smooth
then let's hit shift a add in a curve busier curve
and with this curve we can move it to the side
For now
let's go ahead and go to the geometry nodes up here and here
Let me close this
Let's click on new to add a new geometry nodes
Let me hit delete on the numpad
To zoom into the curve
all we're going to do is go ahead and get an instance on points
instance on points right here
and for our instance object
we want this sphere right here
so drag in the sphere
which is this one over here sphere
So I'm going to left click and drag it from the Outliner into here
Let's plug the geometry into the instance
and now we have that
Now all we want to do is get a Resample curve node
so resample curve and drop this after the group input
what this is going to do is it's basically going to redistribute the points of the curve and subdivide it and space them out evenly
For example
here on the curve
if I delete these vertices in edit mode
hit the T key
and down here we have the draw curve option
not the annotate the draw curve
we could draw our curve
and you can see that here
if I hit the M key to mute this
we basically have a sphere right here on every point of our curve
But this resample curve is going to redistribute the points and space them out evenly
and this instance on points is basically going to add an instance or this sphere on every point of our curve
let's change this from count to length
so now it's based on the length of the curve
and let's hold down shift and increase the length here
so that they're not so close to each other once again
if you want to learn all about geometry nodes
I have a course that goes over every single geometry node
what they do how to use them
and it is awesome
all right
so now we got this right here
I want to go ahead and put the scale of these down
so here I'm going to left click and drag this scale
hold down shift
bring it down
and here I'm going to decrease the length
so let me hold down shift and decrease the length to something like that
all right
so now if we go ahead
go into this view right here
so control one tab to go into edit mode of our curve
delete the vertices right here
we could just go ahead and draw a curve like so for the lights
of course in edit mode
we could hit g and y
and just bring these out a little bit
all right
so now we need to add an emission for these
so let's go to our original one right there
add a new material in the shader editor
so add a new material
and now the base color
let's get a color ramp and right here out of the color ramp
let's get an object info set to random
let's also go to material preview obviously
So now you can see that these are given a random color
Obviouslywe don't want black and white
so I'm going to change the black maybe to a red
I'm going to change the white to a blue
I could control left click here to add new stops
I'm going to make this one yellow and maybe this one green
and maybe one more for like a purple
And then I can click this little drop down
distribute stops from left to have them evenly spaced
Also right here
we could change it from linear to constant
That way we don't have in between colors
All right
we obviously need emission on this
So on the emission
let's put the strength up to like 2
Now you can see that they're all white
so we need to put this color ramp into the mission color as well
And there we go
So now if we go to render viewport shading mode
you can see that here we get a little bit of the light
In fact
they're not emitting that much
We can put the strength up a little bit like so
and you can see that here again
we get a nice subtle kind of lighting right here
We could make them be seen in the window a little bit if we want
It's totally up to you
In fact
it looks kind of nice it being seen in the window for it if we want it to be seen in the window
Let's also add the wire
So on the geometry nodes of this
let's get a join geometry right here
drop it after the instance on points
and we're going to plug the group input into the join geometry so that we get the curve back
As you can see
it has no depth to it
so we need to get a curve to mesh right here and drop this in between the joint geometry and the original group input
So drop it right there and out the profile curve
Just get a curve circle right there and then put the radius down
Obviously you can hold down shift to move it in smaller increments
and there we go
So just like so for the lights
they are facing the wrong way
So I'm going to grab this original one
Let me move it into the scene so that we can see what's happening in edit mode
I'm going to select everything Rx 180 and flip it
and then you can see it's in the middle of the wire
so I'm going to hit Gz
bring them down so that we have them hanging at the end right here on the wire
Alsojust to make it a little bit better I'm going to go ahead and alt left
click this loop here CRL plus
increase the selection
and I'm just going to hit the E key
bring it up SZ
let me turn off proportional editing SZ 0 and flatten that out
then for this I'm going to hit Ctrl plus
increase the selection to here and let's just add a new material and make this a blackish grayish material and assign it so that we have something like this
All right once again in edit mode with everything selected Gz
bring it down until that black part is going through the wire and then move this to the side and now we got this nice look right here
very cool
Now these are way too big for me
so I'm going to go to the geometry nodes
left click and drag down on the scale
hold down shift and just scale them down a little bit like so
and I could change the length if I want more or less
something like that
looks nice
And there you go
you can see it's very subtle
but it adds a nice little touch to it
very cool
Feel free to adjust these lights as you want
you can make it drape more over the window if you want it more obvious
I don't want it that obvious
I kind of want it subtle also for the Hdri
I want it even less
I'm going to put it to ．02 right here
I want it kind of dark in the background
and let me see what it looks like there
I'll just put it to ．02
All right
very cool
I want a little bit of light inside the house
so I'm going to hit shift
a light at a point light right here
bring it inside the house
and on this I'm going to put the power to 1000 as well
That's way too much
maybe 200
And I just want a little bit of a subtle light inside the house
Let me move it over right here so you can see we have it right there
So something like that and I'll put I'll probably put the power down to like 100 or maybe 150
I also want to change the color from white to like a yellowish color
make it a little bit warmer
And there we go
That way there's a little bit kind of like maybe a night light or something inside the house
Againyou can position it kind of wherever you want
but there we go
that looks good
As far as the window panes right here or the borders
I want this to kind of look like there's paint on it
so I'm going to go to the Shader Editor and right here
let's go ahead and out of the base color
get a color ramp right there And out of the color ramp
let's get a noise texture
Then right here
I want to scale the noise texture on the X axis right here
so I'm going to hit Ctrl T mapping texture coordinate
and let's put the X scale to ．1
So now it gives us this kind of stretched look as you can see right there
we could increase or decrease the scale a little bit
and then we could contrast the color ramp a little bit like so
So something like that
And you can see what the scale is doing
This was at one right here
and if we put it to point 1
we get this
All right
very cool
Now for this
I don't want this to be the color of the window
I mainly want to use this for the bump
So out of the normal I'm going to get a bump node
I'm going to remove this from the base color and plug this into the height
So this is just going to give it that bumpy look as if there's paint brush strokes on here
I'm going to increase the scale of the noise to something like that
And then obviously
I want it to be much more subtle
So on the distance I'm going to put it to ．1 or even less ．03 or so
so that we get this kind of look
maybe even less ．01
something like that
I also want this to be shinier
So I'm going to put the roughness down to make it a little bit shiny
like so
Againvery subtle
but it gives some texture to the window
very cool
All right
that looks good for the wall
We could do something similar
So I could select the wall shift
select the window CRL link materials
and on the wall
let's make this a single user
So click the little 2 and on the wall
let's put the scale back to one
And let's create kind of like a popcorn E wall
So if I put the distance to one right here
you can see what we got way too intense
obviously
So I'm going to put the distance and bring this down
You can see right here
it's clipping off
So let's bring these color ramps down again
like so
and then just adjust it however you want
something like that
you know
kind of like a bumpy wall
That's way too much
So let me tone it down
Againvery subtle
but it adds to it
All right
let's go ahead and make sure to save this
You can see how awesome the icing on the windows looks
All right
now a couple more tweaks
This is a little shiny right here
so let me put the roughness up a little bit like so
Againfeel free to tweak things as you want
Totally up to you
Right here on the outside
the Hdri is a little too prominent
I want a little bit more
maybe some bushes or something
or maybe like a hedge
Because right now the Hdri just looks a little tacky because
you know
there's nothing
and then there's just this Hdri
So lastly
let's go add and add a kind of hedge for that
I'm going to hit shift A
let's add a cube
obviously we're going to add snow to it on this cube
Let's just bring it over here in edit mode
scale it up a little bit
Let's go to the geometry nodes
which we already are
and go to geometry nodes here
click on you here
we're going to hit shift A
we're going to get a mesh to volume
this is going to turn our mesh into a volume obviously
and then we want to distribute points in this volume
So let's get a distribute points in volume right here
and this will add points in the volume as the name implies
Then we want to instance some objects onto these points
so let's get an instance on points and drop that after now we just want to create a kind of leaf
so for this
let's just hit shift a go to curve sapling tree generator
And here let's go ahead
let me zoom into the tree
So let me zoom into the tree over here
then with this I'm going to change this to a
let's see
maybe a small maple and I'm just going to go to the leafs up here and click on show Leafs so that I have a leaf
All I'm interested in is to get a single leaf
I'm going to delete the tree
select the leafs
I'm going to select these faces right here
CRLI invert the selection and X delete vertices
so now I just have this single leaf with this leaf
let's right click set origin
origin to geometry and let's just move it to the side over here
All right
then let's select our cube
Let's select it in the Outliner because it's gone
so cube this one and let's drag in that leafs into here
plug the geometry into the instance
and now you can see that we're instancing all these Leafs here
I'm also going to move this leaf to the side
so now let's select our bush right here
And let's go ahead and put the scale up like so
And on the rotation
out of the rotation I'm going to get a random value and I'm just going to left click and drag on the minimum
Drag these down
left click and drag on the maximum
drag these up
and then we just want to go ahead and change the density on the mesh to volume and the density on the distribute points and volume
And as we change this
you can see it gives us this kind of bush or hedge
And now we could just go into edit mode
select a face g．x．
move it over
and same here
g．xmove it over
and now we have a hedge for our scene
How awesome is that
Obviouslygo ahead and position it so that it's filling up the scene like so
And let me go ahead and bring it up like so
Nowright here
I can't really see it that well
There it is
we're obviously going to add snow to it
Let me bring it up a little bit
maybe on the leaf
So right here
select the leaf
wherever the leaf is
where's the leaf
I guess we could just select it in the Outliner
because there it is
Let's add a new material to it and make it a kind of greenish color and make it like that
There we go
and there we go
Now we can't see any of the bush
so let me fix that
So right here
let me go ahead and let me actually hide these windows for now just to position the bush because I can't really see it as it is
So I want it somewhere like that
Very cool alt H
unhide the windows
And on this
obviouslywe're going to add snow
Make sure to save before because the real snow add-on can crash things sometimes
So I'm going to save and I'm going to go to the real snow and click Add Snow right here
You can see here that I'm getting an error
So right here
first thing I want to do is after the instance on points
get a real instances
This is going to make this actual geometry
Let's actually try it with that
and there we go
we don't even need to apply the geometry nodes
Now you can see that this snow looks absolutely terrible
It's just kind of on the Leafs right here
which I don't like at all
it just
it just looks bad
so I'm actually going to delete that right there
and I'm kind of going to fake it
so I'm going to remove this real instances by alt left clicking or you could just hit controllers X to delete it and keep the connection
And right here I'm going to hit shift S cursor to selected
I'm going to hit shift A I'm going to add a plane and bring it up and with this plane I'm just going to go ahead and kind of conform this to this right here
so here
bring it into the bushes a little bit
And here we're just going to go ahead and edit mode s y
scale it up Sx
scale it up like so
move it over like that
and then just to randomize it a little bit
I'm going to right cli​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ck
subdivide it a couple times
turn on proportional editing
set it to random
and I'm just going to kind of tweak this slightly so that it's not so perfect
Kind of like so right there
And then maybe grab it and bring it up and bring it down
Then with this fake plane selected I'm going to click on add snow to that and then it will add snow to the top right there
And there we go
Now it still looks terrible because it's way too thin
So let me delete that snow
And I'm going to put the height from 0．3 maybe to one
and then add snow again
That's better
but I want it again more stacked
So I'm going to put the height to maybe two
add snow
Againfeel free to adjust it as you want
There we go
that looks good
Then I could just go ahead and select this plane
Let me hide this quickly
select this plane
and in the Outliner I'm going to disable it in the render so that that doesn't render out
Obviously select this shift
select the snow here CRL link materials
All right
veryvery cool
You can see that we can't really see it much
So let's bring this closer to the light
Go towards the light
So right there
maybeand let me bring it up a little bit
Againfeel free to adjust it as you want
You can see right here
some of the leaves are still going through
so I could just grab this snow pile
I kind of still want some of the leaves to go through
but maybe something like that
There we go
you can see that that looks good right there
Veryvery cool
Of course
you can feel free to adjust this as well
so you can kind of tweak and adjust this if you want
You could turn on proportional editing set to smooth etc
or you could just regenerate it
Like I said
feel free to adjust this as you want
So something like that
You can also select it in edit mode
scale it on the Z
there we go
I'm going to do that
So instead of regenerating it
you could also just scale it on the Z I'm going to make it a little bit bigger like that
All right
very cool
Like I said many times
I think I could go on for hours with this and keep tweaking it
So I'm not going to do that because otherwise we'll be here forever and ever
So you can see that this looks pretty awesome
I'm going to go ahead and put the let's change this as well
let's go to the particles and then we will render out particles
Let's put the lifetime of these to 200
Then I just want these to disappear when they hit something
So I'm going to hit shift a
add a plane
move it over in edit mode
just scale it way up
make sure that's below your scene and with the particles under physics
select Dion hit so that when they hit this
they will just die and disappear
As you can see right there
Make sure to scale this enough so that it encompasses your whole scene
obviously
So like that
Obviously on this
we need to make this a collision and there we go pretty cool
I'm also going to just so this makes sense
I'm going to grab the bottom of the house right here and in edit mode
bring this up so that it's on the ground and it makes a little more sense
Also for these bushes right here I'm going to select these vertices Gz
bring it down right here as well
Gz bring it down
doesn't really matter
can't see it
but you know
all right
veryver​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌y cool
Now I want these particles to already be playing at the beginning of the animation
So I'm going to put the frame start to negative 100
And now you can see that on frame 1
they're already falling
That way
We don't have to wait for them to fall
which would look very
very weird
So now you can see that we have this right here
Pretty cool
All right
last thing
This is the last thing
because otherwise this is going to go on too long
Let's add some volume metrics
So shift a five hours later
shift a
add a cube
scale it up in edit mode
same thing as always in the shader editor
delete the principle bsdf I don't know why it keeps not clicking
And on the volume
get a principled volume right here
And we're just going to add some volume metrics
obviously not that dense
Let's put the density to like ．1
you can see that that adds so much to it
especially for the light because it makes the light kind of have volumetric lighting
All right
let me scale that up a little bit
Let me center it right there
Maybe I'll put the density to 0．2
That's too much
Ohso maybe put some emission strength on it a little bit
maybe point point zero
Yeahthat looks good
Obviously we don't want this inside the house
so hit gny make sure that the volume metrics is just outside the house
like so
All right
very cool
Againadjust it as you want
All right
lastlyI know I said that was the last thing
it is the last thing
but I just want to add some glare
Let me put the density up a little bit
let me put the density to 0．2
maybe right there
And the emission
All right
I think that will be good
like so
All right
very cool
I'm also going to switch this to cycles right here
I think that will look better
You can see the density in cycles is way too much
so let me put it down again
．02and that looks good
All right
that's going to look good
Let's put the time limit to 30 seconds and let's go ahead and go to the view layers and enable the object and material crypto mats
Let's do a render
We're going to add some quick glare to the lights
so render image and we will be done
All right
so here is our image
you can see it looks really sweet
but we can make it look even better
So here
let's change this to the compositor
We're going to change this one to the UV editor right here
click on use nodes
and right here we're going to CRL shift
left click to get the viewer node
I'm going to hit the N key to close that
and here let's get the viewer node
We need to CRL shift
left click again
all the way back to the image to update it right there
I could zoom out right here a little bit
and now I'm going to hit shift A
let's get a glare node
drop this in between the composite and the image and CRL shift left
click it to the viewer
So now you can see what this gives us
Obviously
it's way too intense
So let's put the fade down a little bit and make it a little bit less intense
something like so
Then I'm going to hit shift D
duplicate this glare node
drop it here
ctrl shift left
click it to the viewer
and I'm going to change this one from streaks to Fog glow
And this is going to give us a glowing effect like so
And you can see that that looks really awesome
Once again
we can put the threshold up a little bit if we want to tone it down a little bit
As you can see right there
I could put it up
but I'm gonna put it to maybe like a four or so
something like that
Very cool
All right
and then just a couple other little touch ups
the walls
I want to darken those a little bit
so I'm going to hit shift A
let's get a crypto mat and plug the image into the crypto mat
A crypto mat basically allows for us to mask out objects or materials
So if I Ctrl Shift
leftclick to the pick
you can see right now it's set to object and I can click the little plus icon and select the cube or the wall
So now if I Ctrl Shift
leftclick the image
you can see I just have the wall masked out
I could then get an RGB curves
for example
drop that in
And if I b​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ring this down like so
it will darken the walls right there
as you can see
So I kind of want to darken this because they're a little too light
Then to join this back in
we just need an alpha over drop this right here and this new RGB curves with the walls needs to be in the second slots right here
So now when I CRL shift left
click this
you can see that we have these new walls right here
which we could darken
Pretty cool
Now I also want to darken the windows a little bit
so on the plus icon right here I'm also going to select the windows right there
that way I could control the walls and the window with this and kind of just darken it as I want
Obviously we don't want to make it solid black color
so something like that
it just looks nicer
I think I could hit the M key
unmute it and mute it
You can see the difference right there
All right
veryvery cool
All right
now last thing I want to do is just add a little bit of motion blur to the snow particles
For that
let's go to the render properties
And right here you can see that we have motion blur
So let's enable motion blur
Nowif we render this out again
you can see that we have some motion blur for the snow particles
Veryvery cool
Feel free to adjust the settings of the motion blur
All right
that is pretty much it
Againfeel free to tweak this scene
make it own
I'm going to go ahead and save
I'm going to make this animation 200 frame
so I'm going to put the end frame to 200
of course I'm going to go to my particles and under the cache
let's go ahead and bake this
So bake the cache of the particles and then go ahead and render out
I'll be back once this is rendered out and in a movie
so go ahead and do the same thing
All right
let's take a look at the final result and check that out
That is super awesome
it's beginning to look a lot like Christmas
Check that out
So once again
go ahead
tweak the scene
make it your own
and then once you're done
go ahead and upload it to Vimeo or YouTube and share it on the Q&A here on udesh or on blender mania 3D dot com dot
With that
I'll see you in the next one
ciao for now Vo


------------------------

# 33_Hair Animation
Alright
this is the last practical example for the particle system
In this one
we're going to create a hair simulation and animation
So as usual
let's go to mixamo dot com
Make sure once again to log in or sign up
And here on the characters
we're first going to get a female character so that we could have some long hair
So let's go to page 2 and let's go ahead and get this character right here
Where is right here
This one right here Sophie
So let's click use this character and then let's go to animations
Here you can get whatever animation you want
it doesn't matter
againget whatever you want
I'm going to search for dancing and I'm going to go ahead and get this one right here
the hip hop dancing
So this right here is going to be cool
All rig​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ht
then let's go ahead and click on download
download everything as the default and download and put that file into your folder
All right
now let's go back into Blender and here
let's go ahead and delete the default cube and go to file import and Fbx
Find your Fbx and import it
And there we go
We now have this right here
brilliant
All right
now let's go ahead
let's delete the hair that she already has
So here
let's delete this hair and on the character on the head
let's go to the particle system
add a new particle system
and select hair
Now
obviouslywe don't want the hair everywhere
We only want it on the head right here
So in edit mode
side view 3 on the numpad
let's hit Z
go into wireframe
and here let's go ahead and hit the C key
get the brush tool
and let's left click and drag and select all of these vertices here
So I'm first going to select the outline right here
So all of this
like so
all the way to here
all of these as well
right there and here
and then I'm going to scroll up my mouse wheel or scroll it down to increase the size and select those right there
All right
then let's go to the vertex groups
add a new one
We can name it here and click on Assign
Then in the particle system
let's go to vertex groups under density
select the hair vertex group
and there we go
You can see her hair is really long
so all the way at the top
put the hair length and put this down like so
So however long you want the hair
I'm going to do something like that right there
Now for the hair
what's really cool
one thing that we did not take a look at is the particle edit mode where we could actually comb the hair
So with the head selected
hit Ctr tab and you can see we have particle edits right here in the left
You can see that we have all the different brushes
So we could comb our hair
we could smooth the hair
we could add hair
we could increase the length
we could puff it up
cut it
and also add weight or remove weight from the hair
Againthis is like weight painting
So here you can feel free to use any of these brushes
Right now
I want to comb it
You can see that we also have a radius and a strength
If I hit the F key
this will change my radius and shift F will change my strength
I'm just going to leave the strength to the default and increase my radius with the Fq
and then I'm going to comb the hair back
how awesome is that
So I'm going to comb it back like so
And then in front view I'm going to part it or comb it to the side
So right here
let me comb this side and right here let me comb this side again
combing this hair to that side and this hair to that side
so like so
So something like that
you can see that it's going through her head and she has a bald spot
but let's go to object mode right here and let's go to the particle settings and enable hair dynamics
So now if we play this
it's cousin it
you can see we have this right here
looks a little strange because again
we have no hair right there and yeah
so let's select the head
Let's go to the physics tab and enable collision so that the hair actually collides with the hair right there
And then obviously we don't want the hair to go through the head
so we could hit CT tab
go back to particle edit
and right here we could get
for example
the puff brush
increase the scale and here just puff this out of the head a little bit
So that's not in the head
And then right here
comb this towards the end and not the middle right there
So something like so
And there we go
Alsoshe doesn't have enough hair
so right here
you can see that it looks better and we have this right here
but again
there's just not enough hair
So let's go to the particle settings and under children
let's enable interpolated
Right here
You can see we still have issues right here
which we're going to fix
but first let's increase the display amount
I'm going to put the display amount for now to 30 right there
and then I also want to add a kink
so under the kink I'm going to go ahead and change it from nothing to curl
You can choose whatever you want
Again
we've gone over these
so pick whatever you want
I'm going to choose curl
I'm going to bring the amplitude down because it's way too intense and before I do that
once again
let's go to the viewport display and increase the strand steps
I'm going to increase this to like 6
And you can see that that already looks pretty freaking awesome right there
Let me go ahead and put the amplitude down a little bit
so I'm going to put it to like 0 and then increase it from there
see what I want to get like that
I could change the frequency if I want
So if I want more curls
something like that
And that's too much
maybe like that
Let me see what the others look like
Radial wave
And braid
I'm just gon na leave it to curl
Againyou can pick whatever you want
So now when I play this
you can see we got this right here
which looks pretty cool
Now her hair is a little bit all over the place
so let's go ahead and comb it a little bit better
So right here
now that we got a little bit more hair to mess with
alsoI do want to select the cloth right here and make this a collision as well
So the cloth collides with that
Alright
let's select the hair or the head CRL tab
go into particle edit
and right here I'm just going to go ahead and puff this up a little bit
You can see we could add here as well
So if I click on this brush right here
we have the number or the amount of hairs it's going to add
So I could just add by clicking and left clicking right there
I could also left click and drag and just add some hair right here as you can see
And then I could comb it and kind of comb this hair down like so
and comb this one to this side
Kind of help with her bald spot
right
So comb it like so
And Comet and Comet
it's easier to comb it first like that and then get the puff brush and kind of puff this out of the head
We could also use the smooth brush to kind of smooth it out
as you can see right there
But I'm just going to comb it down like so
like that
And let me increase with the puff brush over here
Nowright here
you can see it's kind of affecting all of it
I want to go to particle settings and right here you can see that we can't really change these settings right here because we've combed it
So if I go to object mode
you can see that again
these settings are locked because we've combed the hair
So right here
I want to click on delete
editand this will remove
That looks kind of cool
This will remove the combing and I'm going to put the segments up to not that much
I'm going to put the segments up to like 15 right here
I'm also going to put the strand steps to 7
increase them a little bit more also under the render for the steps I'm going to increase the steps to 5 right there
Also on the children I'm going to enable long hair right there
And there we go
So now going back to the comb
now you can see that right here
when I comb it
it's going through the head as you can see right there
So what I want to do
you can see we have this distance right here
If I increase this distance
this will be the distance from the emitter
so you can see here
if I comb it
it's not going to go through it
Obviouslythis is way too much of a distance
So right here
let me just click on delete edit right here
I'm going to put the distance maybe to ．5
and now when I comb it
you can see it doesn't go through the emitter object and maybe even like 1．8 right there
So if I put it to 0．8
you can see that that's better
Let me delete the edit
and I'm going to go to side view
and I'm just going to comb this back like so
like that
and in front view
going to comb this like so
So now she has more volume to the hair
And then I'm going to come some of this on this side and some of this going this way
So just like that
And there we go
And then if we go back to object mode
you can see that we have this right here
pretty freaking awesome
And if I play it
we get this right here
and now you can see that we have some pretty sick hair
Now
of course
it's a little bit messy
the hair
It all depends how you want it to look
You could comb it a little bit different
you could change the kink
you could change the amplitude
etc
It is totally up to you how you want this to look
So again
feel free to change this as you want
You could also go here on the settings over here
for example
the clumping
I could change the clumping if I want to make it clump more or less
etc
You can see that that looks a little bit better right there
It looks a little bit more controlled and civilized as you can see right there
And then right here
we could change the roughness if we want
etc
So feel free to change any of these settings as you want
But you can see that this looks pretty freaking sweet right here
So now we got this right here
pretty cool
All right
now let's go ahead and quickly do the materials for the hair
Let's also save this by the way
So save As and save it
Then if we go to rendered viewport shading mode
you can see that we have this right here
So for the hair material
let's just make sure it is properly set
So here on the particles
let me go to the shader editor here over here
and on the particles
you can see here that we have the material Ch 0 2 body
So we have the material for the body on the hair
which doesn't look bad
but let's make an actual hair material
So right here
let's go to materials and let's add a new material
name it here
right there on the particle system
Let's select the hair material right there
Now for the hair
let's also go to our light
change it to sun lamp with a value of 4 or 5 and tumble
rotate it so that we could actually see on the hair
What we want to do is delete the principle bsdf
just the principled bsdf
and out of the surface
we're going to get a hair bsdf
Now you can see that here we don't have the hair bsdf in Eev
so we need to be in cycles for this to work
So let's go to cycles
And here you can already see the hair looks much better in cycles as opposed to Eev in evol just looks really dry
and in cycles it looks a lot more flowing and like hair
So here are the surface
let's get a principled hair bsdf there's hair bsdf
but the one we want is principled hair bsdf
Nowright here
you can see we have direct coloring
but this is more for things where if you're going to color the hair or if you're gon na have just a single color
like on a carpet
we want melanin concentration
This allows for us to add melanin to the hair
Againthe melanin is the pigment in the hair that gives it its color
So you can see a melanin of 0
The hair is going to be white
a melanin of one
the hair is going to be black
and then we get browns and reds and blondes in between
as you can see right there
We also have a melanin redness
so this makes the hair more red or gives it more red melanin
So if we bring this to zero
you can see that this will change how the melanin acts and there's no more redness to it
Alsowe have a tint here if we want to tint the hair
for example
if we want to make it green
we want to put the melanin down to like a white color
That way the tint takes effect
You can see if the melanin is set to one
the tint is not going to take effect
I'm going to put the tent back to white
All right
so here I'm not going to go over these settings too much
but you can feel free to mess around with them
The main ones that you're going to mess with is melanin
melaninredness
and the tint
So right here
go ahead and give her whatever color hair you want
I think maybe I'm going to go with some reddish hair
maybe
YeahI think I'm going to go with the red hair again
you could give her whatever color hair you want
so I'm going to do something like that
You also have the hair roughness
Againthis is like the shininess or the roughness of the hair
If we put it to 0
it looks very shiny and reflective
If you put it up
you can see what we get right here
very similar to the roughness on the principle bsdf I'm just going to leave this to ．3 to the default
All right
so I'm just going to leave her hair like that
That looks cool
All right
very cool
So now I got this right here
All right
let me go to solid view and let me add a floor here
So add a floor for the floor
I want a kind of backdrop
so I'm going to select this edge right here
ekeextrude it up on the Z axis
CR to add a subsurface level of 2 and CRA loop cut right here and right here and right here as well
This is just going to create a kind of backdrop
right click shade smooth
All right
very cool
Then with this
go ahead
tweak the settings of the hair however you want
Totally up to you how you make this look
Againchange it
You don't have to put it the same as me
I'm going to go ahead and just mess with these a little bit
Maybe I'll increase the frequency right here
make them kind of curl more frequently
something like that
etc
And of course you could play it a little bit to kind of see how it looks like in the middle of the animation
You can see that that looks pretty cool
And if I pause it right there
you can see that if I go to render Viewport shading mode
that this looks pretty sweet
as you can see right there
All right
very cool
Again
feel free to tweak the settings as you want
Tweak the combing
tweak the amount
tweak all the different settings under the children
tweak the kink however you want
Then for the render amount
you can see we have it set to 100
I'm going to leave it to 100 because I want this hair to have even more volume and have even more strands
So here I'm going to do a test render
Let me go ahead
let me position my camera right about here
So I'm going to position it right here
Ctrl Alt numpad zero
and I want to make sure that she stays within the camera the whole time
so I'm actually going to disable this quickly in the viewport and I'm going to play
This looks kind of creepy with the head and the hands and the legs cut off
So right here
I just want to make sure that she stays within the viewport
which she does
All right
then let me re-enable that and right here
let me play a couple frames and I'm going to do a test render
so maybe pause it right here
Let me also tweak the lighting if needed
So right here
the light
Yeahthe lighting looks fine as it is
Let me tweak it a little bit actually
there we go
So something like that right there
All right
let me do a test render
I'm going to put the time limit to 30 seconds
so 30 S and render image
you can see here with 100 children
the hair has much more volume and it looks a lot better
obviouslybecause there's a big difference between 30
which is what we have in the viewport
and 100 children particles
You can see it looks a lot better
All right
and check it out
that looks pretty freaking sweet
So with that
once you have all your settings as you want
againgo ahead and spend some time and tweak it
AgainI could spend quite a bit of time on this
tweaking everything and changing it
especially if you're going for a certain look
It all depends what you're going for
I'm not necessarily going for any specific look here
so I'm just setting kind of random values on certain things
but go ahead and tweak it
Once you're done
go to the cache and let's go ahead and bake this once again
I'm going to put this to 200 frames
So let me put the end right here to 200 and let me put the render and 200
then I'm going to click on bake
so make sure to bake the cache or the particle system
You can see right here
it's going to take a little bit of time to bake
maybe 1 or two minutes
So I'll be back once this is done
Now you can see that here there is one issue is that the hair just goes in front of our character right here
and we can't see anything anymore
so to kind of fix that and trick it
we could go over here
And here I'm going to create an imaginary box that is going to block the hair from going in front of the face
So here I'm going to go ahead and hit shift a
let's add in a cube and go ahead and bring it up
scale it down in edit mode and here
bring it over to the head
Then we're going to hit Gy
bring it forward
And again
this is going to be an invisible collision box that's going to be used for the hair to not go in front of the face right here
We could rotate it
we could scale it again
we're going to apply the scale
so it's totally fine here
I'm going to hit the E key
extrude it
s．x．scale it down
and the main thing is making sure that this is in front of the face enough
So I'm going to hit G and Y and bring it out to about here
So something like that
and then here could select the sides S X
bring it up a little bit
All right
obviously this looks like some kind of birdhouse
Then with this
let's hit Ctrl A
apply the rotation and scale
and then we want to parent this to the head bone
So shift
select the armature CRL tab
go into pose mode and select this bone right here
the head bone CRL P and parent to bone
So now wherever the head bone moves
this will move with it
Obviously with this
let's make it a collision right here
So now this is going to move with the head and the hair will collide with this
Obviously
we need to remake the hair
so let's go to the hair and under the bake
let's click delete
bakeand then we're going to click on bake and rebate it
So I'll be back once this is done
All right
and now you can see that with my invisible still box right here
which is still visible right now
obviouslybut you can see if I play this
the hair is now no longer going in front of the face
which is obviously good
Then we could select this and we could go ahead
go under the armature
The cube is right here
We could disable it in the viewport and the render
And now we got this right here
which looks awesome
veryvery cool
Check that out
There's still some hair going in front
but that looks good and natural
so that's fine
Once again
feel free to tweak and edit this bounding box around the face however you want
You know
you can make it bigger
smalleryou can make it wider because you can see some hair right here is going further past the box
It's going in front
but obviously that's going to happen
So this looks good
I don't want to bring it out
you know
all the way out here
You could do that if you want
For example
hereyou could bring this out like all the way out here so that the hair really doesn't go in front
But having a little bit of hair in front looks good
All right
very cool
Let me do a couple of test renders so you can see that this is looking really awesome and it's not even denoised yet
but check it out
We have the hair
which looks great
We have the bounding box
which is protecting the hair from going in front of the face
and it just looks really
really cool
So you can see what this looks like in cycles if I hit 2 to go to slot 2 and change it to Eev
you could see what this looks like right here
I mean
they both look good
You can see right here
obviously the hair is black because the principled hair bsdf only works in cycles
so it's not taking effect right here
But as far as the actual hair strands
you can see that here it looks a little bit
it looks a little bit more dry and not as natural
It definitely looks better in cycles
You could set this up for evol cycles
just looks 100 times better
So I'm going to set this back to cycles
I'm also going to change this to GPU compute and right here I'm not sure why that's grayed out
even though I have my GPU enabled
there we go
All right
so here
go ahead and save this
And as always
go ahead and render it out
I'm going to render out my 200 frames and I'll be back
Once this is an animation
go ahead
do the same thing
tweak it as you want
make the scene your own
and I'll be right back also one very last thing on the material of the girl right here
I'm gon na
go ahead
you can see that the roughness right here
it's making her look very shiny
kind of like she's made of plastic
like a Barbie or something
So I'm actually going to remove this image from the Roughness slot
I'm just going to remove it completely
and I'm going to put the roughness to like 1．6 or so That just looks a lot more natural than what we had before
Like this
everything is just way too shiny for me
But again
feel free to tweak that as you want
All right I'm going to go ahead and render this
go ahead
do the same thing
All right
let's take a look at this final animation and check that out
That looks pretty awesome
Everything looks great
I think the one thing I would change is the hair feels a little bit light and not heavy enough
So I think the one thing I would change is on the hair particle system over here
so under the hair dynamics right here
under the structure
I would increase the vertex mass a little bit because you can see right here
it's a little bit bouncy
th​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e hair
and not as heavy as I would like
as you can see right there
But other than that
it looks awesome
Once again
go ahead and render out your animation
make any tweaks or changes that you want
upload it to YouTube or Vimeo
and then share it on the Q&A here on udesh or on blender mania 3 dot com on the forums With that
That is all for the particle system practical examples
I'll see you in the next one
Ciao for now of Vo


------------------------


