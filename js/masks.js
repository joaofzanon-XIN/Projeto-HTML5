(function(){
function setCaretToEnd(el){try{el.selectionStart=el.selectionEnd=el.value.length}catch(e){}}
function maskCPF(v){return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2').slice(0,14)}
function maskTel(v){v=v.replace(/\D/g,'');if(v.length<=10){return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').trim().replace(/-$/,'')}return v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3').slice(0,15)}
function maskCEP(v){return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9)}
function applyMask(input,fn){input.addEventListener('input',function(){input.value=fn(input.value);setCaretToEnd(input)})}
document.addEventListener('DOMContentLoaded',function(){const cpf=document.getElementById('cpf');const tel=document.getElementById('telefone');const cep=document.getElementById('cep');if(cpf)applyMask(cpf,maskCPF);if(tel)applyMask(tel,maskTel);if(cep)applyMask(cep,maskCEP);});
})();