//package com.example.kantabackendfinal.CONTROLLER;
//
//import com.example.kantabackendfinal.MODEL.Admin.DTO.LoginAdminDto;
//import com.example.kantabackendfinal.MODEL.User;
//import com.example.kantabackendfinal.SERVICE.AdminService;
//import com.example.kantabackendfinal.SERVICE.JwtService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@RequestMapping("/admin")
//public class AdminController {
//    private final AdminService adminService;
//    private final JwtService jwtService;
//
//    public AdminController(AdminService adminService, JwtService jwtService) {
//        this.adminService = adminService;
//        this.jwtService = jwtService;
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody LoginAdminDto loginAdminDto) {
//        boolean isAuthenticated = adminService.authenticateAdmin(loginAdminDto.getUsername(), loginAdminDto.getPassword());
//        if (isAuthenticated) {
//            // Generate JWT token for the admin
//            String token = jwtService.generateToken(new org.springframework.security.core.userdetails.User(loginAdminDto.getUsername(), "", new ArrayList<>()));
//            return ResponseEntity.ok(token);
//        } else {
//            return ResponseEntity.status(401).body("Invalid credentials");
//        }
//    }
//
//    @GetMapping("/users")
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = adminService.getAllUsers();
//        return ResponseEntity.ok(users);
//    }
//}

package com.example.kantabackendfinal.CONTROLLER;

import com.example.kantabackendfinal.MODEL.Admin.DTO.LoginAdminDto;
import com.example.kantabackendfinal.MODEL.User;
import com.example.kantabackendfinal.SERVICE.AdminService;
import com.example.kantabackendfinal.SERVICE.JwtService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;
    private final JwtService jwtService;

    public AdminController(AdminService adminService, JwtService jwtService) {
        this.adminService = adminService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginAdminDto loginAdminDto) {
        boolean isAuthenticated = adminService.authenticateAdmin(loginAdminDto.getUsername(), loginAdminDto.getPassword());
        if (isAuthenticated) {
            // Generate JWT token for the admin
            String token = jwtService.generateToken(new org.springframework.security.core.userdetails.User(loginAdminDto.getUsername(), "", new ArrayList<>()));
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = adminService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}