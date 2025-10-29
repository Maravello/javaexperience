package com.concessionnaire.AutoCar.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.concessionnaire.AutoCar.modele.ClientsVoiture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientsVoitureInterfaces extends JpaRepository<ClientsVoiture, Long> {

    // Méthode custom, garde-la si elle correspond à un besoin précis
    Optional<ClientsVoiture> findByVoitureVoulu_IdAndId(Long idVoiture, Long idClient);
    Optional<ClientsVoiture> findByEmailAndPassword(String email, String Password );

}
