package com.undertakers.blog.user;

/**
 * Exception that is thrown when a specified user cannot be found.
 */
public class MemberNotFoundException extends IllegalArgumentException {

    /**
     * Id of the exception.
     */
    private int id;

    /**
     * Constructs the exception and sets its id.
     *
     * @param id Id of the exception.
     */
    public MemberNotFoundException(int id) {
        this.id = id;
    }

    /**
     * @return Id of the exception.
     */
    public int getId(){return this.id;}
}
