const os = require('os')

// info about current user
const user = os.userInfo()
const user_uptime = os.uptime()

console.log(os.type())