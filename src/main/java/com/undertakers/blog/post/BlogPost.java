package com.undertakers.blog.post;

import java.util.Date;

public class BlogPost {

    private int currentId = 0;

    private int id;
    private String title;
    private String content;
    private Date date;

    public BlogPost() {
        this.id = currentId;
        currentId++;
    }

    public BlogPost(String title, String content, Date date) {
        this();
        this.title = title;
        this.content = content;
        this.date = date;
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
