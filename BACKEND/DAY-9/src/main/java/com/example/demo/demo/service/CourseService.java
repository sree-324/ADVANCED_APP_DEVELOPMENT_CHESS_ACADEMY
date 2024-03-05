package com.example.demo.demo.service;

// CourseService.java
import java.util.List;

import com.example.demo.demo.dto.CourseDto;

public interface CourseService {
    List<CourseDto> getAllCourses();
    CourseDto getCourseById(Long id);
    CourseDto createCourse(CourseDto courseDTO);
    CourseDto updateCourse(Long id, CourseDto courseDTO);
    void deleteCourse(Long id);
}
