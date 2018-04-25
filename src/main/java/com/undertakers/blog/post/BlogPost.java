package com.undertakers.blog.post;

import com.undertakers.blog.like.LikeContainer;

import javax.persistence.*;
import java.util.Date;

@Entity
@TableGenerator(name = "blog_post", initialValue = 0)
public class BlogPost {

    private LikeContainer likeContainer;


    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "blog_post")
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(columnDefinition = "clob")
    @Lob
    private String content;
    @Column(name = "date")
    private Date date;
    @Column(name = "user_id")
    private int userId;
    @Column(columnDefinition = "clob")
    @Lob
    private String likes = "";



    public BlogPost() {
        this.date = new Date();
    }

    public BlogPost(String title, String content, int userId) {
        this();
        this.title = title;
        this.content = content;
        this.userId = userId;
        likeContainer = new LikeContainer();
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public Date getDate() {
        return date;
    }

    public int getUserId() {return this.userId;}

    public LikeContainer getLikeContainer() {
        return likeContainer;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }
}
