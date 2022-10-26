const count = 30;
const apiKey = 'V_99TuJtjobxR1v9N4xecLgmnns-mOs5hWh94KkUpoc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


export const getImages = async () => {
    const resp = await fetch(apiUrl)
    const data = await resp.json()
    return data;
}

