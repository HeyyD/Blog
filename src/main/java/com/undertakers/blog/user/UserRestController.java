package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class UserRestController {
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void init(){
        userRepository.save(new User("Admin", "admin"));
        userRepository.save(new User("User", "user"));
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public User saveUser(@RequestBody User entity){
        return userRepository.save(entity);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable int id){
        userRepository.deleteById(id);
    }

    /*
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login(@RequestBody LoginRequest request){
        return userRepository.login(request);
    }
    */

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public Optional<User> getUserById(@PathVariable int id) {
        return userRepository.findById(id);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
