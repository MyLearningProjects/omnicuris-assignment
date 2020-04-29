import React from 'react';
import {
    Col,
    Row,
}                   from "reactstrap";

export default function CourseHeader({
    profilePic,
    moduleNumber,
    moduleText,
    moduleName,
    moduleDuration,
    displaySingleLine
}) {
    return (
        <Row>
            {
                profilePic ? 
                <Col xs="3">
                    <img 
                        alt={`Prof  ${moduleNumber} `} 
                        src={profilePic}
                        className="img img-fluid rounded-circle" 
                    />
                </Col> : null
            }
            <Col xs="9">
                {
                    displaySingleLine ? 
                    <p className="m-0">
                        <span className="title">{`${moduleText} ${moduleNumber} : `}</span>
                        <span className="subTitle">{moduleName}</span>
                    </p>
                    :
                    <>
                        <p className="m-0 title">{`${moduleText} ${moduleNumber} : `}</p>
                        <p className="m-0 subTitle">{moduleName}</p>
                    </>
                }
                {
                    moduleDuration ? 
                    <p className="m-0 text-right">
                        {moduleDuration}
                    </p> : null
                }
            </Col>
        </Row>
    )
}
