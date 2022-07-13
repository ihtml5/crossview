const { join } = require('path');

class UploadPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap({ name: 'UploadPlugin' }, async stats => {
      const { assets, options } = await stats.compilation;
      try {
        const files = Object.keys(assets).filter(
          file => file.endsWith('.js') || file.endsWith('.css'),
        );
        for (const fileName of files) {
          const filePath = join(options.output.path, fileName);
          // const url = await Cos.uploadCos(`crossview/microapps/assets/${fileName}`, filePath);
          console.log(`Upload success: ${filePath}`);
        }
      } catch (error) {
        console.log(`upload cdn ${error}`);
      }
    });
  }
}

module.exports = {
  UploadPlugin,
};
