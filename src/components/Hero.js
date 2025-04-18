export default function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Hi, I'm Lovepreet 👋</h1>
        <p style={styles.subheading}>
          Backend Developer | Coder By ❤
        </p>

        <div style={styles.buttons}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
            📄 View Resume
          </a>
          <a href="#contact" style={styles.secondaryBtn}>
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </section> 
  );
}

const styles = {
  hero: {
    height: '100vh',
    background: 'linear-gradient(to right, #232526, #414345)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
  },
  container: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  heading: {
    fontSize: '3.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: '1.4rem',
    marginBottom: '40px',
    color: '#ccc',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#ffffff',
    color: '#1f1c2c',
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background 0.3s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  }
};
