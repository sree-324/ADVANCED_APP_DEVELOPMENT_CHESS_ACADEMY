package com.example.demo.demo.service;

import com.example.demo.demo.entity.Feedback;

import java.util.List;

public interface FeedbackService {

    List<Feedback> getAllFeedbacks();

    Feedback createFeedback(Feedback feedback);
}
