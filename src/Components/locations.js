import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Locations extends Component {
    state = {
        locations: []
    }
    
    componentDidMount() {
        axios.get('locations.json').then(res => {
            var locations = _.filter(res.data, (loc) => {
                return !loc.name.includes('A5C') && !loc.name.includes('Q5');
            })
            console.log(locations)
            this.setState({ locations });
            // this.filter_locations();
        })
    }

    
  render() {
    return (
      <div >

        <header className="bg-light-blue sans-serif">
            <div className="mw9 center pa4 pt5-ns ph7-l">
                <time className="f6 mb2 dib ttu tracked"><small>21 November, 2018</small></time>
                <h3 className=" f3 f2-ns measure-narrow lh-title mv0">
                    <span className="bg-black-90 lh-copy white pa1">
                        Choose an Airport
                    </span>
                </h3>
                <h4 className="f3 fw1 georgia i">Pick a valid airport shown in the list below.</h4>
                <h5 className="f6 ttu tracked black-80">By Nate Johnson</h5>
            </div>
        </header>

        <div className = 'flex'>
            Airports here
            { this.state.locations.map( (loc) => {
                return JSON.stringify(loc);
            })}
        </div>
        
      </div>
    );
  }
}

export default Locations;