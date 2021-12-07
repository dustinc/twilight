export default [
    /* early war cards */
    { number: 1, name: "Asia Scoring", short: "assc", side: "neutral", location: "inactive", phase: "early", ops: 0, flags: ["scoring"], scoring: ["Presence: 3", "Domination: 7", "Control: 9", "+1 per controlled Battleground Country in Region", "+1 per Country controlled that is adjacent to enemy superpower"] },
    { number: 2, name: "Europe Scoring", short: "eusc", side: "neutral", location: "inactive", phase: "early", ops: 0, flags: ["scoring"], scoring: ["Presence: 3", "Domination: 7", "Control: Automatic Victory", "+1 per controlled Battleground Country in Region", "+1 per Country controlled that is adjacent to enemy superpower"] },
    { number: 3, name: "Middle East Scoring", short: "mesc", side: "neutral", location: "inactive", phase: "early", ops: 0, flags: ["scoring"], scoring: ["Presence: 3", "Domination: 5", "Control: 7", "+1 per controlled Battleground Country in Region"] },
    { number: 4, name: "Duck and Cover", side: "usa", location: "inactive", phase: "early", ops: 3, flags:['DEFCON'], text:"Degrade the DEFCON level by 1. The US receives VP equal to 5 minus the current DEFCON level." },
    { number: 5, name: "Five Year Plan", side: "usa", location: "inactive", phase: "early", ops: 3, flags:['Discard'], text:"The USSR must randomly discard a card. If the card has a US associated Event, the Event occurs immediately. If the card has a USSR associated Event or an Event applicable to both players, then the card must be discarded without triggering the Event."  },
    { number: 6, name: "The China Card", side: "neutral", location: "ussr", phase: "early", ops: 4, flags:['Ops', 'VP'], text:"This card begins the game with the USSR. When played, the player receives +1 Operations to the Operations value of this card if it uses all its Operations in Asia. It is passed to the opponent once played. A player receives 1 VP for holding this card at the end of Turn 10."  },
    { number: 7, name: "Socialist Governments", side: "ussr", location: "inactive", phase: "early", ops: 3, text:"Remove a total of 3 US Influence from any countries in Western Europe (removing no more than 2 Influence per country). This Event cannot be used after the “#83 – The Iron Lady” Event has been played."  },
    { number: 8, name: "Fidel", side: "ussr", location: "inactive", phase: "early", ops: 2, region: ["Cuba"], flags: ["remove"], text:"Remove all US Influence from Cuba. USSR adds sufficient Influence in Cuba for Control."  },
    { number: 9, name: "Vietnam Revolts", side: "ussr", location: "inactive", phase: "early", ops: 2, region: ["Vietnam"], flags: ["remove", "Ops"], text:"Add 2 USSR Influence to Vietnam. For the remainder of the turn, the USSR receives +1 Operations to the Operations value of a card that uses all its Operations in Southeast Asia."  },
    { number: 10, name: "Blockade", side: "ussr", location: "inactive", phase: "early", ops: 1, region: ["W. Germany"], flags: ["remove", "Discard"], text:"Unless the US immediately discards a card with an Operations value of 3 or more, remove all US Influence from West Germany."  },
    { number: 11, name: "Korean War", side: "ussr", location: "inactive", phase: "early", ops: 2, region: ["S. Korea"], flags: ["remove", "VP", "MilOps"], text:"North Korea invades South Korea. Roll a die and subtract (-1) from the die roll for every US controlled country adjacent to South Korea. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in South Korea with USSR Influence. The USSR adds 2 to its Military Operations Track."  },
    { number: 12, name: "Romanian Abdication", side: "ussr", location: "inactive", phase: "early", ops: 1, region: ["Romania"], flags: ["remove"], text:"Remove all US Influence from Romania. The USSR adds sufficient Influence to Romania for Control."  },
    { number: 13, name: "Arab-Israeli War", side: "neutral", location: "inactive", phase: "early", ops: 2, region:["Israel"], flags:["VP", "MilOps"], text:"Pan-Arab Coalition invades Israel. Roll a die and subtract (-1) from the die roll for Israel, if it is US controlled, and for every US controlled country adjacent to Israel. On a modified die roll of 4-6, the USSR receives 2 VP and replaces all US Influence in Israel with USSR Influence. The USSR adds 2 to its Military Operations Track. This Event cannot be used after the “#65 – Camp David Accords” Event has been played."  },
    { number: 14, name: "Comecon", side: "ussr", location: "inactive", phase: "early", ops: 3, region: ["Europe"], flags: ["remove"], text:"Add 1 USSR Influence to each of 4 non-US controlled countries of Eastern Europe."  },
    { number: 15, name: "Nasser", side: "ussr", location: "inactive", phase: "early", ops: 1, flags: ["remove"], text:"Add 2 USSR Influence to Egypt. The US removes half, rounded up, of its Influence from Egypt."  },
    { number: 16, name: "Warsaw Pact Formed", side: "ussr", location: "inactive", phase: "early", ops: 3, region: ["Europe"], flags: ["remove"], text:"Remove all US influence from 4 countries in Eastern Europe or add 5 USSR Influence to any countries in Eastern Europe (adding no more than 2 Influence per country). This Event allows the “#21 – NATO” card to be played as an Event."  },
    { number: 17, name: "De Gaulle Leads France", side: "ussr", location: "inactive", phase: "early", ops: 3, region: ["France"], flags: ["remove"], text:"Remove 2 US Influence from France and add 1 USSR Influence to France. This Event cancels the effect(s) of the “#21 – NATO” Event for France only."  },
    { number: 18, name: "Captured Nazi Scientist", side: "neutral", location: "inactive", phase: "early", ops: 1, flags: ["remove", "Space Race"], text:"Move the Space Race Marker ahead by 1 space."  },
    { number: 19, name: "Truman Doctrine", side: "usa", location: "inactive", phase: "early", region: ["Europe"], ops: 1, flags: ["remove"], text:"Remove all USSR Influence from a single uncontrolled country in Europe."  },
    { number: 20, name: "Olympic Games", side: "neutral", location: "inactive", phase: "early", ops: 2, flags:["VP", "DEFCON"], text:"This player sponsors the Olympics. The opponent must either participate or boycott. If the opponent participates, each player rolls a die and the sponsor adds 2 to their roll. The player with the highest modified die roll receives 2 VP (reroll ties). If the opponent boycotts, degrade the DEFCON level by 1 and the sponsor may conduct Operations as if they played a 4 Ops card."  },
    { number: 21, name: "NATO", side: "usa", location: "inactive", phase: "early", ops: 4, region: ["Europe"],  flags: ["remove"], text:"The USSR cannot make Coup Attempts or Realignment rolls against any US controlled countries in Europe. US controlled countries in Europe cannot be attacked by play of the “#36 – Brush War” Event. This card requires prior play of either the “#16 – Warsaw Pact Formed” or “#23 – Marshall Plan” Event(s) in order to be played as an Event."  },
    { number: 22, name: "Independent Reds", side: "usa", location: "inactive", phase: "early", ops: 2, region: ["Romania", "Yugoslavia", "Bulgaria", "Hungary", "Czechoslovakia"], flags: ["remove"], text:"Add US Influence to either Yugoslavia, Romania, Bulgaria, Hungary, or Czechoslovakia so that it equals the USSR Influence in that country."  },
    { number: 23, name: "Marshall Plan", side: "usa", location: "inactive", phase: "early", ops: 4, region: ["Europe"], flags: ["remove"], text:"Add 1 US Influence to each of any 7 non-USSR controlled countries in Western Europe. This Event allows the “#21 – NATO” card to be played as an Event."  },
    { number: 24, name: "Indo-Pakistani War", side: "neutral", location: "inactive", phase: "early", ops: 2, region: ["India", "Pakistan"], flags:["VP", "MilOps"],  text:"India invades Pakistan or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (India or Pakistan). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track."  },
    { number: 25, name: "Containment", side: "usa", location: "inactive", phase: "early", ops: 3, flags: ["remove", "Ops"], text:"All Operations cards played by the US, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card)."  },
    { number: 26, name: "CIA Created", side: "usa", location: "inactive", phase: "early", ops: 1, text: "USSR reveals hand this turn. Then the US may conduct operations as if they played a 1 Op card.", flags: ["remove"] },
    { number: 27, name: "US/Japan Defense Pact", side: "usa", location: "inactive", phase: "early", ops: 4, region: ["Japan"], flags: ["remove"], text:"The US adds sufficient Influence to Japan for Control. The USSR cannot make Coup Attempts or Realignment rolls against Japan."  },
    { number: 28, name: "Suez Crisis", side: "ussr", location: "inactive", phase: "early", ops: 3, region: ["France", "UK", "Israel"], flags: ["remove"], text:"Remove a total of 4 US Influence from France, the United Kingdom and Israel (removing no more than 2 Influence per country)."  },
    { number: 29, name: "East European Unrest", side: "usa", location: "inactive", phase: "early", ops: 3, region: ["Europe"], text:"Early or Mid War: Remove 1 USSR Influence from 3 countries in Eastern Europe. Late War: Remove 2 USSR Influence from 3 countries in Eastern Europe."  },
    { number: 30, name: "Decolonization", side: "ussr", location: "inactive", phase: "early", ops: 2, region: ["Asia", "Africa"], text:"Add 1 USSR Influence to each of any 4 countries in Africa and/or Southeast Asia."  },
    { number: 31, name: "Red Scare/Purge", side : "neutral", location: "inactive", phase: "early", ops: 4, flags: ["Ops"], text: "All further Operations cards played by your opponent this turn are -1 to their value (to a minimum of 1 Op)." },
    { number: 32, name: "UN Intervention", side : "neutral", location: "inactive", phase: "early", ops: 1, flags: ["Discard"], text:"Play this card simultaneously with a card containing an opponent’s associated Event. The opponent’s associated Event is canceled but you may use the Operations value of the opponent’s card to conduct Operations. This Event cannot be played during the Headline Phase."  },
    { number: 33, name: "De-Stalinization", side: "ussr", location: "inactive", phase: "early", ops: 3, text: "USSR may relocate up to 4 Influence points to non-US controlled countries. No more than 2 influence may be placed in the same country", flags: ["remove"] },
    { number: 34, name: "Nuclear Test Ban", side : "neutral", location: "inactive", phase: "early", ops: 4, flags: ["VP", "DEFCON"], text:"The player receives VP equal to the current DEFCON level minus 2 then improves the DEFCON level by 2."  },
    { number: 35, name: "Formosan Resolution", side: "usa", location: "inactive", phase: "early", ops: 2, region: ["Taiwan"], flags: ["remove"], text:"If this card’s Event is in effect, Taiwan will be treated as a Battleground country, for scoring purposes only, if Taiwan is US controlled when the Asia Scoring Card is played. This Event is cancelled after the US has played the “#6 – The China Card” card." },
    { number: 103, name: "Defectors", side: "usa", location: "inactive", phase: "early", ops: 2, flags: ["VP"], text:"The US may play this card during the Headline Phase in order to cancel the USSR Headline Event (including a scoring card). The canceled card is placed into the discard pile. If this card is played by the USSR during its action round, the US gains 1 VP." },

    /* mid war cards */
    { number: 36, name: "Brush War", side: "neutral", location: "inactive", phase: "mid", ops: 3, flags: ["VP", "MilOps"], text:"The player attacks any country with a stability number of 1 or 2. Roll a die and subtract (-1) from the die roll for every adjacent enemy controlled country. On a modified die roll of 3-6, the player receives 1 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 3 to its Military Operations Track." },
    { number: 37, name: "Central America Scoring", short: "casc", side: "neutral", location: "inactive", phase: "mid", ops: 0, flags: ["scoring"], scoring: ["Presence: 1", "Domination: 3", "Control: 5", "+1 per controlled Battleground Country in Region", "+1 per Country controlled that is adjacent to enemy superpower"] },
    { number: 38, name: "Southeast Asia Scoring", short: "seasc", side: "neutral", location: "inactive", phase: "mid", ops: 0, flags: ["scoring", "remove"], scoring: ["1 VP each for Control of: Burma, Cambodia/Laos, Vietnam, Malaysia, Indonesia, the Philippines.", "2 VPs for Control of Thailand" ] },
    { number: 39, name: "Arms Race", side:"neutral", location: "inactive", phase: "mid", ops: 3, flags: ["VP"], text: "Compare each player’s value on the Military Operations Track. If the phasing player has a higher value than their opponent on the Military Operations Track, that player receives 1 VP. If the phasing player has a higher value than their opponent, and has met the “required” amount, on the Military Operations Track, that player receives 3 VP instead." },
    { number: 40, name: "Cuban Missile Crisis", side:"neutral", location: "inactive", phase: "mid", ops: 3, flags: ["DEFCON"], region:["W. Germany", "Turkey", "Cuba"],  text: "Set the DEFCON level to 2. Any Coup Attempts by your opponent, for the remainder of this turn, will result in Global Thermonuclear War. Your opponent will lose the game. This card’s Event may be canceled, at any time, if the USSR removes 2 Influence from Cuba or the US removes 2 Influence from West Germany or Turkey." },
    { number: 41, name: "Nuclear Subs", side:"usa", location: "inactive", phase: "mid", ops: 2, flags: ["remove", "DEFCON"], text: "US Operations used for Coup Attempts in Battleground countries, for the remainder of this turn, do not degrade the DEFCON level. This card’s Event does not apply to any Event that would affect the DEFCON level (ex. the “#40 – Cuban Missile Crisis” Event)." },
    { number: 42, name: "Quagmire", side:"ussr", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "Discard"], text: "On the US’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each US action round until the US successfully rolls 1-4 on a die. If the US is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn. This Event cancels the effect(s) of the “#106 – NORAD” Event (if applicable)." },
    { number: 43, name: "SALT Negotiations", side:"neutral", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "DEFCON"], text: "Improve the DEFCON level by 2. For the remainder of the turn, both players receive -1 to all Coup Attempt rolls. The player of this card’s Event may look through the discard pile, pick any 1 non-scoring card, reveal it to their opponent and then place the drawn card into their hand." },
    { number: 44, name: "Bear Trap", side:"usa", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "Discard"], text: "On the USSR’s next action round, it must discard an Operations card with a value of 2 or more and roll 1-4 on a die to cancel this Event. Repeat this Event for each USSR action round until the USSR successfully rolls 1-4 on a die. If the USSR is unable to discard an Operations card, it must play all of its scoring cards and then skip each action round for the rest of the turn." },
    { number: 45, name: "Summit", side:"neutral", location: "inactive", phase: "mid", ops: 1, flags: ["VP", "DEFCON"], text: "Both players roll a die. Each player receives +1 to the die roll for each Region (Europe, Asia, etc.) they Dominate or Control. The player with the highest modified die roll receives 2 VP and may degrade or improve the DEFCON level by 1 (do not reroll ties)." },
    { number: 46, name: "How I Learned to Stop Worrying", side:"neutral", location: "inactive", phase: "mid", ops: 2, flags: ["remove", "DEFCON", "MilOps"], text: "Set the DEFCON level to any level desired (1-5). The player adds 5 to its Military Operations Track." },
    { number: 47, name: "Junta", side:"neutral", location: "inactive", phase: "mid", ops: 2, region: ["South America", "Central America"], flags: [], text: "Add 2 Influence to a single country in Central or South America. The player may make free Coup Attempts or Realignment rolls in either Central or South America using the Operations value of this card." },
    { number: 48, name: "Kitchen Debates", side:"usa", location: "inactive", phase: "mid", ops: 1, flags: ["remove", "VP"], text: "If the US controls more Battleground countries than the USSR, the US player uses this Event to poke their opponent in the chest and receive 2 VP!" },
    { number: 49, name: "Missile Envy", side:"neutral", location: "inactive", phase: "mid", ops: 2, flags: [], text: "Exchange this card for your opponent’s highest value Operations card. If 2 or more cards are tied, opponent chooses. If the exchanged card contains an Event applicable to yourself or both players, it occurs immediately. If it contains an opponent’s Event, use the Operations value (no Event). The opponent must use this card for Operations during their next action round." },
    { number: 50, name: "“We Will Bury You”", side:"ussr", location: "inactive", phase: "mid", ops: 4, flags: ["remove", "DEFCON", "VP"], text: "Degrade the DEFCON level by 1. Unless the #32 UN Intervention card is played as an Event on the US’s next action round, the USSR receives 3 VP." },
    { number: 51, name: "Brezhnev Doctrine", side:"ussr", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "Ops"], text: "All Operations cards played by the USSR, for the remainder of this turn, receive +1 to their Operations value (to a maximum of 4 Operations per card)." },
    { number: 52, name: "Portuguese Empire Crumbles", side:"ussr", location: "inactive", phase: "mid", ops: 2, region:["Angola", "SE African States"], flags: ["remove"], text: "Add 2 USSR Influence to Angola and the SE African States." },
    { number: 53, name: "South African Unrest", side:"ussr", location: "inactive", phase: "mid", ops: 2, region:["Angola", "South Africa", "Botswana"], flags: [], text: "The USSR either adds 2 Influence to South Africa or adds 1 Influence to South Africa and 2 Influence to a single country adjacent to South Africa." },
    { number: 54, name: "Allende", side:"ussr", location: "inactive", phase: "mid", ops: 1, region: ["Chile"], flags: ["remove"], text: "Add 2 USSR Influence to Chile." },
    { number: 55, name: "Willy Brandt", side:"ussr", location: "inactive", phase: "mid", ops: 2, region: ["W. Germany"], flags: ["remove", "VP"], text: "The USSR receives 1 VP and adds 1 Influence to West Germany. This Event cancels the effect(s) of the “#21 – NATO” Event for West Germany only. This Event is prevented / canceled by the “#96 – Tear Down this Wall” Event." },
    { number: 56, name: "Muslim Revolution", side:"ussr", location: "inactive", phase: "mid", ops: 4, region: ["Middle East", "Sudan"], flags: [], text: "Remove all US Influence from 2 of the following countries: Sudan, Iran, Iraq, Egypt, Libya, Saudi Arabia, Syria, Jordan. This Event cannot be used after the “#110 – AWACS Sale to Saudis” Event has been played." },
    { number: 57, name: "ABM Treaty", side:"neutral", location: "inactive", phase: "mid", ops: 4, flags: ["DEFCON"], text: "Improve the DEFCON level by 1 and then conduct Operations using the Operations value of this card." },
    { number: 58, name: "Cultural Revolution", side:"ussr", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "VP"], text: "If the US has the “#6 – The China Card” card, the US must give the card to the USSR (face up and available to be played). If the USSR already has “#6 – The China Card” card, the USSR receives 1 VP." },
    { number: 59, name: "Flower Power", side:"ussr", location: "inactive", phase: "mid", ops: 4, flags: ["remove", "VP"], text: "The USSR receives 2 VP for every US played “War” card (Arab-Israeli War, Korean War, Brush War, Indo-Pakistani War, Iran-Iraq War), used for Operations or an Event, after this card is played. This Event is prevented / canceled by the “#97 – ‘An Evil Empire’” Event." },
    { number: 60, name: "U2 Incident", side:"ussr", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "VP"], text: "The USSR receives 1 VP. If the “#32 – UN Intervention” Event is played later this turn, either by the US or the USSR, the USSR receives an additional 1 VP." },
    { number: 61, name: "OPEC", side:"ussr", location: "inactive", phase: "mid", ops: 3, region: ["Egypt", "Iran", "Libya", "Saudi Arabia", "Iraq", "Gulf States", "Venezuela"], flags: ["VP"], text: "The USSR receives 1 VP for Control of each of the following countries: Egypt, Iran, Libya, Saudi Arabia, Iraq, Gulf States, Venezuela. This Event cannot be used after the “#86 – North Sea Oil” Event has been played." },
    { number: 62, name: "“Lone Gunman”", side:"ussr", location: "inactive", phase: "mid", ops: 1, flags: ["remove"], text: "The US reveals their hand of cards. The USSR may use the Operations value of this card to conduct Operations." },
    { number: 63, name: "Colonial Rear Guards", side:"usa", location: "inactive", phase: "mid", ops: 2, region: ["Africa", "Asia"], flags: [], text: "Add 1 US Influence to each of any 4 countries in Africa and/or Southeast Asia." },
    { number: 64, name: "Panama Canal Returned", side:"usa", location: "inactive", phase: "mid", ops: 1, region: ["Venezuela", "Panama", "Costa Rica"], flags: ["remove"], text: "Add 1 US Influence to Panama, Costa Rica and Venezuela." },
    { number: 65, name: "Camp David Accords", side:"usa", location: "inactive", phase: "mid", ops: 2, region:["Egypt", "Israel", "Jordan"], flags: ["remove", "VP"], text: "The US receives 1 VP and adds 1 Influence to Israel, Jordan and Egypt. This Event prevents the “#13 – Arab-Israeli War” card from being played as an Event." },
    { number: 66, name: "Puppet Governments", side:"usa", location: "inactive", phase: "mid", ops: 2, flags: ["remove"], text: "The US may add 1 Influence to 3 countries that do not contain Influence from either the US or USSR." },
    { number: 67, name: "Grain Sales to Soviets", side:"usa", location: "inactive", phase: "mid", ops: 2, flags: [], text: "The US randomly selects 1 card from the USSR’s hand (if available). The US must either play the card or return it to the USSR. If the card is returned, or the USSR has no cards, the US may use the Operations value of this card to conduct Operations." },
    { number: 68, name: "John Paul II Elected Pope", side:"usa", location: "inactive", phase: "mid", ops: 2, region: ["Poland"], flags: ["remove"], text: "Remove 2 USSR Influence from Poland and add 1 US Influence to Poland. This Event allows the “#101 – Solidarity” card to be played as an Event." },
    { number: 69, name: "Latin American Death Squads", side:"neutral", location: "inactive", phase: "mid", ops: 2, flags: [], text: "All of the phasing player’s Coup Attempts in Central and South America, for the remainder of this turn, receive +1 to their die roll. All of the opponent’s Coup Attempts in Central and South America, for the remainder of this turn, receive -1 to their die roll." },
    { number: 70, name: "OAS Founded", side:"usa", location: "inactive", phase: "mid", ops: 1, region: ["South America", "Central America"], flags: ["remove"], text: "Add a total of 2 US Influence to any countries in Central or South America." },
    { number: 71, name: "Nixon Plays the China Card", side:"usa", location: "inactive", phase: "mid", ops: 2, flags: ["remove", "VP"], text: "If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face down and unavailable for immediate play). If the US already has the “#6 – The China Card” card, the US receives 2 VP." },
    { number: 72, name: "Sadat Expels Soviets", side:"usa", location: "inactive", phase: "mid", ops: 1, flags: ["remove"], text: "Remove all USSR Influence from Egypt and add 1 US Influence to Egypt." },
    { number: 73, name: "Shuttle Diplomacy", side:"usa", location: "inactive", phase: "mid", ops: 3, flags: [], text: "If this card’s Event is in effect, subtract (-1) a Battleground country from the USSR total and then discard this card during the next scoring of the Middle East or Asia (which ever comes first)." },
    { number: 74, name: "The Voice of America", side:"usa", location: "inactive", phase: "mid", ops: 2, flags: [], text: "Remove 4 USSR Influence from any countries NOT in Europe (removing no more than 2 Influence per country)." },
    { number: 75, name: "Liberation Theology", side:"ussr", location: "inactive", phase: "mid", ops: 2, region: ["Central America"], flags: [], text: "Add a total of 3 USSR Influence to any countries in Central America (adding no more than 2 Influence per country)." },
    { number: 76, name: "Ussuri River Skirmish", side:"usa", location: "inactive", phase: "mid", ops: 3, region: ["Asia"], flags: ["remove"], text: "If the USSR has the “#6 – The China Card” card, the USSR must give the card to the US (face up and available for play). If the US already has the “#6 – The China Card” card, add a total of 4 US Influence to any countries in Asia (adding no more than 2 Influence per country)." },
    { number: 77, name: "“Ask Not What Your Country…”", side:"usa", location: "inactive", phase: "mid", ops: 3, flags: ["remove", "Discard"], text: "The US may discard up to their entire hand of cards (including scoring cards) to the discard pile and draw replacements from the draw pile. The number of cards to be discarded must be decided before drawing any replacement cards from the draw pile." },
    { number: 78, name: "Alliance for Progress", side:"usa", location: "inactive", phase: "mid", ops: 3, region: ["South America", "Central America"], flags: ["remove", "VP"], text: "The US receives 1 VP for each US controlled Battleground country in Central and South America." },
    { number: 79, name: "Africa Scoring", short: "afsc", side:"neutral", location: "inactive", phase: "mid", ops: 0, flags: ["scoring"], scoring: ["Presence: 1", "Domination: 4", "Control: 6", "+1 per controlled Battleground Country in Region"] },
    { number: 80, name: "“One Small Step…”", side:"neutral", location: "inactive", phase: "mid", ops: 2, flags: ["Space Race"], text: "If you are behind on the Space Race Track, the player uses this Event to move their marker 2 spaces forward on the Space Race Track. The player receives VP only from the final space moved into." },
    { number: 81, name: "South America Scoring", short: "sasc", side:"neutral", location: "inactive", phase: "mid", ops: 0, flags: ["scoring"], scoring: ["Presence: 2", "Domination: 5", "Control: 6", "+1 per controlled Battleground Country in Region" ] },

    /* late war cards */
    { number: 82, name: "Iranian Hostage Crisis", side: "ussr", location: "inactive", phase: "late", ops: 3, region: ["Iran"], flags: ["remove"], text:"Remove all US Influence and add 2 USSR Influence to Iran. This card’s Event requires the US to discard 2 cards, instead of 1 card, if the “#92 – Terrorism” Event is played."  },
    { number: 83, name: "The Iron Lady", side: "usa", location: "inactive", phase: "late", ops: 3, region: ["UK", "Argentina"], flags: ["remove", "VP"], text: "Add 1 USSR Influence to Argentina and remove all USSR Influence from the United Kingdom. The US receives 1 VP. This Event prevents the “#7 – Socialist Governments” card from being played as an Event."  },
    { number: 84, name: "Reagan Bombs Libya", side: "usa", location: "inactive", phase: "late", ops: 2, region: ["Libya"], flags: ["remove", "VP"], text:"The US receives 1 VP for every 2 USSR Influence in Libya."  },
    { number: 85, name: "Star Wars", side: "usa", location: "inactive", phase: "late", ops: 2, flags: ["remove", "Space Race"], text: "If the US is ahead on the Space Race Track, the US player uses this Event to look through the discard pile, pick any 1 non-scoring card and play it immediately as an Event."},
    { number: 86, name: "North Sea Oil", side: "usa", location: "inactive", phase: "late", ops: 3, flags: ["remove"], text: "The US may play 8 cards (in 8 action rounds) for this turn only. This Event prevents the “#61 – OPEC” card from being played as an Event."},
    { number: 87, name: "The Reformer", side: "ussr", location: "inactive", phase: "late", ops: 3, region: ["Europe"], flags: ["remove"], text: "Add 4 USSR Influence to Europe (adding no more than 2 Influence per country). If the USSR is ahead of the US in VP, 6 Influence may be added to Europe instead. The USSR may no longer make Coup Attempts in Europe."},
    { number: 88, name: "Marine Barracks Bombing", side: "ussr", location: "inactive", phase: "late", ops: 2, region: ["Lebanon", "Middle East"], flags: ["remove"], text: "Remove all US Influence in Lebanon and remove a total of 2 US Influence from any countries in the Middle East."},
    { number: 89, name: "Soviets Shoot Down KAL-007", side: "usa", location: "inactive", phase: "late", ops: 4, flags: ["remove", "DEFCON"], text: "Degrade the DEFCON level by 1 and the US receives 2 VP. The US may place influence or make Realignment rolls, using this card, if South Korea is US controlled."},
    { number: 90, name: "Glasnost", side: "ussr", location: "inactive", phase: "late", ops: 4, flags: ["remove", "DEFCON"], text: "Improve the DEFCON level by 1 and the USSR receives 2 VP. The USSR may make Realignment rolls or add Influence, using this card, if the “#87 – The Reformer” Event has already been played."},
    { number: 91, name: "Ortega Elected in Nicaragua", side: "ussr", location: "inactive", phase: "late", ops: 2, region: ["Cuba", "Costa Rica", "Nicaragua", "Honduras"], flags: ["remove"], text: "Remove all US Influence from Nicaragua. The USSR may make a free Coup Attempt, using this card’s Operations value, in a country adjacent to Nicaragua."},
    { number: 92, name: "Terrorism", side: "neutral", location: "inactive", phase: "late", ops: 2, flags: ["Discard"], text: "The player’s opponent must randomly discard 1 card from their hand. If the “#82 – Iranian Hostage Crisis” Event has already been played, a US player (if applicable) must randomly discard 2 cards from their hand."},
    { number: 93, name: "Iran-Contra Scandal", side: "ussr", location: "inactive", phase: "late", ops: 2, flags: ["remove"], text: "All US Realignment rolls, for the remainder of this turn, receive -1 to their die roll."},
    { number: 94, name: "Chernobyl", side: "usa", location: "inactive", phase: "late", ops: 3, flags: ["remove"], text: "The US must designate a single Region (Europe, Asia, etc.) that, for the remainder of the turn, the USSR cannot add Influence to using Operations points."},
    { number: 95, name: "Latin American Debt Crisis", side: "ussr", location: "inactive", phase: "late", ops: 2, region: ["South America"],  flags: ["Discard"], text: "The US must immediately discard a card with an Operations value of 3 or more or the USSR may double the amount of USSR Influence in 2 countries in South America."},
    { number: 96, name: "Tear Down this Wall", side: "usa", location: "inactive", phase: "late", ops: 3, region: ["E. Germany"], flags: ["remove"], text: "Add 3 US Influence to East Germany. The US may make free Coup Attempts or Realignment rolls in Europe using the Operations value of this card. This Event prevents / cancels the effect(s) of the “#55 – Willy Brandt” Event."},
    { number: 97, name: "“An Evil Empire”", side: "usa", location: "inactive", phase: "late", ops: 3, flags: ["remove", "VP"], text: "The US receives 1 VP. This Event prevents / cancels the effect(s) of the “#59 – Flower Power” Event."},
    { number: 98, name: "Aldrich Ames Remix", side: "ussr", location: "inactive", phase: "late", ops: 3, flags: ["remove", "Discard"], text: "The US reveals their hand of cards, face-up, for the remainder of the turn and the USSR discards a card from the US hand."},
    { number: 99, name: "Pershing II Deployed", side: "ussr", location: "inactive", phase: "late", ops: 3, region: ["Europe"], flags: ["remove", "VP"], text: "The USSR receives 1 VP. Remove 1 US Influence from any 3 countries in Western Europe."},
    { number: 100, name: "Wargames", side: "neutral", location: "inactive", phase: "late", ops: 4, flags: ["remove", "DEFCON", "VP"], text: "If the DEFCON level is 2, the player may immediately end the game after giving their opponent 6 VP. How about a nice game of chess?"},
    { number: 101, name: "Solidarity", side: "usa", location: "inactive", phase: "late", ops: 2, region:["Poland"], flags: ["remove"], text: "Add 3 US Influence to Poland. This card requires prior play of the “#68 – John Paul II Elected Pope” Event in order to be played as an Event."},
    { number: 102, name: "Iran-Iraq War", side: "neutral", location: "inactive", phase: "late", ops: 2, region: ["Iran", "Iraq"], flags: ["remove", "VP", "MilOps"], text: "Iran invades Iraq or vice versa (player’s choice). Roll a die and subtract (-1) from the die roll for every enemy controlled country adjacent to the target of the invasion (Iran or Iraq). On a modified die roll of 4-6, the player receives 2 VP and replaces all the opponent’s Influence in the target country with their Influence. The player adds 2 to its Military Operations Track."},

    /* optional cards */
    { number: 104, name: "The Cambridge Five", side: "ussr", location: "disabled", phase: "early", ops: 2, flags: ["optional", "remove"], text:"The US reveals all scoring cards in their hand of cards. The USSR player may add 1 USSR Influence to a single Region named on one of the revealed scoring cards. This card can not be played as an Event during the Late War."  },
    { number: 105, name: "Special Relationship", side: "usa", location: "disabled", phase: "early", ops: 2, region: ["UK"], flags: ["optional", "remove", "VP"], text:"Add 1 US Influence to a single country adjacent to the U.K. if the U.K. is US-controlled but NATO is not in effect. Add 2 US Influence to a single country in Western Europe, and the US gains 2 VP, if the U.K. is US-controlled and NATO is in effect." },
    { number: 106, name: "NORAD", side: "usa", location: "disabled", phase: "early", ops: 3, region: ["Canada"], flags: ["optional", "remove", "DEFCON"], text:"Add 1 US Influence to a single country containing US Influence, at the end of each Action Round, if Canada is US-controlled and the DEFCON level moved to 2 during that Action Round. This Event is canceled by the “#42 – Quagmire” Event."  },
    
    { number: 107, name: "Che", side: "ussr", location: "disabled", phase: "mid", ops: 3, region: ["Africa", "South America", "Central America"], flags: ["optional"], text:"The USSR may perform a Coup Attempt, using this card’s Operations value, against a non-Battleground country in Central America, South America or Africa. The USSR may perform a second Coup Attempt, against a different non-Battleground country in Central America, South America or Africa, if the first Coup Attempt removed any US Influence from the target country."  },
    { number: 108, name: "Our Man in Tehran", side: "usa", location: "disabled", phase: "mid", ops: 2, region: ["Middle East"], flags: ["optional", "remove", "Discard"], text:"If the US controls at least one Middle East country, the US player uses this Event to draw the top 5 cards from the draw pile. The US may discard any or all of the drawn cards, after revealing the discarded card(s) to the USSR player, without triggering the Event(s). Any remaining drawn cards are returned to the draw pile and the draw pile is reshuffled."  },
    
    { number: 109, name: "Yuri and Samantha", side: "ussr", location: "disabled", phase: "late", ops: 2, flags: ["optional", "remove", "VP"], text:"The USSR receives 1 VP for each US Coup Attempt performed during the remainder of the Turn."  },
    { number: 110, name: "AWACS Sales to Saudis", side: "usa", location: "disabled", phase: "late", ops: 3, region: ["Saudi Arabia"], flags: ["optional", "remove"], text:"Add 2 US Influence to Saudi Arabia. This Event prevents the “#56 – Muslim Revolution” card from being played as an Event."  },
];