import React from 'react'
import {
    Row,
    Col
}                   from "reactstrap";

export default function ModuleHeader({
    moduleHeader
}) {
    return (
        <Row>
            <Col xs="12" md="8">
                <h6 className="infoCard">
                    {moduleHeader}
                </h6>
            </Col>
        </Row> 
    )
}
