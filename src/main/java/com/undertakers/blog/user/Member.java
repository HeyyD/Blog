package com.undertakers.blog.user;

import javax.persistence.*;

@Entity
@TableGenerator(name = "member", initialValue = 0)
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "member")
    @Column(name = "id")
    private int id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;

    public Member(){

    }

    public Member(String username, String password){
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
