import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Trends () {
    const [ recipes, setRecipes ] = useState ([]);

    useEffect(() => {

        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=a794a712929049e390e8e0998d51af2e")
            .then((response) => {
                console.log(response.data);
                setRecipes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
     },   [])
      
    return (
         <div classNameName="popular">
            <div classNameName="container">
                <div className="row">
                    <div className="col-12 col-xl-6 head">
                        <h2 className="title">Trending food in your city</h2>
                        <p className="text">Choose what you want and we deliver it to you</p>
                    </div>
                </div> 

                <div className="row bg-primar">
                    <div className="col-md-4 listing">
                        <Link to={ '/recipes/burger-fries'} >
                        <div className="card shadow-sm">
                            <img src="./images/01.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4 listing">
                        <div className="card shadow-sm">
                            <img src="./images/04.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div className="col-md-4 listing">
                        <div className="card shadow-sm">
                            <img src="./images/03.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div className="col-md-4 listing">
                        <div className="card shadow-sm">
                            <img src="./images/02.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div className="col-md-4 listing">
                        <div className="card shadow-sm">
                            <img src="./images/05.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div className="col-md-4 listing">
                        <div className="card shadow-sm">
                            <img src="./images/06.jpg" className="card-img-top" alt="..." />
                            <h3 className="title">Burgers & Fries</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}