import React from "react";
import CourseTable from "../components/CourseTable";
import { CourseService } from "../service/CourseService";

export default class AllCourses extends React.Component {
    state = {
        courses: []
    }
    componentDidMount() {
        // call getAllCourses API
        CourseService.getAllCourses().then((response) => {
            // success callback
            // 1. get data from response
            // 2. setState to trigger re-rendering
            this.setState({
                courses: response.data
            });
        }).catch((error) => {
            // failure callback
            console.error(error);
        })
    }

    enrollCourse(courseName) {
        CourseService.enrollCourse(courseName)
            .then(response => {
                // 成功的回调
                alert(`Congrats! ${courseName} enrolled successfully!`);
            }).catch(error => {
                // 失败的回调
                alert(`Sorry! ${courseName} enrollment failed due to ${error}!`);
        });
    }

    render() {
        return (
        <CourseTable courses={this.state.courses} buttonText={"Enroll"} onClickHandler={this.enrollCourse}/>
        );
    }
}
