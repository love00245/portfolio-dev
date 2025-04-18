export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Lovepreet.dev</div>
      <ul style={styles.navLinks}>
        <li><a href="#hero" style={styles.link}>Home</a></li>
        <li><a href="#experience" style={styles.link}>Experience</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    backgroundColor: 'rgba(0,0,0,0.85)',
    color: 'white',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  }
};
