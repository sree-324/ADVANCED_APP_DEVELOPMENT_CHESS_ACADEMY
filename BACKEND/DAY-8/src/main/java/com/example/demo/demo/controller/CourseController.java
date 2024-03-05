package com.example.demo.demo.controller;

// CourseController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.demo.dto.CourseDto;
import com.example.demo.demo.service.CourseService;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<CourseDto> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public CourseDto getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    @PostMapping
    public CourseDto createCourse(@RequestBody CourseDto courseDTO) {
        return courseService.createCourse(courseDTO);
    }

    @PutMapping("/{id}")
    public CourseDto updateCourse(@PathVariable Long id, @RequestBody CourseDto courseDTO) {
        return courseService.updateCourse(id, courseDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }
}
