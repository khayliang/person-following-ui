import ROSLIB from "roslib"

function initialize_ros(){
  // Connecting to ROS
  // -----------------
  var ros = new ROSLIB.Ros({
    url : 'ws://192.168.31.200:9090'
  })

  ros.on('connection', function() {
    console.log('Connected to websocket server.')
  })

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error)
  })

  ros.on('close', function() {
    console.log('Connection to websocket server closed.')
  })

  return ros
}
const ros = initialize_ros()

export default ros