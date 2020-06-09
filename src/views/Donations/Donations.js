import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Card, CardBody, CardHeader } from "reactstrap";
import TablePagination from "../../components/TablePagination";
import donationsData from "./DonationsData";

function DonationsRow(props) {
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
      <td>
        <i
          className={`flag-icon flag-icon-${user.country}  h4 mb-0 title=${user.country} id=${user.country}`}
        ></i>
      </td>
      <td>{user.amount}</td>

      <td>{user.date}</td>
      <td>{user.organization}</td>
    </tr>
  );
}

const Donations = () => {
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
  const pagesCount = Math.ceil(donationsData.length / 10);

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i> User Donations{" "}
        </CardHeader>
        <CardBody>
          <Table responsive hover>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Country</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Organization</th>
              </tr>
            </thead>
            <tbody>
              {donationsData
                .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                .map((user, index) => (
                  <DonationsRow key={index} user={user} />
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

export default Donations;
