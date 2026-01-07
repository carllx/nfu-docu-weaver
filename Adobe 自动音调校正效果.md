## How to Reduce Noise and Restore Audio in Adobe Audition

_Watch this video to learn how to reduce unwanted noise and restore audio to produce quality audio content._

## Techniques for restoring audio

You can fix a wide array of audio problems by combining two powerful features. First, use Spectral Display to visually identify and select ranges of noise or individual artifacts. (See [Select spectral ranges](https://helpx.adobe.com/audition/using/selecting-audio.html#select_spectral_ranges) and [Select artifacts and repair them automatically](https://helpx.adobe.com/audition/using/selecting-audio.html#select_artifacts_and_repair_them_automatically).) Then, use either Diagnostic or Noise Reduction effects to fix problems like the following:

- Crackle from wireless microphones or old vinyl records. (See [Automatic Click Remover effect](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#automatic_click_remover_effect).)
    
- Background noise like wind rumble, tape hiss, or power-line hum. (See [Adaptive Noise Reduction effect](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#adaptive_noise_reduction_effect) and [DeHummer effect](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#dehummer_effect).)
    
- Phase cancelation from poorly placed stereo microphones or misaligned tape machines. (See [Automatic Phase Correction effect](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#automatic_phase_correction_effect).)
    

Note

The real-time restoration effects above, which are available in both the Waveform and Multitrack editors, quickly address common audio problems. For unusually noisy audio, however, consider using offline, process effects unique to the Waveform Editor, such as Hiss Reduction and Noise Reduction.

Watch the [Audio restoration techniques video](https://creativecloud.adobe.com/en/learn/audition/web/audio-restoration-techniques) to learn best practices for fixing audio in Audition using the Amplitude Statistics panel, spectral frequency display, adaptive noise reduction, Diagnostics panel, and DeClipper and DeHummer effects.

![](https://helpx-prod.scene7.com/is/image/HelpxProd/ed24?$png$&jpegSize=200&wid=734 "ed24")

Selecting various types of noise in Spectral Display

**A.** Hiss **B.** Crackle **C.** Rumble 

Watch the video [How to use the Spectral Frequency Display to clean up your audio](https://creativecloud.adobe.com/en/learn/audition/web/audition-spectral-frequency-display-cc) to learn more about using Spectral Frequency Display.

## Noise Reduction effect (Waveform Editor only)

The Noise Reduction/Restoration > Noise Reduction effect dramatically reduces background and broadband noise with a minimal reduction in signal quality. This effect can remove a combination of noise, including tape hiss, microphone background noise, power-line hum, or any noise that is constant throughout a waveform.

The proper amount of noise reduction depends upon the type of background noise and the acceptable loss in quality for the remaining signal. In general, you can increase the signal‑to‑noise ratio by 5 to 20 dB and retain high audio quality.

To achieve the best results with the Noise Reduction effect, apply it to audio with no DC offset. With a DC offset, this effect may introduce clicks in quiet passages. (To remove a DC offset, choose Favorites > Repair DC Offset.)

![](https://helpx-prod.scene7.com/is/image/HelpxProd/ef11?$png$&jpegSize=100&wid=533 "ef11")

Evaluating and adjusting noise with the Noise Reduction graph:

**A.** Drag control points to vary reduction in different frequency ranges **B.** Low amplitude noise. **C.** High amplitude noise **D.** Threshold below which noise reduction occurs. 

## Apply the Noise Reduction effect

1. In the Waveform Editor, select a range that contains only noise and is at least half a second long.
    
     
    
    Note
    
    To select noise in a specific frequency range, use the Marquee Selection tool. (See [Select spectral ranges](https://helpx.adobe.com/audition/using/selecting-audio.html#select_spectral_ranges).)
    
2. Choose Effects > Noise Reduction/Restoration > Capture Noise Print.
    
3. In the Editor panel, select the range from which you want to remove noise.
    
4. Choose Effects > Noise Reduction/Restoration > Noise Reduction.
    
5. Set the desired options.
    

Note

When recording in noisy environments, record a few seconds of representative background noise that can be used as a noise print later on.

## Noise Reduction options

Capture Noise Print

Extracts a noise profile from a selected range, indicating only background noise. Adobe Audition gathers statistical information about the background noise so it can remove it from the remainder of the waveform.

_**Tip**: If the selected range is too short, Capture Noise Print is disabled. Reduce the FFT Size or select a longer range of noise. If you can’t find a longer range, copy and paste the currently selected range to create one. (You can later remove the pasted noise by using the Edit > Delete command.)_

Save the Current Noise Print 

![](https://helpx.adobe.com/content/dam/help/icons/save.png)

Saves the noise print as an .fft file, which contains information about sample type, FFT (Fast Fourier Transform) size, and three sets of FFT coefficients: one for the lowest amount of noise found, one for the highest amount, and one for the power average.

Load a Noise Print from Disk 

![](https://helpx.adobe.com/content/dam/help/icons/load.png)

Opens any noise print previously saved from Adobe Audition in FFT format. However, you can apply noise prints only to identical sample types. (For example, you can’t apply a 22 kHz mono profile to 44kHz stereo samples.)

_**note**: Because noise prints are so specific, a print for one type of noise won’t produce good results with other types. If you regularly remove similar noise, however, a saved profile can greatly increase efficiency._

Graph

Depicts frequency along the _x_‑axis (horizontal) and the amount of noise reduction along the _y_‑axis (vertical).

The blue control curve sets the amount of noise reduction in different frequency ranges. For example, if you need noise reduction only in the higher frequencies, adjust the control curve downward to the right of the graph.

If you click the Reset button ![](https://helpx.adobe.com/content/dam/help/icons/ResetPoint.png) to flatten the control curve, the amount of noise reduction is based entirely on the noise print.

_**Tip**: To better focus on the noise floor, click the menu button ![](https://helpx.adobe.com/content/dam/help/icons/menu.png) to the upper right of the graph, and deselect Show Control Curve and Show Tooltip Over Graph._

Noise Floor

High shows the highest amplitude of detected noise at each frequency; Low shows the lowest amplitude. Threshold shows the amplitude below which noise reduction occurs.

_**Tip**: The three elements of the noise floor can overlap in the graph. To better distinguish them, click the menu button ![](https://helpx.adobe.com/content/dam/help/icons/menu.png), and select options from the Show Noise Floor menu._

Scale

Determines how frequencies are arranged along the horizontal _x_‑axis:

- For finer control over low frequencies, select Logarithmic. A logarithmic scale more closely resembles how people hear sound.
    
- For detailed, high‑frequency work with evenly spaced intervals in frequency, select Linear.
    

Channel

Displays the selected channel in the graph. The amount of noise reduction is always the same for all channels.

Select Entire File

Lets you apply a captured noise print to the entire file.

Noise Reduction

Controls the percentage of noise reduction in the output signal. Fine-tune this setting while previewing audio to achieve maximum noise reduction with minimum artifacts. (Excessively high noise reduction levels can sometimes cause audio to sound flanged or out-of-phase.)

Reduce By

Determines the amplitude reduction of detected noise. Values between 6 and 30 dB work well. To reduce bubbly artifacts, enter lower values.

Output Noise Only

Previews only noise so you determine if the effect is removing any desirable audio.

Advanced settings

Click the triangle to display the following options:

Spectral Decay Rate

Specifies the percentage of frequencies processed when audio falls below the noise floor. Fine‑tuning this percentage allows greater noise reduction with fewer artifacts. Values of 40% to 75% work best. Below those values, bubbly‑sounding artifacts are often heard; above those values, excessive noise typically remains.

Smoothing

Takes into account the variance of the noise signal in each frequency band. Bands that vary greatly when analyzed (such as white noise) will be smoothed differently than constant bands (like 60-Hz hum). In general, increasing the smoothing amount (up to 2 or so) reduces burbly background artifacts at the expense of raising the overall background broadband noise level.

Precision Factor

Controls changes in amplitude. Values of 5-10 work best, and odd numbers are ideal for symmetrical processing. With values of 3 or less, the Fast Fourier transform is performed in giant blocks, and between them drops or spikes in volume can occur. Values beyond 10 cause no noticeable change in quality, but they increase processing time.

Transition Width

Determines the amplitude range between noise and desirable audio. For example, a width of zero applies a sharp, noise gate to each frequency band. Audio just above the threshold remains; audio just below is truncated to silence. Alternatively, you can specify a range over which the audio fades to silence based upon the input level. For example, if the transition width is 10 dB, and the noise level for the band is ‑60 dB, audio at ‑60 dB stays the same, audio at ‑62 dB is reduced slightly, and audio at ‑70 dB is removed entirely.

FFT Size

Determines how many individual frequency bands are analyzed. This option causes the most drastic changes in quality. The noise in each frequency band is treated separately, so with more bands, noise is removed with finer frequency detail. Good settings range from 4096 to 8192.

Fast Fourier Transform size determines the tradeoff between frequency- and time-accuracy. Higher FFT sizes might cause swooshing or reverberant artifacts, but they very accurately remove noise frequencies. Lower FFT sizes result in better time response (less swooshing before cymbal hits, for example), but they can produce poorer frequency resolution, creating hollow or flanged sounds.

Noise Print Snapshots

Determines how many snapshots of noise to include in the captured profile. A value of 4000 is optimal for producing accurate data.

Very small values greatly affect the quality of the various noise reduction levels. With more snapshots, a noise reduction level of 100 will likely cut out more noise, but also cut out more original signal. However, a low noise reduction level with more snapshots will also cut out more noise, but likely retain the intended signal.

## Sound Remover effect  

The Sound Remover effect (**Effects > Noise Reduction/Restoration**) removes unwanted audio sources from a recording. This effect analyzes a selected portion of the recording, and builds a sound model, which is used to find and remove the sound.

The generated model can also be modified using parameters that indicate its complexity. A high complexity sound model requires more refinement passes to process the recording, but provides more accurate results. You can also save the sound model for later use. Several common presets are also included to remove some common noise sounds, such as sirens and ringing mobile phones.

Learn Sound Model

Uses the selected waveform to learn the sound model. Select an area on the waveform that only contains the sound to remove, and then press Learn Sound Model. You can also save and load sound models on disc.

Sound Model Complexity

Indicates the complexity of the Sound Model. The more complex or mixed the sound is, the better results you'll get with a higher complexity setting, though the longer it will take to calculate. Settings range from 1 to 100.

Sound Refinement Passes

Defines the number of refinement passes to make to remove the sound patterns indicated in the sound model. Higher number of passes require longer processing time, but offer more accurate results.

Content Complexity

Indicates the complexity of the signal. The more complex or mixed the sound is, the better results you'll get with a higher complexity setting, though the longer it will take to calculate. Settings range from 5 to 100.

Content Refinement Passes

Specifies the number of passes to make on the content to remove the sounds that match the sound model. A higher number of passes require more processing time, but generally provide more accurate results.

Enhanced Supression

This increases the aggressiveness of the sound removal algorithm, and can be modified on the Strength value. A higher value will remove more of the sound model from mixed signals, which can result in greater loss of desired signal, while a lower value will leave more of the overlapping signal and therefore, more of the noise may be audible (though less than the original recording.)

Enhance for Speech

Specifies that the audio includes speech and is careful in removing audio patterns that closely resemble speech. The end result makes sure that speech is not removed, while removing noise.

FFT Size

Determines how many individual frequency bands are analyzed. This option causes the most drastic changes in quality. The noise in each frequency band is treated separately, so with more bands, noise is removed with finer frequency detail. Good settings range from 4096 to 8192.  
Fast Fourier Transform size determines the tradeoff between frequency- and time-accuracy. Higher FFT sizes might cause swooshing or reverberant artifacts, but they very accurately remove noise frequencies. Lower FFT sizes result in better time response (less swooshing before cymbal hits, for example), but they can produce poorer frequency resolution, creating hollow or flanged sounds.

Watch the video [Sound removal and noise reduction strategies](https://creativecloud.adobe.com/en/learn/audition/web/remove-noise-audio-files) to see how you can reduce noise and remove unwanted sounds from your audio.

## Adaptive Noise Reduction effect

The Noise Reduction/Restoration > Adaptive Noise Reduction effect quickly removes variable broadband noise such as background sounds, rumble, and wind. Because this effect operates in real time, you can combine it with other effects in the Effects Rack and apply it in the Multitrack Editor. By contrast, the standard Noise Reduction effect is available only as an offline process in the Waveform Editor. That effect, however, is sometimes more effective at removing constant noise, such as hiss or hum.

For best results, apply Adaptive Noise Reduction to selections that begin with noise followed by desirable audio. The effect identifies noise based on the first few seconds of audio.

Note

This effect requires significant processing. If your system performs slowly, lower FFT Size and turn off High Quality Mode.

Reduce Noise By

Determines the level of noise reduction. Values between 6 and 30 dB work well. To reduce bubbly background effects, enter lower values.

Noisiness

Indicates the percentage of original audio that contains noise.

Fine Tune Noise Floor

Manually adjusts the noise floor above or below the automatically calculated floor.

Signal Threshold

Manually adjusts the threshold of desirable audio above or below the automatically calculated threshold.

Spectral Decay Rate

Determines how quickly noise processing drops by 60 decibels. Fine‑tuning this setting allows greater noise reduction with fewer artifacts. Values that are too short create bubbly sounds; values that are too long create a reverb effect.

Broadband Preservation

Retains desirable audio in specified frequency bands between found artifacts. A setting of 100 Hz, for example, ensures that no audio is removed 100 Hz above or below found artifacts. Lower settings remove more noise but may introduce audible processing.

FFT Size

Determines how many individual frequency bands are analyzed. Choose a high setting to increase frequency resolution; choose a low setting to increase time resolution. High settings work well for artifacts of long duration (like squeaks or power-line hum), while low settings better address transient artifacts (like clicks and pops).

Watch the video [Remove noise from audio files with Audition](https://creativecloud.adobe.com/en/learn/audition/web/remove-noise-audio-files) to see how you can reduce noise and remove unwanted sounds from your audio.

## Automatic Click Remover effect

To quickly remove crackle and static from vinyl recordings, use the Noise Reduction/Restoration > Automatic Click Remover effect. You can correct a large area of audio or a single click or pop.

This effect provides the same options as the DeClicker effect, which lets you choose which detected clicks to address (see [DeClicker options](https://helpx.adobe.com/audition/using/diagnostics-effects-waveform-editor-only.html#declicker_options)). However, because the Automatic Click Remover operates in real time, you can combine it with other effects in the Effects Rack and apply it in the Multitrack Editor. The Automatic Click Remover effect also applies multiple scan and repair passes automatically; to achieve the same level of click reduction with the DeClicker, you must manually apply it multiple times.

Threshold

Determines sensitivity to noise. Lower settings detect more clicks and pops but may include audio you wish to retain. Settings range from 1 to 100; the default is 30.

Complexity

Indicates the complexity of noise. Higher settings apply more processing but can degrade audio quality. Settings range from 1 to 100; the default is 16.

## Automatic Phase Correction effect

The Noise Reduction/Restoration > Automatic Phase Correction effect addresses azimuth errors from misaligned tape heads, stereo smearing from incorrect microphone placement, and many other phase-related problems.

Global Time Shift

Activates the Left and Right Channel Shift sliders, which let you apply a uniform phase shift to all selected audio.

Auto Align Channels and Auto Center Panning

Align phase and panning for a series of discrete time intervals, which you specify using the following options:

Time Resolution

Specifies the number of milliseconds in each processed interval. Smaller values increase accuracy; larger ones increase performance.

Responsiveness

Determines overall processing speed. Slow settings increase accuracy; fast settings increase performance.

Channel

Specifies the channels phase correction will be applied to.

Analysis Size

Specifies the number of samples in each analyzed unit of audio.

Note

For the most precise, effective phase correction, use the Auto Align Channels option. Enable the Global Time Shift sliders only if you are confident that a uniform adjustment is necessary, or if you want to manually animate phase correction in the Multitrack Editor.

## Click/Pop Eliminator effect

Use the **Click/Pop Eliminator** effect (**Effects > Noise Reduction/Restoration**) to remove microphone pops, clicks, light hiss, and crackles. Such noise is common on recordings such as old vinyl records and on-location recordings. The effect dialog box stays open, and you can adjust the selection, and fix multiple clicks without reopening the effect several times.

Detection and correction settings are used to find clicks and pops. The detection and rejection ranges are displayed graphically.

Detection graph

Shows the exact threshold levels to be used at each amplitude, with amplitude along the horizontal ruler (x-axis) and threshold level along the vertical ruler (y-axis). Adobe Audition uses values on the curve to the right (above -20 dB or so) when processing louder audio and values on the left when processing softer audio. Curves are color-coded to indicate detection and rejection.

Scan for All Levels

Scans the highlighted area for clicks based on the values for Sensitivity and Discrimination, and determines values for Threshold, Detect, and Reject. Five areas of audio are selected, starting at the quietest and moving to the loudest.

Sensitivity

Determines the level of clicks to detect. Use a lower value, such as 10, to detect lots of subtle clicks, or a value of 20 to detect a few louder clicks. (Detected levels with Scan for All Levels are always higher than with this option.)

Discrimination

Determines how many clicks to fix. Enter high values to fix very few clicks and leave most of the original audio intact. Enter lower values, such as 20 or 40, if the audio contains a moderate number of clicks. Enter extremely low values, such as 2 or 4, to fix constant clicks.

Scan for Threshold Levels

Automatically sets the Maximum, Average, and Minimum Threshold levels.

Maximum, Average, Minimum

Determine the unique detection and rejection thresholds for the maximum, average, and minimum amplitudes of the audio. For example, if audio has a maximum RMS amplitude of -10 dB, you should set Maximum Threshold to -10 dB. If the minimum RMS amplitude is -55 dB, then set Minimum Threshold to -55.

Set the threshold levels before you adjust the corresponding Detect and Reject values. (Set the Maximum and Minimum Threshold levels first, because once they’re in place, you shouldn’t need to adjust them much.) Set the Average Threshold level to about three quarters of the way between the Maximum and Minimum Threshold levels. For example, if Maximum Threshold is set to 30 and Minimum Threshold is set to 10, set Average Threshold to 25.

After you audition a small piece of repaired audio, you can adjust the settings as needed. For example, if a quiet part still has a lot of clicks, lower the Minimum Threshold level a bit. If a loud piece still has clicks, lower the Average or Maximum Threshold level. In general, less correction is required for louder audio, as the audio itself masks many clicks, so repairing them isn’t necessary. Clicks are very noticeable in very quiet audio, so quiet audio tends to require lower detection and rejection thresholds.

Second Level Verification (Reject Clicks)

Rejects some of the potential clicks found by the click detection algorithm. In some types of audio, such as trumpets, saxophones, female vocals, and snare drum hits, normal peaks are sometimes detected as clicks. If these peaks are corrected, the resulting audio will sound muffled. Second Level Verification rejects these audio peaks and corrects only true clicks.

Detect

Determines sensitivity to clicks and pops. Possible values range from 1 to 150, but recommended values range from 6 to 60. Lower values detect more clicks.

Start with a threshold of 35 for high-amplitude audio (above -15 dB), 25 for average amplitudes, and 10 for low-amplitude audio (below-50 dB). These settings allow for the most clicks to be found, and usually all of the louder ones. If a constant crackle is in the background of the source audio, try lowering the Min Threshold level or increasing the dB level to which the threshold is assigned. The level can be as low as 6, but a lower setting can cause the filter to remove sound other than clicks.

If more clicks are detected, more repair occurs, increasing the possibility of distortion. With too much distortion of this type, audio begins to sound flat and lifeless. If this occurs, set the detection threshold rather low, and select Second Level Verification to reanalyze the detected clicks and disregard percussive transients that aren’t clicks.

Reject

Determines how many potential clicks (found using the Detection Threshold) are rejected if Second Level Verification box is selected. Values range from 1 to 100; a setting of 30 is a good starting point. Lower settings allow for more clicks to be repaired. Higher settings can prevent clicks from being repaired, as they might not be actual clicks.

You want to reject as many detected clicks as possible but still remove all audible clicks. If a trumpet-like sound has clicks in it, and the clicks aren’t removed, try lowering the value to reject fewer potential clicks. If a particular sound becomes distorted, then increase the setting to keep repairs at a minimum. (The fewer repairs that are needed to get good results, the better.)

FFT Size

Determines the FFT size used to repair clicks, pops, and crackle. In general, select Auto to let Adobe Audition determine the FFT size. For some types of audio, however, you might want to enter a specific FFT size (from 8 to 512). A good starting value is 32, but if clicks are still quite audible, increase the value to 48, and then 64, and so on. The higher the value, the slower the correction will be, but the better the potential results. If the value is too high, rumbly, low frequency distortion can occur.

Fill Single Click

Corrects a single click in a selected audio range. If Auto is selected next to FFT Size, then an appropriate FFT size is used for the restoration based on the size of the area being restored. Otherwise, settings of 128 to 256 work very well for filling in single clicks. Once a single click is filled, press the F3 key to repeat the action. You can also create a quick key in the Favorites menu for filling in single clicks.

Pop Oversamples Width

Includes surrounding samples in detected clicks. When a potential click is found, its beginning and end points are marked as closely as possible. The Pop Oversamples value (which can range from 0 to 300) expands that range, so more samples to the left and right of the click are considered part of the click.  
If corrected clicks become quieter but are still evident, increase the Pop oversamples value. Start with a value of 8, and increase it slowly to as much as 30 or 40. Audio that doesn’t contain a click shouldn’t change very much if it’s corrected, so this buffer area should remain mostly untouched by the replacement algorithm.  
Increasing the Pop Oversamples value also forces larger FFT sizes to be used if Auto is selected. A larger setting may remove clicks more cleanly, but if it’s too high, audio will start to distort where the clicks are removed.

Run Size

Specifies the number of samples between separate clicks. Possible values range from 0 to 1000. To independently correct extremely close clicks, enter a low value; clicks that occur within the Run Size range are corrected together.

A good starting point is around 25 (or half the FFT size if Auto next to FFT Size isn’t selected). If the Run Size value is too large (over 100 or so), then the corrections may become more noticeable, as very large blocks of data are repaired at once. If you set the Run Size too small, then clicks that are very close together may not be repaired completely on the first pass.

Pulse Train Verification

Prevents normal waveform peaks from being detected as clicks. It may also reduce detection of valid clicks, requiring more aggressive threshold settings. Select this option only if you’ve already tried to clean up the audio but stubborn clicks remain.

Link Channels

Processes all channels equally, preserving the stereo or surround balance. For example, if a click is found in one channel, a click will most likely be detected in the other.

Detect Big Pops

Removes large unwanted events (such as those more than a few hundred samples wide) that might not be detected as clicks. Values can range from 30 to 200.

Note that a sharp sound like a loud snare drum hit can have the same characteristic as a very large pop, so select this option only if you know the audio has very large pops (like a vinyl record with a very big scratch in it). If this option causes drum hits to sound softer, slightly increase the threshold to fix only loud, obvious pops.

If loud, obvious pops aren’t fixed, select Detect Big Pops, and use settings from about 30 (to find quiet pops) to 70 (to find loud pops).

Ignore Light Crackle

Smooths out one-sample errors when detected, often removing more background crackle. If the resulting audio sounds thinner, flatter, or more tinny, deselect this option.

Passes

Performs up to 32 passes automatically to catch clicks that might be too close together to be repaired effectively. Fewer passes occur if no more clicks are found and all detected clicks are repaired. In general, about half as many clicks are repaired on each successive pass. A higher detection threshold might lead to fewer repairs and increase the quality while still removing all clicks.

Watch the video [Use the Click/Pop Eliminator and DeClicker effects](https://creativecloud.adobe.com/en/learn/audition/web/use-click-pop-eliminator-audition) to learn how you can remove microphone pops, clicks, light hiss, and crackles.  

## DeHummer effect

The Noise Reduction/Restoration > DeHummer effect removes narrow frequency bands and their harmonics. The most common application addresses power line hum from lighting and electronics. But the DeHummer can also apply a notch filter that removes an overly resonant frequency from source audio.

Note

To quickly address typical audio problems, choose an option from the Presets menu.

Frequency

Sets the root frequency of the hum. If you’re unsure of the precise frequency, drag this setting back and forth while previewing audio.

Note

To visually adjust root frequency and gain, drag directly in the graph.

Q

Sets the width of the root frequency and harmonics above. Higher values affect a narrower range of frequencies, and lower values affect a wider range.

Gain

Determines the amount of hum attenuation.

Number of Harmonics

Specifies how many harmonic frequencies to affect.

Harmonic Slope

Changes the attenuation ratio for harmonic frequencies.

Output Hum Only

Lets you preview removed hum to determine if it contains any desirable audio.

## DeReverb effect

The **Noise Reduction/Restoration > DeReverb** effect estimates the reverberation profile and helps adjust the reverberation amount. The values range from 0% to 100% and control the amount of processing applied to the audio signal.

![DeReverb effect controls](https://helpx-prod.scene7.com/is/image/HelpxProd/Dereverb?$png$&jpegSize=200&wid=1128 "DeReverb effect controls")

DeReverb effect controls

## Processing focus

There are five processing focus buttons. Each of the Processing focus buttons focuses the noise suppression process on specific parts of the signal's frequency spectrum.  

All frequency focus

![](https://helpx.adobe.com/content/dam/help/icons/All%20frequencies%20.png)   Use this to apply the same processing to the full frequency spectrum of the signal  

Hi frequency focus

![](https://helpx.adobe.com/content/dam/help/icons/Hi%20frequency.png)   Use this to focus processing on the high-end range of the frequency spectrum

Hi/low frequency focus

![](https://helpx.adobe.com/content/dam/help/icons/Hi%20low%20frequency.png)   Use this focus to process more on the high and low-end range of the frequency spectrum of the signal and less on the mid range  

Mid frequency focus

![](https://helpx.adobe.com/content/dam/help/icons/Mid%20frequency.png)   Use this option to apply focus on the mid-range of the frequency spectrum of the signal and less to the high and low-end range  

Low frequency focus

![](https://helpx.adobe.com/content/dam/help/icons/Lower%20frequencies.png)   This option focuses processing on the low-end range of the frequency spectrum  

Applying the dereverberation effect could result in lower levels of output in comparison to the orginal audio due to reduction in dynamic range. The output gain works as a make-up gain and allows you to adjust the level of the output signal. Use the slidrer to adjust gain manually. Alternatively, you can enable automatic adjustment of gain by enablig the **Auto Gain** checkbox.  

## DeNoise effect

The **Noise Reduction/Restoration > DeNoise** effect reduces or completely removes noise from your audio file. This could be unwanted hum and hiss, fans, air conditioner or any other background noise. You can control the amount of noise reduced using a slider. The values range from 0% to 100% and control the amount of processing applied to the audio signal.

![DeNoise effect controls](https://helpx-prod.scene7.com/is/image/HelpxProd/Denoise?$png$&jpegSize=200&wid=1220 "DeNoise effect controls")

DeNoise effect controls

## Adjust Gain

Applying the DeNoise effect could reduce the  level of the output signal and make it lower than the level of original audio. Use the Gain slider to control the amount of output signal.   
Enable the Output Noise Only checkbox to listen to the removed noise in isolation.

The processing focus for DeNoise effect is similar to DeReverb effect. For more information, see [Processing focus](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#main-pars_header_696486677).

## Hiss Reduction effect (Waveform Editor only)

The Noise Reduction/Restoration > Hiss Reduction effect reduces hiss from sources such as audio cassettes, vinyl records, or microphone preamps. This effect greatly lowers the amplitude of a frequency range if it falls below an amplitude threshold called the _noise floor_. Audio in frequency ranges that are louder than the threshold remain untouched. If audio has a consistent level of background hiss, that hiss can be removed completely.

Note

To reduce other types of noise that have a wide frequency range, try the Noise Reduction effect. (See [Noise Reduction effect (Waveform Editor only)](https://helpx.adobe.com/audition/using/noise-reduction-restoration-effects.html#noise_reduction_effect_waveform_editor_only).)

![](https://helpx-prod.scene7.com/is/image/HelpxProd/ef10?$png$&jpegSize=100&wid=376 "ef10")

Using the Hiss Reduction graph to adjust the noise floor

Capture Noise Floor

Graphs an estimate of the noise floor. The estimate is used by the Hiss Reduction effect to more effectively remove only hiss while leaving regular audio untouched. This option is the most powerful feature of Hiss Reduction.

To create a graph that most accurately reflects the noise floor, click Get Noise Floor with a selection of audio that contains only hiss. Or, select an area that has the least amount of desirable audio, in addition to the least amount of high frequency information. (In the spectral display, look for an area without any activity in the top 75% of the display.)

After you capture the noise floor, you might need to lower the control points on the left (representing the lower frequencies) to make the graph as flat as possible. If music is present at any frequency, the control points around that frequency will be higher than they should be.

Graph

Represents the estimated noise floor for each frequency in the source audio, with frequency along the horizontal ruler (_x_‑axis) and the amplitude of the noise floor along the vertical ruler (_y_‑axis). This information helps you distinguish hiss from desirable audio data.

The actual value used to perform hiss reduction is a combination of the graph and the Noise Floor slider, which shifts the estimated noise floor reading up or down for fine-tuning.

Note

To disable tooltips for frequency and amplitude, click the menu button ![](https://helpx.adobe.com/content/dam/help/icons/menu.png) to the upper right of the graph, and deselect Show Tooltip Over Graph.

Scale

Determines how frequencies are arranged along the horizontal _x_‑axis:

- For finer control over low frequencies, select Logarithmic. A logarithmic scale more closely resembles how people hear sound.
    
- For detailed, high‑frequency work with evenly spaced intervals in frequency, select Linear.
    

Channel

Displays the selected audio channel in the graph.

Reset 

![](https://helpx.adobe.com/content/dam/help/icons/ResetPoint.png)

Resets the estimated noise floor. To reset the floor higher or lower, click the menu button ![](https://helpx.adobe.com/content/dam/help/icons/menu.png) to the upper right of the graph, and choose an option from the Reset Control Curve menu.

Note

For quick, general‑purpose hiss reduction, a complete noise floor graph isn’t always necessary. In many cases, you can simply reset the graph to an even level and manipulate the Noise Floor slider.

Noise Floor

Fine‑tunes the noise floor until the appropriate level of hiss reduction and quality is achieved.

Reduce By

Sets the level of hiss reduction for audio below the noise floor. With higher values (especially above 20 dB) dramatic hiss reduction can be achieved, but the remaining audio might become distorted. With lower values, not as much noise is removed, and the original audio signal stays relatively undisturbed.

Output Hiss Only

Lets you preview only hiss to determine if the effect is removing any desirable audio.

Advanced settings

Click the triangle to display these options:

Spectral Decay Rate

When audio is encountered above the estimated noise floor, determines how much audio in surrounding frequencies is assumed to follow. With low values, less audio is assumed to follow, and hiss reduction will cut more closely to the frequencies being kept.

Values of 40% to 75% work best. If the value is too high (above 90%), unnaturally long tails and reverbs might be heard. If the value is too low, background bubbly effects might be heard, and music might sound artificial.

Precision Factor

Determines the time-accuracy of hiss reduction. Typical values range from 7 to 14. Lower values might result in a few milliseconds of hiss before and after louder parts of audio. Larger values generally produce better results and slower processing speeds. Values over 20 don’t ordinarily improve quality any further.

Transition Width

Produces a slow transition in hiss reduction instead of an abrupt change. Values from 5 to 10 usually achieve good results. If the value is too high, some hiss may remain after processing. If the value is too low, background artifacts might be heard.

FFT Size

Specifies a Fast Fourier Transform size, which determines the tradeoff between frequency- and time-accuracy. In general, sizes from 2048 to 8192 work best.

Lower FFT sizes (2048 and below) result in better time response (less swooshing before cymbal hits, for example), but they can produce poorer frequency resolution, creating hollow or flanged sounds.

Higher FFT sizes (8192 and above) might cause swooshing, reverb, and drawn out background tones, but they produce very accurate frequency resolution.

Control Points

Specifies the number of points added to the graph when you click Capture Noise Floor.

Watch the [Clean up background noise and reduce hiss](https://creativecloud.adobe.com/en/learn/audition/web/noise-hiss-reduction-audition-cc) to learn how to clean up background noises and apply hiss reduction to audio with Adobe Audition.