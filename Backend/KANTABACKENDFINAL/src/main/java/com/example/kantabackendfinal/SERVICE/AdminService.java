package com.example.kantabackendfinal.SERVICE;

import com.example.kantabackendfinal.MODEL.User;
import com.example.kantabackendfinal.REPOSITORY.AdminRepository;
import com.example.kantabackendfinal.REPOSITORY.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean authenticateAdmin(String username, String password) {
        return adminRepository.findByUsername(username)
                .map(admin -> passwordEncoder.matches(password, admin.getPassword()))
                .orElse(false);
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
}
