#!/bin/bash

# Performance test for the profiling screen
# Tests navigation to profiling screen and interaction with counters

if [ "$1" = "android" ]; then
  # Launch the app
  adb shell monkey -p com.yushan_blott.rnoptimisationwithcallstack -c android.intent.category.LAUNCHER 1
  sleep 3
  
  # Navigate to Profiling tab (assuming it's the second tab)
  # Adjust coordinates based on your device
  adb shell input tap 540 1800
  sleep 2
  
  # Interact with counters - simulate multiple taps
  # These coordinates should be adjusted for your specific device
  for i in {1..10}; do
    adb shell input tap 540 500  # First counter
    sleep 0.5
    adb shell input tap 540 700  # Second counter
    sleep 0.5
  done
  
elif [ "$1" = "ios" ]; then
  # Launch the app
  xcrun simctl launch booted com.yushan-blott.rnoptimisationwithcallstack
  sleep 3
  
  # For iOS, you would typically use a UI testing framework
  # This is a placeholder - consider using Maestro or Detox for real tests
  echo "iOS UI automation requires a proper testing framework"
fi