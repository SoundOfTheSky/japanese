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
      { jp: '日本人', en: 'a Japanese' },
      { jp: 'アメリカ人', en: 'an American' },
      { jp: '〜人', en: 'counter for people' },
      { jp: '人形', en: 'a doll' },
      { jp: '人', en: 'man, human being' },
      { jp: '人々', en: 'people' },
      { jp: '大人', en: 'an adult' },
      { jp: '一人', en: 'one person' },
      { jp: '二人', en: 'two persons' },
    ],
  },
  {
    kanji: '男',
    meaning: ['man', 'male'],
    vocabulary: [
      { jp: '男性', en: 'a man, male' },
      { jp: '男', en: 'a man, male' },
      { jp: '男の子', en: 'a boy' },
    ],
  },
  {
    kanji: '女',
    meaning: ['woman', 'female'],
    vocabulary: [
      { jp: '女性', en: 'a woman, female' },
      { jp: '彼女', en: 'she' },
      { jp: '女', en: 'a woman, female' },
      { jp: '女の子', en: 'a girl' },
    ],
  },
  {
    kanji: '子',
    meaning: ['child'],
    vocabulary: [
      { jp: '男子', en: 'a boy' },
      { jp: '女子', en: 'a girl' },
      { jp: '子供', en: 'a child' },
      { jp: '男の子', en: 'a boy' },
      { jp: '女の子', en: 'a girl' },
    ],
  },
  {
    kanji: '車',
    meaning: ['wheel'],
    vocabulary: [
      { jp: '電車', en: 'a train' },
      { jp: '車', en: 'a wheel, motor vehicle' },
    ],
  },
  {
    kanji: '山',
    meaning: ['mountain'],
    vocabulary: [{ jp: '山', en: 'a mountain' }],
  },
  {
    kanji: '川',
    meaning: ['river'],
    vocabulary: [
      { jp: '川', en: 'a river' },
      { jp: 'ナイル川', en: 'the Nile (River)' },
      { jp: '中川', en: 'Nakagawa (Japanese surname)' },
    ],
  },
  {
    kanji: '田',
    meaning: ['rice field'],
    vocabulary: [
      { jp: '田', en: 'a rice field' },
      { jp: '田んぼ', en: 'a rice field' },
      { jp: '田中', en: 'Tanaka (Japanese surname)' },
      { jp: '山田', en: 'Yamada (Japanese surname)' },
    ],
  },
  {
    kanji: '米',
    meaning: ['rice'],
    vocabulary: [{ jp: '米', en: 'rice' }],
  },
  {
    kanji: '雨',
    meaning: ['rain'],
    vocabulary: [{ jp: '雨', en: 'rain' }],
  },
  {
    kanji: '上',
    meaning: ['up', 'above', 'superior'],
    vocabulary: [
      { jp: '以上', en: 'more than' },
      { jp: '上手な', en: 'skillful' },
      { jp: '上', en: 'above, on' },
      { jp: '上着', en: 'a coat, a jacket' },
    ],
  },
  {
    kanji: '中',
    meaning: ['in', 'middle'],
    vocabulary: [
      { jp: '中学校', en: 'a junior high school' },
      { jp: '中学生', en: 'a junior high school student' },
      { jp: '午前中', en: 'in the morning' },
      { jp: '世界中', en: 'all over the world' },
      { jp: '中', en: 'inside' },
      { jp: '田中', en: 'Tanaka (Japanese surname)' },
    ],
  },
  {
    kanji: '下',
    meaning: ['down', 'under', 'inferior'],
    vocabulary: [
      { jp: '地下鉄', en: 'a subway' },
      { jp: '下', en: 'under, lower' },
      { jp: '下着', en: 'underwear' },
      { jp: '下手な', en: 'unskillful' },
    ],
  },
  {
    kanji: '左',
    meaning: ['left'],
    vocabulary: [{ jp: '左', en: 'left' }],
  },
  {
    kanji: '右',
    meaning: ['right'],
    vocabulary: [{ jp: '右', en: 'right' }],
  },
  {
    kanji: '明',
    meaning: ['bright', 'light'],
    vocabulary: [
      { jp: '説明する', en: 'to explain' },
      { jp: '明るい', en: 'bright, light' },
      { jp: '明日', en: 'tomorrow' },
    ],
  },
  {
    kanji: '休',
    meaning: ['rest'],
    vocabulary: [
      { jp: '休む', en: 'to take a rest, to be absent' },
      { jp: '休み', en: 'rest, break, holiday, absence' },
      { jp: '昼休み', en: 'a lunch break' },
    ],
  },
  {
    kanji: '林',
    meaning: ['woods'],
    vocabulary: [{ jp: '林', en: 'woods, Hayashi (Japanese surname)' }],
  },
  {
    kanji: '森',
    meaning: ['forest'],
    vocabulary: [{ jp: '森', en: 'forest, Mori (Japanese surname)' }],
  },
  {
    kanji: '好',
    meaning: ['like'],
    vocabulary: [
      { jp: '好きな', en: 'to like' },
      { jp: '大好きな', en: 'to like very much' },
    ],
  },
  // Lesson 2
  {
    kanji: '一',
    meaning: ['one'],
    vocabulary: [
      { jp: '一', en: 'one' },
      { jp: '一月', en: 'January' },
      { jp: '一時', en: "one o'clock" },
      { jp: '一度', en: 'once' },
      { jp: '一日', en: 'one day' },
      { jp: '一月', en: 'one month' },
      { jp: '一つ', en: 'one' },
      { jp: '一人', en: 'one person' },
      { jp: '一日', en: 'the first day of the month' },
    ],
  },
  {
    kanji: '二',
    meaning: ['two'],
    vocabulary: [
      { jp: '二', en: 'two' },
      { jp: '二月', en: 'February' },
      { jp: '二時', en: "two o'clock" },
      { jp: '二つ', en: 'two' },
      { jp: '二人', en: 'two persons' },
      { jp: '二日', en: 'the second day of the month, two days' },
      { jp: '二十日', en: 'the twentieth day of the month, twenty days' },
      { jp: '二十歳', en: 'twenty years of age' },
    ],
  },
  {
    kanji: '三',
    meaning: ['three'],
    vocabulary: [
      { jp: '三', en: 'three' },
      { jp: '三月', en: 'March' },
      { jp: '三時', en: "three o'clock" },
      { jp: '三人', en: 'three persons' },
      { jp: '三つ', en: 'three' },
      { jp: '三日', en: 'the third day of the month, three days' },
    ],
  },
  {
    kanji: '四',
    meaning: ['four'],
    vocabulary: [
      { jp: '四', en: 'four' },
      { jp: '四月', en: 'April' },
      { jp: '四つ', en: 'four' },
      { jp: '四日', en: 'the fourth day of the month, four days' },
      { jp: '四時', en: "four o'clock" },
      { jp: '四人', en: 'four persons' },
      { jp: '四百', en: '400' },
    ],
  },
  {
    kanji: '五',
    meaning: ['five'],
    vocabulary: [
      { jp: '五', en: 'five' },
      { jp: '五月', en: 'May' },
      { jp: '五時', en: "five o'clock" },
      { jp: '五人', en: 'five persons' },
      { jp: '五日', en: 'the fifth day of the month, five days' },
      { jp: '五つ', en: 'five' },
    ],
  },
  {
    kanji: '六',
    meaning: ['six'],
    vocabulary: [
      { jp: '六', en: 'six' },
      { jp: '六月', en: 'June' },
      { jp: '六時', en: "six o'clock" },
      { jp: '六人', en: 'six persons' },
      { jp: '六百', en: 'six hundred' },
      { jp: '六つ', en: 'six' },
      { jp: '六日', en: 'the sixth day of the month, six days' },
    ],
  },
  {
    kanji: '七',
    meaning: ['seven'],
    vocabulary: [
      { jp: '七', en: 'seven' },
      { jp: '七月', en: 'July' },
      { jp: '七時', en: "seven o'clock" },
      { jp: '七人', en: 'seven persons' },
      { jp: '七つ', en: 'seven' },
      { jp: '七日', en: 'the seventh day of the month, seven days' },
    ],
  },
  {
    kanji: '八',
    meaning: ['eight'],
    vocabulary: [
      { jp: '八', en: 'eight' },
      { jp: '八月', en: 'August' },
      { jp: '八時', en: "eight o'clock" },
      { jp: '八人', en: 'eight persons' },
      { jp: '八百', en: 'eight hundred' },
      { jp: '八つ', en: 'eight' },
      { jp: '八日', en: 'the eighth day of the month, eight days' },
      { jp: '八百屋', en: 'a fruit and vegetable shop' },
    ],
  },
  {
    kanji: '九',
    meaning: ['nine'],
    vocabulary: [
      { jp: '九', en: 'nine' },
      { jp: '九人', en: 'nine persons' },
      { jp: '九百', en: 'nine hundred' },
      { jp: '九月', en: 'September' },
      { jp: '九時', en: "nine o'clock" },
      { jp: '九日', en: 'the ninth day of the month, nine days' },
      { jp: '九つ', en: 'nine' },
    ],
  },
  {
    kanji: '十',
    meaning: ['ten'],
    vocabulary: [
      { jp: '十', en: 'ten' },
      { jp: '十時', en: "ten o'clock" },
      { jp: '十分', en: 'ten minutes' },
      { jp: '十月', en: 'October' },
      { jp: '十一月', en: 'November' },
      { jp: '十二月', en: 'December' },
      { jp: '十', en: 'ten' },
      { jp: '十日', en: 'the tenth day of the month, ten days' },
      { jp: '二十日', en: 'the twentieth day of the month, twenty days' },
      { jp: '二十歳', en: 'twenty years of age' },
    ],
  },
  {
    kanji: '百',
    meaning: ['hundred'],
    vocabulary: [
      { jp: '百', en: 'one hundred' },
      { jp: '三百', en: 'three hundred' },
      { jp: '六百', en: 'six hundred' },
      { jp: '八百', en: 'eight hundred' },
      { jp: '八百屋', en: 'a fruit and vegetable shop' },
    ],
  },
  {
    kanji: '千',
    meaning: ['thousand'],
    vocabulary: [
      { jp: '千', en: 'one thousand' },
      { jp: '千円', en: '1000 yen' },
      { jp: '三千', en: 'three thousand' },
      { jp: '八千', en: 'eight thousand' },
    ],
  },
  {
    kanji: '万',
    meaning: ['ten thousand'],
    vocabulary: [
      { jp: '一万', en: 'ten thousand' },
      { jp: '百万', en: 'one million' },
    ],
  },
  {
    kanji: '円',
    meaning: ['circle', 'yen'],
    vocabulary: [
      { jp: '円', en: 'a circle, yen' },
      { jp: '〜円', en: '~yen' },
    ],
  },
  {
    kanji: '色',
    meaning: ['color'],
    vocabulary: [{ jp: '色', en: 'color' }],
  },
  {
    kanji: '白',
    meaning: ['white'],
    vocabulary: [
      { jp: '白', en: 'white' },
      { jp: '白い', en: 'white' },
    ],
  },
  {
    kanji: '黒',
    meaning: ['black'],
    vocabulary: [
      { jp: '黒', en: 'black' },
      { jp: '黒い', en: 'black' },
    ],
  },
  {
    kanji: '赤',
    meaning: ['red'],
    vocabulary: [
      { jp: '赤', en: 'red' },
      { jp: '赤い', en: 'red' },
      { jp: '赤ちゃん', en: 'a baby' },
    ],
  },
  {
    kanji: '青',
    meaning: ['blue'],
    vocabulary: [
      { jp: '青', en: 'blue' },
      { jp: '青い', en: 'blue' },
    ],
  },
  {
    kanji: '黄',
    meaning: ['yellow'],
    vocabulary: [
      { jp: '黄色', en: 'yellow' },
      { jp: '黄色い', en: 'yellow' },
    ],
  },
  // Lesson 3
  {
    kanji: '月',
    meaning: ['moon'],
    vocabulary: [
      { jp: '月曜日', en: 'Monday' },
      { jp: '先月', en: 'last month' },
      { jp: '毎月', en: 'every month' },
      { jp: '一月', en: 'January' },
      { jp: '正月', en: "the New Year, New Year's Day" },
      { jp: '月', en: 'the moon' },
      { jp: '一月', en: 'one month' },
    ],
  },
  {
    kanji: '火',
    meaning: ['fire'],
    vocabulary: [
      { jp: '火曜日', en: 'Tuesday' },
      { jp: '火事', en: 'a fire' },
      { jp: '火', en: 'fire' },
    ],
  },
  {
    kanji: '水',
    meaning: ['water'],
    vocabulary: [
      { jp: '水曜日', en: 'Wednesday' },
      { jp: '水泳', en: 'swimming' },
      { jp: '水道', en: 'a water supply' },
      { jp: '水', en: 'water' },
    ],
  },
  {
    kanji: '木',
    meaning: ['tree'],
    vocabulary: [
      { jp: '木曜日', en: 'Thursday' },
      { jp: '木', en: 'a tree' },
    ],
  },
  {
    kanji: '金',
    meaning: ['metal', 'gold', 'money'],
    vocabulary: [
      { jp: '金曜日', en: 'Friday' },
      { jp: 'お金', en: 'money' },
      { jp: 'お金持ちの', en: 'rich' },
    ],
  },
  {
    kanji: '土',
    meaning: ['soil'],
    vocabulary: [
      { jp: '土曜日', en: 'Saturday' },
      { jp: 'お土産', en: 'a souvenir, a present' },
    ],
  },
  {
    kanji: '日',
    meaning: ['sun', 'day'],
    vocabulary: [
      { jp: '日曜日', en: 'Sunday' },
      { jp: '一日', en: 'one day' },
      { jp: '毎日', en: 'every day' },
      { jp: '日', en: 'sun, day, date' },
      { jp: '二日', en: 'the second day of the month, two days' },
      { jp: '三日', en: 'the third day of the month, three days' },
      { jp: '昨日', en: 'yesterday' },
      { jp: '今日', en: 'today' },
      { jp: '明日', en: 'tomorrow' },
      { jp: '一日', en: 'the first day of the month' },
    ],
  },
  {
    kanji: '曜',
    meaning: ['day of the week'],
    vocabulary: [{ jp: '〜曜日', en: 'day of the week' }],
  },
  {
    kanji: '毎',
    meaning: ['every'],
    vocabulary: [
      { jp: '毎日', en: 'every day' },
      { jp: '毎週', en: 'every week' },
      { jp: '毎朝', en: 'every morning' },
      { jp: '毎晩', en: 'every evening, every night' },
    ],
  },
  {
    kanji: '週',
    meaning: ['week'],
    vocabulary: [
      { jp: '〜週間', en: 'week' },
      { jp: '先週', en: 'last week' },
      { jp: '今週', en: 'this week' },
      { jp: '来週', en: 'next week' },
    ],
  },
  {
    kanji: '行',
    meaning: ['go', 'act'],
    vocabulary: [
      { jp: '銀行', en: 'a bank' },
      { jp: '旅行する', en: 'to travel, to make a trip' },
      { jp: '急行', en: 'an express (train)' },
      { jp: '飛行機', en: 'an airplane' },
      { jp: '行く', en: 'to go' },
      { jp: '行う', en: 'to do, to act' },
    ],
  },
  {
    kanji: '来',
    meaning: ['come'],
    vocabulary: [
      { jp: '来週', en: 'next week' },
      { jp: '来月', en: 'next month' },
      { jp: '来年', en: 'next year' },
      { jp: '来る', en: 'to come' },
    ],
  },
  {
    kanji: '帰',
    meaning: ['return'],
    vocabulary: [{ jp: '帰る', en: 'to return, to come back' }],
  },
  {
    kanji: '始',
    meaning: ['begin'],
    vocabulary: [
      { jp: '始まる', en: 'to begin, to start' },
      { jp: '始める', en: 'to begin, to start' },
    ],
  },
  {
    kanji: '終',
    meaning: ['end'],
    vocabulary: [{ jp: '終わる', en: 'to end, to finish' }],
  },
  {
    kanji: '起',
    meaning: ['rise'],
    vocabulary: [
      { jp: '起きる', en: 'to get up, to wake up' },
      { jp: '起こす', en: 'to wake' },
    ],
  },
  {
    kanji: '寝',
    meaning: ['sleep'],
    vocabulary: [{ jp: '寝る', en: 'to go to bed' }],
  },
  {
    kanji: '働',
    meaning: ['work'],
    vocabulary: [{ jp: '働く', en: 'to work' }],
  },
  {
    kanji: '勉',
    meaning: ['endeavor'],
    vocabulary: [{ jp: '勉強する', en: 'to study' }],
  },
  {
    kanji: '強',
    meaning: ['strong', 'endeavor'],
    vocabulary: [
      { jp: '勉強する', en: 'to study' },
      { jp: '強い', en: 'strong' },
    ],
  },
  // Lesson 4
  {
    kanji: '私',
    meaning: ['I'],
    vocabulary: [{ jp: '私', en: 'I' }],
  },
  {
    kanji: '家',
    meaning: ['house'],
    vocabulary: [
      { jp: '家族', en: 'a family' },
      { jp: '家庭', en: 'home' },
      { jp: '家内', en: '(my) wife' },
      { jp: '家', en: 'a house' },
    ],
  },
  {
    kanji: '族',
    meaning: ['family'],
    vocabulary: [{ jp: '家族', en: 'a family' }],
  },
  {
    kanji: '父',
    meaning: ['father'],
    vocabulary: [
      { jp: '祖父', en: 'grandfather' },
      { jp: '父', en: 'father' },
      { jp: 'お父さん', en: 'father' },
      { jp: '伯父', en: "uncle (older than one's parent)" },
      { jp: '叔父', en: "uncle (younger than one's parent)" },
    ],
  },
  {
    kanji: '母',
    meaning: ['mother'],
    vocabulary: [
      { jp: '祖母', en: 'grandmother' },
      { jp: '母', en: 'mother' },
      { jp: 'お母さん', en: 'mother' },
      { jp: '伯母', en: "aunt (older than one's parent)" },
      { jp: '叔母', en: "aunt (younger than one's parent)" },
    ],
  },
  {
    kanji: '兄',
    meaning: ['older brother'],
    vocabulary: [
      { jp: '兄弟', en: 'brothers and sisters' },
      { jp: '兄', en: 'older brother' },
      { jp: 'お兄さん', en: 'older brother' },
    ],
  },
  {
    kanji: '弟',
    meaning: ['younger brother'],
    vocabulary: [
      { jp: '兄弟', en: 'brothers and sisters' },
      { jp: '弟', en: 'younger brother' },
    ],
  },
  {
    kanji: '姉',
    meaning: ['older sister'],
    vocabulary: [
      { jp: '姉', en: 'older sister' },
      { jp: 'お姉さん', en: 'older sister' },
    ],
  },
  {
    kanji: '妹',
    meaning: ['younger sister'],
    vocabulary: [{ jp: '妹', en: 'younger sister' }],
  },
  {
    kanji: '主',
    meaning: ['master', 'main'],
    vocabulary: [
      { jp: '主人', en: 'master, (my) husband' },
      { jp: '主婦', en: 'a housewife' },
      { jp: 'ご主人', en: "one's husband" },
    ],
  },
  {
    kanji: '内',
    meaning: ['inside'],
    vocabulary: [
      { jp: '家内', en: '(my) wife' },
      { jp: '案内する', en: 'to guide' },
      { jp: '以内', en: 'within' },
    ],
  },
  {
    kanji: '奥',
    meaning: ['deep inside', 'interior'],
    vocabulary: [{ jp: '奥さん', en: "(someone else's) wife" }],
  },
  {
    kanji: '仕',
    meaning: ['serve', 'do'],
    vocabulary: [
      { jp: '仕事', en: 'work, job, business' },
      { jp: '仕方', en: 'way, method' },
    ],
  },
  {
    kanji: '事',
    meaning: ['affair', 'matter'],
    vocabulary: [
      { jp: '食事', en: 'a meal' },
      { jp: '火事', en: 'a fire' },
      { jp: '仕事', en: 'work, job, business' },
      { jp: '用事', en: 'business, engagement' },
      { jp: '大事な', en: 'important' },
    ],
  },
  {
    kanji: '生',
    meaning: ['life'],
    vocabulary: [
      { jp: '先生', en: 'a teacher' },
      { jp: '学生', en: 'a student' },
      { jp: '生徒', en: 'a pupil, a student' },
      { jp: '一生懸命(に)', en: "with all one's effort" },
      { jp: '誕生日', en: 'birthday' },
      { jp: '生きる', en: 'to live' },
      { jp: '生まれる', en: 'to be born' },
    ],
  },
  {
    kanji: '先',
    meaning: ['ahead'],
    vocabulary: [
      { jp: '先生', en: 'a teacher' },
      { jp: '先月', en: 'last month' },
      { jp: '先週', en: 'last week' },
      { jp: '先に', en: 'previously, beforehand' },
    ],
  },
  {
    kanji: '学',
    meaning: ['study'],
    vocabulary: [
      { jp: '学生', en: 'a student' },
      { jp: '学校', en: 'a school' },
      {
        jp: '留学生',
        en: 'an international student, a student studying abroad',
      },
      { jp: '大学', en: 'a university, a college' },
    ],
  },
  {
    kanji: '会',
    meaning: ['meet', 'society'],
    vocabulary: [
      { jp: '会社', en: 'a company' },
      { jp: '会話', en: 'conversation' },
      { jp: '会議', en: 'a conference, a meeting' },
      { jp: '会う', en: 'to meet' },
    ],
  },
  {
    kanji: '社',
    meaning: ['shrine', 'company'],
    vocabulary: [
      { jp: '会社', en: 'a company' },
      { jp: '神社', en: 'Shinto shrine' },
      { jp: '社会', en: 'society' },
    ],
  },
  {
    kanji: '員',
    meaning: ['member'],
    vocabulary: [
      { jp: '会社員', en: 'a company employee' },
      { jp: '社員', en: 'an employee, a member of the staff (of a company)' },
      { jp: '店員', en: 'a store clerk' },
      { jp: '駅員', en: 'a station employee' },
    ],
  },
  // Lesson 5
  {
    kanji: '時',
    meaning: ['time'],
    vocabulary: [
      { jp: '時間', en: 'time' },
      { jp: '〜時間', en: 'hour(s)' },
      { jp: '〜時', en: "~o'clock" },
      { jp: '時', en: 'time' },
      { jp: '時計', en: 'a clock, a watch' },
    ],
  },
  {
    kanji: '分',
    meaning: ['divide', 'part', 'minute'],
    vocabulary: [
      { jp: '〜分', en: 'minute(s)' },
      { jp: '半分', en: 'half' },
      { jp: '自分で', en: 'by oneself' },
      { jp: '分かる', en: 'to understand' },
    ],
  },
  {
    kanji: '午',
    meaning: ['noon'],
    vocabulary: [
      { jp: '午前', en: 'a.m., morning' },
      { jp: '午後', en: 'p.m., afternoon' },
    ],
  },
  {
    kanji: '前',
    meaning: ['front', 'before'],
    vocabulary: [
      { jp: '午前', en: 'a.m., morning' },
      { jp: '午前中', en: 'in the morning' },
      { jp: '前', en: 'front, before' },
      { jp: '名前', en: 'a name' },
      { jp: '〜年前', en: '~years ago' },
    ],
  },
  {
    kanji: '後',
    meaning: ['back', 'after'],
    vocabulary: [
      { jp: '午後', en: 'p.m., afternoon' },
      { jp: '最後の', en: 'last, final' },
      { jp: '後で', en: 'after' },
      { jp: '後ろ', en: 'back, behind' },
    ],
  },
  {
    kanji: '間',
    meaning: ['interval', 'between'],
    vocabulary: [
      { jp: '時間', en: 'time' },
      { jp: '〜時間', en: 'hour' },
      { jp: 'この間', en: 'the other day' },
      { jp: '間', en: 'interval, between' },
      { jp: '間に合う', en: 'to be in time' },
    ],
  },
  {
    kanji: '半',
    meaning: ['half'],
    vocabulary: [
      { jp: '〜時半', en: 'half past' },
      { jp: '半分の', en: 'half' },
    ],
  },
  {
    kanji: '朝',
    meaning: ['morning'],
    vocabulary: [
      { jp: '朝', en: 'morning' },
      { jp: '朝ご飯', en: 'breakfast' },
      { jp: '毎朝', en: 'every morning' },
      { jp: '今朝', en: 'this morning' },
    ],
  },
  {
    kanji: '昼',
    meaning: ['daytime'],
    vocabulary: [
      { jp: '昼', en: 'daytime' },
      { jp: '昼間', en: 'daytime' },
      { jp: '昼ご飯', en: 'lunch' },
      { jp: '昼休み', en: 'a lunch break' },
    ],
  },
  {
    kanji: '晩',
    meaning: ['evening', 'late'],
    vocabulary: [
      { jp: '晩', en: 'evening' },
      { jp: '今晩', en: 'this evening, tonight' },
      { jp: '毎晩', en: 'every evening, every night' },
      { jp: '晩ご飯', en: 'supper, dinner' },
    ],
  },
  {
    kanji: '今',
    meaning: ['present', 'now'],
    vocabulary: [
      { jp: '今週', en: 'this week' },
      { jp: '今月', en: 'this month' },
      { jp: '今度', en: 'this time, next time' },
      { jp: '今', en: 'now' },
      { jp: '今日', en: 'today' },
      { jp: '今晩', en: 'this evening, tonight' },
      { jp: '今朝', en: 'this morning' },
      { jp: '今年', en: 'this year' },
    ],
  },
  {
    kanji: '去',
    meaning: ['go away'],
    vocabulary: [{ jp: '去年', en: 'last year' }],
  },
  {
    kanji: '年',
    meaning: ['year'],
    vocabulary: [
      { jp: '〜年', en: 'year' },
      { jp: '去年', en: 'last year' },
      { jp: '来年', en: 'next year' },
      { jp: '毎年', en: 'every year' },
      { jp: '今年', en: 'this year' },
      { jp: '年', en: 'year, age' },
      { jp: '毎年', en: 'every year' },
    ],
  },
  {
    kanji: '夕',
    meaning: ['evening'],
    vocabulary: [{ jp: '夕方', en: 'evening' }],
  },
  {
    kanji: '方',
    meaning: ['direction', 'way'],
    vocabulary: [
      { jp: '両方の', en: 'both' },
      { jp: 'この方', en: 'this person (honorific)' },
      { jp: '夕方', en: 'evening' },
      { jp: '仕方', en: 'a way, a method' },
      { jp: '〜方', en: 'how to' },
    ],
  },
  {
    kanji: '春',
    meaning: ['spring'],
    vocabulary: [
      { jp: '春', en: 'spring' },
      { jp: '春休み', en: 'the spring vacation' },
    ],
  },
  {
    kanji: '夏',
    meaning: ['summer'],
    vocabulary: [
      { jp: '夏', en: 'summer' },
      { jp: '夏休み', en: 'the summer vacation' },
    ],
  },
  {
    kanji: '秋',
    meaning: ['autumn', 'fall'],
    vocabulary: [{ jp: '秋', en: 'autumn, fall' }],
  },
  {
    kanji: '冬',
    meaning: ['winter'],
    vocabulary: [
      { jp: '冬', en: 'winter' },
      { jp: '冬休み', en: 'the winter vacation' },
    ],
  },
  {
    kanji: '夜',
    meaning: ['night'],
    vocabulary: [
      { jp: '今夜', en: 'this evening, tonight' },
      { jp: '夜', en: 'night' },
    ],
  },
  // Lesson 6
  {
    kanji: '食',
    meaning: ['eat', 'food'],
    vocabulary: [
      { jp: '食事', en: 'a meal' },
      { jp: '食堂', en: 'a dining hall, a restaurant' },
      { jp: '食品', en: 'food' },
      { jp: '食べる', en: 'to eat' },
      { jp: '食べ物', en: 'food' },
    ],
  },
  {
    kanji: '飲',
    meaning: ['drink'],
    vocabulary: [
      { jp: '飲む', en: 'to drink' },
      { jp: '飲み物', en: 'a drink, a beverage' },
    ],
  },
  {
    kanji: '買',
    meaning: ['buy'],
    vocabulary: [
      { jp: '買う', en: 'to buy' },
      { jp: '買い物', en: 'shopping' },
    ],
  },
  {
    kanji: '見',
    meaning: ['see'],
    vocabulary: [
      { jp: '意見', en: 'opinion' },
      { jp: '見る', en: 'to see, to look at' },
      { jp: '見える', en: 'to be seen' },
      { jp: '見せる', en: 'to show' },
    ],
  },
  {
    kanji: '聞',
    meaning: ['hear'],
    vocabulary: [
      { jp: '新聞', en: 'a newspaper' },
      { jp: '新聞社', en: 'a newspaper company' },
      { jp: '聞く', en: 'to hear' },
      { jp: '聞こえる', en: 'to be heard' },
    ],
  },
  {
    kanji: '何',
    meaning: ['what'],
    vocabulary: [
      { jp: '何', en: 'what' },
      { jp: '何', en: 'what' },
      { jp: '何時', en: 'what time' },
      { jp: '何曜日', en: 'what day of the week' },
    ],
  },
  {
    kanji: '茶',
    meaning: ['tea'],
    vocabulary: [
      { jp: 'お茶', en: 'tea' },
      { jp: '紅茶', en: 'black tea' },
      { jp: '茶色', en: 'brown' },
      { jp: '喫茶店', en: 'a coffee shop, a tea house' },
    ],
  },
  {
    kanji: '酒',
    meaning: ['alcoholic drinks'],
    vocabulary: [
      { jp: 'お酒', en: 'alcoholic drink, sake (Japanese rice wine)' },
    ],
  },
  {
    kanji: '肉',
    meaning: ['flesh', 'meat'],
    vocabulary: [
      { jp: '肉', en: 'meat' },
      { jp: '牛肉', en: 'beef' },
      { jp: '豚肉', en: 'pork' },
      { jp: 'とり肉', en: 'chicken' },
    ],
  },
  {
    kanji: '牛',
    meaning: ['cattle'],
    vocabulary: [
      { jp: '牛肉', en: 'beef' },
      { jp: '牛乳', en: 'milk' },
    ],
  },
  {
    kanji: '魚',
    meaning: ['fish'],
    vocabulary: [{ jp: '魚', en: 'a fish' }],
  },
  {
    kanji: '鳥',
    meaning: ['bird'],
    vocabulary: [
      { jp: '鳥', en: 'a bird' },
      { jp: '小鳥', en: 'a small bird' },
    ],
  },
  {
    kanji: '犬',
    meaning: ['dog'],
    vocabulary: [{ jp: '犬', en: 'a dog' }],
  },
  {
    kanji: '音',
    meaning: ['sound'],
    vocabulary: [
      { jp: '音楽', en: 'music' },
      { jp: '発音', en: 'pronunciation' },
      { jp: '音読み', en: 'onyomi reading' },
      { jp: '音', en: 'sound' },
    ],
  },
  {
    kanji: '楽',
    meaning: ['pleasure', 'comfortable'],
    vocabulary: [
      { jp: '音楽', en: 'music' },
      { jp: '楽しい', en: 'pleasant, enjoyable' },
      { jp: '楽しむ', en: 'to enjoy' },
    ],
  },
  {
    kanji: '花',
    meaning: ['flower'],
    vocabulary: [
      { jp: '花びん', en: 'a flower vase' },
      { jp: '花屋', en: 'a florist' },
      { jp: '花', en: 'a flower' },
      { jp: '花見', en: 'flower (cherry blossom) viewing' },
    ],
  },
  {
    kanji: '映',
    meaning: ['reflect'],
    vocabulary: [
      { jp: '映画', en: 'a movie, a cinema' },
      { jp: '映画館', en: 'a movie theater' },
    ],
  },
  {
    kanji: '画',
    meaning: ['picture', 'plan'],
    vocabulary: [
      { jp: '映画', en: 'a movie, a cinema' },
      { jp: '計画する', en: 'to plan' },
      { jp: '漫画', en: 'comics' },
      { jp: '画数', en: 'the number of strokes' },
    ],
  },
  {
    kanji: '写',
    meaning: ['copy'],
    vocabulary: [
      { jp: '写真', en: 'a photograph' },
      { jp: '写す', en: 'to copy, to take a picture' },
    ],
  },
  {
    kanji: '真',
    meaning: ['true'],
    vocabulary: [
      { jp: '写真', en: 'a photograph' },
      { jp: '真ん中', en: 'the center, the middle' },
      { jp: '真っすぐな', en: 'straight' },
    ],
  },
  // Lesson 7
  {
    kanji: '立',
    meaning: ['stand'],
    vocabulary: [
      { jp: '立つ', en: 'to stand up' },
      { jp: '立てる', en: 'to stand up' },
    ],
  },
  {
    kanji: '座',
    meaning: ['sit'],
    vocabulary: [{ jp: '座る', en: 'to sit down' }],
  },
  {
    kanji: '答',
    meaning: ['answer'],
    vocabulary: [
      { jp: '答え', en: 'an answer' },
      { jp: '答える', en: 'to answer' },
    ],
  },
  {
    kanji: '読',
    meaning: ['read'],
    vocabulary: [
      { jp: '読む', en: 'to read' },
      { jp: '音読み', en: 'onyomi reading' },
      { jp: '訓読み', en: 'kunyomi reading' },
    ],
  },
  {
    kanji: '書',
    meaning: ['write', 'book'],
    vocabulary: [
      { jp: '辞書', en: 'a dictionary' },
      { jp: '図書館', en: 'a library' },
      { jp: '書く', en: 'to write' },
    ],
  },
  {
    kanji: '待',
    meaning: ['wait'],
    vocabulary: [
      { jp: '招待する', en: 'to invite' },
      { jp: '待つ', en: 'to wait' },
    ],
  },
  {
    kanji: '度',
    meaning: ['degree', 'time'],
    vocabulary: [
      { jp: '〜度', en: 'degree(s), time(s)' },
      { jp: '今度', en: 'this time, next time' },
      { jp: '支度', en: 'preparation' },
      { jp: '一度', en: 'once' },
    ],
  },
  {
    kanji: '話',
    meaning: ['speak'],
    vocabulary: [
      { jp: '電話', en: 'a telephone' },
      { jp: '会話', en: 'conversation' },
      { jp: '世話', en: 'help, care' },
      { jp: '話す', en: 'to speak' },
      { jp: '話', en: 'a talk, speech' },
    ],
  },
  {
    kanji: '語',
    meaning: ['language', 'word'],
    vocabulary: [
      { jp: '日本語', en: 'Japanese' },
      { jp: '英語', en: 'English' },
      { jp: 'フランス語', en: 'French' },
    ],
  },
  {
    kanji: '英',
    meaning: ['distinguished', 'England'],
    vocabulary: [{ jp: '英語', en: 'English' }],
  },
  {
    kanji: '教',
    meaning: ['teach'],
    vocabulary: [
      { jp: '教室', en: 'a classroom' },
      { jp: '教育', en: 'education' },
      { jp: '教える', en: 'to teach' },
    ],
  },
  {
    kanji: '習',
    meaning: ['learn'],
    vocabulary: [
      { jp: '練習する', en: 'to practice' },
      { jp: '予習する', en: 'to prepare for lessons' },
      { jp: '復習する', en: 'to review' },
      { jp: '習う', en: 'to learn' },
    ],
  },
  {
    kanji: '貸',
    meaning: ['lend'],
    vocabulary: [{ jp: '貸す', en: 'to lend, to rent' }],
  },
  {
    kanji: '借',
    meaning: ['borrow'],
    vocabulary: [{ jp: '借りる', en: 'to borrow' }],
  },
  {
    kanji: '送',
    meaning: ['send'],
    vocabulary: [
      { jp: '放送', en: 'broadcasting' },
      { jp: '送る', en: 'to send' },
    ],
  },
  {
    kanji: '本',
    meaning: ['origin', 'book'],
    vocabulary: [
      { jp: '本', en: 'a book' },
      { jp: '日本', en: 'Japan' },
      { jp: '日本語', en: 'Japanese' },
      { jp: '〜本', en: 'counter for thin and long things' },
    ],
  },
  {
    kanji: '漢',
    meaning: ['Chinese'],
    vocabulary: [{ jp: '漢字', en: 'kanji' }],
  },
  {
    kanji: '字',
    meaning: ['character'],
    vocabulary: [
      { jp: '字', en: 'a character, a letter' },
      { jp: '漢字', en: 'kanji' },
    ],
  },
  {
    kanji: '発',
    meaning: ['start', 'emit'],
    vocabulary: [{ jp: '発音', en: 'pronunciation' }],
  },
  {
    kanji: '友',
    meaning: ['friend'],
    vocabulary: [{ jp: '友達', en: 'a friend' }],
  },
  // Lesson 8
  {
    kanji: '大',
    meaning: ['big'],
    vocabulary: [
      { jp: '大学', en: 'a university' },
      { jp: '大使館', en: 'an embassy' },
      { jp: '大切な', en: 'important' },
      { jp: '大きい', en: 'big, large' },
      { jp: '大人', en: 'an adult' },
    ],
  },
  {
    kanji: '小',
    meaning: ['small'],
    vocabulary: [
      { jp: '小学校', en: 'an elementary (a primary) school' },
      { jp: '小学生', en: 'a schoolchild' },
      { jp: '小説', en: 'a novel' },
      { jp: '小さい', en: 'small' },
      { jp: '小鳥', en: 'a small bird' },
    ],
  },
  {
    kanji: '高',
    meaning: ['high'],
    vocabulary: [
      { jp: '高校', en: 'a senior high school' },
      { jp: '高校生', en: 'a senior high school student' },
      { jp: '高い', en: 'high, expensive' },
    ],
  },
  {
    kanji: '低',
    meaning: ['low'],
    vocabulary: [{ jp: '低い', en: 'low' }],
  },
  {
    kanji: '安',
    meaning: ['peaceful', 'cheap'],
    vocabulary: [
      { jp: '安全な', en: 'safe' },
      { jp: '安心する', en: 'to be relieved' },
      { jp: '安い', en: 'cheap, inexpensive' },
    ],
  },
  {
    kanji: '新',
    meaning: ['new'],
    vocabulary: [
      { jp: '新聞', en: 'a newspaper' },
      { jp: '新聞社', en: 'a newspaper company' },
      { jp: '新しい', en: 'new' },
    ],
  },
  {
    kanji: '古',
    meaning: ['old'],
    vocabulary: [{ jp: '古い', en: 'old' }],
  },
  {
    kanji: '多',
    meaning: ['many'],
    vocabulary: [{ jp: '多い', en: 'many, much, a lot of' }],
  },
  {
    kanji: '少',
    meaning: ['little'],
    vocabulary: [
      { jp: '少ない', en: 'little, few' },
      { jp: '少し', en: 'a little, a few' },
    ],
  },
  {
    kanji: '正',
    meaning: ['right'],
    vocabulary: [
      { jp: '正月', en: "the New Year, New Year's Day" },
      { jp: '正しい', en: 'right, correct' },
    ],
  },
  {
    kanji: '長',
    meaning: ['long', 'chief'],
    vocabulary: [
      { jp: '校長', en: 'a principal' },
      { jp: '社長', en: 'the president (of a company)' },
      { jp: '学長', en: 'a president (of a university)' },
      { jp: '長い', en: 'long' },
    ],
  },
  {
    kanji: '短',
    meaning: ['short'],
    vocabulary: [{ jp: '短い', en: 'short' }],
  },
  {
    kanji: '軽',
    meaning: ['light'],
    vocabulary: [{ jp: '軽い', en: 'light' }],
  },
  {
    kanji: '重',
    meaning: ['heavy'],
    vocabulary: [{ jp: '重い', en: 'heavy' }],
  },
  {
    kanji: '弱',
    meaning: ['weak'],
    vocabulary: [{ jp: '弱い', en: 'weak' }],
  },
  {
    kanji: '暑',
    meaning: ['hot'],
    vocabulary: [{ jp: '暑い', en: 'hot' }],
  },
  {
    kanji: '寒',
    meaning: ['cold'],
    vocabulary: [{ jp: '寒い', en: 'cold' }],
  },
  {
    kanji: '暗',
    meaning: ['dark'],
    vocabulary: [{ jp: '暗い', en: 'dark' }],
  },
  {
    kanji: '早',
    meaning: ['early'],
    vocabulary: [{ jp: '早い', en: 'early' }],
  },
  {
    kanji: '悪',
    meaning: ['bad'],
    vocabulary: [{ jp: '悪い', en: 'bad' }],
  },
  // Lesson 9
  {
    kanji: '元',
    meaning: ['origin'],
    vocabulary: [{ jp: '元気な', en: 'healthy, fine' }],
  },
  {
    kanji: '気',
    meaning: ['spirit'],
    vocabulary: [
      { jp: '元気な', en: 'healthy, fine' },
      { jp: '病気の', en: 'sick, ill' },
      { jp: '気持ち', en: 'feelings, mood' },
      { jp: '天気', en: 'weather' },
      { jp: '気分', en: 'feelings, mood' },
      { jp: '電気', en: 'electricity, an electric light' },
    ],
  },
  {
    kanji: '有',
    meaning: ['own'],
    vocabulary: [{ jp: '有名な', en: 'famous' }],
  },
  {
    kanji: '名',
    meaning: ['name'],
    vocabulary: [
      { jp: '有名な', en: 'famous' },
      { jp: '名前', en: 'name' },
    ],
  },
  {
    kanji: '同',
    meaning: ['same'],
    vocabulary: [{ jp: '同じ', en: 'same' }],
  },
  {
    kanji: '親',
    meaning: ['parent', 'intimate'],
    vocabulary: [
      { jp: '親切な', en: 'kind' },
      { jp: '両親', en: 'parents' },
    ],
  },
  {
    kanji: '切',
    meaning: ['cut'],
    vocabulary: [
      { jp: '親切な', en: 'kind' },
      { jp: '大切な', en: 'important' },
      { jp: '切る', en: 'to cut' },
      { jp: '切手', en: 'stamp' },
      { jp: '切符', en: 'ticket' },
      { jp: '切れる', en: 'to cut' },
    ],
  },
  {
    kanji: '便',
    meaning: ['letter', 'convenient'],
    vocabulary: [
      { jp: '便利な', en: 'convenient' },
      { jp: '不便な', en: 'inconvenient' },
      { jp: '郵便局', en: 'a post office' },
    ],
  },
  {
    kanji: '利',
    meaning: ['advantage', 'profit'],
    vocabulary: [
      { jp: '便利な', en: 'convenient' },
      { jp: '利用する', en: 'to use' },
    ],
  },
  {
    kanji: '不',
    meaning: ['un-', 'in-', 'dis-'],
    vocabulary: [{ jp: '不便な', en: 'inconvenient' }],
  },
  {
    kanji: '研',
    meaning: ['sharpen', 'research'],
    vocabulary: [
      { jp: '研究する', en: 'to research' },
      { jp: '研究室', en: "a laboratory, an (a professor's) office" },
    ],
  },
  {
    kanji: '究',
    meaning: ['reach the extreme', 'master'],
    vocabulary: [
      { jp: '研究する', en: 'to research' },
      { jp: '研究室', en: "a laboratory, an (a professor's) office" },
    ],
  },
  {
    kanji: '質',
    meaning: ['question', 'quality'],
    vocabulary: [{ jp: '質問', en: 'a question' }],
  },
  {
    kanji: '問',
    meaning: ['question'],
    vocabulary: [
      { jp: '質問', en: 'a question' },
      { jp: '問題', en: 'a problem, a question' },
    ],
  },
  {
    kanji: '文',
    meaning: ['letter', 'sentence'],
    vocabulary: [
      { jp: '作文', en: 'a composition' },
      { jp: '文法', en: 'grammar' },
      { jp: '文章', en: 'a sentence' },
      { jp: '文化', en: 'culture' },
    ],
  },
  {
    kanji: '洗',
    meaning: ['wash'],
    vocabulary: [
      { jp: '洗濯する', en: 'to wash (clothes)' },
      { jp: '洗う', en: 'to wash' },
      { jp: 'お手洗い', en: 'a toilet' },
    ],
  },
  {
    kanji: '濯',
    meaning: ['wash', 'rinse'],
    vocabulary: [{ jp: '洗濯する', en: 'to wash (clothes)' }],
  },
  {
    kanji: '注',
    meaning: ['pour', 'concentrate'],
    vocabulary: [
      { jp: '注意する', en: 'to pay attention, to advise' },
      { jp: '注射', en: 'an injection' },
    ],
  },
  {
    kanji: '意',
    meaning: ['mind'],
    vocabulary: [
      { jp: '注意する', en: 'to pay attention, to advise' },
      { jp: '用意する', en: 'to prepare' },
      { jp: '意味', en: 'meaning' },
      { jp: '意見', en: 'opinion' },
    ],
  },
  {
    kanji: '旅',
    meaning: ['travel'],
    vocabulary: [
      { jp: '旅行する', en: 'to travel, to make a trip' },
      { jp: '旅館', en: 'a Japanese inn' },
    ],
  },
  // Lesson 10
  {
    kanji: '言',
    meaning: ['say', 'word'],
    vocabulary: [
      { jp: '言う', en: 'to say' },
      { jp: '言葉', en: 'word, language' },
    ],
  },
  {
    kanji: '計',
    meaning: ['calculate', 'plan'],
    vocabulary: [
      { jp: '時計', en: 'a clock, a watch' },
      { jp: '計画する', en: 'to plan' },
    ],
  },
  {
    kanji: '池',
    meaning: ['pond'],
    vocabulary: [{ jp: '池', en: 'a pond' }],
  },
  {
    kanji: '洋',
    meaning: ['ocean', 'Western'],
    vocabulary: [
      { jp: '洋服', en: 'Western clothes' },
      { jp: '洋室', en: 'a Western-style room' },
    ],
  },
  {
    kanji: '和',
    meaning: ['peace', 'Japanese'],
    vocabulary: [
      { jp: '和室', en: 'a Japanese-style room' },
      { jp: '平和', en: 'peace' },
    ],
  },
  {
    kanji: '代',
    meaning: ['substitution', 'generation', 'charge'],
    vocabulary: [
      { jp: '時代', en: 'an age, an era' },
      { jp: '〜代', en: '~charge, fee' },
      { jp: '代わりに', en: 'in place of, instead of' },
    ],
  },
  {
    kanji: '持',
    meaning: ['hold', 'have'],
    vocabulary: [
      { jp: '持つ', en: 'to have, to hold' },
      { jp: 'お金持ちの', en: 'rich' },
      { jp: '気持ち', en: 'feelings, mood' },
      { jp: '持って行く', en: 'to take' },
      { jp: '持って来る', en: 'to bring' },
    ],
  },
  {
    kanji: '押',
    meaning: ['push'],
    vocabulary: [{ jp: '押す', en: 'to push' }],
  },
  {
    kanji: '引',
    meaning: ['draw'],
    vocabulary: [
      { jp: '引く', en: 'to draw, to pull' },
      { jp: '字引', en: 'a dictionary' },
      { jp: '引き出し', en: 'a drawer, withdrawal (of money)' },
      { jp: '引っ越す', en: 'to move to a new residence' },
    ],
  },
  {
    kanji: '紙',
    meaning: ['paper'],
    vocabulary: [
      { jp: '紙', en: 'paper' },
      { jp: '手紙', en: 'a letter' },
    ],
  },
  {
    kanji: '服',
    meaning: ['clothes'],
    vocabulary: [
      { jp: '服', en: 'clothes' },
      { jp: '洋服', en: 'Western clothes' },
    ],
  },
  {
    kanji: '取',
    meaning: ['take'],
    vocabulary: [{ jp: '取る', en: 'to take' }],
  },
  {
    kanji: '歌',
    meaning: ['song'],
    vocabulary: [
      { jp: '歌', en: 'a song' },
      { jp: '歌う', en: 'to sing' },
    ],
  },
  {
    kanji: '特',
    meaning: ['special'],
    vocabulary: [
      { jp: '特別な', en: 'special' },
      { jp: '特に', en: 'specially' },
      { jp: '特急', en: 'a special express' },
    ],
  },
  {
    kanji: '別',
    meaning: ['separate', 'another'],
    vocabulary: [
      { jp: '特別な', en: 'special' },
      { jp: '別の', en: 'another' },
      { jp: '別れる', en: 'to part from' },
    ],
  },
  {
    kanji: '集',
    meaning: ['collect', 'gather'],
    vocabulary: [
      { jp: '集まる', en: 'to gather, to collect' },
      { jp: '集める', en: 'to collect, to gather' },
    ],
  },
  {
    kanji: '売',
    meaning: ['sell'],
    vocabulary: [
      { jp: '売る', en: 'to sell' },
      { jp: '売り場', en: 'a counter' },
    ],
  },
  {
    kanji: '門',
    meaning: ['gate'],
    vocabulary: [
      { jp: '門', en: 'a gate' },
      { jp: '専門', en: 'a specialty' },
    ],
  },
  {
    kanji: '開',
    meaning: ['open'],
    vocabulary: [
      { jp: '開く', en: 'to open' },
      { jp: '開ける', en: 'to open' },
      { jp: '開く', en: 'to open' },
    ],
  },
  {
    kanji: '閉',
    meaning: ['close'],
    vocabulary: [
      { jp: '閉まる', en: 'to close, to shut' },
      { jp: '閉める', en: 'to close, to shut' },
    ],
  },
  // Lesson 11
  {
    kanji: '駅',
    meaning: ['station'],
    vocabulary: [
      { jp: '駅', en: 'a station' },
      { jp: '駅員', en: 'a station employee' },
    ],
  },
  {
    kanji: '銀',
    meaning: ['silver'],
    vocabulary: [{ jp: '銀行', en: 'a bank' }],
  },
  {
    kanji: '病',
    meaning: ['illness'],
    vocabulary: [
      { jp: '病気の', en: 'sick, ill' },
      { jp: '病院', en: 'a hospital' },
    ],
  },
  {
    kanji: '院',
    meaning: ['hall', 'institute'],
    vocabulary: [
      { jp: '病院', en: 'a hospital' },
      { jp: '大学院', en: 'a graduate school' },
      { jp: '入院する', en: 'to be hospitalized' },
      {
        jp: '退院する',
        en: 'to be discharged from a hospital, to leave a hospital',
      },
    ],
  },
  {
    kanji: '店',
    meaning: ['shop'],
    vocabulary: [
      { jp: '店員', en: 'a store clerk' },
      { jp: '喫茶店', en: 'a coffee shop, a tea house' },
      { jp: '店', en: 'a shop, a store' },
    ],
  },
  {
    kanji: '遠',
    meaning: ['distant'],
    vocabulary: [
      { jp: '遠足', en: 'a school excursion' },
      { jp: '遠い', en: 'far' },
      { jp: '遠くの', en: 'far-off' },
    ],
  },
  {
    kanji: '建',
    meaning: ['build'],
    vocabulary: [
      { jp: '建てる', en: 'to build' },
      { jp: '建物', en: 'a building' },
      { jp: '二階建て', en: 'two-storied (house)' },
    ],
  },
  {
    kanji: '物',
    meaning: ['thing'],
    vocabulary: [
      { jp: '動物', en: 'an animal' },
      { jp: '荷物', en: 'baggage, luggage, a load' },
      { jp: '物', en: 'a thing' },
      { jp: '食べ物', en: 'food' },
      { jp: '買い物', en: 'shopping' },
      { jp: '飲み物', en: 'a beverage' },
    ],
  },
  {
    kanji: '工',
    meaning: ['manufacture'],
    vocabulary: [
      { jp: '工場', en: 'a factory' },
      { jp: '工業', en: 'industry, manufacturing industry' },
    ],
  },
  {
    kanji: '場',
    meaning: ['place'],
    vocabulary: [
      { jp: '工場', en: 'a factory' },
      { jp: '駐車場', en: 'a parking lot' },
      { jp: '場所', en: 'a place' },
      { jp: '場合', en: 'a case, an occasion' },
    ],
  },
  {
    kanji: '校',
    meaning: ['school'],
    vocabulary: [
      { jp: '学校', en: 'a school' },
      { jp: '校長', en: 'a principal' },
      { jp: '小学校', en: 'an elementary (a primary) school' },
      { jp: '中学校', en: 'a junior high school' },
    ],
  },
  {
    kanji: '室',
    meaning: ['room'],
    vocabulary: [
      { jp: '教室', en: 'a classroom' },
      { jp: '研究室', en: "a laboratory, an (a professor's) office" },
      { jp: '会議室', en: 'a conference (meeting) room' },
    ],
  },
  {
    kanji: '堂',
    meaning: ['hall'],
    vocabulary: [
      { jp: '食堂', en: 'a dining hall, a restaurant' },
      { jp: '講堂', en: 'a lecture hall, an auditorium' },
    ],
  },
  {
    kanji: '図',
    meaning: ['drawing', 'book'],
    vocabulary: [
      { jp: '地図', en: 'a map' },
      { jp: '図書館', en: 'a library' },
    ],
  },
  {
    kanji: '館',
    meaning: ['mansion', 'building', 'hall'],
    vocabulary: [
      { jp: '図書館', en: 'a library' },
      { jp: '大使館', en: 'an embassy' },
      { jp: '美術館', en: 'an art museum' },
      { jp: '映画館', en: 'a movie theater' },
    ],
  },
  {
    kanji: '近',
    meaning: ['near'],
    vocabulary: [
      { jp: '近所', en: 'the neighborhood' },
      { jp: '近い', en: 'near' },
      { jp: '最近', en: 'recently' },
      { jp: '近くの', en: 'nearby' },
    ],
  },
  {
    kanji: '部',
    meaning: ['section'],
    vocabulary: [
      { jp: '学部', en: 'a faculty, a department' },
      { jp: '部長', en: 'a section chief, a department head' },
      { jp: '全部', en: 'all, whole' },
      { jp: '部屋', en: 'a room' },
    ],
  },
  {
    kanji: '屋',
    meaning: ['house'],
    vocabulary: [
      { jp: '屋上', en: 'the rooftop' },
      { jp: '部屋', en: 'a room' },
      { jp: '本屋', en: 'a bookstore' },
      { jp: '八百屋', en: 'a fruit and vegetable shop' },
      { jp: '花屋', en: 'a florist' },
      { jp: '床屋', en: 'a barbershop' },
    ],
  },
  {
    kanji: '広',
    meaning: ['wide'],
    vocabulary: [{ jp: '広い', en: 'wide' }],
  },
  {
    kanji: '地',
    meaning: ['ground', 'land'],
    vocabulary: [
      { jp: '地図', en: 'a map' },
      { jp: '地下鉄', en: 'a subway' },
      { jp: '地震', en: 'an earthquake' },
    ],
  },
  // Lesson 12
  {
    kanji: '東',
    meaning: ['east'],
    vocabulary: [
      { jp: '東京', en: 'Tokyo' },
      { jp: '東', en: 'the east' },
    ],
  },
  {
    kanji: '西',
    meaning: ['west'],
    vocabulary: [
      { jp: '西洋の', en: 'Western' },
      { jp: '西', en: 'the west' },
    ],
  },
  {
    kanji: '南',
    meaning: ['south'],
    vocabulary: [
      { jp: '東南アジア', en: 'Southeast Asia' },
      { jp: '南', en: 'the south' },
    ],
  },
  {
    kanji: '北',
    meaning: ['north'],
    vocabulary: [
      { jp: '東北', en: 'the Tohoku district' },
      { jp: '北海道', en: 'Hokkaido' },
      { jp: '北', en: 'the north' },
    ],
  },
  {
    kanji: '京',
    meaning: ['capital'],
    vocabulary: [
      { jp: '東京', en: 'Tokyo' },
      { jp: '京都', en: 'Kyoto' },
    ],
  },
  {
    kanji: '世',
    meaning: ['world', 'age'],
    vocabulary: [{ jp: '世界', en: 'the world' }],
  },
  {
    kanji: '界',
    meaning: ['world', 'boundary'],
    vocabulary: [{ jp: '世界', en: 'the world' }],
  },
  {
    kanji: '外',
    meaning: ['outside'],
    vocabulary: [
      { jp: '外国の', en: 'foreign' },
      { jp: '外国語', en: 'a foreign language' },
      { jp: '外国人', en: 'a foreigner' },
      { jp: '外', en: 'outside' },
    ],
  },
  {
    kanji: '国',
    meaning: ['country'],
    vocabulary: [
      { jp: '外国の', en: 'foreign' },
      { jp: '外国語', en: 'a foreign language' },
      { jp: '外国人', en: 'a foreigner' },
      { jp: '国際', en: 'international' },
      { jp: '国', en: 'country' },
    ],
  },
  {
    kanji: '海',
    meaning: ['sea'],
    vocabulary: [
      { jp: '海岸', en: 'the seashore' },
      { jp: '海外の', en: 'overseas' },
      { jp: '海', en: 'the sea, the ocean' },
    ],
  },
  {
    kanji: '都',
    meaning: ['capital'],
    vocabulary: [
      { jp: '京都', en: 'Kyoto' },
      { jp: '東京都', en: 'the Metropolis of Tokyo' },
      { jp: '都合', en: 'convenience, circumstances' },
    ],
  },
  {
    kanji: '道',
    meaning: ['way'],
    vocabulary: [
      { jp: '水道', en: 'a water supply' },
      { jp: '道具', en: 'a tool, an instrument' },
      { jp: '北海道', en: 'Hokkaido' },
      { jp: '柔道', en: 'judo' },
      { jp: '道', en: 'a way, a road' },
    ],
  },
  {
    kanji: '府',
    meaning: ['administration', 'prefecture'],
    vocabulary: [
      { jp: '大阪府', en: 'Osaka Prefecture' },
      { jp: '京都府', en: 'Kyoto Prefecture' },
    ],
  },
  {
    kanji: '県',
    meaning: ['prefecture'],
    vocabulary: [{ jp: '〜県', en: 'Prefecture' }],
  },
  {
    kanji: '区',
    meaning: ['district', 'ward'],
    vocabulary: [{ jp: '〜区', en: '~ku (~Ward)' }],
  },
  {
    kanji: '市',
    meaning: ['city'],
    vocabulary: [
      { jp: '〜市', en: '~shi (~City)' },
      { jp: '市民', en: 'a resident (of a city), a citizen' },
    ],
  },
  {
    kanji: '町',
    meaning: ['town'],
    vocabulary: [
      { jp: '〜町', en: '~cho' },
      { jp: '町', en: 'a town' },
    ],
  },
  {
    kanji: '村',
    meaning: ['village'],
    vocabulary: [{ jp: '村', en: 'a village' }],
  },
  {
    kanji: '住',
    meaning: ['live'],
    vocabulary: [
      { jp: '住所', en: 'an address' },
      { jp: '住む', en: 'to live' },
    ],
  },
  {
    kanji: '所',
    meaning: ['place'],
    vocabulary: [
      { jp: '住所', en: 'an address' },
      { jp: '近所', en: 'the neighborhood' },
      { jp: '所', en: 'a place' },
      { jp: '場所', en: 'a place' },
      { jp: '事務所', en: 'an office' },
      { jp: '台所', en: 'a kitchen' },
    ],
  },
  // Lesson 13
  {
    kanji: '体',
    meaning: ['body'],
    vocabulary: [{ jp: '体', en: 'the body' }],
  },
  {
    kanji: '頭',
    meaning: ['head'],
    vocabulary: [{ jp: '頭', en: 'a head' }],
  },
  {
    kanji: '首',
    meaning: ['neck'],
    vocabulary: [{ jp: '首', en: 'a neck' }],
  },
  {
    kanji: '手',
    meaning: ['hand', 'person'],
    vocabulary: [
      { jp: '運転手', en: 'a driver' },
      { jp: '手', en: 'a hand' },
      { jp: '切手', en: 'a stamp' },
      { jp: '手紙', en: 'a letter' },
      { jp: '上手な', en: 'skillful' },
      { jp: '下手な', en: 'unskillful' },
    ],
  },
  {
    kanji: '足',
    meaning: ['foot', 'suffice'],
    vocabulary: [
      { jp: '足', en: 'a foot, a leg' },
      { jp: '足りる', en: 'to be sufficient' },
      { jp: '足す', en: 'to add' },
    ],
  },
  {
    kanji: '顔',
    meaning: ['face'],
    vocabulary: [{ jp: '顔', en: 'a face' }],
  },
  {
    kanji: '目',
    meaning: ['eye'],
    vocabulary: [
      { jp: '目', en: 'an eye' },
      { jp: '〜目', en: 'ordinal numbers or order (suffix)' },
    ],
  },
  {
    kanji: '耳',
    meaning: ['ear'],
    vocabulary: [{ jp: '耳', en: 'an ear' }],
  },
  {
    kanji: '口',
    meaning: ['mouth'],
    vocabulary: [
      { jp: '人口', en: 'population' },
      { jp: '入り口', en: 'an entrance' },
      { jp: '口', en: 'a mouth' },
      { jp: '出口', en: 'an exit' },
    ],
  },
  {
    kanji: '力',
    meaning: ['power', 'strength'],
    vocabulary: [{ jp: '力', en: 'power, strength' }],
  },
  {
    kanji: '風',
    meaning: ['wind'],
    vocabulary: [
      { jp: '台風', en: 'a typhoon' },
      { jp: '風呂', en: 'a bath' },
      { jp: '風', en: 'a wind' },
      { jp: '風邪', en: 'a cold' },
    ],
  },
  {
    kanji: '声',
    meaning: ['voice'],
    vocabulary: [{ jp: '声', en: 'a voice' }],
  },
  {
    kanji: '医',
    meaning: ['medicine', 'cure'],
    vocabulary: [
      { jp: '医者', en: 'a (medical) doctor' },
      { jp: '医学', en: 'medical science' },
      { jp: '歯医者', en: 'a dentist' },
    ],
  },
  {
    kanji: '者',
    meaning: ['person'],
    vocabulary: [
      { jp: '医者', en: 'a (medical) doctor' },
      { jp: '歯医者', en: 'a dentist' },
    ],
  },
  {
    kanji: '薬',
    meaning: ['drug', 'medicine'],
    vocabulary: [{ jp: '薬', en: 'a drug, medicine' }],
  },
  {
    kanji: '飯',
    meaning: ['boiled rice', 'meal'],
    vocabulary: [
      { jp: 'ご飯', en: 'boiled rice, a meal' },
      { jp: '夕飯', en: 'supper, dinner' },
      { jp: '朝ご飯', en: 'breakfast' },
      { jp: '昼ご飯', en: 'lunch' },
      { jp: '晩ご飯', en: 'supper, dinner' },
    ],
  },
  {
    kanji: '野',
    meaning: ['field'],
    vocabulary: [{ jp: '野菜', en: 'vegetables' }],
  },
  {
    kanji: '菜',
    meaning: ['vegetables'],
    vocabulary: [{ jp: '野菜', en: 'vegetables' }],
  },
  {
    kanji: '心',
    meaning: ['heart'],
    vocabulary: [
      { jp: '心配する', en: 'to be anxious, to be worried' },
      { jp: '安心する', en: 'to be relieved' },
      { jp: '熱心な', en: 'eager, enthusiastic' },
      { jp: '心', en: 'heart' },
    ],
  },
  {
    kanji: '死',
    meaning: ['die'],
    vocabulary: [{ jp: '死ぬ', en: 'to die' }],
  },
  // Lesson 14
  {
    kanji: '乗',
    meaning: ['ride', 'get on'],
    vocabulary: [
      { jp: '乗る', en: 'to ride, to get on' },
      { jp: '乗り換える', en: 'to change, to transfer' },
      { jp: '乗り物', en: 'a vehicle, a conveyance' },
    ],
  },
  {
    kanji: '降',
    meaning: ['descend'],
    vocabulary: [
      { jp: '降りる', en: 'to get off' },
      { jp: '降る', en: 'to fall, to rain, to snow' },
    ],
  },
  {
    kanji: '歩',
    meaning: ['walk'],
    vocabulary: [
      { jp: '散歩する', en: 'to take a walk, to have a stroll' },
      { jp: '歩く', en: 'to walk' },
    ],
  },
  {
    kanji: '走',
    meaning: ['run'],
    vocabulary: [{ jp: '走る', en: 'to run' }],
  },
  {
    kanji: '止',
    meaning: ['stop'],
    vocabulary: [
      { jp: '中止する', en: 'to stop' },
      { jp: '止まる', en: 'to stop' },
      { jp: '止める', en: 'to stop, to park' },
    ],
  },
  {
    kanji: '電',
    meaning: ['electricity'],
    vocabulary: [
      { jp: '電車', en: 'a train' },
      { jp: '電話', en: 'a telephone' },
      { jp: '電気', en: 'electricity, an electric light' },
    ],
  },
  {
    kanji: '自',
    meaning: ['oneself', 'naturally'],
    vocabulary: [
      { jp: '自転車', en: 'a bicycle' },
      { jp: '自動車', en: 'an automobile, a car' },
      { jp: '自由な', en: 'free' },
      { jp: '自分で', en: 'by oneself' },
    ],
  },
  {
    kanji: '転',
    meaning: ['turn', 'roll'],
    vocabulary: [
      { jp: '自転車', en: 'a bicycle' },
      { jp: '運転手', en: 'a driver' },
    ],
  },
  {
    kanji: '動',
    meaning: ['move'],
    vocabulary: [
      { jp: '動物', en: 'an animal' },
      { jp: '運動', en: 'motion, movement, exercise' },
      { jp: '自動車', en: 'an automobile, a car' },
      { jp: '動く', en: 'to move' },
    ],
  },
  {
    kanji: '鉄',
    meaning: ['iron'],
    vocabulary: [{ jp: '地下鉄', en: 'a subway' }],
  },
  {
    kanji: '運',
    meaning: ['carry', 'move'],
    vocabulary: [
      { jp: '運転する', en: 'to drive, to operate' },
      { jp: '運転手', en: 'a driver' },
      { jp: '運動', en: 'motion, movements, exercise' },
      { jp: '運ぶ', en: 'to carry' },
    ],
  },
  {
    kanji: '通',
    meaning: ['pass', 'commute'],
    vocabulary: [
      { jp: '交通', en: 'traffic, transportation' },
      { jp: '普通の', en: 'usual, normal' },
      { jp: '通る', en: 'to pass' },
      { jp: '通り', en: 'a street, an avenue' },
      { jp: '通う', en: 'to commute' },
    ],
  },
  {
    kanji: '入',
    meaning: ['enter', 'put in'],
    vocabulary: [
      { jp: '入学する', en: 'to enter a school' },
      { jp: '入院する', en: 'to be hospitalized' },
      { jp: '輸入する', en: 'to import' },
      { jp: '入り口', en: 'entrance' },
      { jp: '入る', en: 'to enter' },
      { jp: '入れる', en: 'to put in' },
    ],
  },
  {
    kanji: '出',
    meaning: ['go out', 'put out'],
    vocabulary: [
      { jp: '出発する', en: 'to leave, to depart from' },
      { jp: '輸出する', en: 'to export' },
      { jp: '出る', en: 'to go out, to attend, to leave' },
      { jp: '出かける', en: 'to go out, to leave (the house)' },
      { jp: '出口', en: 'an exit' },
      { jp: '出す', en: 'to put out, to submit' },
      { jp: '引き出し', en: 'a drawer, withdrawal (of money)' },
    ],
  },
  {
    kanji: '着',
    meaning: ['arrive', 'put on'],
    vocabulary: [
      { jp: '着く', en: 'to arrive at, to reach' },
      { jp: '着る', en: 'to put on, to wear' },
      { jp: '着物', en: 'kimono' },
      { jp: '上着', en: 'a coat, a jacket' },
    ],
  },
  {
    kanji: '急',
    meaning: ['urgent', 'hurry'],
    vocabulary: [
      { jp: '特急', en: 'a special express' },
      { jp: '急行', en: 'an express' },
      { jp: '急に', en: 'suddenly' },
      { jp: '急ぐ', en: 'to hurry' },
    ],
  },
  {
    kanji: '番',
    meaning: ['number', 'watch'],
    vocabulary: [
      { jp: '番号', en: 'a number' },
      { jp: '番組', en: 'a (TV) program' },
      { jp: '交番', en: 'a police box' },
      { jp: '〜番', en: 'number' },
    ],
  },
  {
    kanji: '号',
    meaning: ['number', 'sign'],
    vocabulary: [
      { jp: '番号', en: 'a number' },
      { jp: '信号', en: 'a signal, a traffic light' },
    ],
  },
  {
    kanji: '台',
    meaning: ['table', 'base'],
    vocabulary: [
      { jp: '〜台', en: 'counter for vehicles and machines' },
      { jp: '台所', en: 'a kitchen' },
      { jp: '台風', en: 'a typhoon' },
    ],
  },
  {
    kanji: '回',
    meaning: ['turn around', 'time'],
    vocabulary: [
      { jp: '〜回', en: 'time(s)' },
      { jp: '回る', en: 'to turn around' },
    ],
  },
  // Lesson 15
  {
    kanji: '作',
    meaning: ['make'],
    vocabulary: [
      { jp: '作文', en: 'composition' },
      { jp: '作る', en: 'to make' },
    ],
  },
  {
    kanji: '使',
    meaning: ['use'],
    vocabulary: [
      { jp: '大使館', en: 'an embassy' },
      { jp: '使う', en: 'to use' },
    ],
  },
  {
    kanji: '考',
    meaning: ['think'],
    vocabulary: [{ jp: '考える', en: 'to think' }],
  },
  {
    kanji: '思',
    meaning: ['think'],
    vocabulary: [
      { jp: '思う', en: 'to think' },
      { jp: '思い出す', en: 'to recall, to remember' },
    ],
  },
  {
    kanji: '知',
    meaning: ['know'],
    vocabulary: [
      { jp: '承知する', en: 'to agree' },
      { jp: '知る', en: 'to know' },
      { jp: '知らせる', en: 'to let know' },
    ],
  },
  {
    kanji: '業',
    meaning: ['work', 'business'],
    vocabulary: [
      { jp: '授業', en: 'class, a lesson' },
      { jp: '産業', en: 'industry' },
      { jp: '工業', en: 'industry, manufacturing industry' },
      { jp: '卒業する', en: 'to graduate' },
    ],
  },
  {
    kanji: '題',
    meaning: ['title', 'topic'],
    vocabulary: [
      { jp: '問題', en: 'a problem, a question' },
      { jp: '宿題', en: 'homework' },
    ],
  },
  {
    kanji: '試',
    meaning: ['try', 'test'],
    vocabulary: [
      { jp: '試験', en: 'a test, an examination' },
      { jp: '試合', en: 'a match, a game' },
    ],
  },
  {
    kanji: '験',
    meaning: ['test'],
    vocabulary: [
      { jp: '試験', en: 'a test, an examination' },
      { jp: '経験', en: 'experience' },
    ],
  },
  {
    kanji: '合',
    meaning: ['suit', 'combine'],
    vocabulary: [
      { jp: '都合', en: 'convenience, circumstances' },
      { jp: '合う', en: 'to fit' },
      { jp: '試合', en: 'a match, a game' },
      { jp: '具合', en: 'condition, a state' },
      { jp: '間に合う', en: 'to be in time' },
      { jp: '場合', en: 'a case, an occasion' },
    ],
  },
  {
    kanji: '料',
    meaning: ['materials', 'charge'],
    vocabulary: [
      { jp: '料理', en: 'cooking' },
      { jp: '食料品', en: 'food' },
    ],
  },
  {
    kanji: '理',
    meaning: ['reason', 'principle'],
    vocabulary: [
      { jp: '料理', en: 'cooking' },
      { jp: '地理', en: 'geography' },
      { jp: '理由', en: 'reason' },
    ],
  },
  {
    kanji: '品',
    meaning: ['article'],
    vocabulary: [
      { jp: '食品', en: 'food' },
      { jp: '食料品', en: 'food' },
      { jp: '品物', en: 'an article, goods' },
    ],
  },
  {
    kanji: '味',
    meaning: ['taste', 'meaning'],
    vocabulary: [
      { jp: '意味', en: 'meaning' },
      { jp: '興味', en: 'interest' },
      { jp: '趣味', en: 'a hobby' },
      { jp: '味', en: 'taste' },
    ],
  },
  {
    kanji: '用',
    meaning: ['use', 'errand'],
    vocabulary: [
      { jp: '用', en: 'business, engagement' },
      { jp: '用事', en: 'business, engagement' },
      { jp: '用意する', en: 'to prepare' },
      { jp: '利用する', en: 'to use' },
    ],
  },
  {
    kanji: '天',
    meaning: ['sky', 'heaven'],
    vocabulary: [
      { jp: '天気', en: 'weather' },
      { jp: '天気予報', en: 'a weather forecast' },
    ],
  },
  {
    kanji: '空',
    meaning: ['sky', 'air'],
    vocabulary: [
      { jp: '空港', en: 'an airport' },
      { jp: '空気', en: 'air' },
      { jp: '空', en: 'the sky' },
    ],
  },
  {
    kanji: '以',
    meaning: ['than'],
    vocabulary: [
      { jp: '以上', en: 'more than, over' },
      { jp: '以下', en: 'less than, under' },
      { jp: '以内', en: 'within' },
      { jp: '以外', en: 'except' },
    ],
  },
  {
    kanji: '全',
    meaning: ['whole'],
    vocabulary: [
      { jp: '安全な', en: 'safe' },
      { jp: '全部', en: 'all, whole' },
      { jp: '全然〜ない', en: 'not ~ at all, never' },
    ],
  },
  {
    kanji: '説',
    meaning: ['explain'],
    vocabulary: [
      { jp: '説明する', en: 'to explain' },
      { jp: '小説', en: 'a novel' },
    ],
  },
]

export const KANJI_TEXTBOOK_MAP = new Map(
  KANJI_TEXTBOOK.map((x) => [x.kanji, x]),
)
