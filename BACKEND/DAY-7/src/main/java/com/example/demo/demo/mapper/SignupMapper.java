package com.example.demo.demo.mapper;

import com.example.demo.demo.entity.Signup;

import com.example.demo.demo.dto.SignupDto;

public class SignupMapper {

    public static SignupDto maptoSignupDto(Signup signup) {
        return new SignupDto(
                signup.getId(),
                signup.getFirst_Name(),
                signup.getLast_Name(),
                signup.getEmail(),
                signup.getPhoneNo(),
                signup.getPassword(),
                signup.getConfirm_password()
                // signup.getRole()

        );
    }

    public static Signup maptoSignup(SignupDto signupdto) {
        return new Signup(
                signupdto.getId(),
                signupdto.getFirst_Name(),
                signupdto.getLast_Name(),
                signupdto.getEmail(),
                signupdto.getPhoneNo(),
                signupdto.getPassword(),
                signupdto.getConfirm_password()
                // signupdto.getRole()

        );
    }

}