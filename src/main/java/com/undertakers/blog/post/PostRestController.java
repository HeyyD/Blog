package com.undertakers.blog.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Controller to manage the creation, reading, updating and deleting
 * of blog posts and comments.
 */
@RestController
@RequestMapping(value = "/posts")
public class PostRestController {

    /**
     * Repository that manages database saving and retrieval
     * for blog posts.
     */
    @Autowired
    private PostRepository postRepository;

    /**
     * Repository that manages database saving and retrieval
     * for comments.
     */
    @Autowired
    private CommentRepository commentRepository;

    /**
     * Initializes the post repository with a sample blog post.
     */
    @PostConstruct
    public void init() {
        postRepository.save(new BlogPost("FIRST POST!"
                                        ,"This is the first post"
                                        , 1));
    }

    /**
     * Saves a blog post into database.
     *
     * @param entity The post to save.
     * @return The post that was saved.
     */
    @RequestMapping(method = RequestMethod.POST)
    public BlogPost saveBlogPost(@RequestBody BlogPost entity) {
        return postRepository.save(entity);
    }

    /**
     * Deletes a blog post from database.
     *
     * @param id Id of the post to delete.
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBlogPost(@PathVariable int id) {
        postRepository.deleteById(id);
    }

    /**
     * Finds a specified blog post from database by its id.
     *
     * @param id Id of the post to find.
     * @return The found post, or an empty optional if the post wasn't found.
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<BlogPost> findOne(@PathVariable int id) {
        return postRepository.findById(id);
    }

    /**
     * Finds all blog posts from database.
     *
     * @return Collection of all found blog posts.
     */
    @RequestMapping(method = RequestMethod.GET)
    public Iterable<BlogPost> findAll(){
        return postRepository.findAll();
    }


    //Commenting

    /**
     * Saves a comment into database.
     * @param entity The comment to save.
     * @return The comment that was saved.
     */
    @RequestMapping(value = "/comments", method = RequestMethod.POST)
    public Comment saveComment(@RequestBody Comment entity) {
        return commentRepository.save(entity);
    }

    /**
     * Finds all comments of a single post from database.
     *
     * @param id Id of the blog post the comments are under.
     * @return Collection of all found comments.
     */
    @RequestMapping(value = "{id}/comments", method = RequestMethod.GET)
    public Iterable<Comment> getComments(@PathVariable int id) {
        List<Comment> comments = (List<Comment>) commentRepository.findAll();
        List sorted = new ArrayList();
        comments.stream().filter(c -> c.getPostId() == id).forEach(c -> sorted.add(c));
        return sorted;
    }
}
