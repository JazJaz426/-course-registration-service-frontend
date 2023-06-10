import axios from "../axios/config";


export const CourseService = {
    getAllCourses: function() {
        // call allCourses API
        return axios.get("/api/allCourses");
    },
    getEnrolledCourses: function() {
        // call getEnrolledCourses API
        return axios.get("/api/student/enrolledCourses");
    },
    enrollCourse: function(courseName) {
        // call enrollCourse API
        return axios.post(`/api/student/course/${courseName}`);
    },
    dropCourse: function(courseName) {
        // call dropCourses API
        return axios.delete(`/api/student/course/${courseName}`);
    }
}