package com.example.demo.service;

import com.example.demo.dto.DoctorDTO;
import com.example.demo.dto.DoctorDTO;
import com.example.demo.entity.Doctor;
import com.example.demo.entity.Doctor;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.DoctorRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DoctorService {
    @Autowired
    private DoctorRepo doctorRepo;
    @Autowired
    private ModelMapper modelMapper;

    public DoctorDTO saveDoctor(DoctorDTO doctorDTO) {
        doctorRepo.save(modelMapper.map(doctorDTO, Doctor.class));
        return doctorDTO;
    }

    public List<DoctorDTO> getAllDoctors() {
        List<Doctor> doctorList = doctorRepo.findAll();
        return modelMapper.map(doctorList, new TypeToken<List<DoctorDTO>>() {
        }.getType());
    }

    public DoctorDTO getDoctor(String id) {
        Optional<Doctor> doctor = doctorRepo.findById(id);

        if (doctor.isPresent()) {
            return modelMapper.map(doctor.get(), DoctorDTO.class);
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public DoctorDTO updateDoctor(DoctorDTO doctorDTO) {
        doctorRepo.save(modelMapper.map(doctorDTO, Doctor.class));
        return doctorDTO;
    }

    public boolean deleteDoctor(String id) {
        if (!doctorRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        doctorRepo.deleteById(id);
        return true;
    }

    public DoctorDTO authenticateDoctor(String id, String password) {
        // Find a doctor by email
        Optional<Doctor> doctor = doctorRepo.findByEmail(id);
        DoctorDTO doctorDTO = null;
        if (doctor.isPresent()) {
            doctorDTO = modelMapper.map(doctor.get(), DoctorDTO.class);
            System.out.println(doctorDTO.getPassword());
        }else {
            throw new UserNotFoundException(id);
        }

        if (password.equals(doctorDTO.getPassword())) {
            return doctorDTO;
        } else {
            throw new UserNotFoundException(id);
        }
    }

    public Long countDoctors() {
        return doctorRepo.count();
    }

}
