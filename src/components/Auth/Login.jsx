import { useState } from "react";
import { signInUser } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";

export function Login() {
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
			const userCredentials = await signInUser(email, password);
			if (userCredentials) {
				setFormFields({ email: "", password: "" });

				navigate("/dashboard");
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
				Log In
			</button>
		</form>
	);
}
