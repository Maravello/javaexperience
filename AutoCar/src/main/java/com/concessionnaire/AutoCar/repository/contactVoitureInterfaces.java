package com.concessionnaire.AutoCar.repository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.concessionnaire.AutoCar.modele.ContactVoiture;
public interface contactVoitureInterfaces  extends JpaRepository<ContactVoiture, Long> {

    Optional<ContactVoiture> findByMail (String aMail);
    Optional<ContactVoiture> findByNom (String aMail);
    Optional<ContactVoiture> findByPrenom (String aMail);
    List<ContactVoiture> findByDateLessThanEqual(LocalDate Date);
    List<ContactVoiture> findByDate(LocalDate  date);

}
