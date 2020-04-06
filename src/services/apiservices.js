const getSkills = () => {
    return fetch('/services/skills.json')
    .then((response) => { return response.json() })
}

export default getSkills