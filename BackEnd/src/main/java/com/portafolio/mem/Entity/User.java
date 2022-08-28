package com.portafolio.mem.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


/**
 *
 * @author Marcelo
 */
@Getter @Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 0, max = 44,message = "El campo no cumple los requisitos")
    private String nombre;
    
    @NotNull
    @Size(min = 0, max = 44,message = "El campo no cumple los requisitos")
    private String apellido;
    
    @NotNull
    @Size(min = 0, max = 44,message = "El campo no cumple los requisitos")
    private String imagen;
    
}
