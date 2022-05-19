module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devServer: {
    module: {
      rules: [{ test: /\.jsx?$/, use: "babel-loader" }],
    },
    exclude: /node_modules/,
    server: {
      type: "https",
      options: {
        port: 8080,
        key: "./localhost-key.pem",
        cert: "localhost.pem",
        pfx: "./localhost.pfx",
        passphrase: "123456",
        requestCert: true,
        presets: ["react"],
      },
    },
  },
};

