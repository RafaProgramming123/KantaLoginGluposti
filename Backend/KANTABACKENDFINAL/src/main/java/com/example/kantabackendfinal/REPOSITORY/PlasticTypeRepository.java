package com.example.kantabackendfinal.REPOSITORY;

import com.example.kantabackendfinal.MODEL.BOOKING.PlasticType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlasticTypeRepository extends JpaRepository<PlasticType, Long> {
    Optional<PlasticType> findBySpecificType(String specificType);
}
