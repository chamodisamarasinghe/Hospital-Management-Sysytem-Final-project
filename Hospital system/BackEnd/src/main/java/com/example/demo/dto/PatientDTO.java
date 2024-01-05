package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PatientDTO {

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getGardienName() {
        return gardienName;
    }

    public void setGardienName(String gardienName) {
        this.gardienName = gardienName;
    }

    public String getGardienContact() {
        return gardienContact;
    }

    public void setGardienContact(String gardienContact) {
        this.gardienContact = gardienContact;
    }

    private String id;
    private String password;
    private String email;
    private String name;
    private String contact;
    private String gardienName;
    private String gardienContact;
}
