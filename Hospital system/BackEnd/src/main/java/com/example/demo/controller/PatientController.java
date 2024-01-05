package com.example.demo.controller;

import com.example.demo.dto.PatientDTO;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1/patient")
@CrossOrigin("http://localhost:3000")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @GetMapping("/getPatients")
    public List<PatientDTO> getPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/getPatientsCount")
    public long getPatientsCount() {
        return patientService.countPatients();
    }

    @GetMapping("/getPatient/{id}")
    public PatientDTO getPatient(@PathVariable String id) {
        return patientService.getPatient(id);
    }

    public static String generateShortId() {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString().replace("-", ""); // Remove dashes
        return uuidString.substring(0, 5);
    }

    public static String generatePassword() {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString().replace("-", ""); // Remove dashes
        return uuidString.substring(0, 8);
    }

    @PostMapping("/savePatient")
    public PatientDTO savePatient(@RequestBody PatientDTO patientDTO) {
        patientDTO.setId(generateShortId());
        patientDTO.setPassword(generatePassword());
        return patientService.savePatient(patientDTO);
    }

    @PutMapping("/updatePatient")
    public PatientDTO updatePatient(@RequestBody PatientDTO patientDTO) {
        return patientService.updatePatient(patientDTO);
    }

    @DeleteMapping("/deletePatient/{id}")
    public boolean deletePatient(@PathVariable String id) {
        return patientService.deletePatient(id);
    }

    @PostMapping("/plogin")
    public PatientDTO loginPatient(@RequestBody PatientDTO loginRequest) {
        String id = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        System.out.println(id);

        PatientDTO authenticatedPatient = patientService.authenticatePatient(id, password);

        if (authenticatedPatient != null) {
            return authenticatedPatient;
        } else {
            return null;
        }
    }


}
