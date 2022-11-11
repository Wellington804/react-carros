# Getting Started with Create React App

const [carrosList, setCarrosList] = useState([]);
useEffect(() => {
async function load(){
const resultAll = await get();
setCarrosList(resultAll);
}
load();

},[]);
