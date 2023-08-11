document.querySelector('.control button').addEventListener('click', async (event) => {
  event.preventDefault();
  
  const postDetails = document.querySelector('#reviewDetails').value;
  
  // POST to add the review with the burger_id and reviewDetails items to be stringified
  const response = await fetch('/api/blogPosts', {
    method: 'POST',
    body: JSON.stringify({ postDetails }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  // Logic to either add the review or give a failure alert
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add review');
  }
});