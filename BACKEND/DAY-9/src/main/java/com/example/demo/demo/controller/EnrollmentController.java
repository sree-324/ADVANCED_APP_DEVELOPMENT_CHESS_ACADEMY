package com.example.demo.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.demo.dto.EnrollmentDto;
import com.example.demo.demo.service.EnrollmentService;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping
    public EnrollmentDto createEnrollment(@RequestBody EnrollmentDto enrollmentDTO) {
        return enrollmentService.createEnrollment(enrollmentDTO);
    }

    @GetMapping("/{id}")
    public EnrollmentDto getEnrollment(@PathVariable Long id) {
        return enrollmentService.getEnrollment(id);
    }

    @GetMapping
    public List<EnrollmentDto> getAllEnrollments() {
        return enrollmentService.getAllEnrollments();
    }

}

