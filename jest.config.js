module.exports = {
  roots: ["./"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/tests/)",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/(dist|node_modules)/"]
};
