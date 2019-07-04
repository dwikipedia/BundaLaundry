import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDg5UEDAZJI06_JNsCC_9iK_ssyqClnPU8",
    authDomain: "bundalaundry-92693.firebaseapp.com",
    databaseURL: "https://bundalaundry-92693.firebaseio.com",
    projectId: "bundalaundry-92693",
    storageBucket: "",
    messagingSenderId: "212864193209",
    appId: "1:212864193209:web:d14e0b429daf2cdc"
}

export default class Firebase{
    static auth
    static init(){
        firebase.initializeApp(config)
        Firebase.auth = firebase.auth()
    }
}