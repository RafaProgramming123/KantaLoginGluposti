package com.example.kantabackendfinal.MODEL.BOOKING.DTO;

import lombok.Data;

import java.util.Date;

import lombok.Data;

import java.util.Date;
import java.util.List;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class BookingRequestDTO {
    private String wasteTypeName;
    private List<String> subTypes;
    private String quantity;
    private Date date;
    private boolean priority;
}