package com.portafolio.mem.Controller;

import com.portafolio.mem.Entity.User;
import com.portafolio.mem.Interface.UserInterfaceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Marcelo
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired UserInterfaceService userinterfaceservice;
    
    @GetMapping("/user/get")
    public List<User> getUser(){
       return userinterfaceservice.getUser();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/user/create")
    public String createUser(@RequestBody User user){
        userinterfaceservice.saveUser(user);
        return "El user "+ user.getNombre() +" "+ user.getApellido() + " fue creado correctamente";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/user/delete/{id}")
    public String deleteUser(@PathVariable Long id){
        userinterfaceservice.deleteUser(id);
        return "El user de id "+id+" fue borrado exitosamente";
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/user/update/{id}")
    public User updateUser(@PathVariable Long id,
                           @RequestParam("nombre") String nuevoNombre, 
                           @RequestParam("apellido") String nuevoApellido, 
                           @RequestParam("imagen") String nuevaImagen){
        
        User user= userinterfaceservice.findUser(id);
        
        user.setNombre(nuevoNombre);
        user.setApellido(nuevoApellido);
        user.setImagen(nuevaImagen);
        
        userinterfaceservice.saveUser(user);
        return user;
    
    }
    
    @GetMapping("/user/get/perfil")
    public User findUser(){
       return userinterfaceservice.findUser((long)1);
    }
    
            
}
