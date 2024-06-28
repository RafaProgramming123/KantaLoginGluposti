package com.example.kantabackendfinal.SERVICE;

import com.example.kantabackendfinal.MODEL.Company;
import com.example.kantabackendfinal.MODEL.DTO.LoginUserDto;
import com.example.kantabackendfinal.MODEL.DTO.RegisterUserDto;
import com.example.kantabackendfinal.MODEL.Institution;
import com.example.kantabackendfinal.MODEL.PhysicalPerson;
import com.example.kantabackendfinal.MODEL.User;
import com.example.kantabackendfinal.REPOSITORY.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(RegisterUserDto input) {
        User user;
        switch (input.getType().toLowerCase()) {
            case "person":
                PhysicalPerson person = new PhysicalPerson();
                person.setFullName(input.getFullName());
                person.setEmail(input.getEmail());
                person.setPassword(passwordEncoder.encode(input.getPassword()));
                person.setTelephoneNumber(input.getTelephoneNumber());
                person.setLocation(input.getLocation());
                user = person;
                break;
            case "company":
                Company company = new Company();
                company.setCompanyName(input.getFullName());
                company.setEmail(input.getEmail());
                company.setPassword(passwordEncoder.encode(input.getPassword()));
                company.setNumber(input.getTelephoneNumber());
                company.setTaxNumber(input.getTaxNumber());
                company.setLocation(input.getLocation());
                user = company;
                break;
            case "institution":
                Institution institution = new Institution();
                institution.setInstitutionName(input.getFullName());
                institution.setEmail(input.getEmail());
                institution.setPassword(passwordEncoder.encode(input.getPassword()));
                institution.setLocation(input.getLocation());
                user = institution;
                break;
            default:
                throw new IllegalArgumentException("Invalid user type");
        }
        return userRepository.save(user);
    }

    public User authenticate(LoginUserDto input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        return userRepository.findByEmail(input.getEmail())
                .orElseThrow();
    }
}
