
// Faz os dados da conexão com API e retorna o JSON
async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/efraimrocha/js-developer-portfolio/main/data/profile.json"
    const fetching = await fetch(url)
    fetching.json()
    return fetching
}
