
// OLD way to write the fetch function 
fetch('http://localhost:3000/api/gallery')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          // Any code that need data should be in this block
         

          console.log(data)
       
          let ImageTemp= '';

          const gallery = document.querySelector ('.wrapper');

          data.forEach(function(item){
          
          ImageTemp += 
          `<figure>
            <a href=${item.id}>
              <img src="http://picsum.photos/id/${item.id}/250" alt="${item.name}">
            </a>
              <figcaption>WELCOME to <a href=${item.site}>${item.name}</a></figcaption>
            </figure>`
          })
        // .catch(function(error){
        //   console.error('Error:', error)
        // });
         
        gallery.innerHTML = ImageTemp
                
        });
        
        const toggle =document.querySelector('button')
        const menu = document.querySelector('nav ul')
          
        toggle.addEventListener('click', function(){
        menu.classList.toggle('visible')
})

//  New way to write the same function as above
      // fetch('http://example.com/songs')
      //   .then(response => response.json())
      //   .then(data => console.log(data));
     