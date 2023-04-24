
import React from "react";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DecreaseAsyncChange, DecreaseChange, IncreaseChange, IncreaseMultiChange } from "../../redux/Actions/ActionCreator";
import MainLayout from "../../layouts/MainLayout";

const ViewCounterRedux =  (props : any) => {
   

  return (
    <MainLayout>
    <div>
    <h1>{props.value}</h1>
    <button onClick={() => {
      
      props.IncreaseChange()
    }}>Increase Change</button>
    <button onClick={() => {props.DecreaseChange()}}>Decrease Change</button>
    <button onClick={() => {props.IncreaseMultiChange()}}>Increase Multi Change</button>
    <button onClick={() => {props.DecreaseAsyncChange()}}>Decrease Async Change</button>
    </div>
     </MainLayout> 
   
  );


}


const mapStateToProps = (state:any) => ({value: state.numeros.value})
const mapDispatchToProps = (dispatch : any) => 
    bindActionCreators({DecreaseAsyncChange, DecreaseChange, IncreaseChange, IncreaseMultiChange }, dispatch)
    
//OR
// function mapDispatchToProp(dispatch) {
//     return {
//       IncreaseChange() {
//         // action creator -> action
//         const action = IncreaseChange();
//         dispatch(action);
//       },
//       DecreaseChange() {
//         // action creator -> action
//         const action = DecreaseChange();
//         dispatch(action);
//       },
//       [...]
//     };
//   }

export default connect(mapStateToProps, mapDispatchToProps)(ViewCounterRedux)