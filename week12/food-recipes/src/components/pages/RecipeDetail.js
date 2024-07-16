import NavBar from "../NavBar";
import Footer from "../Footer";

function RecipeDetail() {
  return (
    <div className="App">
      <NavBar />
    
        <div className="bg-danger py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-6 bg-primary head">
                        <h2 className="title">Burgers & Fries</h2>
                        <p className="text"> choose your food and we'll provide you the recipes</p>

                        <div className="bg-warning">
                            <p>lorem ipsu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default RecipeDetail;