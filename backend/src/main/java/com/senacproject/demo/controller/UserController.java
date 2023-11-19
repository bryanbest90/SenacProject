package com.senacproject.demo.controller;



import com.senacproject.demo.user.User;
import com.senacproject.demo.user.UserRepository;
import com.senacproject.demo.user.UserRequestDTO;
import com.senacproject.demo.user.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping
    public User saveUser(@RequestBody UserRequestDTO data){
            User userData = new User(data);
            repository.save(userData);
            return userData;
            }


    @CrossOrigin(origins = "*", allowedHeaders="*")
    @GetMapping
    public List<UserResponseDTO>  getAll(){

        List<UserResponseDTO> userList = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return userList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO>getByID(@PathVariable Long id){
        Optional<User> user = repository.findById(id);
        UserResponseDTO userResponseDTO = user.map(UserResponseDTO::new).orElse(null);

        if (userResponseDTO != null){
            return ResponseEntity.ok(userResponseDTO);
        }else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "usuário não encontrado");
        }
        }
//    @CrossOrigin(origins = "*", allowedHeaders = "*")
//    @GetMapping("/newUsers")
//    public List<UserResponseDTO> getNewUsers(){
//        List<UserResponseDTO> userList = repository.findAllOrderedByCreated_atDesc().stream().map(UserResponseDTO::new).toList();
//        return userList;
//    }

}
