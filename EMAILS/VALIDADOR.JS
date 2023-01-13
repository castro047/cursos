function validaEmail(email){
    let re=/^[\w_\+\.]+@([\w_\+]+\.)+\w\w+$/;
    return re.test(email);
}

let validos=[
    'elcio@visie.com.br',
    'elcio.f@visie.com.br',
    '1+_.b@r_a.com'
]

let invalidos=[
    'elcio.com.br',
    'elcio@visie',
    'elcio@visie.',
    'elcio@elcio@visie.com.br',
    'elcio@visie.x',
    'elcio@visie..com',
]

for(let i=0;i<validos.length;i++){
    if(!validaEmail(validos[i])){
        console.log(`ERRO: '+validos[i]+'é valido. Retornou false.`)
    }
}

for(let i=0;i<validos.length;i++){
    if(validaEmail(validos[i])){
        console.log(`ERRO: '+validos[i]+'é invalido. Retornou true.`)
    }
}