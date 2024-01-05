package com.example.demo.controller;

import com.example.demo.dto.AvailabilityDTO;
import com.example.demo.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1/availability")
@CrossOrigin("http://localhost:3000")
public class AvailabilityController {
    @Autowired
    private AvailabilityService availabilityService;

    @GetMapping("/getAvailabilitys")
    public List<AvailabilityDTO> getAvailabilitys() {
        return availabilityService.getAllAvailabilitys();
    }

    @GetMapping("/getAvailability/{id}")
    public AvailabilityDTO getAvailability(@PathVariable String id) {
        return availabilityService.getAvailability(id);
    }

    @GetMapping("/getAvailabilityDoc/{id}")
    public List<AvailabilityDTO> getAvailabilityDoc(@PathVariable String id) {
        return availabilityService.getAvailabilityDoc(id);
    }

    public static String generateShortId() {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString().replace("-", ""); // Remove dashes
        return uuidString.substring(0, 5);
    }

    @PostMapping("/saveAvailability")
    public AvailabilityDTO saveAvailability(@RequestBody AvailabilityDTO availabilityDTO) {
        String shortId = generateShortId();
        availabilityDTO.setAvailabilityId(shortId); // Generate UUID
        return availabilityService.saveAvailability(availabilityDTO);
    }

    @PutMapping("/updateAvailability")
    public AvailabilityDTO updateAvailability(@RequestBody AvailabilityDTO availabilityDTO) {
        return availabilityService.updateAvailability(availabilityDTO);
    }

    @DeleteMapping("/deleteAvailability/{id}")
    public boolean deleteAvailability(@PathVariable String id) {
        return availabilityService.deleteAvailability(id);
    }
}
