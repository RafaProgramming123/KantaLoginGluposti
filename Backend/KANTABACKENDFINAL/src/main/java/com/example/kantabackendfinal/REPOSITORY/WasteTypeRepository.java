package com.example.kantabackendfinal.REPOSITORY;

import com.example.kantabackendfinal.MODEL.BOOKING.WasteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WasteTypeRepository extends JpaRepository<WasteType,Long> {

    Optional<WasteType> findByName(String name);

}
