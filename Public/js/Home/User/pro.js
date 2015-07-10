function optionInitialize(value){
  var field = value;
  for(var i in field){
    addOption(i,field);
  }
}

function addOption(id,field){
  var option = $('<option></option').text(field[id]);
  option.attr('value',id);
  $('#proField').append(option);
}

function submitProject(){
  var xmlHttp = createRequest();
  if(checkValue("#proName",20,0,'名称不能为空')&&checkValue("#proBrief",80,0,"简要介绍不能为空")){
    var name = "key1="+$("#proName").val()+"&";
    var logo = "key2="+$("#proLogo").val()+"&";
    var brief = "key3="+$("#proBrief").val()+"&";
    var member = "key4="+$("#proMember").val()+"&";
    var fi = "key5="+$("#proFi").val()+"&";
    var type = "key6="+$("#proField").val()+"&";
    var other = "key7="+$("#proOther").val()+"&";
    var content="key8="+getContent(um)+"&";
    var data = name+logo+brief+member+fi+type+other+content;
    request(xmlHttp,data,"proSave");
    if(xmlHttp.responseText==200){
      window.location.href="index";
    }
  }
}

function case_submit(){
  var xmlHttp = createRequest();
  if(checkValue("#company",30,0,'投资公司不能为空') && checkValue("#investor",50,0,'投资代表主体不能为空')){
    var company = 'key1='+$('#company').val()+'&';
    var round = 'key2='+$('#round').val()+'&';
    var currency1 = 'key3='+$('#currency1').val()+'&';
    var amount = 'key4='+$('#amount').val()+'&';
    var currency2 = 'key5='+$('#currency2').val()+'&';
    var assess = 'key6='+$('#assess').val()+'&';
    var investor = 'key7='+$('#investor').val()+'&';
    var investyear = 'key8='+$('#investyear').val()+'&';
    var investmon = 'key9='+$('#investmon').val()+'&';
    var data = company+round+currency1+amount+currency2+assess+investor+investyear+investmon;
    request(xmlHttp,data,"caseAdd");
    if(xmlHttp.responseText==200){
      document.location.reload();
    }
    else{
      
    }
  }
  else{
  }
  
}