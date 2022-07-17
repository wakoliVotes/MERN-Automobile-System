import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../Components/img/image.jpg';

class CarsList extends React.Component {
    constructor(props) {
        super(props)
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            error: null,
            cars: []
        }
    };
    componentDidMount() {
        console.log('componentDidMount');
        fetch("/cars")
            .then(res => res.json())
            .then(
                (cars) => {
                    console.log('Result');
                    this.setState({
                        cars: cars
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        error
                    });
                })
    }
    handleFilter() {
        console.log('results are filtered');
        fetch("/cars/older")
            .then(res => res.json())
            .then(
                (cars) => {
                    console.log('Result');
                    this.setState({
                        cars: cars
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        error
                    });
                })
    }
    render() {
        const { cars } = this.state;
        let carTableContent = cars.map(car => {
            return (
                <div className='cardpart'>
                    <Card style={{ width: '18rem' }} >
                    <Card.Title key={car.registration}>
                        <Card.Img variant="top" src={image} alt='car image' style={{paddingBottom: '10px'}}/>
                        <Card.Text><span style={{color: 'red'}}>Regn No:</span> {car.registration}</Card.Text>
                        <Card.Text><span style={{color: 'blue'}}>Make:</span> {car.make}</Card.Text>
                        <Card.Text><span style={{color: 'blue'}}>Model:</span> {car.model}</Card.Text>
                        <Card.Text><span style={{color: 'blue'}}>Year:</span> {car.year}</Card.Text>
                        <Card.Text><span style={{color: 'blue'}}>Owner:</span> {car.owner}</Card.Text>
                    </Card.Title>
                    </Card>
                </div>
            )
        });
        return (
            <>
                <div className='carCollection'>
                        <h1>Vehicle Collection</h1>
                    <div className="cardpart">                                                    
                            <div style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap', lineHeight: '2pt'}}>{carTableContent}</div>
                        <button className="filterButton" onClick={this.handleFilter}>Show Cars Before 2015 Only</button>
                    </div>
                </div>
            </>
        );
    }
}
export default CarsList;