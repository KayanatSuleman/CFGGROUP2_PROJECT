const apiKey = '5c95a3834fe44bb1b4caa4f086d55619';

async function getHeadlinesByDestination(location) {
  const url = `https://newsapi.org/v2/top-headlines?q=${location}&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
}

document.getElementById('submit').addEventListener('click', async function() {
  const destination = document.getElementById('destination').value;
  const headlines = await getHeadlinesByDestination(destination);
  const headlineList = document.getElementById('headlines');
  headlineList.innerHTML = '';
  headlines.forEach(function(article) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
    headlineList.appendChild(listItem);
  });
});
