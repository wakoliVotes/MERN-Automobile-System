import React from 'react';

class CarsList extends React.Component {
    constructor(props){
        super(props)
        this.handleFilter = this.handleFilter.bind(this);
        this.state={
            error: null,
            cars:[]
        }
    };

componentDidMount(){
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

handleFilter(){
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

render(){
    const { cars } = this.state;
        let carTableContent = cars.map(car => {
            return(
            <tr key={car.registration}>
                <td>{car.image}</td>
                <td>{car.registration}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.owner}</td>
                
        </tr>)});
return(
       <div className="table-container">
           <h1>Kings Autos Database:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Car Image</th>
                        <th>Registration</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {carTableContent}
                </tbody>
            </table>
            <button className="filterButton" onClick={this.handleFilter}>Older Cars Only</button>
       </div>
    );
        
        }
}
export default CarsList;