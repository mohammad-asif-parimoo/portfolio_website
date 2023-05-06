import React, { useState } from 'react';
import '../styles/FormStyles.css';

const Form = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        document.activeElement.blur();
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
        setShowAlert(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
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
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={(event) => event.target.select()} />
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={(event) => event.target.select()} />
                <label>Subject</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} onFocus={(event) => event.target.select()} />
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} onFocus={(event) => event.target.select()} />
                <button className="my-btn" type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Form;
