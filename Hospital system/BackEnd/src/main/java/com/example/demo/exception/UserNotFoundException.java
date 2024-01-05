package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String id){
        super("Could not found the user"+id);
    }
}
