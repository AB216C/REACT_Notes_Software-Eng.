
// this importing method works but isn't the preferred way
// imports a lot of extra things that make the App less efficient
import { Container, Carousel, Row, Col } from 'react-bootstrap';


const HomePage = () => {

  return(

    <Container>
      <Row>
        <Col>
          <h3>Hi, welcome to the 🏠 page!</h3>
          <p>This app will let you see all of the very important fake users JSONPlaceholder gives us.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1200/600?random=1"
                alt="First slide"
              />
              <Carousel.Caption style={{ textShadow: '2px 2px black' }}>
                <h3>First Slide</h3>
                <p>Description for the first slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1200/600?random=2"
                alt="Second slide"
              />
              <Carousel.Caption style={{ textShadow: '2px 2px black' }}>
                <h3>Second Slide</h3>
                <p>Description for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1200/600?random=3"
                alt="Third slide"
              />
              <Carousel.Caption style={{ textShadow: '2px 2px black' }}>
                <h3>Third Slide</h3>
                <p>Description for the third slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )

}

export default HomePage