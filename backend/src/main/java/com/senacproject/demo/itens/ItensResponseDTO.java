package com.senacproject.demo.itens;

import java.math.BigDecimal;

public record ItensResponseDTO(Long id, String title, String image, BigDecimal price) {
    public ItensResponseDTO(Itens itens){
        this(itens.getId(), itens.getTitle(), itens.getImage(), itens.getPrice());
    }
}
