package com.example.kantabackendfinal.MODEL.BOOKING;

import com.example.kantabackendfinal.MODEL.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "waste_type_id", nullable = false)
    private WasteType wasteType;

    @ElementCollection
    @CollectionTable(name = "booking_subtypes", joinColumns = @JoinColumn(name = "booking_id"))
    @Column(name = "subtype")
    private List<String> subTypes;

    @Column(nullable = false)
    private String quantity;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private boolean priority;
}