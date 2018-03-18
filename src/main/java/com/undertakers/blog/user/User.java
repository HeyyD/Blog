package com.undertakers.blog.user;

public class User {

    private static int currentId = 0;
    private int id;
    private String username;

    public User(){
        this.id = currentId;
        currentId++;
    }

    public User(String username){
        this();
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }
}
