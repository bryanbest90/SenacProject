package com.senacproject.demo.controller;


import com.senacproject.demo.itens.Itens;
import com.senacproject.demo.itens.ItensRepository;
import com.senacproject.demo.itens.ItensRequestDTO;
import com.senacproject.demo.itens.ItensResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
