import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'app-fader-anim',
    templateUrl: './fader-anim.component.html',
    styleUrls: ['./fader-anim.component.css'],
    animations: [
        // trigger('visibility', [
        //     state('shown', style({
        //         opacity: 1,
        //         transform: 'scale(1.0)'
        //     })),
        //     state('hidden', style({
        //         opacity: 0,
        //         transform: 'scale(0)'
        //     })),
        //     transition('shown => hidden', animate('300ms')),
        //     transition('hidden => shown', animate('600ms'))
        // ])
        trigger('visibilityChanged', [
            transition('shown => hidden', animate('600ms', keyframes([
                style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
            ]))),
            transition('hidden => shown', animate('300ms', keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))),
        ])
       
    ]
})
export class FaderAnimComponent implements OnInit, OnChanges {

    visibility = 'shown';

    sectence: string = `hello, my name is ${name}`;

    list: number[] = [1, 2, 3];
    list2: Array<number> = [1, 2, 3];
    // 元组
    x: [string, number] = ['string', 0.9];

    


    @Input() isVisible: boolean = true;
    constructor() { }

    ngOnInit() {
        
    }

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

    }
    tiggle() {
        this.isVisible = !this.isVisible;
        this.visibility = this.isVisible ? 'shown' : 'hidden'
    }

}
