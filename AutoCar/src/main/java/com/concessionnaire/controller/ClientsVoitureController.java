package com.concessionnaire.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.concessionnaire.AutoCar.modele.ClientsVoiture;
import com.concessionnaire.AutoCar.repository.ClientsVoitureInterfaces;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/clients/voiture")
@CrossOrigin(origins = {"https://javaexperience.onrender.com", "http://localhost:3000"})
public class ClientsVoitureController {
    public final ClientsVoitureInterfaces clientsVoitureController;

    public ClientsVoitureController(ClientsVoitureInterfaces clientsVoitureControllers) {
        this.clientsVoitureController = clientsVoitureControllers;
    }


    @GetMapping("/clients")
    public List<ClientsVoiture> findAllClients() {
        return clientsVoitureController.findAll();
    }

    @GetMapping("/client/{id}")
    public ClientsVoiture findClientById(@PathVariable Long id){
        return clientsVoitureController.findById(id).orElse(null);
    }

   @GetMapping("/voiture/{idVoiture}/client/{idClient}")
public Optional<ClientsVoiture> findClientsVoitureById(@PathVariable Long idVoiture, @PathVariable Long idClient) {
    return clientsVoitureController.findByVoitureVoulu_IdAndId(idVoiture, idClient);
}
    @PostMapping("/new")
    public ClientsVoiture createNewClient(@RequestBody ClientsVoiture client) {
     return clientsVoitureController.save(client);
       
    }
    @PutMapping("/update/{id}")
    public ClientsVoiture updateClientsVoiture(@PathVariable Long id, @RequestBody ClientsVoiture client){
        Optional<ClientsVoiture> TheClient = clientsVoitureController.findById(id);
        if(TheClient.isPresent()){
            client.setId(id);
            return clientsVoitureController.save(client);
        } else {
            return null; // or throw an exception
        }
    }

    @GetMapping("/login")
    public ClientsVoiture loginClient(@RequestParam String email, @RequestParam String password) {
    Optional<ClientsVoiture> client = clientsVoitureController.findByEmailAndPassword(email, password);
    if (client.isPresent()) {
        return client.get();
    } else {
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Email ou mot de passe incorrect");
    }
}
    

    @DeleteMapping("/delete/{id}")
    public String deleteClientsVoiture(@PathVariable Long id) {
        Optional<ClientsVoiture> client = clientsVoitureController.findById(id);
        if (client.isPresent()) {
            clientsVoitureController.deleteById(id);
            return "Client with ID " + id + " has been deleted.";
        } else {
            return "Client with ID " + id + " not found.";
        }
    }




}
