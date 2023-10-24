package com.senacproject.demo.controller;


import com.senacproject.demo.itens.Itens;
import com.senacproject.demo.itens.ItensRepository;
import com.senacproject.demo.itens.ItensRequestDTO;
import com.senacproject.demo.itens.ItensResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("itens")
public class    ItensController {
    @Autowired
    private ItensRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*") //conexão com o front, evita erros no navegador
    @PostMapping
    public Itens saveItens(@RequestBody ItensRequestDTO data){
        Itens itensData = new Itens(data);
        repository.save(itensData);
        return itensData;

    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ItensResponseDTO> getAll(){

        List<ItensResponseDTO> itensList = repository.findAll().stream().map(ItensResponseDTO::new).toList();
        return itensList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<ItensResponseDTO> getByID(@PathVariable Long id) {
        Optional<Itens> item = repository.findById(id);

        ItensResponseDTO itensResponseDTO = item.map(ItensResponseDTO::new).orElse(null);

        if (itensResponseDTO != null) {
            return ResponseEntity.ok(itensResponseDTO);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item não encontrado");
        }
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/newItems")
    public List<ItensResponseDTO> getNewItems() {
        List<ItensResponseDTO> itensList = repository.findAllOrderedByCreated_atDesc().stream().map(ItensResponseDTO::new).toList();
        return itensList;
    }

}
