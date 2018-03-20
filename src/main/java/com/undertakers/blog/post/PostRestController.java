package com.undertakers.blog.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostRestController {
    @Autowired
    private PostRepository postRepository;

    @RequestMapping(value = "/posts", method = RequestMethod.POST)
    public BlogPost saveBlogPost(@RequestBody BlogPost entity) {
        return postRepository.saveEntity(entity);
    }
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.DELETE)
    public void deleteBlogPost(@PathVariable int id) {
        postRepository.delete(id);
    }
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.GET)
    public BlogPost findOne(@PathVariable int id) {
        return postRepository.findOne(id);
    }
    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<BlogPost> findAll(){
        return postRepository.findAll();
    }
}
