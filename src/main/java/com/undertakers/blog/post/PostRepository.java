package com.undertakers.blog.post;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PostRepository extends CrudRepository<BlogPost, Integer>{

    /*
    private List<BlogPost> posts;

    @PostConstruct
    private void  init() {
        this.posts = new ArrayList<>();
        this.posts.add(new BlogPost("Title", "This is a example BlogPost"));
    }

    @Override
    public BlogPost saveEntity(BlogPost entity) {
        posts.add(entity);
        return entity;
    }

    @Override
    public void delete(Integer id) {
        for(BlogPost post: posts){
            if(post.getId() == id){
                posts.remove(post);
                return;
            }
        }
    }

    @Override
    public Iterable<BlogPost> findAll() {
        return this.posts;
    }

    @Override
    public BlogPost findOne(Integer id) {
        for(BlogPost post: posts){
            if(post.getId() == id){
                return post;
            }
        }
        return null;
    }
    */
}
