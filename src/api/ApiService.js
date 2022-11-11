export async function getAll(){
  const result = await fetch('http://localhost:3000/carros');
  const carros = await result.json();

  return carros;
}