import {FormControl, FormGroup} from "@angular/forms";
export  function accountValidator(control:FormControl):any{
  let mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  let valid = mobile.test(control.value);
  console.log('用户名校验结果:',valid);
  return valid ? null : {mobile: false};
}
export  function passValidator(group: FormGroup):any{
  let password = group.get("password").value;
  let passConfirm = group.get("passConfirm").value;
  let vaild = password === passConfirm && password != '';
  console.log("密码校验结果",vaild);
  return vaild ? null : {passEqual:{
    describute:"两侧的密码都不相同啊"
  }}
}
// export  function passAsycValidator(group: FormGroup):any{
//   let password = group.get("password").value;
//   let passConfirm = group.get("passConfirm").value;
//   let vaild = password === passConfirm && password != '';
//   console.log("密码校验结果",vaild);
//   return Observable.of(vaild? null : {equal: true}).delay(50000)
// }
