import Carousel from 'react-bootstrap/Carousel';
import game from '../Asserts/game-changer.jpg'
import anime from '../Asserts/Anime-Kakashi-Wallpaper-HD-105646.jpg'
import demon from '../Asserts/demon-slayer-2560x1080-20155.jpg'



function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark" style={{ height:' 80vh'}}>
            <Carousel.Item classname="text-white">
                <img
                    className="d-block w-100"
                    src={anime}
                    alt="First slide" style={{ height: ' 80vh' }}
                />
                <Carousel.Caption classname="text-white" style={{color:'white'}}>
                    <h3>Naruto</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className='btn btn-danger text-dark'>view more</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={game}
                    alt="Second slide" style={{ height: ' 80vh' }}
                />
                <Carousel.Caption style={{ color: 'white' }}>
                    <h3>Game changer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='btn btn-warning '>view more</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={demon}
                    alt="Third slide" style={{ height: ' 80vh' }}     
                />
                <Carousel.Caption style={{ color: 'white' }}    >
                    <h5> DEMON  LAYER</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <button className='btn btn-primary '>view more</button>                                                                                                                                                                                                                                                                                                                                                                                                         
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

export default DarkVariantExample;