package com.senacproject.demo.itens;

import java.math.BigDecimal;

public record ItensRequestDTO(String title, String image, BigDecimal price) {
}
