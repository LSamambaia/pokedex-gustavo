
const pokemonimage =document.querySelector(".pokemon__image");

const pokemonNumber =document.querySelector(".pokemon__number");

const pokemonName= document.querySelector(".pokemon__name");

const form =document.querySelector(".form");
const input =document.querySelector(".input__search");

let searchPokemon = 1;



//CONECTAR E CAPTURAR AS INFORMAÇÕES DA POKE API
    const fetchPokemon = async (pokemon)=>{

            pokemonimage.src=""
        pokemonName.textContent="Loading..."
        pokemonNumber.textContent="🙃"
       
        

        const APIResponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}
`);




            if (APIResponse.status ===200) {

                console.log(APIResponse)
                const data = await APIResponse.json();

                return data;
                
            }
            

            
        // console.log("renderiza pokemon ");

    };

    const renderPokemon = async (pokemon) =>{

        console.log("renderiza pokemon ");
        const data = await fetchPokemon(pokemon);

        console.log(data);
        if (data) {
            pokemonName.textContent =data.name;
            pokemonNumber.textContent= data.id;
            pokemonimage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
            pokemonimage.style.width= "25%";
            input.value =""
            searchPokemon = data.id
            
           } else {
            pokemonNumber.textContent = ""
            pokemonName.textContent="NOT FOUND :("
            pokemonimage.src="https://i.pinimg.com/originals/80/e1/8d/80e18df0ed0ad872ac1a003d543d9613.gif"
            pokemonimage.style.width ="30%";
        
            
           }

        
    }


    form.addEventListener("submit",(event) => {
        
        event.preventDefault();

        renderPokemon(input.value.toLowerCase());
    
       
        
    })

    
    function next() {

        searchPokemon += 1;

        renderPokemon(searchPokemon);
    };


    function prev(){

        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    
    };

    renderPokemon(1)


   
    
    
    


    
    

   
    
    
    

    

