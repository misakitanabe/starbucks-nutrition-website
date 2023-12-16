const resultElement = document.getElementById('result');
const imageContainer = document.getElementById('imageContainer');
const filterBarElement = document.getElementById('filter');
// const port = process.env.PORT || 3000;
// Store visibility states of items based on their ID
const itemVisibility = {};

// Function to fetch data for a specific item
async function fetchData(itemId) {
  try {
    const response = await fetch(`http://localhost:3000/items/${itemId}`); 
    // const response = await fetch(`https://starbucks-nutrition-website-f66fc1fe07cd.herokuapp.com/items/${itemId}`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to display all items 
async function displayAllItems() {
  fetch(`http://localhost:3000/items`)
  // fetch(`https://starbucks-nutrition-website-f66fc1fe07cd.herokuapp.com/items`)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.className = 'w-dyn-item w-col w-col-4';
      
      const linkBlock = document.createElement('a');
      linkBlock.className = 'photo-link-block w-inline-block';
      linkBlock.dataset.itemId = item.id; 
      
      const image = document.createElement('img');
      image.dataset.itemId = item.id; 
      image.src = item.src;
      image.alt = '';
      
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = item.item;
      
      linkBlock.appendChild(image);
      linkBlock.appendChild(title);
      
      listItem.appendChild(linkBlock);
      
      imageContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    console.log('response: ', response);
  });
}

// Function to display filtered items 
async function displayFilteredItems(type) {
  fetch(`http://localhost:3000/items/types/${type}`)
  // fetch(`https://starbucks-nutrition-website-f66fc1fe07cd.herokuapp.com/items/types/${type}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.className = 'w-dyn-item w-col w-col-4';
      
      const linkBlock = document.createElement('a');
      linkBlock.className = 'photo-link-block w-inline-block';
      linkBlock.dataset.itemId = item.id; 
      
      const image = document.createElement('img');
      image.dataset.itemId = item.id; 
      image.src = item.src;
      image.alt = '';
      
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = item.item;
      
      linkBlock.appendChild(image);
      linkBlock.appendChild(title);
      
      listItem.appendChild(linkBlock);
      
      imageContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

// Function to display the fetched data on the popup window
function displayData(data) {
  const itemDiv = document.createElement('div');
  itemDiv.className="window-container";
  itemDiv.innerHTML = `
    <div class="back-container">
        <button class="back-btn">
            <span>&#8592;</span>
            back
        </button>
    </div>

    <div class="nutrition-wrapper">
        
        <div class="window-img"> 
            <img data-item-id="1" src=${data.src} alt="" />
        </div>

        <div class="info-container">
            <div class="nutritional-info window-title-container">
                <h1 class="window-title">${data.item}</h1>
            </div>
            
            <div class="nutritional-info">
                Calories: ${data.calories}<br>
                Fat: ${data.fat} grams<br>
                Carb: ${data.carb}  grams<br>
                Fiber: ${data.fiber}  grams<br>
                Protein: ${data.protein}  grams<br>
                Type: ${data.type}
            </div>
        </div>
    </div>
    `;
//   itemDiv.innerHTML = 
//     `Calories: ${data.calories}<br> Fat: ${data.fat}<br> Carb: ${data.carb}<br> Fiber: ${data.fiber}<br> Protein: ${data.protein}<br> Type: ${data.type}`
//     `${<img data-item-id="1" src="images/8-grain-roll.png" alt="" />}`;
  resultElement.appendChild(itemDiv);
}

// Function to display the fetched data
function displayWindow(itemId) {
    const itemDiv = document.getElementById(`result`);
    
    // Fetch the data and display it if it's not visible
    fetchData(itemId);
    itemDiv.style.display = 'block';
    itemVisibility[itemId] = true;
  }

// Event listener for item clicks
imageContainer.addEventListener('click', (event) => {
  console.log(event.target.tagName);
    if (event.target.tagName === 'IMG' || event.target.tagName === 'A') {
      const itemId = event.target.dataset.itemId;
      if (itemId) {
        console.log("calling display window");
        displayWindow(itemId);
      }
    }
});

// event listener for back button
resultElement.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'BUTTON' || event.target.tagName === 'SPAN') {
      const itemDiv = document.getElementById(`result`);
      itemDiv.textContent = '';
      resultElement.style.display = 'none';
    }
});

// event listener for filter bar
filterBarElement.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const type = event.target.textContent;

    // Remove all items from the page
    let listItemToRemove = imageContainer.lastChild;
    while (listItemToRemove && listItemToRemove != document.getElementById('result')) {
      imageContainer.removeChild(listItemToRemove);
      listItemToRemove = imageContainer.lastChild;
    }

    // Render every item back onto the page if 'All Items' selected
    if (type === 'All Items') {
      displayAllItems();
      console.log("displayed all items again");

    // Render filtered items back onto the page if category selected
    } else {
      displayFilteredItems(type);
      console.log("displayed filtered items");
    }
  }
});

// Call the displayImages function when the page loads
window.addEventListener('load', displayAllItems);
