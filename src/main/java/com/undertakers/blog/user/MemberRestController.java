package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class MemberRestController {
    @Autowired
    private MemberRepository memberRepository;
    private Member currentMember = null;
    private boolean loggedIn = false;

    @PostConstruct
    public void init() {
        memberRepository.save(new Member("Admin", "admin"));
    }

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

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable int id){
        memberRepository.deleteById(id);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login(@RequestBody LoginRequest request){

        Iterable<Member> users = memberRepository.findAll();

        for(Member user: users) {
            if(user.getUsername().equals(request.getUsername()) && user.getPassword().equals(request.getPassword())){
                this.loggedIn = true;
                this.currentMember = user;
            }
        }
        return loggedIn;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public boolean loggedIn() {
        return this.loggedIn;
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public void logout() {
        this.loggedIn = false;
        this.currentMember = null;
    }

    @RequestMapping(value = "/current_user", method = RequestMethod.GET)
    public Member getCurrentMember() {
        return this.currentMember;
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public Optional<Member> getUserById(@PathVariable int id) {
        return memberRepository.findById(id);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public Iterable<Member> getAllUsers() {
        return memberRepository.findAll();
    }
}
