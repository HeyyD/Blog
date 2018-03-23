package com.undertakers.blog.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class MemberRestController {
    @Autowired
    private MemberRepository memberRepository;

    @PostConstruct
    public void init(){
        memberRepository.save(new Member("Admin", "admin"));
        memberRepository.save(new Member("Member", "user"));
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public Member saveUser(@RequestBody Member entity){
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
            if(user.getUsername().equals(request.getUsername()) && user.getPassword().equals(request.getPassword()))
                return true;
        }
        return false;
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
