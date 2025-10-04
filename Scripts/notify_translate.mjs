"use strict";

// import { NotificationCenter, notifier } from 'node-notifier';
import notifier from 'node-notifier';
import clipboardy from 'clipboardy';
import fs from 'fs';
// path
import path from 'path'; 
/*
(-- `node-notifier - npm` 
[npmjs](https://www.npmjs.com/package/node-notifier))
*/

function toLongName(short_name) {
  if (short_name === 'en') {
    // return 'English';
    return 'EN';
  } else if (short_name === 'zh') {
    return '中文';
  }
}

// var notifier = new NotificationCenter({
//   withFallback: false, // Use Growl Fallback if <= 10.8
//   // customPath: '/Users/yamlam/Documents/obsdiannote/Scripts/' // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
// });

function notify(translatedText, detectedSourceLanguage, targetLanguage) {
  const scriptUrl = new URL(import.meta.url);
  const scriptDir = path.dirname(scriptUrl.pathname);
  const iconPath = path.dirname(new URL(import.meta.url).pathname);
  notifier.notify({
    timeout: 15,
    sound: 'Frog',
    actions: 'Copy',
    // icon: '/Users/yamlam/Documents/obsdiannote/Scripts/translate.png',
    icon: void 0,
    // actions: 'Save,Copy',
    title: `${toLongName(detectedSourceLanguage)} >> ${toLongName(targetLanguage)}`,
    message: translatedText,
    // closeLabel: 'Copy',
    // dropdownLabel: 'More',
    
  }, function (err, response, metadata) {
    console.log(iconPath);
    console.log(`response: ${response}`);
    console.log(`metadata: ${JSON.stringify(metadata)}`);
    if (metadata.activationValue === 'Save') { // Show
      // Save the translated text
      fs.writeFileSync(path.join(scriptDir, 'translatedText.txt'), translatedText, 'utf8');
    } else if (metadata.activationValue === 'Copy') {
      clipboardy.writeSync(translatedText);
      console.log('Copy');
    } else if (response === '' && Object.keys(metadata).length === 0) {
      console.log('Show is clicked');
    }
  });
}

// Get the message from the command line arguments
const message = process.argv[2];
  // Passing output '{'translatedText': '苹果', 'detectedSourceLanguage': 'en', 'targetLanguage': 'zh'}' 
  const correctedQuery = message.replace(/'/g, '"');
  const { translatedText, detectedSourceLanguage, targetLanguage } = JSON.parse(correctedQuery);

notify(translatedText, detectedSourceLanguage, targetLanguage);
