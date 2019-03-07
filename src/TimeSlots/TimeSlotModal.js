import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";

import "./TimeSlots.css";

class TimeSlotModal extends React.Component {
  // constructor(props, context) {
  //   super(props, context);

  //   // this.handleShow = this.handleShow.bind(this);
  //   // // this.handleClose = this.handleClose.bind(this);

  //   // this.state = {
  //   //   show: false
  //   // };
  // }

  // handleClose() {
  //   this.setState({
  //     show: false
  //   });
  // }

  // handleShow() {
  //   this.setState({
  //     show: true
  //   });
  // }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> {} </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you 're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.modal.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => dispatch({ type: "CLOSE_MODAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeSlotModal);
