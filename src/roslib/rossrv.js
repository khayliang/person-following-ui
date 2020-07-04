import ROSLIB from "roslib"
import ros from "./ros"
import ros_names from "./ros_names"

export const choose_target_srv = new ROSLIB.Service({
  ros : ros,
  name : ros_names.services.choose_target.name,
  messageType : ros_names.services.choose_target.type,
  queue_size: 1
})

export const clear_target_srv = new ROSLIB.Service({
  ros : ros,
  name : ros_names.services.clear_target.name,
  messageType : ros_names.services.clear_target.type,
  queue_size: 1
})

