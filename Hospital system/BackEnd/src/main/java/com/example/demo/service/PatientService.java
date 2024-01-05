package com.example.demo.service;

import com.example.demo.dto.PatientDTO;
import com.example.demo.dto.PatientDTO;
import com.example.demo.entity.Patient;
import com.example.demo.entity.Patient;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.PatientRepo;
import com.example.demo.repo.PatientRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PatientService {
    @Autowired
    private PatientRepo patientRepo;
    @Autowired
    private ModelMapper modelMapper;

    public PatientDTO savePatient(PatientDTO patientDTO) {
        patientRepo.save(modelMapper.map(patientDTO, Patient.class));
        return patientDTO;
    }

    public List<PatientDTO> getAllPatients() {
        List<Patient> doctorList = patientRepo.findAll();
        return modelMapper.map(doctorList, new TypeToken<List<PatientDTO>>() {
        }.getType());
    }

    public PatientDTO getPatient(String id) {
        Optional<Patient> patient = patientRepo.findById(id);

        if (patient.isPresent()) {
            return modelMapper.map(patient.get(), PatientDTO.class);
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public PatientDTO updatePatient(PatientDTO patientDTO) {
        patientRepo.save(modelMapper.map(patientDTO, Patient.class));
        return patientDTO;
    }

    public boolean deletePatient(String id) {
        if (!patientRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        patientRepo.deleteById(id);
        return true;
    }

    public PatientDTO authenticatePatient(String email, String password) {
        // Find a doctor by email
        Optional<Patient> patient = patientRepo.findByEmail(email);
        PatientDTO patientDTO = null;
        if (patient.isPresent()) {
            patientDTO = modelMapper.map(patient.get(), PatientDTO.class);
            System.out.println(patientDTO.getPassword());
        }else {
            throw new UserNotFoundException(email);
        }

        if (password.equals(patientDTO.getPassword())) {
            return patientDTO;
        } else {
            throw new UserNotFoundException(email);
        }
    }

    public Long countPatients() {
        return patientRepo.count();
    }
}




