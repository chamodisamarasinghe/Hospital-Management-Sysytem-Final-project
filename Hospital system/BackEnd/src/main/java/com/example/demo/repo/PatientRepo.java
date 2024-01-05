package com.example.demo.repo;

import com.example.demo.dto.PatientDTO;
import com.example.demo.entity.Doctor;
import com.example.demo.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PatientRepo extends JpaRepository<Patient, String> {
    Optional<Patient> findByEmail(String email);
}
