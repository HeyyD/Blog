package com.undertakers.blog.user;

public class User {

    private static int currentId;
    private int id;
    private String username;

    public User(){
        currentId++;
    }

    public User(String username){
        this.id = currentId;
        this.username = username;

        currentId++;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }
}
