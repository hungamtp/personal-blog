package mroki.api.com.blog.service.impl;


import lombok.AllArgsConstructor;
import mroki.api.com.blog.converter.RoleConverter;
import mroki.api.com.blog.dto.role.RoleDTO;
import mroki.api.com.blog.repository.RoleRepository;
import mroki.api.com.blog.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RoleServiceImpl implements RoleService {

    @Autowired
    private final RoleRepository repository;

    @Autowired
    private final RoleConverter converter;

}
