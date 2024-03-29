package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.demo.entity.Enroll;

@Repository
public interface EnrollRepository extends JpaRepository<Enroll, Long> {
}
