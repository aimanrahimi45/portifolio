import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Placeholder sections for smooth scrolling navigation */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Projects Section
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This section will showcase my portfolio projects. Coming soon!
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Contact Section
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This section will contain contact information and a contact form. Coming soon!
          </p>
        </div>
      </section>
    </main>
  );
}
