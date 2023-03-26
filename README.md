# Alkablog é um blog que consome uma API com postagens, usuários e comentários diversos.

## Feito para o teste técnico da Alkabot.

## Foi utilizado NextJs com TypeScript e TailwindCSS para cuidar da estilização.

<br>

### * O Alkablog renderiza as postagens logo na página inicial, e conta também com um sistema de paginação, para que não renderize todas as postagens de uma só vez, deixando a aplicação bem mais agradável visualmente. Também é possível alterar o número padrão de postagens na página inicial. Por padrão são 6 postagens :)

<br>

### Ao clicar em alguma postagem, é carregado o conteúdo dessa postagem, seu autor e os comentários referentes à essa postagem, tudo de forma dinâmica e rápida.

<br>

### Além de contar com um layout responsivo para dispositivos móveis! 📱

<br>

### Ao optar por utilizar NextJs ao invés do ReactJs, a aplicação fica beeem mais rápida por conta da `renderização do lado do servidor` (`SSR`) e de outros fatores. Você pode ler mais [clicando aqui.](https://blog.logrocket.com/create-react-app-vs-next-js-performance-differences/)

<br>

### E ao utilizar o TailwindCSS, não precisamos nos preocupar em ficar abrindo diversos arquivos CSS para ficar conferindo o que estamos alterando, etc... É possível fazer a estilização dentro das próprias tags HTML. O que facilita muito, principalmente pelo fato de vermos qual elemento estamos estilizando. E também devido ao fato de cada estilização ficar dentro de seu respectivo arquivo HTML, não precisando ficar 'linkando' arquivos CSS.

<hr>
<br>

## Como rodar o projeto?
<br>

Clone o projeto para a sua máquina:
```
git clone https://github.com/wuzue/front-alkabot
```
Navegue para onde o projeto foi clonado:
```
cd front-alkabot
```

Instale o Yarn (gerenciador de pacotes) com o comando:

```
npm install --global yarn
```
Instale as dependências do projeto:
```
yarn
```
Inicie o projeto com o comando:
```
yarn dev
```
E pronto! Agora é só acessar essa URL no seu navegador :D
```
http://localhost:3000
```
<br>

## Confira algumas imagens do Alkablog:

<br>

![Home Top](/readmeimgs/alka1.png)
![Home Bottom](/readmeimgs/alka2.png)

<br>

![Blog Post](/readmeimgs/alka3.png)

<br>

<h2 align='center'>Versão Mobile</h2>

<br>

 <p align='center'>
  <img src='readmeimgs\alka4.png' width='40%'>
</p>
<p align='center'>
  <img src='readmeimgs\alka6.png' width='40%'>
</p>
<p align='center'>
  <img src='readmeimgs\alka5.png' width='40%'>
</p>