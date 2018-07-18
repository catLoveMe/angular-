import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {accountValidator, passValidator} from "../validator/formValid";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //使用表单时，先引入相应的模块，模板式表单FromsModule 使用响应式表单编程时需要引入ReactiveFormsModule
 userName:FormControl = new FormControl('张三');
 dateRange:FormGroup = new FormGroup({
    from:new FormControl(),
   to:new FormControl()
 });
 emils:FormArray = new FormArray([
   new FormControl(),
   new FormControl(),
   new FormControl()
 ]);
 // fromData:FormGroup = new FormGroup({
 //   userName:new FormControl("lisi"),
 //   daterange:new FormGroup({
 //     from:new FormControl(),
 //     to:new FormControl()
 //   }),
 //   emils: new FormArray([
 //     new FormControl(),
 //     new FormControl(),
 //     new FormControl()
 //   ])
 // })
  fromData:FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fromData = formBuilder.group({
      userName:['',[accountValidator,Validators.required]],
      account:['',Validators.minLength(3)],
      pass:formBuilder.group({
        password:['',Validators.minLength(6)],
        passConfirm:['']
      },{
        validator:[passValidator,Validators.minLength(6)]
      }),
      emils:formBuilder.array([
        [''],
        ['']
      ])
    })
  }
  //模板式表单只能使用指令
  ngOnInit() {
  }
  onSubmit(value){
    console.log(value);

  }
  getSubData(){

    let isValid : boolean = this.fromData.get('userName').valid;
    console.log("=======isValid",isValid);
    let errMsg:any = this.fromData.get("pass").errors;
    console.log(errMsg);
    if(this.fromData.valid){//当formData中字段全部校验完成且校验结果为trues时
      console.log(this.fromData.value);
    }
  }

}
