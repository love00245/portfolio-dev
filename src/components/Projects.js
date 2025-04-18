import { useRouter } from 'next/router';
import Image from "next/image";
const projects = [
    {
        name: 'task-tracker',
        title: 'Task Tracker App',
        description: 'A productivity app to manage tasks with MongoDB + Next.js.',
        image: '/images/projects/task-tracker.jpg',
        tech: ['Next.js', 'MongoDB', 'Tailwind'],
    },
    {
        name: 'image-searcher',
        title: 'Image Searcher',
        description: 'Search and save royalty-free images using external APIs.',
        image: '/images/projects/image-searcher.jpg',
        tech: ['Node.js', 'Redis', 'Express'],
    },
    // Add more projects here...
];

export default function Projects() {
    const router = useRouter();

    const openProject = (name) => {
        router.push(`/project/${name}`);
    };

    return (
        <section id="projects" style={styles.section}>
            <h2 style={styles.heading}>🚀 Projects</h2>
            <div style={styles.grid}>
                {projects.map((project) => (
                    <div
                        key={project.name}
                        style={styles.card}
                        onClick={() => openProject(project.name)}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300} />
                        <h3 style={styles.title}>{project.title}</h3>
                        <p style={styles.description}>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '80px 40px',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '40px',
        color: '#1f1f1f',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    image: {
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    title: {
        fontSize: '1.2rem',
        margin: '10px 0 6px',
        color: '#555',
    },
    description: {
        fontSize: '0.95rem',
        color: '#555',
    }
};
