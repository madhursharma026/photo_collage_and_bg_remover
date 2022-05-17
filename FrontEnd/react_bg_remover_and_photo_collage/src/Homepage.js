import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage container-lg text-center">
            <div style={{ marginTop: "48vh" }}>
                <Link to="/bg_remover" className="btn btn-primary" role="button" style={{ fontSize: "30px" }}>Background Remover</Link><br /><br />
                <Link to="/photo_collage" className="btn btn-primary" role="button" style={{ fontSize: "30px" }}>Photo Collage</Link>
            </div>
        </div>
    );
}

export default Homepage;
