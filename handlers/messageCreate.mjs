import { ndnDice } from "../commands/utils/dice.mjs"

export default async(message) => {
  if (message.content.match(/ぽてと|ポテト|じゃがいも|ジャガイモ|🥔|🍟/)) {
    await message.react("🥔");
  }
  
  if (message.content.match(/にゃん|にゃーん|にゃ～ん/)) {
    await message.reply("にゃ～ん", "にゃんにゃん");
    index = random.randint(0, len(texts) - 1);
  }
  
  if (message.content.match(/原稿|おげんこ/)) {
    await message.reply("がんばってや～", "がんばれ💗がんばれ💗");
  }
  if (message.content.match(/^\d+d\d+$/)) {
    await message.reply(ndnDice(message.content));
  }
};
