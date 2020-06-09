import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import TablePagination from "../../../components/TablePagination";
import { getVettingUsers, approveUser } from "../usersSlice";
import PopupModal from "./Modal";

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = (action) => {
    setModalIsOpen(!modalIsOpen);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleApprove = () => {
    props.approveUser(37);
    toggleModal();
  };

  return (
    <>
      <PopupModal
        isOpen={modalIsOpen}
        toggle={toggleModal}
        user_id={user.id}
        successAction={handleApprove}
      />
      <tr key={user.id.toString()}>
        <th scope="row">
          <Link to={userLink}>{user.id}</Link>
        </th>
        <td>
          <Link to={userLink}>{user.name}</Link>
        </td>
        <td>{user.email}</td>
        <td>
          {user.country}
          {/* <i
          className={`flag-icon flag-icon-${user.country}  h4 mb-0 title=${user.country} id=${user.country}`}
        ></i> */}
        </td>
        <td>
          <a href={user.link_url}>{user.link_url}</a>
        </td>
        <td>{user.phone_number}</td>
        <td>
          <Link to={userLink}>{user.docs}</Link>
        </td>
        <td>
          <Button color="success" onClick={() => handleClick("Approve")}>
            <i class="fas fa-check"></i>
          </Button>
          <Button color="danger" onClick={() => handleClick("Deny")}>
            <i class="fas fa-times"></i>
          </Button>
        </td>
      </tr>
    </>
  );
}

const Users = (props) => {
  console.log(props.users);
  useEffect(() => {
    props.getVettingUsers();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const handleNextClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const pageSize = 10;
  const pagesCount = Math.ceil(props.users.length / 10);

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> Users{" "}
        </CardHeader>
        <CardBody>
          <Table responsive hover>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Website</th>
                <th scope="col">Phone number</th>
                <th scope="col">Documentation</th>
                <th scope="col">Approve</th>
              </tr>
            </thead>
            <tbody>
              {props.users
                .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                .map((user, index) => (
                  <UserRow key={index} user={user} />
                ))}
            </tbody>
          </Table>
          <div className="table-pag-flex">
            <TablePagination
              currentPage={currentPage}
              pageSize={pageSize}
              handlePageClick={handlePageClick}
              pagesCount={pagesCount}
              handlePreviousClick={handlePreviousClick}
              handleNextClick={handleNextClick}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.vetting.users,
});

export default connect(mapStateToProps, { getVettingUsers, approveUser })(
  Users
);
