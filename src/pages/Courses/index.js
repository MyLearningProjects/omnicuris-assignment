import React, { 
    Component 
}                   from 'react';
import {
    Row,
    Col
}                   from "reactstrap";
import ApiService   from "../../api/api.Service";
import Layout       from "../../commons/Components/Layout";


export default class Courses extends Component {

    componentDidMount(){
        const variables = {
            courseSlug : "thyroid-in-pregnancy"
        }
        ApiService.getModuleList(variables)
        .then(response => {
            debugger
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <h5>Welcome To Courses</h5>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
