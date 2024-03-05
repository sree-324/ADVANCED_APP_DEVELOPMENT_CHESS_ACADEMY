package com.example.demo.demo.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import java.util.ArrayList;

import com.example.demo.demo.dto.FeedbackDto;
import com.example.demo.demo.entity.Feedback;
@Component

public class FeedbackMapper {

    public static FeedbackDto mapToFeedbackDTO(Feedback feedback) {
        FeedbackDto feedbackDTO = new FeedbackDto();
        feedbackDTO.setId(feedback.getId());
        feedbackDTO.setName(feedback.getName());
        feedbackDTO.setComments(feedback.getComments());
        return feedbackDTO;
    }

    public static Feedback mapToFeedback(FeedbackDto feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setId(feedbackDTO.getId());
        feedback.setName(feedbackDTO.getName());
        feedback.setComments(feedbackDTO.getComments());
        return feedback;
    }
    public static List<FeedbackDto> mapToFeedbackDTOs(List<Feedback> feedbacks) {
        List<FeedbackDto> feedbackDtos = new ArrayList<>();
        for (Feedback feedback : feedbacks) {
            feedbackDtos.add(mapToFeedbackDTO(feedback));
        }
        return feedbackDtos;
    }
}
