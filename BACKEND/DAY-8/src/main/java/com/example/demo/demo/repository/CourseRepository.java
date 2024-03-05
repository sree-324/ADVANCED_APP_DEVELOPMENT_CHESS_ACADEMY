package com.example.demo.demo.repository;

// CourseRepository.java
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.demo.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
