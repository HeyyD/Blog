package com.undertakers.blog.user;

public class UserNotFoundException extends IllegalArgumentException {
    private int id;

    public UserNotFoundException(int id) {
        this.id = id;
    }
    public int getId(){return this.id;}
}
