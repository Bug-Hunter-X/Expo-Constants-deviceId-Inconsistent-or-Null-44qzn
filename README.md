# Expo Constants.deviceId Inconsistency Bug

This repository demonstrates a bug where `Constants.deviceId` in the Expo SDK returns inconsistent or null values, making it unsuitable for reliable device identification.

## Bug Description

The `Constants.deviceId` property, intended to provide a unique identifier for a device, can return `null` or different values across multiple app launches or even during the same session. This inconsistency breaks applications relying on a consistent device ID for tracking users or performing other device-specific tasks.

## Reproduction Steps

1. Clone this repository.
2. Run the `bug.js` example using Expo Go or by building the project.
3. Observe the output of `Constants.deviceId`. Note that it may be `null` or change unexpectedly.

## Solution

The `bugSolution.js` file provides a potential solution using alternative methods to obtain a reliable device identifier. This involves using other available APIs such as the device's unique ID provided by the device's operating system directly and persisting it locally for consistency.