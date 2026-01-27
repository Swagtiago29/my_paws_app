import "dotenv/config";

console.log(
  "ANDROID MAPS KEY:",
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_ANDROID_KEY
);

export default {
  expo: {
    name: "myPaws",
    slug: "myPaws",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "mypaws",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    android: {
      package: "com.mypaws.mypawsapp",
      adaptiveIcon: {
        backgroundColor: "#3C6627",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_ANDROID_KEY,
        },
      },
    },

    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
