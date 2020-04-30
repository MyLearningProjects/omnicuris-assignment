import React, {  useState } from 'react';
import {
    Col,
    Row,
    Collapse,
}                   from "reactstrap";
import CourseHeader from "./CourseHeader";


export default function SingleModule ({
    moduleInfo,
    chapterInfo,
    index,
    moduleText = "",
    updateState
}) {
    const [showPreview ,SetShowPreview] = useState(false)
    return(
        <div className="infoCard link" key={index}>
            <div onClick={() => {SetShowPreview(!showPreview)}}>
                <CourseHeader 
                    profilePic = {moduleInfo.moduleExperts[0].profilePic}
                    moduleNumber = {index+1}
                    moduleText = {moduleText ? moduleText : "Module"}
                    moduleName = {moduleInfo.name}
                    moduleDuration = {moduleInfo.durationStr}
                    displaySingleLine = {true}
                />
            </div>
            <Row>
                <Col>
                    <Collapse isOpen={showPreview}>
                        {
                            chapterInfo && chapterInfo.userChapterDetails.map((chapter,index) => {
                                return (
                                    <div 
                                        className="infoCard link" 
                                        key={index} 
                                        onClick={() => {updateState({playerUrl : chapter.content , activeModule : moduleInfo.name})}}
                                    >
                                        <div>
                                            <CourseHeader 
                                                profilePic = {moduleInfo.moduleExperts[0].profilePic}
                                                moduleNumber = {index+1}
                                                moduleText = {"Chapter"}
                                                moduleName = {chapter.title}
                                                displaySingleLine = {false}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Collapse>
                </Col>
            </Row>
        </div>
    )
}