import React from 'react';

class LocationIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.data
        };
    }
    
  render() {
    return (
      <div className="flex justify-between items-center ma2">
        <label >{this.state.location.name}</label>
        <div className="flex item-center">
            Location details
        </div>

      </div>
    );
  }
}

export default LocationIndexItem;
