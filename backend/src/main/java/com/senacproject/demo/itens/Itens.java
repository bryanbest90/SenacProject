package com.senacproject.demo.itens;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name ="Itens")
@Entity(name = "Itens")
@Getter()
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Itens {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String image;
    private BigDecimal price;
    @Column(name = "created_at")
    private LocalDateTime created_at;

    public Itens(ItensRequestDTO data) {
        this.title = data.title();
        this.description = data.description();
        this.image = data.image();
        this.price = data.price();
        this.created_at = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

}
