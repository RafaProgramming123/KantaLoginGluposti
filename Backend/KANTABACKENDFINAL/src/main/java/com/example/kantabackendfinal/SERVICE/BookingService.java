package com.example.kantabackendfinal.SERVICE;


import com.example.kantabackendfinal.MODEL.BOOKING.Booking;
import com.example.kantabackendfinal.MODEL.BOOKING.DTO.BookingRequestDTO;
import com.example.kantabackendfinal.MODEL.BOOKING.DTO.BookingResponseDTO;
import com.example.kantabackendfinal.MODEL.BOOKING.WasteType;
import com.example.kantabackendfinal.MODEL.User;
import com.example.kantabackendfinal.REPOSITORY.BookingRepository;
import com.example.kantabackendfinal.REPOSITORY.UserRepository;
import com.example.kantabackendfinal.REPOSITORY.WasteTypeRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;
    private final WasteTypeRepository wasteTypeRepository;
    private final UserRepository userRepository;

    public BookingService(BookingRepository bookingRepository, WasteTypeRepository wasteTypeRepository, UserRepository userRepository) {
        this.bookingRepository = bookingRepository;
        this.wasteTypeRepository = wasteTypeRepository;
        this.userRepository = userRepository;
    }

    public BookingResponseDTO createBooking(BookingRequestDTO bookingRequestDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        WasteType wasteType = wasteTypeRepository.findByName(bookingRequestDTO.getWasteTypeName())
                .orElseThrow(() -> new RuntimeException("Waste type not found"));

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setWasteType(wasteType);
        booking.setSubTypes(bookingRequestDTO.getSubTypes());
        booking.setQuantity(bookingRequestDTO.getQuantity());
        booking.setDate(bookingRequestDTO.getDate());
        booking.setPriority(bookingRequestDTO.isPriority());

        bookingRepository.save(booking);

        return new BookingResponseDTO(booking);
    }

    public List<BookingResponseDTO> getAllBookings() {
        return bookingRepository.findAll().stream()
                .map(BookingResponseDTO::new)
                .collect(Collectors.toList());
    }

    public BookingResponseDTO getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        return new BookingResponseDTO(booking);
    }
}