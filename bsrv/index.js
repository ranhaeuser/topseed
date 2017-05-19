'use strict'
const express = require('express')
const bsrv = express()
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')

const C = (require('./config/Config'))
global.bsrvConfig = new C()

bsrv.use(compression())
bsrv.use(bodyParser.json())
bsrv.use(cors())

//######################## sroute
bsrv.use('/memPg', require('./scode/example/memPg'))// for dt

//linkBlg 
bsrv.use('/me/news', require('./scode/route/NewsAPI')) 

bsrv.use('/linksPg', require('./scode/route/LinksPg')) 
bsrv.use('/adminPg', require('./scode/route/AdminPg')) 
bsrv.use('/loginPg', require('./scode/route/LoginPg')) 



//###################### start the bsrv
bsrv.listen(bsrvConfig.PORT, '0.0.0.0', function() {
	console.log('App listening on port '+bsrvConfig.PORT)
	console.log('Press Ctrl+C to quit.')
})
