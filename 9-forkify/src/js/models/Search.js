import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const KEY = '5af79316a0ac537efc6b8ce43041c230';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${KEY}&q=${this.query}`);
             this.result = res.data.recipes;
            //console.log(this.result);
        }catch(error){
            alert(error);
        }
    }

}