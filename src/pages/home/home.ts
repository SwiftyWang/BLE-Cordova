import {Component} from '@angular/core';

import {ToastController} from 'ionic-angular';
import {HTTP} from 'ionic-native';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    count = 0;

    constructor(public toastCtrl: ToastController) {

    }

    presentToast() {
        console.log(this.count);
        this.count++;
        let toast = this.toastCtrl.create({
            message: 'click '+this.count + ' times',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
        HTTP.get('http://samcroft.co.uk/comics-app/comics', {}, {})
            .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);

            }).catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
}
