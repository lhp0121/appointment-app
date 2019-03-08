import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import "./TimeSlots.css";

class TimeSlotModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputNum: "",
      isChanged: false
    };
    //TODO: reset initial state on re-open

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // console.log(key);
    // this.props.handleShow(key);
    console.log("submit button is clicked");
    console.log("now need to capture value" + this.props.activeTimeslot);
    console.log(this.state);
    this.props.handleSubmit(this.state);
  }

  updateInput(e, field) {
    this.setState({
      isChanged: true
    });
    if (field === "name") {
      this.setState({
        inputName: e.target.value
      });
    }
    if (field === "num") {
      this.setState({
        inputNum: e.target.value
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show === false && this.props.show === true) {
      console.log("changed from false to true");
      this.setState({
        inputName: this.props.bookedName,
        inputNum: this.props.bookedNum,
        isChanged: false
      });
    }
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Please enter the following information </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label className="col-form-label"> Full Name: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type full name"
                defaultValue={this.props.bookedName}
                onChange={e => this.updateInput(e, "name")}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label"> Phone Number: </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Type phone number"
                defaultValue={this.props.bookedNum}
                onChange={e => this.updateInput(e, "num")}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.handleDelete}>
              Delete
            </Button>
            <Button
              disabled={!this.state.isChanged}
              variant="info"
              onClick={() => this.handleSubmit()}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  let bookedData = state.timeslot[state.modal.activeTimeslot];
  let bookedName = "";
  let bookedNum = "";
  if (bookedData !== undefined) {
    bookedName = bookedData.name;
    bookedNum = bookedData.phoneNumber;
  }
  //this object is saved at this.props.*
  return {
    activeTimeslot: state.modal.activeTimeslot,
    show: state.modal.show,
    bookedName: bookedName,
    bookedNum: bookedNum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () =>
      dispatch({
        type: "CLOSE_MODAL"
      }),
    handleDelete: () =>
      dispatch({
        type: "DELETE_APPT"
      }),
    handleSubmit: appointmentInfo =>
      dispatch({
        type: "SUBMIT_APPT",
        payload: appointmentInfo
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSlotModal);
