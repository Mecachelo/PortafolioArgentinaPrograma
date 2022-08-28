package com.portafolio.mem.Repository;

import com.portafolio.mem.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Marcelo
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
    
    
    
}
