<todo-app>
  <error-message message={this.state.errorMessage} iserror={this.state.isError} hide={hideErrorMessage}></error-message>
  <loading-indicator loading={this.state.isLoading}></loading-indicator>
  <task-form addtask={this.handleNewTask}></task-form>
  <task-list tasks={this.state.tasks.tasks} handlecheck={handleTaskCompletionChange}></task-list>

  <script>
    // why doesnt this work?
    // var actions = require('redux/tasks').actions
    var actions = require('redux/tasks/actions')
    var store = this.opts.store

    this.on('mount',function(){
      store.dispatch(actions.loadTasks())
    })

    store.subscribe(function(){
      this.state = store.getState()
      this.update()
    }.bind(this))

    handleNewTask(task){
      store.dispatch(actions.addTask(task))
    }

    handleTaskCompletionChange(id, isComplete){
      store.dispatch(actions.toggleComplete(id,isComplete))
    }

    hideErrorMessage(){
      store.dispatch(actions.hideError())
    }
  </script>
</todo-app>
