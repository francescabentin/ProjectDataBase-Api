
const dataApiBD = (data) => {
    return (fetch("http://localhost:4000/projects/all",)
        .then(response => response.json())
        .then(data => {
            return data;
        })
    )
}


const dataApi = (data) => {
    return (fetch("//localhost:4000/projects/add",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.cardURL;
        })
    )
}


export default { dataApi, dataApiBD }; 