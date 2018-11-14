import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: 'app-params-detail',
    templateUrl: './params-detail.component.html',
    styleUrls: ['./params-detail.component.css'],

})
export class ParamsDetailComponent implements OnInit {

    paramsFromFather: number = 0;
    PartArea: any;
    Scroll1: any;
    Scroll2: any;
    StopRoll: any;
    @ViewChild('greet')
    greetDiv: ElementRef;
    constructor(
        private routerInfo: ActivatedRoute,
        private el : ElementRef,
    ) { }

    ngOnInit() {
        //snapShot路由快照，当在相同大路由上，携带参数更改是，不会监听其更改，只在Dom加载时，渲染一次
        console.log(this.routerInfo.snapshot.params["item"])//路由绑定参数获取参数,snapshot快照方式
        // subscribe参数订阅，订阅的方式会监听改参数的更改，在组件已经渲染的情况下，也会监听其更改，并更新
        this.routerInfo.params.subscribe((params: Params) => {
            this.paramsFromFather = params["item"]
        });
        // console.log(this.routerInfo.snapshot.queryParams["Pid"])//使用queryParams Url地址栏携带参数
        setTimeout(() => {
            this.StopRoll = setInterval(this.roll, 60)
        }, 1000)
        this.el.nativeElement.querySelector('#part2').onmouseover = () => {
            clearInterval(this.StopRoll);
        }
        this.el.nativeElement.querySelector('#part2').onmouseout = () => {
            this.StopRoll = setInterval(this.roll, 60)
        }

    }
    //响应式编程 异步数据编程 任何数据都能做数据流

    ngAfterViewInit() {
        // console.dir可以显示一个对象所有的属性和方法
        console.dir(this.greetDiv);
        //       this.PartArea.onmouseover = function () {
        //     clearInterval(this.StopRoll);
        // }
    }



    roll() {
        this.PartArea = document.getElementById('part2');
        this.Scroll1 = document.getElementById('scroll1');
        this.Scroll2 = document.getElementById('scroll2');
        this.Scroll2.innerHTML = this.Scroll1.innerHTML;
        // offsetHeight 可以获取元素的可见高度值
        // scrollTop 方法返回或设置匹配元素的滚动条的垂直位置
        if (this.Scroll2.offsetHeight - this.PartArea.scrollTop <= 0) {
            this.PartArea.scrollTop -= this.Scroll1.offsetHeight;
        } else {
            // console.log(this.PartArea.scrollTop)
            this.PartArea.scrollTop++;
            // console.log(this.PartArea.scrollTop)
        }
    }


    // var StopRoll = setInterval(roll, 60);


    // PartArea.onmouseout = function () {
    //     StopRoll = setInterval(roll, 60);
    // }
    getDom(getDom: HTMLElement) {
        console.log(getDom)
    }

}
