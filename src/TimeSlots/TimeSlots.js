import React from "react";
import { connect } from "react-redux";
import TimeSlotModal from "./TimeSlotModal";

import "./TimeSlots.css";

class TimeSlotItem extends React.Component {
  // var timeSlots = () => {
  //   // constructor () {
  //   //     super();
  //   //     this.state = {
  //   //         showModal: false
  //   //     };
  //   // };
  constructor(props) {
    super(props);
    this.state = {
      isBooked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    // this.setState(state => ({
    //   isBooked: !state.isBooked
    // }));
    // console.log(key);
    // this.props.timeslot[key].isBooked = !this.props.timeslot[key].isBooked;
    console.log(key);
    this.props.handleShow();
  }

  //   var bookingDate = {};
  render() {
    return (
      <>
        <TimeSlotModal />
        <ul className="list-group timeslot-container">
          <li
            onClick={() => this.handleClick(9)}
            className={
              "list-group-item " +
              (this.props.timeslot[9].isBooked ? "list-group-item-danger " : "")
            }
          >
            9: 00 - 10: 00 AM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[10].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            10: 00 - 11: 00 AM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[11].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            11: 00 - 12: 00 PM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[12].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            12: 00 - 1: 00 PM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[13].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            1: 00 - 2: 00 PM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[14].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            2: 00 - 3: 00 PM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[15].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            3: 00 - 4: 00 PM
          </li>
          <li
            onClick={this.handleClick}
            className={
              "list-group-item " +
              (this.props.timeslot[16].isBooked
                ? "list-group-item-danger "
                : "")
            }
          >
            4: 00 - 5: 00 PM
          </li>
        </ul>
      </>
    );
    // };
  }
}

const mapStateToProps = state => {
  return {
    timeslot: state.timeslot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleShow: () => dispatch({ type: "OPEN_MODAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSlotItem);
