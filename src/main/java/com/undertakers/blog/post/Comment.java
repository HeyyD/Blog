package com.undertakers.blog.post;

import javax.persistence.*;
import java.util.Date;

@Entity
@TableGenerator(name = "comment", initialValue = 0)
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "comment")
    @Column(name = "id")
    private int id;
    @Column(name = "post_id")
    private int postId;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "content")
    private String content;
    @Column(name = "date")
    private Date date;

    public Comment() {
        this.date = new Date();
    }

    public Comment(int postId, int userId, String content) {
        this();
        this.postId = postId;
        this.userId = userId;
        this.content = content;
    }

    public int getId() {
        return id;
    }

    public int getPostId() {
        return postId;
    }

    public int getUserId() {
        return userId;
    }

    public String getContent() {
        return content;
    }
}
