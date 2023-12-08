import { useState } from 'react';
import './quote.css';

export function Quote() {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0);

    return (
        <div>
            <form><label>*Full name :</label>
                <label></label>
                <input type="text" required={true} />
                <br />Company :<input type="text" />
                <br /><label>*Phone Number :<input type="number" required={true} />
                </label>
                <br />
                <label>*Your Email :</label><input type="text" required={true} /><br />
                <label>*Pick-Up Origin :<input required={true} />
                    <br />
                    <label>*Drop Off Destination :<input required={true} />
                    </label>
                    <br />
                    <label>*Total Weight - (Ibs) :<input type="number" required={true} /></label>
                    <label>
                        <br />Additional Notes :</label>
                    <br />
                    <textarea maxLength={800} />
                    <br />
                </label>
                <input type="submit" value="Submit" /></form>
    </div>
    );
}


