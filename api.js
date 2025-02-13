// JavaScript code to make API requests to Unsplash and display images in a gallery

document.addEventListener('DOMContentLoaded', function() {
    const ACCESS_KEY = 'dAWA7OHN8LXORUANLZF28uLqsE95g7k4UQd8T3i4lyI'; // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
    const SEARCH_QUERY = 'landscape'; // Example search query
    const API_URL = `https://api.unsplash.com/search/photos?query=${SEARCH_QUERY}&client_id=${dAWA7OHN8LXORUANLZF28uLqsE95g7k4UQd8T3i4lyI}&per_page=10`;
  
    // Function to fetch images from Unsplash API
    function fetchImages() {
      fetch(`https://api.unsplash.com/search/photos?query=${SEARCH_QUERY}&client_id=${dAWA7OHN8LXORUANLZF28uLqsE95g7k4UQd8T3i4lyI}&per_page=10`)
        .then(response => response.json())
        .then(data => {
          displayImages(data.results); // Pass the array of images to the displayImages function
        })
        .catch(error => {
          console.error('Error fetching images:', error);
        });
    }
  
    // Function to display images in the gallery
    function displayImages(images) {
      const galleryContainer = document.getElementById('imageGallery');
  
      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular; // Use 'regular' size image for display
        imgElement.alt = image.alt_description; // Set alt text for accessibility
        galleryContainer.appendChild(imgElement);
      });
    }
  
    // Call the fetchImages function to fetch and display images when the DOM content is loaded
    fetchImages();
  });
  