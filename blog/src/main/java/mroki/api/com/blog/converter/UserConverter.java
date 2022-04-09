package mroki.api.com.blog.converter;


import mroki.api.com.blog.constants.ErrorCode;
import mroki.api.com.blog.dto.user.UserDetailDTO;
import mroki.api.com.blog.exception.ConverterUserException;
import mroki.api.com.blog.model.User;
import mroki.api.com.blog.repository.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserConverter {
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    RoleRepository roleRepository;

    public UserDetailDTO entityToDetailDTO(User user) {
        try {
            return UserDetailDTO.builder()
                    .staffCode(user.getStaffCode())
                    .fullName(user.getFirstName() + " " + user.getLastName())
                    .username(user.getUsername())
                    .joinedDate(user.getJoinedDate().toLocalDate())
                    .dateOfBirth(user.getDateOfBirth().toLocalDate())
                    .build();
        } catch (ConverterUserException ex) {
            throw new ConverterUserException(ErrorCode.ERR_CONVERT_ENTITY_DTO_FAIL);
        }

    }







}
