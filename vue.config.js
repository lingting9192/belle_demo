//vue.config.js配置文件
const appData = require('./data.json')
const bookshelf = appData.bookshelf


console.log('111111',bookshelf)

const path = require('path')

module.exports = {
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app){
      app.get('/api/bookshelf',function(req,res){
        res.json({
          errno:0,
          data:bookshelf
        })
      })
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@$', path.resolve('src'))
      .set('components',path.resolve('src/components'))
      .set('common',path.resolve('src/common'))
      .set('api',path.resolve('src/api'))
      .set('pages',path.resolve('src/pages'))
  }
}