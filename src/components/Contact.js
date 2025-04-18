import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Thanks for reaching out!');
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" style={styles.section}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>📬 Contact Me</h2>

                {['name', 'email', 'message'].map((field) => (
                    <div key={field} style={styles.fieldWrapper}>
                        <label
                            htmlFor={field}
                            style={{
                                ...styles.label,
                                top: formData[field] ? '-10px' : '14px',
                                fontSize: formData[field] ? '0.8rem' : '1rem',
                                color: formData[field] ? '#0070f3' : '#888',
                            }}
                        >
                            {field === 'name' ? 'Name' : field === 'email' ? 'Email' : 'Message'}
                        </label>

                        {field === 'message' ? (
                            <textarea
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                rows={5}
                                style={styles.textarea}
                                placeholder=""
                            />
                        ) : (
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder=""
                            />
                        )}
                    </div>
                ))}

                <button type="submit" style={styles.button}>
                    ✉️ Send Message
                </button>
            </form>
        </section>
    );
}

const styles = {
    section: {
        padding: '80px 40px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#222',
    },
    form: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },
    fieldWrapper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        position: 'absolute',
        left: '16px',
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
        background: '#fff',
        padding: '0 5px',
    },
    input: {
        padding: '16px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outline: 'none',
        backgroundColor: '#f9f9f9',
        color: '#333',
    },
    textarea: {
        padding: '16px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outline: 'none',
        backgroundColor: '#f9f9f9',
        color: '#333',
        resize: 'vertical',
    },
    button: {
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '14px',
        border: 'none',
        borderRadius: '10px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 6px 15px rgba(0, 112, 243, 0.2)',
        transition: 'background 0.3s ease, transform 0.2s ease',
    },
};
