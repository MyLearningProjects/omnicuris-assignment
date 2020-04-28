import React, { Component } from 'react';
import {
    Row,
    Col
}                   from "reactstrap";
import Layout from "../../commons/Components/Layout";


export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col>
                        <h5>Welcome To Omnifgjk</h5>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
