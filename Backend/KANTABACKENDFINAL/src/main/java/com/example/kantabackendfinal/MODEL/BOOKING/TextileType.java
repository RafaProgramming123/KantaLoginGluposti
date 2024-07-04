package com.example.kantabackendfinal.MODEL.BOOKING;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class TextileType  {
    // Example subtypes for textile
    private String specificType;

    @ManyToOne
    private WasteType wasteType;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
