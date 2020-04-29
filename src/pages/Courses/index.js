import React, { 
    Component 
}                   from 'react';
import {
    Row
}                   from "reactstrap";
import ApiService   from "../../api/api.Service";
import Layout       from "../../commons/Components/Layout";
import "./courses.scss";
import ModuleHeader from "./Components/ModuleHeader";
import VideoPlayer  from "./Components/VideoPlayer";
import CourseModules from "./Components/CourseModule"; 
import Description  from "./Components/Description";
import ExpertDetails from "./Components/ExpertDetails";
import Loader       from "../../commons/Components/Loader";


export default class Courses extends Component {

    state = {
        courseDetails : {}, 
        activeModule  : "",
        expertDetails : [],
        chapterDetails : [],
        playerUrl : "",
        loader : false
    }

    componentDidMount(){
        this.fetchCourseDetails();
        this.fetchExperts();
    }

    fetchCourseDetails = (variables = {}) => {
        if(!variables.hasOwnProperty("courseSlug")){
            variables["courseSlug"] =  "thyroid-in-pregnancy"
        }
        let {
            courseDetails,
        } = this.state
        this.setState({loader : true})
        ApiService.getModuleList(variables)
        .then(response => {
            if(response && response.responseCode === 200 && response.courseDetails){
                courseDetails = response.courseDetails
                this.fetchModuleDetails(response.courseDetails.modules)
            }
        })
        .catch((err) => {
            console.log(err)
            courseDetails = {}
        })
        .finally(() => {
            this.setState({
                courseDetails,
                loader : false
            })
        })
    }

    fetchModuleDetails = (modules) => {
        const variables = [];
        let {
            chapterDetails,
            
        } = this.state
        modules && modules.map((item,index) => {
            variables[index] = {
                courseSlug:"thyroid-in-pregnancy",
                moduleId: item.id    
            }
        })
        const promises = [];
        modules && modules.map((item,index) => {
            promises.push(ApiService.getModuleList(variables[index]))
        })
        Promise.all(promises)
        .then((response) => {
            response.map((item,index) => {
                let { lessonDetails } = item
                chapterDetails.push(lessonDetails)
            })
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            this.setState({chapterDetails})
        })

    }

    fetchExperts = () => {
        let {
            expertDetails
        } = this.state
        this.setState({loader : true})
        ApiService.getExperts()
        .then(response => {
            if(response && response.responseCode === 200 && response.expertDetails){
                expertDetails = response.expertDetails
            }
        })
        .catch((err) => {
            console.log(err)
            expertDetails = []
        })
        .finally(() => {
            this.setState({
                expertDetails,
                loader : false
            })
        })
    }


    updateState = (data) => {
        if(typeof(data) === "object"){
            this.setState(data)
        }
    }

    render() {
        let {
            courseDetails,
            activeModule,
            expertDetails,
            chapterDetails,
            loader,
            playerUrl
        } = this.state
        const moduleHeader = activeModule ? activeModule : `${courseDetails.name} : Introduction` ;
        playerUrl = playerUrl ? playerUrl : courseDetails && courseDetails.introVideo;
        const description = courseDetails && courseDetails.description;
        const modules = courseDetails.modules || []
        return (
            <Layout>
                {
                    loader ? 
                    <Loader /> : 
                    <>
                        <ModuleHeader moduleHeader = {moduleHeader}/>
                        <Row>
                            <VideoPlayer  playerUrl={playerUrl}/>
                            <CourseModules 
                                modules = {modules}
                                chapterDetails = {chapterDetails}
                                updateState = {this.updateState}
                            />
                        </Row>
                        <Description description={description} />
                        <ExpertDetails expertDetails ={expertDetails} />
                    </>
                }
            </Layout>
        )
    }
}
