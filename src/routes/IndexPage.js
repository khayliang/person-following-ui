import React, {useState} from 'react';
import { connect } from 'dva';
import { Radio, Button } from 'antd';

import "./IndexPage.css";
import 'antd/dist/antd.css';

function IndexPage({dispatch, ros_state}) {

  const [state, setState] = useState({
    deepsort_source: true,
    url: null
  })

  const indices = ros_state.detection_indices

  

  // Once the signaling channel connection is open, connect to the webcam and create an offer to send to the master



  const selectTargetOnClick = (e) => {
    dispatch({
      type: "ros_state/target_selected",
      payload: e.target.value
    })
  }

  const clearTargetOnClick = () => {
    dispatch({
      type: "ros_state/target_clear"
    })
  }

  const changeSourceOnClick = () => {
    const _deepsort_source = !state.deepsort_source

    if (_deepsort_source){
      setState({
        deepsort_source: _deepsort_source,
        url: ros_state.deepsort_stream
      })
    }
    else{
      setState({
        deepsort_source: _deepsort_source,
        url: ros_state.camera_stream
      }) 
    }
    console.log(state)
  }

  const radioButtonArr = () => {
    let arr = []
    if(!ros_state.selected_target){
      console.log("in")
      console.log("detection_indices", ros_state.detection_indices.length)

      for (let i=0; i != ros_state.detection_indices.length; ++i) {
        console.log("yet")
        console.log("detection_indices", ros_state.detection_indices.length)
        arr.push(
          <Radio.Button value={ros_state.detection_indices[i]} size="large">
            {ros_state.detection_indices[i]}
          </Radio.Button>
        )
      }
    }
    console.log(arr)
    return arr
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Video Stream</h1>
        <img src={state.url} alt="stream"/><br/>
        <br/>
        <Radio.Group onChange={selectTargetOnClick} defaultValue="a">
          {radioButtonArr()}
        </Radio.Group><br/><br/>
        <Button onClick={clearTargetOnClick}>Clear Target</Button>
        <Button onClick={changeSourceOnClick}>Change Source</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ ros_state }) => ({ros_state,}))(IndexPage);