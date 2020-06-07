import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import TablePagination from "../../../components/TablePagination";
import { getVettingUsers } from "../usersSlice";
import { Auth0Context } from "../../../react-auth0-spa";

import usersData from "../UsersData";

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.name}</Link>
      </td>
      <td>{user.email}</td>
      <td>
        <i
          className={`flag-icon flag-icon-${user.country}  h4 mb-0 title=${user.country} id=${user.country}`}
        ></i>
      </td>
      <td>{user.registered}</td>
      <td>
        <Link to={userLink}>{user.docs}</Link>
      </td>
      <td>
        <FormGroup check className="checkbox">
          <Input
            className="form-check-input"
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            value="option1"
          />
          <Label check className="form-check-label" htmlFor="checkbox1" />
        </FormGroup>
      </td>
    </tr>
  );
}

const Users = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const isAuthenticated = useContext(Auth0Context);

  const handleClick = (e) => {
    e.preventDefault();
    props.getVettingUsers();
  };

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
  const pagesCount = Math.ceil(usersData.length / 10);

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
                <th scope="col">Date applied</th>
                <th scope="col">Upload</th>
                <th scope="col">Verified</th>
              </tr>
            </thead>
            <tbody>
              {usersData
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
            <Button
              className="submit-button"
              color="success"
              onClick={handleClick}
            >
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default connect(null, { getVettingUsers })(Users);
