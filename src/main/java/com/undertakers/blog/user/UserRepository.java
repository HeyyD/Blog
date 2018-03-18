package com.undertakers.blog.user;

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
        users.add(new User("Admin"));
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
        System.out.println("Could not find user with id " + id);
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
        System.out.println("Could not find user with id " + id);
        return null;
    }

    public User findOne(String username) {
        for(User user: users) {
            if(user.getUsername().equals(username))
                return user;
        }
        System.out.println("Could not find user with username " + username);
        return null;
    }
}
