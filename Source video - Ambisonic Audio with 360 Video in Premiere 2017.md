Author : Jason LaVine  

![|200](https://i.ytimg.com/vi/MqBDQLV7xZI/hqdefault.jpg)
(Source:  [youtube.com: Ambisonic Audio with 360 Video in Premiere Pro CC 2017](https://youtu.be/MqBDQLV7xZI?t=1156))


how's everyone doing today thank you so much for joining me my name is Jason LaVine for this brief tutorial for this Wednesday and good morning good afternoon good evening wherever you are in the world going to be talking about ambisonic audio and working with 360 video and how you publish that to YouTube specifically uh in Premier Pro CC 2017 all right so here we are in Premiere Pro and uh again we're working with some 360 content where my colleague Dave Hemley also uh captured some ambisonic audio I've got my uh toggle on

[00:32](https://www.youtube.com/watch?v=undefined&t=32s)

for the VR video display so this is nothing new just showing you that we've got this 360 video content and along with that we also have this new four Channel wave here and you can see it's named amb x3. wve um possibly recorded right out of an h2n I'm not exactly sure so how do we set up the project first and foremost to make sure that we're doing everything correctly and what exactly do we need when we're publishing to YouTube so I'm going to pull up little just quick graphic here just

[01:02](https://www.youtube.com/watch?v=undefined&t=62s)

before we get into what happens inside a Premiere because these are kind of the specifics of the audio types that you want now like a lot of the things we uh we see just like in VR where there's lots of different sort of flavors and ways that you can deliver stitched and unstitched uh 360 content Premier Pro wants of course equi rectangular frames ambis Sonic audio is is no different it's actually been around since the 70s never really had a lot of popularity until recently um but there are a couple

[01:32](https://www.youtube.com/watch?v=undefined&t=92s)

of specific things that YouTube wants that of course Premiere Pro will support when you're uploading your content directly so what we're dealing with here our first order ambisonic audio Channel layout you're going to hear this or the acronym foa quite a bit if you do any research on uh on ambisonics ACN Channel ordering that stands for ambisonic channel number channel ordering sn3d normalization which stands for the Schmid semi normalization method and you'll see here that it's got all this

[02:00](https://www.youtube.com/watch?v=undefined&t=120s)

kind of Channel mapping where channel one is zero channel two is one channel three is two and channel four is three most of this isn't going to mean a heck of a lot to you what is going to mean a heck of a lot to you is this little bit right here about use the metadata tool to insert spatial audio metadata well the cool thing is that if you're working with Premiere Pro if you're working with these proper four channel uh ambisonic audio files you don't have to do that we've already done that work for you so

[02:26](https://www.youtube.com/watch?v=undefined&t=146s)

just like when you were publishing your 360 or VR video content in the previous release Premiere Pro automatically tags and flags for vr360 video content and ambisonic spatial audio content so when it gets up to YouTube it already knows what to do this is awesome again you can find all these specs on YouTube this is where I I extracted this uh this graphic here they have their own metadata tool to do that we already do that for you automatically and then there's just a couple other things here which are kind

[02:57](https://www.youtube.com/watch?v=undefined&t=177s)

of less less important but you'll see this when we get into the export your MP4 files require AAC encoding with the 4.0 meaning the four Channel layout and I'll show you where that is inside a media encoder and movie files require either AAC or PCM and that actually speaks a lot to the actual formats so again you're going to see a couple different ones out there um trying to remember now the oh yeah so the original was uh am which was based off of the uh the wave wave format extensible basically linear PCM format uh the newer

[03:30](https://www.youtube.com/watch?v=undefined&t=210s)

one and the one that actually um YouTube and Google have standardized upon which is essential for today's presentation because we're talking about publishing to YouTube is ambx and again that H uh that h2n is going to create ambx content if you uh if we look back here into Premiere you can actually see that this is a wave file but again uh encoded into that ambx format so couple different flavors out there this is just some good stuff to know uh when you're publishing directly YouTube and again that ambx

[04:01](https://www.youtube.com/watch?v=undefined&t=241s)

format is what YouTube wants and we support that so that's what we're going to focus on today okay so when you're in Premiere Pro uh and you're building up a sequence now as with all media you can always take your 360 content and if I just pull some of this up here I think I've got these in uh easy to find folders here we go so I could always just take my video content which in this case this is uh 360 and you can see shot 2880 by 2880 and I can right click or control-click and choose new sequence from clip to build me a

[04:35](https://www.youtube.com/watch?v=undefined&t=275s)

sequence in the proper frame size frame rate aspect ratio basically having all the all the information that we need um for that video content however what I want to show you here is under the new item icon let me zoom in so you can see that there at the bottom of our project panel we go to new sequence let me Zoom back out you're going to notice that in the menu item here under VR we have a bunch of new presets presets are always a great way to kind of get you started because again the VR world is really

[05:09](https://www.youtube.com/watch?v=undefined&t=309s)

it's in its infancy it's just beginning so this is a good way to ensure that not only if you're working with a particular frame size monoscopic or stereoscopic but specifically now you've got this 4 channel ambisonic spatial audio that you want to be able to preserve with your VR uh or 360 video content we've got presets specifically that are going to form to those formats so if I were to twirl down say monoscopic here and go into the monoscopic settings you can see that we offer a couple of different presets now of

[05:42](https://www.youtube.com/watch?v=undefined&t=342s)

course you can make your own uh in fact it I'd say it's missing oh no it does have it I was going to say uh it it doesn't have my um gear 360 but in fact it does anyone shooting with the Samsung Gear 360 um which is touted is sort of 4K technically though it's not when I think Ultra HD 4K many of us think 3840 by 2160 what you actually see oh whoops sorry zoomed out there what you actually see is that it's 3840 by 1920 we got you covered you we've already got the presets for you so again ambisonics so

[06:15](https://www.youtube.com/watch?v=undefined&t=375s)

we're going to choose something with ambisonics and in fact the content that we've got there that's stereoscopic you saw it was 2880 by 2880 ambisonic so here's where now we start to get into some of the importance of reading the dialogue boxes because if you're going to build uh a sequence and you want to use ambisonic audio there's one little preference that you need to change manually to make sure that it publishes and actually previews uh in in your sequence properly so you can see when

[06:43](https://www.youtube.com/watch?v=undefined&t=403s)

you choose editing rectangular VR 2880 and again your frame size can be different within premere Pro's audio preferences ensure that multi-channel monom media default audio track option is set to Adaptive okay this will assure Sonic audio media is properly managed as adaptive multi Channel very very key to this process if you do not do this it is not going to work properly so how do we ensure that that happens okay well let's go up to our preferences here on the Mac Premiere Pro preferences audio on the PC

[07:16](https://www.youtube.com/watch?v=undefined&t=436s)

edit preferences audio and inside your audio preferences under default audio tracks Again by default multi Channel monom media will show use file ah you don't want that for ambisonics you have to set that manually to Adaptive once you do that you're good to go it's that simple okay and similarly uh if you need to create um tracks in a in an existing timeline just make sure you're making an Adaptive track and then you can bring your ambisonic or ambx audio files in there okay so now that we've set that and

[07:53](https://www.youtube.com/watch?v=undefined&t=473s)

again I've already made my sequence here so we can see that down below what I'm now going to do do is uh talk to you a little bit about what happens when you bring this audio in how do you preview this audio well despite what you may think when you look at the audio here and again you can even see that there was some audio that was captured on the 360 camera and I actually synchronized um via our just audio automatic auto sync I synchronized the camera audio with the uh multi Channel ambisonic audio ultimately though um

[08:30](https://www.youtube.com/watch?v=undefined&t=510s)

you're only passing through one audio CH one audio file here one audio track of ambisonics YouTube currently only supports one audio track of four Channel ambisonic audio I say four because again based on that uh that ACN Channel ordering spec that YouTube wants there are others there's four there's I think there's nine there's 12 a whole bunch of different things these will emerge I'm sure eventually we're dealing what we're dealing with now today is four and frankly that's all you really need um to

[09:01](https://www.youtube.com/watch?v=undefined&t=541s)

get that kind of spatial experience that you want so once you have this in your timeline and you play this back and I'm I'm I mean I can play it for you it's not like there's a heck of a lot of sound going on here um you're going to want to use headphones and here's why well there's a couple of reasons first of all if you just play this back and start moving around now what you'd expect to happen is is that the way that um ambisonic audio is is encoded when it goes to YouTube or wherever is that it's

[09:31](https://www.youtube.com/watch?v=undefined&t=571s)

basically simulating what we formerly knew as a kind of binaural audio experience binaural audio something developed actually uh at the end of the 19th century if you can believe that kind of not really refined until the late 50s early 60s not used on an actual recorded album official Rock album until the 70s Lou Reed I believe had the first binaurally recorded album how that was done was with a specific um like a mannequin head an actual mannequin head something you'd see in a department store and uh they had two very

[10:03](https://www.youtube.com/watch?v=undefined&t=603s)

high-intensity condenser microphones in the ear canals of the manin head and the concept behind binaural audio was that within all you needed by the way was a pair of headphones this doesn't work on speakers you need headphones that it's going to capture sound the way that the human head the human brain hears it and interprets it and what that will ultimately do based on how it's encoded is that it go it creates this sense of not just left right front and back but top and bottom all with two channels

[10:34](https://www.youtube.com/watch?v=undefined&t=634s)

okay so why am I telling you all this because when you want to preview what this ambisonic audio sounds like we have a specific effect that you're going to very quickly apply to the master channel here the master fader inside of our audio track mixer for preview only you will disable this are you listening you will disable this take it out of the mixer when you actually publish to YouTube leave it in there your your audio is going to be hosted so it's for preview only why I'm saying that again also is that if you're playing back and

[11:07](https://www.youtube.com/watch?v=undefined&t=667s)

just kind of moving through this the audio is not going to follow the video here okay hopefully we see this at a later date somehow um so what you're really doing is you're basically previewing to make sure a that things are in sync and to make sure that the front back Left Right perspective or sort of tilt up down perspectives are correct and not flipped okay based on however this was captured however it was recorded so here we are inside of the audio track mixer now again to really preview this you're going to need a pair

[11:39](https://www.youtube.com/watch?v=undefined&t=699s)

of headphones to hear what's actually happening so if we go into the audio track mixer here under special you will see that there is a new preset called the binaural lier for ambisonics and that's why I was just explaining to you about binaural audio this is going to simulate what you will actually hear uh once this gets published to YouTube so if you turn on the binaural lier and you play this back now here's something else that you might want to do again to kind of test to make sure that like the positioning is correct that you

[12:13](https://www.youtube.com/watch?v=undefined&t=733s)

don't have to flip or move things around if you go to the wrench menu inside of the program monitor here I'm actually going to turn on my VR controls now I normally don't do that because of course it shrinks The View and it just doesn't look as pretty but what's key is that it actually gives you coordinates so this way if there's something that's a bit off with that ambisonic audio file this is going to tell you so here's kind of the workflow that we've sort of implemented here to

[12:42](https://www.youtube.com/watch?v=undefined&t=762s)

give you an idea of what this is going to sound like okay so we turn on the binaural lier and I play back the audio here and I'm going to turn this on now if you're in headphones while I'm doing this now you're actually going to get to hear this and as I start notice there's a Panner in here so as I start to pan this around let's say I go 180° can you kind of hear what's happening in there this also might make some of you a little little little pukey potentially binaural has that effect but

[13:23](https://www.youtube.com/watch?v=undefined&t=803s)

we're not dealing with left and right so much as we are again that that complete spherical around your head experience so if I wanted to ensure that you know when this was at 180° that it was the right audio meaning that the that the uh the Golden Gate Bridge and the sound of the of the ocean here should sort of be off to the off to my uh uh uh left rear left when I listen to it now see if we can get I don't think there's any waves again this is kind of what we're testing for and I can just kind of

[14:01](https://www.youtube.com/watch?v=undefined&t=841s)

assume that the alignment is actually fairly correct here oh yeah you can kind of hear it it kind of sounds like it's kind of off to the side there okay pretty cool all right so again this is solely to preview positioning now if you actually needed to make an adjustment here because again this binaural lier effect is solely for preview purposes only if we go up to our actual effects let me go ahead and pull the panel up here and let's type in um Ambi Sonics you'll see that we have a new Panner audio

[14:37](https://www.youtube.com/watch?v=undefined&t=877s)

effect as well you can do this at the clip level I suppose you could also put it on the track level I recommend the clip level just to kind of keep it clean and easy and if we go into effects controls now what you can actually see is that you've got key framable not that you'll be key framing it necessarily but the ability to adjust pan again so it's it's it's not left right because you're we're working in in degrees right we're working in a sphere but it's that spherical pan spherical tilt spherical

[15:12](https://www.youtube.com/watch?v=undefined&t=912s)

roll okay and this is how you could effectively make an adjustment if somehow and really the most common thing would be that you're kind of 180° flipped right which is not impossible to do particularly if you have uh one of those um one of those sort of multic capsule microphones that's doing it all at once okay so with the binaural lier still enabled because again you need that on to be able to hear what it is that you're modifying let's put this back to zero okay and then we could go into effects controls and now that we have

[15:49](https://www.youtube.com/watch?v=undefined&t=949s)

the ambisonic Panner on the audio file here if I were to play this back again and make adjustments to this twirl this down here okay if you're in headphones again you're kind of hearing what I'm doing and you can see it's not a discret left right type pan or the Tilt oops let's twirl this down can you actually feel it going it's going like this okay so this is how you can make Corrections you're probably generally never really going to need to do that per se but if it's your first

[16:39](https://www.youtube.com/watch?v=undefined&t=999s)

time you might and you might anyway so Panner for ambisonics keeping the binaural lier enabled all right now the next week or two I'm hoping to get the Sennheiser uh multic capsule ambisonic 4 channel microphone and then I'll be able to give you the the real details on capture you know conforming the four mono streams um into an encoded ambx format and kind of all the ins and outs of doing that so there there will be a part two that's specific on kind of the authoring side and everything else so

[17:16](https://www.youtube.com/watch?v=undefined&t=1036s)

now that we have this now we want to talk about let's get out of here and Export this to YouTube render this out to YouTube so as I told you most important when you're working with ambisonic audio make sure you either disable this I just recommend taking it off no reason to even leave it on there just get it out of there all right with our timeline selected we're going to go up to file export media here we are inside of media encoder from within Premiere and as you saw again based on the YouTube spec here

[17:46](https://www.youtube.com/watch?v=undefined&t=1066s)

they want either QuickTime movies or MP4 well the cool thing is uh again we've got you covered there so again based on you know if you're using the more standard um HD so think like capture devices like Rico uh Theta that's doing a standard 1920 1080 uh full HD you could use the YouTube preset for that if you wanted you'll also notice though that again we've got new VR presets that you can also use here specific to um whether or not they have stereo or ambisonic audio so if I wanted to choose

[18:23](https://www.youtube.com/watch?v=undefined&t=1103s)

something like this okay or over under 2880 ambisonics I can choose that I would probably recommend in the short term for your initial tests use the YouTube presets I'm just pointing out that again this conforms to all the different flavors and formats that we have now let me just go to something like go to something like that actually no I'll I'll keep it with this one here that's exactly what I'm going all right so in talking about metadata right and remember YouTube said you can use their

[18:53](https://www.youtube.com/watch?v=undefined&t=1133s)

metadata Editor to make sure that this is properly displayed here's what we're already doing so by default it automatically detects this was something that we added in last year's last release of Premiere update to Premiere um Auto aware so it knows that the video is VR it knows the frame layout it can work with it automatically all the metadata flags are in there so when it goes up to YouTube it knows it's VR now give it time to process when it uploads immediately usually you don't see if you

[19:22](https://www.youtube.com/watch?v=undefined&t=1162s)

don't see that like Crosshair you know four arrow thing in the upper left hand corner of your video doesn't mean it didn't work just make sure that you give it some time to process similarly if you go to the audio tab here right and scroll down again when remember YouTube wants AAC four channels now again if you're using the standard YouTube presets they don't have this automatically selected that's okay just change it from stereo to 4.

[19:54](https://www.youtube.com/watch?v=undefined&t=1194s)

0 also they're looking for specifically a bit rate of 512 kilobits you can see it even goes a bit higher this is what YouTube wants though okay this is what they want this is why you're seeing that there and just like with VR video 360 video Auto aware we are also Auto aware that the audio is ambisonic okay so with that checked and again it automatically detected that now if it doesn't for some reason you know where to go now audio tab AAC 48k channels 4 bit rate 512 check audio zambi Sonics and you're good to go and Q or export and then it's going to upload

[20:32](https://www.youtube.com/watch?v=undefined&t=1232s)

you know you oh by the way of course you can publish it directly so if I were you know I'm already logged in here I could in from within the publish tab I could choose YouTube you can see I'm already logged into my account set your tags description privacy level and it will upload automatically now with ambisonic audio specifically you know again the processing of of 360 VR video takes a little bit longer on YouTube before it's displayed in 360 if you've got 360 video with ambisonic audio takes even longer

[21:01](https://www.youtube.com/watch?v=undefined&t=1261s)

for the ambisonic audio to kick in so give it some time all right so you click Q or click export to make it happen automatically and use all the resources in your system and when you get over to YouTube and you play this back bada boom you're going to have your 360 video with ambisonic audio all right so my friends that is pretty much it that's it it's a pretty simple process really we'll see you again next time thank you so much for joining me have a good one



---



