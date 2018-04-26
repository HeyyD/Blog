package com.undertakers.blog.user;

/**
 * Exception that is thrown when a specified username is already in use.
 */
public class UsernameTakenException extends IllegalArgumentException {

    /**
     * Username that was already taken.
     */
    private String username;

    /**
     * Constructs the exception and sets the username.
     * @param username Username that was already taken.
     */
    public UsernameTakenException(String username) {
        this.username = username;
    }

    /**
     * @return Username that was already taken.
     */
    public String getUsername() {return this.username;}
}
