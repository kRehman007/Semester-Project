function App() {
  return (
    <div>
        <header style={{ backgroundColor: '#4f46e5', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
      <h1 style={{ margin: 0 }}>Smart Web App</h1>
      <p style={{ margin: 0 }}>A simple, beautiful single page app built with React</p>
    </header>
    
     <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Hero Section */}
      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2>Welcome to the Future of Simplicity</h2>
        <p>
          This smart web app showcases a clean interface, modern design principles, and scalable layout.
          Built using React, it's a perfect foundation for bigger projects.
        </p>
      </section>

      {/* Features */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>✨ Key Features</h3>
        <ul>
          <li>⚡ Lightning-fast with Vite</li>
          <li>📱 Responsive design (mobile-ready)</li>
          <li>🧩 Modular component structure</li>
          <li>💡 Ideal for portfolios or landing pages</li>
        </ul>
      </section>

      {/* About */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>📘 About This App</h3>
        <p>
          This is a static single page application created for demonstration purposes. While it doesn't have
          backend logic, it's a great base to integrate APIs, authentication, and more. You can extend it
          with Firebase, Node.js, or any backend of your choice.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h3>📫 Get in Touch</h3>
        <p>
          Want to collaborate or know more about how this works?
          Reach out on <a href="mailto:kashif@example.com">kashif@example.com</a> or check the project on <a href="https://github.com/kRehman007">GitHub</a>.
        </p>
      </section>
    </main>

       <footer style={{
      backgroundColor: '#f3f4f6',
      padding: '1.5rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      marginTop: '3rem'
    }}>
      <p>© {new Date().getFullYear()} Smart Web App | Built with ❤️ by Kashif</p>
    </footer>
    </div>
  )
}

export default App
