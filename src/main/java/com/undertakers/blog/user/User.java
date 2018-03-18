package com.undertakers.blog.user;

public class User {

    private static int currentId = 0;
    private int id;
    private String username;
    private String password;

    public User(){
        this.id = currentId;
        currentId++;
    }

    public User(String username, String password){
        this();
        this.username = username;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword(){
        return this.password;
    }
}
