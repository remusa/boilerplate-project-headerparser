// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors')
app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

// your first API endpoint...
app.get('/api/hello', function(req, res) {
      res.json({ greeting: 'hello API' })
})

// get IP address API endpoint
app.get('/api/whoami', (req, res) => {
      const ip = req.headers['x-forwarded-for']
      const language = req.header('Accept-Language')
      const software = req.header('User-Agent')

      const obj = {
        ipaddress: `${ip}`,
            language: `${language}`,
        software: `${software}`,
      }

      res.json(obj)
})

// listen for requests :)
const PORT = process.env.PORT || 3000
const listener = app.listen(PORT, () => {
      console.log('Your app is listening on port ' + listener.address().port)
})
