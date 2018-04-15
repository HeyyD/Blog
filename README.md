## Repository can be tested with these commands

###### Add a user
curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"Username\", \"password\":\"password\"}" localhost:8080/users

###### Delete user
curl -X DELETE localhost:8080/users/{id}

###### Get a user
curl -X GET localhost:8080/users/{id}

###### Get all users
curl -X GET localhost:8080/users

###### Add blog post
curl -H "Content-Type: application/json" -X POST -d "{\"title\":\"Title\", \"content\":\"Example content\", \"userId\":\"1\"}" localhost:8080/posts

###### Delete blog post
curl -X DELETE localhost:8080/posts/{id}

###### Get a blog post
curl -X GET localhost:8080/posts/{id}

###### Get all blog posts
curl -X GET localhost:8080/posts

###### Add comment
curl -H "Content-Type: application/json" -X POST -d "{\"postId\":\"{id}\", \"userId\":\"{id}\", \"content\":\"{content}\"}" localhost:8080/posts/comments

###### Get comments of a post
curl -X GET localhost:8080/posts/{id}/comments