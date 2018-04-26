package com.undertakers.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main class of the application.
 */
@SpringBootApplication
public class BlogApplication {

	/**
	 * Starts the backend of the application.
	 *
	 * @param args Given command line arguments.
	 */
	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}
}
