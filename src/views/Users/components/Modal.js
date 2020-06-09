import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const PopupModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="modal-sm">
      <ModalHeader>User Approval</ModalHeader>
      <ModalBody>{`Are you sure you want to ${props.action} this application?`}</ModalBody>
      <ModalFooter>
        <Button
          color={`${props.action === "approve" ? "primary" : "danger"}`}
          onClick={props.successAction}
        >
          {props.action.charAt(0).toUpperCase() + props.action.slice(1)}
        </Button>{" "}
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PopupModal;
