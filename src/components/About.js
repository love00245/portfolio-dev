export default function About() {
    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>👨‍💻 About Me</h2>

                <div style={styles.content}>
                    <img src="/images/profile.png" alt="Lovepreet" style={styles.image} />

                    <div style={styles.text}>
                        <p>
                            I'm a backend developer with a strong passion for building scalable systems, secure APIs, and performance-driven products.
                            I have experience with MongoDB, Redis, Node.js, and love building apps that solve real-world problems.
                        </p>
                        <p>
                            Currently working in a production-grade environment, I enjoy building tools that combine clean code, system architecture, and real-time efficiency.
                        </p>

                        <div style={styles.tags}>
                            <span>Backend Developer</span>
                            <span>MongoDB</span>
                            <span>Redis</span>
                            <span>Node.js</span>
                            <span>AWS</span>
                            <span>Next.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        backgroundColor: '#f9f9f9',
        padding: '80px 40px',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#1f1f1f',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        objectFit: 'cover',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    text: {
        maxWidth: '600px',
        fontSize: '1rem',
        lineHeight: '1.7',
        color: '#444',
    },
    tags: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
    }
};
