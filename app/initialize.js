var riot = require('riot')
var redux = require('redux')
var thunk = require('redux-thunk')
var router = require('riot-redux-router-immutable')

require('./tags/todo-app')
require('./tags/task-list')
require('./tags/loading-indicator')
require('./tags/task-form')
require('./tags/error-message')

var reducer = require('./redux/reducer')

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose
var createStoreWithMiddleware = composeEnhancers(
  redux.applyMiddleware(router.middleware.factory('')),
  redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer)

document.addEventListener('DOMContentLoaded', function () {
  riot.mount('todo-app', {store: reduxStore})
})
