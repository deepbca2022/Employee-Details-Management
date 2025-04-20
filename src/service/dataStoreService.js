
const DATA_STORE_KEY="emp-data";

const getDataFromStore = () => {
    let rawData = localStorage.getItem(DATA_STORE_KEY);

    if(rawData) {
        let arrData = JSON.parse(rawData);//Used to convert string to javascript object 
        return arrData;
    }
    return [];
}

const saveDataToStore = (arrData) => {
    localStorage.setItem(DATA_STORE_KEY, JSON.stringify(arrData));//Used to convert javascript Object to string
}

export {
    getDataFromStore,
    saveDataToStore
}