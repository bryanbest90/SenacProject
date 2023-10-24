package com.senacproject.demo.itens;

import java.math.BigDecimal;

public record ItensRequestDTO(String title, String description, String image, BigDecimal price) {
}
