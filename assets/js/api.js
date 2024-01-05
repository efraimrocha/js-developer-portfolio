
async function fecthProfileData(){
    const url = "https://raw.githubusercontent.com/efraimrocha/js-developer-portfolio/main/data/profile.json"
    const fetching = await fetch(url)
    return fetching.json()
}
