package com.example.kantabackendfinal.MODEL.BOOKING;

import jakarta.persistence.*;
import lombok.Data;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = PlasticType.class, name = "plastic"),
        @JsonSubTypes.Type(value = PaperType.class, name = "paper"),
        @JsonSubTypes.Type(value = TextileType.class, name = "textile"),
        @JsonSubTypes.Type(value = GlassType.class, name = "glass"),
        @JsonSubTypes.Type(value = EEWasteType.class, name = "ee")
})
public class WasteType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

}