package com.portafolio.mem.Interface;

import com.portafolio.mem.Entity.User;
import java.util.List;

/**
 *
 * @author Marcelo
 */

public interface UserInterfaceService {
    
    public List<User> getUser();
    
    public void saveUser(User user);
    
    public void deleteUser(Long id);
    
    public User findUser(Long id);
    
}
