package com.undertakers.blog.user;

public class MemberNotFoundException extends IllegalArgumentException {
    private int id;

    public MemberNotFoundException(int id) {
        this.id = id;
    }
    public int getId(){return this.id;}
}
