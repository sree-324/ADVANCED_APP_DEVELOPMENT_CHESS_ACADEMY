package com.example.demo.demo.service;

import java.util.List;

import com.example.demo.demo.dto.EnrollmentDto;

public interface EnrollmentService {
    EnrollmentDto createEnrollment(EnrollmentDto enrollmentDTO);
    EnrollmentDto getEnrollment(Long id);
    List<EnrollmentDto> getAllEnrollments();
    void deleteEnrollment(Long id);
}
