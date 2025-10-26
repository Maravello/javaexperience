package com.concessionnaire.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concessionnaire.AutoCar.repository.contactVoitureInterfaces;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.CrudRepository;

import com.concessionnaire.AutoCar.modele.ContactVoiture;


@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = {"https://javaexperience.onrender.com", "http://localhost:3000"})
public class ContactVoitureController {
    public final contactVoitureInterfaces ContactVoitureController;

    public ContactVoitureController(contactVoitureInterfaces ContactVoitureInterfaces){
        this.ContactVoitureController = ContactVoitureInterfaces;
    }

    @PostMapping("/NewMessage")
    public ContactVoiture setNewMassage(@RequestBody ContactVoiture param) {
        return ContactVoitureController.save(param);
    }

    @GetMapping("/by-date/{dateId}")
    public List<ContactVoiture> getMessageByDate(@PathVariable String param) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate localDate = LocalDate.parse(param, formatter);
        return ContactVoitureController.findByDate(localDate);
       
    }

    @GetMapping("/Message")
    public List<ContactVoiture> getAllMessage() {
        return ContactVoitureController.findAll();
    }

    @GetMapping("/before-date/{date}")
    public List<ContactVoiture> getMessagesBeforeDate(@PathVariable String date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate localDate = LocalDate.parse(date, formatter);
        return ContactVoitureController.findByDateLessThanEqual(localDate);
    }

    @DeleteMapping("/DeleteMessage/{id}")
    public  String deleteByMessage(@PathVariable long param){
       Optional<ContactVoiture> deleted =  ContactVoitureController.findById(param);

       if(deleted.isPresent()){
        ContactVoitureController.deleteById(param);
        return "Suprrésssion de"+param;
       }else{
        return "id: "+param + " non existant";
       }
    }
    
    
    

}
