const Database = require("@replit/database")
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const express = require('express');
const db = require('quick.db');
const config = require("./config.json");

client.login(process.env.TOKEN);

client.on('ready', async () => {

    console.log(`ah...Olá`);
    console.log(`Estava tomando um café`);
	console.log('Ligando meu sistema...');
	console.log('Aguarde...');
	console.log('Iniciado!');
	console.log(`${client.user.tag}\n🟢Foi iniciado em ${client.guilds.cache.size} sevidores!\n🟢Tendo acesso a ${client.channels.cache.size} canais!\n🟢 Contendo ${client.users.cache.size} usuarios!`)

	const app = express();
app.get('/', (request, response) => {

			const ping = new Date();
		ping.setHours(ping.getHours() - 3);
		console.log(
			`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
		);
		response.sendStatus(200);
	});
	app.listen(process.env.PORT); // Recebe solicitações que o deixa online
//criando call
	client.on("voiceStateUpdate", async (oldChannel, newChannel) => {
    
		let canal_nome = "Clique aqui ✅";
	
		if (oldChannel.channel || newChannel.channel || !oldChannel.channel || !newChannel.channel) { // Verificando quando o usuário entra ou sai de uma call
	
			if (!oldChannel.channel && newChannel.channel/* || newChannel.channel && oldChannel.channel*/) { // Verificando quando o usuário entra em uma call
	
				if (newChannel.channel.name === canal_nome) { // Verificando o nome do canal
	
					await newChannel.channel.guild.channels.create(`${client.users.cache.get(newChannel.id).username}`, {type: "GUILD_VOICE", // Criando call personalizada
					permissionOverwrites: [ // Setando permissões
						{
							id: newChannel.id,
							allow: "MANAGE_CHANNELS",
						}
					] }).catch(e=>{}).then(channel => {
						newChannel.setChannel(channel.id).catch(e=>{});
					})
	
				}
			} else if (!newChannel.channel || newChannel.channel && oldChannel.channel) { // Verificando quando o usuário sai de uma call
	
				if (oldChannel.channel.name === client.users.cache.get(newChannel.id).username) { // Verificando quando o usuário sai da call personalizada
	
					oldChannel.channel.delete().catch(e=>{}); // Excluindo a call personalizada
	
				}
	
			}
	
		}
	})

	client.on('messageCreate', message => {
		if (message.author.bot) return;
		if (message.channel.type == 'dm') return;
		if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
		if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

		const args = message.content
			.trim().slice(config.prefix.length)
			.split(/ +/g);
		const command = args.shift().toLowerCase();

		try {
			const commandFile = require(`./commands/${command}.js`)
			commandFile.run(client, message, args);
		} catch (err) {
			console.error('Erro:' + err);
		}

		const db = require("quick.db");

		client.on("messageCreate", async (message) => {

			let prefix = config.prefix;

			if (message.content.includes("https://diiscord-gift.com/welcome")) {

				message.delete();
				message.channel.send(`**Não pode enviar links maliciosos aqui!**`)

			}

			if (message.author.bot) return;
			if (message.channel.type == 'dm') return;

			if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

			if (message.author.bot) return;
			if (message.channel.type === 'dm') return;

			if (!message.content.startsWith(prefix)) return;
			const args = message.content.slice(prefix.length).trim().split(/ +/g);


			try {
				command.run(client, message, args)
			} catch (err) {

				console.error('Erro:' + err);
			}
		});
	});


    const loadCommands = () => {

        const files = readdirSync(commandsFolder);
        for (const file of files) {
            const command = require(`${commandsFolder}/${file}`);
            client.commands.set(command.data.name, command);
            console.log(`${command.data.name} carregado`);
        }
    };
    

    
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        
        const cmd = client.commands.get(interaction.commandName);
    
        // console.log('cmd: ', cmd);
    
        try {
            cmd && await cmd.run(interaction);
        }
        catch(error) {
            console.log('Error: ', error);
        }
    
    });



	process.on('unhandledRejection', (reason, p) => {
		console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');
		console.log(reason, p);
	});
	process.on("uncaughtException", (err, origin) => {
		console.log(' [ ANTICLASH] | CATCH ERROR');
		console.log(err, origin);
	})
	process.on('uncaughtExceptionMonitor', (err, origin) => {
		console.log(' [ ANTICLASH ] | BLOQUEADO');
		console.log(err, origin);
	});
	process.on('multipleResolves', (type, promise, reason) => {
		console.log(' [ ANTICLASH ] | VÁRIOS ERROS');
		console.log(type, promise, reason);
	});

});