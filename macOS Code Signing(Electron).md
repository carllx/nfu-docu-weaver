[[dev]]
To complete macOS code signing for Electron Builder, you can follow these step-by-step instructions based on the provided articles:

1. Sign up for the Apple Developer Program:
   - Enroll in the Apple Developer Program by visiting the Apple Developer website at [https://developer.apple.com/programs/](https://developer.apple.com/programs/).
   - Complete the enrollment and verification process to obtain a developer account on [developer.apple.com](https://developer.apple.com/).

2. Create Apple Developer ID and Apple Developer Application certificates:
   - Sign in to your developer account on [developer.apple.com](https://developer.apple.com/).
   - Go to "Certificates, IDs, & Profiles" and create two certificates: one of Developer ID Application type and one of Developer ID Installer type.
   - Download these certificates and install them in your keychain.

3. Install Electron Builder:
   - Open your project directory and run the following command to install Electron Builder: `npm install electron-builder --save-dev`.

4. Configure electron-builder:
   - Open your project's `package.json` file.
   - Add the necessary configuration for electron-builder. You can find an example configuration in the electron-builder documentation.

5. Build and sign your Electron app:
   - Once the certificates are installed in your keychain, electron-builder will automatically sign your app during the build process.
   - Run the build command for your project, such as `npm run build` or `electron-builder build --mac`.
   - Electron Builder will detect the certificates in your keychain and sign the app.

6. Notarize the app:
   - After signing the app, you need to notarize it with Apple.
   - Create a script to notarize the app following the instructions provided in this tutorial: [https://www.rocketride.io/blog/macos-code-sign-notarize-electron-app](https://www.rocketride.io/blog/macos-code-sign-notarize-electron-app).

7. Verify the app:
   - After notarizing the app, you can verify if it has been signed correctly.
   - Open the terminal and run the following command, replacing `/path/to/your/app.app` with the actual path to your app: `codesign --verify --verbose /path/to/your/app.app`.
   - If the app is correctly signed, you should see a message saying "satisfies its Designated Requirement."

By following these steps, you should have successfully completed the macOS code signing process for your Electron Builder project.

Citations:
- [x] [How I sign and notarize my Electron app on MacOS - funtoimagine](https://www.funtoimagine.com/blog/electron-mac-sign-and-notarize/) ✅ 2024-01-08
- [x] [MacOS: How to code sign and notarize an electron app in 2022? - rocketride.io](https://www.rocketride.io/blog/macos-code-sign-notarize-electron-app) ✅ 2024-01-08
- [x] [Code Signing - electron-builder](https://www.electron.build/code-signing.html) ✅ 2024-01-08
- [x] [Code Signing | Electron](https://www.electronjs.org/docs/latest/tutorial/code-signing) ✅ 2024-01-08