package com.undertakers.blog.post;

import com.undertakers.blog.user.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@RestController
public class PostRestController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private EntityManager entityManager;

    @PostConstruct
    public void init(){
        postRepository.save(new BlogPost("Heidi's lifestyle blogs first post", "Today I drank a bottle of wine, and played smite."));
    }
    
    @RequestMapping(value = "/posts", method = RequestMethod.POST)
    public BlogPost saveBlogPost(@RequestBody BlogPost entity) {
        return postRepository.save(entity);
    }
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.DELETE)
    public void deleteBlogPost(@PathVariable int id) {
        postRepository.deleteById(id);
    }
    @RequestMapping(value = "/posts/{id}", method = RequestMethod.GET)
    public Optional<BlogPost> findOne(@PathVariable int id) {
        return postRepository.findById(id);
    }
    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<BlogPost> findAll(){
        return postRepository.findAll();
    }
}
