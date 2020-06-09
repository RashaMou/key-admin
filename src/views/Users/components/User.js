import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { connect } from "react-redux";

const User = (props) => {
  const user = props.users.find(
    (user) => user.id.toString() === props.match.params.id
  );

  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <i className="text-muted icon-ban"></i> Not found
          </span>,
        ],
      ];

  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1"></i>User id:{" "}
                {props.match.params.id}
              </strong>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover>
                <tbody>
                  {userDetails.map(([key, value]) => {
                    return (
                      <tr key={key}>
                        <td>{`${key}:`}</td>
                        <td>
                          <strong>{value}</strong>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.vetting.users,
});

export default connect(mapStateToProps, {})(User);
