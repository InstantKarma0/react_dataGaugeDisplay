export class LocalStorageHandler {

    static save(key, value) {
        sessionStorage.setItem(key, value)
    }

    static init(key, initValue) {
        let value = sessionStorage.getItem(key);
        console.log(value);
        if (value === null) sessionStorage.setItem(key, initValue);
    }

    static load(key) {
        return sessionStorage.getItem(key);
    }

}