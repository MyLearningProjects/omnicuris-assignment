import React, { Component } from 'react';
import ApiService from "../../api/api.Service";

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
            <div>
                <h5>asdfghjk</h5>
            </div>
        )
    }
}
