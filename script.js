var todos = ['item1'];
     todos.push('item2');
     console.log(todos);
 
     todos.push('item3', 'item4', 'item5');
     console.log(todos);
 
     todos[0] = 'item1-done';
     console.log(todos);
 
     todos.splice(0, 1);
     console.log(todos);


var todos = ['item1', ' item2', ' item3'];
 function displayTodos() {
     // document.write('My Todos: ', todos);
     console.log('My Todos: ', todos);
 }
 function addTodo(todo) {
     todos.push(todo);
     displayTodos();
 }
 function changeTodo(i, newItem) {  //i == position
     todos[i] = newItem;
     displayTodos();
 }
 function runThreeTimes() {
     for (var k=0; k<3; k) {
         displayTodos();
     }
 }
  function deleteTodo(position) {
     todos.splice(position, 1);
     displayTodos();
 }
  

 
 var todoList = {
   todos: ['item1', 'item2', 'item3'],
 
   //These little functions are actually methods! methods = functions inside objects
   displayTodos: function() {
     console.log('My Todos: ', this.todos);
   },
   addTodo: function(newItem) {
     this.todos.push(newItem);  //'this' == our object todoList
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
      <title>Version 4 
  var todoList = {
   todos: [],
   displayTodos: function() {
     console.log('My Todos: ', this.todos);
   },
 
   //here we put object inside our main object b/c our todo should be 'item1, completed'
   addTodo: function(todoText) {
     this.todos.push({
       todoText: todoText,
       completed: false //because the value is either yes or no
     });
     this.displayTodos();
   },
   changeTodo: function(position, todoText) {
     this.todos[position].todoText = todoText;
     this.displayTodos();
   },
   deleteTodo: function(position) {
     this.todos.splice(position, 1);
     this.displayTodos();
   },
   toggleCompleted: function(position) {
     // this.todos[position].completed = true; //this is one way to do it BUT it won't toggle back!
     var todo = this.todos[position];
     todo.completed = !todo.completed;
     this.displayTodos();
   }
 };
 

//80  Version5
var testArray = ['Sophie', 'Ninja', 'Elijah'];
     // Instead of using i < 3, use testArray.length b/c it's dynamic so it will change when our array changes:
     for (var i = 0; i < testArray.length; i) {
         console.log(testArray[i]);
         // we can also just print the value of i to show that it's a real variable:
         console.log(i);
     }
 
var todoList = {
         todos: [],
 
         // we added loop to display all todoText in our array:
         displayTodos: function() {
             // we introduced logic:
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
 
         // we added loop to display all todoText in our array:
         displayTodos: function() {
             // we introduced logic:
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
         },
 
         toggleAll: function() {
 
             // Case 1: if all true, make them all false:
             // # of completed todos = # of all todos
 
             // Since we need to compare them, let's create vars:
             var allTodos = this.todos.length;
             var completedTodos = 0;
 
             // Get # of completed todos:
             for (var i=0; i < allTodos; i) {
                 if (this.todos[i].completed === true) {
                     completedTodos;
                 }
             }
 
             // Case 1: if everything is true, make them all false:
             if (completedTodos === allTodos) {
                 // make everthing false:
                 for (var i=0; i < allTodos; i) {
                     this.todos[i].completed = false;
                 }
             // this.displayTodos(); -- we don't need display for every case - just in the end
             } else {
 
 
 
             // Case 2:  If some are true, make them all true:
 
                 // even if only 1 is true, so we need to find the 1st true:
                 for (var k=0; k < allTodos; k) {
                     this.todos[k].completed = true;
                 }
             }
             // after the case logic, it will display the outcome:
             this.displayTodos();
         }
 
     };
 
 todoList.addTodo('skydiving');
 todoList.addTodo('fishing');
 todoList.addTodo('hunting');
 todoList.toggleCompleted(0);
 todoList.toggleCompleted(1);
 todoList.toggleCompleted(2);
 todoList.toggleAll();
