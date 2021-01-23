module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "react-hot-loader/babel",
    ["styled-components", { fileName: false }],
    "@babel/plugin-proposal-object-rest-spread",
  ],
};
