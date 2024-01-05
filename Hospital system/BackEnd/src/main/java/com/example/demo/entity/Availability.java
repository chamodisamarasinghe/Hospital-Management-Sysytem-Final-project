package com.example.demo.entity;

import com.example.demo.entity.Doctor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.print.Doc;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Availability {

    @Id
    private String availabilityId;

    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "doctor_id")
    private Doctor doctor;

    private String dayOfWeek;

    private String startTime;

    private String endTime;

    // Constructors, getters, and setters

    public Availability(Doctor doctor, String dayOfWeek, String startTime, String endTime) {
        this.doctor = doctor;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // Getter and setter methods for all fields

    public void setAvailabilityId(String availabilityId) {
        this.availabilityId = availabilityId;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    // Other methods as needed
}
