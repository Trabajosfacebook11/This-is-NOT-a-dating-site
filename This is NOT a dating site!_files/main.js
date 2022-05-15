function hideCurShowNext(cur){var parent=$(cur).parents('.step-container');parent.hide();parent.next('.step-container').show();}
function nextNumberActive(){var active=$('li.active.num');active.removeClass('active');active.next('li').addClass('active');}
function appendImage(i,path,imgType){$('.appendImg').attr('src',path+i+'.'+imgType);}
function randomNumber(min,max){var number=Math.floor(Math.random()*(max-min+1)+min);return number;}
function getUrlVars(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;}
function removeParam(parameter){var url=document.location.href;var urlparts=url.split('?');if(urlparts.length>=2){var urlBase=urlparts.shift();var queryString=urlparts.join("?");var prefix=encodeURIComponent(parameter)+'=';var pars=queryString.split(/[&;]/g);for(var i=pars.length;i-->0;)
if(pars[i].lastIndexOf(prefix,0)!==-1)
pars.splice(i,1);url=urlBase+'?'+pars.join('&');}
return url;}
function addParameterToURL(_url,_key,_value){var param=_key+'='+escape(_value);var sep='&';if(_url.indexOf('?')<0){sep='?';}else{var lastChar=_url.slice(-1);if(lastChar=='&')sep='';if(lastChar=='?')sep='';}
_url+=sep+param;return _url;}
function resetCheckboxesOfPreviousStep(){$('input:checkbox:checked').prop('checked',false);}
function CheckboxesAllowed(i,el){if($('input[type=checkbox]:checked').length>i){$(el).prop('checked',false);}else{var allChecked=[];allChecked.push(el.val());}}
function showAlertBox(action,text,time){if(action==undefined){action='alert';}
if(time==undefined){time=0;}
if(action=='alert'){setTimeout(function(){alert(text);},time*1000);}else if(action=='confirm'){setTimeout(function(){confirm(text);},time*1000);}}
$(document).ready(function(){var a=getUrlVars()['a'];if((a!==undefined)&&(a!=='no')){if(a.indexOf('-')!=-1){var options=a.split('-');var finalAlert=options[0];var finaltime=options[1];if(options[0]=='text1'){showAlertBox('alert','WARNING\n\n\nTHIS SITE HAS NAKED PICS\nOF WOMEN YOU MAY KNOW.\n\nDO YOU WISH TO PROCEED?',options[1]);}else if(options[0]=='text2'){showAlertBox('alert','Message Alert(1)\n\n\nA user in your area wants a casual hookup',options[1]);}else if(options[0]=='text3'){showAlertBox('confirm','Message Alert(1)\n\n\nA user in your area wants a casual hookup',options[1]);}else if(options[0]=='text4'){showAlertBox('confirm','-------- NEW MESSAGE --------\n\n\nAlexis (1.7 Miles away)\nHas sent you a video message.\n\nPlease agree to our rules to reply.',options[1]);}}else if(a=='yes'){showAlertBox('alert','WARNING\n\n\nTHIS SITE HAS NAKED PICS\nOF WOMEN YOU MAY KNOW.\n\nDO YOU WISH TO PROCEED?');}else{showAlertBox('alert','WARNING\n\n\nTHIS SITE HAS NAKED PICS\nOF WOMEN YOU MAY KNOW.\n\nDO YOU WISH TO PROCEED?',a);}}});$(document).on('click','.o-link',function(e){var a2=getUrlVars()['a2'];if(a2!==undefined){e.preventDefault();var o_link=$(this).attr('href');if(a2==2){alert('WARNING!\n\nYour erections might become ‘rigid’ and last longer than normal.');}else if(a2==3){alert('WARNING!\n\nPlease make sure you (and your partner) are healthy enough for vigorous intimate activity.');}else{alert('Linda (34) wants to share her nude private pictures with you.!\n\nDo you accept?');}
window.location.href=o_link;}});