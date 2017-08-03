var todos = ['item1', ' item2', ' item3'];

function displayTodos() {
  // document.write('My Todos: ', todos);
  console.log('My Todos: ', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}


todos[i] = newItem;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}


var todoList = {
  todos: ['item1', 'item2', 'item3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(newItem) {
    this.todos.push(newItem);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

todoList.deleteTodo();
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  }
  };

  
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  }
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
  toggleCompleted: function(position) {
     var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  
};

var testArray = ['Sophie', 'Ninja', 'Elijah'];
for (var i = 0; i < testArray.length; i) {
  console.log(testArray[i]);
    console.log(i);
}

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log("My Todos: ");
      for (var i = 0; i < this.todos.length; i) {
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

};

document.write(todoList);
todoList.addTodo('skydiving');
document.write(todoList.todos[0].todoText);

var todoList = {
  todos: [],
  displayTodos: function() {
   
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log("My Todos: ");
      for (var i = 0; i < this.todos.length; i) {
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    debugger;
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {

    var allTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < allTodos; i) {
      if (this.todos[i].completed === true) {
        completedTodos;
      }
    }

    if (completedTodos === allTodos) {

      for (var i = 0; i < allTodos; i) {
        this.todos[i].completed = false;
      }

    } else {

      for (var k = 0; k < allTodos; k) {
        this.todos[k].completed = true;
      }
    }
    this.displayTodos();
  }

};