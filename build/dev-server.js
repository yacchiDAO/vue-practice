const bodyParser = require('body-parser')

module.exports = app => {
  // bodyをjsonで解釈するやつ
  app.use(bodyParser.json())

  // TODO: APIお実装
}
