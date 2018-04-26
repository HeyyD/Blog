package com.undertakers.blog.user;

/**
 * Class that receives info of an attempted login.
 * Used to compare attempt to actual required login info.
 */
public class LoginRequest {

    /**
     * Username that was given.
     */
    private String username;

    /**
     * Password that was given.
     */
    private String password;

    /**
     * Default constructor.
     */
    public LoginRequest(){

    }

    /**
     * Constructs the object and sets its attributes.
     *
     * @param username Username that was given.
     * @param password Password that was given.
     */
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    /**
     * @return Username that was given.
     */
    public String getUsername() {
        return username;
    }

    /**
     * @return Password that was given.
     */
    public String getPassword() {
        return password;
    }
}
