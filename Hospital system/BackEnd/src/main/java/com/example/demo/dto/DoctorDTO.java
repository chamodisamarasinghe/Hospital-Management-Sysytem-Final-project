package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DoctorDTO {

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setChannels(int channels) {
        this.channels = channels;
    }

    private String id;
    private String name;
    private String contact;
    private String email;
    private String specialization;
    private String password;
    private int channels;


}
