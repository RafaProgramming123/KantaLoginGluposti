package com.example.kantabackendfinal.MODEL.BOOKING.DTO;

import com.example.kantabackendfinal.MODEL.BOOKING.Booking;
import com.example.kantabackendfinal.MODEL.BOOKING.WasteType;
import lombok.Data;

import java.util.Date;


import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class BookingResponseDTO {
    private Long id;
    private String wasteTypeName;
    private List<String> subTypes;
    private String quantity;
    private Date date;
    private boolean priority;
    private String userEmail;

    public BookingResponseDTO(Booking booking) {
        this.id = booking.getId();
        this.wasteTypeName = booking.getWasteType().getName();
        this.subTypes = booking.getSubTypes();
        this.quantity = booking.getQuantity();
        this.date = booking.getDate();
        this.priority = booking.isPriority();
        this.userEmail = booking.getUser().getEmail();
    }
}