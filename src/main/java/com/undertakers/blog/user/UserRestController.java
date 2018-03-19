package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable int id) {
        return userRepository.findOne(id);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
