import React from 'react';
import { connect } from 'dva';
import { Radio, Button } from 'antd';
import ros_names from '../roslib/ros_names'

import "./IndexPage.css";
import 'antd/dist/antd.css';

function IndexPage({dispatch, ros_state}) {
  const indices = ros_state.detection_indices

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

  const radioButtonArr = () => {
    let arr = []
    if(!ros_state.selected_target){
      for (let i=0; i != indices.length; ++i) {
        arr.push(
          <Radio.Button value={indices[i]}>
            {indices[i]}
          </Radio.Button>
        )
      }
    }

    return arr
  }
  return (
    <div>
      <h1>Video Stream</h1>
        <img src={ros_names.streams.deepsort_stream} alt="stream"/><br/>
        <Radio.Group onChange={selectTargetOnClick} defaultValue="a">
          {radioButtonArr()}
        </Radio.Group><br/>
        <Button onClick={clearTargetOnClick}>Clear Target</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ ros_state }) => ({ros_state,}))(IndexPage);