export interface openProps {
  menuOpen: boolean; 
  setMenuOpen: (menuOpen: boolean) => void; 
}; 

export interface ButtonProps {
  title: string; 
  url: string; 
  rel?: (string); 
  target?: (string); 
}; 

export interface ProjectCardProps {
  img: string; 
  alt: string; 
  title: string; 
  description: string; 
}

// shouldn't use any... as it's less safe and dangerous for our code
// perhaps ProjectProps where we specify all possible types we'll fetch and use
export interface ProjectProps {
  id: number; 
  img: string; 
  alt: string; 
  title: string; 
  description: string; 
  liveUrlTitle: string; 
  liveUrl: string; 
  gitHubTitle: string; 
  gitHubUrl: string; 
}