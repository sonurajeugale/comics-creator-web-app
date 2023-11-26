import React from 'react';

// Types for the props of ComicDisplay component
type ComicDisplayProps = {
  images: string[]; // Array of image URLs to be displayed
};

// ComicDisplay: A component to display a grid of comic panel images.
// Props:
// - images: An array of URLs representing the comic panel images.
const ComicDisplay: React.FC<ComicDisplayProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        // Display each image with a unique key and descriptive alt text
        <img key={index} src={image} alt={`Comic panel ${index + 1}`} className="w-full h-auto" />
      ))}
    </div>
  );
};

export default ComicDisplay;
