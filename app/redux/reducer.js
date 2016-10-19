var redux = require('redux')
var router = require('riot-redux-router-immutable')

var tasks = require('./tasks/index')

module.exports = redux.combineReducers({
  router: router.reducer,
  tasks: tasks.reducer
})
