package com.undertakers.blog.post;

import com.undertakers.blog.user.Member;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface PostRepository extends CrudRepository<BlogPost, Integer>{
    @Query("SELECT m FROM Member m where m.id = :id")
    Member findMemberById(@Param("id") int id);
}
