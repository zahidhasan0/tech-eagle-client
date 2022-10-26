import React from 'react';

import { Card } from 'react-bootstrap';


const Home = () => {
    return (
        <Card className="bg-dark text-primary border-0">
      <div>
      <Card.Img  className='50vh ' src="https://img.freepik.com/premium-vector/blue-white-abstract-technology-background-technology-design-white-blue-circle-background_387612-130.jpg?w=2000" />
      </div>
      <Card.ImgOverlay className='w-50 mt-5 text-dark fw-semibold' >
        <Card.Title className='fs-2 fw-bold'>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <button className='btn border-0 btn-primary'> Get Started</button>
      </Card.ImgOverlay>
    </Card>
    );
};

export default Home;