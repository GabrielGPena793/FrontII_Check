const button = document.querySelector("button");

button.addEventListener("click", (event) =>{
    event.preventDefault();

    var data = new Date()
    var ano = data.getFullYear() // vai pegar o ano com os quatro digitos vai pegar 2021 e não só 21
    var anoNascimento = document.querySelector('#anoNascimento')
    var resultado = document.querySelector('#resultado')
    var idade = ano - Number(anoNascimento.value)
    var genero = document.querySelectorAll('input[type=radio]')
    var semGenero = document.querySelector("#semGenero")
    var genero = document.querySelectorAll('input[type=radio]')


    if((anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sexo = ''
        var img = document.createElement('img') //ele vai criar uma tag img para mim pelo JS
        img.setAttribute('id', 'foto')//estou atribuindo a minha tag um id = 'foto'
        if (genero[0].checked)  {//aqui vai checar se foi masculino ou feminino
        if(idade >= 0  && idade < 10){
        //criança
        img.setAttribute('src', 'img/bebe.png')
        sexo = 'uma Criança'
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'img/jovemh.png')
            sexo = 'um Jovem'
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'img/adultoh.png')
            sexo = 'um Homem'
        }else {
            //idoso
            img.setAttribute('src', 'img/idoso.png')
            sexo = 'um Senhor'
        }
    }else if (genero[1].checked){
        if(idade >= 0  && idade < 10){
            //criança]
            img.setAttribute('src', 'img/bebem.png')
            sexo = 'uma Criança'

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemm.png')
                sexo = 'uma Jovem'

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adultom.png')
                sexo = 'uma Mulher'
            }else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
                sexo = 'uma Senhora'

            }
    }

    resultado.style.textAlign = 'center' //alinhando o texto pelo JS

    if(semGenero.checked){
        resultado.innerHTML = `<p> você tem ${idade} anos.</p>`
    }else{
        resultado.innerHTML = `<p> Detectamos ${sexo} com ${idade} anos.</p>`
    }

    if(anoNascimento.value <= 1964){
        resultado.innerHTML +=`<p> Você é da geração Baby Boomers </p>
        <p>A geração dos Baby Boomers recebeu esse nome em referência ao aumento no número de nascimentos de bebês após o fim da Segunda Guerra Mundial, em 1945. </p>`
    }else if(anoNascimento.value > 1964 && anoNascimento.value <= 1980){
        resultado.innerHTML += `<p> Você é da Geração X </p>
        <p>O termo Geração X nasceu quando o fotógrafo Robert Capa usou o nome em um do seus ensaios fotográficos, em 1950. O ensaio mostrava jovens que cresceram depois da Segunda Guerra Mundial. “Nomeamos esta geração desconhecida como Geração X</p>`
    }else if(anoNascimento.value > 1980 && anoNascimento.value <= 1996){
        resultado.innerHTML += `<p> Você é da Geração Y ou Millennial</p>
        <p>A divergência entre o nome da geração dos nascidos entre 1981 e 1996 é causada pelo fato de que esses indivíduos cresceram na “virada do milênio” (por isso, Millennials), sendo encarada como a chegadado futuro e o domínio da tecnologia</p>`
    }else{
        resultado.innerHTML += `<p> Você é da Geração Z</p>
        <p>Esses jovens têm menos de 23 anos e boa parte deles ainda está entrando em seus primeiros empregos. Os gen Z são conhecidos por sua extrema conexão com a tecnologia, são indivíduos que não viveram nem um ano de suas vidas sem internet e foram desde cedo expostos às redes sociais e à cultura pop</p>`
    }
    if(semGenero.checked == false){
        resultado.appendChild(img)//executar o elmento que foi criado
        
    }else{
        img.style.display = "none"
    }
   
    }

})

