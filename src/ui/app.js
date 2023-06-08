function convertToShortURL() {

  const longURLInput = document.getElementById("long-url");
  const shortURLInput = document.getElementById("short-url");
  
  // Call your API here to convert the long URL to a short URL
  // Replace 'your-api-url' with the actual API endpoint
  fetch('your-api-url', {
	method: 'POST',
	headers: {
	  'Content-Type': 'application/json',
	},
	body: JSON.stringify({ longURL: longURLInput.value }),
  })
  .then(response => response.json())
  .then(data => {
	// Display the short URL
	shortURLInput.value = data.shortURL;
  })
  .catch(error => console.error('Error:', error));
}

function copyToClipboard() {
  const shortURLInput = document.getElementById("short-url");
  shortURLInput.select();
  shortURLInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(shortURLInput.value)
        .then(() => {
          alert("Copied to clipboard: " + shortURLInput.value);
        })
        .catch(error => {
          console.error('Error copying to clipboard:', error);
        });
}