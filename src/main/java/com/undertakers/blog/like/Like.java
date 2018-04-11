package com.undertakers.blog.like;

import javax.persistence.*;
import java.util.Date;

@Entity
@TableGenerator(name = "like", initialValue = 0)
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "like")
    @Column(name = "id")
    private int id;
    @Column(name = "post_id")
    private int postId;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "date")
    private Date date;
}
