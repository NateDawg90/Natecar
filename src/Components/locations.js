import React, { Component } from 'react';
import Search from './search';
import LocationIndexItem from './location_index_item';
import axios from 'axios';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Locations extends Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            filtered: []
        }
    }
    
    componentDidMount() {
        axios.get('locations.json').then(res => {
            // filter out locations with A5C or Q5 in their name
            var locations = _.filter(res.data, (loc) => {
                return !loc.name.includes('A5C') && !loc.name.includes('Q5');
            });
            this.setState({ 
                locations: locations,
                filtered: locations
            });
        })
    }

    changeHandler(params) {
        // do stuff with params
        if (params.length === 0) {
            var filtered = this.state.locations;
        } else {
            var filtered = _.filter(this.state.locations, (loc) => {
                return _.includes(loc.name.toLowerCase(), params.toLowerCase());
            });
        }
        this.setState({ filtered });
    }
    
    render() {
        return (
        <div >
            <header className="bg-light-blue sans-serif">
                <div className=" flex flex-column items-center pa4 pt5-ns ph7-l">
                    <time className="f6 mb2 dib ttu tracked"><small>21 November, 2018</small></time>
                    <h3 className=" f3 f2-ns measure-narrow lh-title mv0">
                        <span className="bg-black-90 br2 lh-copy white pa1 ph2">
                            Choose an Airport
                        </span>
                    </h3>
                    <h4 className="f3 fw1 georgia i">Pick a valid airport shown in the list below.</h4>
                    <h5 className="f6 ttu tracked black-80">By Nate Johnson</h5>
                </div>
                <Search onChange={ this.changeHandler.bind(this) }/>
            </header>
            <div className = 'flex justify-center'>
                <div className='w-90 flex flex-column'>
                    <span className='self-start black-50 i f5 fw5 ma3'>Browse Airports</span>
                    <div className='flex flex-wrap justify-between'>
                        { this.state.filtered.map( (loc) => {
                            return <LocationIndexItem key={ loc.id } data={ loc }/>;
                        })}
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 footer flex justify-around w-100 items-center bg-light-gray'>
                <div className='flex items-center'>
                    <i className="material-icons mr1">
                        add
                    </i>
                    <TextField placeholder='Add Promo Code'/>                    
                </div>
                <span className='f5 pv3'>Avg Daily Rate:</span>
                <span className='f5 pv3'>Estimated Total:</span>
                <span className='f5 pv3 black-50'>View Full Breakdown</span>
                <Button variant="outlined" color="primary" className=''>
                    Book Now
                </Button>     
            </div>
            
        </div>
        );
    }
}

export default Locations;
