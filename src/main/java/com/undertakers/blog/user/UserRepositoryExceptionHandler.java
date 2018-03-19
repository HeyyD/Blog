package com.undertakers.blog.user;

import com.undertakers.blog.repository.ErrorInfo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserRepositoryExceptionHandler {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorInfo> handleConflict(UserNotFoundException ex) {
        ErrorInfo e;
        if(ex.getUsername() != null){
            e = new ErrorInfo("Could not find user with username " + ex.getUsername());
        } else {
            e = new ErrorInfo("Could not find user with id " + ex.getId());
        }

        return new ResponseEntity<>(e, HttpStatus.NOT_FOUND);
    }
}
