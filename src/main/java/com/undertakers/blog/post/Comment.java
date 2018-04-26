package com.undertakers.blog.post;

import javax.persistence.*;
import java.util.Date;

/**
 * Class that contains info on a specific comment. Also
 * contains info on how to save comment to database.
 */
@Entity
@TableGenerator(name = "comment", initialValue = 0)
public class Comment {

    /**
     * A unique id for each comment.
     */
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "comment")
    @Column(name = "id")
    private int id;

    /**
     * Id of the post the comment is under.
     */
    @Column(name = "post_id")
    private int postId;

    /**
     * User id of the creator of the comment.
     */
    @Column(name = "user_id")
    private int userId;

    /**
     * Content of the comment.
     */
    @Column(name = "content")
    private String content;

    /**
     * Creation date and time of the comment.
     */
    @Column(name = "date")
    private Date date;

    /**
     * Default constructor that initializes date as the current date and time.
     */
    public Comment() {
        this.date = new Date();
    }

    /**
     * Constructs the object and initializes its attributes.
     * Uses the default constructor to initialize date.
     *
     * @param postId Id of the post the comment is under.
     * @param userId User id of the creator of the comment.
     * @param content Content of the comment.
     */
    public Comment(int postId, int userId, String content) {
        this();
        this.postId = postId;
        this.userId = userId;
        this.content = content;
    }

    /**
     * @return Creation date and time of the comment.
     */
    public Date getDate() {return this.date;}

    /**
     * @return The unique id for each comment.
     */
    public int getId() {
        return id;
    }

    /**
     * @return Id of the post the comment is under.
     */
    public int getPostId() {
        return postId;
    }

    /**
     * @return User id of the creator of the comment.
     */
    public int getUserId() {
        return userId;
    }

    /**
     * @return Content of the comment.
     */
    public String getContent() {
        return content;
    }
}
