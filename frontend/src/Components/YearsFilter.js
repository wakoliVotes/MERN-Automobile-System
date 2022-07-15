import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const fetch = require('isomorphic-fetch')

class YearsFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { distinctYears: [] }
    }

    // get the data after the component mounts
    componentDidMount() {
        fetch("http://localhost:5000/cars/years")
            .then(res => res.text())
            .then(res => this.setState({ distinctYears: res }))
            .catch(err => err)
    }

    render() {
        // get distinctYears from state
        let distinctYears = this.state.distinctYears
        distinctYears = distinctYears.toString().split(",")
        let filterURL = window.location.href.toLowerCase().indexOf("bulkupdate") !== -1 ? "/cars/bulkupdate/older/" : "/cars/older/"
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Show Cars from...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {distinctYears.map((item, index, state) => {
                            let numericYearValue = item.replace("[", "")
                            numericYearValue = numericYearValue.replace("]", "")
                            const URL = `${filterURL}${numericYearValue}`
                            return (
                                <Dropdown.Item key={numericYearValue} href={URL}>{numericYearValue} and before</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}
export default YearsFilter