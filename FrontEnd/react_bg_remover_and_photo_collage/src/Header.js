import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header mb-5">
      <div className="fixed-top container-lg py-1" style={{ background: "#181818" }}>
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png" alt="" width="100px" style={{ float: "left" }} />
        </Link>
        <ul className="nav justify-content-end pt-2">
          {
            props.currentPage === "bg_remover" ?
              <li className="nav-item">
                <Link to="/bg_remover" style={{ color: "rgb(70, 63, 255)", textDecoration: "none", paddingRight: "10px", fontSize: "20px" }}>Background Remover</Link>
              </li>
              :
              <li className="nav-item">
                <Link to="/bg_remover" style={{ color: "white", textDecoration: "none", paddingRight: "10px", fontSize: "20px" }}>Background Remover</Link>
              </li>
          }
          {
            props.currentPage === "photo_collage" ?
              <li className="nav-item">
                <Link to="/photo_collage" style={{ color: "rgb(70, 63, 255)", textDecoration: "none", paddingLeft: "10px", fontSize: "20px" }}>Photo Collage</Link>
              </li>
              :
              <li className="nav-item">
                <Link to="/photo_collage" style={{ color: "white", textDecoration: "none", paddingLeft: "10px", fontSize: "20px" }}>Photo Collage</Link>
              </li>
          }
        </ul>
      </div>
    </div>
  );
}

export default Header;
