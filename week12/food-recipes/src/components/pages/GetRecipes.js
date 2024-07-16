import NavBar from "../NavBar";
import Footer from "../Footer";
import Trends from "../Trends";

export default function GetRecipes() {
    return (
        <div>
            <NavBar /> 
            <div class="popular">
                <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-6 head">
                        <h2 class="title">Get all your Food recipes</h2>
                        <p class="text">Choose your food and we' ll provide you the recipes</p>
                    </div>
                </div> 
            <Trends />
                <div class="row bg-primar">
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/01.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/04.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/03.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/02.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/05.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                    <div class="col-md-4 listing">
                        <div class="card shadow-sm">
                            <img src="./images/06.jpg" class="card-img-top" alt="..." />
                            <h3 class="title">Burgers & Fries</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Footer />
    </div>
    )
}