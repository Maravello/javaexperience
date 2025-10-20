package com.concessionnaire.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concessionnaire.AutoCar.modele.Voiture;
import com.concessionnaire.AutoCar.service.VoitureService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/voiture")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureController {
    private final VoitureService voitureService;

    @PostMapping("/create")
    public Voiture Create(@RequestBody Voiture uneVoiture){
        return voitureService.createVoiture(uneVoiture); 
    }

    @GetMapping("/voitures")
    public List<Voiture> getAllVoitures(){
        return voitureService.getAllVoitures();
    }
    @GetMapping("/{id}")
    public Voiture getVoitureById(@PathVariable Long id){
        Voiture exist = voitureService.getVoitureById(id);
        if (exist != null) {
            return exist;
        }
        return null;
    }

    @PutMapping("/update/{id}")
    public Voiture updatVoiture(@PathVariable Long id, @RequestBody Voiture uneVoiture){
    Voiture exist = voitureService.getVoitureById(id);
    if (exist != null) {
        return voitureService.updateVoiture(id, uneVoiture);
    }else{
        return null; // or throw an exception
    }
    }
    @GetMapping("/hello")
public String hello() {
    return "Hello World";
}


    @DeleteMapping("/delete/{id}")
    public String deleteVoiture(@PathVariable Long id){
        Voiture exist = voitureService.getVoitureById(id);
        if(exist != null){
            voitureService.deleteVoiture(id);
            return "Voiture avec l'ID " + id + " a été effacée ";
        }
        return "Voiture avec l'ID " + id + " n'existe pas";
    }
}
