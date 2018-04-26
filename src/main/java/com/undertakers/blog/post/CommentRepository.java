package com.undertakers.blog.post;

import org.springframework.data.repository.CrudRepository;

/**
 * Repository to manage comment creation, reading, updating and deleting.
 */
public interface CommentRepository extends CrudRepository<Comment, Integer> {
}
