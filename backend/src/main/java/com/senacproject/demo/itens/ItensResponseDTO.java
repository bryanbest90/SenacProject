package com.senacproject.demo.itens;

public record ItensResponseDTO(Long id, String title, String image, Integer price) {
    public ItensResponseDTO(Itens itens){
        this(itens.getId(), itens.getTitle(), itens.getImage(), itens.getPrice());
    }
}
