module.exports = {
  entry: { bundle: "./src/index.ts" }, //インポート先のTSファイルの指定。エントリーポイント。
  output: {
    path: `${__dirname}/dist`, //{__dirname} はプロジェクトのルートディレクトリを指す
    filename: "[name].js",
  },
  mode: "development",
  //mode: "production",
  resolve: {
    extensions: [".ts", ".js"], //ソース内の拡張子を自動補完
  },
  //ローカルの開発サーバーの設定
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true, //自動でHTMLを開く
  },
  module: {
    rules: [
      {
        test: /\.ts$/, //.tsだけコンパイルしてね
        loader: "ts-loader", //その時はts-loaderを使ってね
      },
    ],
  },
}
