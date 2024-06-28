package com.example.kantabackendfinal.MODEL.RESPONSE;

import lombok.Data;

@Data
public class LoginResponse {
    private String token;
    private long expiresIn;
}
