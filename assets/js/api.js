// Consome os dados do arquivo json do rejositório.

async function fecthProfileData(){
    const url = "https://raw.githubusercontent.com/efraimrocha/js-developer-portfolio/main/data/profile.json"
    const fetching = await fetch(url)
    return fetching.json()
}
