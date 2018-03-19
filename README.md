Repository can be tested with these commands

Add a user
curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"Username\"}" localhost:8080/users

Delete user
curl -X DELETE localhost:8080/users/{id}

Get a user
curl -X GET localhost:8080/users/0

Get all users
curl -X GET localhost:8080/users