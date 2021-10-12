class GreetingController {
  async show(req, res) {
    const { sender, status_day } = req.query;
    let msg = '';
    let greeting = '';

    switch (status_day.toLowerCase()) {
      case 'night':
        greeting = 'Boa Noite';
        break;
      case 'evening':
        greeting = 'Boa Tarde';
        break;
      case 'salve':
        greeting = 'Salve';
        break;
      case 'dawn':
        greeting = 'Boa Madrugada';
        break;
      default:
        greeting = 'Bom dia';
        break;
    }

    switch (sender.toLowerCase()) {
      case 'aautumn':
        msg = `${greeting} @${sender} :D 🐟🐟🐟🐟🐟🐟🐟! @ezrealblindado da ${greeting} pro atum!`;
        break;
      case 'ratodecrocs':
        msg = `${greeting} @${sender} :D ${greeting} Netuno e Rusty! 🐈🐈 @ezrealblindado da ${greeting} pra freefire!`;
        break;
      case 'antonydev':
        msg = `${greeting} @${sender} famoso obrigado pelo sub xD @ezrealblindado da ${greeting} pro antony`;
        break;
      case 'aqueladafigurinha':
        msg = `${greeting} @${sender} @ezrealblindado da ${greeting} pra Figurinha`;
        break;
      case 'armandoney19':
        msg = `${greeting} @${sender} Salve pro mano Stingy do LazyTown`;
        break;
      case 'arutemisu':
        msg = `${greeting} @${sender} :D coloca um sailor moon ai. @ezrealblindado da ${greeting} pro aru!`;
        break;
      case 'beascoito':
        msg = `${greeting} @${sender} :D 🍪🍪🍪🍪🍪 @ezrealblindado da ${greeting} pra maior peituda do chat 😳🍒`;
        break;
      case 'bili92':
        msg = `${greeting} @${sender} :D @ezrealblindado da ${greeting} pro mestre da Microsoft xD`;
        break;
      case 'candydelchurros':
        msg = `${greeting} @${sender} :D 🍬🍬🍬 @ezrealblindado da ${greeting} pro Candyyyyyy!`;
        break;
      case 'canelinha123':
        msg = `${greeting} @${sender} @ezrealblindado da ${greeting} pro Canelinha, Lorocai!`;
        break;
      case 'capivarasaliente':
        msg = `${greeting} @${sender}'SeriousSloth @ezrealblindado oferece 30 reais por vídeo fechando vários ai`;
        break;
      case 'dani0528':
        msg = `${greeting} @${sender} 🍞🍞🍞🍞🍞 @ezrealblindado da ${greeting} pra Dani pão 🥺`;
        break;
      case 'danielhe4rt':
        msg = `${greeting} @${sender} Vc deviria estar codando pra ficar rico logo primo`;
        break;
      case 'davin250':
        msg = `${greeting} @${sender} :D @ezrealblindado da ${greeting} pro grande Davin ezRage`;
        break;
      case 'deltamax26':
        msg = `${greeting} @${sender} @ezrealblindado da ${greeting} pro Delta (Delta = b² -4ac ;)`;
        break;
      case 'drezonho':
        msg = `${greeting} @${sender} del zap @ezrealblindado da ${greeting} pro pézinho matador de aula de catequese 🦶🦶🦶🦶🦶`;
        break;
      case 'eodanieu':
        msg = `@ezrealblindado responde o ${greeting} do/da ${sender}, seu tanso ezRage`;
        break;
      case 'esquilomsm':
        msg = `${greeting} ${sender} 🐿️🐿️🐿️ @ezrealblindado responde o ${greeting} do ${sender}, seu tanso ezRage`;
        break;
      case 'ezdaemon':
        msg = `${greeting} @${sender} :D @ezrealblindado responde o ${greeting} grand ez demo 😈`;
        break;
      case 'ezreal_is_life':
        msg = `${greeting} @${sender} :D @ezrealblindado responde o ${greeting} do campeão da copa loro ai 🏆`;
        break;
      case 'ezreal_soft2':
        msg = `${greeting} @${sender} princesa :D @ezrealblindado responde o ${greeting} do imperador ezRage`;
        break;
      case 'funkymonks07':
        msg = `${greeting} @${sender} :D Chegou o cara que vai dar um jeito na playlist cansada do ez! @ezrealblindado responde o ${greeting} do Funky ezRage`;
        break;
      case 'foolks_':
        msg = `${greeting} @${sender} :D @ezrealblindado responde o ${greeting} do João e bora apertar haxixe 🌿`;
        break;
      case 'gothicgraves':
        msg = `${greeting} @${sender} <3 Bota ordem nesse chat <3 💋🍑 @ezrealblindado responde logo o ${greeting} do Erik ezRage`;
        break;
      case 'guutzz':
        msg = `${greeting} @${sender} meu lindo @ezrealblindado responde logo o ${greeting} do gutz`;
        break;
      case 'heisen190':
        msg = `${greeting} @${sender} @ezrealblindado responde logo o ${greeting} do Heisen`;
        break;
      case 'hcdagalera':
        msg = `${greeting} @${sender} @ezrealblindado responde logo o ${greeting} do mister H C Twitch (lê direito ezRage)`;
        break;
      case 'iincolol':
        msg = `${greeting} @${sender} :D :D :D @ezrealblindado responde logo o ${greeting} do inco ezRage`;
        break;
      case 'jayceblindadox':
        msg = `${greeting} @${sender} :D Chegou o melhor jayce do BR 😲 @ezrealblindado responde logo o ${greeting} do jayce ezRage`;
        break;
      case 'jotapedrezinhater':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} do JP (lê direito ezRage)`;
        break;
      case 'louisghiaccio':
        msg = `${greeting} @${sender} :D @ezrealblindado responde logo o ${greeting} do Louis`;
        break;
      case 'lord_vinny317':
        msg = `${greeting} @${sender} :D Cuidado chat, chegou o lord dos bans 🔨 @ezrealblindado responde logo o ${greeting} do Lord Otaku ezRage`;
        break;
      case 'mariesaotome':
        switch (status_day.toLowerCase()) {
          case 'night':
            greeting = 'Bonne nuit';
            break;
          case 'evening':
            greeting = 'Bonne après-midi';
            break;
          case 'salve':
            greeting = 'Sauve';
            break;
          case 'dawn':
            greeting = 'Bonne aube';
            break;
          default:
            greeting = 'Bonjour';
            break;
        }
        msg = `${greeting} mon ami  @${sender} 👋 @ezrealblindado responde logo o ${greeting} da Marie`;
        break;
      case 'morganadotelemarketing':
        msg = `${greeting} @${sender} :D <3 @ezrealblindado responde logo o ${greeting} da morgana e vai logo jogar Outlast! ezRage`;
        break;
      case 'monoyuumi':
        msg = `${greeting} @${sender} :D @ezrealblindado não responde o ${greeting} do mono yuumi não, esse champ é nojento ezRage`;
        break;
      case 'mrocha92':
        msg = `${greeting} @${sender} @ezrealblindado nem precisa responder, ele ta do seu lado mesmo xD`;
        break;
      case 'onerayin':
        msg = `${greeting} @${sender} :D <3 @ezrealblindado responde logo o ${greeting} do onechan! ezRage`;
        break;
      case 'oolucacidoo':
        msg = `${greeting} @${sender} :D <3 sdds ouvir um offspring @ezrealblindado responde logo o ${greeting} do Lucacido! ezRage`;
        break;
      case 'padresetebot':
        msg = `${greeting} @${sender} para com essa Cailtyn top seu safado!!! @ezrealblindado responde logo o ${greeting} do padre 👉🗿👈 👉🗽👈`;
        break;
      case 'pnddddd':
        msg = `${greeting} @${sender} 🐼🐼🐼🐼🐼  @ezrealblindado responde logo o ${greeting} do Panda!`;
        break;
      case 'pontilhado':
        msg = `${greeting} @${sender} :D @ezrealblindado responde logo o ${greeting} do .-.-.-.-.-.-.-.-.-.- xD!`;
        break;
      case 'tigreclaudio':
        msg = `${greeting} @${sender} 🐅  @ezrealblindado responde logo o ${greeting} do tigrão 🐯🐯🐯`;
        break;
      case 'wallac_e':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} do wallace xD`;
        break;
      case 'willss56':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} do willlllsssss xD`;
        break;
      case 'xanx96':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} do xanx e lê o nick direito hein! ezRage`;
        break;
      case 'ximbilimba':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} do ximb! ezRage`;
        break;
      case 'yamaru_sz':
        msg = `${greeting} @${sender} :D <3  @ezrealblindado responde logo o ${greeting} do yama e ja vai quitando do lol! ezRage`;
        break;
      case 'yaozora':
        msg = `${greeting} @${sender} :D <3  @ezrealblindado responde logo o ${greeting} do Yaozora e ja diz também se lavou o 🐤`;
        break;
      case 'yanzera':
        msg = `${greeting} @${sender} :D  @ezrealblindado responde logo o ${greeting} yanzera rei do TheVoice ezRage`;
        break;
      case 'ezrealblindado':
        msg = `Ta me dando ${greeting} por que, Gabriel?`;
        break;
      default:
        msg = `@ezrealblindado responde o ${greeting} do/da ${sender}, seu tanso ezRage`;
        break;
    }

    return res.send(msg);
  }
}

module.exports = new GreetingController();
