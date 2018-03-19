package com.undertakers.blog.user;

public class UserNotFoundException extends IllegalArgumentException {
    private int id;
    private String username;

    public UserNotFoundException(int id) {
        this.id = id;
    }

    public UserNotFoundException(String username) {
        this.username = username;
    }

    public int getId(){return this.id;}
    public String getUsername() {return this.username;}
}
