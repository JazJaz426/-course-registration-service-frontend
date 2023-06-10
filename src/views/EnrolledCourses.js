import React from "react";
import CourseTable from "../components/CourseTable";
import { CourseService } from "../service/CourseService";

class EnrolledCourses extends React.Component {
    state = {
        courses: []
    }
    componentDidMount() {
        // call getAllCourses API
        CourseService.getEnrolledCourses().then((response) => {
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

    dropCourse(courseName) {
        CourseService.dropCourse(courseName)
            .then(response => {
                alert(`Congrats! ${courseName} dropped successfully`);
                window.location.reload();
            }).catch(error => {
                alert(`Sorry, Drop ${courseName} failed due to ${error}`);
        });
    }  

    render() {
        return (
        <CourseTable courses={this.state.courses} buttonText={"Drop"} onClickHandler={this.dropCourse} />
        );
    }
}

export default EnrolledCourses;