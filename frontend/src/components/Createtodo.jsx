///it's not html it's xml
import { useState } from "react";
export function Createtodo(){
     
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange = {function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
        <input id="desc" style={{
            padding:10,
            margin:10
        }}  type="text" placeholder="description" onChange = {function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={() => {
            //not using axios library therefore stringify
            fetch("http://localhost:3001/todos", {
                method:"POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "contentType": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })
        }} > Add a todo</button>
    </div>
}

