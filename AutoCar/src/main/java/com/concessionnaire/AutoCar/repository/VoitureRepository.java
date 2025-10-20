package com.concessionnaire.AutoCar.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.concessionnaire.AutoCar.modele.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture, Long> {
   

}
