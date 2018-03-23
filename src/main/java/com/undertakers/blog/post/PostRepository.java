package com.undertakers.blog.post;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PostRepository extends CrudRepository<BlogPost, Integer>{
}
