package com.example.demo.demo.mapper;

import com.example.demo.demo.dto.EnrollmentDto;
import com.example.demo.demo.entity.Enroll;

public class EnrollmentMapper {

    public static EnrollmentDto mapToEnrollmentDTO(Enroll enrollment) {
        EnrollmentDto enrollmentDTO = new EnrollmentDto();
        enrollmentDTO.setName(enrollment.getName());
        enrollmentDTO.setAge(enrollment.getAge());
        enrollmentDTO.setRating(enrollment.getRating());
        enrollmentDTO.setBranch(enrollment.getBranch());
        enrollmentDTO.setCourse(enrollment.getCourse());
        return enrollmentDTO;
    }

    public static Enroll mapToEnrollment(EnrollmentDto enrollmentDTO) {
        Enroll enrollment = new Enroll();
        enrollment.setName(enrollmentDTO.getName());
        enrollment.setAge(enrollmentDTO.getAge());
        enrollment.setRating(enrollmentDTO.getRating());
        enrollment.setBranch(enrollmentDTO.getBranch());
        enrollment.setCourse(enrollmentDTO.getCourse());
        return enrollment;
    }
}
