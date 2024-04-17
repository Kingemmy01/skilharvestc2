import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Posts () {

    const [ posts, setPosts] = useState([]);

    const baseURL = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
       
            axios.get(baseURL)
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch ((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div>
            <h1>Here is my Blog Posts</h1>
            {
                posts.map((post) => {
                    return (
                        <div className='row'>
                        <div key={post.id} className='mb-3 bg-primary'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link to={`/posts/${post.id}`} className='btn btn-success'> Read More </Link>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Posts;