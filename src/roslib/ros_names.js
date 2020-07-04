const ros_names = {
    streams: {
        deepsort_stream: "http://localhost:8080/stream?topic=/person_tracking/deepsort_image&type=ros_compressed",
        camera_stream: "http://localhost:8080/stream?topic=/camera/image_raw&type=ros_compressed"
    },
    subscribers: {
        detection_indices: {
            name: "/person_tracking/detection_indices",
            type: "std_msgs/Int32MultiArray"
        },
        target_present: {
            name: "/person_tracking/target_present",
            type: "std_msgs/Bool"
        }
    },
    services: {
        choose_target: {
            name: "person_tracking/choose_target",
            type: "person_tracking/choose_target"
        },
        clear_target: {
            name: "person_tracking/clear_target",
            type: "person_tracking/clear_target"
        },
    }
}

export default ros_names