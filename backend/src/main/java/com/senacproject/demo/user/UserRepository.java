package com.senacproject.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

//    @Query("SELECT u FROM User u ORDER BY u.created_at DESC")
//    List<User> findAllOrderedByCreated_atDesc();
}
