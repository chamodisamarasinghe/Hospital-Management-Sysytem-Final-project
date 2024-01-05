package com.example.demo.dto;

import com.example.demo.entity.Doctor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AvailabilityDTO {

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

    private String availabilityId;

    private Doctor doctor;

    private String dayOfWeek;

    private String startTime;

    private String endTime;
}
