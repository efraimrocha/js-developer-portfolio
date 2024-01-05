
// Pega os dados da conexão com API
async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/efraimrocha/js-developer-portfolio/main/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.jsom()
}
