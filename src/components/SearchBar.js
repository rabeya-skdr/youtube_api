import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    state = {
        searchTerm: '',
    }
    // handleChange console.log(event.target.value);
    handleChange = (event) => this.setState({searchTerm: event.target.value});
    
    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
       // console.log(this.state.searchTerm, this.state.value, this.state.value1);
    }
    
    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;