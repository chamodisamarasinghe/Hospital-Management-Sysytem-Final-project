package com.example.demo.controller;

import com.example.demo.dto.DoctorDTO;
import com.example.demo.dto.DoctorDTO;
import com.example.demo.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1/doctor")
@CrossOrigin("http://localhost:3000")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @GetMapping("/getDoctors")
    public List<DoctorDTO> getDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/getDoctorCount")
    public long getDoctorCount() {
        return doctorService.countDoctors();
    }

    @GetMapping("/getDoctor/{id}")
    public DoctorDTO getDoctor(@PathVariable String id) {
        return doctorService.getDoctor(id);
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


    @PostMapping("/saveDoctor")
    public DoctorDTO saveDoctor(@RequestBody DoctorDTO doctorDTO) {
        doctorDTO.setId(generateShortId());
        doctorDTO.setPassword(generatePassword());
        return doctorService.saveDoctor(doctorDTO);
    }

    @PutMapping("/updateDoctor")
    public DoctorDTO updateDoctor(@RequestBody DoctorDTO doctorDTO) {
        return doctorService.updateDoctor(doctorDTO);
    }

    @DeleteMapping("/deleteDoctor/{id}")
    public boolean deleteDoctor(@PathVariable String id) {
        return doctorService.deleteDoctor(id);
    }

    @PostMapping("/dlogin")
    public DoctorDTO loginDoctor(@RequestBody DoctorDTO loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        DoctorDTO authenticatedDoctor = doctorService.authenticateDoctor(email, password);

        if (authenticatedDoctor != null) {
            return authenticatedDoctor;
        } else {
            return null;
        }
    }


}
