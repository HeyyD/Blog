package com.undertakers.blog.repository;

public class ErrorInfo {
    private String errorMsg;

    public ErrorInfo() {}

    public ErrorInfo(String errorMsg){
        this.errorMsg = errorMsg;
    }

    public String getErrorMsg(){
        return this.errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
