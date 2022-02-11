export const generateRandom = () => {

    const newNumber= parseInt(Math.random()*100);
    return {
        type:'GENERATE_NUMBER',
        payload:newNumber
    }
}