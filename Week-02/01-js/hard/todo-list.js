/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.lis_todo = {};
    this.curr = 1;
  }
  
  add(todo){
    this.lis_todo[this.curr] = todo;
    this.curr+=1;
  }

  remove(indexOfTodo){
    if(this.lis_todo[indexOfTodo]){
      this.lis_todo[indexOfTodo] ="";
    }
  }
  update(index,updatedTodo){
    if(this.lis_todo[index]){
      this.lis_todo[index] = updatedTodo;
    }
  }
  getAll(){
    return this.lis_todo;
  }
  get(indexOfTodo){
    return this.lis_todo[indexOfTodo];
  }
  clear(){
    this.lis_todo = {};
    this.curr =0;
  }
}

module.exports = Todo;