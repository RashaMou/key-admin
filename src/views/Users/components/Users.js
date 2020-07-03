import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Table, Button } from "reactstrap";
import TablePagination from "../../../components/TablePagination";
import { getVettingUsers, approveUser, denyUser } from "../usersSlice";
import PopupModal from "./Modal";
import convertCountryToCode from "../../../utils/countryCodes";

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");

  let country = convertCountryToCode(user.country);

  const handleClick = (action) => {
    setModalIsOpen(!modalIsOpen);
    setModalAction(action);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleApprove = () => {
    console.log("user.id", user.id);
    props.approveUser(user.id);
    toggleModal();
  };

  const handleDeny = () => {
    props.denyUser(user.sub);
    toggleModal();
  };

  return (
    <>
      <PopupModal
        isOpen={modalIsOpen}
        toggle={toggleModal}
        user_id={user.id}
        successAction={handleApprove}
        denyAction={handleDeny}
        action={modalAction}
      />
      <tr key={user.id.toString()}>
        <th scope="row">
          <Link to={userLink}>{user.id}</Link>
        </th>

        <td>
          <div className="avatar">
            <img
              src={user.profile_image}
              className="img-avatar"
              alt={user.name}
            />
          </div>
        </td>

        <td>
          <Link to={userLink}>{user.name}</Link>
        </td>
        <td>{user.email}</td>
        <td>
          {user.country}
          {/* <i
            className={`flag-icon flag-icon-${country}  h4 mb-0 title=${country} aria-label=${country} id=${country}`}
          ></i> */}
        </td>
        <td>
          <a href={user.link_url}>{user.link_url}</a>
        </td>
        <td>{user.phone_number}</td>
        <td>
          <a href={user.file}>
            <span style={{ fontSize: "1.5rem" }}>
              <i class="fad fa-file-alt"></i>
            </span>
          </a>
        </td>
        <td>
          <Button
            color="success"
            onClick={() => handleClick("approve")}
            style={{ marginRight: "20px" }}
          >
            <i className="fas fa-check"></i>
          </Button>
          <Button color="danger" onClick={() => handleClick("deny")}>
            <i className="fas fa-times"></i>
          </Button>
        </td>
      </tr>
    </>
  );
}

const Users = ({ getVettingUsers, approveUser, denyUser, users }) => {
  useEffect(() => {
    getVettingUsers();
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
  const pagesCount = Math.ceil(users.length / 10);

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
                <th scope="col">Avatar</th>
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
              {users &&
                users
                  .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                  .map((user, index) => (
                    <UserRow
                      key={index}
                      user={user}
                      approveUser={approveUser}
                      denyUser={denyUser}
                    />
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

export default connect(mapStateToProps, {
  getVettingUsers,
  approveUser,
  denyUser,
})(Users);
