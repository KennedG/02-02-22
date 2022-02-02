const Discord = require("discord.js");
const config = require("../config.json")
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "help",


    run: async(client, message, args) => {


        let embed = new Discord.MessageEmbed()
        .setColor(
          config.embed
      )
		.setTitle("<:V_CorretoTKF:910509220015788073> | Central De Comandos Gizmo")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
	    .setDescription(`Olá ${message.author}, Eu sou o <@814726444377833532>, Um bot com múltiplas funções legais é divertidas! 


> __Links Importante:__
<:V_CorretoTKF:910509220015788073> | Me adicione [Clicando aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
<:az_moderador_old:909264644168900629> | Entre no meu servidor de [Suporte](https://discord.gg/Ex7jUrMZF2)
<a:sintonia_emoji239:909266143204741181> | Acesse meu [Website](https://sites.google.com/view/botgizmo)

<:void:829507703856562216> | Vote em mim usando **G!votar** ou [Clicando aqui](https://voidbots.net/bot/814726444377833532) 
não conte para ninguém, tem um segredo usando o **G!votar**.

> __Informações:__
<a:online:925875488944164894> **Online**
<a:hype:897139138661351434> Estou em ${client.guilds.cache.size} servidores.
<:branco_pessoaRDM:908562579117453342> Gerenciando de ${client.users.cache.size} usuários.
<:download:910474079931338813> No total de **122** Comandos.
<:emoji_41:910474334986985502> | Criador: <@493282797222494230> - 493282797222494230

> __Minhas categorias abaixo:__
`)
    
        let pani_1 = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Use o menu para ver as categorias') 
        .addOptions([
		       {
			    label: 'Central De Comandos',
                description: 'Volta para o menu inicial',
                emoji: '🔰',
                value: '0',
               },
               {
                label: 'Diversão',
                description: 'Comandos de Diversão',
                emoji: '😂',
                value: '1',
               },
               {
                label: 'Música',
                description: 'Comandos De Música',
                emoji: '🎵',
                value: '2',
               },
               {
               label: 'Crie sua call',
               description: 'Criar call privada',
               emoji: '🚩',
               value: '8',
               },
               {
                label: 'Utilidade',
                description: 'Comandos De Utilidade',
                emoji: '📣',
                value: '3',
               },
               {
                label: 'Moderação',
                description: 'Comandos De Moderação',
                emoji: '⚒️',
                value: '4',
               },
               {
                label: 'Logs',
                description: 'Comandos De Logs',
                emoji: '⚙️',
                value: '5',
               },
	   	       {
                label: 'Suporte',
                description: 'Comandos De Suporte',
                emoji: '☎️',
                value: '6',
               },
			   {
			    label: 'Outros',
                description: '',
                emoji: '✨',
                value: '7',
               },
 ])

        );


        message.channel.send({ embeds: [embed], components: [pani_1] }).then(msg => {


            const pani_2 = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            pani_2, time: 0
          });
      

          coletor.on('collect', async (collected) => {

            let valor = collected.values[0]
            collected.deferUpdate()




            if (valor === "0") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("<:V_CorretoTKF:910509220015788073> | Central De Comandos Gizmo")
		.setColor("#A020F0")
		.setFooter("")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`Olá ${message.author}, Eu sou o <@814726444377833532>, Um bot com múltiplas funções legais é divertidas! 


        > __Links Importante:__
        <:V_CorretoTKF:910509220015788073> | Me adicione [Clicando aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
        <:az_moderador_old:909264644168900629> | Entre no meu servidor de [Suporte](https://discord.gg/Ex7jUrMZF2)
        <a:sintonia_emoji239:909266143204741181> | Acesse meu [Website](https://sites.google.com/view/botgizmo)
        
        <:void:829507703856562216> | Vote em mim usando **G!votar** ou [Clicando aqui](https://voidbots.net/bot/814726444377833532) 
        não conte para ninguém, tem um segredo usando o **G!votar**.
        
        > __Informações:__
        <a:online:925875488944164894> **Online**
        <a:hype:897139138661351434> Estou em ${client.guilds.cache.size} servidores.
        <:branco_pessoaRDM:908562579117453342> Gerenciando de ${client.users.cache.size} usuários.
        <:download:910474079931338813> No total de **122** Comandos.
        <:emoji_41:910474334986985502> | Criador: <@493282797222494230> - 493282797222494230
        
        > __Minhas categorias abaixo:__
`)
msg.edit({embeds: [embed_1]})



            }
                   if (valor === "1") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("😂 | Comandos De Diversão")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
<:emoji_93:920530943637323796> __g!ship__
Está querendo fazer uma prova de amor pra sua webnamoradx? Deixa comigo! Vou te ajudar nesta missão.

<:emoji_93:920530943637323796> __g!cafune__
Faz cafuné na pessoa mencionada.

<:emoji_93:920530943637323796> __g!jokempo__
Pedra papel tesoura.

<:emoji_93:920530943637323796> __g!dados__
joga o dado.

<:emoji_93:920530943637323796> __g!hackear__
Você pega as informações da pessoa.

<:emoji_93:920530943637323796> __g!stonks__
Manda uma mensagem Stonks.

<:emoji_93:920530943637323796> __g!8ball__
Responde uma pergunta.

<:emoji_93:920530943637323796> __g!coinflip__
Cara ou coroa.

<:emoji_93:920530943637323796> __g!beijar__
Beijo na Web.

<:emoji_93:920530943637323796> __g!forca__
Brinca com o Gizmo de forca.

<:emoji_93:920530943637323796> __g!adestramento__
Você faz a pessoa ser adestrada.

<:emoji_93:920530943637323796> __g!carinha__
Manda uma carinha aleatoria.

<:emoji_93:920530943637323796> __g!morse__
Código Morse.

<:emoji_93:920530943637323796> __g!tapa__
Você da um tapa na pessoa mencionada.

<:emoji_93:920530943637323796> __g!faustão__
O faustão aparece no servidor.

<:emoji_93:920530943637323796> __g!cantadas__
Você recebe uma cantada do Gizmo.

<:emoji_93:920530943637323796> __g!fusao__
Você faz uma fusão de avatares.

<:emoji_93:920530943637323796> __g!atacar__
Você ataca um usuário.

<:emoji_93:920530943637323796> __g!ednaldo__
Banido? veja sozinho...

<:emoji_93:920530943637323796> __g!traficaranao__
QUE? discando 190

<:emoji_93:920530943637323796> __g!triggered__
Mano? a...

<:emoji_93:920530943637323796> __g!bolsonaro__
Mas oque será que o Bolsonaro está mostrando na sua televisão?

<:emoji_93:920530943637323796> __g!sikera__
O sikera vai dar uma notícia...

<:emoji_93:920530943637323796> __g!brindar__
Você brinda com o usuário marcado!

<:emoji_93:920530943637323796> __g!abraço__
Você abraça o usuário marcado!

<:emoji_93:920530943637323796> __g!corno__
Quantos porcento você e corno? DESCUBRA!

<:emoji_93:920530943637323796> __g!gay__
  Mano? tu é gay?

  <:emoji_93:920530943637323796> __g!casar__
  Você casa com alguém!
⠀
`)
msg.edit({embeds: [embed_1]})



            }
                   if (valor === "2") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("🎵 | Comandos De Música")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
        <:emoji_93:920530943637323796> __M!help__
        Use M!help para ver a lista de comandos de músicas!
        `)

msg.edit({embeds: [embed_1]})



            }
       if (valor === "3") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("📣 | Comandos De Utilidade")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
<:emoji_93:920530943637323796> __g!avatar__
Mostra a foto/gif da pessoa mencionada.

<:emoji_93:920530943637323796> __g!playstore__
Você pesquisa um app pela Playstore.

<:emoji_93:920530943637323796> __g!clear__
Apaga a quantidade de mensagens citadas.

<:emoji_93:920530943637323796> __g!lembrete__
Para quando você não pode esquecer de algo.

<:emoji_93:920530943637323796> __g!ms__
Você pode ver o ping da API e do servidor que você está conectado.

<:emoji_93:920530943637323796> __g!say__
Você pode falar como se fosse o Gizmo.

<:emoji_93:920530943637323796> __g!userinfo__
Mostra informações sobre o usuário.

<:emoji_93:920530943637323796> __g!serverinfo __
Informação sobre o servidor.

<:emoji_93:920530943637323796> __g!infobot __
Informação sobre o Bot.

<:emoji_93:920530943637323796> __g!status__
Você obtém informações do status do usuário.

<:emoji_93:920530943637323796> __g!uptime__
Pode ver a quanto tempo eu estou online.

<:emoji_93:920530943637323796> __g!bigtext__
O Gizmo te manda a palavra que você escreveu em formato de emoji.

<:emoji_93:920530943637323796> __g!gerarsenha__
você obtém uma senha totalmente aleatória.

<:emoji_93:920530943637323796> __g!cpu__
Porcentagem de CPU usada pelo Gizmo.

<:emoji_93:920530943637323796> __g!emoji__
Manda o emoji escrito.

<:emoji_93:920530943637323796> __g!banner__
Você pega o banner da pessoa citada.

<:emoji_93:920530943637323796> __g!anuncio__
Anuncia uma mensagem no canal de texto selecionado.

<:emoji_93:920530943637323796> __g!calculadora__
Precisa de ajuda na prova? eu ajudo.

<:emoji_93:920530943637323796> __g!traduzir__
Traduza uma palavra para o português, oque acha?
como usar g!traduzir pt love

<:emoji_93:920530943637323796> __g!afk__
Avisa que você está offline.

<:emoji_93:920530943637323796> __g!addemoji__
add um emoji no servidor.

<:emoji_93:920530943637323796> __g!git__
Pesquisa um repositorio para eu pesquisar.

<:emoji_93:920530943637323796> __g!v13__
Fazer a replit mudar para v13.

<:emoji_93:920530943637323796> __g!qrcode__
faz um QRcode com o link que você enviar.

<:emoji_93:920530943637323796> __g!developer__
hospedar seu bot no Discord do Kenned.

<:emoji_93:920530943637323796> __g!clima__
Você pode ver o clima do lugar mencionado.

<:emoji_93:920530943637323796> __g!baterponto__
Marca um horário de saída e entrada!
         
<:emoji_93:920530943637323796> __g!covid__
Total de casos de Corona em todo o mundo!

<:emoji_93:920530943637323796> __g!afk__
Avisa alguém que você está AFK!

<:emoji_93:920530943637323796> __g!web__
Mostra uma pre-visualização do site citado!

⠀
`)


msg.edit({embeds: [embed_1]})



            }
       if (valor === "4") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("⚒️ | Comandos De Moderação")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
<:emoji_93:920530943637323796> __g!ban__
Você bane a pessoa mencionada!

<:emoji_93:920530943637323796> __g!unban__
Você desnane a pessoa usando o ID!

<:emoji_93:920530943637323796> __g!unbanall__
Tira o ban de todos os membros!

<:emoji_93:920530943637323796> __g!voicekick__
Você expulsa alguém da call!

<:emoji_93:920530943637323796> __g!lock__
Você tranca o canal que o comadno foi ultilizado!

<:emoji_93:920530943637323796> __g!unlock__
Você destranca o canal que o comando foi ultilizado!

<:emoji_93:920530943637323796> __g!setnick__
Você altera o apelido do usuário mencionado!

<:emoji_93:920530943637323796> __g!addcargo__
Você adiciona o cargo na pessoa mencionada!

<:emoji_93:920530943637323796> __g!removecargo__
Você remove o cargo na pessoa mencionada!

⠀
`)


msg.edit({embeds: [embed_1]})



	   }
       if (valor === "5") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("⚙️ | Comandos De Logs")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
<:emoji_93:920530943637323796> __g!editmsg__
        Você cria um canal de texto de logs de mensagens editadas (isso serve para controle de mensagens)
        
<:emoji_93:920530943637323796> __g!delmsg__
        Você cria um canal de texto de logs de mensagens apagadas (isso serve para controle de mensagens)
 
<:emoji_93:920530943637323796> __g!setentrada__
        Você seleciona um canal para aparecer quem **ENTRA** no servidor!

<:emoji_93:920530943637323796> __g!setsaida__
        Você seleciona um canal para aparecer quem **SAI** no servidor!
⠀
`)



msg.edit({embeds: [embed_1]})



            }
           if (valor === "6") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("☎️ | Comandos De Suporte")
        .setColor("A020F0")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`

<:emoji_93:920530943637323796> __g!addbot__
Você obtém um link para adicionar o Gizmo!

<:emoji_93:920530943637323796> __g!votar__
Você pode ajudar o Kenned votando no Gizmo!

<:emoji_93:920530943637323796> __g!convitedm__
você recebe o convite do Gizmo pela DM.

<:emoji_93:920530943637323796> __g!suporte__
Entrar em contato diretamente com o suporte! 

<:emoji_93:920530943637323796> __g!sugestão__
Você pode dar uma sugestão de comandos! 

<:emoji_93:920530943637323796> __g!site__
Acesso ao meu site!

<:emoji_93:920530943637323796> __g!bug__
Informa um bug para os staffs!

<:emoji_93:920530943637323796> __g!meustatus__
Informa meu status a base de **Ausente, Não pertube, etc..**
 
⠀
`)
msg.edit({embeds: [embed_1]})



            }
          if (valor === "7") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("✨ | Outros")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`

🌐  __Redes socias__

     
        > 🌟  Instagram Do Bot [Gizmo](https://instagram.com/botgizmo?utm_medium=copy_link)
        > 👑  Instagram Do Criador [Kenned](https://www.instagram.com/guilhermekenned_/)
        > <:void:829507703856562216> Vote no <@814726444377833532> [VoidBot](https://voidbots.net/bot/814726444377833532)


 
        <:dcl_ypSino:914350019182723122> __g!news__
<:dcl_ypSino:914350019182723122>Novidades do Gizmo
         
⠀
`)

msg.edit({embeds: [embed_1]})



            }
                   if (valor === "8") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("🚩 | Comandos de criar call")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("")
        .setDescription(`
        🚩  __Comandos de criar call__
        
        Como utilizar os canais privados temporários?
    
        Para utilizar o sistema de canais privados temporários é bem simples, basta você criar um canal de voz chamado **Clique aqui ✅**(COM O EMOJI "✅") e automaticamente o bot irá criar um canal privado com o seu nome!

        Depois de feito apenas entrar na call ele ira criar o canal quando você entrar!

`)

msg.edit({embeds: [embed_1]})



            }


          })

          
            coletor.on('end', () => {    let embeds = new Discord.MessageEmbed()
            .setDescription("Esse painel expirou")
             msg.edit({ 
          
              embeds: [embeds], components: [] }); });    

        });

        

    }
}