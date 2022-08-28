package com.portafolio.mem.Service;

import com.portafolio.mem.Entity.User;
import com.portafolio.mem.Interface.UserInterfaceService;
import com.portafolio.mem.Repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Marcelo
 */

@Service
public class UserService implements UserInterfaceService{
    @Autowired UserRepository userrepository;
    
    
    @Override
    public List<User> getUser() {
        
        List<User> user = userrepository.findAll();
        return user;
        
    }

    @Override
    public void saveUser(User user) {
       
        userrepository.save(user);
        
    }

    @Override
    public void deleteUser(Long id) {
        
        userrepository.deleteById(id);
        
    }

    @Override
    public User findUser(Long id) {
        
        User user = userrepository.findById(id).orElse(null);
        return user; 
        
    }
   
    
    
    
}
