import React, { useState, useEffect, useRef } from 'react';
import '../styles/FormStyles.css';
import Spinner from './Spinner';

const Form = () => {

    // Input data of all the fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Separate error states for each field
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // Alert dialog box
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showReceiptEmail, setShowReceiptEmail] = useState(false);

    // Creating refs for input elements
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    // API response
    const [response, setResponse] = useState(null);

    // Retry count
    const [retryCount, setRetryCount] = useState(0);

    // Spinner
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        if (response) {
            if (response.success !== undefined) {
                if (response.success === true) {
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                    setShowSuccessAlert(true);
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 200);
                    setShowSpinner(false);
                }

                else if (response.success === false) {
                    setShowErrorAlert(true);
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 200);
                    setShowSpinner(false);
                }
            }

            else if (response.errors && response.errors.length > 0) {

                setShowSpinner(false);
                // Setting a flag to track whether scrolling has occurred
                let scrolled = false;

                // Iterating through errors and update corresponding error states
                response.errors.forEach(error => {
                    if (!scrolled) {
                        // Scroll to the first encountered error field
                        if (error.path === "name") {
                            setNameError(true);
                            nameRef.current.scrollIntoView({ behavior: 'smooth' });
                            nameRef.current.focus();
                            scrolled = true;
                        }
                        else if (error.path === "email") {
                            setEmailError(true);
                            emailRef.current.scrollIntoView({ behavior: 'smooth' });
                            emailRef.current.focus();
                            scrolled = true;
                        }
                        else if (error.path === "subject") {
                            setSubjectError(true);
                            subjectRef.current.scrollIntoView({ behavior: 'smooth' });
                            subjectRef.current.focus();
                            scrolled = true;
                        }
                        else if (error.path === "message") {
                            setMessageError(true);
                            messageRef.current.scrollIntoView({ behavior: 'smooth' });
                            messageRef.current.focus();
                            scrolled = true;
                        }
                    }

                    else {
                        // Handling displaying error messages for all fields
                        if (error.path === "name") {
                            setNameError(true);
                        }
                        else if (error.path === "email") {
                            setEmailError(true);
                        }
                        else if (error.path === "subject") {
                            setSubjectError(true);
                        }
                        else if (error.path === "message") {
                            setMessageError(true);
                        }
                    }
                });
            }
        }
    }, [response]);


    // Defining the maximum number of retry attempts
    const MAX_RETRY_ATTEMPTS = 3;

    const sendData = async () => {
        try {
            setShowSpinner(true);
            let data = formData;
            let url = "https://portfolio-website-backend-mohammad-asif-parimoo.vercel.app/contact/message";
            let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const apiResult = await result.json();
            setResponse(apiResult);
        } catch (error) {

            // Retrying the sendData function if retryCount is less than MAX_RETRY_ATTEMPTS
            if (retryCount < MAX_RETRY_ATTEMPTS) {
                setRetryCount(retryCount + 1);
                await sendData();
            }
            else {
                // When retryCount reaches MAX_RETRY_ATTEMPTS this will run!
                console.log("An error occurred while sending the data to the Database", error);
                setShowErrorAlert(true);
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 200);
                setShowSpinner(false);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    };

    const handleChange = (event) => {

        setNameError(false);
        setEmailError(false);
        setSubjectError(false);
        setMessageError(false);

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSuccessAlert = () => {
        setShowSuccessAlert(false);
        setShowReceiptEmail(true);
    };

    return (
        <div className="form">

            {showErrorAlert && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" className="btn-close" onClick={() => setShowErrorAlert(false)} aria-label="Close" />
                    <strong className='alert-heading'>OOPS!</strong><span className='alert-para'> Looks like our backend is taking a nap :(</span>
                </div>
            )}

            {showSuccessAlert && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <button type="button" className="btn-close" onClick={handleSuccessAlert} aria-label="Close" />
                    <strong className='alert-heading'>SENT!</strong><span className='alert-para' style={{ marginLeft: "3px" }}> Asif will contact you shortly :)</span>
                </div>
            )}

            {showReceiptEmail && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" className="btn-close" onClick={() => setShowReceiptEmail(false)} aria-label="Close" />
                    <span className='alert-para' > Check your email for a message receipt!</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" ref={nameRef} />
                {
                    nameError === true && response.errors.length > 0 ? <p style={{ color: "red" }}>{response.errors.find(error => error.path === "name").msg}</p> : ""
                }
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} autoComplete="off" ref={emailRef} />
                {
                    emailError === true && response.errors.length > 0 ? <p style={{ color: "red" }}>{response.errors.find(error => error.path === "email").msg}</p> : ""
                }
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} autoComplete="off" ref={subjectRef} />
                {
                    subjectError === true && response.errors.length > 0 ? <p style={{ color: "red" }}>{response.errors.find(error => error.path === "subject").msg}</p> : ""
                }
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here..." name="message" value={formData.message} onChange={handleChange} autoComplete="off" ref={messageRef} />
                {
                    messageError === true && response.errors.length > 0 ? <p style={{ color: "red" }}>{response.errors.find(error => error.path === "message").msg}</p> : ""
                }
                <button className="my-btn" type="submit" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ marginRight: "10px" }}>SUBMIT</span>
                    {
                        showSpinner && <Spinner />
                    }
                </button>
            </form>
        </div>
    );
};

export default Form;