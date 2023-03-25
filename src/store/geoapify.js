import axios from "axios";
import { makeAutoObservable } from "mobx";

class Geoapify {
    ip_data;

    constructor() {
        makeAutoObservable(this);
    }
    async fetchIPData ()  {
        this.ip_data = axios.get(import.meta.VITE_SOME_KEY);
    }
    

}

export default new Geoapify();