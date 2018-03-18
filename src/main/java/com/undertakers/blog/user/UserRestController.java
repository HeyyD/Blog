package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRestController {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User entity){
        return userRepository.saveEntity(entity);
    }

    public void deleteUser(int id){
        userRepository.delete(id);
    }

    public User getUser(int id) {
        return userRepository.findOne(id);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
