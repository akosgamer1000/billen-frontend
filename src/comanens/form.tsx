export function From(){

    async function add(){
        const id = (document.querySelector('.id') as HTMLInputElement).value;
       const name = (document.querySelector('.name') as HTMLInputElement).value;
       const price = (document.querySelector('.price') as HTMLInputElement).value;
       const arrive = (document.querySelector('.arrive') as HTMLInputElement).value;
       try {
        const response = await fetch('http://localhost:3000/billentyuzet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, price, arrivedate: arrive })
        })
    }
        catch{
                console.log("hiba")
        }
    }

    return<>
        <form onSubmit={add}>
            <label htmlFor="id">id:</label>
            <input className="id"></input>
            <label htmlFor="name">leiras:</label>
            <input className="name"></input>
            <label htmlFor="price">  price:</label>
            <input className="price"></input>
            <label htmlFor="arrive">  arrivedate:</label>
            <input className="arrive"></input>
            <input type="submit"></input>

        </form>
    
    </>
}




