package com.example.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignupDto {
    private Long id;
    private String First_Name;
    private String Last_Name;
    private String email;
    private String phoneNo;
    private String password;
    private String confirm_password;
    // private String role;
}