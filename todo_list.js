let todos = []
let option = prompt("Enter option")

while(option !== "quit"){
    if(option === "new"){
        let todo = prompt("Enter the todo")
        todos.push(todo)
        option = prompt("Enter option")
    } else if (option === "list") {
        for(let todo of todos){
            console.log(todo)
        }
        option = prompt("Enter option")
    } else if(option === "delete"){
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        let delete_todo = prompt("Enter a todo to delete")
        todos.splice(delete_todo, 1)
        option = prompt("Enter option")
    }
}
console.log("Quit successfully")