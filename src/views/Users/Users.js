import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Table } from "reactstrap";

import usersData from "./UsersData";

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = (status) => {
    return status === "Active"
      ? "success"
      : status === "Inactive"
      ? "secondary"
      : status === "Pending"
      ? "warning"
      : status === "Banned"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.name}</Link>
      </td>
      <td>{user.email}</td>
      <td>{user.country}</td>
      <td>{user.registered}</td>
      <td>
        <Link to={userLink}>
          <Badge color={getBadge(user.status)}>{user.docs}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class Users extends Component {
  render() {
    const userList = usersData.filter((user) => user.id < 10);

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> Users{" "}
            <small className="text-muted">example</small>
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
                  <th scope="col">Docs</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <UserRow key={index} user={user} />
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Users;
