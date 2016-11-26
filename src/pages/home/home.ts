import {HTTP} from 'ionic-native';
import {Component} from '@angular/core';

import {ToastController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    count = 0;
    retData : string;
    constructor(public toastCtrl: ToastController) {

    }

    presentToast() {
        console.log(this.count);
        this.count++;
        let toast = this.toastCtrl.create({
            message: 'fetch:' + this.count + ' times',
            duration: 3000,
            position: 'bottom'
        });

        toast.present();

        this.retData = 'loading';
        HTTP.get('http://fuyi-1252802377.cosgz.myqcloud.com/config/appconfig.json', {}, {})
            .then(data => {
                console.log(data);
                console.log(data.status);
                this.retData = data.data;
                console.log(data.data); // data received by server
                console.log(data.headers);

            }).catch(error => {
            console.log(error);
            console.log(error.status);
            console.log(error.error); // error message as string
            this.retData = error.data;
            console.log(error.headers);
        });
    }
}
