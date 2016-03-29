var Immutable = require('immutable')
var actionNames = require('./actionnames')

module.exports = function(state, action) {
  state = state || Immutable.fromJS({ tasks: [] })

  switch(action.type){
    case actionNames.TASKS_LOADED:
      return Object.assign({},state,{tasks:action.data})
    case actionNames.TASK_ADDED:
      return Object.assign({},state,{tasks:state.tasks.concat(action.data)})
    case actionNames.TASK_COMPLETION_CHANGED:
      var taskIndex = state.tasks.findIndex(function(task){
        return task.id == action.data.id
      })
      var newTasks = [
        ...state.tasks.slice(0,taskIndex),
        Object.assign({},state.tasks[taskIndex],{isComplete:action.data.isComplete}),
        ...state.tasks.slice(taskIndex+1)
      ]
      return Object.assign({},state,{tasks:newTasks})
    case 'TOGGLE_LOADING':
      return Object.assign({},state,{isLoading:action.data})
    case 'SHOW_ERROR':
      return Object.assign({},state,{isError:true, errorMessage:action.data})
    case 'HIDE_ERROR':
      return Object.assign({},state,{isError:false, errorMessage:''})
    default:
      return state
  }
}
