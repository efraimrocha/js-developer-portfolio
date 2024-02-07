// Envia os dados para o perfil
function updateProfileInfo(profileData){

    // Dados do header
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
}

// Atualiza os as softskills
function updateSoftSkills(profileData){
    const softSkills = document.getElementById('prolife.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

// Atualiza as hardskills
function updateHardSkills(profileData){
    const hardSkills = document.getElementById('prolife.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

// Atualiza a sessão linguagens
function updateLanguages(profileData){
    const languages = document.getElementById('languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

//Atualiza o portfolio
function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(port => {
        return` 
            <li>
                <h3 class="title ${port.github}">${port.name}</h3>
                <a href="${port.url}" target="_blank">${port.url}</a>
            </li>
        `
    }).join('')
}

// Renderiza sessão das ezperiências profissionais.
function professionalExperience(profileData){
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.professionalExperience.map(experience => {
        return`
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
            <p>
                ${experience.description}
            </p>
        `
    }).join('')

}

(async () => {
    const profileData = await fecthProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    professionalExperience(profileData)
})()

