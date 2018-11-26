import React from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        searchParams: ''
      };
      this.runSearch = this.runSearch.bind(this);
  
  }
    
  runSearch(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="flex justify-around pa3 grey">
        <TextField 
          onChange={ this.runSearch }
          id="standard-with-placeholder"
          label="Search"
          margin="normal"
          className='w-30'
          />                    
      </div>
    );
  }
}

export default Search;
