package com.undertakers.blog.post;

import java.util.Date;

public class BlogPost {

    private static int currentId = 0;

    private int id;
    private String title;
    private String content;
    private Date date;

    public BlogPost() {
        this.id = currentId;
        this.date = new Date();
        currentId++;
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
