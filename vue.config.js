module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/local/templates/megratec/" : "/",
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
