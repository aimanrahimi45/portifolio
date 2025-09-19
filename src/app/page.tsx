import Hero from '@/components/Hero';
import HeroGooeyNav from '@/components/HeroGooeyNav';

export default function Home() {
  return (
    <main>
      <HeroGooeyNav />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full stack developer with expertise in modern web technologies.
            I love creating innovative solutions that make a difference and turning complex problems into simple, beautiful designs.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This section will showcase my portfolio projects. Coming soon!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This section will contain contact information and a contact form. Coming soon!
          </p>
        </div>
      </section>
    </main>
  );
}
