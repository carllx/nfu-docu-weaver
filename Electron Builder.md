(-- `Multi Platform Build - electron-builder` [electron](https://www.electron.build/multi-platform-build.html))
- Electron-builder can be used to build Electron apps for multiple platforms, including macOS, Windows, and Linux.
- If your app has native dependencies, you will need to build it on the target platform unless prebuilt binaries are available.
- [[macOS Code Signing(Electron)]] can only be done on macOS.
- You can use the electron-builder CLI to specify the platforms and architectures you want to build for.
- There are sample .travis.yml and appveyor.yml files available that show how to build Electron apps for multiple platforms using Travis and AppVeyor.
- You can also use Docker to build Electron apps for multiple platforms.
- There are a number of Docker images available that contain the required system dependencies for building Electron apps.
