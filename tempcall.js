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