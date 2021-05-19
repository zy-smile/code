// pages/todos/todos.js
Page({
  data: {
    todoList: [{
      content: "HTML",
      done: false
    }, {
      content:"CSS",
      done: true
    }, {
      content: "JavaScript",
      done: true
    }],
    inputValue: '',
    isdone: false,
    doneListNum: 0
  },
  onLoad: function() {
    this.DoneNum()
  },
  //  输入框变化
  inputChange: function(e) {
    this.setData({
      inputValue: e.detail.value,
    })
  },
  //  添加list
  addTodosList: function() {
    if (!this.data.inputValue.trim().length) return
    this.data.todoList.push({
      content: this.data.inputValue,
      done: false
    })
  var newTodo = this.data.todoList
    this.setData({
      todoList: newTodo
    })
    this.data.inputValue = ''
   this.DoneNum()
    },
    //  计算未未选中的数量
    DoneNum: function() {
      var doneList = this.data.todoList.filter(item => {
       return item.done === false
      })
      var listNum = doneList.length
      this.setData({
        doneListNum: listNum
      })
    },
    //  是否选中  图标变化
    iconChange: function(e) {
      var todoItem = this.data.todoList[e.target.dataset.id]
      todoItem.done = !todoItem.done
      var newTodo = this.data.todoList
      this.setData({
        todoList: newTodo
      })
      this.DoneNum()
    },
    //  点击全选
    allCompleted: function() {
      this.data.isdone = !this.data.isdone
      this.data.todoList.forEach(item => {
          item.done = this.data.isdone
        })
      var newTodo = this.data.todoList
      this.setData({
        todoList: newTodo
      })
      this.DoneNum()
      },
      //  点击清除已完成的任务
      clearDone: function() {
        var newTodo = this.data.todoList.filter(item => item.done === false)
        this.setData({
          todoList: newTodo
        })
      },
      //  点击移除任务
      removeList: function(e) {
        var id = e.target.dataset.id
       this.data.todoList.splice(id, 1)
       var newTodo = this.data.todoList
       this.setData({
        todoList: newTodo
       })
       this.DoneNum()
      }
})