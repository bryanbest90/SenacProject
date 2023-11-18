package com.senacproject.demo.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface UserRepository extends JpaRepository<User, Long>{

    @Query("SELECT i FROM users i ORDER BY i.created_at DESC ")
    List<User> findAllOrderedByCreated_atDesc();
}

