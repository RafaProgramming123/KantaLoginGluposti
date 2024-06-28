package com.example.kantabackend.Model.DTOS;


import lombok.Data;

@Data
public class LoginUserDto {
    private String email;

    private String password;

    // getters and setters here...
}