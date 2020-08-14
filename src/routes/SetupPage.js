import React, {useState} from 'react';
import { connect } from 'dva';
import { Radio, Button, Input } from 'antd';
import ros_names from '../roslib/ros_names'

import "./SetupPage.css";
import 'antd/dist/antd.css';

function SetupPage({dispatch, ros_state}) {

  

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
      <h1>Setup</h1>
      <div style={{width: "40vw", margin: "auto"}}>
        <Input placeholder="Camera video URL" style={{margin: "10px 0"}}/>
        <Input placeholder="DeepSORT video URL" style={{margin: "10px 0"}}/>
        <Input placeholder="ROSBridge websocket URL" style={{margin: "10px 0"}}/>
      </div>
      <Button>Submit</Button>
    </div>
  );
}

SetupPage.propTypes = {
};

export default connect(({ ros_state }) => ({ros_state,}))(SetupPage);