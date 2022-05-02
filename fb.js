
$("#fullname").focus();
function validateAndGetFormData() {
var Name = $("#fullname").val();
if (Name === "") {
alert("Name is Required Value");
$("#fullname").focus();
return "";
}
var Email = $("#email").val();
if (Email === "") {
alert("Email is Required Value");
$("#email").focus();
return "";
}
var Pass = $("#pass").val();
if (Pass === "") {
alert("pass is Required Value");
$("#pass").focus();
return "";
}
var Repass = $("#repass").val();
if (Repass === "") {
alert(" again pass is Required Value");
$("#repass").focus();
return "";
}
var Gender = $("#gender").val();
if (Gender === "") {
alert("gender Required Value");
$("#gender").focus();
return "";
}
var jsonStrObj = {
fullname: Name,
email: Email,
pass: Pass,
repass: Repass,
gender: Gender,
};
return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function resetForm() {
$("#fullname").val("");
$("#email").val("");
$("pass").val("");
$("repass").val("");
$("gender").val("");

$("#fullname").focus();
}
function saveEmployee() {
var jsonStr = validateAndGetFormData();
if (jsonStr === "") {
return;
}
var putReqStr = createPUTRequest("90938681|-31949283292938862|90946462",
jsonStr, "Customer", "Customer-rel");
alert(putReqStr);
jQuery.ajaxSetup({async: false});
var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
"https://api.login2explore.com:5577", "/api/iml");
alert(JSON.stringify(resultObj));
jQuery.ajaxSetup({async: true});
resetForm();
}
