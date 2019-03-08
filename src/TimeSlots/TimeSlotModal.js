import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import "./TimeSlots.css";

class TimeSlotModal extends React.Component {
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
              />
            </div>
            <div className="form-group">
              <label className="col-form-label"> Phone Number: </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Type phone number"
                defaultValue={this.props.bookedNum}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.handleDelete}>
              Delete
            </Button>
            <Button variant="info" onClick={this.props.handleSubmit}>
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
    handleSubmit: () =>
      dispatch({
        type: "SUBMIT_APPT"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSlotModal);
