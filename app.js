// https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright

const searchInput = document.getElementById("searchInput");
const searchbtn = document.getElementById("searchBtn");
const description = document.getElementById("description");
const word = document.getElementById("word");
const initialInfo = document.getElementById("intial-info");
const visit = document.querySelector(".visit");
const body = document.querySelector("body");

const darkModeOption = document.getElementById('dark');
const lightModeOption = document.getElementById('light');



// Dark mode toggle
darkModeOption.addEventListener('click', function() {
    body.classList.remove("light");
    body.classList.add("dark");
});

// Light mode toggle
lightModeOption.addEventListener('click', function() {
    body.classList.remove("dark");
    body.classList.add("light");
    console.log(book);
});


searchbtn.addEventListener("click", async () => {
    event.preventDefault();

    
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
    const options = {
    	method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '406da71615mshc67827d2ae7c847p1151e3jsn4dcadcaace76',
		    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	    }
    };

    const topic = searchInput.value
    console.log(topic)

    if(topic == ""){ // if user doesnt give any input and pressing search or enter 
        return;
    }
    

    
    let response = await fetch(url+topic, options);
    let data = await response.json();
  
    word.innerText = "meaning of: "+topic;
    if(data.definition == ""){
        initialInfo.innerText = "";
        description.innerText = "Oops! We couldn’t find a definition for that word. It might be a rare gem or freshly minted. Don’t give up-check back later or dive into other sources. Keep the word hunt alive! 🕵️‍♂️";
        visit.innerText = "\n\n  A big thank you for exploring with Dictionary App!";
        return;
    }

    
    initialInfo.innerText = "";

    let definitionsArray = data.definition.split(/(?=\d\.)/);

    let firstFourDefinitions = definitionsArray.slice(0, 4);

    let definitionsToShow = firstFourDefinitions.join('\n\n');

    description.innerText = definitionsToShow;

    visit.innerText = "\n\n A big thank you for exploring with Dictionary App!";


    // description.innerText = data.definition.replace("2.", "\n2.").replace("3.", "\n3.").replace("4.", "\n4.")
    
    
})

