# 原文

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/14fd493c3bbf4a8fa519e5a07bf1a1fb/82a41d1bcc1344b58a01df2475e2b158.png)

So let's learn about prefabs. So in short, a prefab is just a way to take an object, apply some changes to it, like a material or in a script, and then save it so that you can reuse it later in your scene. So I'll show you how to do that. So I've just got this weird shape that I made in Blender. If you want to follow along, you can use whatever you'd like. Cube will do just fine. Let's add a material to it like that and not too exciting at the moment. So let's add this little script that I made just called Rotator, and we'll say we'll turn it on the X axis at 20 speed. So there you go. 

Now let's say we want to use this across our scene 100 times. Better yet, we want to use it across multiple scenes. So what we could do is we could simply just duplicate it like that, and that'll work. But now what if you wanted to all of a sudden change the speed of all of them all 100 across your scene and on other scenes? So it would be tedious to come in here, change this speed, go to this one, change this speed, and do it with all of them. So that's where prepas come in. So let's just delete those. 

And now that we've got our object here, let's call it shape. I'm going to create a new folder, reverbs that didn't work. Again, prefabs. And let's just take our shape and drag it into prefabs. Now that has now created a prefab for us to use. 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7e2970824f5e4943b2ae31ea3b8d3e20/fa01e918ced444b799cf9b8118cf7219.png)

As you can see all the settings here, so use this prefab, we can simply drag it and pull it onto the scene, and as you can see, it's got all the components from the original and you can also grab the prefab that's already in the scene and you can simply duplicate it and that will keep the Prefab link that is that is there. 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/6340914fbd744ff79e1e5fd8388921fb/def96ce908d842f082383707345de7e6.png)

Now that we've got all of our prefabs here and say we've got 100 throughout our scene, you can simply edit in a few ways, you can click on this on any of the prefabs in the scene. You can come down and let's say that this is too fast. So let's go back to 20. This now, as you'll see, is still only effective on this one, and that's because on Prefabs, you'll get this little menu up here, the prefab menu opens, select and overrides, and if you click overrides, you'll see that I've made a change to this script here. So if I just apply all, that will apply the changes to the prefab. So if I press play, you can see that it's taken effect across the board. 

Another way to change prefabs is you can actually double click to enter prefab mode, another way to enter prefab mode is to just click it on in the scene and click this button here, open, and that will actually open it with the scene view present and you can make it normal gray or hide everything else in the scene. So now that we're in prefab mode, there's no need to use this override menu. As you can see, it's hidden any changes, while in prefab mode will immediately be saved. So let's make this shape also rotate on the Z axis and leave preferred mode by just pressing this little button over here. So, and now they, they've all taken effect. 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/409ce3d182574f77a3e02d32b6c61f4d/ce505bffa0a54ba0a5a65930eac6deca.png)

One other thing, no in prefab mode is up here is a little menu for prefabs. So as you can see I've got auto save here. You turn this off if maybe you're doing something a little bit delicate and you don't want to auto save and go over your previous changes, turn off autosave, and you can change this, but then you'll have to manually press the save button. So I'll just leave autosave on. I'll change it back to 20, and there we go. So now the question is, what if we would like to have a base prefab, but then we would like to have other objects based off the base prefab with minor changes. So I'll show you how to do that. So I'm just going to delete those ones. 

From prefab here, right click Create Prefab variant. So that will create a brand new prefab and it be it will be based off this prefab, so it will still have the link to the original prefab and I'll show you what I mean. So let's pull this shape variant out to the scene and let's give it a new texture, a new material. Okay, and then let's also change this to this and let's spin it by 40. So I will now, when I override these changes, it will actually be overriding it to the shape variant and it won't override the shape. It's also good to note that now that we have overridden some settings here and also the material, because we are overriding it on the shape variant, that means that when we change those specific details on the original shape on the original prefab, it won't take effect on this new prefab because we have overwriting those settings. So there you go, let's do it again. 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f2f8756d70524e89ac9eb166f7e47cb3/763b9575c91a4c32b7f6a6b06d2b3907.png)

Now to create another shape variant, you can do the exact same thing or you can just duplicate another one and that will work just fine. So this is a copy of the original variant. So let's give it a new slime texture there. Let's say we only want to spin this on the Z, and we'll spin it by 25. So I'll just do that one more time, we'll get out one more of them, oops. I'll duplicate the shape variant, make another one, give it another material, maybe spin this by 75 on all axis. Okay, and we'll override this on this one. And we'll override the settings here that I changed on this one. So now we've got 4, 1 prefab and three variants. 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/25c1c2e8d159464aad0cb858acf6b94f/1358b1bf2a7749688bc5ac36d5c018d1.png)

So here's where it gets interesting. So we can go to say the original prefab here. Let's open it up. And because these are all based off it, if we make any other changes to this, to this base, these will also be affected. 

 ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/ef9a6ca6e22c49cdbdda7c9ce3b1de71/72fa5f4b8f68426999a053a2f378444c.png)

Let's do something weird here. Let's create a little, create a cube, pull it off to the side a bit smaller, and as you can see, it's already taking effect to all the other prefabs there. There, that let's start to look pretty crazy. And you can go to these variants. 

Let's say, let's go to variant 2. And we can actually override the base settings. So we could turn this off, and then we could possibly even add a sphere, oops, a sphere. Do some really cool things. But all three of those are linked to this one, but can override base stats. And changing things on the base will also affect the child, the child variance, as long as the child variants have no overrides of the base stats. That's just about all I have to say about prefabs and prefab variants. I hope you learned something. If you did, give it a like, subscribe, and I'll see you next time.


