package com.example.kantabackend.Model.RESPONSE;


import lombok.Data;

@Data
public class LoginResponse {
    private String token;

    private long expiresIn;

    public String getToken() {
        return token;
    }

    // Getters and setters...
}
