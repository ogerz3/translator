let btn_search = document.querySelector('.btn_search')
let inputs = document.querySelectorAll('input')
let result_text = document.querySelector('.result_text')
let languageSelect = document.getElementById('languageSelect')
const FetchResult = () => {
    const text = inputs[0].value
    const selectedLanguagec = languageSelect.value;
    const url = `https://google-translate112.p.rapidapi.com/translate?text=${text}&target_lang=${selectedLanguagec}`;
    const options = {
        method: 'Get',
        headers: {
            'x-rapidapi-key': 'f8e4ea7456msh1d6d78bee272ee1p127dc4jsn13d3c8be74cb',
            'x-rapidapi-host': 'google-translate112.p.rapidapi.com'
        }
    };

    fetch(url,options)
    .then(res=>res.json())
    .then(Data =>{
        console.log(Data);
        result_text.textContent=Data.translation
    })
}
btn_search.addEventListener('click',FetchResult)
