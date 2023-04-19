const render = "https://proyecto-canelo-8t9t.onrender.com"
//const render = "//localhost:4000"  

const dataApiBD = (data) => {
    return (fetch(`${render}/projects/all`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
    )
}


const dataApi = (data) => {
    return (fetch(`${render}/projects/add`,
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