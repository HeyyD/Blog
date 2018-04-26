package com.undertakers.blog.user;

import javax.persistence.*;

/**
 * Class that contains info on a specific user. Also
 * contains info on how to save user info to database.
 */
@Entity
@TableGenerator(name = "member", initialValue = 0)
public class Member {

    /**
     * Unique user id automatically generated for each user
     */
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "member")
    @Column(name = "id")
    private int id;

    /**
     * Username of the user.
     */
    @Column(name = "username")
    private String username;

    /**
     * Password of the user.
     */
    @Column(name = "password")
    private String password;

    /**
     * Default constructor.
     */
    public Member(){

    }

    /**
     * Constructs the object and sets its attributes.
     *
     * @param username Username of the user.
     * @param password Password of the user.
     */
    public Member(String username, String password){
        this();
        this.username = username;
        this.password = password;
    }

    /**
     * @return Id of the user.
     */
    public int getId() {
        return id;
    }

    /**
     * @return Username of the user.
     */
    public String getUsername() {
        return username;
    }

    /**
     * @return Password of the user.
     */
    public String getPassword(){
        return this.password;
    }
}
