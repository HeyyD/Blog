package com.undertakers.blog.post;

import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Integer> {
}
