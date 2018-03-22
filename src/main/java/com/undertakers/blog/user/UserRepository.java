package com.undertakers.blog.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface UserRepository extends CrudRepository<User, Integer>{
}
