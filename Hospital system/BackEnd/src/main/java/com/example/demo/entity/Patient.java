package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Patient {

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

    @Id
    private String id;
    private String password;
    private String email;
    private String name;
    private String contact;
    private String gardienName;
    private String gardienContact;

}
