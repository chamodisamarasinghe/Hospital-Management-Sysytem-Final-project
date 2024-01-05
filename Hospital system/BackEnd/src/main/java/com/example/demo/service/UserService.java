package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.entity.User;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;

    public UserDTO saveUser(UserDTO userDTO) {
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public List<UserDTO> getAllUsers() {
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {
        }.getType());
    }

    public UserDTO getUser(String id) {
        Optional<User> user = userRepo.findById(id);

        if (user.isPresent()) {
            return modelMapper.map(user.get(), UserDTO.class);
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public UserDTO updateUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO,User.class));
        return userDTO;
    }

    public boolean deleteUser(String id){
        if (!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return true;
    }

    public UserDTO authenticateUser(String id, String password) {
        // Find a doctor by email
        Optional<User> user = userRepo.findById(id);
        UserDTO userDTO = null;
        if (user.isPresent()) {
            userDTO = modelMapper.map(user.get(), UserDTO.class);
            System.out.println(userDTO.getPassword());
        }else {
            throw new UserNotFoundException(id);
        }

        if (password.equals(userDTO.getPassword())) {
            return userDTO;
        } else {
            throw new UserNotFoundException(id);
        }
    }

    public Long countUsers() {
        return userRepo.count();
    }

}
