import { useState } from "react";
import axios from "axios";
import { exportComponentAsPNG } from 'react-component-export-image';
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import React, { useRef } from 'react';

function Remove_bg() {
  const componentRef = useRef();
  const [imgData, setImgData] = useState("");
  const [imgBgColor, setimgBgColor] = useState("");
  const [ImageUpload, setImageUpload] = useState("")
  const [imgBgimage, setimgBgimage] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  async function FormSubmit() {
    fetch(`http://127.0.0.1:5000/remove_all_files`).then((result) => {
      result.json().then((resp) => {
      })
    })
    let bg_color = ""
    let bg_image = ""
    let formdata = new FormData();
    formdata.append("ImageUpload", ImageUpload);
    if (imgBgimage !== "") {
      formdata.append("imgBgimage", imgBgimage);
    } else {
      formdata.append("imgBgimage", "");
    }
    let result = await fetch("http://127.0.0.1:5000/get_image_path_remove_bg", {
      method: "POST",
      body: formdata
    });
    result = await result.json();
    if (result.ImageBackground !== "") {
      bg_image = `${result.ImageBackground}` // "https://cdn5.vectorstock.com/i/1000x1000/42/64/abstract-blue-bg-frame-vector-8704264.jpg" // `http://127.0.0.1:5000/static/${result.ImageBackground}`
    } else {
      bg_image = bg_color
    }
    if (imgBgColor !== "") {
      bg_color = imgBgColor
    } else {
      bg_color = bg_color
    }
    axios({
      url: "https://api.remove.bg/v1.0/removebg",
      method: "post",
      data: {
        image_url: `${result.ImageUpload}`, // "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg", // `http://127.0.0.1:5000/static/${result.ImageUpload}`
        bg_color: bg_color,
        bg_image_url: bg_image,
        size: "auto",
        format: "auto",
        type: "auto",
      },
      headers: {
        "X-Api-Key": "kgMorDQ8nS6npogdHE6v7ye4",
      },
      responseType: "blob",
      encoding: null,
    })
      .then((response) => {
        setImgData(URL.createObjectURL(response.data));
        setIsLoading(false);
      })
      .catch((e) => console.log(e, "something missing"));
    setIsLoading(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="mt-2 mb-5"><u><b>Remove Background from image</b></u></h1>
          <div className="form-group">
            <form encType="multipart/form-data" onSubmit={(e) => e.preventDefault()} >
              <Form.Group className="mb-3">
                <Form.Control type="file" onChange={(e) => setImageUpload(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
              </Form.Group>
              <h5>OR</h5>
              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Group className="mb-2">Set Background as image</Form.Group>
                    <Form.Control type="file" onChange={(e) => setimgBgimage(e.target.files[0])} accept="image/png, image/gif, image/jpeg" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-3">
                    <Form.Group className="mb-2">Set Background as Color</Form.Group>
                    {/* <input type="text" onChange={(e) => setimgBgColor(e.target.value)} style={{ width: "100%" }} /> */}
                    <input type="color" onChange={(e) => setimgBgColor(e.target.value)} style={{ width: "100%" }} />
                  </Form.Group>
                </div>
              </div>
              {isLoading ? (
                <p className="mt-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </p>
              ) : (
                <Button variant="primary" type="button" onClick={() => FormSubmit()}>
                  Upload
                </Button>
              )}
            </form>
          </div>
          {imgData && !isLoading && (
            <>
              <div ref={componentRef} className="mt-5">
                <img alt="bgremoved" src={imgData} />
              </div>
              <button className="btn btn-primary mt-3" onClick={() => exportComponentAsPNG(componentRef)}>Download Image</button>
            </>
          )}
        </div>
      </div>
    </div >
  );
}

export default Remove_bg;

