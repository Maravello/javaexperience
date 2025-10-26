package com.concessionnaire.AutoCar.modele;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@Table(name="CONTACT_VOITURE")
@NoArgsConstructor
public class ContactVoiture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long  id;

    @Column(name="Nom")
    private String nom;

    @Column(name="Prenom")
    private String prenom;
    
    @Column(name="Mail")
    private String mail;

    @Column(name="Message")
    private String message;

    @Column(name="Repondu")
    private boolean repondu;

    @Column(name="Date_Creation")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate date = LocalDate.now();



    ////////////////RETURN SECTION ////////////
    public long getId(){
        return this.id;
    }
    public String getNom(){
        return this.nom;
    }
    public String getPrenom(){
        return this.prenom;
    }
    public String getMail(){
        return this.mail;
    }
    public String getMessage(){
        return this.message;
    }
    public LocalDate getDate(){
        return this.date;
    }
     public Boolean getRepondu(){
        return this.repondu;
    }

    ////////////SET SECTION /////////////////////

     public void  setId(long val){
        this.id = val;
    }
    public void setNom(String val){
        this.nom = val;
    }
    public void setPrenom(String val){
        this.prenom = val;
    }
    public void setMail(String val){
        this.mail = val;
    }
    public void setMessage(String val){
        this.message = val;
    }
     public void setDate(){
         this.date = LocalDate.now();
    }

    public void setRepondu(boolean val){
        this.repondu = val;
    }
}
