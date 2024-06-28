package com.example.kantabackendfinal.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Institution extends User {
    @Column(nullable = false)
    private String institutionName;

    @Column(nullable = false)
    private String location;
}
