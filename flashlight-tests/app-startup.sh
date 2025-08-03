#!/bin/bash

# Basic app startup test for Flashlight
# This script launches the app and waits for it to be ready

# For Android
if [ "$1" = "android" ]; then
  # Launch the app
  adb shell monkey -p com.yushan_blott.rnoptimisationwithcallstack -c android.intent.category.LAUNCHER 1
  
  # Wait for app to fully load
  sleep 5
  
# For iOS
elif [ "$1" = "ios" ]; then
  # Launch the app using xcrun
  xcrun simctl launch booted com.yushan-blott.rnoptimisationwithcallstack
  
  # Wait for app to fully load
  sleep 5
fi