export default function Experience() {
    const techStack = [
        { name: 'Node.js', logo: '/images/nodejs.svg' },
        { name: 'MongoDB', logo: '/images/mongodb.svg' },
        { name: 'Express.js', logo: '/images/express.svg' },
        { name: 'Redis', logo: '/images/redis.svg' },
        { name: 'AWS', logo: '/images/aws.svg' },
        { name: 'Git', logo: '/images/git.svg' },
        { name: 'My Sql', logo: '/images/mysql.svg' },
        { name: 'Stripe', logo: '/images/stripe.svg' }
    ];

    return (
        <section id="experience" style={styles.section}>
            <h2 style={styles.heading}>⚙️ Tech Stack</h2>
            <div style={styles.grid}>
                {techStack.map((tech, index) => (
                    <div key={index} style={styles.card}>
                        <img src={tech.logo} alt={tech.name} style={styles.logo} />
                        <span style={styles.label}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '80px 40px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '40px',
        color: '#222',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    card: {
        backgroundColor: '#B8B8B8',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform 0.2s ease-in-out',
    },
    logo: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    },
    label: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#36454F'
    },
};
