import React, { useState, useMemo, useEffect } from "react";
import {Col, Container, Row} from "reactstrap";
import Logout from "./Logout";

const AdminDashboard = (props) => {

    return (
        <>
            <Container className="bg-info" style={{height: "200px"}} fluid>
                <Row>
                    <Col>
                        <div style={{display: 'flex', float: 'right', marginTop: "20px", marginRight: "50px"}}>
                            <Logout />
                            {/*<Login/>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
            <h1>Admin here</h1>
        </>
    )
}

export default AdminDashboard;