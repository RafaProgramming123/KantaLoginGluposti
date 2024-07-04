package com.example.kantabackendfinal.REPOSITORY;

import com.example.kantabackendfinal.MODEL.BOOKING.PaperType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PaperTypeRepository extends JpaRepository<PaperType, Long> {
    Optional<PaperType> findBySpecificType(String specificType);
}
