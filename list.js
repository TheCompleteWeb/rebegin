console.log("CONNECTED!");
var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {
    if(input === "list"){
        listTodos();
        
    }
    else if(input === "new")
    {
        var newTodo = prompt("Enter new todo");
    
        todos.push(newTodo);
    }
    else if (input === "delete"){
        var index = prompt("Enter index of todo to delete ");
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }
    var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT the APP")

function listTodos(){
    console.log("**************");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**************");
}