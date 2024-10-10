import { useEffect, useState } from "react"

function Post(){
    const [post, setPost]=useState({id:1, title:"tarefa", completed:true})
    const [loading, setLoading]=useState(true)

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setLoading(false);
            return setPost(json);
        });
    }, []);

    return (
        <div>
            <h1>Post</h1>
            {loading ? <p>Carregando</p>: (
            <ul>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.completed}</li>
            </ul>
            )}
        </div>
    )
}

export default Post