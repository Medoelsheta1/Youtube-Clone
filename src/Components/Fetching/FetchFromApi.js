import axios from "axios"
    let Base_Url = 'https://youtube-v31.p.rapidapi.com'
    const options = {
    params: {maxResults: '50'},
    headers: {
        'X-RapidAPI-Key': 'd467083254msh71ffa269265a801p13861ajsn77d70f2b5249',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    };
export const FetchFromApi = async (url) => {
    const res = await axios.get(`${Base_Url}/${url}` , options)
    return res
}

export default FetchFromApi