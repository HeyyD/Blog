package com.undertakers.blog.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostRestController {
    @Autowired
    private PostRepository postRepository;

    public BlogPost saveBlogPost(BlogPost entity) {
        return postRepository.saveEntity(entity);
    }
    public void deleteBlogPost(int id) {
        postRepository.delete(id);
    }
    public BlogPost findOne(int id) {
        return postRepository.findOne(id);
    }
    public Iterable<BlogPost> findAll(){
        return postRepository.findAll();
    }
}
