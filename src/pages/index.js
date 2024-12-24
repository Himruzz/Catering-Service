import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Catering Service</h1>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link href="/members" style={styles.navLink}>Manage Members</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/venue" style={styles.navLink}>Manage Venue</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/workers" style={styles.navLink}>Manage Workers (Admin Only)</Link>
          </li>
        </ul>
      </nav>

      <main style={styles.main}>
        <h2>Welcome to the Catering Service Management System</h2>
        <p style={styles.description}>
          Easily manage members, venues, and workers for your catering service.
        </p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f7f8fa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1em',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#dfffe1',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  description: {
    color: '#555',
    fontSize: '1.2em',
    maxWidth: '600px',
  },
};
