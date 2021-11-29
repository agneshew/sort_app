import React from "react";


class SortingOrder extends React.Component {

    state = {
            order: '',
            numbers: [],
        sortedNumbers: []

    }

    handleSort = (event) => {
        this.setState({
            order: event.target.value
        })
    };

    handleListOfNumbers = (event) => {
        this.setState({
            numbers: event.target.value
        })
    };


    handleClick = (event) => {
        const {order, numbers } = this.state
        const sortDto = {
            order,
            numbers,
        }
        // Simple POST request with a JSON body using fetch
        console.log(sortDto);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sortDto)
        };
        fetch('https://localhost:8080/numbers/sort-command', requestOptions)
            .then(response => response.json())
            .then(data => {console.log(data)});
    }



render() {
    return (
        <div>
            <label className="App">
                <h2 style={{color: "blue"}}>
                    Sorting App
                </h2>
                <p>&nbsp;</p>
                <label htmlFor='numbers'>Enter the numbers to sort :)
                    <input type='text' placeholder='numbers' id='numbers'
                           onChange={this.handleListOfNumbers}/></label>

                <label htmlFor={'sort'}>Enter the sort type<input type='text' placeholder='ASC or DESC' id='order'
                                                                   onChange={this.handleSort}/></label>

                <button className='btn btn-primary' onClick={this.handleClick}>Sort</button>
                <p>{this.data}</p>

            </label>
        </div>

    )};
}
export default SortingOrder;

