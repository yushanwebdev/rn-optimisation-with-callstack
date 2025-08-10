# React Native Performance Optimization Lab 🚀

An experimental React Native application created for hands-on learning while following **[The Ultimate Guide to React Native Optimization by Callstack](https://www.callstack.com/ebooks/the-ultimate-guide-to-react-native-optimization)**. This lab environment allows you to practice and experiment with the performance optimization techniques and profiling strategies covered in Callstack's official guide.

## Getting Started

### Prerequisites

- Bun
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository and install dependencies:

   ```bash
   bun install
   ```

2. Prebuild the native projects:

   ```bash
   bun expo prebuild
   ```

3. Start the development server:

   ```bash
   bun start
   ```

4. Run on your preferred platform:
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app for physical device

## Project Structure

The app uses [file-based routing](https://docs.expo.dev/router/introduction) with the following key directories:

- **app/**: Main application screens and navigation
- **components/**: Reusable React components
- **hooks/**: Custom React hooks for performance optimization
- **utils/**: Utility functions and helpers

## Development Tools

- **Flashlight**: Performance measurement and monitoring
- **React DevTools**: Component profiling and debugging

## Resources

### Performance Optimization

- [React Native Performance Guide by Callstack](https://www.callstack.com/ebooks/the-ultimate-guide-to-react-native-optimization)

### General Documentation

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

## Contributing

Contributions are welcome! Please feel free to submit pull requests with additional optimization examples or performance improvements.
