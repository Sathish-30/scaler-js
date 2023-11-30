// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
// Use any random API that you want
const getData = () : void => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(
            (response : Response) => response.json()
        )
        .then(
            (toDoListArray) => console.log(toDoListArray)
        );
}

getData();