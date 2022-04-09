package mroki.api.com.blog.converter;


import mroki.api.com.blog.dto.role.RoleDTO;
import mroki.api.com.blog.model.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleConverter {

    public RoleDTO entityToDto(Role role){
        return RoleDTO.builder()
                .id(role.getId())
                .name(role.getRoleName().toString())
                .build();
    }
}
