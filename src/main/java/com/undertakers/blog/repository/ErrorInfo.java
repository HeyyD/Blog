package com.undertakers.blog.repository;

/**
 * Class that contains error message of an error.
 */
public class ErrorInfo {

    /**
     * The error message.
     */
    private String errorMsg;

    /**
     * Default constructor.
     */
    public ErrorInfo() {}

    /**
     * Constructs the object and sets its message.
     *
     * @param errorMsg The error message.
     */
    public ErrorInfo(String errorMsg){
        this.errorMsg = errorMsg;
    }

    /**
     * @return The error message.
     */
    public String getErrorMsg(){
        return this.errorMsg;
    }

    /**
     * @param errorMsg The error message.
     */
    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
