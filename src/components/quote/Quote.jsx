import React, { useState } from 'react';
import './quote.css';

export function Quote() {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        phoneNumber: '',
        email: '',
        pickUpOrigin: '',
        dropOffDestination: '',
        totalWeight: '',
        additionalNotes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with formData
        console.log(formData);
        window.location.reload();
    };

    return (
        <div className='quoteForm'>
            <h1>Request a quote for Flatbed Services</h1>
            <form onSubmit={handleSubmit} id="card">
                <div className="form-group">
                    <label>*Full name :</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <label>Company :</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                    />
                    <label>*Phone Number :</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    <label>*Your Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    </div>
                    <div className='right1'>
                    <label>*Pick-Up Origin :</label>
                    <input
                        type="text"
                        name="pickUpOrigin"
                        value={formData.pickUpOrigin}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />

                    <label>*Drop Off Destination :</label>
                    <input
                        type="text"
                        name="dropOffDestination"
                        value={formData.dropOffDestination}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />

                    <label>*Total Weight - (lbs) :</label>
                    <input
                        type="text"
                        name="totalWeight"
                        value={formData.totalWeight}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />

                    <label>Additional Notes :</label>
                    <textarea
                        maxLength={200}
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="form-input"
                        id='notes'
                    />
                </div>
            </form>
            <button id='submitbutton' type="submit" form="card">Submit</button>
        </div>
    );
}


