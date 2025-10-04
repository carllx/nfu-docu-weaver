

# 章节速览
## 1. Creating Positive Change with Augmented Reality: A Unity Tutorial(00:00 )



```txt
Hi everyone
thank you so much for coming here today
So my name is Antonio Forster
My pronouns are she her
and I'm the senior XR technical specialist here at Unity
XR means Extended Realities
and it's an umbrella term that covers AR
augmented reality
and VR virtual reality
So I specialize in using these technologies to blend real and digital content together to change different industries
and also creating educational and inspirational content to empower you to do the same thing
So you can actually create augmented reality content
which is where you see the real world with virtual content augmented on top for headsets which have transparent displays
or for mobile devices like tablets and phones
because not many people actually have an AR headset
Today I'm just going to focus on AR for mobile devices and in particular
how they can be used to do good in the world
whether that's social impact
educationawareness
or environmental impact
This tech can and is already changing the world in a myriad of different ways
Today I'll show you how and also how you can join in and create your own AR application
So here's how the talk will be structured today
First
I want to show you how some amazing creators are using Unity to create augmented reality apps that are making a positive difference
Everything from black history to queer representation to conservation and mental health
Then I want to show you how these kinds of applications are made
Don't worry if you've never used Unity before or if you have no coding experience or no background in augmented reality
That's completely fine
I'll show you exactly what the Unity Editor is and are two main solutions that you can use to create augmented reality content
We'll see AR Foundation in detail
and I'll walk you through a tutorial end to end of how you can create your 1st AR app
And then we'll briefly touch on Mars and some of the features it has
And then I'll leave you with some links at the end to continue your learning journey
So this is a sneak preview of what you'll be able to make by the end of this talk
You'll be able to make a virtual character or a 3D model appear on a real life image marker
like a poster
a book
or any printed image that you like
I'm using this robot character
which is made by Unity
and that's freely available for you to use
but you don't have to use this 3D model
You can make anything appear on top of your image
It could be your own artwork or some text or any kind of 3D character or model
And I'll also show you where you can find 3D models and characters to use
So if you've been to some of the other talks here at the Unity for Humanities Summit
you may have seen that Unity develops a lot of different tools
But this is a Unity editor
This sits at the core of it all
The Unity Editor is a real time 3D development platform
So it's basically a sandbox which you can use to create any kind of content that you want
whether you're an artist
an activist
a games developer
or an engineer
you can use Unity to build content for a traditional monitor or for a mobile device
or AR and VR content
And if you've never created AR or VR content before
then don't worry
because building those kinds of experiences is not very different to building anything else in Unity
In fact
if you have existing assets or characters or environments
you can bring these into augmented reality with just a few clicks
For that reason
unity is one of the most popular choices for building augmented reality content
60% of AR and VR content is made using Unity
and mobile apps are particularly popular
There are 5 billion downloads every month of apps that are made with Unity
so even if you've never used the Unity Editor yourself
```

## 2. AR Technology: A Catalyst for Empathy, Education, and Environmental Advocacy(04:13 )
AR is revolutionizing storytelling and education by integrating digital experiences with the real world. Through interactive storybooks that teach empathy and social values, comic books representing diverse characters, and apps aiding mental health and environmental conservation, AR fosters a deeper connection to history, promotes inclusivity, and encourages responsible citizenship. By enabling users to explore virtual environments and interact with educational content in innovative ways, AR empowers learning and activism, making a tangible difference in how we understand and engage with the world.

```
it's very likely that you have used an app that was built with Unity
So what does this content look like
How can AR be used to make a positive difference in the world
Wellone way we can do this is through interactive storytelling and diverse representation
The Twisted Tales are a series of illustrated storybooks that interact with your mobile phone
the writing
and the illustrations for every story blend with virtual content to bring it to life
Using AR technology for play and for education
The stories themselves are lessons in empathy
loveand understanding
They teach kids and adults social values and skills
and the importance of accepting the different into our lives
Comic books
tooare embracing this technology
Island Fever is a series of comic books that follows a group of kids as they navigate a scary world in search of good memories
The overarching message of the series is to represent children of color in a realistic struggle
aspiring to greatness despite the adversity that life presents them
Againyou can point your mobile device at the book
and AR brings the characters to life
It triggers animations
and even allows you to interact with the characters and take pictures with them
The goal of Island Fever is to promote life
libertyand the pursuit of happiness
AR can also help with mental health
Helium is an application that allows you to see your feelings or your mood states
It picks up on physical cues and biometric data
your heart rate
and your brainwaves using wearable devices like a smartwatch
And these are displayed as butterflies
abstract art
or planets reacting to your body's physical cues
You can control your environment with your thoughts
So in a very literal way
your body and your thoughts have power
AR can also be used to build virtual museums
Black Terminus is a tool that builds virtual open air museums and walking tours of black neighborhoods
It allows artists
museumsand storytellers to bring black history to life in a new way by using Black archives
artworksand artifacts
Combined with this immersive experience
you can literally see history play out in the setting around you
Along the same lines
the Monuments Project or Kinfolk is a catalogue of AR monuments of women
people of color
and LGBTQIA plus icons
This allows marginalized people to see themselves in their history
They also partnered with Langston League
who specialized in teaching educators how to create culturally responsive material
It is inclusive for all students
Another beautiful example of AR being used for something really completely new is breonna's garden
This was created in solidarity with breona Taylor's family
bruna's garden is a virtual sacred space brewing with art
lifeand beauty
It's a space to honor briona Taylor
but it's also a refuge where you can give yourself a moment to rest
to surrender
feel at peace
and maybe also to celebrate someone that you miss
AR is a very popular tool in classrooms for education because it's a great way of engaging students
Victory XR is just one example
Using a smartphone
you can look and walk around an entire virtual classroom as if you're really there
You can learn about biology
astronomyhistory
and more
It also allows students and teachers to interact in the virtual environment
And finally AR can be used for conservation and environmental impact
Kew Gardens Ee and Dimension Studios all teamed up to create a 5G AR experience inspired by the BBC show Green Planet
The TV show will be presented by Sir David Attenborough and the app will be designed to encourage audiences to discover new and surprising wonders of the natural world by blending entertainment and education together
So AR is already changing the world from teaching black history and representation to LGBTQIA plus inclusion to disability awareness to environmental action
So if you can learn to develop AR applications
even technically very simple ones
you can use it for storytelling
educationart or activism.
```
## 3. Unity's AR Foundation: Simplifying Mobile AR Development(08:43 )

AR Foundation by Unity simplifies mobile AR development by enabling creators to build apps once and deploy them across multiple devices using existing AR technology like ARCore and ARKit. It offers features like people occlusion and body tracking, making it easy to develop engaging AR experiences without having to worry about device-specific compatibility issues.
```
But where do you begin
One of the challenges of AR is that there's many different tools available
both hardware and software
For example
if you're developing an app for mobile phones
you don't know which mobile phone your user has
Different devices have different capabilities
and historically
you would have needed to develop your app specifically for one device
For example
if you want to build something for an Android phone
you would have had to use AR Core
which is Google's arsd or software developer kit for mobile
If you wanted to build for an Apple device like an iPhone or ipad
you would have instead have had to use a kit
which is Apple's SDK
So wouldn't it be great to build once and deploy to many mobile devices
That's where AR Foundation comes in
which is Unity's solution
It doesn't implement any extra features itself
Insteadit's a layer that sits between the Unity Editor
which you use to create your app
and then specific softwares for specific mobile devices like al-kit and AR core
That means when you build something
an AR Foundation
you can create it once and deploy it to whichever mobile device you want
Any features available in Alcor or AR kit are also available in Al Foundation
So for example
in AR kit
you can utilize people occlusion When people walk in front of virtual content
they occlude it so it seems as if it's in the real world
body tracking
collaborative sessions
and much more
AR Foundation is available via the package manager
which we'll see in a moment and is completely free
These are the kind of things you can make using AR Foundation face tracking
spawning virtual objects onto a horizontal plane
maybe spawning furniture onto the floor within your home
or spawning animated characters onto an image marker
These first two examples have full tutorials available completely for free on our platform Unity Learn
and I'll give you the link to those at the end of the talk
This final example
we'll see how to make right now
So we've covered what AR Foundation is
what it can be used for
and we've seen how people are using it to change the world
```



## 4. Creating Your First AR App with Unity: A Beginner's Guide(10:46 )
This tutorial walks beginners through creating their first augmented reality (AR) application using Unity. Starting with downloading the Unity Hub and installing Unity, it covers setting up build modules for Android and iOS, installing necessary packages for AR functionality, creating an AR session and origin, and finally importing a 3D model to display within the AR environment. By following these steps, users can create a basic AR app that places a character in the real world.
```
So the next question is
how do I get started making my own AR application
Wellwithout any further ado
I want to walk you through it
Againdon't worry if you have no technical experience at all
This is for complete beginners and you won't need to do any
I might go a bit quickly because I only have limited time here with you today
but if you do find it too quick
don't worry
You can follow along with the recording of the talk and pause it whenever you need time to go through the right motions
So the very first thing you need to do is download the Unity Hub
which is completely free
To do this
browse to Unity 3D dot com forward slash
get hyphen Unity forward slash download
or it's easier to just search for Unity Hub on Google and it will be the first result
Then download and install the Unity Hub
Once you have it installed
open it up and it will look something like this
I have lots of existing projects
but if this is your first time using Unity
you won't
so it might look a bit different to install the Unity Editor
The main piece of software we're going to use
click on the Installs tab on the left hand side
then click on Add in the top right and select which version of Unity you want
For this project
I'm using Unity 20 2020 point 2．7 F1
If you can't see the version of Unity you want
then click on Download Archive
which will take you to a web page
Then find the version of Unity you want
Click on the Unity Hub button next to it
and it will open up back in the hub
Then it will ask you about build modules
These are used to put your finished app on the mobile device
so if you want to put your app on an Android phone
tick the box for Android build support
And if you want to put your app on an ipad or an iPhone
tick the box for iOS build support
It's fine to tick both if you want to
This is an important note though
in order to deploy to an ipad or an iPhone
you will need a Mac computer
Then click on install and wait for it to finish
Then to start your new project
open up the Unity Hub and click on this drop down arrow next to New and choose your desired version of Unity
We'll use 2020 point 2．7
choose a name and location for your project
Once that's done
click on Window Package Manager
Click here to make sure you're searching for all packages in the Unity registry
and then download the AR Foundation package
Alsosearch for the Excel plugin management package and make sure that's installed too
And finally
if you're developing for Android
search for and install the package called AR Core
If you're developing for an iPhone or ipad
install the package called AR Kit
Now we have all the packages we need
We're going to create an AR session
To do this
right click in the window over here
the hierarchy
then go to XR AR session
do exactly the same again
but this time create an AR session origin because the AR session origin already has a camera in it
it means we can delete the main camera
Now click on AR camera and in this window
the inspector
set the tag here to main camera
We're going to create an AR app that spawns a character in our environment
So to find a character
click on Window
An asset store will open up in your browser
The Asset Store is full of content that you can use
you can browse by keyword
type of asset
or by price
I'm going to search for Kyle and then download this character called Robot Kyle
Click on download and then open in Unity and then import
Now we have our character
so we can find it in the project window
This window down here
this one is in assets
robot aisle model
drag and drop this into the hierarchy and double click on it to focus
If you want to move around the view in this main window
you can hold the middle mouse button to pan
Hold down right mouse button to look around and zoom in and out with a scroll wheel
You can click this gizmo button to toggle symbols on and off
Now
this robot is quite big
One in Unity is 1 m in real life
so let's set the scale to 0．1 in every dimension
so it will be 10 cm big instead
And that's it
you're actually done making your 1st AR app
It's a really simple app
we haven't set up anything to tell the character where to spawn
it's just going to generate in the location of the mobile when it first launches the app
but it does actually work
so to test it
we have to put it on our mobile device
```

## 5. Building Apps for Android and iOS Using Unity(15:19 )
The dialogue outlines the steps to build an app for Android and iOS devices using Unity. For Android, it involves setting up project settings, ensuring necessary plugins are enabled, and adjusting build settings. For iOS deployment, it highlights the requirement of a Mac and installation of Xcode, and walking through the process of pushing the app onto iPhone or iPad.
```
I'll first show you how to build for Android
and then I'll show you all the steps for building for an iOS device
So first click on file and build settings and click the Android tab here
press add open scenes
and then switch platform if your Android device is plugged into your computer
it should appear in this drop down menu
So select it or just leave it as default device
And now click on player settings
Under XR Plugin Management
which is here on the left hand side
ensure the Android tab is selected and initialize XR and Startup and AR core are both ticked
Then under Play
scroll down and tick the setting called Auto Graphics API
Scroll down further to find minimum API level and set it to API level 24
Set your scripting back end to Il 2 CPP and then where it says target architecture
untack arm 7 and tick on 64
I know that's a lot of settings and you don't need to know what they all mean right now
especially if you're a beginner
Those are just the settings we need to put our app onto our Android phone
We're now ready to send our app to our phone
but to stop it from being blocked
we need to make some changes to the settings
On my phone
the Pixel 3 A
these can be found in settings about phone scroll all the way to the bottom and then tap on build number about seven times
This will unlock developer options on your phone
You can then find these in Settings system
Advanced developer options
scroll down and switch on USB debugging to allow your app onto your device
Now back in Unity
we just have to click on build and run
name your app
whatever you'd like
and click Save
When your app finishes building
it will automatically launch on your phone
Now
before I show you what it looks like on your phone I'm going to walk through all of the iPhone
ipadand Mac users to deploy to an iPhone or ipad
The steps are slightly different
To do this
you're going to need a Mac
You also need to install a program called Xcode onto your Mac
This is a Mac specific program for handling code and it will allow you to push your app onto your device
You can find it and install it using the App Store
```
## 6. Building an AR App for iOS with Unity(17:47 )
This guide walks through downloading Unity Hub and Unity 2020.2.7, enabling iOS build support, installing necessary packages like AR Foundation and ARKit, building and adjusting settings for iOS deployment, and deploying the app to an iPad or iPhone after configuring Xcode and ensuring the device trusts the developer.
```
Then go ahead and do all of the previous steps that we did before
Download the Unity Hub
download Unity 2020 point 2．7
And when you do that
remember to tick the box for iOS build support
Also remember when installing packages
you'll need the same ones as before AR Foundation and XR Plugin Management
but also the AR kit package
Then in Unity
go ahead and build the app just like I showed you before
Once you've created yo​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ur app
we want to adjust the build settings to deploy not to an Android
but to an iOS device
To do this
click on File
then Build Settings
and this time choose the iOS tab
From the left hand side
click Add
open Scenes and then switch platform
Now head over to Player settings
Click Player on the left hand side
Scroll down until you find requires AR kit support and tick that and make sure that target minimum iOS version is set to 11．0
Nextclick on XR Plugin Management on the left
click the iOS tab and make sure Initialize XR on Startup and AR kit are ticked
Now back in the Build Settings menu
click Build and Run
Choose a location to save your app to
This has to be a completely empty folder
click Choose and wait for the build to complete
When it's done
it should open up in Xcode
if it doesn't automatically open
just use the finder to browse to the folder you created and double click the dot Xcode prodg file to open it in Xcode
Now click on Unity slash iPhone in the top left
In order to build the app
we have to hook up our Apple ID to Xcode
To do this
click Xcode on the very top toolbar
then Preferences accounts
oh the Accounts tab here
if you don't see your Apple ID in here
you can use the plus sign to add it to your account
If you don't have an Apple ID and you need some guidance about how to get one
or you need more information about installing Xcode or adding your Apple ID to Xcode
then browse to docs dot unity 3D dot com forward slash manual forward slash iPhone hyphen account setup dot HTML and then click on the relevant link there for more help
Nextclose out of this window
And then click on Unity hyphen iPhone again in the top left
Now click on the Signing and Capabilities tab and tick automatically manage signing and then enable automatic
Now click on the team drop down and choose your team or your name
Now optionally
if you want to click on the general tab and give the app any display name that you want as well as unique identifier
then ensure your ipad or iPhone is plugged into your Mac
Click here on any iOS device and set it to ipad
We're very nearly ready to deploy to our ipad or iPhone
but just like the Android users
we now need to change the device's settings so that it won't block our app
This is very easy on your ipad or iPhone
Just click on settings
device management
Apple development
and click Trust Developer and then Trust
Now our iOS device will trust the app and won't block it
Now just ensure that your iPhone or ipad is plugged into the Mac
Then next to Unity Dash iPhone
at the top of the Xcode window
select ipad or iPhone
whatever your device is
and then click the Play button and wait for the app to build
```
## 7. Creating Simple AR Apps with Unity: Spawning Models on Image Markers(21:39 )
This tutorial explains how to develop a basic augmented reality (AR) application using Unity that places virtual models on real-world image markers. It covers setting up AR sessions, adding tracked image managers to anchor content to markers, creating image libraries, and spawning prefabs on specific images. The guide highlights the versatility of AR for various applications such as art, education, and activism.
```
Whether you're using an iOS device or an Android phone
this is what your app will look like
It's the simplest possible AR app
The asset is floating in space because we haven't added any way to anchor it to the real world
It doesn't appear on an image marker or a horizontal surface
The starting position is actually determined by where the mobile phone or tablet is when the app launches
So let's jump back into Unity and add a system to make our characters spawn on an image marker instead
To do that
select AR session origin
click Add Component
and search for AR tracked image manager
This has three fields
The reference library is the library of images that will act as markers or anchors in the real world
Don't worry about this middle field just yet
Then Tracked Image Prefab is the virtual character or model that we want to spawn the image
So first
grab some images to use as anchors or markers in real life
and we'll drag and drop them from the file system straight into Unity
Now I want to add them to a library
To do this
rightclick in this window
then create XR Reference Image image library
Hit enter to keep the default name
With the library selected in this window
the inspector click Add Image
Drag in the image you want to use
I'll also tick specify size
and since one in Unity is 1 m I'll set these to 0．2 or 20 cm and tick Keep texture at runtime
Now I'll do the same for another image
It's best to use Jpegs
which have lowercase names
You can have up to 1000 images in your library
and an Android phone can track 20 at once
Now click on AR session origin and drag your reference library
which you've just created
into the slot here so the app knows which images to look for
We'll set maximum number of moving images to 4
And now we need to find which virtual content to spawn
If you remember
our original robot was 1 metre tall
but the robot in our scene is only 10 centimetres
So we want to keep those changes
To do that will save it as a separate robot
and to d​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o that
it's very easy
You just drag the robot from this window into the project window and click Prefab variant
Since it will appear on the image marker
we don't want another one floating in the air
so we'll delete this one from the hierarchy
Now just click on AR session origin and drag our new variant robot from here into the tracked image prefab field
and we're done
Now we have to click Build and run and put the app on the phone again
But since we've already done that once I'll skip forward
And you can see now that our robot doesn't float in the air
but instead spawns on the image marker that we've added to our library
Of course
you can extend this to act in any way you want
You could add interaction
You could make two different characters or models appear on two different image markers and make them high 5 when the images get close together
You could also have a video that appears on top of a photo
so the photo appears to move
If you're an artist
you could use this technique to create AR art where your own animation saved out as a video can appear on top of your painting or illustration
You could use it for education
activismor awareness
The possibilities are truly endless
```
## 8. Developing Intelligent AR Applications with Unity Mars(24:55 )
Unity Mars offers tools and workflows for creating interactive AR experiences, leveraging Al Foundation for cross-platform development and simulation views to test apps in virtual environments, reducing development time and cost. It enables developers to preview app behavior in large-scale environments using simulations, overcoming the challenge of testing in real-world locations with limited access. Resources for learning and community support are recommended for further exploration.
```
Now
that was a demo of how to create a very simple AR app
But for more complex ones
like having the character interact with the environment in an intelligent way
it sometimes takes a very long time to build up that kind of functionality
Alsoto test AR applications
you have to deploy them to your device and walk around a space that takes up a lot of time
And it means you have to be on location to test it
For example
how can you test an app that's meant to work in a big room or a stadium or a museum if you only have a small studio
For these more complex use cases
we have a special solution called Unity Mars
It has tools and workflows that make it very easy to develop intelligent AR applications
It's built on top of Al Foundation
which means you get all of Al Foundation's benefits
it's multi-platform
you can build it once and put it on any mobile device
but it also has extra tools which speed up the process to give you a quick peek into what Mars provides
One thing it has is the simulation view
This is a virtual world that let's you test your app without having to deploy it to your phone
These pictures are taken from the development of the Doctor Seuss ABC app by Sugar Creative
a UK digital content creation agency
and they used Mars to create that application
What you can see on the left is a simulated bedroom
This is one of many virtual environments that we provide in Mars
which let's you test your app right in the Unity Editor
On the right
you can see the app in the real world
the real world view is a faithful reproduction of the predicted behavior in the virtual testing environment
So that massively reduces the time it takes to produce and test Al apps
which saves you time and money
It also means if you're creating an app for a huge environment
maybe a museum
but you don't actually have access to the site and you only have a small studio
you can still test the app in a reproduction of that environment without having to be on location
So now you have an understanding of Unity's different AR solutions
specifically AR Foundation and Mars
how AR is already being used to change the world
and exactly how to use AR Foundation so you can create your first AR app
So what's next if you want to find out more about AR Foundation or Mars
you can visit the product pages
If you want to jump in and create more AR applications
I highly recommend the links shown on these slides
Unity Learn is a great resource with a huge amount of learning material available for free
And of course
there's a massive community out there
forums and loads of tutorials and videos
So whether you're an artist
an activist
an engineer
or anybody who wants to change the world
I would urge you to download Unity
jump in and start learning
Thank you so much for coming to the summit today
and in particular for coming to my talk
I really appreciate it
and I hope you found it helpful
I'll be doing a Q&A on the main stage at 1135 Estes BST
so if you have any questions
please do come join me there on the main stage and ask or add me on Twitter or LinkedIn if you have any comments
feedbackor you just want to learn more
Thank you so much for joining me today
Good luck and have fun creating
```

# 要点回顾
What are the major difficulties faced by developers in creating apps for mobile devices?
Developers faced the challenge of having to create apps specifically for individual mobile devices due to varying capabilities and device-specific software development kits (SDKs).
How does AR Foundation address these issues with app development?
AR Foundation addresses the issue by providing a layer between the Unity Editor and device-specific SDKs like ARCore and ARKit. With AR Foundation, developers can create once and deploy their apps across various mobile devices without needing to redevelop for each device.
Which additional features available in ARKit and ARCore are also available in ARFoundation?
AR Foundation includes features like people occlusion, body tracking, collaborative sessions, and more that were previously exclusive to ARKit and ARCore.
What are some practical applications demonstrated by AR Foundation?
Practical applications of AR Foundation include face tracking, spawning virtual objects on a flat surface (like furniture), and generating animated characters onto image markers.
Where can developers access documentation and tutorials for using AR Foundation?
Developers can access detailed tutorials on Unity Learn, a learning platform provided by Unity.
What is the process for someone who wants to start creating their own AR application?
To begin creating an AR app, one must download and install Unity Hub and Unity Editor, set up build modules (Android build support and iOS build support), download AR Foundation and related plugins, create an AR session, import assets, and set scaling properties. Finally, test the app on a mobile device.
What must be done to stop the app from being blocked?
To prevent the app from being blocked, it is necessary to unlock developer options on the phone by tapping the build number about seven times.
How does the speaker explain deploying to an iPhone or iPad from a Mac?
To deploy an app to an iPhone or iPad from a Mac, the speaker recommends downloading Unity 2020 point 2.7 with the iOS build support option, installing the AR Foundation and XR Plugin Management packages, and ensuring the AR kit package is included. Then, in Unity, the user must build the app like previously shown, selecting the 'iOS' tab under 'Build Settings'.
What changes need to be made in Unity's Build Settings for an iOS deployment?
In Unity's Build Settings, the user needs to choose the 'iOS' tab, add the required scenes and platforms, configure the 'Player Settings' to require AR kit support and set the target minimum iOS version to 11.0. They also need to enable Initialize XR on Startup and AR kit in the XR Plugin Management settings. Finally, they build the app.
What are the critical steps to deploying an app to an iOS device?
The critical steps include adjusting the build settings to target an iOS device, setting the signing credentials, ensuring the device settings are properly configured, and finally, selecting the correct device to deploy to within Xcode.
What steps are involved in getting started with deploying an app to an iPhone or iPad using Xcode?
To start deploying an app to an iPhone or iPad using Xcode, one needs to hook up their Apple ID to Xcode. They can add their Apple ID to the accounts tab in Xcode preferences, navigate to Unity/iPhone, click on Unity-Iphone, connect the Apple ID, enable automatic signing, choose the team, and make sure the device is plugged in. Additionally, if necessary, they can provide the app display name and unique identifier.
What are the various possibilities for using augmented reality?
The various possibilities for using augmented reality include adding interaction between characters or models, making a video appear on top of a photo to create a sense of movement, and integrating animations as part of AR art on paintings or illustrations. It can also be utilized for education, activism, and awareness.
Why can developing and testing complex AR applications be challenging?
Developing and testing complex AR applications can be challenging because the functionality often requires extensive time to build up and testing involves deploying the app to a device, which can be time-consuming and require physical location, especially for testing in large spaces.
What does Unity Mars offer to improve the development and testing of AR applications?
Unity Mars offers tools and workflows that simplify the development of intelligent AR applications, leveraging AI Foundation for benefits like platform compatibility and ease of deployment. Mars includes a simulation view that allows developers to test their app without deploying it to a physical device. Additionally, Mars features virtual environments that enable testing within the Unity Editor, saving time and resources while ensuring accuracy in predicting app behavior.
How can Unity Mars benefit creators developing apps for large-scale environments?
Unity Mars benefits creators by allowing them to simulate large-scale environments within the Unity Editor, enabling testing of apps intended for large rooms, stadiums, or museums without requiring access to the actual site or being physically present.





---

-
