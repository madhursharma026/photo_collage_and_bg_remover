import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
    width: '100%',
    height: ['250px', '250px'],
    layout: [3, 1],
    photos: [
        { source: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg' },
        { source: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg' },
        { source: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg' },
        { source: 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg' }
    ],
    showNumOfRemainingPhotos: true
};

function Template1() {
    return (
        <ReactPhotoCollage {...setting} />
    );
}

export default Template1;
