package com.undertakers.blog.post;

import javax.persistence.*;

@Entity
@TableGenerator(name = "comment", initialValue = 0)
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "comment")
    @Column(name = "id")
    private int id;
    @Column(name = "post_id")
    private int postId;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "content")
    private String content;

    public Comment() {}

    public Comment(int postId, int userId, String content) {
        this.postId = postId;
        this.userId = userId;
        this.content = content;
    }

    public int getId() {
        return id;
    }

    public int getPostId() {
        return postId;
    }

    public int getUserId() {
        return userId;
    }

    public String getContent() {
        return content;
    }
}
