export default class UserInfo {
    constructor( nameSelector, aboutSelector ) {
        this._name = document.querySelector(nameSelector)
        this._about = document.querySelector(aboutSelector)
    };

    getUserInfo() {
        return { name: this._name.textContent, about: this._about.textContent }
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._about.textContent = formData.about;
    }
};