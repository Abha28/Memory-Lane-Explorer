function search() {
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput === 'moon') {
        var searchResults = [
            { 
                title: 'Result 1', 
                content: 'memory 1', 
                images: ['IMG_1700.jpeg']
            },{ 
                title: 'Result 2', 
                content: 'memory 2', 
                images: ['IMG_5968.jpeg']
            },
            { 
                title: 'Result 3', 
                content: 'memory 3', 
                images: ['IMG_9177.jpeg']
            },
        ];
    }
    else {
        var searchResults = [
            { 
                title: 'Result 1', 
                content: 'memory 1', 
                images: ['IMG_4718.jpeg']
            },{ 
                title: 'Result 2', 
                content: 'memory 2', 
                images: ['IMG_4857.jpeg']
            },
            { 
                title: 'Result 3', 
                content: 'memory 3', 
                images: ['IMG_5041.jpeg']
            },
        ];

    }
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
    if (searchResults.length > 0) {
        searchResults.forEach(function(result) {
            var resultDiv = document.createElement('div');
            resultDiv.classList.add('result');

            var titleElement = document.createElement('h3');
            titleElement.textContent = result.title;
            titleElement.classList.add('result-title');

            var contentElement = document.createElement('p');
            contentElement.textContent = result.content;
            contentElement.classList.add('result-content');

            resultDiv.appendChild(titleElement);
            resultDiv.appendChild(contentElement);

            // Adding images if available
            if (result.images && result.images.length > 0) {
                result.images.forEach(function(imageUrl) {
                    var imageElement = document.createElement('img');
                    imageElement.src = imageUrl;
                    imageElement.alt = 'Memory Image';
                    resultDiv.appendChild(imageElement);
                });
            }

            searchResultsContainer.appendChild(resultDiv);
        });
    } else {
        var noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No results found.';
        noResultsElement.classList.add('no-results');

        searchResultsContainer.appendChild(noResultsElement);
    }
}
