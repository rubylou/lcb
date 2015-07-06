function selectCollpase(id1,id2){
  $(id1).collapse('toggle');
  $(id2).attr('class','collapse');
}

function submitInvestor(){
  if(checkPwd('#regPwd1','#regPwdfirm1')&&checkEmail('#regEmail1')&&checkPhone('#regMobile1')&&checkName('#regName1')){
    var xmlHttp = createRequest();

    var status = 'value=investor&';
    var name = 'key1='+$('#regName1').val()+'&';

    var mobile = 'key2='+$('#regMobile1').val()+'&';
    var email = 'key3='+$('#regEmail1').val()+'&';
    request(xmlHttp,mobile+email,"validCheck");
    if(xmlHttp.responseText==200){
      var company = 'key4='+$('#regCompany1').val()+'&';
      var title = 'key5='+$('#regTitle1').val()+'&';
      var type = 'key6='+$('#regType1').val()+'&';
      var pwd = 'key7='+CryptoJS.SHA1($('#regPwd1').val())+'&';
      var pwdfirm = 'key8='+CryptoJS.SHA1($('#regPwdfirm1').val())+'&';
      var field = 'key9=';
      $('#choices').children().each(function(){
        field = field + $(this).attr('value') + ',';
      });
      field = field + "&";

      var data = status+name+mobile+email+company+title+type+pwd+pwdfirm+field;
      request(xmlHttp,data,"userSave");
      if(xmlHttp.responseText==200){
        modalShow('alert_content','myModal','注册成功,2秒内即将跳转');
        setTimeout("window.location.href = 'index';",2000);
      }
      else{
        modalShow('alert_content','myModal','注册出现异常');
      }
    }
    else if(xmlHttp.responseText==2002){
      $('#regMobile1').val('');
      $('#regMobile1').attr('placeholder','该手机号已注册');
      $('#regMobile1').focus();
    }
    else if(xmlHttp.responseText==2003){
      $('#regEmail1').val('');
      $('#regEmail1').attr('placeholder','该邮箱已注册');
      $('#regEmail1').focus();
    }
    else{

    }
    
  }
  else{

  }
  
  
}

function submitInnovator(){
  if(checkPwd('#regPwd2','#regPwdfirm2')&&checkNickname('#regNickname2')&&checkEmail('#regEmail2')&&checkPhone('#regMobile2')&&checkName('#regName2')){
    var xmlHttp = createRequest();
    var status = 'value=innovator&';
    var name = 'key1='+$('#regName2').val()+'&';
    var email = 'key2='+$('#regEmail2').val()+'&';
    var mobile = 'key3='+$('#regMobile2').val()+'&';
    var nickname = 'key4='+$('#regNickname2').val()+'&';
    request(xmlHttp,email+mobile+nickname,"validCheck1");
    if(xmlHttp.responseText==200){
      var gender = 'key5='+$('#regGender2').val()+'&';
      var birth = 'key6='+$('#regBirth2').val()+'&';
      var city = 'key7='+$('#regCity2').val()+'&';
      var edu = 'key8='+$('#regEdu2').val()+'&';
      var field = 'key9='+$('#regField2').val()+'&';
      var experience = 'key10='+$('#regExperience2').val()+'&';
      var pwd = 'key11='+CryptoJS.SHA1($('#regPwd2').val())+'&';
      var pwdfirm = 'key12='+CryptoJS.SHA1($('#regPwdfirm2').val())+'&';
      var data = status+name+email+mobile+nickname+gender+birth+city+edu+field+experience+pwd+pwdfirm;
      var xmlHttp = createRequest();
      request(xmlHttp,data,"userSave");
      if(xmlHttp.responseText==200){
        modalShow('alert_content','myModal','注册成功,2秒内即将跳转');
        setTimeout("window.location.href = 'index';",2000);
      }
      else{
        modalShow('alert_content','myModal','注册出现异常');
      }
    }
    else if(xmlHttp.responseText==2002){
      $('#regEmail2').val('');
      $('#regEmail2').attr('placeholder','该邮箱已注册');
      $('#regEmail2').focus();
    }
    else if(xmlHttp.responseText==2003){
      $('#regMobile2').val('');
      $('#regMobile2').attr('placeholder','该手机号已注册');
      $('#regMobile2').focus();
    }
    else if(xmlHttp.responseText==2004){
      $('#regNickname2').val('');
      $('#regNickname2').attr('placeholder','该昵称已被人使用');
      $('#regNickname2').focus();
    }
    else{

    }

  }
  else{

  }
}
