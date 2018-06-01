const pg = require('./knexConfig')

function getProfiles() {
  return pg('redditTest')
    .select()
    .from('profile')
    .orderBy('id', 'desc')
}

module.exports = {
    getProfiles
}