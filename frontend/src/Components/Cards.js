import React from 'react'
import { Card } from 'react-bootstrap';

const Cards = () => {
    return (
        <div className='text-center' id='socials' >
            <h5>Our Socials</h5>
            <div className='socials'>
                <Card style={{ width: '12rem', margin: '6px' }} >                    
                    <Card.Body>
                        <Card.Title>Facebook</Card.Title>
                        <Card.Text>Connect and network to experience our services</Card.Text>
                    </Card.Body>
                </Card>           
                <Card style={{ width: '12rem' , margin: '6px'}} >
                    <Card.Body>
                        <Card.Title>Twitter</Card.Title>
                        <Card.Text>
                            Share and view the amazing Tweets from others
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem', margin: '6px' }} >                    
                    <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                            Get a professional experience with our experts
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem', margin: '6px' }} >                    
                    <Card.Body>
                        <Card.Title>Medium</Card.Title>
                        <Card.Text>
                            Read more on a wider topic range for growth
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem', margin: '6px' }} >                    
                    <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                        <Card.Text>
                            Get to see our code base, and underlying technicals
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Cards