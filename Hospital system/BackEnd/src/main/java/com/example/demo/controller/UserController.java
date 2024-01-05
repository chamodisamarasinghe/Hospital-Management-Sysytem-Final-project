package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getUsers")
    public List<UserDTO> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getUserCount")
    public long getUserCount() {
        return userService.countUsers();
    }

    @GetMapping("/getUser/{id}")
    public UserDTO getUser(@PathVariable String id) {
        return userService.getUser(id);
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


    @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        userDTO.setId(generateShortId());
        userDTO.setPassword(generatePassword());
        return userService.saveUser(userDTO);
    }

    @PutMapping("/updateUser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    @DeleteMapping("/deleteUser/{id}")
    public boolean deleteUser(@PathVariable String id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/ulogin")
    public UserDTO loginUser(@RequestBody UserDTO loginRequest) {
        String id = loginRequest.getId();
        String password = loginRequest.getPassword();
        System.out.println(id);

        UserDTO authenticatedUser = userService.authenticateUser(id, password);

        if (authenticatedUser != null) {
            return authenticatedUser;
        } else {
            return null;
        }
    }


}
