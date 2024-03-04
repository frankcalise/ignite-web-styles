const { defaults: tsjPreset } = require("ts-jest/presets")

const thirdPartyIgnorePatterns = [
  "((jest-)?react-native|@react-native(-community)?)",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "@expo-google-fonts/.*",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
  "react-clone-referenced-element",
  "react-native-code-push",
]

/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  setupFilesAfterEnv: ["./jest-setup-after-env.js"],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${thirdPartyIgnorePatterns.join("|")})`,
    "jest-runner",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.maestro/", "@react-native"],
  setupFiles: ["<rootDir>/test/setup.ts"],
  transform: {
    "^.+\\.test.tsx?$": ["babel-jest"],
  },
}
