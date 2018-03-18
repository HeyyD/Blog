package com.undertakers.blog.user;

import com.undertakers.blog.repository.BlogRepository;
import java.util.List;

public class UserRepository implements BlogRepository<User, Integer>{

    List<User> users;

    @Override
    public User saveEntity(User entity) {
        return null;
    }

    @Override
    public void delete(Integer integer) {

    }

    @Override
    public Iterable<User> findAll() {
        return null;
    }

    @Override
    public User findOne(Integer integer) {
        return null;
    }
}
