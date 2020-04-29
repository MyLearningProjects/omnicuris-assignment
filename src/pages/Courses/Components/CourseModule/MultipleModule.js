import React, { useState } from 'react';
import {
    Col,
    Row,
    Collapse,
}                   from "reactstrap";
import CourseHeader from "./CourseHeader";
import SingleModule from "./SingleModule";

export default function MultipleModule ({
    moduleInfo,
    chapterInfo,
    index,
    updateState
}) {
    const [showPreview ,SetShowPreview] = useState(false)
    return(
        <div className="infoCard link" key={index}>
            <div onClick={() => {SetShowPreview(!showPreview)}}>
                <CourseHeader 
                    profilePic = {moduleInfo.moduleExperts[0].profilePic}
                    moduleNumber = {index+1}
                    moduleText = {"Module"}
                    moduleName = {moduleInfo.name}
                    moduleDuration = {moduleInfo.durationStr}
                    displaySingleLine = {true}
                />
            </div>
            <Row>
                <Col>
                    <Collapse isOpen={showPreview}>
                        {
                            chapterInfo.map((chapters,index) => {
                                return <SingleModule 
                                    moduleInfo = {moduleInfo}
                                    chapterInfo = {chapters}
                                    index = {index}
                                    moduleText = {"Sub Module"}
                                    updateState = {updateState}
                                />
                            })
                        }
                    </Collapse>
                </Col>
            </Row>
        </div>
    )
}