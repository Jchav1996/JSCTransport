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
    };

    return (
        <div className='quoteForm'>
            <h1>Request a quote for Flatbed Services</h1>
            <form id='quoteform' onSubmit={handleSubmit} className="card">
                <div className="form-group">
                    <label>*Full name :</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Company :</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>*Phone Number :</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>*Your Email :</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>*Pick-Up Origin :</label>
                    <input
                        type="text"
                        name="pickUpOrigin"
                        value={formData.pickUpOrigin}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>*Drop Off Destination :</label>
                    <input
                        type="text"
                        name="dropOffDestination"
                        value={formData.dropOffDestination}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>*Total Weight - (lbs) :</label>
                    <input
                        type="text"
                        name="totalWeight"
                        value={formData.totalWeight}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
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
                <button id="submitbutton" type="submit">
				Submit
			</button>
            </form>
        </div>
    );
}


