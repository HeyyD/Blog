package com.undertakers.blog.user;

import com.fasterxml.jackson.databind.JsonNode;
import com.undertakers.blog.repository.BlogRepository;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserRepository implements BlogRepository<User, Integer>{

    List<User> users;

    @PostConstruct
    public void init() {
        users = new ArrayList<>();
        users.add(new User("Admin", "admin"));
        users.add(new User("User", "user"));
    }

    @Override
    public User saveEntity(User entity) {
        users.add(entity);
        return entity;
    }

    @Override
    public void delete(Integer id) {
        for(User user: users){
            if(user.getId() == id) {
                users.remove(user);
                return;
            }
        }
        throw new UserNotFoundException(id);
    }

    @Override
    public Iterable<User> findAll() {
        return users;
    }

    @Override
    public User findOne(Integer id) {
        for(User user: users){
            if(user.getId() == id)
                return user;
        }
        throw new UserNotFoundException(id);
    }
    
    public boolean login(LoginRequest request) {
        for(User user: users) {
            if(user.getUsername().equals(request.getUsername()) && user.getPassword().equals(request.getPassword()))
                return true;
        }
        System.out.println("Could not find user with username " + request.getUsername());
        return false;
    }
}
