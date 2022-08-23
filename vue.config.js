module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'To Do List';
        return args;
      });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/variables.scss";
          @import "~@/assets/mixins.scss";
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
    ]
  }
}