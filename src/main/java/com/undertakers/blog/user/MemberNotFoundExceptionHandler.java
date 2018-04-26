package com.undertakers.blog.user;

import com.undertakers.blog.repository.ErrorInfo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Class that tells how to handle MemberNotFoundExceptions.
 */
@ControllerAdvice
public class MemberNotFoundExceptionHandler {

    /**
     * Method that specifies how MemberNotFoundExceptions should be handled.
     *
     * @param ex Exception that was thrown.
     * @return Response to a http request.
     */
    @ExceptionHandler(MemberNotFoundException.class)
    public ResponseEntity<ErrorInfo> handleConflict(MemberNotFoundException ex) {
        ErrorInfo e;
        e = new ErrorInfo("Could not find user with id " + ex.getId());
        return new ResponseEntity<>(e, HttpStatus.NOT_FOUND);
    }
}
