package com.undertakers.blog.user;

import com.undertakers.blog.repository.ErrorInfo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Class that tells how to handle UsernameTakenExceptions.
 */
@ControllerAdvice
public class UsernameTakenExceptionHandler {

    /**
     * Method that specifies how MemberNotFoundExceptions should be handled.
     *
     * @param ex Exception that was thrown.
     * @return Response to a http request.
     */
    @ExceptionHandler(UsernameTakenException.class)
    public ResponseEntity<ErrorInfo> handleConflict(UsernameTakenException ex) {
        ErrorInfo e;
        e = new ErrorInfo("Username " + ex.getUsername() + " is already taken");
        return new ResponseEntity<>(e, HttpStatus.NOT_ACCEPTABLE);
    }
}
