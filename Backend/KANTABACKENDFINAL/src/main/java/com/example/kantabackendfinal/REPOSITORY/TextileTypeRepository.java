package com.example.kantabackendfinal.REPOSITORY;

import com.example.kantabackendfinal.MODEL.BOOKING.TextileType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TextileTypeRepository extends JpaRepository<TextileType, Long> {
    Optional<TextileType> findBySpecificType(String specificType);
}
