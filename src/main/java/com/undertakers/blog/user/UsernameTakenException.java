package com.undertakers.blog.user;

public class UsernameTakenException extends IllegalArgumentException {

    private String username;

    public UsernameTakenException(String username) {
        this.username = username;
    }

    public String getUsername() {return this.username;}
}
