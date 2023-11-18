package com.senacproject.demo.user;

public record UserResponseDTO (Long id, String username, String Email, String password){
        public UserResponseDTO(User user){this(user.getId(), user.getUsername(), user.getEmail(),user.getPassword());
        }

    }

