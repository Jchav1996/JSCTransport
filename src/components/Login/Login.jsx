import { useEffect, useState } from "react"
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
    setFormFields((prev) => ({...prev, [name]: value }));
};

useEffect(() => {
    console.log(formFields);
}, [formFields]);

const navigate = useNavigate();
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const userCredentials = await signInUser(email, password);
        if (userCredentials) {
            setFormFields({ email: "", password: ""});

            navigate("/private");
        }

    } catch (error) {
        console.log("Error signing in user: ", error.message)
    }
}

    return (
        <form id="in" onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input id="put" type="email" name="email" value={email} onChange={handleChange} />
            <br></br>
            <label for="password">Password:</label>
            <input id="put" type="password" name="password" value={password} onChange={handleChange} />
            <br></br>
            <button id="sub" type="submit">Submit</button>
        </form>
    )
}

// const resetFormFields = () => {
// };

// const handleSubmit = async (event) => {
// };