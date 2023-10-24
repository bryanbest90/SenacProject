package com.senacproject.demo.itens;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItensRepository extends JpaRepository<Itens,Long> {
    @Query("SELECT i FROM Itens i ORDER BY i.created_at DESC")
    List<Itens> findAllOrderedByCreated_atDesc();
}
