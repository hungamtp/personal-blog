package mroki.api.com.blog.service.impl;


import mroki.api.com.blog.constants.ErrorCode;
import mroki.api.com.blog.dto.auth.JwtResponse;
import mroki.api.com.blog.dto.auth.LoginRequest;
import mroki.api.com.blog.dto.auth.SignUpRequest;
import mroki.api.com.blog.enums.Gender;
import mroki.api.com.blog.exception.custom.ApiRequestException;
import mroki.api.com.blog.model.Role;
import mroki.api.com.blog.model.User;
import mroki.api.com.blog.repository.RoleRepository;
import mroki.api.com.blog.repository.UserRepository;
import mroki.api.com.blog.security.jwt.JwtUtils;
import mroki.api.com.blog.security.service.UserDetailsImpl;
import mroki.api.com.blog.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public JwtResponse signIn(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        if(userDetails.getRole().equalsIgnoreCase("ROLE_ADMIN_LOCKED") ||
            userDetails.getRole().equalsIgnoreCase("ROLE_USER_LOCKED"))
        {
            throw new ApiRequestException(ErrorCode.USER_BLOCKED);
        }
        List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponse(jwt, userDetails.getStaffCode(),
            userDetails.getUsername(), roles.get(0), userDetails.getFirstLogin());
    }

    @Override
    public String fakeSignUp(SignUpRequest signUpRequest) {
        String staffCode = signUpRequest.getStaffcode();
        String username = signUpRequest.getUsername();
        String password = signUpRequest.getPassword();
        String firstName = signUpRequest.getFirstname();
        String lastName = signUpRequest.getLastname();
        Long idRole = signUpRequest.getIdRole();
        Long idLocation = signUpRequest.getIdLocation();

        Role role = roleRepository.findById(idRole).get();

        // Optional<Role> role = roleRepository.findById(1L);
        // Optional<Location>  location = locationRepository.findById(1L);
        LocalDateTime current = LocalDateTime.now();
        User user = new User();
        user.setStaffCode(staffCode);
        user.setUsername(username);
        user.setPassword(encoder.encode(password));
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setGender(Gender.Male);
        user.setDateOfBirth(current);
        user.setJoinedDate(current);
        user.setRole(role);
        user.setFirstLogin(false);
        user.setIsDeleted(false);

        user = userRepository.save(user);
        if(user != null) {
            return "OK";
        }
        else{
            return "ERROR";
        }
    }

}
