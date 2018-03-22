package com.undertakers.blog.post;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
public class BlogPost {

    @Id @GeneratedValue
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "content")
    private String content;
    @Column(name = "date")
    private Date date;

    public BlogPost() {
        this.date = new Date();
    }

    public BlogPost(String title, String content) {
        this();
        this.title = title;
        this.content = content;
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

}
