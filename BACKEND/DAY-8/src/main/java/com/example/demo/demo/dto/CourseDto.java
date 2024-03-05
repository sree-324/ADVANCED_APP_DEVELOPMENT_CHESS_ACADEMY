package com.example.demo.demo.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

public class CourseDto {

    private String courseName;
    private String courseImg;
    private String courseDescription;
    private String mentor;

    // Constructors, getters, and setters

    public CourseDto() {
    }

    public CourseDto(String courseName, String courseImg, String courseDescription, String mentor) {
        this.courseName = courseName;
        this.courseImg = courseImg;
        this.courseDescription = courseDescription;
        this.mentor = mentor;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseImg() {
        return courseImg;
    }

    public void setCourseImg(String courseImg) {
        this.courseImg = courseImg;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public String getMentor() {
        return mentor;
    }

    public void setMentor(String mentor) {
        this.mentor = mentor;
    }
}

