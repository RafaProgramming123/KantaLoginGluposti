package com.example.kantabackendfinal.MODEL;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class PhysicalPerson extends User {
    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String telephoneNumber;

    @Column(nullable = false)
    private String location;
}
