var idade = 22 
    console.log(`voce tem ${idade} anos.`)
    if( idade < 16) {
        console.log('não vota')
    }else if (idade < 18 || idade > 67) {
            console.log('voto opcional')
}else {
    console.log('voto obrigatorio')
}