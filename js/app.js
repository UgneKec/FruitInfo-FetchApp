document.querySelector('form').addEventListener("input",(e)=>{
    e.preventDefault();
    fetch(`https://www.fruityvice.com/api/fruit/${e.target.value}`)
    .then((response)=>data=response.json())
    .then((data) =>{
        console.log(e.target.value)
        try{
            document.getElementById('error-message').style.display ="none";
            const items = document.getElementById("items");
            items.innerHTML = "";
            let itemDiv= document.createElement('div');
            itemDiv.className = 'item';
            const itemInfo =`
    
            <h5 class="fruit-name text-center p-3" >${data.name}</h5>
            <div class="nutritions-bg">
                <div class="container nutritions d-flex justify-content-between ">
                <div>
                    <h6>Cal.:</h6>
                    <p>${data.nutritions.calories}</p>
                </div>
                <div>
                    <h6>Fat:</h6>
                    <p>${data.nutritions.fat}</p>
                </div>
                <div>
                    <h6>Suggar:</h6>
                    <p>${data.nutritions.sugar}</p>
                </div>
                <div>
                    <h6>Carb.:</h6>
                    <p>${data.nutritions.carbohydrates}</p>
                </div>
                <div>
                    <h6>Protein:</h6>
                    <p>${data.nutritions.protein}</p>
                </div>
                </div>
            </div>
            <div id="details" class="details container text-center" >
                <h6>Details</h6>
                <p>Family: ${data.family}</p>
                <p>Order: ${data.order}</p>
                <p>Genus: ${data.genus}</p>
            </div>
        
            `    
            itemDiv.innerHTML = itemInfo;
            items.appendChild(itemDiv);    

    }
    catch (error) {
        console.log('Request failed!');
        document.getElementById('error-message').style.display ="block";
      }
 
    })    
})

document.getElementById('all-fruits').addEventListener('click', () =>{
    items.innerHTML = "";
    fetch(`https://www.fruityvice.com/api/fruit/all`)
    .then((response)=>data=response.json())
    .then((data) =>{
        document.getElementById('error-message').style.display ="none";
        let itemDiv= document.createElement('div')
        itemDiv.className = 'item'
        data.forEach(fruit => {
            let itemDiv= document.createElement('div')
            itemDiv.className = 'fruit-by-button mb-3 text-center'
            const fruitInfo =`
            <button type="button" class="btn">${fruit.name}</button>          
            `

            itemDiv.addEventListener('click', event=>{
                fetch(`https://www.fruityvice.com/api/fruit/${fruit.name}`)
                .then(response => response.json())
                .then(data => {
                    items.innerHTML = ""
                    let itemDiv= document.createElement('div')
                    itemDiv.className = 'item'
                    const itemInfo =`

                    <h5 class="fruit-name text-center p-3" >${data.name}</h5>
                    <div class="nutritions-bg">
                        <div class="container nutritions d-flex justify-content-between ">
                        <div>
                            <h6>Cal.:</h6>
                            <p>${data.nutritions.calories}</p>
                        </div>
                        <div>
                            <h6>Fat:</h6>
                            <p>${data.nutritions.fat}</p>
                        </div>
                        <div>
                            <h6>Suggar:</h6>
                            <p>${data.nutritions.sugar}</p>
                        </div>
                        <div>
                            <h6>Carb.:</h6>
                            <p>${data.nutritions.carbohydrates}</p>
                        </div>
                        <div>
                            <h6>Protein:</h6>
                            <p>${data.nutritions.protein}</p>
                        </div>
                        </div>
                    </div>
                    <div id="details" class="details container text-center" >
                        <h6>Details</h6>
                        <p>Family: ${data.family}</p>
                        <p>Order: ${data.order}</p>
                        <p>Genus: ${data.genus}</p>
                    </div>
                
                    `    
                    itemDiv.innerHTML = itemInfo;
                    items.appendChild(itemDiv);                      
                    
                })
            })
         
            itemDiv.innerHTML = fruitInfo;
            items.appendChild(itemDiv);   

        }) 
    })
})


