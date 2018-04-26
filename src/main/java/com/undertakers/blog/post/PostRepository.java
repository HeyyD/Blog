package com.undertakers.blog.post;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

/**
 * Repository to manage post creation, reading, updating and deleting.
 */
@RestController
public interface PostRepository extends CrudRepository<BlogPost, Integer>{
}
