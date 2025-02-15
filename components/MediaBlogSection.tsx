import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { AiOutlineLink } from "react-icons/ai";
import { MdThumbUp } from "react-icons/md";
import {
  BsArrowUpRightSquare,
  BsGlobeAmericas,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

const media_elements = [
  {
    name: "The Last Guardian",
    description:
      "The Last Guardian is, in my opinion, the pinnacle of Fumito Ueda's work. Its layered world-building, emotionally resonant story, and the lifelike AI of Trico create a deeply moving experience. Trico’s behavior, while occasionally (and intentionally) frustrating, is a masterful depiction of a real animal's unpredictability and trust-building, making the bond between Trico and the boy feel genuine and unforgettable. The game’s minimalist storytelling and breathtaking environments invite players to immerse themselves, crafting a personal narrative that lingers long after the credits roll. While the controls and technical limitations show the game’s ambition outpacing its hardware, these flaws are minor compared to the emotional weight it delivers. This isn’t just a game—it’s an experience that sets a new benchmark for emotional storytelling. With this three-part marathon coming to a close, I can’t wait to see what Ueda creates next with Project: Robot.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/tlg.png",
    date: "01/13/2025",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
      </div>
    ),
  },
  {
    name: "Shadow of the Colossus",
    description:
      "Continuing my journey through Fumito Ueda's works, my next stop was Shadow of the Colossus. Growing up, I found its visual presentation intimidating, but finally diving in, I see why it’s so celebrated. The world feels like a dark, forgotten relic, with its empty landscapes and towering ruins laying out the story in front of the player. The colossi are stunningly designed, deeply connected with the environments that you face them in - making it all the more saddening when you take them down and return their form to the dust that they came from. While I found the gameplay and atmosphere to be incredible, I felt that it lacked the emotional resonance and impact of its predecessor, ICO. Although the narrative sets up themes of sacrifice, loss, and love, it almost never pauses to let their weight fully sink in. Still, Ueda’s mastery of minimalist storytelling and gorgeous design makes SOTC an unforgettable experience.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/sotc.png",
    date: "01/03/2025",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
  },
  {
    name: "ICO",
    description:
      "Following the reveal of 'Project: Robot' that I stumbled upon in the year's closing, I decided to start a series of games that I had always wanted to try out. Fumetsu Ueda's games always intrigued me in the way that they portray themselves, and become an embodiment  of the argument: 'can games really be art?'. Having finally played ICO, the game is undeniably a piece of art, with stunning visuals, a beautiful soundtrack, and a unique style that creates an emotional and memorable experience. It’s the kind of game that makes you feel something, and for that alone, I’d recommend it to anyone. That said, as a game, it’s not without flaws. The gameplay can feel repetitive and slow, and it doesn’t always deliver in terms of fun or excitement. But maybe that’s the point—ICO prioritizes atmosphere and storytelling over traditional gameplay. Overall, ICO is a special experience worth having, even if it’s not perfect. It’s less about entertainment and more about immersion, and it’s something I think everyone should try at least once.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/ico.png",
    date: "01/01/2025",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
  },
  {
    name: "Hunter X Hunter",
    description:
      "Following probably my busiest year ever, I decided to pick up an interesting series I kept hearing about. Ever since I first started it, Hunter x Hunter has been an unforgettable experience. Unlike most shonen that lean into overused tropes like random, unexplained abilities or a single, predictable protagonist, Togashi’s storytelling subverts expectations at every turn. The almost chaotic structure keeps me guessing, and every twist feels fresh, creative, and emotionally rewarding. As dark as the series gets, it never loses its wholesome undertone, which is what makes it so special to me. It asks for more patience and attention than most anime or manga, with its intricate setups for powers and storylines, but the payoff is always worth it. It’s a journey that dives deep into serious themes while still holding on to a feel-good, uplifting message—something I’ve come to really cherish.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/hxh.jpg",
    date: "12/09/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.viz.com/hunter-x-hunter",
  },
  {
    name: "Parannoul: To See the Next Part of the Dream",
    description:
      "This project is an unforgettable blend of rock, with walls of noise and grungy melodies that feel entirely unique. While the mixing might be rough, it adds to the raw, immersive experience that no other album replicates. I can’t imagine a day without listening to it—it’s a project that will easily go down as my most cherished and most played album of all time.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/mediablog/parannoul_tstnpotd.jpg",
    date: "10/01/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://music.apple.com/us/album/to-see-the-next-part-of-the-dream/1563369236",
  },
  {
    name: "Vagabond",
    description:
      "The past year has challenged me in ways I never imagined, presenting hardships that brought immense suffering, but also paved the way for profound internal growth. This journey of struggle and self-discovery mirrors the path of Miyamoto Musashi, as depicted in Vagabond, the semi-fictional masterpiece by manga legend Takehiko Inoue. Through stunning artwork and deep storytelling, Inoue captures the relentless pursuit of mastery and the inner turmoil that accompanies it. Vagabond is not just a story of swordsmanship but a reflection on the human spirit’s capacity to evolve through adversity, making it a powerful source of inspiration.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/vagabond.jpg",
    date: "10/01/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.viz.com/vagabond",
  },
  {
    name: "Deftones: Around the Fur",
    description:
      "This album navigates between two distinct sonic modes: intense walls of noise driven by blaring guitars and raw, screaming vocals, and melancholic choruses with hypnotic melodies accompanied by a soothing, almost ethereal voice. Both styles are masterfully executed by Chino Moreno, whose versatility brings the dynamic range of emotions to life. Standout tracks like 'Be Quiet and Drive' and 'Lhabia' perfectly encapsulate the blend of aggression and introspection. It’s the ideal soundtrack for the gym, helping you lock in and push through challenges with its powerful energy and emotional depth. Deftones' Around the Fur is a testament to the band’s ability to create a visceral, immersive experience.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/mediablog/deftonesaroundthefur.jpg",
    date: "10/01/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://music.apple.com/us/album/around-the-fur/1099843198",
  },
  // {
  //   name: "Soul Eater",
  //   description: " ",
  //   image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/souleater.jpg",
  //   date: "2024",
  //   rating: (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarHalf style={{ marginRight: "2px" }} />
  //       <BsStar style={{ marginRight: "2px" }} />
  //       <BsStar style={{ marginRight: "2px" }} />
  //     </div>
  //   ),
  //   link: "https://www.crunchyroll.com/series/GYX0ZW80R/soul-eater",
  // },
  {
    name: "Delicious in Dungeon",
    description:
      "I never expected a gimmicky cooking anime to hook me, but this show did just that. It’s a fun blend of adventure and creativity, much like Spy x Family, which had greatly surprised me. Now, I can't wait for the second season— it's very simple, entertaining, and unexpectedly heartwarming.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/mediablog/dungeonmeshi.jpg",
    date: "10/01/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.netflix.com/ca/title/81564899",
  },
  {
    name: "SPY x Family",
    description:
      "This show follows three unlikely family members—a spy, an assassin, and a telepath—who come together in a world of espionage, each hiding their true identity while working through challenges in their own unique way. The show's clever mix of action, humor, and heartwarming moments, paired with the unexpected family dynamic, had me hooked from the start. It was bittersweet to finish and set the series aside—I'm already eagerly waiting for more.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/spyfamily.jpg",
    date: "10/01/2024",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
  },
  // {
  //   name: "Frieren: Beyond a Journey's End",
  //   description: " ",
  //   image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/frieren.jpg",
  //   date: "2024",
  //   rating: (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarHalf style={{ marginRight: "2px" }} />
  //       <BsStar style={{ marginRight: "2px" }} />
  //     </div>
  //   ),
  //   link: "https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end",
  // },
  // {
  //   name: "Jujustu Kaisen",
  //   description: " ",
  //   image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/jjk.jpg",
  //   date: "2024",
  //   rating: (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStarFill style={{ marginRight: "2px" }} />
  //       <BsStar style={{ marginRight: "2px" }} />
  //       <BsStar style={{ marginRight: "2px" }} />
  //     </div>
  //   ),
  //   link: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
  // },
  {
    name: "Bleach",
    description:
      "Following my departure from Canada and journey to Poland, I ran into someone on my trip who recommended Bleach to me. I've heard a lot about it in the past as it's part of 'the Big 3' of Shonen anime/manga (alongside One Piece and Naruto), none of the recommendations in the past, however, were as glowing as this one. As I normally don't watch 'slice of life' type anime, Bleach's approach is a slight breath of fresh air, and I can definitely see the influence that it has on today's narriative works in the manga space (CSM, JJK). Additionally, the music has a ton of bops that call back to early 2000s style of TV shows that my parents would buy me on VHS, Bleach overall gives off a strong 'nostalgic' vibe for me. Normally I don't write a 'review' here about something unless I complete it from beginning to end, but seeing as I have a lot of time on my hands, I wanted to get my thoughts about this series. I'm excited to see much more of Bleach going into the new year",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/bleach.jpg",
    date: "12/30/2023",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.viz.com/bleach",
  },
  {
    name: "Bloodborne",
    description:
      "After leaving FEA-Training Consultants and recovering from surgery, I found myself with time on my hands. Amidst the slowdown of life and the approaching holidays, I rediscovered Bloodborne, a game I initially found overwhelming when I had picked it up at its launch in 2015. Fast forward to today, in a period where I seem to have almost no control over the htings happening around me, the challenging nature of Bloodborne became oddly comforting. As I carved my path rhouhg the game's overworld, I regained tat lost sense of control, in a way. Many online share this sentiment, finding accomplishment in overcoming its difficulty. As someone drawn to immersive experiences, Bloodborne's insane levels of creativity stuck with me, and I had been thinking of the game's world, Yharnam for the past 8 years, it simply wouldn't ;eave my head. Though I faced minor issues here and there, such as the 'cheap' difficulty (especially in the NPCs) and the obscure lore, the overall journey was still deeply satisfying. In a way, Bloodborne became a strong source of solace during a time when little else seemed to work as expected, and I'm excited to see wher the backlog takes me next. As of right now, I can't put the game down and I can't wait to get into the DLC in the coming days.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/bloodborne.jpg",
    date: "12/06/2023",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.playstation.com/en-ca/games/bloodborne/",
  },
  {
    name: "Pluto",
    description:
      "As I grew accustomed to my new sales job, the year became busier, and I wanted a small escape that wouldn't require too much dedication, which brought me to Pluto. My primary concern with Monster was its pacing, and it made me doubt Urasawa's skills towards character-driven storytelling as a result. To my surprise, he was able to properly develop the characters in a mere 8 volumes, delving into profound questions of morality, humanity, and good versus evil while unfolding a captivating murder mystery. As a complete sucker for murder mysteries, I found this to be a perfect narrative to keep me captivated to the very end. The only drawback in Pluto lies in occasional 'silly-looking' character designs, but it DOES keep true to the source material that builds upon the world and lore of Astro Boy.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/pluto.png",
    date: "10/15/2023",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.viz.com/pluto-urasawa-x-tezuka",
  },
  {
    name: "Bomb Rush Cyberfunk",
    description:
      "I'm always drawn to games that make the bold decision of using low-poly textures and allowing the gameplay to speak for itself (much like Risk of Rain 2). Bomb Rush pulls no punhces in this regard, and has one of the best simplistic art styles in a game I have ever seen. Its story was impressively impactful with its own twists, turns, and stand-out character moments. My one gripe was with the performance, as I was mainly playing it on the switch ('unleash the beast' performance mode). Additionally, many of the areas in the game felt same-y and it was easy to get lost from time to time. Overall, the game was just dumb fun, nothing to overthink here. The gameplay loop was near perfect and the art style was something that hasn't been re-captured properly since the GameCube and Sega Dreamcast eras. I'd recommend this to anyone looking for a short, fun early 2000s nostalgic gaming experience.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/brcf.png",
    date: "09/10/2023",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://team-reptile.com/category/bomb-rush-cyberfunk/",
  },
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    description:
      "Regardless of where we are in the world, my childhood friend, Anthony, and I, always circle back to our shared love for Zelda, consistently reconnecting over our nostalgic passion for the series. With the release of TOTK, we eagerly delved into the experience, particularly as Breath of the Wild, its predecessor, stood as one of our favorites in the series. The vast scale and verticality I hungered for in my dream game, partially fulfilled by BOTW, were further realized in TOTK, making it the quintessential 'open world' game. However, the 'openness' of its game design once agaion carries its caveats. The world's elements and its abundant tasks peppred throuhgout became quite repetitive, with the depths of Hyrule being particularly guilty in this regard. Additionally, the Zelda team seems to be unable to deliver a story as grand and impactful as Ocarina of Time, Wind Waker, or even Skyward Sword. This raises questions about whether the Zelda team is running low on storytelling steam or if the open-world formula isn't performing as effectively as it could. In conclusion, TOTK offers the most polished open-world experience I've encountered. Nevertheless, even the best iteration of something can't fully overcome all its faults.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/totk.jpg",
    date: "08/8/2023",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://team-reptile.com/category/bomb-rush-cyberfunk/",
  },
  {
    name: "NieR: Automata",
    description:
      "Once again, Yoko Taro demonstrates his masterful ability to create a captivating world filled with deeply engaging characters in NieR Automata. Unlike its predecessor, Nier Replicant, this game introduces a near-perfect combat system that remains consistently enjoyable and addictive, even after the fifth playthrough. The seamless harmony between its compelling story, mesmerizing music, stunning visuals, and immersive gameplay is nothing short of extraordinary, making NieR Automata an unparalleled masterpiece within the realm of video games. Yoko Taro has proven to be the Shakespeare of the gaming medium.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/nieraut.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
      </div>
    ),
    link: "https://nierautomata.square-enix-games.com/en-us/age-gate/",
  },
  {
    name: "NieR Replicant ver.1.22474487139...",
    description:
      "This is undeniably one of the most remarkable story-driven games I've had the pleasure of experiencing. Its characters, despite their 'uncanny' nature, manage to grip your heartstrings, while the profoundly philosophical narrative leaves your mind utterly astounded. However, the game's only letdown lies in its repetitive and monotonous gameplay. The combat is pretty shallow, and the quests frequently border on being excessively tedious, burdened with an abundance of backtracking. This game's soundtrack is nothing short of perfect and provided me with comfort on many sleepless nights.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/nierrep.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://nier.square-enix-games.com/en-us/",
  },
  {
    name: "Dai Dark",
    description:
      "A fun and refreshing take on the sci-fi genre, Q-Hayashida (known for her work on Dorohedoro) delivers her signature 'gruesome' style of storytelling with a lovable cast of characters. Contrasting light-hearted story beats with body horror and a slight hint of mystery, this story manages to weave stone-age type visuals into a cosmic tale. The series is only 5 volumes deep as of this review, but the potential here is aStRonOmiCaL.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/daidark.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.penguinrandomhouse.ca/books/701926/dai-dark-vol-1-by-q-hayashida/9781648271168",
  },
  {
    name: "Monster",
    description:
      "Proclaimed as being one of the best stories ever told (in a non-fictional setting) in anime/mange, Monster had set my expectations high, anticipating a conclusion that would leave a lasting impact rather than a sense of emptiness. Considering its expansive scope and the profound connections established between the huge cast of characters, I hoped that the climax would have been more grand and fulfilling overall.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/monster.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/monster-37",
  },
  {
    name: "Porco Russo",
    description:
      "Set in a world where air/marine travel are the primary methods of transportation, this movie about a cursed veteran pilot who has lost hope in humanity. This film was a lot deeper than I anticipated, it definitely caught me off-guard with its emotional complexity and dark themes. The genius of Hayao Miyazaki shines through the initially off-putting character designs.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/porco_rosso.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/watch/porco-rosso-535?ep=57990",
  },
  {
    name: "Angel's Egg",
    description:
      "A dystopian lovecraftian biblical retelling of the Noah's Arc story (along with many other biblical references). This movie puts a spin on the tale, asking questions from Christianity, humanity, and faith. Although the movie is extremely slow and depressing, the art style, world-building, and character design are incredibly strong.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/angels_egg.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/watch/angels-egg-1093?ep=84447",
  },
  {
    name: "R4 / Ridge Racer Type 4 / Direct Audio",
    description:
      "Filled with 80s synth/jazz and a drum n' bass/jungle fusion of beats, these tracks slap vigorously. It's a miracle that a soundtrack of this quality was put together for a mere PS1 game.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/r4.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.youtube.com/watch?v=dBWKwbjj020&list=PL6PHQCxAqpJTLqJjrDXhr_rXx0ta5rv4M",
  },
  {
    name: "Mother 3",
    description:
      "Since it was never localized, not many outside of Japan got to experience this heartwarming (and at times, soul-crushing) tale. Once you get past the 'quirky' off-beat moments of Shigesato Itoi's slighlty cringe sense of humour, the story and characters really manage to touch your soul. At the end of it, I was sobbing on the couch like a baby. Everyone I talk to is sick of hearing about this game.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/mother3.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
      </div>
    ),
    link: "http://mother3.fobby.net/",
  },
  {
    name: "Mother 2/Earthbound",
    description:
      "Regarded as a cult classic by many, Earthbound encompasses a series of unpredictable and endearing story beats that continue to exert significant influence in today's gaming landscape. While it may not reach the storytelling heights of Shigesato Itoi's Mother 3, it possesses a distinct sense of authorship that can only be found in his handful of titles. I would highly recommend playing this game with the official guide, as it adheres to several archaic design choices commonly seen in retro games of its time, such as excessively tedious mazes and a lack of clear direction.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/mother2.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
  },
];

const MediaBlogSection = () => {
  const resumeUrl =
    "https://www.dropbox.com/s/clwhabhsyt7iof9/Kacper%20Burza%20Resume%202023.pdf?raw=1";

  return (
    <section
      id="mediablog"
      className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4"
    >
      <div className="flex flex-col  my-10 py-16 space-y-28 w-full max-w-5xl">
        {media_elements.map((media_elements, idx) => {
          return (
            <div key={idx} className="relative">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                  <div className="md:w-1/2 relative z-10 mx-auto">
                    <Image
                      src={media_elements.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="hover:opacity-100"
                      style={{ maxHeight: "30em", objectFit: "contain" }}
                    />
                  </div>
                  <div className="mt-8 md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      {media_elements.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {media_elements.description}
                    </p>
                    <p className="text-l leading-7 mb-4 text-neutral-400 dark:text-neutral-600">
                      {media_elements.date}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {media_elements.rating}
                    </p>
                    {media_elements.link && (
                      <div
                        className="flex justify-center"
                        style={{ paddingTop: "4px" }}
                      >
                        <Link href={media_elements.link} target="_blank">
                          <BsGlobeAmericas
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    )}
                    <div className="flex flex-row align-bottom space-x-4"></div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MediaBlogSection;
