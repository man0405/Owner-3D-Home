export interface UserLoginDTO {
	email: string;
	password: string;
}

type UserSignupDTO = {
	email: string;
	password: string;
	confirm: string;
};

type UserInfo = {
	firstName: string;
	lastName: string;
	phone: string;
};

function validateEmail(email: string): boolean {
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
}
function validatePassword(password: string): boolean {
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
}

function validatePhone(phone: string): boolean {
	const phoneRegex =
		/^(\(?[0-9]{3}\)?)((\s|\-){1})?[0-9]{3}((\s|\-){1})?[0-9]{4}$/;
	return phoneRegex.test(phone);
}

export const login = (userLogin: UserLoginDTO) => {
	const { email, password } = userLogin;
	if (!validateEmail(email)) {
		return { message: "Invalid email", type: "email", code: "400" };
	}
	if (!validatePassword(password)) {
		return {
			message:
				"The password should have at least 1 lowercase, 1 uppercase, 1 number, 1 symbol and at least 5 characters",
			type: "password",
			code: "400",
		};
	}
	return null;
};

export const signup = (user: UserSignupDTO) => {
	const { email, password, confirm } = user;
	if (!validateEmail(email)) {
		return { message: "Invalid email", type: "email", code: "400" };
	}
	if (!validatePassword(password)) {
		return {
			message:
				"The password should have at least 1 lowercase, 1 uppercase, 1 number, 1 symbol and at least 5 characters",
			type: "password",
			code: "400",
		};
	}
	if (password !== confirm) {
		return {
			message: "Passwords do not match",
			type: "confirmPassword",
			code: "400",
		};
	}
	return null;
};

export const infoCheck = (user: UserInfo) => {
	const { firstName, lastName, phone } = user;
	console.log(firstName, lastName, phone);
	if (firstName.trim().length < 2) {
		return {
			message: "First name is too short",
			type: "firstName",
			code: "400",
		};
	}
	if (lastName.trim().length < 2) {
		return { message: "Last name is too short", type: "lastName", code: "400" };
	}
	if (!validatePhone(phone)) {
		return { message: "Phone number is invalid", type: "phone", code: "400" };
	}
	return null;
};
