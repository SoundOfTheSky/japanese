export type KanjiTextbookEntry = {
  kanji: string
  meaning: string[]
  vocabulary: { jp: string; en: string }[]
}

export const KANJI_TEXTBOOK: KanjiTextbookEntry[] = [
  // Lesson 1
  {
    kanji: '人',
    meaning: ['human being'],
    vocabulary: [
      { jp: '日本人[にほんじん]', en: 'a Japanese' },
      { jp: 'アメリカ 人[じん]', en: 'an American' },
      { jp: '〜 人[にん]', en: 'counter for people' },
      { jp: '人形[にんぎょう]', en: 'a doll' },
      { jp: '人[ひと]', en: 'man, human being' },
      { jp: '人々[ひとびと]', en: 'people' },
      { jp: '大人[おとな]', en: 'an adult' },
      { jp: '一人[ひとり]', en: 'one person' },
      { jp: '二人[ふたり]', en: 'two persons' },
    ],
  },
  {
    kanji: '男',
    meaning: ['man', 'male'],
    vocabulary: [
      { jp: '男性[だんせい]', en: 'a man, male' },
      { jp: '男[おとこ]', en: 'a man, male' },
      { jp: '男[おとこ]の 子[こ]', en: 'a boy' },
    ],
  },
  {
    kanji: '女',
    meaning: ['woman', 'female'],
    vocabulary: [
      { jp: '女性[じょせい]', en: 'a woman, female' },
      { jp: '彼女[かのじょ]', en: 'she' },
      { jp: '女[おんな]', en: 'a woman, female' },
      { jp: '女[おんな]の 子[こ]', en: 'a girl' },
    ],
  },
  {
    kanji: '子',
    meaning: ['child'],
    vocabulary: [
      { jp: '男子[だんし]', en: 'a boy' },
      { jp: '女子[じょし]', en: 'a girl' },
      { jp: '子供[こども]', en: 'a child' },
      { jp: '男[おとこ]の 子[こ]', en: 'a boy' },
      { jp: '女[おんな]の 子[こ]', en: 'a girl' },
    ],
  },
  {
    kanji: '車',
    meaning: ['wheel'],
    vocabulary: [
      { jp: '電車[でんしゃ]', en: 'a train' },
      { jp: '車[くるま]', en: 'a wheel, motor vehicle' },
    ],
  },
  {
    kanji: '山',
    meaning: ['mountain'],
    vocabulary: [{ jp: '山[やま]', en: 'a mountain' }],
  },
  {
    kanji: '川',
    meaning: ['river'],
    vocabulary: [
      { jp: '川[かわ]', en: 'a river' },
      { jp: 'ナイル 川[がわ]', en: 'the Nile (River)' },
      { jp: '中川[なかがわ]', en: 'Nakagawa (Japanese surname)' },
    ],
  },
  {
    kanji: '田',
    meaning: ['rice field'],
    vocabulary: [
      { jp: '田[た]', en: 'a rice field' },
      { jp: '田[た]んぼ', en: 'a rice field' },
      { jp: '田中[たなか]', en: 'Tanaka (Japanese surname)' },
      { jp: '山田[やまだ]', en: 'Yamada (Japanese surname)' },
    ],
  },
  {
    kanji: '米',
    meaning: ['rice'],
    vocabulary: [{ jp: '米[こめ]', en: 'rice' }],
  },
  {
    kanji: '雨',
    meaning: ['rain'],
    vocabulary: [{ jp: '雨[あめ]', en: 'rain' }],
  },
  {
    kanji: '上',
    meaning: ['up', 'above', 'superior'],
    vocabulary: [
      { jp: '以上[いじょう]', en: 'more than' },
      { jp: '上手[じょうず]な', en: 'skillful' },
      { jp: '上[うえ]', en: 'above, on' },
      { jp: '上着[うわぎ]', en: 'a coat, a jacket' },
    ],
  },
  {
    kanji: '中',
    meaning: ['in', 'middle'],
    vocabulary: [
      { jp: '中学校[ちゅうがっこう]', en: 'a junior high school' },
      { jp: '中学生[ちゅうがくせい]', en: 'a junior high school student' },
      { jp: '午前中[ごぜんちゅう]', en: 'in the morning' },
      { jp: '世界中[せかいじゅう]', en: 'all over the world' },
      { jp: '中[なか]', en: 'inside' },
      { jp: '田中[たなか]', en: 'Tanaka (Japanese surname)' },
    ],
  },
  {
    kanji: '下',
    meaning: ['down', 'under', 'inferior'],
    vocabulary: [
      { jp: '地下鉄[ちかてつ]', en: 'a subway' },
      { jp: '下[した]', en: 'under, lower' },
      { jp: '下着[したぎ]', en: 'underwear' },
      { jp: '下手[へた]な', en: 'unskillful' },
    ],
  },
  {
    kanji: '左',
    meaning: ['left'],
    vocabulary: [{ jp: '左[ひだり]', en: 'left' }],
  },
  {
    kanji: '右',
    meaning: ['right'],
    vocabulary: [{ jp: '右[みぎ]', en: 'right' }],
  },
  {
    kanji: '明',
    meaning: ['bright', 'light'],
    vocabulary: [
      { jp: '説明[せつめい]する', en: 'to explain' },
      { jp: '明[あか]るい', en: 'bright, light' },
      { jp: '明日[あした]', en: 'tomorrow' },
    ],
  },
  {
    kanji: '休',
    meaning: ['rest'],
    vocabulary: [
      { jp: '休[やす]む', en: 'to take a rest, to be absent' },
      { jp: '休[やす]み', en: 'rest, break, holiday, absence' },
      { jp: '昼休[ひるやす]み', en: 'a lunch break' },
    ],
  },
  {
    kanji: '林',
    meaning: ['woods'],
    vocabulary: [{ jp: '林[はやし]', en: 'woods, Hayashi (Japanese surname)' }],
  },
  {
    kanji: '森',
    meaning: ['forest'],
    vocabulary: [{ jp: '森[もり]', en: 'forest, Mori (Japanese surname)' }],
  },
  {
    kanji: '好',
    meaning: ['like'],
    vocabulary: [
      { jp: '好[す]きな', en: 'to like' },
      { jp: '大好[だいす]きな', en: 'to like very much' },
    ],
  },
  // Lesson 2
  {
    kanji: '一',
    meaning: ['one'],
    vocabulary: [
      { jp: '一[いち]', en: 'one' },
      { jp: '一月[いちがつ]', en: 'January' },
      { jp: '一時[いちじ]', en: "one o'clock" },
      { jp: '一度[いちど]', en: 'once' },
      { jp: '一日[いちにち]', en: 'one day' },
      { jp: '一[ひと]月[つき]', en: 'one month' },
      { jp: '一[ひと]つ', en: 'one' },
      { jp: '一人[ひとり]', en: 'one person' },
      { jp: '一日[ついたち]', en: 'the first day of the month' },
    ],
  },
  {
    kanji: '二',
    meaning: ['two'],
    vocabulary: [
      { jp: '二[に]', en: 'two' },
      { jp: '二月[にがつ]', en: 'February' },
      { jp: '二時[にじ]', en: "two o'clock" },
      { jp: '二[ふた]つ', en: 'two' },
      { jp: '二人[ふたり]', en: 'two persons' },
      { jp: '二日[ふつか]', en: 'the second day of the month, two days' },
      {
        jp: '二十日[はつか]',
        en: 'the twentieth day of the month, twenty days',
      },
      { jp: '二十歳[はたち]', en: 'twenty years of age' },
    ],
  },
  {
    kanji: '三',
    meaning: ['three'],
    vocabulary: [
      { jp: '三[さん]', en: 'three' },
      { jp: '三月[さんがつ]', en: 'March' },
      { jp: '三時[さんじ]', en: "three o'clock" },
      { jp: '三人[さんにん]', en: 'three persons' },
      { jp: '三[みっ]つ', en: 'three' },
      { jp: '三日[みっか]', en: 'the third day of the month, three days' },
    ],
  },
  {
    kanji: '四',
    meaning: ['four'],
    vocabulary: [
      { jp: '四[し]', en: 'four' },
      { jp: '四月[しがつ]', en: 'April' },
      { jp: '四[よっ]つ', en: 'four' },
      { jp: '四日[よっか]', en: 'the fourth day of the month, four days' },
      { jp: '四時[よじ]', en: "four o'clock" },
      { jp: '四人[よにん]', en: 'four persons' },
      { jp: '四百[よんひゃく]', en: '400' },
    ],
  },
  {
    kanji: '五',
    meaning: ['five'],
    vocabulary: [
      { jp: '五[ご]', en: 'five' },
      { jp: '五月[ごがつ]', en: 'May' },
      { jp: '五時[ごじ]', en: "five o'clock" },
      { jp: '五人[ごにん]', en: 'five persons' },
      { jp: '五日[いつか]', en: 'the fifth day of the month, five days' },
      { jp: '五[いつ]つ', en: 'five' },
    ],
  },
  {
    kanji: '六',
    meaning: ['six'],
    vocabulary: [
      { jp: '六[ろく]', en: 'six' },
      { jp: '六月[ろくがつ]', en: 'June' },
      { jp: '六時[ろくじ]', en: "six o'clock" },
      { jp: '六人[ろくにん]', en: 'six persons' },
      { jp: '六百[ろっぴゃく]', en: 'six hundred' },
      { jp: '六[むっ]つ', en: 'six' },
      { jp: '六日[むいか]', en: 'the sixth day of the month, six days' },
    ],
  },
  {
    kanji: '七',
    meaning: ['seven'],
    vocabulary: [
      { jp: '七[しち]', en: 'seven' },
      { jp: '七月[しちがつ]', en: 'July' },
      { jp: '七時[しちじ]', en: "seven o'clock" },
      { jp: '七人[しちにん]', en: 'seven persons' },
      { jp: '七[なな]つ', en: 'seven' },
      { jp: '七日[なのか]', en: 'the seventh day of the month, seven days' },
    ],
  },
  {
    kanji: '八',
    meaning: ['eight'],
    vocabulary: [
      { jp: '八[はち]', en: 'eight' },
      { jp: '八月[はちがつ]', en: 'August' },
      { jp: '八時[はちじ]', en: "eight o'clock" },
      { jp: '八人[はちにん]', en: 'eight persons' },
      { jp: '八百[はっぴゃく]', en: 'eight hundred' },
      { jp: '八[やっ]つ', en: 'eight' },
      { jp: '八日[ようか]', en: 'the eighth day of the month, eight days' },
      { jp: '八百屋[やおや]', en: 'a fruit and vegetable shop' },
    ],
  },
  {
    kanji: '九',
    meaning: ['nine'],
    vocabulary: [
      { jp: '九[きゅう]', en: 'nine' },
      { jp: '九人[きゅうにん]', en: 'nine persons' },
      { jp: '九百[きゅうひゃく]', en: 'nine hundred' },
      { jp: '九月[くがつ]', en: 'September' },
      { jp: '九時[くじ]', en: "nine o'clock" },
      { jp: '九日[ここのか]', en: 'the ninth day of the month, nine days' },
      { jp: '九[ここの]つ', en: 'nine' },
    ],
  },
  {
    kanji: '十',
    meaning: ['ten'],
    vocabulary: [
      { jp: '十[じゅう]', en: 'ten' },
      { jp: '十時[じゅうじ]', en: "ten o'clock" },
      { jp: '十分[じゅっぷん]', en: 'ten minutes' },
      { jp: '十月[じゅうがつ]', en: 'October' },
      { jp: '十一月[じゅういちがつ]', en: 'November' },
      { jp: '十二月[じゅうにがつ]', en: 'December' },
      { jp: '十[とお]', en: 'ten' },
      { jp: '十日[とおか]', en: 'the tenth day of the month, ten days' },
      {
        jp: '二十日[はつか]',
        en: 'the twentieth day of the month, twenty days',
      },
      { jp: '二十歳[はたち]', en: 'twenty years of age' },
    ],
  },
  {
    kanji: '百',
    meaning: ['hundred'],
    vocabulary: [
      { jp: '百[ひゃく]', en: 'one hundred' },
      { jp: '三百[さんびゃく]', en: 'three hundred' },
      { jp: '六百[ろっぴゃく]', en: 'six hundred' },
      { jp: '八百[はっぴゃく]', en: 'eight hundred' },
      { jp: '八百屋[やおや]', en: 'a fruit and vegetable shop' },
    ],
  },
  {
    kanji: '千',
    meaning: ['thousand'],
    vocabulary: [
      { jp: '千[せん]', en: 'one thousand' },
      { jp: '千円[せんえん]', en: '1000 yen' },
      { jp: '三千[さんぜん]', en: 'three thousand' },
      { jp: '八千[はっせん]', en: 'eight thousand' },
    ],
  },
  {
    kanji: '万',
    meaning: ['ten thousand'],
    vocabulary: [
      { jp: '一万[いちまん]', en: 'ten thousand' },
      { jp: '百万[ひゃくまん]', en: 'one million' },
    ],
  },
  {
    kanji: '円',
    meaning: ['circle', 'yen'],
    vocabulary: [
      { jp: '円[えん]', en: 'a circle, yen' },
      { jp: '〜 円[えん]', en: '~yen' },
    ],
  },
  {
    kanji: '色',
    meaning: ['color'],
    vocabulary: [{ jp: '色[いろ]', en: 'color' }],
  },
  {
    kanji: '白',
    meaning: ['white'],
    vocabulary: [
      { jp: '白[しろ]', en: 'white' },
      { jp: '白[しろ]い', en: 'white' },
    ],
  },
  {
    kanji: '黒',
    meaning: ['black'],
    vocabulary: [
      { jp: '黒[くろ]', en: 'black' },
      { jp: '黒[くろ]い', en: 'black' },
    ],
  },
  {
    kanji: '赤',
    meaning: ['red'],
    vocabulary: [
      { jp: '赤[あか]', en: 'red' },
      { jp: '赤[あか]い', en: 'red' },
      { jp: '赤[あか]ちゃん', en: 'a baby' },
    ],
  },
  {
    kanji: '青',
    meaning: ['blue'],
    vocabulary: [
      { jp: '青[あお]', en: 'blue' },
      { jp: '青[あお]い', en: 'blue' },
    ],
  },
  {
    kanji: '黄',
    meaning: ['yellow'],
    vocabulary: [
      { jp: '黄色[きいろ]', en: 'yellow' },
      { jp: '黄色[きいろ]い', en: 'yellow' },
    ],
  },
  // Lesson 3
  {
    kanji: '月',
    meaning: ['moon'],
    vocabulary: [
      { jp: '月曜日[げつようび]', en: 'Monday' },
      { jp: '先月[せんげつ]', en: 'last month' },
      { jp: '毎月[まいつき]', en: 'every month' },
      { jp: '一月[いちがつ]', en: 'January' },
      { jp: '正月[しょうがつ]', en: "the New Year, New Year's Day" },
      { jp: '月[つき]', en: 'the moon' },
      { jp: '一[ひと]月[つき]', en: 'one month' },
    ],
  },
  {
    kanji: '火',
    meaning: ['fire'],
    vocabulary: [
      { jp: '火曜日[かようび]', en: 'Tuesday' },
      { jp: '火事[かじ]', en: 'a fire' },
      { jp: '火[ひ]', en: 'fire' },
    ],
  },
  {
    kanji: '水',
    meaning: ['water'],
    vocabulary: [
      { jp: '水曜日[すいようび]', en: 'Wednesday' },
      { jp: '水泳[すいえい]', en: 'swimming' },
      { jp: '水道[すいどう]', en: 'a water supply' },
      { jp: '水[みず]', en: 'water' },
    ],
  },
  {
    kanji: '木',
    meaning: ['tree'],
    vocabulary: [
      { jp: '木曜日[もくようび]', en: 'Thursday' },
      { jp: '木[き]', en: 'a tree' },
    ],
  },
  {
    kanji: '金',
    meaning: ['metal', 'gold', 'money'],
    vocabulary: [
      { jp: '金曜日[きんようび]', en: 'Friday' },
      { jp: 'お 金[かね]', en: 'money' },
      { jp: 'お 金持[かねも]ちの', en: 'rich' },
    ],
  },
  {
    kanji: '土',
    meaning: ['soil'],
    vocabulary: [
      { jp: '土曜日[どようび]', en: 'Saturday' },
      { jp: 'お 土産[みやげ]', en: 'a souvenir, a present' },
    ],
  },
  {
    kanji: '日',
    meaning: ['sun', 'day'],
    vocabulary: [
      { jp: '日曜日[にちようび]', en: 'Sunday' },
      { jp: '一日[いちにち]', en: 'one day' },
      { jp: '毎日[まいにち]', en: 'every day' },
      { jp: '日[ひ]', en: 'sun, day, date' },
      { jp: '二日[ふつか]', en: 'the second day of the month, two days' },
      { jp: '三日[みっか]', en: 'the third day of the month, three days' },
      { jp: '昨日[きのう]', en: 'yesterday' },
      { jp: '今日[きょう]', en: 'today' },
      { jp: '明日[あした]', en: 'tomorrow' },
      { jp: '一日[ついたち]', en: 'the first day of the month' },
    ],
  },
  {
    kanji: '曜',
    meaning: ['day of the week'],
    vocabulary: [{ jp: '〜 曜日[ようび]', en: 'day of the week' }],
  },
  {
    kanji: '毎',
    meaning: ['every'],
    vocabulary: [
      { jp: '毎日[まいにち]', en: 'every day' },
      { jp: '毎週[まいしゅう]', en: 'every week' },
      { jp: '毎朝[まいあさ]', en: 'every morning' },
      { jp: '毎晩[まいばん]', en: 'every evening, every night' },
    ],
  },
  {
    kanji: '週',
    meaning: ['week'],
    vocabulary: [
      { jp: '〜 週間[しゅうかん]', en: 'week' },
      { jp: '先週[せんしゅう]', en: 'last week' },
      { jp: '今週[こんしゅう]', en: 'this week' },
      { jp: '来週[らいしゅう]', en: 'next week' },
    ],
  },
  {
    kanji: '行',
    meaning: ['go', 'act'],
    vocabulary: [
      { jp: '銀行[ぎんこう]', en: 'a bank' },
      { jp: '旅行[りょこう]する', en: 'to travel, to make a trip' },
      { jp: '急行[きゅうこう]', en: 'an express (train)' },
      { jp: '飛行機[ひこうき]', en: 'an airplane' },
      { jp: '行[い]く', en: 'to go' },
      { jp: '行[おこな]う', en: 'to do, to act' },
    ],
  },
  {
    kanji: '来',
    meaning: ['come'],
    vocabulary: [
      { jp: '来週[らいしゅう]', en: 'next week' },
      { jp: '来月[らいげつ]', en: 'next month' },
      { jp: '来年[らいねん]', en: 'next year' },
      { jp: '来[く]る', en: 'to come' },
    ],
  },
  {
    kanji: '帰',
    meaning: ['return'],
    vocabulary: [{ jp: '帰[かえ]る', en: 'to return, to come back' }],
  },
  {
    kanji: '始',
    meaning: ['begin'],
    vocabulary: [
      { jp: '始[はじ]まる', en: 'to begin, to start' },
      { jp: '始[はじ]める', en: 'to begin, to start' },
    ],
  },
  {
    kanji: '終',
    meaning: ['end'],
    vocabulary: [{ jp: '終[お]わる', en: 'to end, to finish' }],
  },
  {
    kanji: '起',
    meaning: ['rise'],
    vocabulary: [
      { jp: '起[お]きる', en: 'to get up, to wake up' },
      { jp: '起[お]こす', en: 'to wake' },
    ],
  },
  {
    kanji: '寝',
    meaning: ['sleep'],
    vocabulary: [{ jp: '寝[ね]る', en: 'to go to bed' }],
  },
  {
    kanji: '働',
    meaning: ['work'],
    vocabulary: [{ jp: '働[はたら]く', en: 'to work' }],
  },
  {
    kanji: '勉',
    meaning: ['endeavor'],
    vocabulary: [{ jp: '勉強[べんきょう]する', en: 'to study' }],
  },
  {
    kanji: '強',
    meaning: ['strong', 'endeavor'],
    vocabulary: [
      { jp: '勉強[べんきょう]する', en: 'to study' },
      { jp: '強[つよ]い', en: 'strong' },
    ],
  },
  // Lesson 4
  {
    kanji: '私',
    meaning: ['I'],
    vocabulary: [{ jp: '私[わたし]', en: 'I' }],
  },
  {
    kanji: '家',
    meaning: ['house'],
    vocabulary: [
      { jp: '家族[かぞく]', en: 'a family' },
      { jp: '家庭[かてい]', en: 'home' },
      { jp: '家内[かない]', en: '(my) wife' },
      { jp: '家[いえ]', en: 'a house' },
    ],
  },
  {
    kanji: '族',
    meaning: ['family'],
    vocabulary: [{ jp: '家族[かぞく]', en: 'a family' }],
  },
  {
    kanji: '父',
    meaning: ['father'],
    vocabulary: [
      { jp: '祖父[そふ]', en: 'grandfather' },
      { jp: '父[ちち]', en: 'father' },
      { jp: 'お 父[とう]さん', en: 'father' },
      { jp: '伯父[おじ]', en: "uncle (older than one's parent)" },
      { jp: '叔父[おじ]', en: "uncle (younger than one's parent)" },
    ],
  },
  {
    kanji: '母',
    meaning: ['mother'],
    vocabulary: [
      { jp: '祖母[そぼ]', en: 'grandmother' },
      { jp: '母[はは]', en: 'mother' },
      { jp: 'お 母[かあ]さん', en: 'mother' },
      { jp: '伯母[おば]', en: "aunt (older than one's parent)" },
      { jp: '叔母[おば]', en: "aunt (younger than one's parent)" },
    ],
  },
  {
    kanji: '兄',
    meaning: ['older brother'],
    vocabulary: [
      { jp: '兄弟[きょうだい]', en: 'brothers and sisters' },
      { jp: '兄[あに]', en: 'older brother' },
      { jp: 'お 兄[にい]さん', en: 'older brother' },
    ],
  },
  {
    kanji: '弟',
    meaning: ['younger brother'],
    vocabulary: [
      { jp: '兄弟[きょうだい]', en: 'brothers and sisters' },
      { jp: '弟[おとうと]', en: 'younger brother' },
    ],
  },
  {
    kanji: '姉',
    meaning: ['older sister'],
    vocabulary: [
      { jp: '姉[あね]', en: 'older sister' },
      { jp: 'お 姉[ねえ]さん', en: 'older sister' },
    ],
  },
  {
    kanji: '妹',
    meaning: ['younger sister'],
    vocabulary: [{ jp: '妹[いもうと]', en: 'younger sister' }],
  },
  {
    kanji: '主',
    meaning: ['master', 'main'],
    vocabulary: [
      { jp: '主人[しゅじん]', en: 'master, (my) husband' },
      { jp: '主婦[しゅふ]', en: 'a housewife' },
      { jp: 'ご 主人[しゅじん]', en: "one's husband" },
    ],
  },
  {
    kanji: '内',
    meaning: ['inside'],
    vocabulary: [
      { jp: '家内[かない]', en: '(my) wife' },
      { jp: '案内[あんない]する', en: 'to guide' },
      { jp: '以内[いない]', en: 'within' },
    ],
  },
  {
    kanji: '奥',
    meaning: ['deep inside', 'interior'],
    vocabulary: [{ jp: '奥[おく]さん', en: "(someone else's) wife" }],
  },
  {
    kanji: '仕',
    meaning: ['serve', 'do'],
    vocabulary: [
      { jp: '仕事[しごと]', en: 'work, job, business' },
      { jp: '仕方[しかた]', en: 'way, method' },
    ],
  },
  {
    kanji: '事',
    meaning: ['affair', 'matter'],
    vocabulary: [
      { jp: '食事[しょくじ]', en: 'a meal' },
      { jp: '火事[かじ]', en: 'a fire' },
      { jp: '仕事[しごと]', en: 'work, job, business' },
      { jp: '用事[ようじ]', en: 'business, engagement' },
      { jp: '大事[だいじ]な', en: 'important' },
    ],
  },
  {
    kanji: '生',
    meaning: ['life'],
    vocabulary: [
      { jp: '先生[せんせい]', en: 'a teacher' },
      { jp: '学生[がくせい]', en: 'a student' },
      { jp: '生徒[せいと]', en: 'a pupil, a student' },
      { jp: '一生懸命[いっしょうけんめい](に)', en: "with all one's effort" },
      { jp: '誕生日[たんじょうび]', en: 'birthday' },
      { jp: '生[い]きる', en: 'to live' },
      { jp: '生[う]まれる', en: 'to be born' },
    ],
  },
  {
    kanji: '先',
    meaning: ['ahead'],
    vocabulary: [
      { jp: '先生[せんせい]', en: 'a teacher' },
      { jp: '先月[せんげつ]', en: 'last month' },
      { jp: '先週[せんしゅう]', en: 'last week' },
      { jp: '先[さき]に', en: 'previously, beforehand' },
    ],
  },
  {
    kanji: '学',
    meaning: ['study'],
    vocabulary: [
      { jp: '学生[がくせい]', en: 'a student' },
      { jp: '学校[がっこう]', en: 'a school' },
      {
        jp: '留学生[りゅうがくせい]',
        en: 'an international student, a student studying abroad',
      },
      { jp: '大学[だいがく]', en: 'a university, a college' },
    ],
  },
  {
    kanji: '会',
    meaning: ['meet', 'society'],
    vocabulary: [
      { jp: '会社[かいしゃ]', en: 'a company' },
      { jp: '会話[かいわ]', en: 'conversation' },
      { jp: '会議[かいぎ]', en: 'a conference, a meeting' },
      { jp: '会[あ]う', en: 'to meet' },
    ],
  },
  {
    kanji: '社',
    meaning: ['shrine', 'company'],
    vocabulary: [
      { jp: '会社[かいしゃ]', en: 'a company' },
      { jp: '神社[じんじゃ]', en: 'Shinto shrine' },
      { jp: '社会[しゃかい]', en: 'society' },
    ],
  },
  {
    kanji: '員',
    meaning: ['member'],
    vocabulary: [
      { jp: '会社員[かいしゃいん]', en: 'a company employee' },
      {
        jp: '社員[しゃいん]',
        en: 'an employee, a member of the staff (of a company)',
      },
      { jp: '店員[てんいん]', en: 'a store clerk' },
      { jp: '駅員[えきいん]', en: 'a station employee' },
    ],
  },
  // Lesson 5
  {
    kanji: '時',
    meaning: ['time'],
    vocabulary: [
      { jp: '時間[じかん]', en: 'time' },
      { jp: '〜 時間[じかん]', en: 'hour(s)' },
      { jp: '〜 時[じ]', en: "~o'clock" },
      { jp: '時[とき]', en: 'time' },
      { jp: '時計[とけい]', en: 'a clock, a watch' },
    ],
  },
  {
    kanji: '分',
    meaning: ['divide', 'part', 'minute'],
    vocabulary: [
      { jp: '〜 分[ふん]', en: 'minute(s)' },
      { jp: '半分[はんぶん]', en: 'half' },
      { jp: '自分[じぶん]で', en: 'by oneself' },
      { jp: '分[わ]かる', en: 'to understand' },
    ],
  },
  {
    kanji: '午',
    meaning: ['noon'],
    vocabulary: [
      { jp: '午前[ごぜん]', en: 'a.m., morning' },
      { jp: '午後[ごご]', en: 'p.m., afternoon' },
    ],
  },
  {
    kanji: '前',
    meaning: ['front', 'before'],
    vocabulary: [
      { jp: '午前[ごぜん]', en: 'a.m., morning' },
      { jp: '午前中[ごぜんちゅう]', en: 'in the morning' },
      { jp: '前[まえ]', en: 'front, before' },
      { jp: '名前[なまえ]', en: 'a name' },
      { jp: '〜 年前[ねんまえ]', en: '~years ago' },
    ],
  },
  {
    kanji: '後',
    meaning: ['back', 'after'],
    vocabulary: [
      { jp: '午後[ごご]', en: 'p.m., afternoon' },
      { jp: '最後[さいご]の', en: 'last, final' },
      { jp: '後[あと]で', en: 'after' },
      { jp: '後[うし]ろ', en: 'back, behind' },
    ],
  },
  {
    kanji: '間',
    meaning: ['interval', 'between'],
    vocabulary: [
      { jp: '時間[じかん]', en: 'time' },
      { jp: '〜 時間[じかん]', en: 'hour' },
      { jp: 'この 間[あいだ]', en: 'the other day' },
      { jp: '間[あいだ]', en: 'interval, between' },
      { jp: '間[ま]に 合[あ]う', en: 'to be in time' },
    ],
  },
  {
    kanji: '半',
    meaning: ['half'],
    vocabulary: [
      { jp: '〜 時半[じはん]', en: 'half past' },
      { jp: '半分[はんぶん]の', en: 'half' },
    ],
  },
  {
    kanji: '朝',
    meaning: ['morning'],
    vocabulary: [
      { jp: '朝[あさ]', en: 'morning' },
      { jp: '朝[あさ]ご 飯[はん]', en: 'breakfast' },
      { jp: '毎朝[まいあさ]', en: 'every morning' },
      { jp: '今朝[けさ]', en: 'this morning' },
    ],
  },
  {
    kanji: '昼',
    meaning: ['daytime'],
    vocabulary: [
      { jp: '昼[ひる]', en: 'daytime' },
      { jp: '昼間[ひるま]', en: 'daytime' },
      { jp: '昼[ひる]ご 飯[はん]', en: 'lunch' },
      { jp: '昼休[ひるやす]み', en: 'a lunch break' },
    ],
  },
  {
    kanji: '晩',
    meaning: ['evening', 'late'],
    vocabulary: [
      { jp: '晩[ばん]', en: 'evening' },
      { jp: '今晩[こんばん]', en: 'this evening, tonight' },
      { jp: '毎晩[まいばん]', en: 'every evening, every night' },
      { jp: '晩[ばん]ご 飯[はん]', en: 'supper, dinner' },
    ],
  },
  {
    kanji: '今',
    meaning: ['present', 'now'],
    vocabulary: [
      { jp: '今週[こんしゅう]', en: 'this week' },
      { jp: '今月[こんげつ]', en: 'this month' },
      { jp: '今度[こんど]', en: 'this time, next time' },
      { jp: '今[いま]', en: 'now' },
      { jp: '今日[きょう]', en: 'today' },
      { jp: '今晩[こんばん]', en: 'this evening, tonight' },
      { jp: '今朝[けさ]', en: 'this morning' },
      { jp: '今年[ことし]', en: 'this year' },
    ],
  },
  {
    kanji: '去',
    meaning: ['go away'],
    vocabulary: [{ jp: '去年[きょねん]', en: 'last year' }],
  },
  {
    kanji: '年',
    meaning: ['year'],
    vocabulary: [
      { jp: '〜 年[ねん]', en: 'year' },
      { jp: '去年[きょねん]', en: 'last year' },
      { jp: '来年[らいねん]', en: 'next year' },
      { jp: '毎年[まいねん]', en: 'every year' },
      { jp: '今年[ことし]', en: 'this year' },
      { jp: '年[とし]', en: 'year, age' },
      { jp: '毎年[まいとし]', en: 'every year' },
    ],
  },
  {
    kanji: '夕',
    meaning: ['evening'],
    vocabulary: [{ jp: '夕方[ゆうがた]', en: 'evening' }],
  },
  {
    kanji: '方',
    meaning: ['direction', 'way'],
    vocabulary: [
      { jp: '両方[りょうほう]の', en: 'both' },
      { jp: 'この 方[かた]', en: 'this person (honorific)' },
      { jp: '夕方[ゆうがた]', en: 'evening' },
      { jp: '仕方[しかた]', en: 'a way, a method' },
      { jp: '〜 方[かた]', en: 'how to' },
    ],
  },
  {
    kanji: '春',
    meaning: ['spring'],
    vocabulary: [
      { jp: '春[はる]', en: 'spring' },
      { jp: '春休[はるやす]み', en: 'the spring vacation' },
    ],
  },
  {
    kanji: '夏',
    meaning: ['summer'],
    vocabulary: [
      { jp: '夏[なつ]', en: 'summer' },
      { jp: '夏休[なつやす]み', en: 'the summer vacation' },
    ],
  },
  {
    kanji: '秋',
    meaning: ['autumn', 'fall'],
    vocabulary: [{ jp: '秋[あき]', en: 'autumn, fall' }],
  },
  {
    kanji: '冬',
    meaning: ['winter'],
    vocabulary: [
      { jp: '冬[ふゆ]', en: 'winter' },
      { jp: '冬休[ふゆやす]み', en: 'the winter vacation' },
    ],
  },
  {
    kanji: '夜',
    meaning: ['night'],
    vocabulary: [
      { jp: '今夜[こんや]', en: 'this evening, tonight' },
      { jp: '夜[よる]', en: 'night' },
    ],
  },
  // Lesson 6
  {
    kanji: '食',
    meaning: ['eat', 'food'],
    vocabulary: [
      { jp: '食事[しょくじ]', en: 'a meal' },
      { jp: '食堂[しょくどう]', en: 'a dining hall, a restaurant' },
      { jp: '食品[しょくひん]', en: 'food' },
      { jp: '食[た]べる', en: 'to eat' },
      { jp: '食[た]べ 物[もの]', en: 'food' },
    ],
  },
  {
    kanji: '飲',
    meaning: ['drink'],
    vocabulary: [
      { jp: '飲[の]む', en: 'to drink' },
      { jp: '飲[の]み 物[もの]', en: 'a drink, a beverage' },
    ],
  },
  {
    kanji: '買',
    meaning: ['buy'],
    vocabulary: [
      { jp: '買[か]う', en: 'to buy' },
      { jp: '買[か]い 物[もの]', en: 'shopping' },
    ],
  },
  {
    kanji: '見',
    meaning: ['see'],
    vocabulary: [
      { jp: '意見[いけん]', en: 'opinion' },
      { jp: '見[み]る', en: 'to see, to look at' },
      { jp: '見[み]える', en: 'to be seen' },
      { jp: '見[み]せる', en: 'to show' },
    ],
  },
  {
    kanji: '聞',
    meaning: ['hear'],
    vocabulary: [
      { jp: '新聞[しんぶん]', en: 'a newspaper' },
      { jp: '新聞社[しんぶんしゃ]', en: 'a newspaper company' },
      { jp: '聞[き]く', en: 'to hear' },
      { jp: '聞[き]こえる', en: 'to be heard' },
    ],
  },
  {
    kanji: '何',
    meaning: ['what'],
    vocabulary: [
      { jp: '何[なに]', en: 'what' },
      { jp: '何[なん]', en: 'what' },
      { jp: '何時[なんじ]', en: 'what time' },
      { jp: '何曜日[なんようび]', en: 'what day of the week' },
    ],
  },
  {
    kanji: '茶',
    meaning: ['tea'],
    vocabulary: [
      { jp: 'お 茶[ちゃ]', en: 'tea' },
      { jp: '紅茶[こうちゃ]', en: 'black tea' },
      { jp: '茶色[ちゃいろ]', en: 'brown' },
      { jp: '喫茶店[きっさてん]', en: 'a coffee shop, a tea house' },
    ],
  },
  {
    kanji: '酒',
    meaning: ['alcoholic drinks'],
    vocabulary: [
      { jp: 'お 酒[さけ]', en: 'alcoholic drink, sake (Japanese rice wine)' },
    ],
  },
  {
    kanji: '肉',
    meaning: ['flesh', 'meat'],
    vocabulary: [
      { jp: '肉[にく]', en: 'meat' },
      { jp: '牛肉[ぎゅうにく]', en: 'beef' },
      { jp: '豚肉[ぶたにく]', en: 'pork' },
      { jp: 'とり 肉[にく]', en: 'chicken' },
    ],
  },
  {
    kanji: '牛',
    meaning: ['cattle'],
    vocabulary: [
      { jp: '牛肉[ぎゅうにく]', en: 'beef' },
      { jp: '牛乳[ぎゅうにゅう]', en: 'milk' },
    ],
  },
  {
    kanji: '魚',
    meaning: ['fish'],
    vocabulary: [{ jp: '魚[さかな]', en: 'a fish' }],
  },
  {
    kanji: '鳥',
    meaning: ['bird'],
    vocabulary: [
      { jp: '鳥[とり]', en: 'a bird' },
      { jp: '小鳥[ことり]', en: 'a small bird' },
    ],
  },
  {
    kanji: '犬',
    meaning: ['dog'],
    vocabulary: [{ jp: '犬[いぬ]', en: 'a dog' }],
  },
  {
    kanji: '音',
    meaning: ['sound'],
    vocabulary: [
      { jp: '音楽[おんがく]', en: 'music' },
      { jp: '発音[はつおん]', en: 'pronunciation' },
      { jp: '音読[おんよ]み', en: 'onyomi reading' },
      { jp: '音[おと]', en: 'sound' },
    ],
  },
  {
    kanji: '楽',
    meaning: ['pleasure', 'comfortable'],
    vocabulary: [
      { jp: '音楽[おんがく]', en: 'music' },
      { jp: '楽[たの]しい', en: 'pleasant, enjoyable' },
      { jp: '楽[たの]しむ', en: 'to enjoy' },
    ],
  },
  {
    kanji: '花',
    meaning: ['flower'],
    vocabulary: [
      { jp: '花[か]びん', en: 'a flower vase' },
      { jp: '花屋[はなや]', en: 'a florist' },
      { jp: '花[はな]', en: 'a flower' },
      { jp: '花見[はなみ]', en: 'flower (cherry blossom) viewing' },
    ],
  },
  {
    kanji: '映',
    meaning: ['reflect'],
    vocabulary: [
      { jp: '映画[えいが]', en: 'a movie, a cinema' },
      { jp: '映画館[えいがかん]', en: 'a movie theater' },
    ],
  },
  {
    kanji: '画',
    meaning: ['picture', 'plan'],
    vocabulary: [
      { jp: '映画[えいが]', en: 'a movie, a cinema' },
      { jp: '計画[けいかく]する', en: 'to plan' },
      { jp: '漫画[まんが]', en: 'comics' },
      { jp: '画数[かくすう]', en: 'the number of strokes' },
    ],
  },
  {
    kanji: '写',
    meaning: ['copy'],
    vocabulary: [
      { jp: '写真[しゃしん]', en: 'a photograph' },
      { jp: '写[うつ]す', en: 'to copy, to take a picture' },
    ],
  },
  {
    kanji: '真',
    meaning: ['true'],
    vocabulary: [
      { jp: '写真[しゃしん]', en: 'a photograph' },
      { jp: '真[ま]ん 中[なか]', en: 'the center, the middle' },
      { jp: '真[ま]っすぐな', en: 'straight' },
    ],
  },
  // Lesson 7
  {
    kanji: '立',
    meaning: ['stand'],
    vocabulary: [
      { jp: '立[た]つ', en: 'to stand up' },
      { jp: '立[た]てる', en: 'to stand up' },
    ],
  },
  {
    kanji: '座',
    meaning: ['sit'],
    vocabulary: [{ jp: '座[すわ]る', en: 'to sit down' }],
  },
  {
    kanji: '答',
    meaning: ['answer'],
    vocabulary: [
      { jp: '答[こた]え', en: 'an answer' },
      { jp: '答[こた]える', en: 'to answer' },
    ],
  },
  {
    kanji: '読',
    meaning: ['read'],
    vocabulary: [
      { jp: '読[よ]む', en: 'to read' },
      { jp: '音読[おんよ]み', en: 'onyomi reading' },
      { jp: '訓読[くんよ]み', en: 'kunyomi reading' },
    ],
  },
  {
    kanji: '書',
    meaning: ['write', 'book'],
    vocabulary: [
      { jp: '辞書[じしょ]', en: 'a dictionary' },
      { jp: '図書館[としょかん]', en: 'a library' },
      { jp: '書[か]く', en: 'to write' },
    ],
  },
  {
    kanji: '待',
    meaning: ['wait'],
    vocabulary: [
      { jp: '招待[しょうたい]する', en: 'to invite' },
      { jp: '待[ま]つ', en: 'to wait' },
    ],
  },
  {
    kanji: '度',
    meaning: ['degree', 'time'],
    vocabulary: [
      { jp: '〜 度[ど]', en: 'degree(s), time(s)' },
      { jp: '今度[こんど]', en: 'this time, next time' },
      { jp: '支度[したく]', en: 'preparation' },
      { jp: '一度[いちど]', en: 'once' },
    ],
  },
  {
    kanji: '話',
    meaning: ['speak'],
    vocabulary: [
      { jp: '電話[でんわ]', en: 'a telephone' },
      { jp: '会話[かいわ]', en: 'conversation' },
      { jp: '世話[せわ]', en: 'help, care' },
      { jp: '話[はな]す', en: 'to speak' },
      { jp: '話[はなし]', en: 'a talk, speech' },
    ],
  },
  {
    kanji: '語',
    meaning: ['language', 'word'],
    vocabulary: [
      { jp: '日本語[にほんご]', en: 'Japanese' },
      { jp: '英語[えいご]', en: 'English' },
      { jp: 'フランス 語[ご]', en: 'French' },
    ],
  },
  {
    kanji: '英',
    meaning: ['distinguished', 'England'],
    vocabulary: [{ jp: '英語[えいご]', en: 'English' }],
  },
  {
    kanji: '教',
    meaning: ['teach'],
    vocabulary: [
      { jp: '教室[きょうしつ]', en: 'a classroom' },
      { jp: '教育[きょういく]', en: 'education' },
      { jp: '教[おし]える', en: 'to teach' },
    ],
  },
  {
    kanji: '習',
    meaning: ['learn'],
    vocabulary: [
      { jp: '練習[れんしゅう]する', en: 'to practice' },
      { jp: '予習[よしゅう]する', en: 'to prepare for lessons' },
      { jp: '復習[ふくしゅう]する', en: 'to review' },
      { jp: '習[なら]う', en: 'to learn' },
    ],
  },
  {
    kanji: '貸',
    meaning: ['lend'],
    vocabulary: [{ jp: '貸[か]す', en: 'to lend, to rent' }],
  },
  {
    kanji: '借',
    meaning: ['borrow'],
    vocabulary: [{ jp: '借[か]りる', en: 'to borrow' }],
  },
  {
    kanji: '送',
    meaning: ['send'],
    vocabulary: [
      { jp: '放送[ほうそう]', en: 'broadcasting' },
      { jp: '送[おく]る', en: 'to send' },
    ],
  },
  {
    kanji: '本',
    meaning: ['origin', 'book'],
    vocabulary: [
      { jp: '本[ほん]', en: 'a book' },
      { jp: '日本[にほん]', en: 'Japan' },
      { jp: '日本語[にほんご]', en: 'Japanese' },
      { jp: '〜 本[ほん]', en: 'counter for thin and long things' },
    ],
  },
  {
    kanji: '漢',
    meaning: ['Chinese'],
    vocabulary: [{ jp: '漢字[かんじ]', en: 'kanji' }],
  },
  {
    kanji: '字',
    meaning: ['character'],
    vocabulary: [
      { jp: '字[じ]', en: 'a character, a letter' },
      { jp: '漢字[かんじ]', en: 'kanji' },
    ],
  },
  {
    kanji: '発',
    meaning: ['start', 'emit'],
    vocabulary: [{ jp: '発音[はつおん]', en: 'pronunciation' }],
  },
  {
    kanji: '友',
    meaning: ['friend'],
    vocabulary: [{ jp: '友達[ともだち]', en: 'a friend' }],
  },
  // Lesson 8
  {
    kanji: '大',
    meaning: ['big'],
    vocabulary: [
      { jp: '大学[だいがく]', en: 'a university' },
      { jp: '大使館[たいしかん]', en: 'an embassy' },
      { jp: '大切[たいせつ]な', en: 'important' },
      { jp: '大[おお]きい', en: 'big, large' },
      { jp: '大人[おとな]', en: 'an adult' },
    ],
  },
  {
    kanji: '小',
    meaning: ['small'],
    vocabulary: [
      { jp: '小学校[しょうがっこう]', en: 'an elementary (a primary) school' },
      { jp: '小学生[しょうがくせい]', en: 'a schoolchild' },
      { jp: '小説[しょうせつ]', en: 'a novel' },
      { jp: '小[ちい]さい', en: 'small' },
      { jp: '小鳥[ことり]', en: 'a small bird' },
    ],
  },
  {
    kanji: '高',
    meaning: ['high'],
    vocabulary: [
      { jp: '高校[こうこう]', en: 'a senior high school' },
      { jp: '高校生[こうこうせい]', en: 'a senior high school student' },
      { jp: '高[たか]い', en: 'high, expensive' },
    ],
  },
  {
    kanji: '低',
    meaning: ['low'],
    vocabulary: [{ jp: '低[ひく]い', en: 'low' }],
  },
  {
    kanji: '安',
    meaning: ['peaceful', 'cheap'],
    vocabulary: [
      { jp: '安全[あんぜん]な', en: 'safe' },
      { jp: '安心[あんしん]する', en: 'to be relieved' },
      { jp: '安[やす]い', en: 'cheap, inexpensive' },
    ],
  },
  {
    kanji: '新',
    meaning: ['new'],
    vocabulary: [
      { jp: '新聞[しんぶん]', en: 'a newspaper' },
      { jp: '新聞社[しんぶんしゃ]', en: 'a newspaper company' },
      { jp: '新[あたら]しい', en: 'new' },
    ],
  },
  {
    kanji: '古',
    meaning: ['old'],
    vocabulary: [{ jp: '古[ふる]い', en: 'old' }],
  },
  {
    kanji: '多',
    meaning: ['many'],
    vocabulary: [{ jp: '多[おお]い', en: 'many, much, a lot of' }],
  },
  {
    kanji: '少',
    meaning: ['little'],
    vocabulary: [
      { jp: '少[すく]ない', en: 'little, few' },
      { jp: '少[すこ]し', en: 'a little, a few' },
    ],
  },
  {
    kanji: '正',
    meaning: ['right'],
    vocabulary: [
      { jp: '正月[しょうがつ]', en: "the New Year, New Year's Day" },
      { jp: '正[ただ]しい', en: 'right, correct' },
    ],
  },
  {
    kanji: '長',
    meaning: ['long', 'chief'],
    vocabulary: [
      { jp: '校長[こうちょう]', en: 'a principal' },
      { jp: '社長[しゃちょう]', en: 'the president (of a company)' },
      { jp: '学長[がくちょう]', en: 'a president (of a university)' },
      { jp: '長[なが]い', en: 'long' },
    ],
  },
  {
    kanji: '短',
    meaning: ['short'],
    vocabulary: [{ jp: '短[みじか]い', en: 'short' }],
  },
  {
    kanji: '軽',
    meaning: ['light'],
    vocabulary: [{ jp: '軽[かる]い', en: 'light' }],
  },
  {
    kanji: '重',
    meaning: ['heavy'],
    vocabulary: [{ jp: '重[おも]い', en: 'heavy' }],
  },
  {
    kanji: '弱',
    meaning: ['weak'],
    vocabulary: [{ jp: '弱[よわ]い', en: 'weak' }],
  },
  {
    kanji: '暑',
    meaning: ['hot'],
    vocabulary: [{ jp: '暑[あつ]い', en: 'hot' }],
  },
  {
    kanji: '寒',
    meaning: ['cold'],
    vocabulary: [{ jp: '寒[さむ]い', en: 'cold' }],
  },
  {
    kanji: '暗',
    meaning: ['dark'],
    vocabulary: [{ jp: '暗[くら]い', en: 'dark' }],
  },
  {
    kanji: '早',
    meaning: ['early'],
    vocabulary: [{ jp: '早[はや]い', en: 'early' }],
  },
  {
    kanji: '悪',
    meaning: ['bad'],
    vocabulary: [{ jp: '悪[わる]い', en: 'bad' }],
  },
  // Lesson 9
  {
    kanji: '元',
    meaning: ['origin'],
    vocabulary: [{ jp: '元気[げんき]な', en: 'healthy, fine' }],
  },
  {
    kanji: '気',
    meaning: ['spirit'],
    vocabulary: [
      { jp: '元気[げんき]な', en: 'healthy, fine' },
      { jp: '病気[びょうき]の', en: 'sick, ill' },
      { jp: '気持[きも]ち', en: 'feelings, mood' },
      { jp: '天気[てんき]', en: 'weather' },
      { jp: '気分[きぶん]', en: 'feelings, mood' },
      { jp: '電気[でんき]', en: 'electricity, an electric light' },
    ],
  },
  {
    kanji: '有',
    meaning: ['own'],
    vocabulary: [{ jp: '有名[ゆうめい]な', en: 'famous' }],
  },
  {
    kanji: '名',
    meaning: ['name'],
    vocabulary: [
      { jp: '有名[ゆうめい]な', en: 'famous' },
      { jp: '名前[なまえ]', en: 'name' },
    ],
  },
  {
    kanji: '同',
    meaning: ['same'],
    vocabulary: [{ jp: '同[おな]じ', en: 'same' }],
  },
  {
    kanji: '親',
    meaning: ['parent', 'intimate'],
    vocabulary: [
      { jp: '親切[しんせつ]な', en: 'kind' },
      { jp: '両親[りょうしん]', en: 'parents' },
    ],
  },
  {
    kanji: '切',
    meaning: ['cut'],
    vocabulary: [
      { jp: '親切[しんせつ]な', en: 'kind' },
      { jp: '大切[たいせつ]な', en: 'important' },
      { jp: '切[き]る', en: 'to cut' },
      { jp: '切手[きって]', en: 'stamp' },
      { jp: '切符[きっぷ]', en: 'ticket' },
      { jp: '切[き]れる', en: 'to cut' },
    ],
  },
  {
    kanji: '便',
    meaning: ['letter', 'convenient'],
    vocabulary: [
      { jp: '便利[べんり]な', en: 'convenient' },
      { jp: '不便[ふべん]な', en: 'inconvenient' },
      { jp: '郵便局[ゆうびんきょく]', en: 'a post office' },
    ],
  },
  {
    kanji: '利',
    meaning: ['advantage', 'profit'],
    vocabulary: [
      { jp: '便利[べんり]な', en: 'convenient' },
      { jp: '利用[りよう]する', en: 'to use' },
    ],
  },
  {
    kanji: '不',
    meaning: ['un-', 'in-', 'dis-'],
    vocabulary: [{ jp: '不便[ふべん]な', en: 'inconvenient' }],
  },
  {
    kanji: '研',
    meaning: ['sharpen', 'research'],
    vocabulary: [
      { jp: '研究[けんきゅう]する', en: 'to research' },
      {
        jp: '研究室[けんきゅうしつ]',
        en: "a laboratory, an (a professor's) office",
      },
    ],
  },
  {
    kanji: '究',
    meaning: ['reach the extreme', 'master'],
    vocabulary: [
      { jp: '研究[けんきゅう]する', en: 'to research' },
      {
        jp: '研究室[けんきゅうしつ]',
        en: "a laboratory, an (a professor's) office",
      },
    ],
  },
  {
    kanji: '質',
    meaning: ['question', 'quality'],
    vocabulary: [{ jp: '質問[しつもん]', en: 'a question' }],
  },
  {
    kanji: '問',
    meaning: ['question'],
    vocabulary: [
      { jp: '質問[しつもん]', en: 'a question' },
      { jp: '問題[もんだい]', en: 'a problem, a question' },
    ],
  },
  {
    kanji: '文',
    meaning: ['letter', 'sentence'],
    vocabulary: [
      { jp: '作文[さくぶん]', en: 'a composition' },
      { jp: '文法[ぶんぽう]', en: 'grammar' },
      { jp: '文章[ぶんしょう]', en: 'a sentence' },
      { jp: '文化[ぶんか]', en: 'culture' },
    ],
  },
  {
    kanji: '洗',
    meaning: ['wash'],
    vocabulary: [
      { jp: '洗濯[せんたく]する', en: 'to wash (clothes)' },
      { jp: '洗[あら]う', en: 'to wash' },
      { jp: 'お 手洗[てあら]い', en: 'a toilet' },
    ],
  },
  {
    kanji: '濯',
    meaning: ['wash', 'rinse'],
    vocabulary: [{ jp: '洗濯[せんたく]する', en: 'to wash (clothes)' }],
  },
  {
    kanji: '注',
    meaning: ['pour', 'concentrate'],
    vocabulary: [
      { jp: '注意[ちゅうい]する', en: 'to pay attention, to advise' },
      { jp: '注射[ちゅうしゃ]', en: 'an injection' },
    ],
  },
  {
    kanji: '意',
    meaning: ['mind'],
    vocabulary: [
      { jp: '注意[ちゅうい]する', en: 'to pay attention, to advise' },
      { jp: '用意[ようい]する', en: 'to prepare' },
      { jp: '意味[いみ]', en: 'meaning' },
      { jp: '意見[いけん]', en: 'opinion' },
    ],
  },
  {
    kanji: '旅',
    meaning: ['travel'],
    vocabulary: [
      { jp: '旅行[りょこう]する', en: 'to travel, to make a trip' },
      { jp: '旅館[りょかん]', en: 'a Japanese inn' },
    ],
  },
  // Lesson 10
  {
    kanji: '言',
    meaning: ['say', 'word'],
    vocabulary: [
      { jp: '言[い]う', en: 'to say' },
      { jp: '言葉[ことば]', en: 'word, language' },
    ],
  },
  {
    kanji: '計',
    meaning: ['calculate', 'plan'],
    vocabulary: [
      { jp: '時計[とけい]', en: 'a clock, a watch' },
      { jp: '計画[けいかく]する', en: 'to plan' },
    ],
  },
  {
    kanji: '池',
    meaning: ['pond'],
    vocabulary: [{ jp: '池[いけ]', en: 'a pond' }],
  },
  {
    kanji: '洋',
    meaning: ['ocean', 'Western'],
    vocabulary: [
      { jp: '洋服[ようふく]', en: 'Western clothes' },
      { jp: '洋室[ようしつ]', en: 'a Western-style room' },
    ],
  },
  {
    kanji: '和',
    meaning: ['peace', 'Japanese'],
    vocabulary: [
      { jp: '和室[わしつ]', en: 'a Japanese-style room' },
      { jp: '平和[へいわ]', en: 'peace' },
    ],
  },
  {
    kanji: '代',
    meaning: ['substitution', 'generation', 'charge'],
    vocabulary: [
      { jp: '時代[じだい]', en: 'an age, an era' },
      { jp: '〜 代[だい]', en: '~charge, fee' },
      { jp: '代[か]わりに', en: 'in place of, instead of' },
    ],
  },
  {
    kanji: '持',
    meaning: ['hold', 'have'],
    vocabulary: [
      { jp: '持[も]つ', en: 'to have, to hold' },
      { jp: 'お 金持[かねも]ちの', en: 'rich' },
      { jp: '気持[きも]ち', en: 'feelings, mood' },
      { jp: '持[も]って 行[い]く', en: 'to take' },
      { jp: '持[も]って 来[く]る', en: 'to bring' },
    ],
  },
  {
    kanji: '押',
    meaning: ['push'],
    vocabulary: [{ jp: '押[お]す', en: 'to push' }],
  },
  {
    kanji: '引',
    meaning: ['draw'],
    vocabulary: [
      { jp: '引[ひ]く', en: 'to draw, to pull' },
      { jp: '字引[じびき]', en: 'a dictionary' },
      { jp: '引[ひ]き 出[だ]し', en: 'a drawer, withdrawal (of money)' },
      { jp: '引[ひ]っ 越[こ]す', en: 'to move to a new residence' },
    ],
  },
  {
    kanji: '紙',
    meaning: ['paper'],
    vocabulary: [
      { jp: '紙[かみ]', en: 'paper' },
      { jp: '手紙[てがみ]', en: 'a letter' },
    ],
  },
  {
    kanji: '服',
    meaning: ['clothes'],
    vocabulary: [
      { jp: '服[ふく]', en: 'clothes' },
      { jp: '洋服[ようふく]', en: 'Western clothes' },
    ],
  },
  {
    kanji: '取',
    meaning: ['take'],
    vocabulary: [{ jp: '取[と]る', en: 'to take' }],
  },
  {
    kanji: '歌',
    meaning: ['song'],
    vocabulary: [
      { jp: '歌[うた]', en: 'a song' },
      { jp: '歌[うた]う', en: 'to sing' },
    ],
  },
  {
    kanji: '特',
    meaning: ['special'],
    vocabulary: [
      { jp: '特別[とくべつ]な', en: 'special' },
      { jp: '特[とく]に', en: 'specially' },
      { jp: '特急[とっきゅう]', en: 'a special express' },
    ],
  },
  {
    kanji: '別',
    meaning: ['separate', 'another'],
    vocabulary: [
      { jp: '特別[とくべつ]な', en: 'special' },
      { jp: '別[べつ]の', en: 'another' },
      { jp: '別[わか]れる', en: 'to part from' },
    ],
  },
  {
    kanji: '集',
    meaning: ['collect', 'gather'],
    vocabulary: [
      { jp: '集[あつ]まる', en: 'to gather, to collect' },
      { jp: '集[あつ]める', en: 'to collect, to gather' },
    ],
  },
  {
    kanji: '売',
    meaning: ['sell'],
    vocabulary: [
      { jp: '売[う]る', en: 'to sell' },
      { jp: '売[う]り 場[ば]', en: 'a counter' },
    ],
  },
  {
    kanji: '門',
    meaning: ['gate'],
    vocabulary: [
      { jp: '門[もん]', en: 'a gate' },
      { jp: '専門[せんもん]', en: 'a specialty' },
    ],
  },
  {
    kanji: '開',
    meaning: ['open'],
    vocabulary: [
      { jp: '開[あ]く', en: 'to open' },
      { jp: '開[あ]ける', en: 'to open' },
      { jp: '開[ひら]く', en: 'to open' },
    ],
  },
  {
    kanji: '閉',
    meaning: ['close'],
    vocabulary: [
      { jp: '閉[し]まる', en: 'to close, to shut' },
      { jp: '閉[し]める', en: 'to close, to shut' },
    ],
  },
  // Lesson 11
  {
    kanji: '駅',
    meaning: ['station'],
    vocabulary: [
      { jp: '駅[えき]', en: 'a station' },
      { jp: '駅員[えきいん]', en: 'a station employee' },
    ],
  },
  {
    kanji: '銀',
    meaning: ['silver'],
    vocabulary: [{ jp: '銀行[ぎんこう]', en: 'a bank' }],
  },
  {
    kanji: '病',
    meaning: ['illness'],
    vocabulary: [
      { jp: '病気[びょうき]の', en: 'sick, ill' },
      { jp: '病院[びょういん]', en: 'a hospital' },
    ],
  },
  {
    kanji: '院',
    meaning: ['hall', 'institute'],
    vocabulary: [
      { jp: '病院[びょういん]', en: 'a hospital' },
      { jp: '大学院[だいがくいん]', en: 'a graduate school' },
      { jp: '入院[にゅういん]する', en: 'to be hospitalized' },
      {
        jp: '退院[たいいん]する',
        en: 'to be discharged from a hospital, to leave a hospital',
      },
    ],
  },
  {
    kanji: '店',
    meaning: ['shop'],
    vocabulary: [
      { jp: '店員[てんいん]', en: 'a store clerk' },
      { jp: '喫茶店[きっさてん]', en: 'a coffee shop, a tea house' },
      { jp: '店[みせ]', en: 'a shop, a store' },
    ],
  },
  {
    kanji: '遠',
    meaning: ['distant'],
    vocabulary: [
      { jp: '遠足[えんそく]', en: 'a school excursion' },
      { jp: '遠[とお]い', en: 'far' },
      { jp: '遠[とお]くの', en: 'far-off' },
    ],
  },
  {
    kanji: '建',
    meaning: ['build'],
    vocabulary: [
      { jp: '建[た]てる', en: 'to build' },
      { jp: '建物[たてもの]', en: 'a building' },
      { jp: '二階建[にかいだ]て', en: 'two-storied (house)' },
    ],
  },
  {
    kanji: '物',
    meaning: ['thing'],
    vocabulary: [
      { jp: '動物[どうぶつ]', en: 'an animal' },
      { jp: '荷物[にもつ]', en: 'baggage, luggage, a load' },
      { jp: '物[もの]', en: 'a thing' },
      { jp: '食[た]べ 物[もの]', en: 'food' },
      { jp: '買[か]い 物[もの]', en: 'shopping' },
      { jp: '飲[の]み 物[もの]', en: 'a beverage' },
    ],
  },
  {
    kanji: '工',
    meaning: ['manufacture'],
    vocabulary: [
      { jp: '工場[こうじょう]', en: 'a factory' },
      { jp: '工業[こうぎょう]', en: 'industry, manufacturing industry' },
    ],
  },
  {
    kanji: '場',
    meaning: ['place'],
    vocabulary: [
      { jp: '工場[こうじょう]', en: 'a factory' },
      { jp: '駐車場[ちゅうしゃじょう]', en: 'a parking lot' },
      { jp: '場所[ばしょ]', en: 'a place' },
      { jp: '場合[ばあい]', en: 'a case, an occasion' },
    ],
  },
  {
    kanji: '校',
    meaning: ['school'],
    vocabulary: [
      { jp: '学校[がっこう]', en: 'a school' },
      { jp: '校長[こうちょう]', en: 'a principal' },
      { jp: '小学校[しょうがっこう]', en: 'an elementary (a primary) school' },
      { jp: '中学校[ちゅうがっこう]', en: 'a junior high school' },
    ],
  },
  {
    kanji: '室',
    meaning: ['room'],
    vocabulary: [
      { jp: '教室[きょうしつ]', en: 'a classroom' },
      {
        jp: '研究室[けんきゅうしつ]',
        en: "a laboratory, an (a professor's) office",
      },
      { jp: '会議室[かいぎしつ]', en: 'a conference (meeting) room' },
    ],
  },
  {
    kanji: '堂',
    meaning: ['hall'],
    vocabulary: [
      { jp: '食堂[しょくどう]', en: 'a dining hall, a restaurant' },
      { jp: '講堂[こうどう]', en: 'a lecture hall, an auditorium' },
    ],
  },
  {
    kanji: '図',
    meaning: ['drawing', 'book'],
    vocabulary: [
      { jp: '地図[ちず]', en: 'a map' },
      { jp: '図書館[としょかん]', en: 'a library' },
    ],
  },
  {
    kanji: '館',
    meaning: ['mansion', 'building', 'hall'],
    vocabulary: [
      { jp: '図書館[としょかん]', en: 'a library' },
      { jp: '大使館[たいしかん]', en: 'an embassy' },
      { jp: '美術館[びじゅつかん]', en: 'an art museum' },
      { jp: '映画館[えいがかん]', en: 'a movie theater' },
    ],
  },
  {
    kanji: '近',
    meaning: ['near'],
    vocabulary: [
      { jp: '近所[きんじょ]', en: 'the neighborhood' },
      { jp: '近[ちか]い', en: 'near' },
      { jp: '最近[さいきん]', en: 'recently' },
      { jp: '近[ちか]くの', en: 'nearby' },
    ],
  },
  {
    kanji: '部',
    meaning: ['section'],
    vocabulary: [
      { jp: '学部[がくぶ]', en: 'a faculty, a department' },
      { jp: '部長[ぶちょう]', en: 'a section chief, a department head' },
      { jp: '全部[ぜんぶ]', en: 'all, whole' },
      { jp: '部屋[へや]', en: 'a room' },
    ],
  },
  {
    kanji: '屋',
    meaning: ['house'],
    vocabulary: [
      { jp: '屋上[おくじょう]', en: 'the rooftop' },
      { jp: '部屋[へや]', en: 'a room' },
      { jp: '本屋[ほんや]', en: 'a bookstore' },
      { jp: '八百屋[やおや]', en: 'a fruit and vegetable shop' },
      { jp: '花屋[はなや]', en: 'a florist' },
      { jp: '床屋[とこや]', en: 'a barbershop' },
    ],
  },
  {
    kanji: '広',
    meaning: ['wide'],
    vocabulary: [{ jp: '広[ひろ]い', en: 'wide' }],
  },
  {
    kanji: '地',
    meaning: ['ground', 'land'],
    vocabulary: [
      { jp: '地図[ちず]', en: 'a map' },
      { jp: '地下鉄[ちかてつ]', en: 'a subway' },
      { jp: '地震[じしん]', en: 'an earthquake' },
    ],
  },
  // Lesson 12
  {
    kanji: '東',
    meaning: ['east'],
    vocabulary: [
      { jp: '東京[とうきょう]', en: 'Tokyo' },
      { jp: '東[ひがし]', en: 'the east' },
    ],
  },
  {
    kanji: '西',
    meaning: ['west'],
    vocabulary: [
      { jp: '西洋[せいよう]の', en: 'Western' },
      { jp: '西[にし]', en: 'the west' },
    ],
  },
  {
    kanji: '南',
    meaning: ['south'],
    vocabulary: [
      { jp: '東南[とうなん]アジア', en: 'Southeast Asia' },
      { jp: '南[みなみ]', en: 'the south' },
    ],
  },
  {
    kanji: '北',
    meaning: ['north'],
    vocabulary: [
      { jp: '東北[とうほく]', en: 'the Tohoku district' },
      { jp: '北海道[ほっかいどう]', en: 'Hokkaido' },
      { jp: '北[きた]', en: 'the north' },
    ],
  },
  {
    kanji: '京',
    meaning: ['capital'],
    vocabulary: [
      { jp: '東京[とうきょう]', en: 'Tokyo' },
      { jp: '京都[きょうと]', en: 'Kyoto' },
    ],
  },
  {
    kanji: '世',
    meaning: ['world', 'age'],
    vocabulary: [{ jp: '世界[せかい]', en: 'the world' }],
  },
  {
    kanji: '界',
    meaning: ['world', 'boundary'],
    vocabulary: [{ jp: '世界[せかい]', en: 'the world' }],
  },
  {
    kanji: '外',
    meaning: ['outside'],
    vocabulary: [
      { jp: '外国[がいこく]の', en: 'foreign' },
      { jp: '外国語[がいこくご]', en: 'a foreign language' },
      { jp: '外国人[がいこくじん]', en: 'a foreigner' },
      { jp: '外[そと]', en: 'outside' },
    ],
  },
  {
    kanji: '国',
    meaning: ['country'],
    vocabulary: [
      { jp: '外国[がいこく]の', en: 'foreign' },
      { jp: '外国語[がいこくご]', en: 'a foreign language' },
      { jp: '外国人[がいこくじん]', en: 'a foreigner' },
      { jp: '国際[こくさい]', en: 'international' },
      { jp: '国[くに]', en: 'country' },
    ],
  },
  {
    kanji: '海',
    meaning: ['sea'],
    vocabulary: [
      { jp: '海岸[かいがん]', en: 'the seashore' },
      { jp: '海外[かいがい]の', en: 'overseas' },
      { jp: '海[うみ]', en: 'the sea, the ocean' },
    ],
  },
  {
    kanji: '都',
    meaning: ['capital'],
    vocabulary: [
      { jp: '京都[きょうと]', en: 'Kyoto' },
      { jp: '東京都[とうきょうと]', en: 'the Metropolis of Tokyo' },
      { jp: '都合[つごう]', en: 'convenience, circumstances' },
    ],
  },
  {
    kanji: '道',
    meaning: ['way'],
    vocabulary: [
      { jp: '水道[すいどう]', en: 'a water supply' },
      { jp: '道具[どうぐ]', en: 'a tool, an instrument' },
      { jp: '北海道[ほっかいどう]', en: 'Hokkaido' },
      { jp: '柔道[じゅうどう]', en: 'judo' },
      { jp: '道[みち]', en: 'a way, a road' },
    ],
  },
  {
    kanji: '府',
    meaning: ['administration', 'prefecture'],
    vocabulary: [
      { jp: '大阪府[おおさかふ]', en: 'Osaka Prefecture' },
      { jp: '京都府[きょうとふ]', en: 'Kyoto Prefecture' },
    ],
  },
  {
    kanji: '県',
    meaning: ['prefecture'],
    vocabulary: [{ jp: '〜 県[けん]', en: 'Prefecture' }],
  },
  {
    kanji: '区',
    meaning: ['district', 'ward'],
    vocabulary: [{ jp: '〜 区[く]', en: '~ku (~Ward)' }],
  },
  {
    kanji: '市',
    meaning: ['city'],
    vocabulary: [
      { jp: '〜 市[し]', en: '~shi (~City)' },
      { jp: '市民[しみん]', en: 'a resident (of a city), a citizen' },
    ],
  },
  {
    kanji: '町',
    meaning: ['town'],
    vocabulary: [
      { jp: '〜 町[ちょう]', en: '~cho' },
      { jp: '町[まち]', en: 'a town' },
    ],
  },
  {
    kanji: '村',
    meaning: ['village'],
    vocabulary: [{ jp: '村[むら]', en: 'a village' }],
  },
  {
    kanji: '住',
    meaning: ['live'],
    vocabulary: [
      { jp: '住所[じゅうしょ]', en: 'an address' },
      { jp: '住[す]む', en: 'to live' },
    ],
  },
  {
    kanji: '所',
    meaning: ['place'],
    vocabulary: [
      { jp: '住所[じゅうしょ]', en: 'an address' },
      { jp: '近所[きんじょ]', en: 'the neighborhood' },
      { jp: '所[ところ]', en: 'a place' },
      { jp: '場所[ばしょ]', en: 'a place' },
      { jp: '事務所[じむしょ]', en: 'an office' },
      { jp: '台所[だいどころ]', en: 'a kitchen' },
    ],
  },
  // Lesson 13
  {
    kanji: '体',
    meaning: ['body'],
    vocabulary: [{ jp: '体[からだ]', en: 'the body' }],
  },
  {
    kanji: '頭',
    meaning: ['head'],
    vocabulary: [{ jp: '頭[あたま]', en: 'a head' }],
  },
  {
    kanji: '首',
    meaning: ['neck'],
    vocabulary: [{ jp: '首[くび]', en: 'a neck' }],
  },
  {
    kanji: '手',
    meaning: ['hand', 'person'],
    vocabulary: [
      { jp: '運転手[うんてんしゅ]', en: 'a driver' },
      { jp: '手[て]', en: 'a hand' },
      { jp: '切手[きって]', en: 'a stamp' },
      { jp: '手紙[てがみ]', en: 'a letter' },
      { jp: '上手[じょうず]な', en: 'skillful' },
      { jp: '下手[へた]な', en: 'unskillful' },
    ],
  },
  {
    kanji: '足',
    meaning: ['foot', 'suffice'],
    vocabulary: [
      { jp: '足[あし]', en: 'a foot, a leg' },
      { jp: '足[た]りる', en: 'to be sufficient' },
      { jp: '足[た]す', en: 'to add' },
    ],
  },
  {
    kanji: '顔',
    meaning: ['face'],
    vocabulary: [{ jp: '顔[かお]', en: 'a face' }],
  },
  {
    kanji: '目',
    meaning: ['eye'],
    vocabulary: [
      { jp: '目[め]', en: 'an eye' },
      { jp: '〜 目[め]', en: 'ordinal numbers or order (suffix)' },
    ],
  },
  {
    kanji: '耳',
    meaning: ['ear'],
    vocabulary: [{ jp: '耳[みみ]', en: 'an ear' }],
  },
  {
    kanji: '口',
    meaning: ['mouth'],
    vocabulary: [
      { jp: '人口[じんこう]', en: 'population' },
      { jp: '入[い]り 口[ぐち]', en: 'an entrance' },
      { jp: '口[くち]', en: 'a mouth' },
      { jp: '出口[でぐち]', en: 'an exit' },
    ],
  },
  {
    kanji: '力',
    meaning: ['power', 'strength'],
    vocabulary: [{ jp: '力[ちから]', en: 'power, strength' }],
  },
  {
    kanji: '風',
    meaning: ['wind'],
    vocabulary: [
      { jp: '台風[たいふう]', en: 'a typhoon' },
      { jp: '風呂[ふろ]', en: 'a bath' },
      { jp: '風[かぜ]', en: 'a wind' },
      { jp: '風邪[かぜ]', en: 'a cold' },
    ],
  },
  {
    kanji: '声',
    meaning: ['voice'],
    vocabulary: [{ jp: '声[こえ]', en: 'a voice' }],
  },
  {
    kanji: '医',
    meaning: ['medicine', 'cure'],
    vocabulary: [
      { jp: '医者[いしゃ]', en: 'a (medical) doctor' },
      { jp: '医学[いがく]', en: 'medical science' },
      { jp: '歯医者[はいしゃ]', en: 'a dentist' },
    ],
  },
  {
    kanji: '者',
    meaning: ['person'],
    vocabulary: [
      { jp: '医者[いしゃ]', en: 'a (medical) doctor' },
      { jp: '歯医者[はいしゃ]', en: 'a dentist' },
    ],
  },
  {
    kanji: '薬',
    meaning: ['drug', 'medicine'],
    vocabulary: [{ jp: '薬[くすり]', en: 'a drug, medicine' }],
  },
  {
    kanji: '飯',
    meaning: ['boiled rice', 'meal'],
    vocabulary: [
      { jp: 'ご 飯[はん]', en: 'boiled rice, a meal' },
      { jp: '夕飯[ゆうはん]', en: 'supper, dinner' },
      { jp: '朝[あさ]ご 飯[はん]', en: 'breakfast' },
      { jp: '昼[ひる]ご 飯[はん]', en: 'lunch' },
      { jp: '晩[ばん]ご 飯[はん]', en: 'supper, dinner' },
    ],
  },
  {
    kanji: '野',
    meaning: ['field'],
    vocabulary: [{ jp: '野菜[やさい]', en: 'vegetables' }],
  },
  {
    kanji: '菜',
    meaning: ['vegetables'],
    vocabulary: [{ jp: '野菜[やさい]', en: 'vegetables' }],
  },
  {
    kanji: '心',
    meaning: ['heart'],
    vocabulary: [
      { jp: '心配[しんぱい]する', en: 'to be anxious, to be worried' },
      { jp: '安心[あんしん]する', en: 'to be relieved' },
      { jp: '熱心[ねっしん]な', en: 'eager, enthusiastic' },
      { jp: '心[こころ]', en: 'heart' },
    ],
  },
  {
    kanji: '死',
    meaning: ['die'],
    vocabulary: [{ jp: '死[し]ぬ', en: 'to die' }],
  },
  // Lesson 14
  {
    kanji: '乗',
    meaning: ['ride', 'get on'],
    vocabulary: [
      { jp: '乗[の]る', en: 'to ride, to get on' },
      { jp: '乗[の]り 換[か]える', en: 'to change, to transfer' },
      { jp: '乗[の]り 物[もの]', en: 'a vehicle, a conveyance' },
    ],
  },
  {
    kanji: '降',
    meaning: ['descend'],
    vocabulary: [
      { jp: '降[お]りる', en: 'to get off' },
      { jp: '降[ふ]る', en: 'to fall, to rain, to snow' },
    ],
  },
  {
    kanji: '歩',
    meaning: ['walk'],
    vocabulary: [
      { jp: '散歩[さんぽ]する', en: 'to take a walk, to have a stroll' },
      { jp: '歩[ある]く', en: 'to walk' },
    ],
  },
  {
    kanji: '走',
    meaning: ['run'],
    vocabulary: [{ jp: '走[はし]る', en: 'to run' }],
  },
  {
    kanji: '止',
    meaning: ['stop'],
    vocabulary: [
      { jp: '中止[ちゅうし]する', en: 'to stop' },
      { jp: '止[と]まる', en: 'to stop' },
      { jp: '止[と]める', en: 'to stop, to park' },
    ],
  },
  {
    kanji: '電',
    meaning: ['electricity'],
    vocabulary: [
      { jp: '電車[でんしゃ]', en: 'a train' },
      { jp: '電話[でんわ]', en: 'a telephone' },
      { jp: '電気[でんき]', en: 'electricity, an electric light' },
    ],
  },
  {
    kanji: '自',
    meaning: ['oneself', 'naturally'],
    vocabulary: [
      { jp: '自転車[じてんしゃ]', en: 'a bicycle' },
      { jp: '自動車[じどうしゃ]', en: 'an automobile, a car' },
      { jp: '自由[じゆう]な', en: 'free' },
      { jp: '自分[じぶん]で', en: 'by oneself' },
    ],
  },
  {
    kanji: '転',
    meaning: ['turn', 'roll'],
    vocabulary: [
      { jp: '自転車[じてんしゃ]', en: 'a bicycle' },
      { jp: '運転手[うんてんしゅ]', en: 'a driver' },
    ],
  },
  {
    kanji: '動',
    meaning: ['move'],
    vocabulary: [
      { jp: '動物[どうぶつ]', en: 'an animal' },
      { jp: '運動[うんどう]', en: 'motion, movement, exercise' },
      { jp: '自動車[じどうしゃ]', en: 'an automobile, a car' },
      { jp: '動[うご]く', en: 'to move' },
    ],
  },
  {
    kanji: '鉄',
    meaning: ['iron'],
    vocabulary: [{ jp: '地下鉄[ちかてつ]', en: 'a subway' }],
  },
  {
    kanji: '運',
    meaning: ['carry', 'move'],
    vocabulary: [
      { jp: '運転[うんてん]する', en: 'to drive, to operate' },
      { jp: '運転手[うんてんしゅ]', en: 'a driver' },
      { jp: '運動[うんどう]', en: 'motion, movements, exercise' },
      { jp: '運[はこ]ぶ', en: 'to carry' },
    ],
  },
  {
    kanji: '通',
    meaning: ['pass', 'commute'],
    vocabulary: [
      { jp: '交通[こうつう]', en: 'traffic, transportation' },
      { jp: '普通[ふつう]の', en: 'usual, normal' },
      { jp: '通[とお]る', en: 'to pass' },
      { jp: '通[とお]り', en: 'a street, an avenue' },
      { jp: '通[かよ]う', en: 'to commute' },
    ],
  },
  {
    kanji: '入',
    meaning: ['enter', 'put in'],
    vocabulary: [
      { jp: '入学[にゅうがく]する', en: 'to enter a school' },
      { jp: '入院[にゅういん]する', en: 'to be hospitalized' },
      { jp: '輸入[ゆにゅう]する', en: 'to import' },
      { jp: '入[い]り 口[ぐち]', en: 'entrance' },
      { jp: '入[はい]る', en: 'to enter' },
      { jp: '入[い]れる', en: 'to put in' },
    ],
  },
  {
    kanji: '出',
    meaning: ['go out', 'put out'],
    vocabulary: [
      { jp: '出発[しゅっぱつ]する', en: 'to leave, to depart from' },
      { jp: '輸出[ゆしゅつ]する', en: 'to export' },
      { jp: '出[で]る', en: 'to go out, to attend, to leave' },
      { jp: '出[で]かける', en: 'to go out, to leave (the house)' },
      { jp: '出口[でぐち]', en: 'an exit' },
      { jp: '出[だ]す', en: 'to put out, to submit' },
      { jp: '引[ひ]き 出[だ]し', en: 'a drawer, withdrawal (of money)' },
    ],
  },
  {
    kanji: '着',
    meaning: ['arrive', 'put on'],
    vocabulary: [
      { jp: '着[つ]く', en: 'to arrive at, to reach' },
      { jp: '着[き]る', en: 'to put on, to wear' },
      { jp: '着物[きもの]', en: 'kimono' },
      { jp: '上着[うわぎ]', en: 'a coat, a jacket' },
    ],
  },
  {
    kanji: '急',
    meaning: ['urgent', 'hurry'],
    vocabulary: [
      { jp: '特急[とっきゅう]', en: 'a special express' },
      { jp: '急行[きゅうこう]', en: 'an express' },
      { jp: '急[きゅう]に', en: 'suddenly' },
      { jp: '急[いそ]ぐ', en: 'to hurry' },
    ],
  },
  {
    kanji: '番',
    meaning: ['number', 'watch'],
    vocabulary: [
      { jp: '番号[ばんごう]', en: 'a number' },
      { jp: '番組[ばんぐみ]', en: 'a (TV) program' },
      { jp: '交番[こうばん]', en: 'a police box' },
      { jp: '〜 番[ばん]', en: 'number' },
    ],
  },
  {
    kanji: '号',
    meaning: ['number', 'sign'],
    vocabulary: [
      { jp: '番号[ばんごう]', en: 'a number' },
      { jp: '信号[しんごう]', en: 'a signal, a traffic light' },
    ],
  },
  {
    kanji: '台',
    meaning: ['table', 'base'],
    vocabulary: [
      { jp: '〜 台[だい]', en: 'counter for vehicles and machines' },
      { jp: '台所[だいどころ]', en: 'a kitchen' },
      { jp: '台風[たいふう]', en: 'a typhoon' },
    ],
  },
  {
    kanji: '回',
    meaning: ['turn around', 'time'],
    vocabulary: [
      { jp: '〜 回[かい]', en: 'time(s)' },
      { jp: '回[まわ]る', en: 'to turn around' },
    ],
  },
  // Lesson 15
  {
    kanji: '作',
    meaning: ['make'],
    vocabulary: [
      { jp: '作文[さくぶん]', en: 'composition' },
      { jp: '作[つく]る', en: 'to make' },
    ],
  },
  {
    kanji: '使',
    meaning: ['use'],
    vocabulary: [
      { jp: '大使館[たいしかん]', en: 'an embassy' },
      { jp: '使[つか]う', en: 'to use' },
    ],
  },
  {
    kanji: '考',
    meaning: ['think'],
    vocabulary: [{ jp: '考[かんが]える', en: 'to think' }],
  },
  {
    kanji: '思',
    meaning: ['think'],
    vocabulary: [
      { jp: '思[おも]う', en: 'to think' },
      { jp: '思[おも]い 出[だ]す', en: 'to recall, to remember' },
    ],
  },
  {
    kanji: '知',
    meaning: ['know'],
    vocabulary: [
      { jp: '承知[しょうち]する', en: 'to agree' },
      { jp: '知[し]る', en: 'to know' },
      { jp: '知[し]らせる', en: 'to let know' },
    ],
  },
  {
    kanji: '業',
    meaning: ['work', 'business'],
    vocabulary: [
      { jp: '授業[じゅぎょう]', en: 'class, a lesson' },
      { jp: '産業[さんぎょう]', en: 'industry' },
      { jp: '工業[こうぎょう]', en: 'industry, manufacturing industry' },
      { jp: '卒業[そつぎょう]する', en: 'to graduate' },
    ],
  },
  {
    kanji: '題',
    meaning: ['title', 'topic'],
    vocabulary: [
      { jp: '問題[もんだい]', en: 'a problem, a question' },
      { jp: '宿題[しゅくだい]', en: 'homework' },
    ],
  },
  {
    kanji: '試',
    meaning: ['try', 'test'],
    vocabulary: [
      { jp: '試験[しけん]', en: 'a test, an examination' },
      { jp: '試合[しあい]', en: 'a match, a game' },
    ],
  },
  {
    kanji: '験',
    meaning: ['test'],
    vocabulary: [
      { jp: '試験[しけん]', en: 'a test, an examination' },
      { jp: '経験[けいけん]', en: 'experience' },
    ],
  },
  {
    kanji: '合',
    meaning: ['suit', 'combine'],
    vocabulary: [
      { jp: '都合[つごう]', en: 'convenience, circumstances' },
      { jp: '合[あ]う', en: 'to fit' },
      { jp: '試合[しあい]', en: 'a match, a game' },
      { jp: '具合[ぐあい]', en: 'condition, a state' },
      { jp: '間[ま]に 合[あ]う', en: 'to be in time' },
      { jp: '場合[ばあい]', en: 'a case, an occasion' },
    ],
  },
  {
    kanji: '料',
    meaning: ['materials', 'charge'],
    vocabulary: [
      { jp: '料理[りょうり]', en: 'cooking' },
      { jp: '食料品[しょくりょうひん]', en: 'food' },
    ],
  },
  {
    kanji: '理',
    meaning: ['reason', 'principle'],
    vocabulary: [
      { jp: '料理[りょうり]', en: 'cooking' },
      { jp: '地理[ちり]', en: 'geography' },
      { jp: '理由[りゆう]', en: 'reason' },
    ],
  },
  {
    kanji: '品',
    meaning: ['article'],
    vocabulary: [
      { jp: '食品[しょくひん]', en: 'food' },
      { jp: '食料品[しょくりょうひん]', en: 'food' },
      { jp: '品物[しなもの]', en: 'an article, goods' },
    ],
  },
  {
    kanji: '味',
    meaning: ['taste', 'meaning'],
    vocabulary: [
      { jp: '意味[いみ]', en: 'meaning' },
      { jp: '興味[きょうみ]', en: 'interest' },
      { jp: '趣味[しゅみ]', en: 'a hobby' },
      { jp: '味[あじ]', en: 'taste' },
    ],
  },
  {
    kanji: '用',
    meaning: ['use', 'errand'],
    vocabulary: [
      { jp: '用[よう]', en: 'business, engagement' },
      { jp: '用事[ようじ]', en: 'business, engagement' },
      { jp: '用意[ようい]する', en: 'to prepare' },
      { jp: '利用[りよう]する', en: 'to use' },
    ],
  },
  {
    kanji: '天',
    meaning: ['sky', 'heaven'],
    vocabulary: [
      { jp: '天気[てんき]', en: 'weather' },
      { jp: '天気予報[てんきよほう]', en: 'a weather forecast' },
    ],
  },
  {
    kanji: '空',
    meaning: ['sky', 'air'],
    vocabulary: [
      { jp: '空港[くうこう]', en: 'an airport' },
      { jp: '空気[くうき]', en: 'air' },
      { jp: '空[そら]', en: 'the sky' },
    ],
  },
  {
    kanji: '以',
    meaning: ['than'],
    vocabulary: [
      { jp: '以上[いじょう]', en: 'more than, over' },
      { jp: '以下[いか]', en: 'less than, under' },
      { jp: '以内[いない]', en: 'within' },
      { jp: '以外[いがい]', en: 'except' },
    ],
  },
  {
    kanji: '全',
    meaning: ['whole'],
    vocabulary: [
      { jp: '安全[あんぜん]な', en: 'safe' },
      { jp: '全部[ぜんぶ]', en: 'all, whole' },
      { jp: '全然[ぜんぜん]〜ない', en: 'not ~ at all, never' },
    ],
  },
  {
    kanji: '説',
    meaning: ['explain'],
    vocabulary: [
      { jp: '説明[せつめい]する', en: 'to explain' },
      { jp: '小説[しょうせつ]', en: 'a novel' },
    ],
  },
  // Lesson 1 (1–20)
  {
    kanji: '級',
    meaning: ['grade'],
    vocabulary: [
      { jp: '中級[ちゅうきゅう]', en: 'intermediate (courses)' },
      { jp: '上級[じょうきゅう]', en: 'advanced (courses)' },
    ],
  },
  {
    kanji: '予',
    meaning: ['in advance'],
    vocabulary: [{ jp: '予習[よしゅう]する', en: "to prepare one's lessons" }],
  },
  {
    kanji: '定',
    meaning: ['fix', 'regular', 'certain'],
    vocabulary: [
      { jp: '予定[よてい]', en: 'a plan, a schedule' },
      { jp: '定規[じょうぎ]', en: 'a ruler' },
    ],
  },
  {
    kanji: '表',
    meaning: ['express', 'surface', 'table'],
    vocabulary: [
      { jp: '表[ひょう]', en: 'a table' },
      { jp: '表現[ひょうげん]', en: 'expression' },
      { jp: '発表[はっぴょう]する', en: 'to make public, to announce' },
      { jp: '表[おもて]', en: 'the face' },
      { jp: '表[あらわ]す', en: 'to express' },
    ],
  },
  {
    kanji: '授',
    meaning: ['confer'],
    vocabulary: [
      { jp: '授業[じゅぎょう]', en: 'a class, a lesson' },
      { jp: '教授[きょうじゅ]', en: 'a professor' },
    ],
  },
  {
    kanji: '宿',
    meaning: ['lodge'],
    vocabulary: [
      { jp: '宿題[しゅくだい]', en: 'homework' },
      { jp: '宿[やど]', en: 'an inn, a hotel, a lodge' },
    ],
  },
  {
    kanji: '復',
    meaning: ['return to'],
    vocabulary: [
      { jp: '復習[ふくしゅう]する', en: 'to review' },
      { jp: '回復[かいふく]する', en: 'to recover' },
    ],
  },
  {
    kanji: '辞',
    meaning: ['word', 'resign'],
    vocabulary: [
      { jp: '辞書[じしょ]', en: 'a dictionary' },
      { jp: '辞[や]める', en: 'to resign' },
    ],
  },
  {
    kanji: '初',
    meaning: ['first'],
    vocabulary: [
      { jp: '初級[しょきゅう]', en: 'basic (courses)' },
      { jp: '初[はじ]めて', en: 'for the first time' },
      { jp: '初[はじ]めに', en: 'at first' },
    ],
  },
  {
    kanji: '第',
    meaning: ['ordinal number prefix'],
    vocabulary: [{ jp: '第[だい]〜', en: 'ordinal number prefix' }],
  },
  {
    kanji: '課',
    meaning: ['section', 'lesson', 'impose'],
    vocabulary: [
      { jp: '課[か]', en: 'section, lesson' },
      { jp: '課程[かてい]', en: 'a course, a program' },
    ],
  },
  {
    kanji: '練',
    meaning: ['train'],
    vocabulary: [{ jp: '練習[れんしゅう]する', en: 'to practice' }],
  },
  {
    kanji: '科',
    meaning: ['subject of study', 'scientific'],
    vocabulary: [
      { jp: '科学[かがく]', en: 'science' },
      { jp: '教科書[きょうかしょ]', en: 'a textbook' },
    ],
  },
  {
    kanji: '参',
    meaning: ['participate in', 'visit'],
    vocabulary: [
      { jp: '参加[さんか]する', en: 'to participate in' },
      { jp: '参考書[さんこうしょ]', en: 'a reference' },
      {
        jp: '参[まい]る',
        en: 'to go/to come (humble), to visit (a shrine, a temple etc.)',
      },
    ],
  },
  {
    kanji: '忘',
    meaning: ['forget'],
    vocabulary: [
      { jp: '忘[わす]れる', en: 'to forget' },
      { jp: '忘[わす]れ物[もの]', en: 'a lost thing' },
    ],
  },
  {
    kanji: '覚',
    meaning: ['perceive', 'memorize', 'awake'],
    vocabulary: [
      { jp: '感覚[かんかく]', en: 'a sense' },
      { jp: '覚[おぼ]える', en: 'to remember, to memorize' },
      { jp: '目[め]が覚[さ]める', en: 'to awake' },
      { jp: '目[め]を覚[さ]ます', en: 'to wake up' },
    ],
  },
  {
    kanji: '組',
    meaning: ['organize', 'assemble', 'a pair of', 'group'],
    vocabulary: [
      { jp: '組織[そしき]', en: 'organization' },
      { jp: '組[くみ]', en: 'a pair, a set, a group' },
      { jp: '番組[ばんぐみ]', en: 'a program' },
      { jp: '組[く]む', en: 'to fold, to set' },
      { jp: '組[く]み立[た]てる', en: 'to assemble' },
    ],
  },
  {
    kanji: '席',
    meaning: ['seat'],
    vocabulary: [
      { jp: '席[せき]', en: 'a seat' },
      { jp: '出席[しゅっせき]する', en: 'to attend' },
    ],
  },
  {
    kanji: '欠',
    meaning: ['lack', 'absent'],
    vocabulary: [
      { jp: '欠席[けっせき]する', en: 'to be absent' },
      { jp: '欠[か]ける', en: 'to lack' },
    ],
  },
  {
    kanji: '板',
    meaning: ['board'],
    vocabulary: [
      { jp: '黒板[こくばん]', en: 'a blackboard' },
      { jp: '板[いた]', en: 'board' },
    ],
  },

  // Lesson 2 (21–40)
  {
    kanji: '解',
    meaning: ['solve'],
    vocabulary: [
      { jp: '理解[りかい]する', en: 'to understand' },
      { jp: '解答[かいとう]', en: 'an answer' },
      { jp: '解決[かいけつ]する', en: 'to settle' },
      { jp: '解[と]ける', en: 'to come out' },
      { jp: '解[と]く', en: 'to answer, to solve' },
    ],
  },
  {
    kanji: '筆',
    meaning: ['brush'],
    vocabulary: [
      { jp: '鉛筆[えんぴつ]', en: 'a pencil' },
      { jp: '筆記試験[ひっきしけん]', en: 'a written examination' },
      { jp: '筆[ふで]', en: 'a writing brush' },
    ],
  },
  {
    kanji: '違',
    meaning: ['differ', 'violate'],
    vocabulary: [
      { jp: '違反[いはん]する', en: 'to violate' },
      { jp: '違[ちが]う', en: 'to differ' },
      { jp: '間違[まちが]う', en: 'to mistake' },
    ],
  },
  {
    kanji: '消',
    meaning: ['extinguish', 'consume'],
    vocabulary: [
      { jp: '消毒[しょうどく]する', en: 'to disinfect, to sterilize' },
      { jp: '消極的[しょうきょくてき]な', en: 'negative' },
      { jp: '消[き]える', en: 'to go out, to fade' },
      { jp: '消[け]す', en: 'to extinguish, to turn off' },
      { jp: '消しゴム[けしゴム]', en: 'an eraser' },
    ],
  },
  {
    kanji: '次',
    meaning: ['next', 'the second'],
    vocabulary: [
      { jp: '目次[もくじ]', en: 'a table of contents' },
      { jp: '次第[しだい]に', en: 'gradually' },
      { jp: '次[つ]ぐ', en: 'next to ...' },
      { jp: '次[つぎ]', en: 'next, following' },
    ],
  },
  {
    kanji: '線',
    meaning: ['line'],
    vocabulary: [
      { jp: '下線[かせん]', en: 'an underline' },
      { jp: '〜線[せん]', en: '... Line' },
    ],
  },
  {
    kanji: '最',
    meaning: ['the most ...'],
    vocabulary: [
      { jp: '最初[さいしょ]に', en: 'at first' },
      { jp: '最近[さいきん]', en: 'recently' },
      { jp: '最[もっと]も', en: 'most' },
    ],
  },
  {
    kanji: '適',
    meaning: ['suitable'],
    vocabulary: [{ jp: '適切[てきせつ]な', en: 'appropriate' }],
  },
  {
    kanji: '当',
    meaning: ['present', 'hit'],
    vocabulary: [
      { jp: '適当[てきとう]な', en: 'right, likely' },
      { jp: '本当[ほんとう]の', en: 'true, real' },
      { jp: '当[あ]たる', en: 'to hit' },
      { jp: '当[あ]てる', en: 'to hit' },
    ],
  },
  {
    kanji: '選',
    meaning: ['choose', 'select'],
    vocabulary: [
      { jp: '選手[せんしゅ]', en: 'a player' },
      { jp: '選挙[せんきょ]', en: 'an election' },
      { jp: '選[えら]ぶ', en: 'to choose' },
    ],
  },
  {
    kanji: '例',
    meaning: ['example'],
    vocabulary: [
      { jp: '例[れい]', en: 'an example' },
      { jp: '例[たと]えば', en: 'for example' },
    ],
  },
  {
    kanji: '形',
    meaning: ['shape'],
    vocabulary: [
      { jp: '〜形[けい]', en: '...form' },
      { jp: '形容詞[けいようし]', en: 'an adjective' },
      { jp: '人形[にんぎょう]', en: 'a doll' },
      { jp: '形[かたち]', en: 'shape' },
    ],
  },
  {
    kanji: '変',
    meaning: ['change', 'strange', 'unusual'],
    vocabulary: [
      { jp: '変化[へんか]する', en: 'to change' },
      { jp: '変[へん]な', en: 'strange, unusual' },
      { jp: '変[か]わる', en: 'to change' },
      { jp: '変[か]える', en: 'to change' },
    ],
  },
  {
    kanji: '式',
    meaning: ['style', 'ceremony', 'formula'],
    vocabulary: [
      { jp: '式[しき]', en: 'style, ceremony, formula' },
      { jp: '形式[けいしき]', en: 'a form' },
    ],
  },
  {
    kanji: '直',
    meaning: ['straight', 'honest', 'direct', 'fix'],
    vocabulary: [
      { jp: '直通[ちょくつう]の', en: 'direct' },
      { jp: '直角[ちょっかく]', en: 'a right angle' },
      { jp: '正直[しょうじき]な', en: 'honest' },
      { jp: '直[なお]る', en: 'to be mended, to be repaired' },
      { jp: '直[なお]す', en: 'to mend, to repair' },
      { jp: '直[ただ]ちに', en: 'at once' },
    ],
  },
  {
    kanji: '記',
    meaning: ['write down'],
    vocabulary: [
      { jp: '日記[にっき]', en: 'a diary' },
      { jp: '記入[きにゅう]する', en: 'to write, to fill in' },
      { jp: '記号[きごう]', en: 'a mark, a sign' },
    ],
  },
  {
    kanji: '点',
    meaning: ['point', 'score'],
    vocabulary: [
      { jp: '点[てん]', en: 'a point' },
      { jp: '〜点[てん]', en: 'a mark of ...' },
    ],
  },
  {
    kanji: '机',
    meaning: ['desk'],
    vocabulary: [{ jp: '机[つくえ]', en: 'a desk' }],
  },
  {
    kanji: '数',
    meaning: ['number', 'count'],
    vocabulary: [
      { jp: '数字[すうじ]', en: 'number' },
      { jp: '数学[すうがく]', en: 'mathematics' },
      { jp: '数[かず]', en: 'number' },
      { jp: '数[かぞ]える', en: 'to count' },
    ],
  },
  {
    kanji: '余',
    meaning: ['excess'],
    vocabulary: [
      { jp: '余計[よけい]な', en: 'too many/much, unnecessary' },
      { jp: '余分[よぶん]の', en: 'excessive, too many/much' },
      { jp: '余裕[よゆう]', en: 'room, a margin' },
      { jp: '余[あま]る', en: 'to be left over' },
    ],
  },

  // Lesson 3 (41–60)
  {
    kanji: '速',
    meaning: ['quick', 'fast'],
    vocabulary: [
      { jp: '速度[そくど]', en: 'speed' },
      { jp: '高速[こうそく]', en: 'high speed' },
      { jp: '速[はや]い', en: 'fast' },
    ],
  },
  {
    kanji: '遅',
    meaning: ['slow', 'late'],
    vocabulary: [
      { jp: '遅刻[ちこく]する', en: 'to be late' },
      { jp: '遅[おそ]い', en: 'late' },
      { jp: '遅[おく]れる', en: 'to be late' },
    ],
  },
  {
    kanji: '易',
    meaning: ['easy', 'exchange'],
    vocabulary: [
      { jp: '貿易[ぼうえき]', en: 'trade' },
      { jp: '安易[あんい]な', en: 'easy, easygoing' },
      { jp: '易[やさ]しい', en: 'easy' },
    ],
  },
  {
    kanji: '単',
    meaning: ['single', 'simple', 'unit'],
    vocabulary: [
      { jp: '単語[たんご]', en: 'a word' },
      { jp: '単数[たんすう]', en: 'singular' },
    ],
  },
  {
    kanji: '簡',
    meaning: ['simple', 'brief'],
    vocabulary: [{ jp: '簡単[かんたん]な', en: 'easy' }],
  },
  {
    kanji: '難',
    meaning: ['difficult', 'disaster'],
    vocabulary: [
      { jp: '困難[こんなん]な', en: 'difficult' },
      { jp: '〜難[にく]い', en: 'hard to ..., difficult to ...' },
      { jp: '難[むずか]しい', en: 'difficult' },
    ],
  },
  {
    kanji: '細',
    meaning: ['slender', 'minute', 'detailed'],
    vocabulary: [
      { jp: '細[ほそ]い', en: 'thin' },
      { jp: '細[こま]かい', en: 'small, fine, detailed' },
    ],
  },
  {
    kanji: '太',
    meaning: ['thick', 'great'],
    vocabulary: [
      { jp: '太平洋[たいへいよう]', en: 'the Pacific Ocean' },
      { jp: '太[ふと]い', en: 'thick' },
      { jp: '太[ふと]る', en: 'to get fat' },
    ],
  },
  {
    kanji: '狭',
    meaning: ['narrow'],
    vocabulary: [{ jp: '狭[せま]い', en: 'narrow' }],
  },
  {
    kanji: '浅',
    meaning: ['shallow'],
    vocabulary: [{ jp: '浅[あさ]い', en: 'shallow' }],
  },
  {
    kanji: '深',
    meaning: ['deep'],
    vocabulary: [
      { jp: '深夜[しんや]', en: 'midnight' },
      { jp: '深[ふか]い', en: 'deep' },
    ],
  },
  {
    kanji: '静',
    meaning: ['quiet', 'still'],
    vocabulary: [
      { jp: '冷静[れいせい]な', en: 'calm' },
      { jp: '静[しず]かな', en: 'quiet' },
    ],
  },
  {
    kanji: '涼',
    meaning: ['cool'],
    vocabulary: [{ jp: '涼[すず]しい', en: 'cool' }],
  },
  {
    kanji: '暖',
    meaning: ['warm'],
    vocabulary: [
      { jp: '温暖[おんだん]な', en: 'warm, mild' },
      { jp: '暖房[だんぼう]', en: 'heating' },
      { jp: '暖[あたた]かい', en: 'warm' },
    ],
  },
  {
    kanji: '冷',
    meaning: ['cold', 'cool'],
    vocabulary: [
      { jp: '冷房[れいぼう]', en: 'air conditioner' },
      { jp: '冷[つめ]たい', en: 'cold' },
      { jp: '冷[ひ]える', en: 'to get cold' },
      { jp: '冷[ひ]やす', en: 'to cool, to chill' },
      { jp: '冷[さ]める', en: 'to cool down' },
      { jp: '冷[さ]ます', en: 'to cool' },
    ],
  },
  {
    kanji: '温',
    meaning: ['warm'],
    vocabulary: [
      { jp: '温度[おんど]', en: 'temperature' },
      { jp: '気温[きおん]', en: 'air temperature' },
      { jp: '体温[たいおん]', en: 'body temperature' },
      { jp: '温[あたた]かい', en: 'warm' },
    ],
  },
  {
    kanji: '熱',
    meaning: ['heat', 'hot'],
    vocabulary: [
      { jp: '熱[ねつ]', en: 'heat, fever' },
      { jp: '熱[あつ]い', en: 'hot' },
    ],
  },
  {
    kanji: '困',
    meaning: ['be in trouble'],
    vocabulary: [
      { jp: '困難[こんなん]な', en: 'difficult' },
      { jp: '困[こま]る', en: 'to be in trouble' },
    ],
  },
  {
    kanji: '球',
    meaning: ['ball'],
    vocabulary: [
      { jp: '地球[ちきゅう]', en: 'the Earth' },
      { jp: '球[たま]', en: 'a ball' },
    ],
  },
  {
    kanji: '化',
    meaning: ['change into'],
    vocabulary: [
      { jp: '変化[へんか]する', en: 'to change' },
      { jp: '文化[ぶんか]', en: 'culture' },
      { jp: '化粧[けしょう]', en: 'makeup' },
    ],
  },

  // Lesson 4 (61–80)
  {
    kanji: '馬',
    meaning: ['horse'],
    vocabulary: [
      { jp: '乗馬[じょうば]', en: 'horse riding' },
      { jp: '馬[うま]', en: 'a horse' },
    ],
  },
  {
    kanji: '象',
    meaning: ['phenomenon', 'elephant'],
    vocabulary: [
      { jp: '気象[きしょう]', en: 'weather (conditions)' },
      { jp: '現象[げんしょう]', en: 'a phenomenon' },
      { jp: '象[ぞう]', en: 'an elephant' },
    ],
  },
  {
    kanji: '竹',
    meaning: ['bamboo'],
    vocabulary: [{ jp: '竹[たけ]', en: 'a bamboo' }],
  },
  {
    kanji: '糸',
    meaning: ['thread'],
    vocabulary: [{ jp: '糸[いと]', en: '(a) thread' }],
  },
  {
    kanji: '貝',
    meaning: ['shellfish'],
    vocabulary: [{ jp: '貝[かい]', en: 'a shellfish' }],
  },
  {
    kanji: '毛',
    meaning: ['hair'],
    vocabulary: [
      { jp: '羊毛[ようもう]', en: 'wool' },
      { jp: '毛[け]', en: 'hair' },
      { jp: '毛糸[けいと]', en: 'knitting wool' },
    ],
  },
  {
    kanji: '舟',
    meaning: ['boat'],
    vocabulary: [{ jp: '舟[ふね]', en: 'a boat' }],
  },
  {
    kanji: '石',
    meaning: ['stone'],
    vocabulary: [
      { jp: '石油[せきゆ]', en: 'petroleum' },
      { jp: '石[いし]', en: 'a stone' },
      { jp: '石けん[せっけん]', en: 'soap' },
      { jp: '磁石[じしゃく]', en: 'a magnet' },
    ],
  },
  {
    kanji: '岩',
    meaning: ['rock'],
    vocabulary: [
      { jp: '溶岩[ようがん]', en: 'lava' },
      { jp: '岩[いわ]', en: 'a rock' },
    ],
  },
  {
    kanji: '畑',
    meaning: ['field'],
    vocabulary: [{ jp: '畑[はたけ]', en: 'a field' }],
  },
  {
    kanji: '由',
    meaning: ['cause', 'by way of ...'],
    vocabulary: [
      { jp: '経由[けいゆ]して', en: 'by way of, via' },
      { jp: '理由[りゆう]', en: 'reason' },
      { jp: '自由[じゆう]', en: 'freedom' },
    ],
  },
  {
    kanji: '油',
    meaning: ['oil'],
    vocabulary: [
      { jp: '石油[せきゆ]', en: 'petroleum' },
      { jp: 'しょう油[ゆ]', en: 'soy sauce' },
      { jp: '油[あぶら]', en: 'oil' },
    ],
  },
  {
    kanji: '官',
    meaning: ['government'],
    vocabulary: [
      { jp: '官庁[かんちょう]', en: 'a government office' },
      { jp: '警官[けいかん]', en: 'a policeman' },
    ],
  },
  {
    kanji: '管',
    meaning: ['pipe', 'control'],
    vocabulary: [
      { jp: '管理[かんり]する', en: 'to manage' },
      { jp: '管[くだ]', en: 'pipe' },
    ],
  },
  {
    kanji: '島',
    meaning: ['island'],
    vocabulary: [
      { jp: '半島[はんとう]', en: 'a peninsula' },
      { jp: '島[しま]', en: 'an island' },
    ],
  },
  {
    kanji: '若',
    meaning: ['young'],
    vocabulary: [{ jp: '若[わか]い', en: 'young' }],
  },
  {
    kanji: '苦',
    meaning: ['suffering', 'bitter'],
    vocabulary: [
      { jp: '苦労[くろう]', en: 'trouble' },
      { jp: '苦[くる]しい', en: 'suffering' },
      { jp: '苦[にが]い', en: 'bitter' },
      { jp: '苦手[にがて]な', en: 'poor, weak' },
    ],
  },
  {
    kanji: '向',
    meaning: ['turn toward', 'the other side'],
    vocabulary: [
      { jp: '方向[ほうこう]', en: 'a direction' },
      { jp: '向[む]く', en: 'to turn' },
      { jp: '向[む]き', en: 'a direction' },
      { jp: '向[む]ける', en: 'to turn' },
      { jp: '向[む]かう', en: 'to face, to head' },
      { jp: '向[む]かいの', en: 'opposite, across' },
      { jp: '向[む]こう', en: 'beyond, over there' },
    ],
  },
  {
    kanji: '老',
    meaning: ['old', 'old person'],
    vocabulary: [{ jp: '老人[ろうじん]', en: 'the old' }],
  },
  {
    kanji: '像',
    meaning: ['image', 'statue'],
    vocabulary: [
      { jp: '像[ぞう]', en: 'a statue' },
      { jp: '想像[そうぞう]する', en: 'to imagine' },
    ],
  },

  // Lesson 5 (81–100)
  {
    kanji: '紹',
    meaning: ['mediate'],
    vocabulary: [{ jp: '紹介[しょうかい]する', en: 'to introduce' }],
  },
  {
    kanji: '介',
    meaning: ['mediate'],
    vocabulary: [{ jp: '紹介[しょうかい]する', en: 'to introduce' }],
  },
  {
    kanji: '留',
    meaning: ['keep', 'stay', 'stop'],
    vocabulary: [
      { jp: '留学[りゅうがく]する', en: 'to study abroad' },
      { jp: '留守[るす]', en: 'absence' },
      { jp: '留[と]まる', en: 'to fasten' },
      { jp: '留[と]める', en: 'to fasten' },
      { jp: '書留[かきとめ]', en: 'a registered letter' },
    ],
  },
  {
    kanji: '的',
    meaning: ['target', 'adjectival suffix for ...'],
    vocabulary: [
      { jp: '目的[もくてき]', en: 'a purpose' },
      { jp: '〜的[てき]な', en: 'adjectival suffix' },
    ],
  },
  {
    kanji: '術',
    meaning: ['method'],
    vocabulary: [
      { jp: '手術[しゅじゅつ]', en: 'an operation' },
      { jp: '美術館[びじゅつかん]', en: 'an art museum' },
    ],
  },
  {
    kanji: '技',
    meaning: ['skill'],
    vocabulary: [{ jp: '技術[ぎじゅつ]', en: 'technique' }],
  },
  {
    kanji: '妻',
    meaning: ["one's wife"],
    vocabulary: [
      { jp: '夫妻[ふさい]', en: 'Mr. and Mrs.' },
      { jp: '妻[つま]', en: 'a wife' },
    ],
  },
  {
    kanji: '供',
    meaning: ['offer'],
    vocabulary: [
      { jp: '供給[きょうきゅう]する', en: 'to supply' },
      { jp: '子供[こども]', en: 'a child' },
    ],
  },
  {
    kanji: '緒',
    meaning: ['beginning'],
    vocabulary: [{ jp: '一緒[いっしょ]に', en: 'together' }],
  },
  {
    kanji: '登',
    meaning: ['climb'],
    vocabulary: [
      { jp: '登場[とうじょう]する', en: 'to appear' },
      { jp: '登山[とざん]', en: 'mountain climbing' },
      { jp: '登[のぼ]る', en: 'to climb' },
    ],
  },
  {
    kanji: '専',
    meaning: ['exclusive', 'special'],
    vocabulary: [
      {
        jp: '専門[せんもん]',
        en: 'a special field, a special subject of study',
      },
      { jp: '専攻[せんこう]', en: "one's major" },
    ],
  },
  {
    kanji: '卒',
    meaning: ['graduate'],
    vocabulary: [{ jp: '卒業[そつぎょう]する', en: 'to graduate' }],
  },
  {
    kanji: '結',
    meaning: ['tie', 'conclude'],
    vocabulary: [
      { jp: '結果[けっか]', en: 'result' },
      { jp: '結[むす]ぶ', en: 'to tie' },
    ],
  },
  {
    kanji: '婚',
    meaning: ['marry'],
    vocabulary: [{ jp: '結婚[けっこん]', en: 'marriage' }],
  },
  {
    kanji: '夫',
    meaning: ["one's husband"],
    vocabulary: [
      { jp: '夫人[ふじん]', en: 'Mrs., Lady' },
      { jp: '夫婦[ふうふ]', en: 'a married couple' },
      { jp: '夫[おっと]', en: 'a husband' },
    ],
  },
  {
    kanji: '刺',
    meaning: ['stick'],
    vocabulary: [
      { jp: '名刺[めいし]', en: 'a business card' },
      { jp: '刺[さ]す', en: 'to stick' },
      { jp: '刺身[さしみ]', en: 'sashimi, sliced raw fish' },
    ],
  },
  {
    kanji: '身',
    meaning: ['body'],
    vocabulary: [
      { jp: '身長[しんちょう]', en: 'height' },
      { jp: '全身[ぜんしん]', en: 'the whole body' },
      { jp: '身[み]', en: 'a body' },
      { jp: '身分[みぶん]', en: 'a status, a social position' },
    ],
  },
  {
    kanji: '独',
    meaning: ['alone'],
    vocabulary: [
      { jp: '独身[どくしん]の', en: 'single' },
      { jp: '独特[どくとく]の', en: 'peculiar, unique, special' },
      { jp: '独[ひと]り言[ごと]を言[い]う', en: 'to talk to oneself' },
    ],
  },
  {
    kanji: '柔',
    meaning: ['softness', 'gentleness'],
    vocabulary: [
      { jp: '柔道[じゅうどう]', en: 'judo' },
      { jp: '柔[やわ]らかい', en: 'soft' },
    ],
  },
  {
    kanji: '配',
    meaning: ['distribute'],
    vocabulary: [
      { jp: '心配[しんぱい]する', en: 'to be worried' },
      { jp: '心配[しんぱい]な', en: 'anxious, uneasy' },
      { jp: '配達[はいたつ]する', en: 'to deliver' },
      { jp: '配[くば]る', en: 'to deal, to distribute' },
    ],
  },

  // Lesson 6 (101–120)
  {
    kanji: '畳',
    meaning: ['tatami'],
    vocabulary: [
      { jp: '6畳[じょう]', en: 'a six-mat room' },
      { jp: '畳[たたみ]', en: 'tatami' },
    ],
  },
  {
    kanji: '具',
    meaning: ['implements'],
    vocabulary: [
      { jp: '家具[かぐ]', en: 'furniture' },
      { jp: '道具[どうぐ]', en: 'a tool' },
    ],
  },
  {
    kanji: '雑',
    meaning: ['miscellaneous', 'mixed'],
    vocabulary: [
      { jp: '雑誌[ざっし]', en: 'a magazine' },
      { jp: '雑[ぞう]きん', en: 'a duster' },
    ],
  },
  {
    kanji: '誌',
    meaning: ['write down', 'magazine'],
    vocabulary: [{ jp: '雑誌[ざっし]', en: 'a magazine' }],
  },
  {
    kanji: '童',
    meaning: ['child'],
    vocabulary: [{ jp: '童話[どうわ]', en: 'a fairy tale' }],
  },
  {
    kanji: '児',
    meaning: ['child'],
    vocabulary: [{ jp: '児童[じどう]', en: 'a pupil, a child' }],
  },
  {
    kanji: '冊',
    meaning: ['counter for books'],
    vocabulary: [{ jp: '〜冊[さつ]', en: 'a counter for books' }],
  },
  {
    kanji: '壁',
    meaning: ['wall'],
    vocabulary: [{ jp: '壁[かべ]', en: 'a wall' }],
  },
  {
    kanji: '絵',
    meaning: ['picture'],
    vocabulary: [
      { jp: '絵画[かいが]', en: 'a picture' },
      { jp: '絵[え]', en: 'a picture' },
    ],
  },
  {
    kanji: '隅',
    meaning: ['corner'],
    vocabulary: [{ jp: '隅[すみ]', en: 'a corner' }],
  },
  {
    kanji: '箱',
    meaning: ['box'],
    vocabulary: [
      { jp: '箱[はこ]', en: 'a box' },
      { jp: 'ごみ箱[ばこ]', en: 'a dust box' },
    ],
  },
  {
    kanji: '床',
    meaning: ['floor', 'bed'],
    vocabulary: [
      { jp: '起床[きしょう]する', en: 'to get up' },
      { jp: '床[とこ]の間[ま]', en: 'tokonoma' },
      { jp: '床屋[とこや]', en: 'a barbershop' },
      { jp: '床[ゆか]', en: 'a floor' },
    ],
  },
  {
    kanji: '戸',
    meaning: ['door'],
    vocabulary: [
      { jp: '戸[と]', en: 'a door' },
      { jp: '雨戸[あまど]', en: 'shutters' },
      { jp: '戸棚[とだな]', en: 'a cabinet' },
    ],
  },
  {
    kanji: '庫',
    meaning: ['storehouse'],
    vocabulary: [
      { jp: '金庫[きんこ]', en: 'a safe' },
      { jp: '車庫[しゃこ]', en: 'a garage' },
    ],
  },
  {
    kanji: '蔵',
    meaning: ['store'],
    vocabulary: [{ jp: '冷蔵庫[れいぞうこ]', en: 'a refrigerator' }],
  },
  {
    kanji: '器',
    meaning: ['vessel', 'instrument'],
    vocabulary: [
      { jp: '食器[しょっき]', en: 'tableware' },
      { jp: '器具[きぐ]', en: 'an instrument, an appliance' },
    ],
  },
  {
    kanji: '乳',
    meaning: ['milk'],
    vocabulary: [{ jp: '牛乳[ぎゅうにゅう]', en: 'milk' }],
  },
  {
    kanji: '卵',
    meaning: ['egg'],
    vocabulary: [{ jp: '卵[たまご]', en: 'an egg' }],
  },
  {
    kanji: '果',
    meaning: ['fruit', 'result'],
    vocabulary: [
      { jp: '果実[かじつ]', en: 'fruit' },
      { jp: '結果[けっか]', en: 'result' },
      { jp: '果物[くだもの]', en: 'fruits' },
    ],
  },
  {
    kanji: '庭',
    meaning: ['garden', 'home'],
    vocabulary: [
      { jp: '家庭[かてい]', en: 'home' },
      { jp: '庭[にわ]', en: 'a garden' },
    ],
  },

  // Lesson 7 (121–140)
  {
    kanji: '落',
    meaning: ['fall down', 'drop down'],
    vocabulary: [
      { jp: '落第[らくだい]する', en: 'to fall' },
      { jp: '落[お]ちる', en: 'to fall down, to drop down' },
      { jp: '落[お]ち着[つ]く', en: 'to calm' },
      { jp: '落[お]とす', en: 'to drop' },
    ],
  },
  {
    kanji: '並',
    meaning: ['line up', 'put side by side'],
    vocabulary: [
      { jp: '並木[なみき]', en: 'a colonnade' },
      { jp: '並[なら]ぶ', en: 'to line up' },
      { jp: '並[なら]べる', en: 'to line ... up' },
    ],
  },
  {
    kanji: '決',
    meaning: ['decide', 'decision'],
    vocabulary: [
      { jp: '決定[けってい]する', en: 'to decide' },
      { jp: '決心[けっしん]する', en: "to make up one's mind" },
      { jp: '決[き]まる', en: 'to be decided' },
      { jp: '決[き]める', en: 'to decide' },
    ],
  },
  {
    kanji: '折',
    meaning: ['break off', 'fold'],
    vocabulary: [
      { jp: '骨折[こっせつ]する', en: 'to fracture' },
      { jp: '折[お]れる', en: 'to be broken, to turn, to be folded' },
      { jp: '折[お]る', en: 'to break, to fold' },
    ],
  },
  {
    kanji: '続',
    meaning: ['continue'],
    vocabulary: [
      { jp: '接続[せつぞく]する', en: 'to connect' },
      { jp: '連続[れんぞく]', en: 'continuation, succession' },
      { jp: '続[つづ]く', en: 'to continue' },
      { jp: '手続[てつづ]き', en: 'formalities' },
      { jp: '続[つづ]ける', en: 'to continue' },
    ],
  },
  {
    kanji: '割',
    meaning: ['divide', 'break', 'ratio'],
    vocabulary: [
      { jp: '割合[わりあい]', en: 'a rate, a ratio' },
      { jp: '〜割[わり]', en: 'ten percent' },
      { jp: '割[わ]れる', en: 'to be broken' },
      { jp: '割[わ]る', en: 'to divide, to break' },
    ],
  },
  {
    kanji: '流',
    meaning: ['flow', 'current style'],
    vocabulary: [
      { jp: '流行[りゅうこう]', en: 'fashion, vogue' },
      { jp: '交流[こうりゅう]する', en: 'to exchange' },
      { jp: '流[なが]れる', en: 'to flow' },
      { jp: '流[なが]す', en: 'to pour' },
    ],
  },
  {
    kanji: '渡',
    meaning: ['cross', 'hand over'],
    vocabulary: [
      { jp: '渡[わた]る', en: 'to cross' },
      { jp: '渡[わた]す', en: 'to take across, to hand over' },
    ],
  },
  {
    kanji: '曲',
    meaning: ['note', 'curve'],
    vocabulary: [
      { jp: '曲[きょく]', en: 'note' },
      { jp: '曲線[きょくせん]', en: 'a curve' },
      { jp: '曲[ま]がる', en: 'to be bent, to curve, to turn' },
      { jp: '曲[ま]げる', en: 'to bend' },
    ],
  },
  {
    kanji: '過',
    meaning: ['pass by', 'exceed', 'mistake'],
    vocabulary: [
      { jp: '通過[つうか]する', en: 'to pass' },
      { jp: '過失[かしつ]', en: 'a mistake' },
      { jp: '過[す]ぎる', en: 'to pass' },
      { jp: '〜過[す]ぎ', en: 'past ..., to exceed' },
      { jp: '過[す]ごす', en: 'to spend, to pass' },
    ],
  },
  {
    kanji: '助',
    meaning: ['help'],
    vocabulary: [
      { jp: '助手[じょしゅ]', en: 'an assistant' },
      { jp: '助[たす]かる', en: 'to be saved' },
      { jp: '助[たす]ける', en: 'to help, to assist' },
    ],
  },
  {
    kanji: '倒',
    meaning: ['fall', 'knock down'],
    vocabulary: [
      { jp: '面倒[めんどう]な', en: 'troublesome' },
      { jp: '倒[たお]れる', en: 'to fall' },
      { jp: '倒[たお]す', en: 'to put down' },
    ],
  },
  {
    kanji: '増',
    meaning: ['increase'],
    vocabulary: [
      { jp: '増加[ぞうか]する', en: 'to increase' },
      { jp: '増[ま]す', en: 'to increase, to gain' },
      { jp: '増[ふ]える', en: 'to increase' },
      { jp: '増[ふ]やす', en: 'to increase, to add' },
    ],
  },
  {
    kanji: '減',
    meaning: ['decrease'],
    vocabulary: [
      { jp: '増減[ぞうげん]する', en: 'to increase and decrease' },
      { jp: '減[へ]る', en: 'to decrease' },
      { jp: '減[へ]らす', en: 'to reduce, to decrease' },
    ],
  },
  {
    kanji: '伸',
    meaning: ['stretch', 'extend', 'grow'],
    vocabulary: [
      { jp: '伸[の]びる', en: 'to stretch, to extend, to grow' },
      { jp: '伸[の]ばす', en: 'to extend, to stretch, to grow' },
    ],
  },
  {
    kanji: '破',
    meaning: ['tear', 'break'],
    vocabulary: [
      { jp: '破片[はへん]', en: 'fragment' },
      { jp: '破産[はさん]', en: 'bankruptcy' },
      { jp: '破[やぶ]れる', en: 'to tear, to rip' },
      { jp: '破[やぶ]る', en: 'to tear, to break' },
    ],
  },
  {
    kanji: '育',
    meaning: ['grow', 'bring up'],
    vocabulary: [
      { jp: '教育[きょういく]', en: 'education' },
      { jp: '育児[いくじ]', en: 'child care' },
      { jp: '育[そだ]つ', en: 'to grow up' },
      { jp: '育[そだ]てる', en: 'to bring up, to raise' },
    ],
  },
  {
    kanji: '燃',
    meaning: ['to burn'],
    vocabulary: [
      { jp: '燃[も]える', en: 'to burn' },
      { jp: '燃[も]やす', en: 'to burn' },
    ],
  },
  {
    kanji: '残',
    meaning: ['to remain', 'remnant'],
    vocabulary: [
      { jp: '残念[ざんねん]な', en: 'regrettable' },
      { jp: '残[のこ]る', en: 'to remain, to be left' },
      { jp: '残[のこ]す', en: 'to leave' },
    ],
  },
  {
    kanji: '片',
    meaning: ['flake', 'one of two'],
    vocabulary: [
      { jp: '破片[はへん]', en: 'fragment' },
      { jp: '片仮名[かたかな]', en: 'katakana' },
      { jp: '片付[かたづ]ける', en: 'to clear up' },
      { jp: '片付[かたづ]く', en: 'to finish' },
      { jp: '片道[かたみち]', en: 'one-way' },
    ],
  },

  // Lesson 8 (141–160)
  {
    kanji: '越',
    meaning: ['go beyond', 'exceed'],
    vocabulary: [
      { jp: '越[こ]す', en: 'to go over' },
      { jp: '引[ひ]っ越[こ]す', en: 'to move' },
      { jp: '越[こ]える', en: 'to go over, to pass' },
    ],
  },
  {
    kanji: '港',
    meaning: ['port'],
    vocabulary: [
      { jp: '空港[くうこう]', en: 'an airport' },
      { jp: '港[みなと]', en: 'a port' },
    ],
  },
  {
    kanji: '神',
    meaning: ['god', 'spirit'],
    vocabulary: [
      { jp: '神話[しんわ]', en: 'a myth' },
      { jp: '神経[しんけい]', en: 'a nerve' },
      { jp: '神社[じんじゃ]', en: 'Shinto shrine' },
      { jp: '神[かみ]', en: 'god' },
    ],
  },
  {
    kanji: '美',
    meaning: ['beautiful', 'beauty'],
    vocabulary: [
      { jp: '美容院[びようあん]', en: 'a beauty salon' },
      { jp: '美人[びじん]', en: 'a beauty' },
      { jp: '美[うつく]しい', en: 'beautiful' },
    ],
  },
  {
    kanji: '偉',
    meaning: ['great'],
    vocabulary: [
      { jp: '偉大[いだい]な', en: 'great' },
      { jp: '偉[えら]い', en: 'great' },
    ],
  },
  {
    kanji: '芸',
    meaning: ['art', 'skill'],
    vocabulary: [
      { jp: '園芸[えんげい]', en: 'horticulture' },
      { jp: '芸術[げいじゅつ]', en: 'art' },
      { jp: '芸能[げいのう]', en: 'entertainment, performing arts' },
    ],
  },
  {
    kanji: '交',
    meaning: ['intercourse', 'interchange'],
    vocabulary: [
      { jp: '交通[こうつう]', en: 'traffic, transportation' },
      { jp: '交番[こうばん]', en: 'a police box' },
      { jp: '交[ま]じる', en: 'to mix' },
      { jp: '交[ま]ざる', en: 'to mix' },
      { jp: '交[ま]ぜる', en: 'to mix' },
    ],
  },
  {
    kanji: '差',
    meaning: ['difference'],
    vocabulary: [
      { jp: '差[さ]', en: 'difference' },
      { jp: '交差点[こうさてん]', en: 'a crossing' },
    ],
  },
  {
    kanji: '役',
    meaning: ['service', 'duty', 'role'],
    vocabulary: [
      { jp: '市役所[しやくしょ]', en: 'a city hall' },
      { jp: '役[やく]に立[た]つ', en: 'useful, helpful' },
      { jp: '役[やく]', en: 'duty, a role' },
      { jp: '主役[しゅやく]', en: 'the leading role' },
    ],
  },
  {
    kanji: '公',
    meaning: ['public', 'fair'],
    vocabulary: [
      { jp: '公共[こうきょう]の', en: 'public' },
      { jp: '公平[こうへい]な', en: 'fair' },
    ],
  },
  {
    kanji: '園',
    meaning: ['garden'],
    vocabulary: [{ jp: '公園[こうえん]', en: 'a park' }],
  },
  {
    kanji: '昔',
    meaning: ['old days'],
    vocabulary: [{ jp: '昔[むかし]', en: 'old days' }],
  },
  {
    kanji: '城',
    meaning: ['castle'],
    vocabulary: [{ jp: '城[しろ]', en: 'a castle' }],
  },
  {
    kanji: '警',
    meaning: ['police', 'warn'],
    vocabulary: [
      { jp: '警備[けいび]する', en: 'to defend, to guard' },
      { jp: '警告[けいこく]する', en: 'to warn' },
    ],
  },
  {
    kanji: '察',
    meaning: ['presume'],
    vocabulary: [
      { jp: '警察[けいさつ]', en: 'police' },
      { jp: '観察[かんさつ]する', en: 'to observe, to watch' },
    ],
  },
  {
    kanji: '署',
    meaning: ['government office', 'write'],
    vocabulary: [
      { jp: '消防署[しょうぼうしょ]', en: 'a fire station' },
      { jp: '署名[しょめい]', en: 'a signature' },
    ],
  },
  {
    kanji: '防',
    meaning: ['defend'],
    vocabulary: [
      { jp: '予防[よぼう]する', en: 'to prevent' },
      { jp: '防止[ぼうし]する', en: 'to prevent' },
      { jp: '防[ふせ]ぐ', en: 'to prevent' },
    ],
  },
  {
    kanji: '橋',
    meaning: ['bridge'],
    vocabulary: [
      { jp: '鉄橋[てっきょう]', en: 'an iron bridge' },
      { jp: '橋[はし]', en: 'a bridge' },
    ],
  },
  {
    kanji: '容',
    meaning: ['content'],
    vocabulary: [
      { jp: '内容[ないよう]', en: 'content' },
      { jp: '容器[ようき]', en: 'a container, a vessel' },
    ],
  },
  {
    kanji: '角',
    meaning: ['angle', 'corner'],
    vocabulary: [
      { jp: '方角[ほうがく]', en: 'a direction' },
      { jp: '角度[かくど]', en: 'an angle' },
      { jp: '三角形[さんかくけい]', en: 'a triangle' },
      { jp: '四角形[しかくけい]', en: 'a square' },
      { jp: '角[かど]', en: 'a corner' },
    ],
  },

  // Lesson 9 (161–180)
  {
    kanji: '符',
    meaning: ['sign', 'mark'],
    vocabulary: [
      { jp: '切符[きっぷ]', en: 'a ticket' },
      { jp: '符号[ふごう]', en: 'a mark' },
    ],
  },
  {
    kanji: '券',
    meaning: ['ticket', 'coupon'],
    vocabulary: [
      { jp: '券[けん]', en: 'a ticket, a coupon' },
      { jp: '定期券[ていきけん]', en: 'a commuter pass' },
    ],
  },
  {
    kanji: '枚',
    meaning: ['a sheet of (paper, clothes etc.)'],
    vocabulary: [
      { jp: '〜枚[まい]', en: 'counter for flat things' },
      { jp: '枚数[まいすう]', en: 'the number of sheets' },
    ],
  },
  {
    kanji: '札',
    meaning: ['tag'],
    vocabulary: [{ jp: '千円札[せんえんさつ]', en: 'a thousand-yen bill' }],
  },
  {
    kanji: '改',
    meaning: ['reform', 'examine'],
    vocabulary: [
      { jp: '改札口[かいさつぐち]', en: 'a ticket gate, a ticket barrier' },
      { jp: '改[あらた]める', en: 'to renew, to change' },
      { jp: '改[あらた]めて', en: 'some other time' },
    ],
  },
  {
    kanji: '算',
    meaning: ['calculate'],
    vocabulary: [
      { jp: '計算[けいさん]する', en: 'to calculate' },
      { jp: '予算[よさん]', en: 'a budget' },
    ],
  },
  {
    kanji: '精',
    meaning: ['spirit'],
    vocabulary: [
      { jp: '精算[せいさん]', en: 'adjustment' },
      { jp: '精神[せいしん]', en: 'spirit' },
    ],
  },
  {
    kanji: '面',
    meaning: ['face', 'direction'],
    vocabulary: [
      { jp: '表面[ひょうめん]', en: 'a surface' },
      { jp: '方面[ほうめん]', en: 'a direction' },
    ],
  },
  {
    kanji: '停',
    meaning: ['stop'],
    vocabulary: [
      { jp: '停止[ていし]する', en: 'to stop' },
      { jp: '停車[ていしゃ]する', en: 'to stop' },
      { jp: '停電[ていでん]', en: 'a blackout' },
      { jp: '停留所[ていりゅうじょ]', en: 'a stop' },
    ],
  },
  {
    kanji: '刻',
    meaning: ['time', 'cut'],
    vocabulary: [
      { jp: '時刻[じこく]', en: 'time' },
      { jp: '時刻表[じこくひょう]', en: 'a timetable' },
      { jp: '深刻[しんこく]な', en: 'serious' },
      { jp: '刻[きざ]む', en: 'to chop, to mince' },
    ],
  },
  {
    kanji: '普',
    meaning: ['widely', 'generally'],
    vocabulary: [
      { jp: '普通[ふつう]の', en: 'usual, normal' },
      { jp: '普段[ふだん]の', en: 'usually' },
    ],
  },
  {
    kanji: '快',
    meaning: ['pleasure', 'fast'],
    vocabulary: [
      { jp: '快適[かいてき]な', en: 'comfortable' },
      { jp: '快速電車[かいそくでんしゃ]', en: 'a rapid train' },
    ],
  },
  {
    kanji: '換',
    meaning: ['change'],
    vocabulary: [
      { jp: '交換[こうかん]する', en: 'to exchange' },
      { jp: '換気[かんき]する', en: 'to ventilate' },
      { jp: '乗[の]り換[か]える', en: 'to change, to transfer' },
    ],
  },
  {
    kanji: '禁',
    meaning: ['prohibit'],
    vocabulary: [{ jp: '禁止[きんし]する', en: 'to prohibit' }],
  },
  {
    kanji: '煙',
    meaning: ['smoke'],
    vocabulary: [
      { jp: '煙突[えんとつ]', en: 'a chimney' },
      { jp: '禁煙[きんえん]', en: 'No Smoking' },
      { jp: '煙[けむり]', en: 'smoke' },
      { jp: '煙[けむ]い', en: 'smoky' },
    ],
  },
  {
    kanji: '険',
    meaning: ['steep'],
    vocabulary: [
      { jp: '冒険[ぼうけん]', en: 'adventure' },
      { jp: '険[けわ]しい', en: 'steep, severe, grim' },
    ],
  },
  {
    kanji: '危',
    meaning: ['danger'],
    vocabulary: [
      { jp: '危険[きけん]な', en: 'dangerous' },
      { jp: '危[あぶ]ない', en: 'dangerous' },
      { jp: '危[あや]うい', en: 'dangerous' },
    ],
  },
  {
    kanji: '路',
    meaning: ['road', 'way'],
    vocabulary: [
      { jp: '道路[どうろ]', en: 'a road' },
      { jp: '線路[せんろ]', en: 'a track, a railroad' },
      { jp: '通路[つうろ]', en: 'a passage' },
    ],
  },
  {
    kanji: '側',
    meaning: ['side'],
    vocabulary: [{ jp: '両側[りょうがわ]', en: 'both sides' }],
  },
  {
    kanji: '窓',
    meaning: ['window'],
    vocabulary: [
      { jp: '窓[まど]', en: 'a window' },
      { jp: '窓口[まどぐち]', en: 'a window' },
    ],
  },

  // Lesson 10 (181–200)
  {
    kanji: '受',
    meaning: ['receive', 'accept'],
    vocabulary: [
      { jp: '受験[じゅけん]する', en: 'to take an entrance examination' },
      { jp: '受[う]ける', en: 'to receive, to get, to take' },
    ],
  },
  {
    kanji: '付',
    meaning: ['attach'],
    vocabulary: [
      { jp: '付近[ふきん]の', en: 'neighbouring' },
      { jp: '付属[ふぞく]する', en: 'to attach' },
      { jp: '付[つ]く', en: 'to attach, to stick, to adhere' },
      { jp: '付[つ]ける', en: 'to attach, to put' },
      { jp: '受付[うけつけ]', en: 'a reception desk, a front desk' },
    ],
  },
  {
    kanji: '常',
    meaning: ['normal', 'regular'],
    vocabulary: [
      { jp: '日常[にちじょう]の', en: 'daily' },
      { jp: '常識[じょうしき]', en: 'common sense' },
      { jp: '正常[せいじょう]な', en: 'normal' },
      { jp: '常[つね]に', en: 'always' },
    ],
  },
  {
    kanji: '非',
    meaning: ['is not', 'not', 'non-', 'un-', 'dis-'],
    vocabulary: [
      { jp: '非[ひ]〜', en: 'non-, un-, dis-' },
      { jp: '非常[ひじょう]の', en: 'emergency' },
      { jp: '非常口[ひじょうぐち]', en: 'an emergency exit' },
      { jp: '非常[ひじょう]に', en: 'very, greatly, extremely' },
    ],
  },
  {
    kanji: '階',
    meaning: ['floor', 'rank'],
    vocabulary: [{ jp: '〜階[かい]', en: '...floor' }],
  },
  {
    kanji: '段',
    meaning: ['step'],
    vocabulary: [
      { jp: '階段[かいだん]', en: 'stairs' },
      { jp: '手段[しゅだん]', en: 'a means, a way, a measure' },
    ],
  },
  {
    kanji: '営',
    meaning: ['manage'],
    vocabulary: [
      { jp: '営業[えいぎょう]', en: 'business, trade, sales' },
      { jp: '営業中[えいぎょうちゅう]', en: 'to be open' },
    ],
  },
  {
    kanji: '準',
    meaning: ['standard', 'prepare'],
    vocabulary: [
      { jp: '水準[すいじゅん]', en: 'a level, standards' },
      { jp: '基準[きじゅん]', en: 'standards' },
    ],
  },
  {
    kanji: '備',
    meaning: ['provide', 'prepare'],
    vocabulary: [
      { jp: '準備[じゅんび]する', en: 'to prepare' },
      { jp: '設備[せつび]', en: 'equipment' },
      { jp: '備[そな]える', en: 'to prepare' },
    ],
  },
  {
    kanji: '清',
    meaning: ['clear'],
    vocabulary: [
      { jp: '清潔[せいけつ]な', en: 'clean' },
      { jp: '清書[せいしょ]する', en: 'to make a fair copy' },
      { jp: '清[きよ]い', en: 'clean, clear, pure' },
    ],
  },
  {
    kanji: '掃',
    meaning: ['sweep'],
    vocabulary: [
      { jp: '清掃[せいそう]する', en: 'to clean' },
      { jp: '掃[は]く', en: 'to sweep' },
    ],
  },
  {
    kanji: '議',
    meaning: ['discuss'],
    vocabulary: [
      { jp: '会議[かいぎ]', en: 'a meeting, a conference' },
      { jp: '不思議[ふしぎ]な', en: 'strange, mysterious' },
    ],
  },
  {
    kanji: '製',
    meaning: ['make', 'manufacture'],
    vocabulary: [
      { jp: '〜製[せい]', en: 'made of ..., made in ...' },
      { jp: '製品[せいひん]', en: 'a product' },
      { jp: '製作[せいさく]する', en: 'to make' },
    ],
  },
  {
    kanji: '綿',
    meaning: ['cotton'],
    vocabulary: [
      { jp: '綿[めん]', en: 'cotton' },
      { jp: '木綿[もめん]', en: 'cotton' },
      { jp: '綿100%[めん100%]', en: 'cotton 100%' },
      { jp: '綿[わた]', en: 'cotton (wool)' },
    ],
  },
  {
    kanji: '募',
    meaning: ['gather'],
    vocabulary: [
      { jp: '募集[ぼしゅう]する', en: 'to recruit, to invite, to collect' },
    ],
  },
  {
    kanji: '給',
    meaning: ['supply', 'give'],
    vocabulary: [
      { jp: '給料[きゅうりょう]', en: 'salary' },
      { jp: '供給[きょうきゅう]する', en: 'to supply' },
    ],
  },
  {
    kanji: '師',
    meaning: ['master'],
    vocabulary: [
      { jp: '教師[きょうし]', en: 'a teacher' },
      { jp: '医師[いし]', en: 'a (medical) doctor' },
    ],
  },
  {
    kanji: '求',
    meaning: ['seek', 'request'],
    vocabulary: [
      { jp: '要求[ようきゅう]する', en: 'to demand, to request' },
      { jp: '請求[せいきゅう]する', en: 'to ask, to charge' },
      { jp: '求[もと]める', en: 'to ask, to seek, to request' },
    ],
  },
  {
    kanji: '修',
    meaning: ['govern oneself', 'repair'],
    vocabulary: [
      { jp: '修理[しゅうり]する', en: 'to repair' },
      { jp: '修正[しゅうせい]する', en: 'to amend, to revise' },
    ],
  },
  {
    kanji: '承',
    meaning: ['accept'],
    vocabulary: [
      { jp: '承認[しょうにん]する', en: 'to approve' },
      { jp: '承[うけたまわ]る', en: 'to accept (humble)' },
    ],
  },

  // Lesson 11 (201–220)
  {
    kanji: '材',
    meaning: ['material'],
    vocabulary: [{ jp: '材料[ざいりょう]', en: 'material' }],
  },
  {
    kanji: '玉',
    meaning: ['ball'],
    vocabulary: [
      { jp: '玉[たま]', en: 'a ball' },
      { jp: '玉[たま]ねぎ', en: 'an onion' },
    ],
  },
  {
    kanji: '個',
    meaning: ['individual', 'general counter for small items'],
    vocabulary: [
      { jp: '個人[こじん]', en: 'an individual' },
      { jp: '〜個[こ]', en: 'general counter for small items' },
    ],
  },
  {
    kanji: '塩',
    meaning: ['salt'],
    vocabulary: [
      { jp: '食塩[しょくえん]', en: 'salt' },
      { jp: '塩[しお]', en: 'salt' },
    ],
  },
  {
    kanji: '粉',
    meaning: ['powder'],
    vocabulary: [
      { jp: '粉[こ]', en: 'powder' },
      { jp: '小麦粉[こむぎこ]', en: 'flour' },
      { jp: '粉[こな]', en: 'powder' },
    ],
  },
  {
    kanji: '杯',
    meaning: ['cup', 'glass'],
    vocabulary: [{ jp: '〜杯[はい]', en: 'a cup of ..., a glass of ...' }],
  },
  {
    kanji: '固',
    meaning: ['hard', 'solid'],
    vocabulary: [
      { jp: '固体[こたい]', en: 'a solid' },
      { jp: '固[かた]い', en: 'hard, solid' },
    ],
  },
  {
    kanji: '厚',
    meaning: ['thick'],
    vocabulary: [
      {
        jp: '厚生労働省[こうせいろうどうしょう]',
        en: 'Ministry of Health, Labor and Welfare',
      },
      { jp: '厚[あつ]い', en: 'thick' },
      { jp: '厚かまし[あつかまし]い', en: 'impudent' },
    ],
  },
  {
    kanji: '薄',
    meaning: ['thin'],
    vocabulary: [{ jp: '薄[うす]い', en: 'thin' }],
  },
  {
    kanji: '量',
    meaning: ['quantity', 'measure'],
    vocabulary: [
      { jp: '量[りょう]', en: 'quantity' },
      { jp: '分量[ぶんりょう]', en: 'quantity' },
      { jp: '量[はか]る', en: 'to measure' },
    ],
  },
  {
    kanji: '湯',
    meaning: ['hot water', 'boiled water', 'bath'],
    vocabulary: [{ jp: '湯[ゆ]', en: 'hot water, boiled water' }],
  },
  {
    kanji: '沸',
    meaning: ['boil'],
    vocabulary: [
      { jp: '沸[わ]く', en: 'to boil' },
      { jp: '沸[わ]かす', en: 'to boil' },
    ],
  },
  {
    kanji: '軟',
    meaning: ['soft'],
    vocabulary: [{ jp: '軟[やわ]らかい', en: 'soft, tender' }],
  },
  {
    kanji: '混',
    meaning: ['mix'],
    vocabulary: [
      { jp: '混雑[こんざつ]する', en: 'to be crowded' },
      { jp: '混[ま]じる', en: 'to mix' },
      { jp: '混[ま]ざる', en: 'to mix' },
      { jp: '混[ま]ぜる', en: 'to mix' },
    ],
  },
  {
    kanji: '等',
    meaning: ['equal', 'class', '... and so on'],
    vocabulary: [
      { jp: '〜等[とう]', en: '... and so on' },
      { jp: '等分[とうぶん]する', en: 'to divide ... equally' },
      { jp: '高等[こうとう]の', en: 'high class' },
      { jp: '平等[びょうどう]な', en: 'equal' },
      { jp: '等[ひと]しい', en: 'equal' },
    ],
  },
  {
    kanji: '丸',
    meaning: ['circle', 'round'],
    vocabulary: [
      { jp: '丸[まる]', en: 'a circle' },
      { jp: '丸[まる]い', en: 'round' },
    ],
  },
  {
    kanji: '包',
    meaning: ['wrap'],
    vocabulary: [
      { jp: '包装[ほうそう]', en: 'wrapping, packing' },
      { jp: '包帯[ほうたい]', en: 'bandage' },
      { jp: '包[つつ]む', en: 'to wrap' },
      { jp: '小包[こづつみ]', en: 'a parcel, a package' },
    ],
  },
  {
    kanji: '巻',
    meaning: ['roll'],
    vocabulary: [
      { jp: '〜巻[かん]', en: '... volume' },
      { jp: '巻[ま]く', en: 'to wind, to roll, to reel, to coil' },
    ],
  },
  {
    kanji: '麦',
    meaning: ['wheat'],
    vocabulary: [
      { jp: '小麦[こむぎ]', en: 'wheat' },
      { jp: '蕎麦[そば]', en: 'soba' },
    ],
  },
  {
    kanji: '焼',
    meaning: ['burn'],
    vocabulary: [
      { jp: '焼[や]ける', en: 'to be burned' },
      { jp: '焼[や]く', en: 'to burn, to grill, to roast, to fry' },
    ],
  },

  // Lesson 12 (221–240)
  {
    kanji: '編',
    meaning: ['edit', 'knit'],
    vocabulary: [
      { jp: '編集[へんしゅう]する', en: 'to edit' },
      { jp: '編[あ]む', en: 'to knit' },
    ],
  },
  {
    kanji: '示',
    meaning: ['show', 'message'],
    vocabulary: [
      { jp: '指示[しじ]する', en: 'to indicate, to instruct' },
      { jp: '表示[ひょうじ]する', en: 'to indicate, to show' },
      { jp: '示[しめ]す', en: 'to show, to reveal' },
    ],
  },
  {
    kanji: '成',
    meaning: ['form', 'achieve', 'become'],
    vocabulary: [
      { jp: '成長[せいちょう]する', en: 'to grow' },
      { jp: '成人[せいじん]', en: 'an adult' },
      { jp: '作成[さくせい]する', en: 'to make, to draw up' },
      { jp: '成[な]る', en: 'to become' },
      {
        jp: '成田国際空港[なりたこくさいくうこう]',
        en: 'Narita International Airport',
      },
    ],
  },
  {
    kanji: '存',
    meaning: ['exist'],
    vocabulary: [
      { jp: '存在[そんざい]する', en: 'to exist' },
      { jp: '存[ぞん]じる', en: 'to know (humble)' },
    ],
  },
  {
    kanji: '保',
    meaning: ['keep'],
    vocabulary: [
      { jp: '保存[ほぞん]する', en: 'to preserve' },
      { jp: '保証[ほしょう]する', en: 'to guarantee' },
    ],
  },
  {
    kanji: '設',
    meaning: ['set up'],
    vocabulary: [
      { jp: '設計[せっけい]する', en: 'to plan, to design' },
      { jp: '建設[けんせつ]する', en: 'to build, to construct' },
      { jp: '設定[せってい]する', en: 'to set, to fix' },
    ],
  },
  {
    kanji: '印',
    meaning: ['mark'],
    vocabulary: [
      { jp: '印象[いんしょう]', en: 'impression' },
      { jp: '印[しるし]', en: 'a mark' },
      { jp: '目印[めじるし]', en: 'a mark, a sign' },
    ],
  },
  {
    kanji: '刷',
    meaning: ['print'],
    vocabulary: [
      { jp: '印刷[いんさつ]する', en: 'to print' },
      { jp: '刷[す]る', en: 'to print' },
    ],
  },
  {
    kanji: '信',
    meaning: ['believe', 'message'],
    vocabulary: [
      { jp: '通信[つうしん]', en: 'correspondence' },
      { jp: '信[しん]じる', en: 'to believe' },
      { jp: '自信[じしん]', en: 'confidence' },
      { jp: '信号[しんごう]', en: 'a (traffic) signal' },
      { jp: '送信[そうしん]する', en: 'to send a message' },
    ],
  },
  {
    kanji: '了',
    meaning: ['complete'],
    vocabulary: [
      { jp: '終了[しゅうりょう]する', en: 'to finish, to expire' },
      { jp: '完了[かんりょう]する', en: 'to complete' },
    ],
  },
  {
    kanji: '列',
    meaning: ['line'],
    vocabulary: [
      { jp: '列[れつ]', en: 'a line' },
      { jp: '列車[れっしゃ]', en: 'a train' },
      { jp: '列島[れっとう]', en: 'an archipelago' },
      { jp: '行列[ぎょうれつ]', en: 'a line' },
    ],
  },
  {
    kanji: '戻',
    meaning: ['return'],
    vocabulary: [
      { jp: '戻[もど]る', en: 'to return' },
      { jp: '戻[もど]す', en: 'to return' },
    ],
  },
  {
    kanji: '更',
    meaning: ['change', 'besides'],
    vocabulary: [
      { jp: '変更[へんこう]する', en: 'to change' },
      { jp: '更新[こうしん]する', en: 'to renew, to update' },
      { jp: '更[さら]に', en: 'besides, moreover' },
      { jp: '夜[よ]が更[ふ]ける', en: 'to grow late at night' },
    ],
  },
  {
    kanji: '移',
    meaning: ['move'],
    vocabulary: [
      { jp: '移動[いどう]する', en: 'to move' },
      { jp: '移[うつ]る', en: 'to move' },
      { jp: '移[うつ]す', en: 'to move' },
    ],
  },
  {
    kanji: '除',
    meaning: ['to except', 'to remove'],
    vocabulary: [
      { jp: '削除[さくじょ]する', en: 'to delete' },
      { jp: '掃除[そうじ]する', en: 'to clean' },
      { jp: '除[のぞ]く', en: 'to take off, to remove' },
    ],
  },
  {
    kanji: '能',
    meaning: ['ability'],
    vocabulary: [
      { jp: '能力[のうりょく]', en: 'ability' },
      { jp: '機能[きのう]', en: 'a function' },
      { jp: '性能[せいのう]', en: 'performance' },
    ],
  },
  {
    kanji: '接',
    meaning: ['contact', 'touch'],
    vocabulary: [
      { jp: '面接[めんせつ]', en: 'an interview' },
      { jp: '直接[ちょくせつ]の', en: 'direct' },
      { jp: '接続[せつぞく]する', en: 'to connect, to access' },
    ],
  },
  {
    kanji: '候',
    meaning: ['season', 'wait'],
    vocabulary: [
      { jp: '気候[きこう]', en: 'climate' },
      { jp: '天候[てんこう]', en: 'weather' },
    ],
  },
  {
    kanji: '補',
    meaning: ['supplement'],
    vocabulary: [
      { jp: '候補[こうほ]', en: 'a candidate' },
      { jp: '補[おぎな]う', en: 'to supplement' },
    ],
  },
  {
    kanji: '囲',
    meaning: ['enclose'],
    vocabulary: [
      { jp: '周囲[しゅうい]', en: 'circumference' },
      { jp: '範囲[はんい]', en: 'a scope, a sphere' },
      { jp: '囲[かこ]む', en: 'to surround' },
    ],
  },

  // Lesson 13 (241–250)
  {
    kanji: '祖',
    meaning: ['ancestor'],
    vocabulary: [
      { jp: '祖先[そせん]', en: 'an ancestor' },
      { jp: '先祖[せんぞ]', en: 'an ancestor' },
      { jp: '祖父[そふ]', en: 'a grandfather' },
      { jp: '祖母[そぼ]', en: 'a grandmother' },
    ],
  },
  {
    kanji: '怒',
    meaning: ['anger'],
    vocabulary: [{ jp: '怒[おこ]る', en: 'to get angry' }],
  },
  {
    kanji: '泣',
    meaning: ['cry'],
    vocabulary: [{ jp: '泣[な]く', en: 'to cry' }],
  },
  {
    kanji: '彼',
    meaning: ['he', 'that'],
    vocabulary: [
      { jp: '彼[かれ]', en: 'he' },
      { jp: '彼女[かのじょ]', en: 'she' },
    ],
  },
  {
    kanji: '恥',
    meaning: ['shame', 'shy'],
    vocabulary: [{ jp: '恥[は]ずかしい', en: 'ashamed, shy' }],
  },
  {
    kanji: '息',
    meaning: ['breath'],
    vocabulary: [
      { jp: '休息[きゅうそく]する', en: 'to rest' },
      { jp: '息[いき]', en: 'breath' },
      { jp: 'ため息[いき]', en: 'a sigh' },
      { jp: '息子[むすこ]', en: 'a son' },
    ],
  },
  {
    kanji: '抱',
    meaning: ['hold'],
    vocabulary: [
      { jp: '抱[だ]く', en: 'to hold' },
      { jp: '抱[いだ]く', en: 'to entertain' },
      { jp: '抱[かか]える', en: 'to hold' },
    ],
  },
  {
    kanji: '娘',
    meaning: ['daughter', 'girl'],
    vocabulary: [{ jp: '娘[むすめ]', en: 'a daughter' }],
  },
  {
    kanji: '孫',
    meaning: ['descendant', 'grandchild'],
    vocabulary: [
      { jp: '子孫[しそん]', en: 'a descendant, posterity' },
      { jp: '孫[まご]', en: 'a grandchild' },
    ],
  },
  {
    kanji: '君',
    meaning: ['ruler', 'mister', 'you'],
    vocabulary: [
      { jp: '〜君[くん]', en: "suffix added to a person's name" },
      { jp: '君[きみ]', en: 'you' },
    ],
  },

  // Lesson 13 continued (251–260)
  {
    kanji: '似',
    meaning: ['resemble'],
    vocabulary: [
      { jp: '似[に]る', en: 'to resemble, to look like' },
      { jp: '真似[まね]', en: 'imitation, mimicry, copying' },
    ],
  },
  {
    kanji: '珍',
    meaning: ['rare'],
    vocabulary: [{ jp: '珍[めずら]しい', en: 'rare' }],
  },
  {
    kanji: '寺',
    meaning: ['a (Buddhist) temple'],
    vocabulary: [
      { jp: '〜寺[じ]', en: '...Temple' },
      { jp: '寺院[じいん]', en: 'a temple' },
      { jp: '寺[てら]', en: 'a Buddhist temple' },
    ],
  },
  {
    kanji: '仏',
    meaning: ['Buddha'],
    vocabulary: [{ jp: '仏[ほとけ]', en: 'Buddha' }],
  },
  {
    kanji: '祈',
    meaning: ['pray'],
    vocabulary: [{ jp: '祈[いの]る', en: 'to pray' }],
  },
  {
    kanji: '築',
    meaning: ['build', 'construct'],
    vocabulary: [{ jp: '建築[けんちく]', en: 'architecture' }],
  },
  {
    kanji: '徒',
    meaning: ['follower'],
    vocabulary: [{ jp: '生徒[せいと]', en: 'a pupil' }],
  },
  {
    kanji: '将',
    meaning: ['advance'],
    vocabulary: [
      { jp: '将来[しょうらい]', en: 'future' },
      { jp: '将棋[しょうぎ]', en: 'shogi, Japanese chess' },
    ],
  },
  {
    kanji: '経',
    meaning: ['pass through', 'manage'],
    vocabulary: [
      { jp: '経験[けいけん]する', en: 'to experience' },
      { jp: '経営[けいえい]する', en: 'to manage, to run' },
    ],
  },
  {
    kanji: '活',
    meaning: ['active', 'live'],
    vocabulary: [
      { jp: '生活[せいかつ]', en: 'a life' },
      { jp: '活動[かつどう]', en: 'activity' },
    ],
  },

  // Lesson 14 (261–280)
  {
    kanji: '雪',
    meaning: ['snow'],
    vocabulary: [{ jp: '雪[ゆき]', en: 'snow' }],
  },
  {
    kanji: '寄',
    meaning: ['approach'],
    vocabulary: [
      { jp: '寄付[きふ]する', en: 'to contribute' },
      { jp: '寄[よ]る', en: 'to come near, to drop in' },
      { jp: '寄[よ]せる', en: 'to let ... come near, to draw up' },
    ],
  },
  {
    kanji: '末',
    meaning: ['last part', 'end'],
    vocabulary: [
      { jp: '月末[げつまつ]', en: 'the end of the month' },
      { jp: '末[すえ]', en: 'the end' },
      { jp: '末[すえ]っ子[こ]', en: 'the youngest child' },
    ],
  },
  {
    kanji: '猫',
    meaning: ['cat'],
    vocabulary: [{ jp: '猫[ねこ]', en: 'a cat' }],
  },
  {
    kanji: '迷',
    meaning: ['perplex'],
    vocabulary: [
      { jp: '迷惑[めいわく]', en: 'trouble, annoyance' },
      { jp: '迷信[めいしん]', en: 'superstition' },
      { jp: '迷[まよ]う', en: "to lose one's way, to hesitate" },
      { jp: '迷子[まいご]', en: 'a lost child' },
    ],
  },
  {
    kanji: '昨',
    meaning: ['last'],
    vocabulary: [
      { jp: '昨年[さくねん]', en: 'last year' },
      { jp: '昨日[さくじつ]', en: 'yesterday' },
      { jp: '昨日[きのう]', en: 'yesterday' },
    ],
  },
  {
    kanji: '坊',
    meaning: ["priest's residence"],
    vocabulary: [
      { jp: '(お)坊[ぼう]さん', en: 'a Buddhist priest' },
      { jp: '寝坊[ねぼう]する', en: 'to oversleep' },
      { jp: '坊[ぼっ]ちゃん', en: "a person's son" },
    ],
  },
  {
    kanji: '伝',
    meaning: ['transmit'],
    vocabulary: [
      { jp: '伝記[でんき]', en: 'biography' },
      { jp: '伝言[でんごん]', en: 'a message' },
      { jp: '伝[つた]わる', en: 'to be transmitted, to spread, to go around' },
      { jp: '伝[つた]える', en: 'to tell, to convey, to hand down' },
      { jp: '手伝[てつだ]う', en: 'to help, to assist' },
    ],
  },
  {
    kanji: '痛',
    meaning: ['pain', 'ache'],
    vocabulary: [
      { jp: '頭痛[ずつう]', en: 'a headache' },
      { jp: '苦痛[くつう]', en: 'pain' },
      { jp: '痛[いた]い', en: 'painful' },
      { jp: '痛[いた]む', en: 'to hurt' },
    ],
  },
  {
    kanji: '凍',
    meaning: ['freeze'],
    vocabulary: [
      { jp: '冷凍[れいとう]する', en: 'to freeze' },
      { jp: '凍[こお]る', en: 'to freeze' },
      { jp: '凍[こご]える', en: 'to freeze, to be chilled' },
    ],
  },
  {
    kanji: '労',
    meaning: ['labor'],
    vocabulary: [
      { jp: '労働[ろうどう]', en: 'labor' },
      { jp: '苦労[くろう]', en: 'trouble, pains, worry' },
    ],
  },
  {
    kanji: '暮',
    meaning: ['sun set', 'end', 'live'],
    vocabulary: [
      { jp: '暮[く]れる', en: 'to get dark' },
      { jp: '暮[く]らし', en: 'living' },
      { jp: '暮[く]らす', en: 'to make a living' },
    ],
  },
  {
    kanji: '勤',
    meaning: ['work'],
    vocabulary: [
      { jp: '通勤[つうきん]する', en: 'to commute' },
      { jp: '勤[つと]める', en: 'to work' },
    ],
  },
  {
    kanji: '慣',
    meaning: ['get used to', 'custom'],
    vocabulary: [
      { jp: '習慣[しゅうかん]', en: 'custom, habit' },
      { jp: '慣[な]れる', en: 'to get used to' },
    ],
  },
  {
    kanji: '干',
    meaning: ['parch'],
    vocabulary: [{ jp: '干[ほ]す', en: 'to hang out' }],
  },
  {
    kanji: '泳',
    meaning: ['swim'],
    vocabulary: [
      { jp: '水泳[すいえい]', en: 'swimming' },
      { jp: '泳[およ]ぐ', en: 'to swim' },
    ],
  },
  {
    kanji: '誤',
    meaning: ['mistake', 'error'],
    vocabulary: [
      { jp: '誤解[ごかい]する', en: 'to misunderstand' },
      { jp: '誤[あやま]り', en: 'a mistake, an error' },
    ],
  },
  {
    kanji: '賃',
    meaning: ['hire', 'rent'],
    vocabulary: [{ jp: '家賃[やちん]', en: '(a) house rent' }],
  },
  {
    kanji: '貯',
    meaning: ['store'],
    vocabulary: [
      { jp: '貯金[ちょきん]する', en: 'to save money' },
      { jp: '貯蔵[ちょぞう]する', en: 'to store' },
    ],
  },
  {
    kanji: '皿',
    meaning: ['dish'],
    vocabulary: [{ jp: '皿[さら]', en: 'a dish' }],
  },

  // Lesson 15 (281–300)
  {
    kanji: '晴',
    meaning: ['fine weather'],
    vocabulary: [
      { jp: '快晴[かいせい]', en: 'fine weather' },
      { jp: '晴[は]れる', en: 'to clear' },
    ],
  },
  {
    kanji: '久',
    meaning: ['eternal', 'long'],
    vocabulary: [
      { jp: '永久[えいきゅう]の', en: 'eternal, permanent' },
      { jp: '久[ひさ]しぶりに', en: 'after a long time' },
    ],
  },
  {
    kanji: '遊',
    meaning: ['play', 'be idle', 'pleasure'],
    vocabulary: [
      { jp: '遊園地[ゆうえんち]', en: 'an amusement park' },
      { jp: '遊[あそ]ぶ', en: 'to play' },
    ],
  },
  {
    kanji: '連',
    meaning: ['link', 'in succession', 'group'],
    vocabulary: [
      { jp: '連続[れんぞく]', en: 'continuation, succession' },
      { jp: '連[つ]れて行[い]く', en: 'to take someone' },
    ],
  },
  {
    kanji: '束',
    meaning: ['tie up', 'bundle'],
    vocabulary: [
      { jp: '約束[やくそく]する', en: 'to promise' },
      { jp: '束[たば]', en: 'a bunch' },
    ],
  },
  {
    kanji: '喜',
    meaning: ['happiness', 'joy'],
    vocabulary: [{ jp: '喜[よろこ]ぶ', en: 'to be pleased' }],
  },
  {
    kanji: '底',
    meaning: ['bottom', 'end'],
    vocabulary: [
      { jp: '徹底的[てっていてき]な', en: 'thoroughgoing' },
      { jp: '底[そこ]', en: 'the bottom' },
    ],
  },
  {
    kanji: '念',
    meaning: ['thought', 'desire'],
    vocabulary: [{ jp: '記念[きねん]', en: 'a memory' }],
  },
  {
    kanji: '故',
    meaning: ['event', 'old'],
    vocabulary: [
      { jp: '事故[じこ]', en: 'an accident' },
      { jp: '故障[こしょう]', en: 'a breakdown' },
    ],
  },
  {
    kanji: '疲',
    meaning: ['tired'],
    vocabulary: [{ jp: '疲[つか]れる', en: 'to be tired' }],
  },
  {
    kanji: '曇',
    meaning: ['cloudy'],
    vocabulary: [{ jp: '曇[くも]る', en: 'to become cloudy' }],
  },
  {
    kanji: '張',
    meaning: ['strain'],
    vocabulary: [
      { jp: '出張[しゅっちょう]する', en: 'to make a business trip' },
      { jp: '緊張[きんちょう]する', en: 'to feel the strain' },
      { jp: '張[は]る', en: 'to strain' },
    ],
  },
  {
    kanji: '宅',
    meaning: ["one's house"],
    vocabulary: [
      { jp: 'お宅[たく]', en: "your house, a person's house" },
      { jp: '自宅[じたく]', en: "one's house, one's home" },
      { jp: '住宅[じゅうたく]', en: 'a house' },
      { jp: '帰宅[きたく]する', en: 'to go home, to come home' },
    ],
  },
  {
    kanji: '幼',
    meaning: ['infant'],
    vocabulary: [
      { jp: '幼児[ようじ]', en: 'an infant' },
      { jp: '幼稚園[ようちえん]', en: 'a kindergarten' },
      { jp: '幼稚[ようち]な', en: 'childish' },
      { jp: '幼[おさな]い', en: 'infant' },
    ],
  },
  {
    kanji: '迎',
    meaning: ['meet', 'welcome'],
    vocabulary: [
      { jp: '歓迎[かんげい]する', en: 'to welcome' },
      { jp: '迎[むか]える', en: 'to meet, to welcome, to greet' },
      { jp: '迎[むか]えに行[い]く', en: 'to go to meet a person, to pick up' },
    ],
  },
  {
    kanji: '祝',
    meaning: ['celebrate'],
    vocabulary: [
      { jp: '祝日[しゅくじつ]', en: 'a festival day, a national holiday' },
      { jp: '祝[いわ]う', en: 'to celebrate' },
    ],
  },
  {
    kanji: '菓',
    meaning: ['fruit', 'confectionery'],
    vocabulary: [{ jp: 'お菓子[かし]', en: 'confectionery' }],
  },
  {
    kanji: '得',
    meaning: ['acquire', 'gain'],
    vocabulary: [
      { jp: '得意[とくい]な', en: 'good, strong' },
      { jp: '損得[そんとく]', en: 'loss and gain' },
      { jp: '得[え]る', en: 'to get' },
      { jp: '得[う]る', en: 'to get' },
    ],
  },
  {
    kanji: '呼',
    meaning: ['call', 'invite', 'breathe'],
    vocabulary: [
      { jp: '呼吸[こきゅう]する', en: 'to breathe' },
      { jp: '呼[よ]ぶ', en: 'to call' },
    ],
  },
  {
    kanji: '雲',
    meaning: ['cloud'],
    vocabulary: [{ jp: '雲[くも]', en: 'cloud' }],
  },

  // Lesson 16 (301–320)
  {
    kanji: '状',
    meaning: ['condition', 'letter'],
    vocabulary: [
      { jp: '状態[じょうたい]', en: 'a state, conditions' },
      { jp: '年賀状[ねんがじょう]', en: "a New Year's card" },
    ],
  },
  {
    kanji: '格',
    meaning: ['norm', 'status'],
    vocabulary: [
      { jp: '合格[ごうかく]する', en: 'to pass' },
      { jp: '性格[せいかく]', en: 'character, personality' },
    ],
  },
  {
    kanji: '願',
    meaning: ['wish', 'favor'],
    vocabulary: [{ jp: '願[ねが]う', en: 'to wish' }],
  },
  {
    kanji: '様',
    meaning: ['mode', 'formal title of ~san', 'alike'],
    vocabulary: [
      { jp: '様子[ようす]', en: 'a state, an appearance' },
      { jp: '模様[もよう]', en: 'pattern' },
      { jp: '〜様[さま]', en: 'Mr., Ms. ...' },
      { jp: '様々[さまざま]な', en: 'various' },
    ],
  },
  {
    kanji: '皆',
    meaning: ['all', 'everything', 'everybody'],
    vocabulary: [{ jp: '皆[みな]', en: 'all, everything, everybody' }],
  },
  {
    kanji: '舞',
    meaning: ['dance'],
    vocabulary: [
      { jp: '見舞[みま]い', en: 'an inquiry' },
      {
        jp: '見舞[みま]う',
        en: "to visit a person in hospital, to inquire after a person's health",
      },
      { jp: '振[ふ]る舞[ま]う', en: 'to behave, to treat a person to ...' },
    ],
  },
  {
    kanji: '忙',
    meaning: ['busy'],
    vocabulary: [{ jp: '忙[いそが]しい', en: 'busy' }],
  },
  {
    kanji: '順',
    meaning: ['order'],
    vocabulary: [
      { jp: '順番[じゅんばん]', en: 'order, sequence' },
      { jp: '順調[じゅんちょう]な', en: 'favorable, smooth' },
    ],
  },
  {
    kanji: '伺',
    meaning: ['visit', 'ask', 'hear'],
    vocabulary: [
      { jp: '伺[うかが]う', en: 'to visit, to ask, to hear (humble)' },
    ],
  },
  {
    kanji: '平',
    meaning: ['flat', 'calm', 'even', 'plain'],
    vocabulary: [
      { jp: '平成[へいせい]', en: 'Heisei (Japanese era name)' },
      { jp: '平和[へいわ]', en: 'peace' },
      { jp: '平等[びょうどう]な', en: 'equal' },
      { jp: '平[たい]らな', en: 'flat' },
      { jp: '平仮名[ひらがな]', en: 'Hiragana' },
    ],
  },
  {
    kanji: '御',
    meaning: ['honorific prefix'],
    vocabulary: [
      { jp: '御飯[ごはん]', en: 'boiled rice, a meal' },
      { jp: '御家族[ごかぞく]', en: 'family (honorific)' },
      { jp: '御中[おんちゅう]', en: 'Messrs.' },
    ],
  },
  {
    kanji: '返',
    meaning: ['return'],
    vocabulary: [
      { jp: '返事[へんじ]', en: 'an answer, a reply' },
      { jp: '返[かえ]る', en: 'to return' },
      { jp: '返[かえ]す', en: 'to return' },
    ],
  },
  {
    kanji: '頂',
    meaning: ['head', 'top'],
    vocabulary: [
      { jp: '頂上[ちょうじょう]', en: 'the top, the summit' },
      { jp: '頂[いただ]く', en: 'to get, to receive (humble)' },
    ],
  },
  {
    kanji: '幸',
    meaning: ['happiness'],
    vocabulary: [
      { jp: '幸福[こうふく]', en: 'happiness' },
      { jp: '幸[しあわ]せ', en: 'happiness' },
      { jp: '幸[さいわ]い', en: 'fortunately, happily' },
    ],
  },
  {
    kanji: '礼',
    meaning: ['etiquette', 'rite'],
    vocabulary: [
      { jp: '礼[れい]', en: 'a bow, thanks, a reward' },
      { jp: '礼儀[れいぎ]', en: 'courtesy, manners, etiquette' },
    ],
  },
  {
    kanji: '拝',
    meaning: ['worship'],
    vocabulary: [
      { jp: '拝見[はいけん]する', en: 'to see (humble)' },
      { jp: '拝[おが]む', en: 'to pray' },
    ],
  },
  {
    kanji: '殿',
    meaning: ['mansion', 'palace'],
    vocabulary: [{ jp: '〜殿[どの]', en: 'Mr., Ms.' }],
  },
  {
    kanji: '談',
    meaning: ['talk'],
    vocabulary: [{ jp: '冗談[じょうだん]', en: 'a joke' }],
  },
  {
    kanji: '相',
    meaning: ['phase', 'mutual', 'minister'],
    vocabulary: [
      { jp: '相談[そうだん]する', en: 'to talk, to consult' },
      { jp: '首相[しゅしょう]', en: 'a prime minister' },
      { jp: '相手[あいて]', en: "one's companion (partner), one's opponent" },
      { jp: '相撲[すもう]', en: 'sumo' },
    ],
  },
  {
    kanji: '旧',
    meaning: ['old'],
    vocabulary: [
      {
        jp: '旧正月[きゅうしょうがつ]',
        en: 'the New Year by the lunar calendar',
      },
    ],
  },

  // Lesson 17 (321–340)
  {
    kanji: '販',
    meaning: ['sell', 'trade'],
    vocabulary: [{ jp: '販売[はんばい]する', en: 'to sell' }],
  },
  {
    kanji: '商',
    meaning: ['trade', 'commercial'],
    vocabulary: [
      { jp: '商業[しょうぎょう]', en: 'commerce' },
      { jp: '商品[しょうひん]', en: 'goods, a commodity' },
    ],
  },
  {
    kanji: '支',
    meaning: ['support', 'branch'],
    vocabulary: [
      { jp: '支店[してん]', en: 'a branch office' },
      { jp: '支[ささ]える', en: 'to support' },
      { jp: '差[さ]し支[つか]え', en: 'an obstacle, inconvenience' },
    ],
  },
  {
    kanji: '払',
    meaning: ['pay'],
    vocabulary: [
      { jp: '払[はら]う', en: 'to pay' },
      { jp: '支払[しはら]う', en: 'to pay' },
    ],
  },
  {
    kanji: '法',
    meaning: ['law', 'method'],
    vocabulary: [
      { jp: '方法[ほうほう]', en: 'a method, a way' },
      { jp: '文法[ぶんぽう]', en: 'grammar' },
    ],
  },
  {
    kanji: '達',
    meaning: ['attain', 'reach'],
    vocabulary: [
      { jp: '発達[はったつ]する', en: 'to develop, to progress' },
      { jp: '速達[そくたつ]', en: 'special delivery' },
      { jp: '配達[はいたつ]する', en: 'to deliver' },
      { jp: '友達[ともだち]', en: 'a friend' },
    ],
  },
  {
    kanji: '額',
    meaning: ['amount', 'forehead'],
    vocabulary: [
      { jp: '金額[きんがく]', en: 'a sum, an amount' },
      { jp: '額[がく]', en: 'a sum, an amount, a frame' },
      { jp: '額[ひたい]', en: 'the forehead' },
    ],
  },
  {
    kanji: '超',
    meaning: ['exceed'],
    vocabulary: [
      { jp: '超[こ]える', en: 'to exceed' },
      { jp: '超[こ]す', en: 'to be over' },
    ],
  },
  {
    kanji: '無',
    meaning: ['without', 'nothing', 'non-'],
    vocabulary: [
      { jp: '無理[むり]な', en: 'unreasonable, unnatural, impossible' },
      { jp: '無料[むりょう]の', en: 'free' },
      { jp: '無事[ぶじ]な', en: 'safe' },
      { jp: '無[な]い', en: 'no, not any' },
    ],
  },
  {
    kanji: '確',
    meaning: ['certain'],
    vocabulary: [
      { jp: '正確[せいかく]な', en: 'correct, exact' },
      { jp: '確実[かくじつ]な', en: 'certain, sure' },
      { jp: '確[たし]かに', en: 'surely, certainly' },
      { jp: '確[たし]かめる', en: 'to make sure, to confirm' },
    ],
  },
  {
    kanji: '認',
    meaning: ['recognize'],
    vocabulary: [
      { jp: '確認[かくにん]する', en: 'to confirm' },
      { jp: '認[みと]める', en: 'to recognize' },
    ],
  },
  {
    kanji: '収',
    meaning: ['obtain'],
    vocabulary: [
      { jp: '収入[しゅうにゅう]', en: 'income' },
      { jp: '収[おさ]める', en: 'to put in, to obtain' },
    ],
  },
  {
    kanji: '領',
    meaning: ['territory', 'receive'],
    vocabulary: [
      { jp: '大統領[だいとうりょう]', en: 'a president' },
      { jp: '領収[りょうしゅう]', en: 'receipt' },
    ],
  },
  {
    kanji: '翌',
    meaning: ['next'],
    vocabulary: [
      { jp: '翌日[よくじつ]', en: 'the next day' },
      { jp: '翌年[よくねん]', en: 'the next year' },
    ],
  },
  {
    kanji: '客',
    meaning: ['visitor', 'guest', 'customer', 'client'],
    vocabulary: [
      { jp: '客[きゃく]', en: 'a visitor, a guest, a customer, a client' },
      { jp: '乗客[じょうきゃく]', en: 'a passenger' },
    ],
  },
  {
    kanji: '届',
    meaning: ['reach', 'report', 'deliver'],
    vocabulary: [
      { jp: '届[とど]く', en: 'to reach' },
      { jp: '届[とど]ける', en: 'to report, to deliver' },
    ],
  },
  {
    kanji: '布',
    meaning: ['cloth'],
    vocabulary: [
      { jp: '毛布[もうふ]', en: 'a blanket' },
      { jp: '布[ぬの]', en: 'cloth' },
    ],
  },
  {
    kanji: '財',
    meaning: ['fortune', 'property'],
    vocabulary: [
      { jp: '財産[ざいさん]', en: 'fortune' },
      { jp: '財布[さいふ]', en: 'a wallet, a purse' },
    ],
  },
  {
    kanji: '値',
    meaning: ['value', 'price'],
    vocabulary: [
      { jp: '価値[かち]', en: 'value' },
      { jp: '値[ね]', en: 'a price' },
      { jp: '値段[ねだん]', en: 'a price' },
    ],
  },
  {
    kanji: '費',
    meaning: ['expense', 'spend'],
    vocabulary: [
      { jp: '費用[ひよう]', en: 'expense' },
      { jp: '食費[しょくひ]', en: 'food expense' },
    ],
  },

  // Lesson 18 (341–364)
  {
    kanji: '央',
    meaning: ['middle'],
    vocabulary: [{ jp: '中央[ちゅうおう]', en: 'center, middle' }],
  },
  {
    kanji: '際',
    meaning: ['occasion', 'inter-'],
    vocabulary: [
      { jp: '国際的[こくさいてき]な', en: 'international' },
      { jp: '〜際[さい]', en: 'when ..., in case of ...' },
    ],
  },
  {
    kanji: '到',
    meaning: ['arrive'],
    vocabulary: [{ jp: '到着[とうちゃく]する', en: 'to arrive' }],
  },
  {
    kanji: '案',
    meaning: ['proposal', 'plan'],
    vocabulary: [
      { jp: '案[あん]', en: 'a proposal, a plan' },
      { jp: '案内[あんない]する', en: 'to guide' },
    ],
  },
  {
    kanji: '両',
    meaning: ['both'],
    vocabulary: [{ jp: '両〜[りょう]', en: 'both ...' }],
  },
  {
    kanji: '替',
    meaning: ['change'],
    vocabulary: [
      { jp: '交替[こうたい]する', en: 'to take turns, to alternate' },
      { jp: '取[と]り替[か]える', en: 'to exchange' },
      { jp: '着替[きが]える', en: "to change one's dress" },
      { jp: '両替[りょうがえ]', en: 'exchange' },
      { jp: '外国為替[がいこくかわせ]', en: 'foreign exchange' },
    ],
  },
  {
    kanji: '喫',
    meaning: ['eat', 'drink'],
    vocabulary: [
      { jp: '喫茶店[きっさてん]', en: 'a coffee shop' },
      { jp: '喫煙所[きつえんじょ]', en: 'a smoking area' },
    ],
  },
  {
    kanji: '郵',
    meaning: ['mail'],
    vocabulary: [
      { jp: '郵便局[ゆうびんきょく]', en: 'a post office' },
      { jp: '郵送[ゆうそう]する', en: 'to mail' },
    ],
  },
  {
    kanji: '荷',
    meaning: ['load'],
    vocabulary: [{ jp: '荷物[にもつ]', en: 'baggage, luggage' }],
  },
  {
    kanji: '預',
    meaning: ['entrust', 'deposit'],
    vocabulary: [
      { jp: '預[あず]かる', en: 'to keep' },
      { jp: '預[あず]ける', en: 'to leave, to deposit' },
    ],
  },
  {
    kanji: '関',
    meaning: ['concern', 'barrier'],
    vocabulary: [
      { jp: '関係[かんけい]する', en: 'to be related' },
      { jp: '機関[きかん]', en: 'an organization, facilities' },
    ],
  },
  {
    kanji: '税',
    meaning: ['tax'],
    vocabulary: [
      { jp: '税関[ぜいかん]', en: 'the customs' },
      { jp: '税金[ぜいきん]', en: 'a tax' },
      { jp: '課税[かぜい]する', en: 'to tax' },
      { jp: '消費税[しょうひぜい]', en: 'a consumption tax' },
    ],
  },
  {
    kanji: '査',
    meaning: ['investigate'],
    vocabulary: [{ jp: '調査[ちょうさ]する', en: 'to investigate' }],
  },
  {
    kanji: '検',
    meaning: ['investigate'],
    vocabulary: [{ jp: '検査[けんさ]する', en: 'to examine' }],
  },
  {
    kanji: '機',
    meaning: ['machine', 'opportunity'],
    vocabulary: [
      { jp: 'コピー機[き]', en: 'a copy machine' },
      { jp: '機会[きかい]', en: 'a chance, an opportunity' },
    ],
  },
  {
    kanji: '職',
    meaning: ['job', 'occupation'],
    vocabulary: [
      { jp: '職業[しょくぎょう]', en: 'a job, occupation' },
      { jp: '就職[しゅうしょく]する', en: 'to get a job' },
    ],
  },
  {
    kanji: '協',
    meaning: ['cooperate'],
    vocabulary: [{ jp: '協力[きょうりょく]する', en: 'to cooperate' }],
  },
  {
    kanji: '航',
    meaning: ['sail', 'fly'],
    vocabulary: [
      { jp: '航空便[こうくうびん]', en: 'air mail' },
      { jp: '航空会社[こうくうがいしゃ]', en: 'an airline (company)' },
    ],
  },
  {
    kanji: '姓',
    meaning: ['surname'],
    vocabulary: [{ jp: '姓[せい]', en: 'a surname, a family name' }],
  },
  {
    kanji: '性',
    meaning: ['nature', 'sex', '-ity'],
    vocabulary: [
      { jp: '男性[だんせい]', en: 'a man' },
      { jp: '女性[じょせい]', en: 'a woman' },
      { jp: '性別[せいべつ]', en: 'sex' },
      { jp: '〜性[せい]', en: '-ity, -ness' },
    ],
  },
  {
    kanji: '齢',
    meaning: ['age'],
    vocabulary: [{ jp: '年齢[ねんれい]', en: 'age' }],
  },
  {
    kanji: '効',
    meaning: ['effect'],
    vocabulary: [
      { jp: '有効[ゆうこう]な', en: 'valid, effective' },
      { jp: '効果[こうか]', en: 'effect' },
      { jp: '効[き]く', en: 'to be effective' },
    ],
  },
  {
    kanji: '飛',
    meaning: ['fly'],
    vocabulary: [
      { jp: '飛行機[ひこうき]', en: 'an airplane' },
      { jp: '飛[と]ぶ', en: 'to fly' },
      { jp: '飛[と]ばす', en: 'to fly' },
    ],
  },
  {
    kanji: '羽',
    meaning: ['feather', 'wing'],
    vocabulary: [
      { jp: '羽根[はね]', en: 'a blade' },
      { jp: '羽[はね]', en: 'a feather, a wing' },
      { jp: '〜羽[わ]', en: 'counter for birds' },
    ],
  },

  // Lesson 19 (365–388)
  {
    kanji: '恵',
    meaning: ['blessing', 'clever'],
    vocabulary: [
      { jp: '恩恵[おんけい]', en: 'benefit, a privilege' },
      { jp: '知恵[ちえ]', en: 'wisdom, intelligence' },
    ],
  },
  {
    kanji: '賢',
    meaning: ['wise'],
    vocabulary: [{ jp: '賢[かしこ]い', en: 'wise, clever' }],
  },
  {
    kanji: '笑',
    meaning: ['laugh', 'smile'],
    vocabulary: [
      { jp: '笑[わら]う', en: 'to laugh' },
      { jp: 'ほほ笑[え]む', en: 'to smile' },
      { jp: '笑顔[えがお]', en: 'a smiling face' },
    ],
  },
  {
    kanji: '劇',
    meaning: ['drama', 'play'],
    vocabulary: [
      { jp: '劇[げき]', en: 'drama, a play' },
      { jp: '劇場[げきじょう]', en: 'a theater' },
    ],
  },
  {
    kanji: '夢',
    meaning: ['dream'],
    vocabulary: [
      { jp: '夢中[むちゅう]になる', en: 'to devote oneself, to steep oneself' },
      { jp: '夢[ゆめ]', en: 'a dream' },
    ],
  },
  {
    kanji: '欲',
    meaning: ['desire', 'greed'],
    vocabulary: [
      { jp: '食欲[しょくよく]', en: 'appetite' },
      { jp: '欲張[よくば]り', en: 'a greedy' },
      { jp: '欲[ほ]しい', en: 'to want' },
    ],
  },
  {
    kanji: '福',
    meaning: ['fortune'],
    vocabulary: [{ jp: '幸福[こうふく]', en: 'happiness' }],
  },
  {
    kanji: '永',
    meaning: ['eternal'],
    vocabulary: [{ jp: '永遠[えいえん]の', en: 'eternal, permanent' }],
  },
  {
    kanji: '勇',
    meaning: ['bravery'],
    vocabulary: [
      { jp: '勇気[ゆうき]', en: 'bravery, courage' },
      { jp: '勇[いさ]ましい', en: 'brave, courageous' },
    ],
  },
  {
    kanji: '情',
    meaning: ['emotion', 'actual conditions'],
    vocabulary: [
      { jp: '感情[かんじょう]', en: 'feeling, emotion' },
      { jp: '友情[ゆうじょう]', en: 'friendship' },
      { jp: '事情[じじょう]', en: 'circumstances, matters' },
    ],
  },
  {
    kanji: '演',
    meaning: ['perform', 'express'],
    vocabulary: [
      { jp: '演習[えんしゅう]', en: 'practice, exercises, a seminar' },
      { jp: '演劇[えんげき]', en: 'drama, a play' },
      { jp: '講演[こうえん]', en: 'a lecture' },
      { jp: '演説[えんぜつ]', en: 'speech, an address' },
    ],
  },
  {
    kanji: '招',
    meaning: ['invite'],
    vocabulary: [
      { jp: '招待[しょうたい]する', en: 'to invite' },
      { jp: '招[まね]く', en: 'to invite' },
    ],
  },
  {
    kanji: '恋',
    meaning: ['love'],
    vocabulary: [
      { jp: '失恋[しつれん]する', en: 'to be disappointed in love' },
      { jp: '恋[こい]', en: 'love' },
      { jp: '恋人[こいびと]', en: "one's boyfriend, one's girlfriend" },
      { jp: '恋[こい]しい', en: 'to miss, to long for' },
    ],
  },
  {
    kanji: '然',
    meaning: ['state'],
    vocabulary: [
      { jp: '当然[とうぜん]の', en: 'natural, right' },
      { jp: '全然[ぜんぜん]', en: '... (not) at all' },
      { jp: '天然[てんねん]の', en: 'natural' },
    ],
  },
  {
    kanji: '突',
    meaning: ['thrust', 'strike'],
    vocabulary: [
      { jp: '突然[とつぜん]', en: 'suddenly' },
      { jp: '突[つ]く', en: 'to push, to thrust' },
      { jp: '突[つ]き当[あ]たる', en: 'to strike, to run into' },
    ],
  },
  {
    kanji: '再',
    meaning: ['again'],
    vocabulary: [
      { jp: '再〜[さい]', en: 're-, again' },
      { jp: '再来週[さらいしゅう]', en: 'the week after next' },
      { jp: '再[ふたた]び', en: 'again' },
    ],
  },
  {
    kanji: '愛',
    meaning: ['love'],
    vocabulary: [
      { jp: '愛[あい]', en: 'love' },
      { jp: '愛[あい]する', en: 'to love' },
      { jp: '愛情[あいじょう]', en: 'love' },
    ],
  },
  {
    kanji: '感',
    meaning: ['sense', 'feel'],
    vocabulary: [
      { jp: '感動[かんどう]する', en: 'to be impressed, to be moved' },
      { jp: '感心[かんしん]する', en: 'to admire' },
    ],
  },
  {
    kanji: '贈',
    meaning: ['present'],
    vocabulary: [
      { jp: '贈[おく]る', en: 'to give, to present' },
      { jp: '贈[おく]り物[もの]', en: 'a gift, a present' },
    ],
  },
  {
    kanji: '涙',
    meaning: ['tears'],
    vocabulary: [{ jp: '涙[なみだ]', en: 'tears' }],
  },
  {
    kanji: '武',
    meaning: ['military'],
    vocabulary: [
      { jp: '武士[ぶし]', en: 'samurai, a warrior' },
      { jp: '武器[ぶき]', en: 'a weapon' },
    ],
  },
  {
    kanji: '悲',
    meaning: ['sad'],
    vocabulary: [
      { jp: '悲劇[ひげき]', en: 'tragedy' },
      { jp: '悲[かな]しい', en: 'sad' },
      { jp: '悲[かな]しむ', en: 'to feel sad' },
    ],
  },
  {
    kanji: '王',
    meaning: ['king'],
    vocabulary: [
      { jp: '王[おう]', en: 'a king' },
      { jp: '女王[じょおう]', en: 'a queen' },
      { jp: '王子[おうじ]', en: 'a prince' },
    ],
  },
  {
    kanji: '想',
    meaning: ['think', 'imagine'],
    vocabulary: [
      { jp: '感想[かんそう]', en: 'impression' },
      { jp: '思想[しそう]', en: 'thought' },
    ],
  },

  // Lesson 20 (389–412)
  {
    kanji: '才',
    meaning: ['ability', 'talent'],
    vocabulary: [{ jp: '才能[さいのう]', en: 'ability, talent' }],
  },
  {
    kanji: '歳',
    meaning: ['year', 'age'],
    vocabulary: [
      { jp: '〜歳[さい]', en: '... years old (age suffix)' },
      { jp: '二十歳[はたち]', en: '20 years old' },
    ],
  },
  {
    kanji: '満',
    meaning: ['fill'],
    vocabulary: [
      { jp: '満員[まんいん]', en: 'full (of people)' },
      { jp: '満足[まんぞく]する', en: 'to be satisfied' },
      { jp: '満[み]ちる', en: 'to be filled' },
    ],
  },
  {
    kanji: '未',
    meaning: ['not yet'],
    vocabulary: [
      { jp: '未〜[み]', en: 'not yet, un-' },
      { jp: '未来[みらい]', en: 'future' },
      { jp: '未満[みまん]', en: 'under, below' },
    ],
  },
  {
    kanji: '整',
    meaning: ['arrange'],
    vocabulary: [
      { jp: '整理[せいり]する', en: 'to put ... in order' },
      { jp: '整数[せいすう]', en: 'an integral number' },
      { jp: '整[ととの]う', en: 'to be ready, to be prepared' },
    ],
  },
  {
    kanji: '係',
    meaning: ['connect', 'person in charge'],
    vocabulary: [
      { jp: '関係[かんけい]する', en: 'to be related' },
      { jp: '係[かかり]', en: 'a person in charge' },
    ],
  },
  {
    kanji: '現',
    meaning: ['actual', 'appear'],
    vocabulary: [
      { jp: '現在[げんざい]', en: 'present' },
      { jp: '現金[げんきん]', en: 'cash' },
      { jp: '現[あらわ]れる', en: 'to appear' },
      { jp: '現[あらわ]す', en: 'to show' },
    ],
  },
  {
    kanji: '貨',
    meaning: ['property'],
    vocabulary: [{ jp: '貨物[かもつ]', en: 'freight' }],
  },
  {
    kanji: '硬',
    meaning: ['hard', 'rigid'],
    vocabulary: [
      { jp: '硬貨[こうか]', en: 'a coin' },
      { jp: '硬[かた]い', en: 'hard, rigid' },
    ],
  },
  {
    kanji: '犯',
    meaning: ['crime', 'offend'],
    vocabulary: [
      { jp: '犯人[はんにん]', en: 'a criminal' },
      { jp: '犯罪[はんざい]', en: 'crime' },
      { jp: '防犯[ぼうはん]', en: 'prevention of crime' },
      { jp: '犯[おか]す', en: 'to offend' },
    ],
  },
  {
    kanji: '駐',
    meaning: ['park', 'stay'],
    vocabulary: [{ jp: '駐車[ちゅうしゃ]する', en: 'to park' }],
  },
  {
    kanji: '断',
    meaning: ['cut', 'decide'],
    vocabulary: [
      { jp: '判断[はんだん]する', en: 'to conclude, to decide' },
      { jp: '断水[だんすい]', en: 'the suspension of the water supply' },
      { jp: '断[ことわ]る', en: 'to refuse, to decline' },
    ],
  },
  {
    kanji: '捨',
    meaning: ['throw away'],
    vocabulary: [
      { jp: '四捨五入[ししゃごにゅう]する', en: 'to round off' },
      { jp: '捨[す]てる', en: 'to throw away' },
    ],
  },
  {
    kanji: '召',
    meaning: ['call'],
    vocabulary: [
      { jp: '召[め]し上[あ]がる', en: 'to eat, to drink (honorific)' },
    ],
  },
  {
    kanji: '盗',
    meaning: ['steal', 'rob'],
    vocabulary: [
      { jp: '強盗[ごうとう]', en: 'a robber' },
      { jp: '盗難[とうなん]', en: 'robbery, theft' },
      { jp: '盗[ぬす]む', en: 'to steal, to rob' },
    ],
  },
  {
    kanji: '触',
    meaning: ['touch'],
    vocabulary: [
      { jp: '触[さわ]る', en: 'to touch' },
      { jp: '触[ふ]れる', en: 'to touch, to reach' },
    ],
  },
  {
    kanji: '置',
    meaning: ['put'],
    vocabulary: [
      { jp: '装置[そうち]', en: 'equipment' },
      { jp: '置[お]く', en: 'to put' },
    ],
  },
  {
    kanji: '眠',
    meaning: ['sleep'],
    vocabulary: [
      { jp: '睡眠[すいみん]', en: 'sleep' },
      { jp: '眠[ねむ]い', en: 'sleepy' },
      { jp: '眠[ねむ]る', en: 'to sleep' },
    ],
  },
  {
    kanji: '袋',
    meaning: ['bag'],
    vocabulary: [
      { jp: '袋[ふくろ]', en: 'a bag' },
      { jp: '手袋[てぶくろ]', en: 'a glove' },
      { jp: '足袋[たび]', en: 'tabi (Japanese-style socks)' },
    ],
  },
  {
    kanji: '挟',
    meaning: ['put ... between'],
    vocabulary: [
      { jp: '挟[はさ]まる', en: 'to get between' },
      { jp: '挟[はさ]む', en: 'to put ... between' },
    ],
  },
  {
    kanji: '械',
    meaning: ['mechanical contrivance'],
    vocabulary: [{ jp: '機械[きかい]', en: 'a machine' }],
  },
  {
    kanji: '任',
    meaning: ['entrust', 'assume'],
    vocabulary: [
      { jp: '責任[せきにん]', en: 'responsibility, accountability' },
      { jp: '任[まか]せる', en: 'to entrust' },
    ],
  },
  {
    kanji: '責',
    meaning: ['blame'],
    vocabulary: [
      { jp: '責任[せきにん]', en: 'responsibility, accountability' },
      { jp: '責[せ]める', en: 'to accuse, to blame' },
    ],
  },
  {
    kanji: '担',
    meaning: ['carry on the shoulder'],
    vocabulary: [
      { jp: '担当[たんとう]する', en: 'to take charge of' },
      { jp: '担[かつ]ぐ', en: 'to carry on the shoulder' },
    ],
  },

  // Lesson 21 (413–436)
  {
    kanji: '講',
    meaning: ['explain', 'learn'],
    vocabulary: [{ jp: '講義[こうぎ]', en: 'a lecture' }],
  },
  {
    kanji: '申',
    meaning: ['report', 'say'],
    vocabulary: [
      { jp: '申請[しんせい]する', en: 'to apply' },
      { jp: '申[もう]す', en: 'to say (humble)' },
      { jp: '申[もう]し上[あ]げる', en: 'to say, to tell (humble)' },
      { jp: '申[もう]し訳[わけ]ない', en: "I'm sorry" },
    ],
  },
  {
    kanji: '込',
    meaning: ['move inward'],
    vocabulary: [
      { jp: '込[こ]む', en: 'to put in, to be crowded' },
      { jp: '申[もう]し込[こ]む', en: 'to apply' },
      { jp: '込[こ]める', en: 'to put in' },
    ],
  },
  {
    kanji: '導',
    meaning: ['guide'],
    vocabulary: [
      { jp: '指導[しどう]する', en: 'to direct, to coach, to guide' },
    ],
  },
  {
    kanji: '絡',
    meaning: ['interlink', 'entwine'],
    vocabulary: [{ jp: '連絡[れんらく]する', en: 'to contact' }],
  },
  {
    kanji: '望',
    meaning: ['hope', 'see'],
    vocabulary: [
      { jp: '望遠鏡[ぼうえんきょう]', en: 'a telescope' },
      { jp: '失望[しつぼう]する', en: 'to disappoint' },
      { jp: '望[のぞ]む', en: 'to hope, to wish' },
      { jp: '望[のぞ]み', en: 'hope, wish' },
    ],
  },
  {
    kanji: '希',
    meaning: ['hope'],
    vocabulary: [{ jp: '希望[きぼう]', en: 'hope' }],
  },
  {
    kanji: '在',
    meaning: ['exist'],
    vocabulary: [
      { jp: '在学[ざいがく]する', en: 'to attend a school' },
      { jp: '滞在[たいざい]する', en: 'to stay' },
    ],
  },
  {
    kanji: '可',
    meaning: ['possible', 'approve'],
    vocabulary: [
      { jp: '可能[かのう]な', en: 'possible' },
      { jp: '不可[ふか]', en: 'disapproval' },
    ],
  },
  {
    kanji: '許',
    meaning: ['permit'],
    vocabulary: [
      { jp: '許可[きょか]する', en: 'to permit' },
      { jp: '許[ゆる]す', en: 'to permit' },
    ],
  },
  {
    kanji: '要',
    meaning: ['important', 'necessary'],
    vocabulary: [
      { jp: '重要[じゅうよう]な', en: 'important' },
      { jp: '要点[ようてん]', en: 'the point' },
      { jp: '要[い]る', en: 'to need' },
    ],
  },
  {
    kanji: '必',
    meaning: ['necessary', 'surely'],
    vocabulary: [
      { jp: '必要[ひつよう]な', en: 'necessary' },
      { jp: '必死[ひっし]の', en: 'desperate' },
      { jp: '必[かなら]ず', en: 'surely' },
    ],
  },
  {
    kanji: '類',
    meaning: ['kind', 'sort', 'group'],
    vocabulary: [
      { jp: '書類[しょるい]', en: 'a document' },
      { jp: '分類[ぶんるい]する', en: 'to classify' },
    ],
  },
  {
    kanji: '筒',
    meaning: ['tube'],
    vocabulary: [{ jp: '水筒[すいとう]', en: 'a canteen' }],
  },
  {
    kanji: '封',
    meaning: ['seal'],
    vocabulary: [{ jp: '封筒[ふうとう]', en: 'an envelope' }],
  },
  {
    kanji: '務',
    meaning: ['duty', 'serve'],
    vocabulary: [
      { jp: '事務所[じむしょ]', en: 'an office' },
      { jp: '義務[ぎむ]', en: 'duty, obligation' },
      { jp: '務[つと]める', en: 'to serve' },
    ],
  },
  {
    kanji: '期',
    meaning: ['term', 'wish'],
    vocabulary: [
      { jp: '学期[がっき]', en: 'a term' },
      { jp: '期間[きかん]', en: 'a period, a term' },
      { jp: '期待[きたい]する', en: 'to expect' },
    ],
  },
  {
    kanji: '限',
    meaning: ['limit'],
    vocabulary: [
      { jp: '期限[きげん]', en: 'a deadline, a time limit' },
      { jp: '制限[せいげん]する', en: 'to restrict, to limit' },
      { jp: '限界[げんかい]', en: 'a limit' },
      { jp: '限[かぎ]る', en: 'to limit' },
      { jp: '限[かぎ]り', en: 'a limit' },
    ],
  },
  {
    kanji: '守',
    meaning: ['protect'],
    vocabulary: [
      { jp: '留守[るす]', en: 'absence' },
      { jp: '守[まも]る', en: 'to guard, to protect' },
    ],
  },
  {
    kanji: '進',
    meaning: ['advance'],
    vocabulary: [
      { jp: '進学[しんがく]する', en: 'to go on to ...' },
      { jp: '進歩[しんぽ]する', en: 'to progress, to advance' },
      { jp: '進[すす]む', en: 'to advance' },
      { jp: '進[すす]める', en: 'to advance' },
    ],
  },
  {
    kanji: '採',
    meaning: ['pick', 'gather'],
    vocabulary: [
      { jp: '採点[さいてん]する', en: 'to mark, to grade' },
      { jp: '採[と]る', en: 'to adapt, to employ' },
    ],
  },
  {
    kanji: '価',
    meaning: ['value', 'price'],
    vocabulary: [
      { jp: '物価[ぶっか]', en: '(commodity) prices' },
      { jp: '価格[かかく]', en: 'price' },
    ],
  },
  {
    kanji: '評',
    meaning: ['evaluate'],
    vocabulary: [
      { jp: '評価[ひょうか]', en: 'evaluation, estimation' },
      { jp: '評判[ひょうばん]', en: 'reputation' },
      { jp: '評論[ひょうろん]', en: 'criticism, review' },
    ],
  },
  {
    kanji: '績',
    meaning: ['performance'],
    vocabulary: [
      { jp: '成績[せいせき]', en: 'results' },
      { jp: '実績[じっせき]', en: 'an actual result' },
    ],
  },

  // Lesson 22 (437–460)
  {
    kanji: '紅',
    meaning: ['crimson'],
    vocabulary: [
      { jp: '紅茶[こうちゃ]', en: 'black tea' },
      { jp: '口紅[くちべに]', en: 'lipstick' },
    ],
  },
  {
    kanji: '葉',
    meaning: ['leaf'],
    vocabulary: [
      { jp: '紅葉[こうよう]', en: 'colored leaves' },
      { jp: '葉[は]', en: 'a leaf' },
      { jp: '言葉[ことば]', en: 'a word, language' },
    ],
  },
  {
    kanji: '対',
    meaning: ['opposite'],
    vocabulary: [
      { jp: '対象[たいしょう]', en: 'an object' },
      { jp: '〜に対[たい]して', en: 'toward, against' },
    ],
  },
  {
    kanji: '絶',
    meaning: ['cut'],
    vocabulary: [
      { jp: '絶対[ぜったい]に', en: 'absolutely' },
      { jp: '絶滅[ぜつめつ]する', en: 'to exterminate' },
      { jp: '絶[た]えず', en: 'constantly, always' },
    ],
  },
  {
    kanji: '泊',
    meaning: ['stay overnight'],
    vocabulary: [
      { jp: '宿泊[しゅくはく]する', en: 'to stay overnight' },
      { jp: '〜泊[はく]', en: 'counter for number of overnight stays' },
      { jp: '泊[と]まる', en: 'to stay overnight' },
      { jp: '泊[と]める', en: 'to lodge' },
    ],
  },
  {
    kanji: '程',
    meaning: ['extent'],
    vocabulary: [
      { jp: '程度[ていど]', en: 'degree, a level, a grade, an extent' },
      { jp: '日程[にってい]', en: 'a schedule' },
    ],
  },
  {
    kanji: '史',
    meaning: ['history'],
    vocabulary: [
      { jp: '日本史[にほんし]', en: 'Japanese history' },
      { jp: '世界史[せかいし]', en: 'world history' },
    ],
  },
  {
    kanji: '歴',
    meaning: ['personal history', "one's experience"],
    vocabulary: [{ jp: '歴史[れきし]', en: 'history' }],
  },
  {
    kanji: '灯',
    meaning: ['light'],
    vocabulary: [
      { jp: '灯油[とうゆ]', en: 'kerosene, paraffin oil' },
      { jp: '灯台[とうだい]', en: 'a lighthouse' },
      { jp: '灯[ひ]', en: 'light' },
    ],
  },
  {
    kanji: '靴',
    meaning: ['shoes'],
    vocabulary: [
      { jp: '靴[くつ]', en: 'shoes' },
      { jp: '靴下[くつした]', en: 'socks' },
    ],
  },
  {
    kanji: '装',
    meaning: ['dress'],
    vocabulary: [{ jp: '服装[ふくそう]', en: 'clothes, dress, appearance' }],
  },
  {
    kanji: '加',
    meaning: ['add', 'join'],
    vocabulary: [
      { jp: '加熱[かねつ]する', en: 'to heat' },
      { jp: '参加[さんか]する', en: 'to participate' },
      { jp: '加[くわ]わる', en: 'to be added, to join' },
      { jp: '加[くわ]える', en: 'to add' },
    ],
  },
  {
    kanji: '帽',
    meaning: ['hat', 'cap'],
    vocabulary: [{ jp: '帽子[ぼうし]', en: 'a hat, a cap' }],
  },
  {
    kanji: '産',
    meaning: ['produce', 'give birth'],
    vocabulary: [
      { jp: '産業[さんぎょう]', en: 'industry' },
      { jp: '生産[せいさん]する', en: 'to produce' },
      { jp: '土産[みやげ]', en: 'a souvenir' },
    ],
  },
  {
    kanji: '祭',
    meaning: ['festival'],
    vocabulary: [
      { jp: '大学祭[だいがくさい]', en: 'an university festival' },
      { jp: '祭[まつ]り', en: 'a festival' },
    ],
  },
  {
    kanji: '踊',
    meaning: ['dance'],
    vocabulary: [
      { jp: '踊[おど]る', en: 'to dance' },
      { jp: '踊[おど]り', en: 'a dance' },
    ],
  },
  {
    kanji: '衣',
    meaning: ['garment'],
    vocabulary: [
      { jp: '衣服[いふく]', en: 'cloth' },
      { jp: '衣食住[いしょくじゅう]', en: 'food, clothing and shelter' },
    ],
  },
  {
    kanji: '浴',
    meaning: ['bathe'],
    vocabulary: [
      { jp: 'シャワーを浴[あ]びる', en: 'to shower' },
      { jp: '浴衣[ゆかた]', en: 'yukata, an informal cotton kimono' },
    ],
  },
  {
    kanji: '緑',
    meaning: ['green'],
    vocabulary: [{ jp: '緑[みどり]', en: 'green' }],
  },
  {
    kanji: '指',
    meaning: ['finger', 'point to'],
    vocabulary: [
      { jp: '指定[してい]の', en: 'reserved, selected' },
      { jp: '指[ゆび]', en: 'a finger' },
    ],
  },
  {
    kanji: '約',
    meaning: ['promise', 'contract', 'approximately'],
    vocabulary: [
      { jp: '約束[やくそく]する', en: 'to promise' },
      { jp: '予約[よやく]する', en: 'to reserve, to book' },
      { jp: '約〜[やく]', en: 'about ...' },
    ],
  },
  {
    kanji: '拾',
    meaning: ['pick up'],
    vocabulary: [{ jp: '拾[ひろ]う', en: 'to pick up' }],
  },
  {
    kanji: '景',
    meaning: ['scene'],
    vocabulary: [
      {
        jp: '景気[けいき]がいい',
        en: 'the times are good, the business is brisk',
      },
      { jp: '風景[ふうけい]', en: 'scenery, a landscape, a view' },
      { jp: '景色[けしき]', en: 'a scene, a sight, a view' },
    ],
  },
  {
    kanji: '詰',
    meaning: ['stuff'],
    vocabulary: [
      { jp: '詰[つ]まる', en: 'to be stuffed' },
      { jp: '詰[つ]める', en: 'to stuff' },
      { jp: '缶詰[かんづめ]', en: 'a can' },
    ],
  },

  // Lesson 23 (461–484)
  {
    kanji: '諸',
    meaning: ['various'],
    vocabulary: [
      { jp: '諸国[しょこく]', en: 'various countries' },
      { jp: '諸問題[しょもんだい]', en: 'various problems' },
    ],
  },
  {
    kanji: '敬',
    meaning: ['respect'],
    vocabulary: [
      { jp: '敬語[けいご]', en: 'an honorific' },
      { jp: '敬[うやま]う', en: 'to respect' },
    ],
  },
  {
    kanji: '尊',
    meaning: ['respect'],
    vocabulary: [
      { jp: '尊敬[そんけい]する', en: 'to respect' },
      { jp: '尊重[そんちょう]する', en: 'to respect' },
    ],
  },
  {
    kanji: '詞',
    meaning: ['word'],
    vocabulary: [
      { jp: '名詞[めいし]', en: 'a noun' },
      { jp: '動詞[どうし]', en: 'a verb' },
      { jp: '形容詞[けいようし]', en: 'an adjective' },
    ],
  },
  {
    kanji: '副',
    meaning: ['secondary'],
    vocabulary: [
      { jp: '副〜[ふく]', en: 'vice-, associate' },
      { jp: '副詞[ふくし]', en: 'an adverb' },
    ],
  },
  {
    kanji: '志',
    meaning: ['will'],
    vocabulary: [{ jp: '意志[いし]', en: 'will, intention' }],
  },
  {
    kanji: '司',
    meaning: ['administer'],
    vocabulary: [
      { jp: '司会[しかい]', en: 'a master of ceremonies, a chairman' },
    ],
  },
  {
    kanji: '資',
    meaning: ['resources'],
    vocabulary: [
      { jp: '資料[しりょう]', en: 'material, data' },
      { jp: '資源[しげん]', en: 'resources' },
    ],
  },
  {
    kanji: '省',
    meaning: ['ministry', 'save', 'introspect'],
    vocabulary: [
      { jp: '〜省[しょう]', en: 'the Ministry of ...' },
      { jp: '省エネ[しょうエネ]', en: 'energy saving' },
      { jp: '反省[はんせい]する', en: 'to examine oneself, to introspect' },
      { jp: '省[はぶ]く', en: 'to exclude, to leave out' },
    ],
  },
  {
    kanji: '略',
    meaning: ['omit'],
    vocabulary: [
      { jp: '略[りゃく]す', en: 'to omit' },
      { jp: '省略[しょうりゃく]する', en: 'to omit' },
    ],
  },
  {
    kanji: '命',
    meaning: ['life', 'order'],
    vocabulary: [
      { jp: '生命[せいめい]', en: 'life' },
      { jp: '命令[めいれい]する', en: 'to order' },
      { jp: '寿命[じゅみょう]', en: 'a human life span' },
      { jp: '命[いのち]', en: 'life' },
    ],
  },
  {
    kanji: '共',
    meaning: ['joint', 'together'],
    vocabulary: [
      { jp: '共通[きょうつう]の', en: 'common' },
      { jp: '共同[きょうどう]の', en: 'common, joint' },
      { jp: '共[とも]に', en: 'together, both' },
    ],
  },
  {
    kanji: '調',
    meaning: ['tone', 'investigate', 'adjust'],
    vocabulary: [
      { jp: '強調[きょうちょう]する', en: 'to emphasize' },
      { jp: '調整[ちょうせい]する', en: 'to adjust, to regulate' },
      { jp: '調[しら]べる', en: 'to investigate, to examine' },
    ],
  },
  {
    kanji: '報',
    meaning: ['inform', 'report'],
    vocabulary: [
      { jp: '予報[よほう]', en: 'a forecast' },
      { jp: '情報[じょうほう]', en: 'information' },
    ],
  },
  {
    kanji: '告',
    meaning: ['notify'],
    vocabulary: [
      { jp: '報告[ほうこく]する', en: 'to report' },
      { jp: '広告[こうこく]', en: 'advertisement' },
    ],
  },
  {
    kanji: '実',
    meaning: ['real', 'fruit', 'practical'],
    vocabulary: [
      { jp: '事実[じじつ]', en: 'a fact' },
      { jp: '実験[じっけん]', en: 'experiment' },
      { jp: '実[み]', en: 'a fruit, a nut, a berry' },
      { jp: '実[みの]る', en: 'to bear fruit' },
    ],
  },
  {
    kanji: '構',
    meaning: ['construct', 'mind'],
    vocabulary: [
      { jp: '結構[けっこう]な', en: 'nice' },
      { jp: '構成[こうせい]する', en: 'to compose' },
      { jp: '構[かま]わない', en: "I don't care (mind) ..." },
    ],
  },
  {
    kanji: '処',
    meaning: ['treat'],
    vocabulary: [
      { jp: '処理[しょり]する', en: 'to handle, to manage, to treat' },
    ],
  },
  {
    kanji: '肯',
    meaning: ['affirm'],
    vocabulary: [{ jp: '肯定[こうてい]する', en: 'to affirm' }],
  },
  {
    kanji: '否',
    meaning: ['deny'],
    vocabulary: [{ jp: '否定[ひてい]する', en: 'to deny' }],
  },
  {
    kanji: '令',
    meaning: ['order'],
    vocabulary: [{ jp: '命令[めいれい]する', en: 'to order' }],
  },
  {
    kanji: '基',
    meaning: ['base'],
    vocabulary: [
      { jp: '基本[きほん]', en: 'a basis, a fundamental' },
      { jp: '基礎[きそ]', en: 'a basis, foundation' },
      { jp: '基[もと]', en: 'a basis, foundation' },
    ],
  },
  {
    kanji: '則',
    meaning: ['rule', 'law'],
    vocabulary: [{ jp: '法則[ほうそく]', en: 'law' }],
  },
  {
    kanji: '規',
    meaning: ['regulation'],
    vocabulary: [{ jp: '規則[きそく]', en: 'rule, regulation' }],
  },

  // Lesson 24 (485–508)
  {
    kanji: '論',
    meaning: ['argue', 'theory'],
    vocabulary: [
      { jp: '論文[ろんぶん]', en: 'a thesis, a paper' },
      { jp: '議論[ぎろん]する', en: 'to argue, to discuss' },
      { jp: '結論[けつろん]', en: 'a (final) conclusion' },
    ],
  },
  {
    kanji: '占',
    meaning: ['occupy', 'divine'],
    vocabulary: [
      { jp: '占[し]める', en: 'to occupy' },
      { jp: '占[うらな]う', en: 'to divine' },
    ],
  },
  {
    kanji: '幅',
    meaning: ['width'],
    vocabulary: [
      { jp: '幅[はば]', en: 'width, breadth' },
      { jp: '大幅[おおはば]な', en: 'substantial' },
    ],
  },
  {
    kanji: '横',
    meaning: ['sideways', 'side'],
    vocabulary: [
      { jp: '横断[おうだん]する', en: 'to cross' },
      { jp: '横断歩道[おうだんほどう]', en: 'a pedestrian crossing' },
      { jp: '横[よこ]', en: "one's side" },
      { jp: '横切[よこぎ]る', en: 'to cross' },
    ],
  },
  {
    kanji: '境',
    meaning: ['boundary'],
    vocabulary: [
      { jp: '国境[こっきょう]', en: 'a (national) border, a frontier' },
      { jp: '境[さかい]', en: 'a boundary, a border' },
    ],
  },
  {
    kanji: '逆',
    meaning: ['reverse', 'go against'],
    vocabulary: [
      { jp: '逆[ぎゃく]の', en: 'reverse, contrary, opposite' },
      { jp: '逆[さか]の', en: 'reverse, upside-down' },
      { jp: '逆[さか]さまの', en: 'reverse, upside-down' },
      { jp: '逆[さか]らう', en: 'to go against, to disobey' },
    ],
  },
  {
    kanji: '率',
    meaning: ['rate'],
    vocabulary: [
      { jp: '率直[そっちょく]な', en: 'frank' },
      { jp: '率[りつ]', en: 'rate, proportion' },
      { jp: '確率[かくりつ]', en: 'probability' },
    ],
  },
  {
    kanji: '比',
    meaning: ['compare', 'ratio'],
    vocabulary: [
      { jp: '比例[ひれい]する', en: 'to be in proportion' },
      { jp: '比率[ひりつ]', en: 'ratio, proportion' },
      { jp: '比[くら]べる', en: 'to compare' },
    ],
  },
  {
    kanji: '他',
    meaning: ['other'],
    vocabulary: [
      { jp: '他[た]の', en: 'other' },
      { jp: '他人[たにん]', en: 'others, an unrelated person' },
    ],
  },
  {
    kanji: '較',
    meaning: ['compare'],
    vocabulary: [{ jp: '比較[ひかく]する', en: 'to compare' }],
  },
  {
    kanji: '章',
    meaning: ['chapter', 'sentence'],
    vocabulary: [
      { jp: '章[しょう]', en: 'a chapter' },
      { jp: '文章[ぶんしょう]', en: 'sentences' },
    ],
  },
  {
    kanji: '述',
    meaning: ['state'],
    vocabulary: [
      { jp: '述語[じゅつご]', en: 'a predicate' },
      { jp: '述[の]べる', en: 'to state, to express' },
    ],
  },
  {
    kanji: '均',
    meaning: ['even'],
    vocabulary: [{ jp: '平均[へいきん]', en: 'average' }],
  },
  {
    kanji: '傾',
    meaning: ['incline'],
    vocabulary: [
      { jp: '傾向[けいこう]', en: 'tendency' },
      { jp: '傾[かたむ]く', en: 'to lean, to incline' },
    ],
  },
  {
    kanji: '件',
    meaning: ['matter', 'affair'],
    vocabulary: [{ jp: '事件[じけん]', en: 'an event, an affair' }],
  },
  {
    kanji: '条',
    meaning: ['article'],
    vocabulary: [{ jp: '条件[じょうけん]', en: 'a condition' }],
  },
  {
    kanji: '仮',
    meaning: ['temporary'],
    vocabulary: [
      { jp: '仮定[かてい]する', en: 'to suppose, to presume' },
      { jp: '仮名[かな]', en: 'kana' },
    ],
  },
  {
    kanji: '倍',
    meaning: ['times'],
    vocabulary: [{ jp: '倍[ばい]', en: 'times (suffix), double' }],
  },
  {
    kanji: '拡',
    meaning: ['expand'],
    vocabulary: [
      { jp: '拡大[かくだい]する', en: 'to expand, to enlarge' },
      { jp: '拡張[かくちょう]する', en: 'to expand, to extend' },
    ],
  },
  {
    kanji: '著',
    meaning: ['write'],
    vocabulary: [
      { jp: '著者[ちょしゃ]', en: 'an author, a writer' },
      { jp: '著[あらわ]す', en: 'to write' },
    ],
  },
  {
    kanji: '版',
    meaning: ['publish'],
    vocabulary: [{ jp: '出版[しゅっぱん]する', en: 'to publish' }],
  },
  {
    kanji: '環',
    meaning: ['ring', 'surround'],
    vocabulary: [{ jp: '環境[かんきょう]', en: 'environment' }],
  },
  {
    kanji: '判',
    meaning: ['judge'],
    vocabulary: [
      { jp: '判断[はんだん]する', en: 'to judge' },
      { jp: '判子[はんこ]', en: 'a personal seal' },
      { jp: '裁判[さいばん]', en: 'a trial' },
    ],
  },
  {
    kanji: '批',
    meaning: ['criticize'],
    vocabulary: [
      { jp: '批評[ひひょう]する', en: 'to criticize, to comment, to review' },
      {
        jp: '批判[ひはん]する',
        en: 'to criticize, to comment, to make a judgement',
      },
    ],
  },

  // Lesson 25 (509–532)
  {
    kanji: '健',
    meaning: ['healthy'],
    vocabulary: [{ jp: '保健[ほけん]', en: '(preservation of) health' }],
  },
  {
    kanji: '康',
    meaning: ['healthy'],
    vocabulary: [{ jp: '健康[けんこう]', en: 'health' }],
  },
  {
    kanji: '操',
    meaning: ['manipulate'],
    vocabulary: [
      { jp: '操作[そうさ]する', en: 'to operate' },
      { jp: '体操[たいそう]', en: 'gymnastics, exercise' },
    ],
  },
  {
    kanji: '肩',
    meaning: ['shoulder'],
    vocabulary: [{ jp: '肩[かた]', en: 'a shoulder' }],
  },
  {
    kanji: '背',
    meaning: ['back', 'height'],
    vocabulary: [
      { jp: '背[せ]', en: "one's back, height" },
      { jp: '背中[せなか]', en: "one's back" },
    ],
  },
  {
    kanji: '腰',
    meaning: ['lower back', 'waist', 'hip'],
    vocabulary: [
      { jp: '腰[こし]', en: 'a lower back, a waist, a hip' },
      { jp: '腰掛[こしかけ]', en: 'a chair, a bench' },
      { jp: '腰掛[こしか]ける', en: 'to sit' },
    ],
  },
  {
    kanji: '腕',
    meaning: ['arm'],
    vocabulary: [{ jp: '腕[うで]', en: 'an arm' }],
  },
  {
    kanji: '鼻',
    meaning: ['nose'],
    vocabulary: [{ jp: '鼻[はな]', en: 'a nose' }],
  },
  {
    kanji: '吸',
    meaning: ['breathe'],
    vocabulary: [
      { jp: '吸収[きゅうしゅう]する', en: 'to absorb' },
      { jp: '呼吸[こきゅう]する', en: 'to breathe' },
      { jp: '吸[す]う', en: 'to breathe, to snuff' },
    ],
  },
  {
    kanji: '胸',
    meaning: ['a chest'],
    vocabulary: [{ jp: '胸[むね]', en: 'a chest' }],
  },
  {
    kanji: '栄',
    meaning: ['flourish'],
    vocabulary: [{ jp: '栄養[えいよう]', en: 'nutrition' }],
  },
  {
    kanji: '骨',
    meaning: ['bone'],
    vocabulary: [
      { jp: '骨折[こっせつ]する', en: 'to break a bone' },
      { jp: '骨[ほね]', en: 'bone' },
    ],
  },
  {
    kanji: '悩',
    meaning: ['suffer'],
    vocabulary: [{ jp: '悩[なや]む', en: 'to worry, to suffer' }],
  },
  {
    kanji: '胃',
    meaning: ['stomach'],
    vocabulary: [{ jp: '胃[い]', en: 'a stomach' }],
  },
  {
    kanji: '髪',
    meaning: ['hair'],
    vocabulary: [
      { jp: '髪[かみ]', en: 'hair' },
      { jp: '髪の毛[かみのけ]', en: 'hair' },
    ],
  },
  {
    kanji: '抜',
    meaning: ['pull out'],
    vocabulary: [
      { jp: '抜[ぬ]ける', en: 'to pull out, to come out' },
      { jp: '抜[ぬ]く', en: 'to pull, to draw' },
    ],
  },
  {
    kanji: '療',
    meaning: ['treat'],
    vocabulary: [{ jp: '医療[いりょう]', en: 'medical treatment' }],
  },
  {
    kanji: '歯',
    meaning: ['tooth'],
    vocabulary: [{ jp: '歯[は]', en: 'a tooth' }],
  },
  {
    kanji: '磨',
    meaning: ['polish'],
    vocabulary: [{ jp: '磨[みが]く', en: 'to polish, to brush' }],
  },
  {
    kanji: '汗',
    meaning: ['sweat'],
    vocabulary: [{ jp: '汗[あせ]', en: 'sweat' }],
  },
  {
    kanji: '汚',
    meaning: ['dirty'],
    vocabulary: [
      { jp: '汚染[おせん]', en: 'pollution' },
      { jp: '汚[きたな]い', en: 'dirty' },
      { jp: '汚[よご]れる', en: 'to dirty' },
      { jp: '汚[よご]す', en: 'to dirty' },
    ],
  },
  {
    kanji: '局',
    meaning: ['bureau', 'limited part'],
    vocabulary: [
      { jp: '薬局[やっきょく]', en: 'a pharmacy' },
      { jp: '結局[けっきょく]', en: 'finally' },
    ],
  },
  {
    kanji: '看',
    meaning: ['watch', 'care for'],
    vocabulary: [
      { jp: '看病[かんびょう]する', en: 'to nurse' },
      { jp: '看板[かんばん]', en: 'a signboard' },
      { jp: '看護師[かんごし]', en: 'a nurse' },
    ],
  },
  {
    kanji: '血',
    meaning: ['blood'],
    vocabulary: [
      { jp: '血液[けつえき]', en: 'blood' },
      { jp: '輸血[ゆけつ]', en: 'blood transfusion' },
      { jp: '血[ち]', en: 'blood' },
    ],
  },

  // Lesson 26 (533–556)
  {
    kanji: '州',
    meaning: ['state'],
    vocabulary: [
      { jp: '州[しゅう]', en: 'a state, a province, a region' },
      { jp: '九州[きゅうしゅう]', en: 'Kyushu' },
    ],
  },
  {
    kanji: '帯',
    meaning: ['belt'],
    vocabulary: [
      { jp: '地帯[ちたい]', en: 'a zone, a region' },
      { jp: '熱帯[ねったい]', en: 'the tropical zone' },
      { jp: '温帯[おんたい]', en: 'the temperate zone' },
      { jp: '携帯電話[けいたいでんわ]', en: 'a mobile phone' },
      { jp: '帯[おび]', en: 'obi, a sash' },
    ],
  },
  {
    kanji: '節',
    meaning: ['joint'],
    vocabulary: [
      { jp: '調節[ちょうせつ]する', en: 'to adjust, to control' },
      { jp: '節約[せつやく]する', en: 'to save, to economize' },
      { jp: '節[ふし]', en: 'a joint' },
    ],
  },
  {
    kanji: '季',
    meaning: ['season'],
    vocabulary: [
      { jp: '季節[きせつ]', en: 'season' },
      { jp: '四季[しき]', en: 'the four seasons' },
    ],
  },
  {
    kanji: '湿',
    meaning: ['damp'],
    vocabulary: [
      { jp: '湿度[しつど]', en: 'humidity' },
      { jp: '湿[しめ]る', en: 'to get damp' },
    ],
  },
  {
    kanji: '蒸',
    meaning: ['steam'],
    vocabulary: [
      { jp: '蒸気[じょうき]', en: 'steam' },
      { jp: '蒸発[じょうはつ]する', en: 'to evaporate' },
      { jp: '蒸[む]す', en: 'to steam' },
      { jp: '蒸[む]し暑[あつ]い', en: 'muggy, sultry' },
    ],
  },
  {
    kanji: '陸',
    meaning: ['land'],
    vocabulary: [
      { jp: '陸[りく]', en: 'land' },
      { jp: '陸地[りくち]', en: 'land' },
      { jp: '大陸[たいりく]', en: 'a continent' },
    ],
  },
  {
    kanji: '吹',
    meaning: ['blow'],
    vocabulary: [
      { jp: '吹[ふ]く', en: 'to blow' },
      { jp: '吹雪[ふぶき]', en: 'a snowstorm' },
    ],
  },
  {
    kanji: '乾',
    meaning: ['dry'],
    vocabulary: [
      { jp: '乾電池[かんでんち]', en: 'a dry battery' },
      { jp: '乾[かわ]く', en: 'to dry' },
      { jp: '乾[かわ]かす', en: 'to dry' },
    ],
  },
  {
    kanji: '燥',
    meaning: ['dry up'],
    vocabulary: [{ jp: '乾燥[かんそう]する', en: 'to dry up' }],
  },
  {
    kanji: '震',
    meaning: ['quake'],
    vocabulary: [
      { jp: '地震[じしん]', en: 'an earthquake' },
      { jp: '震[ふる]える', en: 'to tremble, to shake, to quake' },
    ],
  },
  {
    kanji: '泉',
    meaning: ['fountain'],
    vocabulary: [
      { jp: '温泉[おんせん]', en: 'a spa' },
      { jp: '泉[いずみ]', en: 'a fountain' },
    ],
  },
  {
    kanji: '富',
    meaning: ['rich'],
    vocabulary: [
      { jp: '豊富[ほうふ]な', en: 'rich, abundant' },
      { jp: '富士山[ふじさん]', en: 'Mt. Fuji' },
    ],
  },
  {
    kanji: '湖',
    meaning: ['lake'],
    vocabulary: [
      { jp: '琵琶湖[びわこ]', en: 'Lake Biwa' },
      { jp: '湖[みずうみ]', en: 'a lake' },
    ],
  },
  {
    kanji: '豊',
    meaning: ['abundant'],
    vocabulary: [
      { jp: '豊富[ほうふ]な', en: 'rich, abundant' },
      { jp: '豊[ゆた]かな', en: 'rich, abundant' },
    ],
  },
  {
    kanji: '湾',
    meaning: ['bay', 'gulf'],
    vocabulary: [{ jp: '湾[わん]', en: 'a bay, a gulf' }],
  },
  {
    kanji: '砂',
    meaning: ['sand'],
    vocabulary: [
      { jp: '砂漠[さばく]', en: 'desert' },
      { jp: '砂糖[さとう]', en: 'sugar' },
      { jp: '砂[すな]', en: 'sand' },
    ],
  },
  {
    kanji: '埋',
    meaning: ['bury'],
    vocabulary: [{ jp: '埋[う]める', en: 'to bury' }],
  },
  {
    kanji: '岸',
    meaning: ['shore'],
    vocabulary: [
      { jp: '海岸[かいがん]', en: 'the seaside, the beach, the shore' },
      { jp: '岸[きし]', en: 'shore' },
    ],
  },
  {
    kanji: '浮',
    meaning: ['float'],
    vocabulary: [
      { jp: '浮[う]く', en: 'to float' },
      { jp: '浮[う]かぶ', en: 'to float' },
      { jp: '浮[う]かべる', en: 'to float' },
    ],
  },
  {
    kanji: '欧',
    meaning: ['Europe'],
    vocabulary: [
      { jp: '欧州[おうしゅう]', en: 'Europe' },
      { jp: '欧米[おうべい]', en: 'Europe and America' },
    ],
  },
  {
    kanji: '積',
    meaning: ['accumulate'],
    vocabulary: [
      { jp: '面積[めんせき]', en: 'an area' },
      { jp: '体積[たいせき]', en: '(cubic) volume' },
      { jp: '積極的[せっきょくてき]な', en: 'positive' },
      { jp: '積[つ]もる', en: 'to accumulate, to lie, to sheet' },
      { jp: '積[つ]む', en: 'to load, to freight, to stack' },
    ],
  },
  {
    kanji: '沈',
    meaning: ['sink'],
    vocabulary: [{ jp: '沈[しず]む', en: 'to sink' }],
  },
  {
    kanji: '泥',
    meaning: ['mud'],
    vocabulary: [
      { jp: '泥[どろ]', en: 'mud' },
      { jp: '泥棒[どろぼう]', en: 'a thief' },
    ],
  },

  // Lesson 27 (557–580)
  {
    kanji: '植',
    meaning: ['plant'],
    vocabulary: [
      { jp: '植物[しょくぶつ]', en: 'a plant' },
      { jp: '植[う]える', en: 'to plant' },
    ],
  },
  {
    kanji: '虫',
    meaning: ['insect'],
    vocabulary: [
      { jp: '虫[むし]', en: 'an insect' },
      { jp: '虫歯[むしば]', en: 'a carious tooth' },
    ],
  },
  {
    kanji: '甘',
    meaning: ['sweet', 'lenient'],
    vocabulary: [
      { jp: '甘[あま]い', en: 'sweet' },
      { jp: '甘[あま]やかす', en: 'to spoil' },
    ],
  },
  {
    kanji: '液',
    meaning: ['liquid'],
    vocabulary: [
      { jp: '液体[えきたい]', en: 'liquid, fluid' },
      { jp: '血液[けつえき]', en: 'blood' },
    ],
  },
  {
    kanji: '群',
    meaning: ['group'],
    vocabulary: [{ jp: '群[む]れ', en: 'a group, a crowd' }],
  },
  {
    kanji: '根',
    meaning: ['root'],
    vocabulary: [{ jp: '根[ね]', en: 'a root' }],
  },
  {
    kanji: '巨',
    meaning: ['huge'],
    vocabulary: [{ jp: '巨大[きょだい]な', en: 'huge, enormous, gigantic' }],
  },
  {
    kanji: '針',
    meaning: ['needle', 'pin', 'hook'],
    vocabulary: [
      { jp: '方針[ほうしん]', en: 'a course, a policy' },
      { jp: '針[はり]', en: 'a needle, a pin, a hook' },
    ],
  },
  {
    kanji: '枝',
    meaning: ['branch'],
    vocabulary: [{ jp: '枝[えだ]', en: 'a branch' }],
  },
  {
    kanji: '辺',
    meaning: ['surrounding'],
    vocabulary: [
      { jp: '辺[へん]', en: 'neighbourhood, a side' },
      { jp: '周辺[しゅうへん]', en: 'the periphery' },
      { jp: '辺[あた]り', en: 'around' },
    ],
  },
  {
    kanji: '散',
    meaning: ['scatter'],
    vocabulary: [
      { jp: '散歩[さんぽ]する', en: 'to take a walk' },
      { jp: '散[ち]る', en: 'to fall, to scatter' },
      { jp: '散[ち]らす', en: 'to scatter' },
      { jp: '散[ち]らかる', en: 'to be scattered' },
      { jp: '散[ち]らかす', en: 'to scatter' },
    ],
  },
  {
    kanji: '咲',
    meaning: ['bloom'],
    vocabulary: [{ jp: '咲[さ]く', en: 'to bloom' }],
  },
  {
    kanji: '香',
    meaning: ['fragrance'],
    vocabulary: [
      { jp: '香水[こうすい]', en: 'perfume' },
      { jp: '香[かお]り', en: 'fragrance, scent' },
    ],
  },
  {
    kanji: '草',
    meaning: ['grass'],
    vocabulary: [{ jp: '草[くさ]', en: 'grass' }],
  },
  {
    kanji: '耕',
    meaning: ['cultivate'],
    vocabulary: [
      { jp: '耕地[こうち]', en: 'arable land' },
      { jp: '耕[たがや]す', en: 'to cultivate' },
    ],
  },
  {
    kanji: '種',
    meaning: ['seed', 'kind'],
    vocabulary: [
      { jp: '種類[しゅるい]', en: 'a kind, a sort' },
      { jp: '人種[じんしゅ]', en: 'a race' },
      { jp: '種[たね]', en: 'seed' },
    ],
  },
  {
    kanji: '皮',
    meaning: ['skin'],
    vocabulary: [
      { jp: '皮膚[ひふ]', en: 'skin' },
      { jp: '皮肉[ひにく]', en: 'sarcasm, irony' },
      { jp: '皮[かわ]', en: 'leather, peel, film' },
      { jp: '毛皮[けがわ]', en: 'a fur' },
    ],
  },
  {
    kanji: '含',
    meaning: ['include'],
    vocabulary: [
      { jp: '含[ふく]む', en: 'to include, to contain' },
      { jp: '含[ふく]める', en: 'to include' },
    ],
  },
  {
    kanji: '辛',
    meaning: ['hot', 'spicy', 'salty'],
    vocabulary: [{ jp: '辛[から]い', en: 'hot, spicy, salty' }],
  },
  {
    kanji: '照',
    meaning: ['shine'],
    vocabulary: [
      { jp: '照[て]る', en: 'to shine, to blaze' },
      { jp: '照[て]らす', en: 'to light, to illuminate' },
    ],
  },
  {
    kanji: '鳴',
    meaning: ['cry', 'sound'],
    vocabulary: [
      { jp: '鳴[な]く', en: 'to howl, to bark' },
      { jp: '鳴[な]る', en: 'to sound, to ring' },
      { jp: '鳴[な]らす', en: 'to sound, to ring' },
    ],
  },
  {
    kanji: '谷',
    meaning: ['valley'],
    vocabulary: [{ jp: '谷[たに]', en: 'valley' }],
  },
  {
    kanji: '坂',
    meaning: ['slope'],
    vocabulary: [{ jp: '坂[さか]', en: 'a slope' }],
  },
  {
    kanji: '域',
    meaning: ['area'],
    vocabulary: [
      { jp: '地域[ちいき]', en: 'an area, a region, a district' },
      { jp: '流域[りゅういき]', en: 'a basin' },
    ],
  },

  // Lesson 28 (581–604)
  {
    kanji: '星',
    meaning: ['star'],
    vocabulary: [{ jp: '星[ほし]', en: 'a star' }],
  },
  {
    kanji: '陽',
    meaning: ['sun'],
    vocabulary: [
      { jp: '太陽[たいよう]', en: 'the sun' },
      { jp: '陽気[ようき]な', en: 'cheerful, merry, lively' },
    ],
  },
  {
    kanji: '周',
    meaning: ['periphery'],
    vocabulary: [
      { jp: '円周[えんしゅう]', en: 'circumference' },
      { jp: '周囲[しゅうい]', en: 'circumference' },
      { jp: '周[まわ]り', en: 'around' },
    ],
  },
  {
    kanji: '極',
    meaning: ['extreme', 'pole'],
    vocabulary: [
      { jp: '北極[ほっきょく]', en: 'the North Pole' },
      { jp: '南極[なんきょく]', en: 'the South Pole' },
      { jp: '積極的[せっきょくてき]な', en: 'positive' },
      { jp: '消極的[しょうきょくてき]な', en: 'negative' },
    ],
  },
  {
    kanji: '裏',
    meaning: ['back', 'reverse'],
    vocabulary: [
      { jp: '裏[うら]', en: 'the reverse' },
      { jp: '裏口[うらぐち]', en: 'a back door' },
      { jp: '裏返[うらがえ]す', en: 'to reverse' },
      { jp: '裏切[うらぎ]る', en: 'to betray' },
    ],
  },
  {
    kanji: '宇',
    meaning: ['universe'],
    vocabulary: [{ jp: '宇宙[うちゅう]', en: 'the universe' }],
  },
  {
    kanji: '宙',
    meaning: ['space'],
    vocabulary: [{ jp: '宇宙[うちゅう]', en: 'the universe' }],
  },
  {
    kanji: '億',
    meaning: ['one hundred million'],
    vocabulary: [{ jp: '一億[いちおく]', en: 'one hundred million' }],
  },
  {
    kanji: '河',
    meaning: ['river'],
    vocabulary: [{ jp: '河[かわ]', en: 'river' }],
  },
  {
    kanji: '光',
    meaning: ['light'],
    vocabulary: [
      { jp: '光線[こうせん]', en: 'a ray' },
      { jp: '光景[こうけい]', en: 'scene' },
      { jp: '光[ひかり]', en: 'light' },
      { jp: '光[ひか]る', en: 'to shine, to glitter, to flash' },
    ],
  },
  {
    kanji: '逃',
    meaning: ['escape'],
    vocabulary: [
      { jp: '逃[に]げる', en: 'to escape' },
      { jp: '逃[に]がす', en: 'to set ... free' },
    ],
  },
  {
    kanji: '異',
    meaning: ['different'],
    vocabulary: [
      { jp: '異常[いじょう]な', en: 'unusual' },
      { jp: '異[こと]なる', en: 'to differ' },
    ],
  },
  {
    kanji: '測',
    meaning: ['measure'],
    vocabulary: [
      { jp: '測定[そくてい]する', en: 'to measure' },
      { jp: '予測[よそく]する', en: 'to estimate, to predict' },
      { jp: '測量[そくりょう]する', en: 'to measure' },
      { jp: '測[はか]る', en: 'to measure' },
    ],
  },
  {
    kanji: '観',
    meaning: ['view', 'observe'],
    vocabulary: [
      { jp: '観察[かんさつ]する', en: 'to observe, to watch' },
      { jp: '観測[かんそく]する', en: 'to observe' },
      { jp: '観光[かんこう]', en: 'sightseeing' },
    ],
  },
  {
    kanji: '氷',
    meaning: ['ice'],
    vocabulary: [{ jp: '氷[こおり]', en: 'ice' }],
  },
  {
    kanji: '溶',
    meaning: ['dissolve', 'melt'],
    vocabulary: [
      { jp: '溶岩[ようがん]', en: 'lava' },
      { jp: '溶[と]ける', en: 'to dissolve, to melt' },
      { jp: '溶[と]かす', en: 'to dissolve, to melt' },
      { jp: '溶[と]く', en: 'to dissolve' },
    ],
  },
  {
    kanji: '恐',
    meaning: ['fear'],
    vocabulary: [
      { jp: '恐縮[きょうしゅく]する', en: 'to be thankful, to be sorry' },
      { jp: '恐[おそ]ろしい', en: 'awful, terrible' },
      { jp: '恐[おそ]れる', en: 'to fear' },
      { jp: '恐[おそ]れ', en: 'fear' },
    ],
  },
  {
    kanji: '圧',
    meaning: ['pressure'],
    vocabulary: [{ jp: '気圧[きあつ]', en: '(barometric) pressure' }],
  },
  {
    kanji: '探',
    meaning: ['search'],
    vocabulary: [
      { jp: '探[さぐ]る', en: 'to search for' },
      { jp: '探[さが]す', en: 'to search for' },
    ],
  },
  {
    kanji: '庁',
    meaning: ['government office'],
    vocabulary: [
      { jp: '気象庁[きしょうちょう]', en: 'the Meteorological Agency' },
      { jp: '官庁[かんちょう]', en: 'a government office' },
    ],
  },
  {
    kanji: '怖',
    meaning: ['fear'],
    vocabulary: [
      { jp: '恐怖[きょうふ]', en: 'fear, terror' },
      { jp: '怖[こわ]い', en: 'fearful, terrible, dreadful' },
    ],
  },
  {
    kanji: '波',
    meaning: ['wave'],
    vocabulary: [
      { jp: '電波[でんぱ]', en: 'a radio wave' },
      { jp: '波[なみ]', en: 'a wave' },
    ],
  },
  {
    kanji: '零',
    meaning: ['zero'],
    vocabulary: [
      { jp: '零[れい]', en: 'zero' },
      { jp: '零点[れいてん]', en: 'zero' },
    ],
  },
  {
    kanji: '兆',
    meaning: ['trillion'],
    vocabulary: [{ jp: '一兆[いっちょう]', en: 'one trillion' }],
  },

  // Lesson 29 (605–628)
  {
    kanji: '亡',
    meaning: ['die', 'lose'],
    vocabulary: [
      { jp: '死亡[しぼう]する', en: 'to die, to pass away' },
      { jp: '亡[な]くなる', en: 'to die, to pass away' },
      { jp: '亡[な]くす', en: 'to lose' },
    ],
  },
  {
    kanji: '展',
    meaning: ['develop', 'see'],
    vocabulary: [
      { jp: '発展[はってん]する', en: 'to expand, to develop' },
      { jp: '展覧会[てんらんかい]', en: 'an exhibition' },
    ],
  },
  {
    kanji: '捕',
    meaning: ['catch'],
    vocabulary: [
      { jp: '逮捕[たいほ]する', en: 'to arrest' },
      { jp: '捕[と]らえる', en: 'to catch' },
      { jp: '捕[と]る', en: 'to catch' },
      { jp: '捕[つか]まる', en: 'to be caught' },
      { jp: '捕[つか]まえる', en: 'to catch' },
    ],
  },
  {
    kanji: '宝',
    meaning: ['treasure'],
    vocabulary: [
      { jp: '宝石[ほうせき]', en: 'a jewel' },
      { jp: '宝[たから]', en: 'treasure' },
    ],
  },
  {
    kanji: '棒',
    meaning: ['stick'],
    vocabulary: [
      { jp: '棒[ぼう]', en: 'a stick' },
      { jp: '泥棒[どろぼう]', en: 'a thief' },
    ],
  },
  {
    kanji: '輪',
    meaning: ['ring'],
    vocabulary: [
      { jp: '車輪[しゃりん]', en: 'a wheel' },
      { jp: '輪[わ]', en: 'a ring' },
      { jp: '指輪[ゆびわ]', en: 'a ring' },
    ],
  },
  {
    kanji: '爆',
    meaning: ['explode'],
    vocabulary: [{ jp: '爆発[ばくはつ]する', en: 'to explode' }],
  },
  {
    kanji: '原',
    meaning: ['origin', 'plain'],
    vocabulary: [
      { jp: '原料[げんりょう]', en: 'raw material' },
      { jp: '秋葉原[あきはばら]', en: 'Akihabara' },
    ],
  },
  {
    kanji: '因',
    meaning: ['cause'],
    vocabulary: [{ jp: '原因[げんいん]', en: 'cause' }],
  },
  {
    kanji: '捜',
    meaning: ['look for'],
    vocabulary: [{ jp: '捜[さが]す', en: 'to look for' }],
  },
  {
    kanji: '救',
    meaning: ['save'],
    vocabulary: [
      { jp: '救助[きゅうじょ]する', en: 'to rescue, to save' },
      { jp: '救[すく]う', en: 'to save, to rescue' },
    ],
  },
  {
    kanji: '識',
    meaning: ['sense'],
    vocabulary: [
      { jp: '知識[ちしき]', en: 'knowledge' },
      { jp: '意識[いしき]', en: 'consciousness, awareness' },
    ],
  },
  {
    kanji: '居',
    meaning: ['exist', 'live'],
    vocabulary: [
      { jp: '住居[じゅうきょ]', en: 'a house, a residence' },
      { jp: '居間[いま]', en: 'a living room' },
      { jp: '居眠[いねむ]り', en: 'a doze' },
    ],
  },
  {
    kanji: '疑',
    meaning: ['doubt'],
    vocabulary: [
      { jp: '疑問[ぎもん]', en: 'question' },
      { jp: '疑[うたが]う', en: 'to doubt' },
    ],
  },
  {
    kanji: '反',
    meaning: ['oppose', 'disobey'],
    vocabulary: [
      { jp: '反対[はんたい]する', en: 'to oppose' },
      { jp: '違反[いはん]する', en: 'to violate' },
    ],
  },
  {
    kanji: '罪',
    meaning: ['crime', 'sin'],
    vocabulary: [
      { jp: '犯罪[はんざい]', en: 'a crime, an offense' },
      { jp: '罪[つみ]', en: 'a crime, a sin' },
    ],
  },
  {
    kanji: '叫',
    meaning: ['cry'],
    vocabulary: [{ jp: '叫[さけ]ぶ', en: 'to cry, to shout' }],
  },
  {
    kanji: '況',
    meaning: ['condition'],
    vocabulary: [{ jp: '状況[じょうきょう]', en: 'condition, situation' }],
  },
  {
    kanji: '殺',
    meaning: ['kill'],
    vocabulary: [
      { jp: '自殺[じさつ]する', en: 'to kill oneself' },
      { jp: '殺[ころ]す', en: 'to kill' },
    ],
  },
  {
    kanji: '追',
    meaning: ['chase'],
    vocabulary: [
      { jp: '追加[ついか]する', en: 'to add' },
      { jp: '追[お]う', en: 'to pursue, to follow' },
      { jp: '追[お]い越[こ]す', en: 'to pass, to overtake' },
      { jp: '追[お]いつく', en: 'to overtake, to catch up with' },
      { jp: '追[お]いかける', en: 'to chase, to run after' },
    ],
  },
  {
    kanji: '婦',
    meaning: ['woman'],
    vocabulary: [
      { jp: '婦人[ふじん]', en: 'a woman' },
      { jp: '主婦[しゅふ]', en: 'a housewife' },
    ],
  },
  {
    kanji: '途',
    meaning: ['way'],
    vocabulary: [
      { jp: '途中[とちゅう]で', en: 'on the way, in the middle of' },
    ],
  },
  {
    kanji: '灰',
    meaning: ['ash'],
    vocabulary: [
      { jp: '灰[はい]', en: 'ash' },
      { jp: '灰色[はいいろ]', en: 'gray' },
      { jp: '灰皿[はいざら]', en: 'an ashtray' },
    ],
  },
  {
    kanji: '暴',
    meaning: ['violent'],
    vocabulary: [
      { jp: '乱暴[らんぼう]な', en: 'violent' },
      { jp: '暴[あば]れる', en: 'to behave violently' },
    ],
  },
  {
    kanji: '民',
    meaning: ['people'],
    vocabulary: [
      { jp: '国民[こくみん]', en: 'the nation' },
      { jp: '民主主義[みんしゅしゅぎ]', en: 'democracy' },
      { jp: '市民[しみん]', en: 'a citizen' },
    ],
  },
  {
    kanji: '録',
    meaning: ['record'],
    vocabulary: [
      { jp: '記録[きろく]する', en: 'to record' },
      { jp: '録音[ろくおん]する', en: 'to record' },
    ],
  },
  {
    kanji: '位',
    meaning: ['rank', 'position', 'place'],
    vocabulary: [
      { jp: '単位[たんい]', en: 'a unit, a credit' },
      { jp: '地位[ちい]', en: 'a status, a position' },
      { jp: '〜位[い]', en: '... place' },
      { jp: '位[くらい]', en: 'rank, a grade' },
    ],
  },
  {
    kanji: '秒',
    meaning: ['second'],
    vocabulary: [{ jp: '秒[びょう]', en: 'a second' }],
  },
  {
    kanji: '優',
    meaning: ['superior', 'excellent', 'gentle'],
    vocabulary: [
      { jp: '優秀[ゆうしゅう]な', en: 'excellent, superior' },
      { jp: '俳優[はいゆう]', en: 'an actor' },
      { jp: '優[やさ]しい', en: 'gentle, tender' },
      { jp: '優[すぐ]れた', en: 'excellent, fine' },
    ],
  },
  {
    kanji: '勝',
    meaning: ['win'],
    vocabulary: [
      { jp: '優勝[ゆうしょう]する', en: 'to win the victory' },
      { jp: '勝[か]つ', en: 'to win' },
      { jp: '勝手[かって]に', en: 'selfishly, freely' },
    ],
  },
  {
    kanji: '退',
    meaning: ['retreat', 'retire'],
    vocabulary: [
      { jp: '退院[たいいん]する', en: 'to leave (the) hospital' },
      { jp: '引退[いんたい]する', en: 'to retire' },
    ],
  },
  {
    kanji: '勢',
    meaning: ['force'],
    vocabulary: [
      { jp: '大勢[おおぜい]', en: 'many people' },
      { jp: '姿勢[しせい]', en: 'a posture, an attitude' },
      { jp: '勢[いきお]い', en: 'power, force' },
    ],
  },
  {
    kanji: '仲',
    meaning: ['relationship'],
    vocabulary: [
      { jp: '仲[なか]', en: 'relations, closeness' },
      { jp: '仲[なか]よし', en: 'a close friend' },
      { jp: '仲間[なかま]', en: 'a group, a company' },
      { jp: '仲直[なかなお]り', en: 'reconciliation' },
    ],
  },
  {
    kanji: '打',
    meaning: ['strike', 'hit'],
    vocabulary: [{ jp: '打[う]つ', en: 'to strike, to hit' }],
  },
  {
    kanji: '投',
    meaning: ['throw', 'send in'],
    vocabulary: [
      { jp: '投書[とうしょ]する', en: 'to contribute (an article)' },
      { jp: '投[な]げる', en: 'to throw' },
    ],
  },
  {
    kanji: '頼',
    meaning: ['rely on', 'ask'],
    vocabulary: [
      { jp: '信頼[しんらい]する', en: 'to trust, to rely on' },
      { jp: '頼[たの]もしい', en: 'dependable' },
      { jp: '頼[たの]む', en: 'to ask, to request' },
      { jp: '頼[たよ]る', en: 'to rely on, to depend on' },
    ],
  },
  {
    kanji: '戦',
    meaning: ['war', 'fight', 'game'],
    vocabulary: [
      { jp: '戦争[せんそう]', en: 'war' },
      { jp: '〜戦[せん]', en: 'war, a game' },
      { jp: '戦[たたか]う', en: 'to fight' },
    ],
  },
  {
    kanji: '延',
    meaning: ['extend', 'postpone'],
    vocabulary: [
      { jp: '延期[えんき]する', en: 'to postpone' },
      { jp: '延長[えんちょう]する', en: 'to extend' },
      { jp: '延[の]びる', en: 'to get longer, to postpone' },
      { jp: '延[の]ばす', en: 'to make ... longer, to extend, to postpone' },
    ],
  },
  {
    kanji: '負',
    meaning: ['bear', 'lose'],
    vocabulary: [
      { jp: '勝負[しょうぶ]', en: 'victory or defeat, a match' },
      { jp: '負担[ふたん]', en: 'bear' },
      { jp: '負[ま]ける', en: 'to lose' },
    ],
  },
  {
    kanji: '賞',
    meaning: ['prize'],
    vocabulary: [
      { jp: 'ノーベル賞[しょう]', en: 'a Nobel prize' },
      { jp: '賞金[しょうきん]', en: 'prize money' },
    ],
  },
  {
    kanji: '争',
    meaning: ['contend'],
    vocabulary: [
      { jp: '競争[きょうそう]する', en: 'to compete' },
      { jp: '論争[ろんそう]する', en: 'to dispute' },
      { jp: '争[あらそ]う', en: 'to contend, to contest' },
    ],
  },
  {
    kanji: '団',
    meaning: ['gather'],
    vocabulary: [
      { jp: '団地[だんち]', en: 'a housing complex' },
      { jp: '団体[だんたい]', en: 'a group, party' },
      { jp: '集団[しゅうだん]', en: 'a group' },
      { jp: '布団[ふとん]', en: 'futon, a thick quilt' },
    ],
  },
  {
    kanji: '失',
    meaning: ['lose', 'fail'],
    vocabulary: [
      { jp: '失礼[しつれい]な', en: 'impolite' },
      { jp: '失業[しつぎょう]する', en: "to lose one's job" },
      { jp: '過失[かしつ]', en: 'a mistake' },
      { jp: '失[うしな]う', en: 'to lose' },
    ],
  },
  {
    kanji: '敗',
    meaning: ['defeat'],
    vocabulary: [
      { jp: '勝敗[しょうはい]', en: 'victory or defeat' },
      { jp: '失敗[しっぱい]する', en: 'to fail' },
    ],
  },
  {
    kanji: '委',
    meaning: ['commit'],
    vocabulary: [
      { jp: '委員[いいん]', en: 'a member of a committee' },
      { jp: '委員会[いいんかい]', en: 'a committee, a commission' },
    ],
  },
  {
    kanji: '訪',
    meaning: ['visit'],
    vocabulary: [
      { jp: '訪問[ほうもん]する', en: 'to visit' },
      { jp: '訪[たず]ねる', en: 'to visit' },
    ],
  },
  {
    kanji: '競',
    meaning: ['compete'],
    vocabulary: [
      { jp: '競争[きょうそう]する', en: 'to compete' },
      { jp: '競技[きょうぎ]', en: 'a match, a contest' },
      { jp: '競馬[けいば]', en: 'horse racing' },
    ],
  },
  {
    kanji: '依',
    meaning: ['depend'],
    vocabulary: [{ jp: '依頼[いらい]する', en: 'to ask, to request' }],
  },
  {
    kanji: '与',
    meaning: ['give'],
    vocabulary: [
      { jp: '給与[きゅうよ]', en: 'an allowance, a pay' },
      { jp: '与[あた]える', en: 'to give' },
    ],
  },
  {
    kanji: '炭',
    meaning: ['coal'],
    vocabulary: [
      { jp: '石炭[せきたん]', en: 'coal' },
      { jp: '炭鉱[たんこう]', en: 'a coal mine' },
    ],
  },
  {
    kanji: '鉱',
    meaning: ['mine'],
    vocabulary: [{ jp: '鉱物[こうぶつ]', en: 'a mineral' }],
  },
  {
    kanji: '型',
    meaning: ['type'],
    vocabulary: [
      { jp: '典型的[てんけいてき]な', en: 'typical' },
      { jp: '型[かた]', en: 'a model, a mold, a form, a pattern' },
      { jp: '〜型[がた]', en: 'type' },
    ],
  },
  {
    kanji: '標',
    meaning: ['mark'],
    vocabulary: [
      { jp: '目標[もくひょう]', en: 'an aim, a target, an object' },
      { jp: '標識[ひょうしき]', en: 'a sign, a mark' },
      { jp: '標準[ひょうじゅん]の', en: 'standard' },
    ],
  },
  {
    kanji: '農',
    meaning: ['agriculture'],
    vocabulary: [
      { jp: '農業[のうぎょう]', en: 'agriculture' },
      { jp: '農家[のうか]', en: "a farmer's house, a farmer" },
      { jp: '農産物[のうさんぶつ]', en: 'farm products' },
      { jp: '農薬[のうやく]', en: 'agricultural chemicals' },
    ],
  },
  {
    kanji: '漁',
    meaning: ['fishery'],
    vocabulary: [
      { jp: '漁業[ぎょぎょう]', en: 'fishery' },
      { jp: '漁師[りょうし]', en: 'a fisherman' },
    ],
  },
  {
    kanji: '努',
    meaning: ['endeavor'],
    vocabulary: [
      { jp: '努力[どりょく]する', en: 'to make an effort' },
      { jp: '努[つと]める', en: 'to make an effort' },
    ],
  },
  {
    kanji: '複',
    meaning: ['compound', 'plural'],
    vocabulary: [
      { jp: '複雑[ふくざつ]な', en: 'complex, complicated' },
      { jp: '複数[ふくすう]', en: 'the plural' },
    ],
  },
  {
    kanji: '制',
    meaning: ['system'],
    vocabulary: [
      { jp: '制度[せいど]', en: 'a system' },
      { jp: '体制[たいせい]', en: 'a system, a structure' },
      { jp: '制作[せいさく]する', en: 'to produce' },
    ],
  },
  {
    kanji: '純',
    meaning: ['pure'],
    vocabulary: [
      { jp: '単純[たんじゅん]な', en: 'simple' },
      { jp: '純粋[じゅんすい]な', en: 'pure, genuine' },
      { jp: '純情[じゅんじょう]な', en: 'pure, innocent' },
    ],
  },
  {
    kanji: '各',
    meaning: ['every', 'each'],
    vocabulary: [
      { jp: '各国[かっこく]', en: 'every country' },
      { jp: '各[おのおの]', en: 'each' },
      { jp: '各々[おのおの]', en: 'each' },
    ],
  },
  {
    kanji: '層',
    meaning: ['stratum', 'class'],
    vocabulary: [{ jp: '高層[こうそう]の', en: 'high, tall' }],
  },
  {
    kanji: '訓',
    meaning: ['instruct'],
    vocabulary: [
      { jp: '訓読[くんよ]み', en: 'kun, the Japanese reading of kanji' },
      { jp: '訓練[くんれん]する', en: 'to train' },
    ],
  },
  {
    kanji: '造',
    meaning: ['make'],
    vocabulary: [
      { jp: '製造[せいぞう]する', en: 'to make, to product' },
      { jp: '構造[こうぞう]', en: 'structure' },
      { jp: '造[つく]る', en: 'to make, to product' },
    ],
  },
  {
    kanji: '善',
    meaning: ['good'],
    vocabulary: [
      { jp: '善[ぜん]', en: 'goodness' },
      { jp: '改善[かいぜん]する', en: 'to improve' },
    ],
  },
  {
    kanji: '般',
    meaning: ['sort'],
    vocabulary: [
      { jp: '一般[いっぱん]の', en: 'general, universal' },
      { jp: '一般[いっぱん]に', en: 'generally' },
    ],
  },
  {
    kanji: '船',
    meaning: ['ship'],
    vocabulary: [
      { jp: '〜船[せん]', en: 'ship, vessel' },
      { jp: '造船[ぞうせん]', en: 'shipbuilding' },
      { jp: '船[ふね]', en: 'a ship' },
      { jp: '船便[ふなびん]', en: 'sea mail' },
    ],
  },
  {
    kanji: '完',
    meaning: ['complete'],
    vocabulary: [
      { jp: '完全[かんぜん]な', en: 'complete' },
      { jp: '完成[かんせい]する', en: 'to complete' },
    ],
  },
  {
    kanji: '貿',
    meaning: ['trade'],
    vocabulary: [{ jp: '貿易[ぼうえき]', en: 'trade' }],
  },
  {
    kanji: '革',
    meaning: ['leather'],
    vocabulary: [{ jp: '革[かわ]', en: 'leather' }],
  },
  {
    kanji: '輸',
    meaning: ['transport'],
    vocabulary: [
      { jp: '輸入[ゆにゅう]する', en: 'to import' },
      { jp: '輸出[ゆしゅつ]する', en: 'to export' },
    ],
  },
  {
    kanji: '貧',
    meaning: ['poor'],
    vocabulary: [{ jp: '貧[まず]しい', en: 'poor' }],
  },
  {
    kanji: '雇',
    meaning: ['employ'],
    vocabulary: [{ jp: '雇[やと]う', en: 'to employ' }],
  },
  {
    kanji: '柱',
    meaning: ['pillar'],
    vocabulary: [
      { jp: '電柱[でんちゅう]', en: 'a telegraph pole' },
      { jp: '柱[はしら]', en: 'a pillar' },
    ],
  },
  {
    kanji: '軒',
    meaning: ['eaves', 'counter for houses'],
    vocabulary: [
      { jp: '〜軒[けん]', en: 'counter for houses' },
      { jp: '軒[のき]', en: 'eaves' },
    ],
  },
  {
    kanji: '害',
    meaning: ['damage', 'harm'],
    vocabulary: [{ jp: '公害[こうがい]', en: 'environmental pollution' }],
  },
  {
    kanji: '被',
    meaning: ['suffer'],
    vocabulary: [{ jp: '被害[ひがい]', en: 'damage, harm' }],
  },
  {
    kanji: '損',
    meaning: ['loss'],
    vocabulary: [
      { jp: '損[そん]', en: 'loss' },
      { jp: '損害[そんがい]', en: 'damage, injury, loss' },
      { jp: '損得[そんとく]', en: 'loss and gain' },
    ],
  },
  {
    kanji: '濃',
    meaning: ['thick'],
    vocabulary: [
      { jp: '濃度[のうど]', en: 'concentration, density' },
      { jp: '濃[こ]い', en: 'dark-colored, strong, thick' },
    ],
  },
  {
    kanji: '乱',
    meaning: ['disorder'],
    vocabulary: [
      { jp: '混乱[こんらん]する', en: 'to confuse' },
      { jp: '乱暴[らんぼう]な', en: 'violent' },
    ],
  },
  {
    kanji: '応',
    meaning: ['respond'],
    vocabulary: [
      { jp: '応[おう]じる/ずる', en: 'to answer, to return' },
      { jp: '応用[おうよう]する', en: 'to apply' },
    ],
  },
  {
    kanji: '律',
    meaning: ['law'],
    vocabulary: [
      { jp: '法律[ほうりつ]', en: 'law' },
      { jp: '規律[きりつ]', en: 'order, discipline' },
    ],
  },
  {
    kanji: '賛',
    meaning: ['approve'],
    vocabulary: [{ jp: '賛成[さんせい]する', en: 'to approve of, to agree' }],
  },
  {
    kanji: '総',
    meaning: ['total', 'general'],
    vocabulary: [
      { jp: '総〜[そう]', en: 'general ...' },
      { jp: '総理大臣[そうりだいじん]', en: 'a prime minister' },
    ],
  },
  {
    kanji: '臣',
    meaning: ['subject'],
    vocabulary: [{ jp: '大臣[だいじん]', en: 'a minister' }],
  },
  {
    kanji: '政',
    meaning: ['politics'],
    vocabulary: [{ jp: '政府[せいふ]', en: 'a government' }],
  },
  {
    kanji: '治',
    meaning: ['govern', 'cure'],
    vocabulary: [
      { jp: '政治[せいじ]', en: 'politics' },
      { jp: '明治[めいじ]', en: 'the Meiji Era' },
      { jp: '自治[じち]', en: 'self-government' },
      { jp: '治[おさ]める', en: 'to govern, to rule' },
      { jp: '治[なお]る', en: 'to cure, to get well' },
      { jp: '治[なお]す', en: 'to cure, to heal' },
    ],
  },
  {
    kanji: '済',
    meaning: ['finish'],
    vocabulary: [
      { jp: '経済[けいざい]', en: 'economy' },
      { jp: '済[す]む', en: 'to finish, to be completed' },
    ],
  },
  {
    kanji: '軍',
    meaning: ['army'],
    vocabulary: [
      { jp: '軍隊[ぐんたい]', en: 'an army' },
      { jp: '〜軍[ぐん]', en: 'army, team' },
    ],
  },
  {
    kanji: '兵',
    meaning: ['soldier'],
    vocabulary: [{ jp: '兵隊[へいたい]', en: 'a soldier' }],
  },
  {
    kanji: '権',
    meaning: ['right'],
    vocabulary: [{ jp: '権利[けんり]', en: 'right' }],
  },
  {
    kanji: '郊',
    meaning: ['suburb'],
    vocabulary: [{ jp: '郊外[こうがい]', en: 'the suburbs, the outskirts' }],
  },
  {
    kanji: '放',
    meaning: ['let ... go'],
    vocabulary: [
      { jp: '放送[ほうそう]する', en: 'to broadcast' },
      { jp: '解放[かいほう]する', en: 'to release' },
      { jp: '開放[かいほう]する', en: 'to open' },
      { jp: '放[はな]れる', en: 'to get free' },
      { jp: '放[はな]す', en: 'to let ... go' },
    ],
  },
  {
    kanji: '党',
    meaning: ['party'],
    vocabulary: [{ jp: '政党[せいとう]', en: 'a political party' }],
  },
  {
    kanji: '毒',
    meaning: ['poison'],
    vocabulary: [
      { jp: '毒[どく]', en: 'poison' },
      { jp: '気[き]の毒[どく]な', en: 'poor, sorry' },
    ],
  },
  {
    kanji: '互',
    meaning: ['mutual'],
    vocabulary: [
      { jp: '相互[そうご]の', en: 'mutual' },
      { jp: '互[たが]いに', en: 'each other, one another, mutually' },
    ],
  },
  {
    kanji: '刊',
    meaning: ['publish'],
    vocabulary: [
      { jp: '〜刊[かん]', en: '... edition' },
      { jp: '朝刊[ちょうかん]', en: 'a morning paper' },
    ],
  },
]

export const KANJI_TEXTBOOK_MAP = new Map(
  KANJI_TEXTBOOK.map((x) => [x.kanji, x]),
)
