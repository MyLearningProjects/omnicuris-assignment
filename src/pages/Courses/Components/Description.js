import React from 'react'
import {
    Row,
    Col
}                   from "reactstrap";

export default function Description({
    description
}) {
    return (
        <>
            <Row className="mt-5">
                <Col xs="12" md="8">
                    <h3 className="">
                        Description
                    </h3>
                    <div className="heading-underlined">&nbsp;</div>
                </Col>
            </Row>   
            <Row>
                <Col xs="12" md="8">
                    <p className="">
                        {description}
                    </p>
                </Col>
            </Row>   
        </>
    )
}
