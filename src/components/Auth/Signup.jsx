import { useState } from "react";
import { signUpUser } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";

export function Signup() {
	const [formFields, setFormFields] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields((prev) => ({ ...prev, [name]: value }));
	};

	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const userCredentials = await signUpUser(email, password);
			if (userCredentials) {
				setFormFields({ email: "", password: "" });

				navigate("/private");
			}
		} catch (error) {
			console.log("Error signing in user: ", error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={handleChange}
			/>
			<label htmlFor="password">Password:
			</label>
			<input
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
			/>
			<button id="submit" type="submit">
				Register
			</button>
		</form>
	);
}
