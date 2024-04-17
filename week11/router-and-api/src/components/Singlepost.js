import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Singlepost () {
    const { slug } = useParams();
    const [ post, setPost ] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + slug)
            .then((response) => {
                setPost(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 text-white bg-warning">
                    <h4> { post.id } </h4>
                    <h2>{ post.title }  </h2>
                    <p> { post.body } </p>
                </div>
            </div>
        </div>
    )
}

export default Singlepost;