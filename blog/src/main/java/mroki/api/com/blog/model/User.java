package mroki.api.com.blog.model;


import lombok.*;
import mroki.api.com.blog.enums.Gender;
import mroki.api.com.blog.generator.StaffCodeGenerator;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;

@Entity
@Table(	name = "users",
		uniqueConstraints = {
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email")
		},
		indexes ={
			@Index(name = "user_role_idx" , columnList = "roleId"),
				@Index(name = "user_username_idx" , columnList = "username"),
				@Index(name = "user_isActivate_idx" , columnList = "isActivate"),
				@Index(name = "user_email_idx" , columnList = "email"),
				@Index(name = "user_isVerifiedEmail_idx" , columnList = "isVerifiedEmail"),
		})
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	@Id
	@GeneratedValue
	private Long id;

	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private Boolean isVerifiedEmail;
	private LocalDate dateOfBirth;
	private String gender;
    private Boolean isActivate;

    @ManyToOne
    @JoinColumn(name = "roleId")
	private Role role;



}
