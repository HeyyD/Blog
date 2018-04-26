package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

/**
 * Controller to manage the creation, reading, updating and deleting
 * of users.
 */
@RestController
public class MemberRestController {

    /**
     * Repository that manages database saving and retrieval of users.
     */
    @Autowired
    private MemberRepository memberRepository;

    /**
     * Initializes the user repository with an original admin user.
     */
    @PostConstruct
    public void init() {
        memberRepository.save(new Member("Admin", "admin"));
    }

    /**
     * Checks whether a user with the same username already exists
     * and if not, saves user into database.
     *
     * @param entity User to save.
     * @return User that was saved.
     */
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public Member saveUser(@RequestBody Member entity){
        Iterable<Member> members = getAllUsers();

        for(Member m: members) {
            if(m.getUsername().equals(entity.getUsername())){
                throw new UsernameTakenException(entity.getUsername());
            }
        }
        return memberRepository.save(entity);
    }

    /**
     * Deletes user from database.
     *
     * @param id Id of user to delete.
     */
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable int id){
        memberRepository.deleteById(id);
    }

    /**
     * Checks whether the username and password of a login request
     * match the username and password of a user in the database.
     *
     * @param request The login request containing username and password.
     * @return If a user matches the login request, returns the user,
     *          otherwise returns null.
     */
    @RequestMapping(value = "/users/login", method = RequestMethod.POST)
    public Member login(@RequestBody LoginRequest request){

        Iterable<Member> users = memberRepository.findAll();

        for(Member user: users) {
            if(user.getUsername().equals(request.getUsername()) && user.getPassword().equals(request.getPassword())){
                return user;
            }
        }
        return null;
    }

    /**
     * Finds a specified user from database by their id.
     *
     * @param id Id of the user to find.
     * @return The found user, or an empty optional if the user wasn't found.
     */
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public Optional<Member> getUserById(@PathVariable int id) {
        return memberRepository.findById(id);
    }

    /**
     * Finds all users from database.
     *
     * @return Collection of all found users.
     */
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Iterable<Member> getAllUsers() {
        return memberRepository.findAll();
    }
}
