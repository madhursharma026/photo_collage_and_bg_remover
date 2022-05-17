import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { Modal, Button, Form } from "react-bootstrap";
import { ReactPhotoCollage } from "react-photo-collage";

function UploadImage(props) {
    const history = useHistory()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const imageSequenceProps = (props.imageSequence)
    const [result, Setresult] = useState("")
    const [ImageUpload1, SetImageUpload1] = useState("")
    const [ImageUpload2, SetImageUpload2] = useState("")
    const [ImageUpload3, SetImageUpload3] = useState("")
    const [ImageUpload4, SetImageUpload4] = useState("")
    localStorage.setItem("imageSequenceProps", JSON.stringify(imageSequenceProps))

    function BackPage() {
        history.push('./')
    }

    async function FormSubmit(e) {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("ImageUpload1", ImageUpload1);
        formdata.append("ImageUpload2", ImageUpload2);
        formdata.append("ImageUpload3", ImageUpload3);
        formdata.append("ImageUpload4", ImageUpload4);
        let result = await fetch("http://127.0.0.1:5000/get_image_path_photo_collage", {
            method: "POST",
            body: formdata
        });
        result = await result.json();
        localStorage.setItem("result", JSON.stringify(result))
        Setresult(JSON.parse(localStorage.getItem("result")))
        handleClose()
        history.push('./selected_template')
    }

    const setting = {
        width: '100%',
        height: ['250px', '250px'],
        layout: imageSequenceProps,
        photos: [
            { source: `https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg` },
            { source: `https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg` },
            { source: `https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg` },
            { source: `https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg` }
        ],
        showNumOfRemainingPhotos: true
    };
    return (
        <div className="container-md">
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Upload 5 images</Modal.Title>
                </Modal.Header>
                <Form onSubmit={FormSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Group className="mb-3">
                                <Form.Label>Image 1</Form.Label>
                                <Form.Control type="file" onChange={(e) => SetImageUpload1(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image 2</Form.Label>
                                <Form.Control type="file" onChange={(e) => SetImageUpload2(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image 3</Form.Label>
                                <Form.Control type="file" onChange={(e) => SetImageUpload3(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image 4</Form.Label>
                                <Form.Control type="file" onChange={(e) => SetImageUpload4(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required />
                            </Form.Group>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => BackPage()}>
                            Back
                        </Button>
                        <Button variant="primary" type="submit">
                            Upload
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <h1 className="text-center mb-5"><u><b>Photo Collage</b></u></h1>
            <ReactPhotoCollage {...setting} />
        </div>
    );
}

export default UploadImage;
