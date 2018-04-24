package com.undertakers.blog.post;

import com.undertakers.blog.user.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/posts")
public class PostRestController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @PostConstruct
    public void init() {
        postRepository.save(new BlogPost("FIRST POST!"
                                        ,"This is the first post"
                                        , 1));
    }

    @RequestMapping(method = RequestMethod.POST)
    public BlogPost saveBlogPost(@RequestBody BlogPost entity) {
        return postRepository.save(entity);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBlogPost(@PathVariable int id) {
        postRepository.deleteById(id);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<BlogPost> findOne(@PathVariable int id) {
        return postRepository.findById(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public Iterable<BlogPost> findAll(){
        return postRepository.findAll();
    }

    //Commenting
    @RequestMapping(value = "/comments", method = RequestMethod.POST)
    public Comment saveComment(@RequestBody Comment entity) {
        return commentRepository.save(entity);
    }
    @RequestMapping(value = "{id}/comments", method = RequestMethod.GET)
    public Iterable<Comment> getComments(@PathVariable int id) {
        List<Comment> comments = (List<Comment>) commentRepository.findAll();
        List sorted = new ArrayList();
        comments.stream().filter(c -> c.getPostId() == id).forEach(c -> sorted.add(c));
        return sorted;
    }
}
