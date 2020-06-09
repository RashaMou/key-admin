import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const PopupModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="modal-sm">
      <ModalHeader>User Approval</ModalHeader>
      <ModalBody>Are you sure you want to approve this user?</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.successAction}>
          Approve
        </Button>{" "}
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PopupModal;
