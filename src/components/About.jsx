export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-20">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-20 items-center mt-12">
          <div className="prose prose-lg dark:prose-invert max-w-none animate-slide-up">
            <h3 className="text-3xl font-playfair mb-8 tracking-tight">
              A Blend of Technology & Ancient Wisdom
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a software developer with a unique perspective shaped by my interest in ancient texts and Sanskrit. My approach to problem-solving combines cutting-edge technology with timeless wisdom.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As a graduate from NIT Surat with a B.Tech in Computer Science and Engineering, I bring a solid technical foundation to my work. My education in performing arts (Tabla) has taught me discipline, patience, and the art of composition, qualities that enhance my approach to software development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in creating solutions that not only solve technical challenges but also consider the human experience and long-term impact. This holistic approach guides all my projects and collaborations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {['Innovator', 'Problem Solver', 'Tech Explorer', 'Leader'].map((title, index) => (
              <div 
                key={title}
                className="backdrop-blur-sm bg-white/5 dark:bg-gray-800/10 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300 animate-slide-up border border-white/10 dark:border-gray-700/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Creating solutions that address real-world challenges</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}