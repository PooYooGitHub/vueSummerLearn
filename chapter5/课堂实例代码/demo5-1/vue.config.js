var sites = require('./data/sites.json');
module.exports = {
  outputDir:process.env.outputDir,
  transpileDependencies: [
    'vuetify'
  ],
    devServer:{
       port:3000,
        open:true,
        before:function (app) {
            app.get('/test/sites',function (req,res) {
                res.json(sites);
            })
        }

    }
}
