package com.example.demo.demo.controller;

import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.entity.Feedback;
import com.example.demo.demo.mapper.FeedbackMapper;
import com.example.demo.demo.service.FeedbackService;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    private final FeedbackService feedbackService;
    private final FeedbackMapper feedbackMapper;

    // @Autowired
    public FeedbackController(FeedbackService feedbackService, FeedbackMapper feedbackMapper) {
        this.feedbackService = feedbackService;
        this.feedbackMapper = feedbackMapper;
    }

   @GetMapping
public List<FeedbackDto> getAllFeedbacks() {
    List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
    return feedbackMapper.mapToFeedbackDTOs(feedbacks);
}

    @PostMapping
    public FeedbackDto createFeedback(@RequestBody FeedbackDto feedbackDTO) {
        return feedbackMapper.mapToFeedbackDTO(feedbackService.createFeedback(feedbackMapper.mapToFeedback(feedbackDTO)));
    }
}
