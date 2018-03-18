package com.undertakers.blog.user;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class UserRestController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public User saveUser(@RequestBody User entity){
        return userRepository.saveEntity(entity);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable int id){
        userRepository.delete(id);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login(@RequestBody LoginRequest request){
        return userRepository.login(request);
    }

    public User getUserById(@PathVariable int id) {
        return userRepository.findOne(id);
    }

    @RequestMapping(value = "/users/{username}", method = RequestMethod.GET)
    public User getUserByUsername(@PathVariable String username) {
        return userRepository.findOne(username);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
