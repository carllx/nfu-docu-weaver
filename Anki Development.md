
## Documents
ankiWeb
(-- `Introduction - Anki Manual` [ankiweb](https://docs.ankiweb.net/intro.html))
(-- `Anki让记忆更轻松 - ankichina` [ankichina](http://www.ankichina.net/manual/anki/#%E6%96%B0%E5%8D%A1%E7%89%87))
ankimobile
(-- `Night Mode Styling - AnkiMobile Manual` [ankimobile](https://docs.ankimobile.net/night-mode.html))
AnkiDroid
(-- `AnkiDroid - Google Groups` [google](https://groups.google.com/g/anki-android))
AnkiConnect
(-- `FooSoft Productions - Anki-Connect` [foosoft](https://foosoft.net/projects/anki-connect/))

## Other relative App 
(-- `Anki+Obsidian双链` [bilibili](https://www.bilibili.com/video/BV1Ch411i7fZ/?t=923))
(-- `Intro/ Create Anki Cards Quickly using CSV` [youtube](https://youtu.be/BwGNP3GXmxg?t=2))

## Template development Plugin
(-- `Anki Editor - Visual Studio Marketplace` [visualstudio](https://marketplace.visualstudio.com/items?itemName=pedro-bronsveld.anki-editor&ssr=false#overview))
(-- `Anki Preview Reloader - AnkiWeb` [ankiweb](https://ankiweb.net/shared/info/571150035) ,   [github](https://github.com/Pedro-Bronsveld/anki-preview-reloader))
(-- `Home · hikaru-y/anki21-addon-ankiwebview-inspector Wiki` [github](https://github.com/hikaru-y/anki21-addon-ankiwebview-inspector/wiki))

## AnkiConnect
document: (-- `FooSoft Productions - Anki-Connect` [foosoft](https://foosoft.net/projects/anki-connect/))
### Delete

### Add


## Media
[example - Add Cards/Notes with Images](https://github.com/FooSoft/anki-connect/issues/158#issuecomment-622669323), using  [Multi](https://foosoft.net/projects/anki-connect/#multi)

There are two ways to attempt to achieve the purpose of generating pronounced text on the cards.
Approach 01: Pronounce by Hacking API, but this is restricted by the 'no-cross' policy on browsers.
Approach02: Pronounce by accessing static assets. To efficiently synchronize the Anki process, we store assets through third-party servers instead of storing them directly on the Anki server. This can be achieved by sending the files to a gist and obtaining the URL as the address for the static files.

### Preload   (Desktop only)
(-- `Pre-load the back side of the card - Suggestions - Anki Forums` [ankiweb](https://forums.ankiweb.net/t/pre-load-the-back-side-of-the-card/9865/8))
```html
{{Front}}

<template class="template-preload">
    {{Field 1}}
    {{Field 2}}
    {{Field 3}}
</template>

<script>
    function insertPreloadLink(href, contentType) {
        const preloadLink = document.createElement("link");
        preloadLink.href = href;
        preloadLink.rel = "preload";
        preloadLink.as = contentType;
        preloadLink.classList.add("preload-link");
        document.head.appendChild(preloadLink);
    }

    function removePreloadLinks() {
        document.head
            .querySelectorAll("link.preload-link")
            .forEach((link) => link.remove());
    }

    function preloadImages() {
        const tmpl = document.querySelector(".template-preload");
        tmpl.content.querySelectorAll("img").forEach((img) => {
            insertPreloadLink(img.src, "image");
        });
    }

    // Run only on the question side and only on Anki desktop
    setTimeout(() => {
        if (window["ankiPlatform"] === "desktop" && !document.getElementById("answer")) {
            removePreloadLinks();
            preloadImages();
        }
    }, 0);
</script>
```

### Approach 01: Pronounce by Hacking API (No Cros)

```
Access to fetch at `https//www.google.com/speech-api/v2/synthesize?enc=mpeg&client=chromium&key=....`  from origin 'http://127.0.0.1:57780' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
```

To resolve this issue, you have a few options:
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
#### Proxy Server: 
Set up a proxy server on your backend that makes the request to
'[https://www.google.com/speech-api/v2/synthesize'](https://www.google.com/speech-api/v2/synthesize') and returns the response to your frontend. This way, the request will be made from the same origin, and the CORS policy won't be violated.

#### Use a CORS Proxy: 
Utilize a CORS proxy service like CORS Anywhere
([https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/)) to make the request. You can prepend the URL with the CORS Anywhere URL to bypass the CORS policy. However, keep in mind that this approach may have limitations and is not recommended for production use.

Another approach related:  
(-- google chrome - How to make a cross-origin request in a content script (currently blocked by CORB despite the correct CORS headers)? stackoverflow)

### Approach02: Pronounce by accessing static assets

`Cloudinary` is a noteworthy third-party platform for sharing resources, where you can upload assets to a cost-free server for Audio files.
9.6M , Cloudinary,  ( `up to 100 files per month` [cloudinary](https://cloudinary.com/pricing))
233.6K, The Shu Box  ( `upload up to 100 files per month` [theshubox](https://theshubox.com/))
199.2K , Filestack, ( `upload up to 100 files per month` [filestack](https://www.filestack.com/pricing/#/marketplace))
49.4K, Transloadit,  ( `upload up to 50 files per month`  [transloadit](https://transloadit.com/))

To  sending the files to a gist and obtaining the URL as the address for the static files Currently, we are utilizing the Octokit.js package as per Joseph Nma's guide.  
(-- `Automating GitHub Gists Creation Using TypeScript | by Joseph Nma | Better Programming` [betterprogramming](https://betterprogramming.pub/automate-github-gists-creation-using-typescript-ac1f3fae68c5))
(-- `octokit/octokit.js: The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.` [github](https://github.com/octokit/octokit.js))
(-- `octokit/rest.js` [github](https://octokit.github.io/rest.js/v19#usage))

## Use Microsoft Edge's Immersive Reader?

It is possible to have the aid of Microsoft Edge's Immersive Reader feature to enhance the reading experience on Anki's card.
### Problems to be solved:
1. How to navigate to the Anki cards in Edge?
2. How to activate the Edge Browser and render Anki Cards in reader mode?

Generate HTML of the card, send it to gist, and then render it on a rendering provider such as awgit.com or htmlpreview.github.io. as per the guide (-- `git - View rendered output of a gist?` [stackoverflow](https://stackoverflow.com/questions/10717169/view-rendered-output-of-a-gist))

htmlpreview.github.io (-- `GitHub & BitBucket HTML Preview` [github](https://htmlpreview.github.io/))


# Highline Language Improver  
For the selection of libraries in the context of comparing and highlighting functionality `diff-match-patch` and `jsdiff` are primarily utilized in JavaScript development. **Diff-match-patch** is a more powerful and flexible library than `jsdiff`. It can compare two strings, arrays, or objects, even if they are deeply nested. It also supports a wider range of features, such as the ability to generate unified diffs, patch files, and find fuzzy matches.

|Feature|diff-match-patch|jsdiff|
|---|---|---|
|Power and flexibility|More powerful and flexible|Simpler and easier to use|
|Features|Supports a wider range of features, such as unified diffs, patch files, and fuzzy matches|Designed specifically for comparing strings|
|Diff generation|Can generate more detailed and informative diffs|Less detailed diffs|
|Best use cases|Complex comparisons, such as comparing deeply nested objects|Simple comparisons, such as comparing strings|

(-- `kpdecker/jsdiff: A javascript text differencing implementation.` [github](https://github.com/kpdecker/jsdiff))
(-- `google/diff-match-patch Wiki`  [npmjs](https://www.npmjs.com/package/diff-match-patch),  [github](https://github.com/google/diff-match-patch/wiki/Language:-JavaScript), [Demo](https://neil.fraser.name/software/diff_match_patch/demos/diff.html))


## Splits words into syllables
