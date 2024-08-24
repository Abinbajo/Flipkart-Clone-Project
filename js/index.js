document.addEventListener('DOMContentLoaded', () => {
    fetch('./categories.json')
        .then(response => response.json())
        .then(data => {
            displayCategories(data);
        })
        .catch(error => console.error('Error loading categories:', error));
});

function displayCategories(categories) {
    categories.forEach(element => {
        let image = document.createElement('img');
        image.src = element.img_src;

        let title = document.createElement("p");
        title.innerHTML = element.title;

        let box = document.createElement('div');
        box.append(image, title);

        
        if (element.href) {
            let link = document.createElement('a');
            link.href = element.href;
            link.appendChild(box);
            document.getElementById("categories").appendChild(link);
        } else {
            document.getElementById("categories").appendChild(box);
        }
    });
}
