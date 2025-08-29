# Japanese

It's just a tooling that I use to learn japanese.

## Setup

1. [Install Anki](https://apps.ankiweb.net/)
   1. `Tools -> Add-ons -> Get Add-ons`
   2. Paste this `1046608507 1247171202 1344485230 1610304449 1771074083 1995103628 2055492159 291119185 569864517 738807903 759844606 817108664 874215009`
   3. [Install my Note Type](https://github.com/SoundOfTheSky/japanese/raw/refs/heads/main/dist/Notetype.zip)
   4. Restart Anki
   5. Configure auto furigana, pitch, audio
      1. `Topbar -> AJT -> Japanese options`
      2. Furigana
         1. NoteType `SOFTSky`
         2. Source `Expression`
         3. Destination `ExpressionFurigana`
      3. Pitch accent
         1. NoteType `SOFTSky`
         2. Source `Expression`
         3. Destination `Pitch`
         4. Output format `Number`
      4. Audio
         1. NoteType `SOFTSky`
         2. Source `Expression`
         3. Destination `ExpressionAudio`
   6. Configure auto copy to lookup in Yomitan
      1. `Topbar -> AJT -> Autocopy options`
      2. Remove everything in list
      3. Add field `Expression` and `Sentence`
      4. Enable `Activate autocopy`, `Copy when answer is shown`
      5. Disable everything else
   7. Configure auto sort by frequency
      1. `Tools -> Add-ons -> FieldReporter -> Config`
      2. Set `search_to_sort` to `note:SOFTSky is:new`
      3. Set `sort_field` to `Frequency`
2. [Install Yomitan](https://yomitan.wiki/)
   1. Give all permissions
   2. Download dictionaries
      1. [Main](https://github.com/SoundOfTheSky/japanese/raw/refs/heads/main/dist/Sky.zip)
      2. [Grammar](https://github.com/aiko-tanaka/Grammar-Dictionaries?tab=readme-ov-file). I recommend DOJG & edewakaru (yes, both).
      3. [JMnedict](https://github.com/yomidevs/jmdict-yomitan)
      4. [Frequency BCCWJ](https://github.com/Kuuuube/yomitan-dictionaries?tab=readme-ov-file#bccwj-suw-luw-combined)
      5. [Pitch Daijisen](https://drive.google.com/file/d/13NvR5uQ1zAIpvAcSee0bEEvENILbFGbL/view)
   3. Import dictionaries in yomitan in this exact order
   4. Connect Anki
      1. Enable `Anki -> Enable Anki integration`
      2. Open `Configure Anki flashcards`
      3. Dictionary Type `Term`
      4. Deck `日本語`
      5. Model `SOFTSky`
      6. Fields
         1. Expression `{expression}`
         2. Definition `{glossary}`
         3. Frequency `{frequency-harmonic-rank}`
         4. Sentence `{sentence}`
         5. ExpressionFurigana `{furigana-plain}` (optional)
         6. Pitch `{pitch-accent-positions}` (optional)
         7. Everything else to empty
   5. Install Mecab for better parsing (optional)
      1. Install Mecab for your system
      2. Enable `Yomitan -> Text Parsing -> Parse sentences using MeCab`
      3. Disable `Yomitan -> Text Parsing ->Parse sentences using Yomitan's internal parser`
      4. [Follow this guide](https://github.com/yomidevs/yomitan-mecab-installer/blob/master/README.md)
   6. Open Yomitan search and enable clipboard monitor
3. [Install mpv](https://mpv.io/)
   1. [Install mpvacious](https://github.com/Ajatt-Tools/mpvacious)
   2. [Install Sub Transition](https://github.com/Ajatt-Tools/sub-transition) to auto speed up non-speaking parts (optional)
   3. Copy [this configs](https://github.com/SoundOfTheSky/japanese/tree/master/mpv) to config folder
   4. Rename your video and subtitle files to follow format `Name [ep].[format]`
   5. Mining
      1. To retime subs press `z` or `shift + z`
      2. When watching video, subtitles are autimatically opened in Yomitan search
      3. Look up words you need and press green plus button to add note to anki
      4. Immediately after addition press `g` __twice__
      5. Audio clipped audio will automatically play for you to check correct subs timing

## Yomitan dictionary

It's a compilation of multiple yomitan dictionaries into one with embedded WaniKani mnemonics both for kanji and vocabulary.
