import { useEffect } from "react";
import { Link } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";


function PhotoCollageHomepage() {
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/remove_all_files`).then((result) => {
            result.json().then((resp) => {
            })
        })
    }, [])
    localStorage.removeItem('imageSequenceProps')
    return (
        <div className="container-lg">
            <h1 className="text-center"><u><b>Photo Collage</b></u></h1>
            <h3 className="text-center"><u><b>Templates</b></u></h3>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mt-3">
                    <Link to="/photo_collage/template1"><Template1 /></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-3">
                    <Link to="/photo_collage/template2"><Template2 /></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-3">
                    <Link to="/photo_collage/template3"><Template3 /></Link>
                </div>
            </div>
        </div>
    );
}

export default PhotoCollageHomepage;
