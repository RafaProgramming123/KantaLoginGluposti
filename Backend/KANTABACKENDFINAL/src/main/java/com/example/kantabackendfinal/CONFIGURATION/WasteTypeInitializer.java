package com.example.kantabackendfinal.CONFIGURATION;

import com.example.kantabackendfinal.MODEL.BOOKING.*;
import com.example.kantabackendfinal.REPOSITORY.PaperTypeRepository;
import com.example.kantabackendfinal.REPOSITORY.PlasticTypeRepository;
import com.example.kantabackendfinal.REPOSITORY.TextileTypeRepository;
import com.example.kantabackendfinal.REPOSITORY.WasteTypeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Configuration
public class WasteTypeInitializer {

    @Bean
    CommandLineRunner initWasteTypes(WasteTypeRepository wasteTypeRepository,
                                     PlasticTypeRepository plasticTypeRepository,
                                     PaperTypeRepository paperTypeRepository,
                                     TextileTypeRepository textileTypeRepository) {
        return args -> {
            // Check and save main WasteType categories only if they don't exist
            WasteType plasticCategory = findOrCreateWasteType(wasteTypeRepository, "Plastic");
            WasteType paperCategory = findOrCreateWasteType(wasteTypeRepository, "Paper");
            WasteType textileCategory = findOrCreateWasteType(wasteTypeRepository, "Textile");
            WasteType glassCategory = findOrCreateWasteType(wasteTypeRepository, "Glass");
            WasteType eeCategory = findOrCreateWasteType(wasteTypeRepository, "EE Waste");

            // Creating and saving specific Plastic types
            savePlasticType(plasticTypeRepository, plasticCategory, "ПЕТ пластика (шишиња)");
            savePlasticType(plasticTypeRepository, plasticCategory, "ПП пластика (тврда пластика)");
            savePlasticType(plasticTypeRepository, plasticCategory, "Најлон");
            savePlasticType(plasticTypeRepository, plasticCategory, "Лименки");

            // Creating and saving specific Paper types
            savePaperType(paperTypeRepository, paperCategory, "Картон");
            savePaperType(paperTypeRepository, paperCategory, "Канцелариска Хартија");

            // Creating and saving specific Textile types
            saveTextileType(textileTypeRepository, textileCategory, "Индустриски");
            saveTextileType(textileTypeRepository, textileCategory, "Облека");
        };
    }

    private WasteType findOrCreateWasteType(WasteTypeRepository repository, String name) {
        return repository.findByName(name).orElseGet(() -> {
            WasteType wasteType = new WasteType();
            wasteType.setName(name);
            return repository.save(wasteType);
        });
    }

    private void savePlasticType(PlasticTypeRepository repository, WasteType category, String specificType) {
        if (!repository.findBySpecificType(specificType).isPresent()) {
            PlasticType plasticType = new PlasticType();

            plasticType.setSpecificType(specificType);
            plasticType.setWasteType(category);
            repository.save(plasticType);
        }
    }

    private void savePaperType(PaperTypeRepository repository, WasteType category, String specificType) {
        if (!repository.findBySpecificType(specificType).isPresent()) {
            PaperType paperType = new PaperType();

            paperType.setSpecificType(specificType);
            paperType.setWasteType(category);
            repository.save(paperType);
        }
    }

    private void saveTextileType(TextileTypeRepository repository, WasteType category, String specificType) {
        if (!repository.findBySpecificType(specificType).isPresent()) {
            TextileType textileType = new TextileType();

            textileType.setSpecificType(specificType);
            textileType.setWasteType(category);
            repository.save(textileType);
        }
    }
}