import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header';
import Homepage from './Homepage';
import Remove_bg from './remove_bg/remove_bg';
import PhotoCollageHomepage from './photo_collage/PhotoCollageHomepage';
import UploadImage from './photo_collage/UploadImage';
import SelectedTemplate from './photo_collage/SelectedTemplate';


function Routing() {
    const template1Rows = [1, 3]
    const template2Rows = [2, 2]
    const template3Rows = [3, 1]
    return (
        <Router>
            <Route exact path="/">
                <div>
                    <Header />
                    <Homepage />
                </div>
            </Route>
            <Route exact path="/bg_remover">
                <div>
                    <Header currentPage="bg_remover" />
                    <Remove_bg />
                </div>
            </Route>
            <Route exact path="/photo_collage">
                <div>
                    <Header currentPage="photo_collage" />
                    <PhotoCollageHomepage />
                </div>
            </Route>
            <Route exact path="/photo_collage/template1">
                <div>
                    <Header currentPage="photo_collage" />
                    <UploadImage imageSequence={template1Rows} />
                </div>
            </Route>
            <Route exact path="/photo_collage/template2">
                <div>
                    <Header currentPage="photo_collage" />
                    <UploadImage imageSequence={template2Rows} />
                </div>
            </Route>
            <Route exact path="/photo_collage/template3">
                <div>
                    <Header currentPage="photo_collage" />
                    <UploadImage imageSequence={template3Rows} />
                </div>
            </Route>
            <Route exact path="/photo_collage/selected_template">
                <div>
                    <Header currentPage="photo_collage" />
                    <SelectedTemplate />
                </div>
            </Route>
        </Router>
    );
}
export default Routing;
