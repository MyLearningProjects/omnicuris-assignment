import React from 'react';
import {
    Col,
    Row,
}                   from "reactstrap";
import SingleModule from "./SingleModule";
import MultipleModule from "./MultipleModule";


export default function CourseModules({
    modules,
    chapterDetails,
    updateState
}) {
    return (
        <Col xs="12" md="4">
            <div className="infoCard modules-info">
                <div className="infoCard">
                    <Row>
                        <Col xs="3">
                            {/* <img 
                                alt="Prof Image" 
                                src={}
                                className="img img-fluid rounded-circle" 
                            /> */}
                        </Col>
                        <Col xs="9">
                            <p className="title m-0 link" onClick={() => {updateState({playerUrl : modules.introVideo, activeModule : ""})}}>
                                Introduction
                            </p>
                        </Col>
                    </Row>
                </div>
                <ModuleList 
                    modules = {modules}
                    chapterDetails = {chapterDetails}
                    updateState = {updateState}
                />
            </div>
        </Col>
    )
}

const ModuleList = ({
    modules = [],
    chapterDetails,
    updateState
}) => {
    if(modules.length > 0 && chapterDetails.length > 0){
        return modules.map((item,index) => {
            const chapters = chapterDetails[index]
            if(chapters.length === 1){
                return(
                    <SingleModule 
                        moduleInfo = {item}
                        chapterInfo = {chapters[0]}
                        index = {index}
                        updateState = {updateState}
                    />
                )
            }else{
                return(
                    <MultipleModule 
                        moduleInfo = {item}
                        chapterInfo = {chapters}
                        index = {index}
                        updateState = {updateState}
                    />
                )
            }
        })
    }else{
        return null
    }
}


