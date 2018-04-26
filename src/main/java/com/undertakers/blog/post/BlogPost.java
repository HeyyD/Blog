package com.undertakers.blog.post;

import javax.persistence.*;
import java.util.Date;

/**
 * Class that contains info on a specific blog post. Also
 * contains info on how to save blog post to database.
 */
@Entity
@TableGenerator(name = "blog_post", initialValue = 0)
public class BlogPost {

    /**
     * A unique id for each blog post.
     */
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "blog_post")
    @Column(name = "id")
    private int id;

    /**
     * Title of the blog post.
     */
    @Column(name = "title")
    private String title;

    /**
     * Content of the blog post.
     */
    @Column(columnDefinition = "clob")
    @Lob
    private String content;

    /**
     * Creation date and time of the blog post.
     */
    @Column(name = "date")
    private Date date;

    /**
     * User id of the creator of the blog post.
     */
    @Column(name = "user_id")
    private int userId;

    /**
     * Default constructor that initializes date as the current date and time.
     */
    public BlogPost() {
        this.date = new Date();
    }

    /**
     * Constructs the object and initializes its attributes.
     * Uses the default constructor to initialize date.
     *
     * @param title Title of the blog post.
     * @param content Content of the blog post.
     * @param userId User id of the creator of the blog post.
     */
    public BlogPost(String title, String content, int userId) {
        this();
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    /**
     * @return The unique id for each blog post.
     */
    public int getId() {
        return id;
    }

    /**
     * @return Title of the blog post.
     */
    public String getTitle() {
        return title;
    }

    /**
     * @return Content of the blog post.
     */
    public String getContent() {
        return content;
    }

    /**
     * @return Creation date and time of the blog post.
     */
    public Date getDate() {
        return date;
    }

    /**
     * @return User id of the creator of the blog post.
     */
    public int getUserId() {return this.userId;}

}
