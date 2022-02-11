import React from 'react';
import { connect } from 'react-redux';
import {generateRandom} from '../actions';
class App extends React.Component {

    render() {
        return (
        <div class="ui container">
            <button class="blue fluid ui button" onClick={()=> this.props.generateRandom()}>click Me to generate a random number</button>
            <div class="ui huge center aligned header">Number: {this.props.number}</div>
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log('map state to props');
    console.log(state);
    return {
        number:state.number
    }
}
export default connect(mapStateToProps, {generateRandom})(App); 
