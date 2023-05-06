import React, { useState } from 'react';
import '../styles/FormStyles.css';

const Form = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAlert(true);
        window.scroll(0, 0);
        window.addEventListener('resize', () => {
            window.scrollTo(0, 0);
        });
    };

    return (
        <div className="form">
            {showAlert && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close" />
                    <strong className='alert-heading'>OOPS!</strong><span className='alert-para'> Looks like our backend is taking a nap :(</span>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onFocus={(event) => event.target.select()} />
                <label>Email</label>
                <input type="email" onFocus={(event) => event.target.select()} />
                <label>Subject</label>
                <input type="text" onFocus={(event) => event.target.select()} />
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here..." onFocus={(event) => event.target.select()} />
                <button className="my-btn" type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Form;
