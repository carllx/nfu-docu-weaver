# Unity - Anything World

Set up your Unity Project

Requirements:

- Unity 2021.3 - 2022.2
    
- Anything World Account Details
    
- Anything World SDK
    

Please note: This package is not compatible out of the box with the previous (Classic) versions of Anything World. Contact us on Discord or email if you have a project that needs migrating.

Anything World's Unity SDK is supported on Unity versions [](https://unity3d.com/unity/qa/lts-releases?version=2019.4)**2021.3 - 2022.2 LTS with URP.**

The Anything World versions up to **1.1.0.2** work on **2020.3 - 2022.2 LTS**. To use newer versions please upgrade Unity.

If you're completely new to Unity it might be a good idea to learn a bit about the Unity interface. The first 6 videos in the [Unity essentials series](https://learn.unity.com/tutorial/using-the-unity-interface) are a great way to pick up the basics.

Once you've got the basics down, follow this guide and see how to get started with creating 3D content in Unity!

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-GjjXmdDT5TQrtIhMvb0K-create-your-anything-world-account)

Create your Anything World Account

[**Create an account through the Anything World website**](https://app.anything.world/) **to get access to the Anything World SDK for Unity.**

**Our REST API requires a unique developer API key for authentication in order to allow make APIs calls.**

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-GjjXmdDT5TQrtIhMvb0K-set-up-the-anything-world-sdk)

**Set up the Anything World SDK**

**Step 1:** Download the latest Unity Anything World SDK from the [My Account page](https://app.anything.world/profile) on the Anything World website.

**Step 2:** Open the project with version Unity 2020, 2021, or 2022. Open Window dropdown then Package Manager and change the Package dropdown option to “Unity Registry.”

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FHn32sAjrJNDnBkuoFKJn%252Fimage.png%3Falt%3Dmedia%26token%3Dd9782d1e-1840-4961-a1d1-bc193b7c0315&width=768&dpr=4&quality=100&sign=732e37ec&sv=2)

Select the Windows dropdown in the top navigation bar, then select Package Manager.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F0Y9HUN66mAm9qgM3m99n%252Fimage.png%3Falt%3Dmedia%26token%3D186b3a7f-38b7-4f3f-bc9a-b7f8d488ff81&width=768&dpr=4&quality=100&sign=5a6e4a2a&sv=2)

Select the Packages button then select the Unity Registry option.

**Step 3: Install the** [**Editor Coroutines**](https://docs.unity3d.com/Packages/com.unity.editorcoroutines@0.0/api/Unity.EditorCoroutines.Editor.EditorCoroutineUtility.html)**,** [**Universal RP**](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@11.0/manual/index.html), [**NewtonSoft Json**](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.2/manual/index.html) **and** [**AI Navigation**](https://docs.unity3d.com/Packages/com.unity.ai.navigation@1.0/manual/) **Packages.**

**Editor Coroutines:**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh4.googleusercontent.com%2FAnyZOWOYZZ_dUn3vUERXGTb8LovHtZDPpz-FhzLFNbVo37M2N0TWaW2Va-IL6ONs2gMnUZPhQ9Ksg837pDp2ZHSMvyUgrpTw4R6F4KCSQ6gk9MENuyHIbxQnk6-uBzJ4Knh1GbjVzgwvtgYqrc7L8KEFNZcy_pXMy_qTB_yrk83C1m3bkrWM1Aw5_5rCeQ&width=768&dpr=4&quality=100&sign=f29e354&sv=2)

Editor Coroutines can be found in the Unity Registry of the Package Manager.

**Newtonsoft Json:**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh5.googleusercontent.com%2F01zB_bJ8ACebkeGyEqMOgOJ8OJDeqaek8bAdQzXQtv8SPcfe21Vg1h5cW_AHybnWJwyqGsk4qcW0OFrZPe4gSS8hQfWegeauTzwd6hiYRf0U9x4XcAtTUcbFAX9uOQgWiC_t4BOqFsdJb8SXX_fgIkK1G0-RNwYkGsOSgy1gvcH4M3vZ6Ce3loUfSRKUpA&width=768&dpr=4&quality=100&sign=6684c7f4&sv=2)

The Newtonsoft Json package may fail to appear in the Unity Registry Package Manager. If this is the case select the "+" icon in the top right corner of the package manage and select the "Add package from git URL" option. Enter **com.unity.nuget.newtonsoft-json** in the search bar then select the add button.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FTJqKmCKjOZH9MvCTBiwm%252Fimage.png%3Falt%3Dmedia%26token%3D4dbaa90e-e0d9-4652-8ec4-0ea882cfa8cc&width=768&dpr=4&quality=100&sign=4e15c237&sv=2)

**Select the plus button in the top right corner of the package manager panel.**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FoJJu6Y8pmGb5PtruxhuS%252Fimage.png%3Falt%3Dmedia%26token%3D34591771-71bc-4d37-8f19-0e05d51e8baf&width=768&dpr=4&quality=100&sign=15962843&sv=2)

Input com.unity.nuget.newtonsoft-json in the git URL to receive the Newtonsoft Json nuget package.

**Universal RP:**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh3.googleusercontent.com%2F09o_mjcTbq5nOSBds02wlU4OufnmBSJroQBk3JlAJDxt3fOIeXxKKXaH9IVK0sL2iQp97QeEghVQbjx1bvUGpR8R1njeBDnqrq8dx02we7Of5dx33M4VtnngiPdkgfacqcSNku1pMY_qFbCLAx-Fi1M81_fbci7MI0v6SlkVt6THBmxIXc1H8fSQaL6yHw&width=768&dpr=4&quality=100&sign=f0a02aa&sv=2)

Universal RP can be found in the Unity Registry of the Package Manager.

**AI Navigation:**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FQa0796HCC8Vz08Q0bJR6%252Fimage.png%3Falt%3Dmedia%26token%3D16945f74-c1ae-442e-b047-1786f604669b&width=768&dpr=4&quality=100&sign=1d07de3c&sv=2)

For some Unity versions the AI Navigation package may fail to appear in the Unity Registry Package Manager. If this is the case select the "+" icon in the top right corner of the package manage and select the "Add package from git URL" option. Enter **com.unity.ai.navigation** in the search bar then select the add button.

**Step 4:** Import the AnythingWorld.unitypackage file into the project.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FAHzN4tPGNVAZJCTPzX4q%252Fimage.png%3Falt%3Dmedia%26token%3D71cba4c0-9770-46b1-b548-8ab10e93a879&width=768&dpr=4&quality=100&sign=ef857567&sv=2)

**Step 5:** The Anything World Unity package contains a pre-built Universal Render Pipeline Asset. Select the Edit button from the Unity top navigation bar then select Project Settings and navigate to the Graphics section. Add the URP Asset to the Scriptable Render Pipeline Settings.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FmPHxSMO4Gzv2BIxCbNZ6%252Fimage.png%3Falt%3Dmedia%26token%3D9750d32d-62fc-4ed0-9a6b-101e49ddaf9e&width=768&dpr=4&quality=100&sign=bd27fdd2&sv=2)

Select the Edit dropdown menu and select the Project Settings option.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FZggnWLOEQffpChtsJDEw%252FURP%2520Setup.png%3Falt%3Dmedia%26token%3Dcee7b430-d250-497e-b682-b5b48a562625&width=768&dpr=4&quality=100&sign=fc18112b&sv=2)

Navigate to Graphic settings, select the circle button within the Scriptable Render Pipeline Settings, then select the existing Universal Render Pipeline Asset available.

For the best experience it is recommended to add the following shaders provided by the Anything World SDK to the 'Always Included Shaders' section within the Graphic settings

- Standard (Metallic)
    
- Standard (Specular)
    
- Standard Transparent (Metallic)
    
- Standard Transparent (Specular)
    

If there are not enough elements available then please increase the Size parameter to include the listed shaders. It is not recommended to change the existing shaders unless you have experience with this.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FESoP8SOv3S2UNyepU4ek%252Fimage.png%3Falt%3Dmedia%26token%3Dfa87c11d-52b3-4cc3-a2c5-507b367ec6fe&width=768&dpr=4&quality=100&sign=9d70ab4f&sv=2)

Change the number in the Size parameter to increase the amount of elements.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F9mtHjmUnAZFIikwMzxlv%252Fimage.png%3Falt%3Dmedia%26token%3Df2849892-1b63-4132-b3bb-14d2f8f86ae4&width=768&dpr=4&quality=100&sign=dbd17b24&sv=2)

The Shaders can be found by selecting the button on the right side of the element list and searching for 'Standard'

These shaders can be found within the Project panel by navigating to AnythingModels > GltfPipeline > GLTFUtility > GltfLoader > Materials > URP.

**Step 7:** Select the Anything World dropdown menu and open the Anything Browser. Log in using your Anything World account with your email and password. Two new panels will appear after signing in, the Anything Browser and the My World panels.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh6.googleusercontent.com%2F54E_oLkMg6S3iiGDQ-VF_gyBy9wp6ANTYn0H2jyP6lYbcGxoamQ763OBIY561C67guiIV-L_L9xVmc58gjmD1GU0ognK-xhBPkijklrofIG7aWRFAmm5cGqss-drfUCNXWDFitJm5XmPRTTKoM4kZgn-ATGioeRzP7LRqL38uVsfgdhgXv36ukk5Z2K-gA&width=768&dpr=4&quality=100&sign=8d3951d0&sv=2)

The Anything World dropdown menu will appear in the toolbar at the top after importing the AnythingWorld.unitypackage.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh6.googleusercontent.com%2FVYMIENys4-wVCiWmdMLqpyJFUIDzIfvygX6JB3nfVUzk3jvU9t_fQGvKANrBDOiRsV9jnN5g4EzGgXnFqJLcyCAVraBxW1Uv9U9zaNlbSXkvd7OFWTzPaYvbBYygMCla-zxw52a3T_TvbDiqnSNxtIgDHxm41TnbdA794cKSv0USzllcNFSyo8SeAlsUYA&width=768&dpr=4&quality=100&sign=f0bac913&sv=2)

The Login | Sign Up panel will appear when selecting the Anything Browser option from the Anything World drop down menu.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2Flh5.googleusercontent.com%2FY3txCwiM27h1YJjTsxl_bkok3SSb-Rr1t2VITbVAAYxzD3hwHQPY22eO1u1lJtJNpSmp8hHucFtXqdSj6oBIbS_-0RIqfJcvMNmGpIOSn_EX6vXV_VvNNVovsMjkqwp6r5hEiz80oChOinoYTa2rMcFBpsS3p_uduV96v4qdqN1ZhcNtxdMIOEO5HobhtA&width=768&dpr=4&quality=100&sign=ad156df0&sv=2)

The Anything Browser and My World panels will display after successfully logging in.

# Anything Browser

Search and import models directly from the Anything World Browser!

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-how-to-use-the-anything-browser)

How to use the Anything Browser

The Anything Browser allows you to find animated and still models. Search for a 3D model by typing the keyword in the search bar and press the enter key to find the results. The filter options gives you control over the types of models that are displayed in the search results.

You can also save these models for later by either selecting the My Likes or the My List icon on your favourite models.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Furxl9xburrJyEXkXPGeh%252Fimage.png%3Falt%3Dmedia%26token%3D02e1f7c6-9d45-46e3-a983-03a472aa3c10&width=768&dpr=4&quality=100&sign=986660d1&sv=2)

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-importing-models)

**Importing models:**

Models imported through the Anything World Unity package can be deserialized or serialized during the import process.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-deserialized-model-import)

Deserialized Model Import:

Models will display in the active Unity scene as a GameObject within the Hierarchy panel without saving all the associated files of the model to the project. This occurs by default when the Serialize Asset parameter in the Make Settings is disabled. Simply click any of the models that appear in Anything Browser search results or the models that have been saved in the My World panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Ff2Bcz7CBzIyEVK0XOA9D%252Fimage.png%3Falt%3Dmedia%26token%3D42c80108-9ed4-403f-8880-acb3d95633f4&width=768&dpr=4&quality=100&sign=68dbe9d6&sv=2)

The Serialize Asset option is disabled by default within the Make Settings.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F9Sq6qOhPIhJ0MV9QqVfg%252Fimage.png%3Falt%3Dmedia%26token%3Dd58793b8-cfa2-4145-a3bc-74ce76e21145&width=768&dpr=4&quality=100&sign=5a3530f0&sv=2)

Click the model thumbnail preview to add the model to your active scene.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-serialized-model-import)

Serialized Model Import:

Models are serialized automatically when the 'Serialize Asset' parameter is enabled within the Make Settings.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FHBSRcBlfoP1wpZFhE4wE%252Fimage.png%3Falt%3Dmedia%26token%3Ddd7090bf-413c-4be6-a663-03efe662421d&width=768&dpr=4&quality=100&sign=f93f74e4&sv=2)

Open the Make Settings, enable the Serialize Asset checkbox, and select apply to save the changes.

Once the Serialize Asset button is enabled, and the Make Setting changes have been saved, all models selected from the Anything Browser or the My World panels will automatically be saved to the project. The files associated with the model will appear in the newly created 'Saved Assets' folder and each model's files will be added within separate folders.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FYUPIvT40oRJIKxoYTsc7%252Fimage.png%3Falt%3Dmedia%26token%3D421dd04d-cfd2-4923-80bd-f9d01a4875f8&width=768&dpr=4&quality=100&sign=2009216c&sv=2)

Open the Project panel and navigate to Assets > SavedAssets to find all saved models.

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-model-info-details)

**Model Info Details:**

Selecting the 'i' icon within the model preview results will open the info panel which contains details such as:

- Name of the model
    
- Author of the model
    
- Category of the animation
    
- Poly-count type
    
- Licensing Information
    
- Category of the model
    
- Relevant Tags
    
- Relevant Habitats
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FEYGuLxoKVH34abCSrBgZ%252Fimage.png%3Falt%3Dmedia%26token%3Da44345c7-3fb3-48b4-bdec-701529f98763&width=768&dpr=4&quality=100&sign=50328591&sv=2)

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FXFTtp7c3Z8uLJYWNM7EF%252Fimage.png%3Falt%3Dmedia%26token%3D60a79740-5ccb-45fb-ae58-35753c76b813&width=768&dpr=4&quality=100&sign=338400f&sv=2)

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-model-info-buttons)

Model Info Buttons:

In addition to the relevant information for the model, there are several buttons in the model details panel.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-like-button)

Like button:

Selecting the heart icon will save the model to the 'My Likes' section of the My World panel to make it convenient to find models in the future.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FejRVuHpdTTeochJfetdf%252Fimage.png%3Falt%3Dmedia%26token%3D7fc67ff5-8823-438c-88b1-914c72f5a86d&width=768&dpr=4&quality=100&sign=ffe0bfdc&sv=2)

The heart icon will change from grey to red when the model is liked.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-add-to-collection)

Add to Collection:

Similar to the Like functionality, you can create various collections of models by selecting the list+ icon next to the like button. This provides a way to create a separate list of models that you would like to use in the future.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Fr5fbJ5FDtvpzQGza8HeL%252Fimage.png%3Falt%3Dmedia%26token%3D7e0a2627-1a97-4620-8c9b-0542345aba1d&width=768&dpr=4&quality=100&sign=b1470542&sv=2)

Select the list icon to open the collections popup and add the model to an existing collection or create a new collection.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-report-model)

Report Model:

When selecting the Flag button, the report a model popup will appear which will provide a way to tell us that a model needs to be reviewed.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FEn1dX6XG2h9iCc3VoON1%252Fimage.png%3Falt%3Dmedia%26token%3D3ad09002-67af-466d-8e22-45243a636614&width=768&dpr=4&quality=100&sign=71ff24aa&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-add-model-to-scene)

**Add Model to Scene:**

This option will import the model directly to your active Unity scene.

**Add Model and Save Assets:**

Selecting this option will import the model to your active Unity scene and save a copy of the assets associated with the model such as the mesh, material, and animation files. A new folder titled 'Saved Assets' is created in the Project panel of the Unity project. Each saved model will appear as a separate folder containing the aforementioned assets.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FhAbhmuuB6I68h4OCA1Cj%252Fimage.png%3Falt%3Dmedia%26token%3Df13b032c-633c-42f4-8de8-fd543f7707d5&width=768&dpr=4&quality=100&sign=8f606922&sv=2)

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-make-options)

**Make Options:**

Selecting the Make Options button will open the Transform Settings panel for ease of access.

Select the '**Apply**' button after making adjustments to the transform settings parameters to ensure that the applied when adding models to your scene.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FOQPdQkHNVkfzKcHzoxCi%252Fimage.png%3Falt%3Dmedia%26token%3Ddb8e5375-c546-4baa-b5e1-1e1cbdfc559d&width=768&dpr=4&quality=100&sign=a38e0b68&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-general)

**General:**

- The **Animate Model** option allows you to choose if you want the model to have animations when moved to your scene.
    
- The **Enable Maker Debug Messages** option provides unity console messages about the models status when moved to your scene.
    
- The **Place On Top of Ground** option place the models above the floor in your scene.
    
- The **Serialize Asset** option allows users to create Prefabs from the selected model.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FwhboSokMvLTjqWkOokLY%252Fimage.png%3Falt%3Dmedia%26token%3Dba077942-b35f-4c0d-9170-4e3120b5e4ee&width=768&dpr=4&quality=100&sign=bd721364&sv=2)

**Physics:**

- **Add Collider:** Automatically adds a collider component to the desired model.
    
- **Add Rigidbody:** Automatically adds a rigidbody component to the desired model.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FHe9IsYiPxD2SkaHwlb8w%252Fimage.png%3Falt%3Dmedia%26token%3D93b97453-17e1-427c-a959-a6d9a758f4b1&width=768&dpr=4&quality=100&sign=cd1fafcf&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-transform-options)

**Transform Options:**

- **Parent Transform** allows you to input a parent object for your model when it is placed in the scene.
    
- **Position** enables you to select the starting place for your model based on the inputs given for the X, Y, and Z coordinates.
    
- **Rotation** gives you the ability to alter the orientation of the model when placed in the scene for the X, Y, and Z parameters.
    
- **Scale Multiplier** increases the size of the models on all coordinates by the input value that you provide.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FBPVXsgnvWsvarneEf5pq%252Fimage.png%3Falt%3Dmedia%26token%3D4345150f-8e4c-409c-905f-33ac00a77615&width=768&dpr=4&quality=100&sign=299cb4bc&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-default-animation-behaviours)

**Default Animation Behaviours:**

- The **Animated Behaviour** option allows you to attach scripts to the models directly from the Anything Browser. This option comes with a default Random Movement script to help you get started.
    
- The **Vehicle behaviours** option can be used for providing functionality to cars and other four wheeled vehicles. This option comes with a default RandomFlyingMovement script to help you get started.
    
- The **Flying Vehicle behaviours** option is useful for adding functionality to planes and other forms of aviation models. This option comes with a default RandomFlyingMovement script to help you get started.
    
- The **Flying Animal behaviours** option enables you to add functionality to models such as birds and flying insects. This option comes with a default BirdsFlockingGoal script to help you get started.
    
- The **Static behaviour** option allows you to apply a mono script to the model that is static**.**
    
- The **Shader behaviour** option provides a way to attach custom shader scripts to the model.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FXboFbi07QUCvyJo53SWI%252Fimage.png%3Falt%3Dmedia%26token%3Dea5399f1-2bd7-4c19-9cb6-79b4e5b5673e&width=768&dpr=4&quality=100&sign=74c78ecc&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-grid-options)

**Grid Options:**

- **Grid Gizmos:** Button that displays the origin point in relation to the grid.
    
- **Grid Origin:** The starting position of the grid placement feature.
    
- **Cell Width:** The distance between each placed model.
    
- **Grid Width:** The row size of the grid.
    
- **Use Grid Area:** Enables the use of a GameObject area to distribute the grid on.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F7ybStRpkJvtn8F5QTnDf%252Fimage.png%3Falt%3Dmedia%26token%3Dcbee7f3b-f0e7-4967-90a2-22241adbd46f&width=768&dpr=4&quality=100&sign=c02a6911&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-yVXL8mvNTQnoN9WJDm0h-grid-area)

Grid Area:

We can use a GameObject as the area where the grid will distribute its elements on. Initially the new window with the grid area info requires to us to set which GameObject we want to use for the area (the area will be the bounding box of the GameObject).

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Fa9zSTs8twxio2am2B1b4%252Fimage.png%3Falt%3Dmedia%26token%3Dfec8d4ca-343e-4794-a527-731e7b326c49&width=768&dpr=4&quality=100&sign=f529a1fa&sv=2)

Once we set the GameObject, the window will have more options:

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FXHeEYxBeFNZmy0cYNYPd%252Fimage.png%3Falt%3Dmedia%26token%3D53efbe7b-f9b1-429f-a9da-813030da283e&width=768&dpr=4&quality=100&sign=adf90a72&sv=2)

We recommend to create a 3D plane as a GameObject, like in the image above. You can rotate the plane as you desire. While you have the grid area enabled, all models that you create will be added to the distribution of the area, until you press **Finish** (to keep all models) or **Cancel** (to remove all models from the grid). Also, you can modify any option of the grid area and all the models added will be redistributed to reflect the changes.

**Distribution Mode: Fit**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F69sxR5WpG4joLAjFx9zj%252Fimage.png%3Falt%3Dmedia%26token%3D44f0b23d-0def-4565-b8f5-f472904c7a4c&width=768&dpr=4&quality=100&sign=4e2c409f&sv=2)

The **Fit** mode will distribute all the models evently throught the area. We only need to specify how many models we want per row, in the image above we want 2 models, so new rows are created to accommodate the rest of the models.

**Distribution Mode: Clip**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FKdvBHbKv8ahRrGrq9ByY%252Fimage.png%3Falt%3Dmedia%26token%3Ddf7a965a-bbf6-4100-9916-1d9e3697533c&width=768&dpr=4&quality=100&sign=f0914327&sv=2)

The **Clip** mode uses distance between models and it distributes models in a row until the X axis is filled and then a new row at the Z axis distance is created. In the above image we use 8 m in the X axis, and then 2 m in the Z axis (distance between rows).

**View All Grid Positions**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FAwzMFfNvTzvx9wH4HUOk%252Fimage.png%3Falt%3Dmedia%26token%3D79b985ae-02a2-44e2-a678-048210b40de0&width=768&dpr=4&quality=100&sign=9e0f1364&sv=2)

This option will show the position that will take the new models when they are added. It is a good way to know the distribution without creating yet the models.

**Grow Outside Area** (work in progress)

This option allows that models can be distributed out of the grid area for the **Clip** mode, otherwise the models that are placed outside the area are cancelled automatically.

Currently it is not implemented yet.

**Ignore Area Collision**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FM94v1FrLUMbiSzO4lWO8%252Fimage.png%3Falt%3Dmedia%26token%3Dbcdb1cfb-1bf8-419a-9dbb-b468dd534492&width=768&dpr=4&quality=100&sign=14c2c693&sv=2)

This option disables the collision mesh of the plane (the area GameObject) so all models will fall out until find a collision with the ground, for example. That way we can distribute the models over an irregular surface that is below the area, for example. For this to works we need to enable the Place on Top of Ground option from the Make Options:

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Fq4uHl5s2km6MuuekLFO1%252Fimage.png%3Falt%3Dmedia%26token%3D2f7933c6-bff7-45d2-84a0-c27c070c9db6&width=768&dpr=4&quality=100&sign=96685c51&sv=2)

**Random Offset**

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FeQQedul09jwwCCCRx5KO%252Fimage.png%3Falt%3Dmedia%26token%3D2dba571f-51b6-42de-b0a7-54c978bf80f4&width=768&dpr=4&quality=100&sign=1298a7af&sv=2)

This option creates an offset per model so the grid pattern is broken, while all the m odels keep its initial position, it is just moved a bit.

**Reset:**

The Reset button will return all edited Make settings to the default values.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FObrx7sG5AIVk2iU7zK16%252Fimage.png%3Falt%3Dmedia%26token%3Dd43ddcf2-6b8f-4759-a07a-4651ba0a2f1a&width=768&dpr=4&quality=100&sign=e528bb0d&sv=2)

# My World

Find all of your saved models within the My World panel.

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-how-to-use-the-my-world-panel)

How to use the My World panel

The My World panel allows you to find your favourite models quickly. There are two ways to save the models in the My World panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FPnUdKjZ7x58S7p16nIhU%252Fimage.png%3Falt%3Dmedia%26token%3D55b99f60-e497-45b3-a2e2-ed19c7ece509&width=768&dpr=4&quality=100&sign=72acfd02&sv=2)

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-my-likes)

**My Likes:**

Search for a model in the Anything Browser, then select the heart or “My Like” button on the best model. These models can be viewed in the “My Likes” view on the My World panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F7dSzXGIubuItqWYSFYPD%252Fimage.png%3Falt%3Dmedia%26token%3Dcd743736-8fd0-4f02-9f9e-755736afc5d5&width=768&dpr=4&quality=100&sign=7284e1fd&sv=2)

Red hearts indicate you have already liked the model.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FjvZBidq8mDDVacyBr2pr%252Fimage.png%3Falt%3Dmedia%26token%3D90a4b5b1-2809-4247-8b44-2f1b6dda8f25&width=768&dpr=4&quality=100&sign=34cd9413&sv=2)

View your liked models from the My Likes section within the My World panel.

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-my-lists)

**My Lists:**

Search for a model in the Anything Browser, then select the list icon button on the right side of the model result box. When selected, the “My List” button will open a popup that allows you to add the model to a pre-existing collection or create a new collection.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FYmMdibSyZOhHBUTtdpTH%252Fimage.png%3Falt%3Dmedia%26token%3D16457272-4058-4827-a905-444679ee54fd&width=768&dpr=4&quality=100&sign=dc39586e&sv=2)

Select the list icon to open the collections popup.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FFMGjoFdAqCwW9FcoGDNo%252Fimage.png%3Falt%3Dmedia%26token%3D03ead85b-21e2-4dcc-b478-9ec4e7e5fb1c&width=768&dpr=4&quality=100&sign=32b6b939&sv=2)

Create a new collection or update an existing collection.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FexroBo4aVt2gLxjDISVy%252Fimage.png%3Falt%3Dmedia%26token%3Dd38e2c7e-f8e5-4417-8953-258f2135f031&width=768&dpr=4&quality=100&sign=72ffbc74&sv=2)

View all of your collections in the My Lists section of the My World panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F5Vo4QUQD3sjUqj7MtLKg%252Fimage.png%3Falt%3Dmedia%26token%3D0667f166-121c-45b3-be5b-330e5131e857&width=768&dpr=4&quality=100&sign=a5a294c2&sv=2)

Open the collection to see all of your favourite models and import them directly to your scene by selecting the model preview thumbnail.

Once a model is added to the collection, the model can be found in the “My Lists” view within the My World panel.

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-reset-button)

Reset Button

The reset button that is displayed as the circle icon allows you to reset the scene, reset the creator, or reset all. This option will appear in the Anything Browser panel and the My Like section of the My World panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FMQs4404zAvLlZ5WKuyVh%252Fimage.png%3Falt%3Dmedia%26token%3Db8750af7-d9af-4b15-aa32-bb805317ef2b&width=768&dpr=4&quality=100&sign=69c3a6a3&sv=2)

Select the circle button to open the reset options.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-reset-scene)

Reset Scene:

This option will remove all assets that were provided by Anything World SDK from your scene. An additional pop-up box will appear to verify if you are sure you want to reset the scene.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F1OfjdZ4DIEyybARKDrTV%252Fimage.png%3Falt%3Dmedia%26token%3D2dd52aba-bd35-46cf-b1d7-7f7d1a1248c3&width=768&dpr=4&quality=100&sign=9f88422f&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-reset-creator)

Reset Creator:

This option will remove all search results, filters, and Make Option parameters applied for the Anything Browser and My World panels. An additional pop-up box will appear to verify if you are sure you want to reset the creator.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FfPfftkYY1EpCrxQF31Xq%252Fimage.png%3Falt%3Dmedia%26token%3Dd54a4899-5791-49cd-b208-d1e48155c05e&width=768&dpr=4&quality=100&sign=9cb86606&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-uUWTe6uWRAtPsgs8cwr8-reset-all)

Reset All:

This option will remove all assets from the scene and return that Anything Browser and My World panels back to default. An additional pop-up box will appear to verify if you are sure you want to reset everything.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F69A5WnWfd61jb6AWHNss%252Fimage.png%3Falt%3Dmedia%26token%3D9926a454-1d64-4c46-8d7f-9c4146c47927&width=768&dpr=4&quality=100&sign=ac83d7f0&sv=2)

# AI Creator

Get Started with using our AI Creator system

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-requirements)

Requirements:

- Unity 2020.3 - 2022.2
    
- Anything World Account Credentials
    
- Anything World SDK
    
- Optional: Microphone
    

Please note: This package is not compatible out of the box with the previous (Classic) versions of Anything World. Contact us on discord or email if you have a project that needs migrating.

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-setting-up-ai-creator)

Setting Up AI Creator

The AI Creator panel allows users to convert verbal or text input into real time Unity scene creation using our extensive repository of models and auto-rigging functionality.

AI Creator comes installed in our latest Anything World SDK package, see our [Unity Quickstart](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-GjjXmdDT5TQrtIhMvb0K) guide to setup our Anything World SDK before using the AI Creator.

After completing the Unity Quickstart guide, simply open the Anything World menu from the top tool bar and select the AI Creator option to access the AI Creator panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Flz9mODzkddkKE7zWtt2E%252Fimage.png%3Falt%3Dmedia%26token%3D2fc6a3cb-c6ab-4984-bac4-eb7b9eaff191&width=768&dpr=4&quality=100&sign=9c798815&sv=2)

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-getting-start-with-ai-creator)

Getting Start with AI Creator

Our AI Creator panel provides two methods for users to give input

- The microphone button activates the recording feature which converts verbal commands to text for ease of access in adding, removing, and moving models in the active scene during editor mode or at runtime.
    
- The text field provides the same functionality in enabling users to give written commands to add, remove, or move models from our extensive model database.
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F7bgLbryJwyFjgHLVIvnH%252Fimage.png%3Falt%3Dmedia%26token%3D46c4799e-b35c-40f0-bcb7-7872c76b51ff&width=768&dpr=4&quality=100&sign=d967cd27&sv=2)

### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-valid-commands)

Valid Commands:

Currently our AI Creator supports commands that will enable users to:

- Add one or several models to the active scene
    
- Move one model to a specified location
    
- Remove one or several models from the active scene
    

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-examples)

Examples:

Add commands:

- **Create** one cat
    
- **Add** five chickens
    

Move commands:

- **Move** one chicken here
    
- **Move** the cat to the left of the chicken
    

Remove commands:

- **Remove** the cat
    
- **Delete** five chickens
    

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-valid-modifiers)

Valid Modifiers:

Quantity Modifier:

- Add **five** gorillas
    
- Remove **three** cats
    

Relative Location Modifier:

- Add one car **here**
    
- Move one gorilla **above** the car
    
- Create one cat to the **right** of the car
    
- Add one human to the **left** of the car
    
- Create a snake **below** the car
    

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FtkvQsbByTrszMTSqz6sv%252Fimage.png%3Falt%3Dmedia%26token%3D0adc9175-f7db-48ec-bc09-76127f1b8fbf&width=768&dpr=4&quality=100&sign=1748b798&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-multiple-actions-can-be-requested-in-a-single-command)

Multiple actions can be requested in a single command

Example:

- Add one cat and one human
    
- Add a bumblebee and move the cat here
    
- Remove the human and move the bumblebee above the cat
    

## 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-ai-creator-panel)

AI Creator Panel

The AI Creator panel features several buttons to make the creation process more streamlined.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-microphone-input)

Microphone Input:

The Microphone button enables the recording functionality which allows users to convert verbal commands to real-time scene creation and manipulation using our extensive 3D model database within a Unity scene. Select the microphone button once to enable the recording session and select the same button again to submit the verbal request.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FOAyOrA5qwBxucg6hXRDd%252Fimage.png%3Falt%3Dmedia%26token%3D2e13ac81-4186-4de6-86f6-90a19829e147&width=768&dpr=4&quality=100&sign=827a86cb&sv=2)

By default the five dots will be displayed beneath the microphone button.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252Fhc3ML7AXHRx4bA3Yx4Le%252Fimage.png%3Falt%3Dmedia%26token%3Df0fb6fc0-7bd1-4e95-819e-be9c2d2a1a1a&width=768&dpr=4&quality=100&sign=af19937c&sv=2)

The five dots represents the volume of the verbal input received during recording.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FE8BG8zRAHnSeczLfBMq4%252Fimage.png%3Falt%3Dmedia%26token%3D26d5fbac-69a7-48f0-aa7b-4cc17770e37d&width=768&dpr=4&quality=100&sign=f8efec54&sv=2)

The five dots will move in a wave motion when processing the request. This animation will occur when providing verbal or written requests.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-text-input-and-submission)

Text Input and Submission:

The Text box provides an alternative method of providing input to our AI Creator for creation and manipulation our repository of 3D assets. To use the text box, type the request and select the submit button.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F4MNWNbqAxwMXpjueBxkB%252Fimage.png%3Falt%3Dmedia%26token%3D5c484336-564f-43ac-9e12-e51f3b9a1730&width=768&dpr=4&quality=100&sign=284c7661&sv=2)

Select the submit button or press the enter key to send the request to AI Creator

The Results dropdown will display the input received and provide a list of actions that AI Creator will take to fulfill the desired request. Selecting the dropdown will display additional information regarding the action, the type of model, and the quantity of the models requested.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FPeaNiVrubjDBU3kzXCt1%252Fimage.png%3Falt%3Dmedia%26token%3D5a367c39-2f6b-4236-acb7-bafec5bdfe2e&width=768&dpr=4&quality=100&sign=e896d728&sv=2)

Select the dropdown to see more information regarding the provided request.

Once the request has been processed, the Make button will appear to the right of the requested model allowing the user to add one model at a time.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FI5XNtqVGmqcKHYvRoxSy%252Fimage.png%3Falt%3Dmedia%26token%3D1b74fe34-3224-4f68-81f3-6160c78bf4a2&width=768&dpr=4&quality=100&sign=9597bc6f&sv=2)

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-make-all-button-and-auto-option)

Make All Button and Auto Option:

When users provide multiple commands, they may select the Make All button to add, remove, or change the position of the desired model within the scene. Additionally, the Auto checkbox will automatically create, manipulate, or delete the models of the scene without requiring the user to verify the list of commands.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FNQKp5j7Pu9W7FNYx5IXT%252Fimage.png%3Falt%3Dmedia%26token%3D3079f23f-52df-4530-863c-241b069f34f2&width=768&dpr=4&quality=100&sign=a53b8077&sv=2)

Select the Auto option to skip the manual process of making each command.

#### 

[](https://anything-world.gitbook.io/anything-world/~gitbook/pdf?page=GjjXmdDT5TQrtIhMvb0K&only=yes#pdf-page-tZDNcV1P3Fmr94nmJ7kw-grid-options)

Grid Options:

Selecting the Gird Options button will open a secondary panel containing the same grid settings found in the Transform Settling panel. The Grid options can be used to specify the spacing between models inserted via the AI Creator. Make sure to select the Apply button to ensure the settings were saved before proceeding in adding more assets to your scene.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252FWVamrhk0t5LhagJteA2o%252Fimage.png%3Falt%3Dmedia%26token%3D48a178b8-bf46-470e-95a5-837a273f1eef&width=768&dpr=4&quality=100&sign=b8f0a245&sv=2)

Select the Grid Options button to open the Grid Settings Panel.

![](https://anything-world.gitbook.io/~gitbook/image?url=https%3A%2F%2F588284853-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-M_f9MEtTx5q1bKIGvl-%252Fuploads%252F4EyoCOwn3QwIYmjoDlDJ%252Fimage.png%3Falt%3Dmedia%26token%3D55c5832a-ca6c-4430-950d-ea27b50c0e4a&width=768&dpr=4&quality=100&sign=9d1144d6&sv=2)

These settings are universally used when adding models through the Anything Browser or the AI Creator.