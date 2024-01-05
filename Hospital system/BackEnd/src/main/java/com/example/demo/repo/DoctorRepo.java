package com.example.demo.repo;

import com.example.demo.entity.Channel;
import com.example.demo.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoctorRepo extends JpaRepository<Doctor, String> {
    Optional<Doctor> findByEmail(String email);
}
