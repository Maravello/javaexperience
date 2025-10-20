package com.concessionnaire.AutoCar.modele;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "VOITURE")
@NoArgsConstructor
public class Voiture {
    
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MARQUE")
    private String marque;

    @Column(name = "MODELE")
    private String modele;

    @Column(name = "IMMATRICULATION")
    private String immatriculation;


    public Long getId (){
        return id;
    }
    //Getter and Setter for MARQUE
    public String getMarque() {
        return marque;
    }
    public void setMarque(String marque) {
        this.marque = marque;
    }
    // Getter and Setter for MODELE
    public String getModele() {
        return modele;
    }
    public void setModele(String modele) {
        this.modele = modele;
    }
    // Getter and Setter for IMMATRICULATION
    public String getImmatriculation() {
        return immatriculation;
    }
    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }  
    

}
