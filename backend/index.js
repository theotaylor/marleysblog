const app = require('./app') // The Express app
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(3005, () => {
  logger.info(`Server running on port 3005`)
})