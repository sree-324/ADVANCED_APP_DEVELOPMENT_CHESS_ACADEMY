package com.example.demo.demo.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.demo.dto.CourseDto;
import com.example.demo.demo.entity.Course;
import com.example.demo.demo.repository.CourseRepository;
import com.example.demo.demo.service.CourseService;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<CourseDto> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        return convertToDTO(course);
    }

    @Override
    public CourseDto createCourse(CourseDto courseDTO) {
        Course course = convertToEntity(courseDTO);
        return convertToDTO(courseRepository.save(course));
    }

    @Override
    public CourseDto updateCourse(Long id, CourseDto courseDTO) {
        Course existingCourse = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        existingCourse.setCourseName(courseDTO.getCourseName());
        existingCourse.setCourseImg(courseDTO.getCourseImg());
        existingCourse.setCourseDescription(courseDTO.getCourseDescription());
        existingCourse.setMentor(courseDTO.getMentor());
        return convertToDTO(courseRepository.save(existingCourse));
    }

    @Override
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    private CourseDto convertToDTO(Course course) {
        CourseDto dto = new CourseDto();
        dto.setCourseName(course.getCourseName());
        dto.setCourseImg(course.getCourseImg());
        dto.setCourseDescription(course.getCourseDescription());
        dto.setMentor(course.getMentor());
        return dto;
    }

    private Course convertToEntity(CourseDto dto) {
        Course course = new Course();
        course.setCourseName(dto.getCourseName());
        course.setCourseImg(dto.getCourseImg());
        course.setCourseDescription(dto.getCourseDescription());
        course.setMentor(dto.getMentor());
        return course;
    }
}
