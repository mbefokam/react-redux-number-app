import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {incrementNumber,decrementNumber} from '../actions';
class Number extends Component {

  render() {
    console.log('From the props',this.props.num)
    return (
      <div>
          <div className="row col-sm-offset-5">
            <p>{this.props.num}</p>
          </div>
          <div className="row col-sm-offset-4">
              <Button bsStyle="primary" onClick={()=>this.props.incrementNumber(this.props.num) }>Increment</Button>
              <Button bsStyle="danger" className="col-sm-offset-1" onClick={()=>this.props.decrementNumber(this.props.num) }>Decrement</Button>
          </div>
      </div>
    );
  }

}
function mapStateToProps(state){
  console.log('mapStateToProps- Number.js',state);
  return{
    num : state.num,
  }
}
// function mappDispatchToProps(dispatch){
//   return bindActionCreators({incrementNumber,decrementNumber}, dispatch);
// }

export default connect(mapStateToProps, {incrementNumber,decrementNumber})(Number);
