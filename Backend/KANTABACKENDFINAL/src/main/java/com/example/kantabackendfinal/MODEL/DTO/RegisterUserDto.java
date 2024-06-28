package com.example.kantabackendfinal.MODEL.DTO;

import lombok.Data;

@Data
public class RegisterUserDto {
    private String type; // "person", "company", or "institution"
    private String fullName; // Common for all types
    private String surname; // Only for Physical person
    private String email;
    private String password;
    private String telephoneNumber; // Only for Physical person and Company
    private String location;
    private String taxNumber; // Only for Company
}
