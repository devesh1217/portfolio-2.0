export function generateImages(index, type = 'projects', numImages = 3) {
  const pathPatterns = {
    projects: `/img/projects/p${index}`,
    achievements: `/img/achievements/a${index}`
  };
  
  const basePath = pathPatterns[type];
  const images = [];
  
  // Generate only the specified number of image paths
  for (let i = 0; i < numImages; i++) {
    const imagePath = `${basePath}/img${i}.png`;
    images.push(imagePath);
  }
  
  return images;
}

export function generateProjectImages(projectIndex, numImages = 10) {
  return generateImages(projectIndex, 'projects', numImages);
}
