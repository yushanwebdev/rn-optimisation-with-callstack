module.exports = {
  // Android configuration
  android: {
    bundleId: "com.yushan_blott.rnoptimisationwithcallstack",
    appActivity: ".MainActivity",
  },
  
  // iOS configuration
  ios: {
    bundleId: "com.yushan-blott.rnoptimisationwithcallstack",
  },
  
  // Test configuration
  test: {
    // Duration to measure after test starts (in ms)
    duration: 10000,
    
    // Number of iterations to run
    iterations: 10,
    
    // Warm up iterations before actual measurement
    warmupIterations: 2,
  },
  
  // Performance metrics to track
  metrics: {
    cpu: true,
    memory: true,
    fps: true,
    startup: true,
  },
  
  // Report output configuration
  report: {
    outputDir: "./flashlight-results",
    format: ["json", "html"],
  },
};