const app = require('./app')
const debug = require('debug')('index')

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    // debug(`Connected on port ${port}`)
})