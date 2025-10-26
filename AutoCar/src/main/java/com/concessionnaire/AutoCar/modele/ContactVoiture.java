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
    private long  Id;

    @Column(name="Nom")
    private String Nom;

    @Column(name="Prenom")
    private String Prenom;
    
    @Column(name="Mail")
    private String Mail;

    @Column(name="Message")
    private String Message;

    @Column(name="Repondu")
    private boolean Repondu;

    @Column(name="Date_Creation")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate Date = LocalDate.now();



    ////////////////RETURN SECTION ////////////
    public long getId(){
        return this.Id;
    }
    public String getNom(){
        return this.Nom;
    }
    public String getPrenom(){
        return this.Prenom;
    }
    public String getMail(){
        return this.Mail;
    }
    public String getMessage(){
        return this.Message;
    }
    public LocalDate getDate(){
        return this.Date;
    }
     public Boolean getRepondu(){
        return this.Repondu;
    }

    ////////////SET SECTION /////////////////////

     public void  setId(long val){
        this.Id = val;
    }
    public void setNom(String val){
        this.Nom = val;
    }
    public void setPrenom(String val){
        this.Prenom = val;
    }
    public void setMail(String val){
        this.Mail = val;
    }
    public void setMessage(String val){
        this.Message = val;
    }
     public void setDate(){
         this.Date = LocalDate.now();
    }

    public void setRepondu(boolean val){
        this.Repondu = val;
    }
}
