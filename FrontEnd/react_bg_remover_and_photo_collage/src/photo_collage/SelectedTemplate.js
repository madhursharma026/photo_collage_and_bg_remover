import { ReactPhotoCollage } from "react-photo-collage";
import { exportComponentAsPNG } from 'react-component-export-image';
import { Link, useHistory } from "react-router-dom";
import React, { useRef } from 'react';


function SelectedTemplate2() {
    const componentRef = useRef();
    const history = useHistory()
    const templateRows = JSON.parse(localStorage.getItem("imageSequenceProps"))
    const oldResult = JSON.parse(localStorage.getItem("result"))

    const setting = {
        width: '100%',
        height: ['250px', '250px'],
        layout: templateRows,
        photos: [
            { source: `http://127.0.0.1:5000/static/${oldResult.ImageUpload1}` },
            { source: `http://127.0.0.1:5000/static/${oldResult.ImageUpload2}` },
            { source: `http://127.0.0.1:5000/static/${oldResult.ImageUpload3}` },
            { source: `http://127.0.0.1:5000/static/${oldResult.ImageUpload4}` }
        ],
        showNumOfRemainingPhotos: true
    };

    return (
        <div className="container-md">
            <h1 className="text-center mb-5"><u><b>Photo Collage</b></u></h1>
            <div ref={componentRef} style={{background:"black", border:"20px solid black"}}>
                <ReactPhotoCollage {...setting} />
            </div>
            <div className="row mt-5">
                <div className="col-6" style={{ textAlign: "right" }}>
                    <button className="btn btn-primary" onClick={() => history.push('./')}>Back TO Homepage</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => exportComponentAsPNG(componentRef)}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default SelectedTemplate2;
