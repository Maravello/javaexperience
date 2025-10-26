package com.concessionnaire.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concessionnaire.AutoCar.modele.professionnelVoiture;
import com.concessionnaire.AutoCar.repository.professionnelVoitureInterfaces;




@RestController
@RequestMapping("/voitures/professionnel")
@CrossOrigin(origins = {"https://javaexperience.onrender.com", "http://localhost:3000"})
public class professionnelVoitureController {

    public final professionnelVoitureInterfaces ProfessionnelVoitureInterfaces;
    
    public professionnelVoitureController(professionnelVoitureInterfaces ProfessionnelVoitureInterfaces) {
        this.ProfessionnelVoitureInterfaces = ProfessionnelVoitureInterfaces;
    }

    @GetMapping("/professionnels")
    public List<professionnelVoiture> findAllProfessionnels() {
        return ProfessionnelVoitureInterfaces.findAll();
    }

    @GetMapping("/professionnel/{id}")
    public professionnelVoiture findProfessionnelById(@PathVariable Long id){
        return ProfessionnelVoitureInterfaces.findById(id).orElse(null);
    }

   public List<professionnelVoiture> professionnelByVoiture(@PathVariable Long idVoiture, @PathVariable Long idProfessionnel){
    List<professionnelVoiture> resultat = ProfessionnelVoitureInterfaces.findByVoitureIdAndId(idVoiture, idProfessionnel);
    return (resultat != null) ? resultat : new ArrayList<>();
}

    @PutMapping("/professionnel/{id}")
    public professionnelVoiture updateProfessionnel(@PathVariable Long id, @RequestBody professionnelVoiture pro){
        pro.setId(id);
        return ProfessionnelVoitureInterfaces.save(pro);
        
    }

    @DeleteMapping("/professionnel/{id}")
    public String deleteProfessionnel(@PathVariable Long id) {
       Optional <professionnelVoiture> pro = ProfessionnelVoitureInterfaces.findById(id);
        if (pro.isPresent()) {
            ProfessionnelVoitureInterfaces.deleteById(id);
            return "Professionnel with ID " + id + " has been deleted.";
        } else {
            return "Professionnel with ID " + id + " not found.";
        }
    }
    @PostMapping("/professionnel")
    public professionnelVoiture createProfessionnel(@RequestBody professionnelVoiture pro) {
        return ProfessionnelVoitureInterfaces.save(pro);
       
    }
    @GetMapping("/professionnel/image/{id}")
    public professionnelVoiture getProfessionnelImage(@PathVariable Long id) {
        professionnelVoiture pro = ProfessionnelVoitureInterfaces.findPictureById(id);
        if (pro != null) {
            return pro;
        } else {
            return null; // or throw an exception
        }
    }
}
