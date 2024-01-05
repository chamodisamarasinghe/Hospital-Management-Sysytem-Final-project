package com.example.demo.service;

import com.example.demo.dto.AvailabilityDTO;
import com.example.demo.dto.AvailabilityDTO;
import com.example.demo.dto.DoctorDTO;
import com.example.demo.entity.Availability;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.AvailabilityRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AvailabilityService {
    @Autowired
    private AvailabilityRepo availabilityRepo;
    @Autowired
    private ModelMapper modelMapper;

    public AvailabilityDTO saveAvailability(AvailabilityDTO AvailabilityDTO) {
        availabilityRepo.save(modelMapper.map(AvailabilityDTO, Availability.class));
        return AvailabilityDTO;
    }

    public List<AvailabilityDTO> getAllAvailabilitys() {
        List<Availability> availabilityList = availabilityRepo.findAll();
        return modelMapper.map(availabilityList, new TypeToken<List<AvailabilityDTO>>() {
        }.getType());
    }

    public AvailabilityDTO getAvailability(String id) {
        Optional<Availability> availability = availabilityRepo.findById(id);

        if (availability.isPresent()) {
            return modelMapper.map(availability.get(), AvailabilityDTO.class);
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public List<AvailabilityDTO> getAvailabilityDoc(String id) {
        List<Availability> availabilityList = availabilityRepo.findByDoctorId(id);

        if (!availabilityList.isEmpty()) {
            return modelMapper.map(availabilityList, new TypeToken<List<AvailabilityDTO>>() {
            }.getType());
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public AvailabilityDTO updateAvailability(AvailabilityDTO AvailabilityDTO) {
        availabilityRepo.save(modelMapper.map(AvailabilityDTO, Availability.class));
        return AvailabilityDTO;
    }

    public boolean deleteAvailability(String id) {
        if (!availabilityRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        availabilityRepo.deleteById(id);
        return true;
    }
}
