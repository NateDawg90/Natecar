import React from 'react';

class LocationIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            location: props.data
        };
    }

    airportLabel() {
        let { location } = this.state;
        if (location.airport_code) {
            return <span>{location.name} ({location.airport_code})</span>
        } else {
            return <span>{location.name}</span>;
        }
    }

    showIcon() {
        if (this.state.location.airport_code) {
            return <i className="material-icons">airplanemode_active</i>;
        } else {
            return <i className="material-icons">business</i>;
        }
    }
    
    render() {
        return (
        <div className="flex flex-column justify-around w-third bl b--light-blue bw1 mv2 pa2 pointer grow hover-bg-light-blue">
            <div className='flex f4 fw7 mb2 ml1'>
                {this.airportLabel()}
            </div>
            <div className='flex items-center ml1'>
                <div className='mr2'>
                    {this.showIcon()}
                </div>
                <div className="flex black-60 f6 ">
                    {this.state.location.name}
                </div>
            </div>

        </div>
        );
    }
}

export default LocationIndexItem;
