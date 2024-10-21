import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Country Info App',
      description: 'An application that fetches country data and displays flags, borders, and other details.',
      technologies: 'React, Axios, Bootstrap',
      link: 'https://github.com/Aielin/homework61.git',
      isFile: false,
    },
    {
      title: 'Pokemon App',
      description: 'An app that fetches and displays information about Pokémon using the PokeAPI.',
      technologies: 'HTML, CSS, JavaScript',
      filePath: '/assets/pokemon-app.zip',
      isFile: true,
    }
  ];

  return (
    <div className="portfolio-bg">
      <div className="container mt-4">
        <h1 className="mb-5">Portfolio</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies}</p>
                  {project.isFile ? (
                    <a href={project.filePath} download className="btn btn-success">
                      Download Project
                    </a>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;