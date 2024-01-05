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


function updateSoftSkills(profileData){
    const softSkills = document.getElementById('prolife.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')


}



(async () => {
    const profileData = await fecthProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    console.log(profileData)
})()

