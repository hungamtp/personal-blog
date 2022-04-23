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

        return new JwtResponse(jwt, userDetails.getId(),
            userDetails.getUsername(), roles.get(0));
    }

}
