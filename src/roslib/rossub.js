import ROSLIB from "roslib"
import ros_names from "./ros_names"
import ros from "./ros"

export const detection_indices_sub = new ROSLIB.Topic({
  ros : ros,
  name : ros_names.subscribers.detection_indices.name,
  messageType : ros_names.subscribers.detection_indices.type,
  queue_size: 1
})

export const target_present_sub = new ROSLIB.Topic({
  ros: ros,
  name : ros_names.subscribers.target_present.name,
  messageType : ros_names.subscribers.target_present.type,
  queue_size: 1
})