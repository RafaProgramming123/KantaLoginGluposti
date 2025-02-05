package com.example.kantabackendfinal.REPOSITORY;


import com.example.kantabackendfinal.MODEL.Admin.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Integer> {
    Optional<Admin> findByUsername(String username);
}
