package com.example.demo.repo;

import com.example.demo.entity.Availability;
import com.example.demo.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvailabilityRepo extends JpaRepository<Availability, String> {
    List<Availability> findByDoctorId(String doctorId);
}
