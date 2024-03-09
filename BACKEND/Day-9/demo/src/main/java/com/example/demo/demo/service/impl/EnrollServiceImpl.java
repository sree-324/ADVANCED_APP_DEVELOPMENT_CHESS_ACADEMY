package com.example.demo.demo.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.demo.dto.EnrollmentDto;
import com.example.demo.demo.entity.Enroll;
import com.example.demo.demo.repository.EnrollRepository;

import com.example.demo.demo.service.EnrollmentService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnrollServiceImpl implements EnrollmentService {

    @Autowired
    private EnrollRepository enrollmentRepository;

    @Override
    public EnrollmentDto createEnrollment(EnrollmentDto enrollmentDTO) {
        Enroll enrollment = new Enroll();
        BeanUtils.copyProperties(enrollmentDTO, enrollment);
        enrollment = enrollmentRepository.save(enrollment);
        BeanUtils.copyProperties(enrollment, enrollmentDTO);
        return enrollmentDTO;
    }

    @Override
    public EnrollmentDto getEnrollment(Long id) {
        Enroll enrollment = enrollmentRepository.findById(id).orElse(null);
        EnrollmentDto enrollmentDTO = new EnrollmentDto();
        BeanUtils.copyProperties(enrollment, enrollmentDTO);
        return enrollmentDTO;
    }

    @Override
    public List<EnrollmentDto> getAllEnrollments() {
        return enrollmentRepository.findAll().stream()
                .map(enrollment -> {
                    EnrollmentDto enrollmentDTO = new EnrollmentDto();
                    BeanUtils.copyProperties(enrollment, enrollmentDTO);
                    return enrollmentDTO;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }
}
