package com.example.kantabackendfinal.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Company extends User {
    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String number;

    @Column(nullable = false)
    private String taxNumber;

    @Column(nullable = false)
    private String location;
}
