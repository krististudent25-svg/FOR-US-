import { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════
// QUESTION BANKS — 300 per category
// ═══════════════════════════════════════════════════

const QUESTIONS = {
  "💕 Love & Relationship": [
    ["Text first","Wait for them to text"],["Say I love you daily","Show it through actions"],
    ["Long hugs","Sweet kisses"],["Morning calls","Goodnight calls"],
    ["Plan every date","Spontaneous dates"],["Give gifts","Give quality time"],
    ["Words of affirmation","Acts of service"],["Public affection","Private affection"],
    ["Matching outfits","Complementary styles"],["Meet family early","Meet family slowly"],
    ["Romantic dinner out","Cozy dinner at home"],["Surprise them","Plan together"],
    ["Share passwords","Respect privacy"],["Talk every single day","Talk when needed"],
    ["Travel everywhere together","Allow solo trips"],["Big dream wedding","Intimate wedding"],
    ["Use pet names","Use real names"],["Apologize first","Wait to cool down"],
    ["Anniversary trip","Anniversary dinner"],["Write love letters","Send voice notes"],
    ["Weekly date nights","Monthly date nights"],["Share social media","Keep it offline"],
    ["Matching phone wallpapers","Own aesthetic"],["Express feelings freely","Show through actions"],
    ["Talk issues right away","Give it time"],["Decide everything together","Take turns deciding"],
    ["Tell each other everything","Some things stay private"],
    ["Random check-in calls","Scheduled call times"],["Forgive quickly","Need time to forgive"],
    ["Open up fast","Let it unfold slowly"],["Propose at home","Propose in public"],
    ["Pick the ring together","Surprise proposal"],["Equal partnership","Traditional roles"],
    ["Slow dance at home","Dance when going out"],["Sing duets","Separate songs"],
    ["Shared bucket list","Personal bucket lists"],["Tag each other in memes","DM memes privately"],
    ["Voice calls","Video calls"],["Fall asleep on call","Hang up before sleep"],
    ["Good morning text","Good morning call"],["Send selfies","Send photos of things"],
    ["Plan the future seriously","Live in the present"],["Get pets together soon","Pets can wait"],
    ["Work out together","Separate workout routines"],["Pray together","Private spiritual life"],
    ["Talk about past relationships","Exes stay in the past"],
    ["Comfortable in silence","Always have something to say"],
    ["Finish each other's sentences","Let them complete their thought"],
    ["Vent to partner first","Process alone then share"],
    ["Ask for advice when upset","Just need to be heard"],
    ["Cheer up with humor","Cheer up with comfort"],
    ["Be brutally honest","Soften difficult truths"],
    ["Address conflict head-on","Cool down then discuss"],
    ["Apologize with words","Apologize with actions"],
    ["Surprise visits","Always plan ahead"],
    ["Always available for them","Have personal boundaries"],
    ["Reply to messages instantly","Reply when you can"],
    ["No phones on dates","Phones are fine on dates"],
    ["Watch sunsets together","Watch sunrises together"],
    ["Cook meals together","Cook for each other"],
    ["Shared finances","Keep finances separate"],
    ["Surprise gifts anytime","Gifts on occasions only"],
    ["Meaningful expensive gift","Thoughtful small gift"],
    ["Handmade gift","Store-bought gift"],
    ["Gift an experience","Gift a physical thing"],
    ["Recreate your first date every year","New experience each anniversary"],
    ["Get matching tattoos","No relationship tattoos"],
    ["Wear matching jewelry","Own style always"],
    ["Share a signature scent","Different perfumes"],
    ["Borrow each other's clothes","Own wardrobes always"],
    ["Dress up for each other at home","Always be comfortable"],
    ["Stand up for each other publicly","Handle things privately"],
    ["Go to couples therapy","Work it out yourselves"],
    ["Leave love notes around","Send surprise texts"],
    ["Fell in love slowly","Fell fast and completely"],
    ["Were friends first","Fell for a stranger"],
    ["Love at first sight","Love that built over time"],
    ["Met online","Met in person"],
    ["Long distance to close","Always lived nearby"],
    ["Reunions feel like the first time","Every day together is special"],
    ["Missing them hurts beautifully","Feel secure even apart"],
    ["Tiny jealousy shows you care","Trust is never questioned"],
    ["Know all their friends","Separate social circles"],
    ["Double dates often","Just the two of you always"],
    ["Trip with a big group","Trip for just the two of you"],
    ["Spend every holiday together","Balance both families"],
    ["Move in before marriage","Move in after marriage"],
    ["Try their hobbies together","Respect separate hobbies"],
    ["Watch every show together","Recommend shows to each other"],
    ["Cook new things together","Perfect your favorite recipes"],
    ["Always go somewhere new","Return to places you love"],
    ["Grow and change together","Stay true to yourselves"],
    ["Similar life goals","Different goals that complement"],
    ["Same faith","Different beliefs, shared respect"],
    ["Same culture","Different backgrounds, beautiful mix"],
    ["Support every career change","Be each other's stability"],
    ["Would relocate for love","Love travels the distance"],
    ["Say I love you in every goodbye","Say it when it overflows"],
    ["Send memes as love language","Send voice notes as love language"],
    ["Surprise with their favorite food","Surprise with flowers"],
    ["Plan a picnic together","Plan a movie night in"],
    ["Drive around and just talk","Walk together and just talk"],
    ["Bake together on weekends","Cook big meals on weekends"],
    ["Decorate your home together","Let one person lead the décor"],
    ["Keep a shared journal","Write letters to each other"],
    ["Read the same book","Watch the same series"],
    ["Learn a language together","Teach each other your skills"],
    ["Make playlists for each other","React to each other's music"],
    ["Celebrate 100 days together","Celebrate monthly anniversaries"],
    ["Celebrate every small win","Save celebrations for milestones"],
    ["Post about each other","Keep the relationship private"],
    ["Go Instagram official","It's just between you two"],
    ["Screenshot every sweet conversation","Save every voice note"],
    ["Reread old messages when missing them","Call when you miss them"],
    ["Send care packages across distance","Send digital gifts and surprises"],
    ["Watch movies together online","Play games together online"],
    ["Sync sleep schedules for calls","Accept different time zones gracefully"],
    ["Count down to the next meeting","Live fully in the in-between"],
    ["Let your future plans be your hope","Let your present moments be your hope"],
    ["Talk openly about missing them","Stay strong and positive for them"],
    ["Imagine your everyday life together","Dream about adventures together"],
    ["Wear something of theirs","Use their perfume when you miss them"],
    ["Look at old photos when missing them","Listen to your song when missing them"],
    ["Celebrate the day you first met","Celebrate the first I love you"],
    ["Love is showing up every day","Love is giving space to grow"],
    ["Love is being chosen","Love is choosing every single day"],
    ["Home is wherever they are","Home is a feeling you carry"],
    ["Love grows deeper with time","Love was electric from day one"],
    ["Being loved is gentle","Being loved is exhilarating"],
    ["Love is patient","Love is passionate"],
    ["Love feels familiar","Love still surprises you"],
    ["Safety is the purest love","Adventure is the truest love"],
    ["Your person is your best friend","Your person is your greatest mystery"],
    ["Text good morning first","Wait and see if they text first"],
    ["Leave them the last bite","Order extra just for them"],
    ["Hold the door","Pull out their chair"],
    ["Remember every small detail","Love them without keeping score"],
    ["Know their coffee order by heart","Try something new together every time"],
    ["Keep every ticket stub","Take a photo to remember"],
    ["Have a song that's yours","Have a place that's yours"],
    ["Have a word only you two use","Have a look only you two understand"],
    ["Feel butterflies still","Feel steady and safe"],
    ["Miss them within an hour","Miss them when something beautiful happens"],
    ["They're the first you call with news","They're the one you replay your day for"],
    ["Love their morning voice","Love their laugh"],
    ["They make ordinary days special","They make you want to be better"],
    ["Their presence is calming","Their presence is energizing"],
    ["Love their serious face","Love their silly face"],
    ["Hold hands everywhere","Hold hands on important moments"],
    ["Forehead kisses are everything","Nose kisses are everything"],
    ["Their smell is home","Their voice is home"],
    ["They get more beautiful every day","Their beauty stopped you the first day"],
    ["Love how they love others","Love how they love you"],
    ["They challenge you to grow","They love you exactly as you are"],
    ["Argue passionately and make up gently","Talk things through calmly always"],
    ["Love their ambition","Love their contentment"],
    ["Love how they think","Love how they feel"],
    ["They're your safe place","They're your adventure"],
  ],

  "🌍 Travel & Adventure": [
    ["Beach","Mountains"],["Backpacking","Luxury hotel"],
    ["Camping","Glamping"],["Road trip","Direct flight"],
    ["Plan every detail","Just show up"],["Travel in summer","Travel in winter"],
    ["Explore the city","Escape to nature"],["Cruise","Island hopping"],
    ["Historical sites","Natural wonders"],["Early morning flights","Afternoon flights"],
    ["Window seat","Aisle seat"],["Hostels","Boutique hotels"],
    ["Rent a car","Use public transport"],["Tourist hotspots","Hidden local gems"],
    ["Pack light","Pack for every scenario"],["Eat only local food","Keep some familiar food"],
    ["Museums and galleries","Street art and markets"],
    ["Stay out all night","Rise early and explore"],
    ["Guided tour","Self-guided adventure"],
    ["Go deep in one country","See many countries quickly"],
    ["National parks","Iconic cities"],["Japan","South Korea"],
    ["Bali","Lombok"],["Paris","Rome"],["New York","London"],
    ["Dubai","Singapore"],["Istanbul","Athens"],
    ["Maldives","Seychelles"],["Iceland","Norway"],
    ["Morocco","Egypt"],["Thailand","Vietnam"],
    ["India","Sri Lanka"],["Australia","New Zealand"],
    ["Safari","Scuba diving"],["Skydiving","Bungee jumping"],
    ["Paragliding","Hot air balloon"],["White water rafting","Kayaking"],
    ["Rock climbing","Zip lining"],["Hiking","Mountain biking"],
    ["Snorkeling","Deep sea diving"],["Surfing","Paddleboarding"],
    ["Skiing","Snowboarding"],["Multi-day trekking","Day hikes"],
    ["Horseback riding","ATV adventure"],["Whale watching","Swim with dolphins"],
    ["Chase waterfalls","Chase sunsets"],["Desert safari","Jungle trek"],
    ["Explore caves","Hike a volcano"],["Walk on a glacier","Dive a coral reef"],
    ["Food tours","Cooking classes abroad"],["Night train","Sleeper bus"],
    ["Ferry across the sea","Speedboat between islands"],
    ["Rent a motorcycle","Rent bicycles"],["Bullet train","Scenic railway"],
    ["5-star resort","Unique Airbnb"],["Eco lodge","Treehouse"],
    ["Overwater bungalow","Clifftop villa"],["All-inclusive","Find your own food"],
    ["Day trips from one base","Move cities every few days"],
    ["Collect souvenirs","Collect only experiences"],
    ["Keep a travel journal","Write a travel blog"],
    ["Vlog every moment","Keep it just for you"],["One bag only","Check in luggage"],
    ["Get a local SIM","Use roaming"],["Learn local phrases","English gets you through"],
    ["Join a local festival","Travel in the off-season"],
    ["Stay beachfront","Stay on the hillside"],
    ["Sunrise hike","Sunset boat trip"],["Film camera","Digital camera"],
    ["Research everything before","Discover when you arrive"],
    ["Book months ahead","Last minute deals"],
    ["Use the long layover to explore","Keep layovers short"],
    ["Two-week deep dive","Month-long slow travel"],
    ["Return to places you love","Always somewhere new"],
    ["Document every meal","Just eat and enjoy"],["Spa days on vacation","Adventures every day"],
    ["Relax by the pool","Explore from dawn to dusk"],
    ["Santorini","Amalfi Coast"],["Swiss Alps","Italian Dolomites"],
    ["Peru","Chile"],["Cuba","Puerto Rico"],["Spain","Portugal"],
    ["Budapest","Prague"],["Lisbon","Barcelona"],
    ["Kyoto","Tokyo"],["Osaka","Hokkaido"],["Jeju Island","Busan"],
    ["Chiang Mai","Phuket"],["Hanoi","Ho Chi Minh City"],
    ["Udaipur","Jaipur"],["Cape Town","Zanzibar"],
    ["Marrakech","Essaouira"],["Buenos Aires","Montevideo"],
    ["Reykjavik","Tromsø"],["Edinburgh","Dublin"],
    ["Amsterdam","Copenhagen"],["Florence","Venice"],
    ["Dubrovnik","Split"],["Mykonos","Crete"],
    ["Canadian Rockies","Niagara Falls"],["Alaska","Hawaii"],
    ["Grand Canyon","Yellowstone"],["Yosemite","Zion"],
    ["New Orleans","Nashville"],["Mexico City","Oaxaca"],
    ["Tulum","Mérida"],["Cartagena","Medellín"],
    ["Cusco","Lima"],["Machu Picchu","Galápagos Islands"],
    ["Patagonia","Atacama Desert"],["Tuscany","Provence"],
    ["Lake Como","Cinque Terre"],["Kyoto temples","Tokyo nightlife"],
    ["Bali rice terraces","Bali beach clubs"],
    ["Safari in Kenya","Gorilla trek in Rwanda"],
    ["Northern Lights in Lapland","Midnight Sun in Norway"],
    ["Cherry blossoms in Japan","Tulip fields in Netherlands"],
    ["Lavender fields in Provence","Sunflower fields in Tuscany"],
    ["Trek to Everest Base Camp","Trek the Camino de Santiago"],
    ["Dive the Great Barrier Reef","Snorkel the Maldives"],
    ["Cruise Alaska's glaciers","Sail Croatia's islands"],
    ["Road trip Route 66","Road trip the Pacific Coast Highway"],
    ["Drive the Amalfi Coast","Drive through Patagonia"],
    ["Train through the Scottish Highlands","Train across Japan"],
    ["Cycle Amsterdam","Cycle through Bordeaux vineyards"],
    ["Walk Rome in a day","Walk Paris in a day"],
    ["Overnight in a Sahara camp","Overnight on a Greek island"],
    ["Sleep in an ice hotel","Sleep in a treehouse"],
    ["Sleep under the stars","Sleep in a castle"],
    ["Float in the Dead Sea","Swim in a cenote"],
    ["Bathe in an Icelandic hot spring","Soak in a Japanese onsen"],
    ["Eat at a Michelin star restaurant","Eat at a street food stall"],
    ["Cook on a live fire while camping","Have a beachfront seafood dinner"],
    ["Drink wine in Bordeaux","Drink sake in Kyoto"],
    ["Coffee on a Florentine piazza","Tea in a Moroccan riad"],
    ["Watch a flamenco show in Seville","Watch the Northern Lights dance"],
    ["See the Eiffel Tower light up","See the Taj Mahal at sunrise"],
    ["Stand at the edge of the Grand Canyon","Stand at the top of Machu Picchu"],
    ["Lose yourself in a Tokyo alley","Lose yourself in a Marrakech souk"],
    ["Shop at a Parisian flea market","Shop at a Bangkok night market"],
    ["Wander with no map","Follow a carefully curated itinerary"],
    ["Get completely lost","Always know exactly where you are"],
    ["Meet strangers who become memories","Only need each other the whole trip"],
    ["Travel changes you","Travel reveals you"],
    ["The journey is the destination","The destination is worth everything"],
    ["One perfect trip a year","Many small adventures always"],
    ["Save for a dream trip","Spend on many trips now"],
    ["Travel as a couple tradition","Travel as a family someday"],
  ],

  "🎬 Entertainment & Hobbies": [
    ["Movies","TV series"],["Netflix at home","Cinema experience"],
    ["Horror films","Comedy films"],["Action","Romance"],
    ["Science fiction","Fantasy"],["Anime","Western cartoons"],
    ["Documentaries","Reality TV"],["Classic films","New releases"],
    ["Binge a whole series at once","One episode a night"],
    ["Spoilers are fine","No spoilers ever"],
    ["Gaming together","Outdoor activities together"],
    ["PC gaming","Console gaming"],["Single-player story","Multiplayer chaos"],
    ["RPG adventures","FPS intensity"],["Strategy games","Adventure games"],
    ["Card games","Board games"],["Chess","Checkers"],
    ["Monopoly","Catan"],["Uno","Jenga"],
    ["Drawing","Painting"],["Digital art","Traditional art"],
    ["Photography","Videography"],["Write fiction","Write poetry"],
    ["Journal privately","Write a blog"],["Build things with code","Design visually"],
    ["Sing together","Play instruments together"],
    ["Guitar","Piano"],["Drums","Violin"],["Ukulele","Bass"],
    ["Spotify","Apple Music"],["Make playlists","Listen to full albums"],
    ["Pop","R&B"],["Hip hop","Jazz"],
    ["Classical music","Electronic music"],["K-pop","J-pop"],
    ["Indie","Alternative"],["Lofi hip hop","Ambient music"],
    ["Podcasts","Audiobooks"],["True crime podcasts","Comedy podcasts"],
    ["Fiction books","Non-fiction books"],["Fantasy novels","Historical fiction"],
    ["Self-help books","Biographies"],["Graphic novels","Traditional novels"],
    ["E-books","Physical books"],["Read before sleep","Read in the morning"],
    ["Book club together","Read and discuss privately"],
    ["Yoga","Pilates"],["Running","Cycling"],
    ["Gym workouts","Home workouts"],["Swimming","Rowing"],
    ["HIIT training","Long steady cardio"],
    ["Work out in the morning","Work out in the evening"],
    ["Team sports","Solo sport"],["Football","Basketball"],
    ["Tennis","Badminton"],["Boxing","Martial arts"],
    ["Bowling","Mini golf"],["Archery","Laser tag"],
    ["Escape rooms","Karaoke"],["Zoo","Aquarium"],
    ["Art museums","Science museums"],["Live theater","Stand-up comedy"],
    ["Concerts","Music festivals"],["Dance classes","Cooking classes"],
    ["Pottery","Painting classes"],["Gardening","Bonsai"],
    ["Make candles","Make soap"],["Collect vinyl records","Collect books"],
    ["Comics","Manga"],["Star Wars","Star Trek"],
    ["Marvel","DC"],["Disney","Studio Ghibli"],
    ["Harry Potter","Lord of the Rings"],
    ["Game of Thrones","The Witcher"],
    ["Breaking Bad","The Wire"],["Friends","How I Met Your Mother"],
    ["The Office","Parks and Recreation"],
    ["Black Mirror","Westworld"],["Stranger Things","Dark"],
    ["Money Heist","Squid Game"],["K-dramas","J-dramas"],
    ["Baking","Savory cooking"],["Follow recipes exactly","Cook by instinct"],
    ["Watch cooking shows for inspiration","Try recipes you've never seen"],
    ["Host dinner parties","Cozy meals just for two"],
    ["BBQ outdoors","Cook indoors always"],
    ["Photograph every meal","Just eat it"],["Knitting","Crocheting"],
    ["Sewing","Embroidery"],["Produce music","Record a podcast"],
    ["Sculpting","Pottery"],["Snorkeling","Freediving"],
    ["Street photography","Portrait photography"],
    ["Watercolor","Oil painting"],["Scrapbooking","Digital photo albums"],
    ["Astrology","Tarot"],["Crystal collecting","Journaling rituals"],
    ["Night walks","Early morning walks"],
    ["Stargaze together","Watch the moon rise"],
    ["Thrift and flip furniture","DIY crafts from scratch"],
    ["Online chess","Chess with a physical board"],
    ["Wordle every morning","NYT crossword every morning"],
    ["Trivia nights","Quiz apps together"],
    ["Jackbox party games","Board game nights"],
    ["Cozy games like Stardew Valley","Challenging games like Elden Ring"],
    ["Pokémon","Legend of Zelda"],["Mario Kart","Smash Bros"],
    ["Co-op games","Competitive games"],
    ["Speedrun challenges","100% completionist"],
    ["Retro gaming","Latest releases"],
    ["Tabletop RPG campaigns","Video game RPG campaigns"],
    ["Dungeons and Dragons","Pathfinder"],
    ["Physical board game collection","Digital game library"],
    ["Watch with subtitles","Watch without subtitles"],
    ["Watch in original language","Watch dubbed"],
    ["Cinema popcorn","Snacks snuck in"],
    ["Arrive early for the previews","Arrive right on time"],
    ["Stay for the credits","Leave straight after"],
    ["Discuss films immediately after","Let it sink in first"],
    ["Rate on Letterboxd","Keep opinions to yourself"],
    ["Rewatch favorite films","Only watch new things"],
    ["Genre films","Prestige cinema"],["Short films","Feature films"],
    ["Animated films","Live action"],["Foreign language films","English films"],
    ["Director deep dives","Actor deep dives"],
    ["Horror marathons","Comedy marathons"],
    ["Film score matters","Dialogue matters most"],
    ["Cinematography first","Story first"],
    ["Method acting appreciation","Technique appreciation"],
    ["Criterion Collection","Blockbusters"],["Sundance films","Cannes films"],
    ["Watch together live","Watch and then discuss"],
    ["Pause to talk during","Watch straight through"],
    ["React out loud","Watch in silence"],
    ["Cuddle while watching","Separate comfortable spots"],
  ],

  "🧠 Personality & Life": [
    ["Introvert","Extrovert"],["Morning person","Night owl"],
    ["Detailed planner","Spontaneous spirit"],["Lead with logic","Lead with emotion"],
    ["Natural leader","Thoughtful supporter"],["Bold and direct","Gentle and considered"],
    ["Eternal optimist","Honest realist"],["See the whole picture","Master the details"],
    ["City energy","Country peace"],["Wide social circle","Small close circle"],
    ["Work incredibly hard","Work incredibly smart"],
    ["Take bold risks","Play the long game"],
    ["Trust people quickly","Let trust be earned"],
    ["Say exactly what you think","Choose your words carefully"],
    ["Decide fast","Weigh everything"],["Compete to win","Collaborate to build"],
    ["Deeply sentimental","Wonderfully practical"],
    ["Live in the past fondly","Live in the future boldly"],
    ["Love your routines","Crave variety"],["Own very little","Surround yourself with beauty"],
    ["Everything has its place","Creative organized chaos"],
    ["Digital everything","Love the analog world"],
    ["DIY every project","Hire the right people"],
    ["Learn by doing","Learn by studying"],
    ["One deep focus at a time","Many things at once"],
    ["Work in perfect silence","Work with music always"],
    ["Home is your office","Cafés are your office"],
    ["Save money faithfully","Spend on what matters"],
    ["Invest for the future","Experience life now"],
    ["Generously frugal","Generously giving"],
    ["Buy secondhand","Buy new and quality"],
    ["Own a few perfect things","Have what you love around you"],
    ["Capsule wardrobe","A full beautiful closet"],
    ["Always dress intentionally","Dress for pure comfort"],
    ["Timeless style","Love the latest trends"],
    ["Sneakers always","Dress shoes when right"],
    ["Skincare ritual","Minimal and simple"],
    ["Wear fragrance daily","Wear fragrance for special moments"],
    ["Active on social media","Quietly lurk"],["Post often","Rarely post"],
    ["Long thoughtful captions","Short perfect captions"],
    ["Love a good filter","Always unedited"],
    ["Notifications always on","Notifications off always"],
    ["Dark mode","Light mode"],["Wireless earbuds","Wired earphones"],
    ["Smart watch","Classic watch"],["Smart home","Simple home"],
    ["Electric vehicle","Classic car"],["Public transport","Drive yourself"],
    ["Eco-conscious in everything","Practical where needed"],
    ["Mostly plant-based","Love all food"],["Organic always","Food is food"],
    ["Work to live freely","Love what you do"],
    ["Career is your identity","Career funds your real life"],
    ["Build your own thing","Excel within a great team"],
    ["Work remotely forever","Love an office"],
    ["Embrace feedback openly","Need it delivered gently"],
    ["Grow a little every day","Be deeply content as you are"],
    ["Data and evidence","Gut and intuition"],
    ["Perfect before releasing","Done is better than perfect"],
    ["Finish things before the deadline","Best work under pressure"],
    ["Self-driven and motivated","Thrive with accountability"],
    ["Meditate to center yourself","Pray to center yourself"],
    ["Therapy helps you grow","Process it yourself"],
    ["Journal your feelings","Talk your feelings out"],
    ["Cry and release","Laugh and release"],
    ["Cold showers","Hot showers"],["Long bath","Quick shower"],
    ["Need 8 hours","Thrive on 6"],["Nap whenever possible","Never nap"],
    ["One alarm, up immediately","Several alarms, slowly wake"],
    ["Coffee is life","Food before anything"],
    ["Breakfast every morning","Skip breakfast, eat at noon"],
    ["Meal prep on Sunday","Cook fresh every day"],
    ["Grocery list always","Improvise in the store"],
    ["Open and flexible opinions","Strong principled convictions"],
    ["Generalist and curious","Deep specialist"],
    ["Adapt quickly to change","Provide the steady constant"],
    ["Express every emotion","Reserve depth for close ones"],
    ["Touch is how you love","Words are how you love"],
    ["Apologize before processing","Process then apologize"],
    ["Forgive and release","Forgive and remember gently"],
    ["Wear your heart openly","Protect your heart carefully"],
    ["Vulnerable with almost anyone","Vulnerable with very few"],
    ["Think out loud","Think deeply inside first"],
    ["Feel everything deeply","Stay clear under any pressure"],
    ["Early tech adopter","Wait until it's proven"],
    ["Upgrade devices yearly","Use things until they break"],
    ["Paperless life","Still love paper and pens"],
    ["Everything backed up to cloud","Local and offline"],
    ["Browser tab hoarder","Always clean desktop"],
    ["Night mode always on","Comfortable in light mode"],
    ["Custom everything","Default settings are fine"],
    ["Phone always on vibrate","Sound on always"],
    ["Do Not Disturb mode","Always reachable"],
    ["Multiple alarms as backup","Trust one alarm completely"],
    ["Track your sleep","Just sleep and trust it"],
    ["Move intuitively","Track every workout"],
    ["Eat intuitively","Track nutrition mindfully"],
    ["Whole food always","Supplements when needed"],
    ["Plant-based protein","Protein from any source"],
    ["Everything in moderation","Disciplined about food"],
    ["Batch cook big meals","Cook small meals fresh"],
    ["Air fryer","Classic oven"],["Love kitchen gadgets","Minimal kitchen tools"],
    ["Grow your own herbs","Fresh herbs from the market"],
    ["Compost everything","Recycle what you can"],
    ["Reusable bags always","Sometimes forget the bag"],
    ["Slow fashion always","Mix of slow and fast fashion"],
    ["Invest in one great coat","Have many options"],
    ["Quality basics always","Love a statement piece"],
    ["Neutral palette","Love bold colors"],
    ["Mix patterns confidently","Clean simple lines"],
    ["Jewelry every single day","Minimal jewelry"],
    ["Watch every day","Prefer bare wrist"],
    ["Sunglasses as armor","Sunglasses rarely"],
    ["Always wear a hat","Hats only sometimes"],
    ["Belt is finishing touch","No belt needed"],
    ["Tuck in your shirt","Always untucked"],
    ["Rolled denim cuffs","Never cuff jeans"],
    ["Cardigan over everything","Hoodie always"],
    ["Casual blazer","Blazer only for occasions"],
    ["White sneakers forever","Love colored sneakers"],
    ["High tops","Low tops"],["Chelsea boots","Combat boots"],
    ["Sandals in summer","Shoes even in summer"],
    ["Barefoot at home","Slippers at home"],
    ["Take up space confidently","Move through the world quietly"],
    ["Fill silence with warmth","Cherish comfortable silence"],
    ["Remember faces","Remember names"],
    ["Always early","Arrive right on time"],
    ["Send the long message","Keep it brief and warm"],
    ["The big gesture","The consistent small gestures"],
    ["Surprise people with thoughtfulness","Be reliably steady"],
    ["Push comfort zones daily","Find peace in the familiar"],
    ["Collect experiences","Collect beautiful objects"],
    ["Give advice freely","Listen and hold space"],
    ["Fix the problem","Just be present with them"],
  ],

  "✨ Dreams & Future": [
    ["Beautiful big house","Perfect cozy apartment"],
    ["Live in the city","Live in the countryside"],
    ["Build your own company","Lead within a great company"],
    ["Known by many","Known deeply by few"],
    ["Retire before 50","Work at something you love forever"],
    ["Stay where you grew up","Build a life somewhere new"],
    ["Grow through passive income","Thrive through active work"],
    ["Own your home","Invest and rent freely"],
    ["Dogs","Cats"],["Many beloved pets","Just the two of you"],
    ["Have children","Choose a child-free life"],
    ["Two children","Four children"],
    ["Raise children with structure","Raise children with freedom"],
    ["Children educated abroad","Children educated locally"],
    ["Live near your family","Build your own world together"],
    ["Hold family traditions tightly","Create beautiful new ones"],
    ["Leave a lasting legacy","Live fully in the now"],
    ["Write a book","Make a film"],
    ["Travel to space","Dive to the deep ocean"],
    ["Live in a different country","Travel the world from your home base"],
    ["Master one extraordinary skill","Be wonderful at many things"],
    ["Mentor the next generation","Pour everything into your own path"],
    ["Run a marathon","Climb a great mountain"],
    ["Go on a pilgrimage","Go on a vision quest"],
    ["Start a podcast","Build a YouTube channel"],
    ["Enter public life","Lead at the community level"],
    ["Own a beautiful restaurant","Own a beloved café"],
    ["Own a bookshop","Own an art gallery"],
    ["Own a farm","Own a vineyard"],
    ["Build a tiny house","Design your dream home"],
    ["Live off the grid","Live in a smart connected home"],
    ["Run a sustainable farm","Tend an urban garden"],
    ["Sail around the world","Road trip across a continent"],
    ["Live on a boat","Live in the mountains"],
    ["Island life","Life beside a lake"],
    ["Step on every continent","Travel to every country"],
    ["See the Northern Lights","Stand in the Amazon rainforest"],
    ["Walk the Camino de Santiago","Trek to Everest Base Camp"],
    ["Volunteer across the world","Volunteer in your community"],
    ["Take a meaningful gap year","Pursue your goals without stopping"],
    ["A life rich with experience","A life rich with beautiful things"],
    ["Collect memories","Collect beautiful objects"],
    ["Be a nomad for a chapter","Put down deep roots"],
    ["Live communally","Have your own private space"],
    ["A multi-generational home","A home just for your family"],
    ["Your oldest friends forever","Grow with new people every chapter"],
    ["Be remembered for your kindness","Be remembered for your impact"],
    ["Change the world broadly","Change one life completely"],
    ["Make bold courageous moves","Make careful intentional moves"],
    ["Shoot for the impossible","Achieve the absolutely certain"],
    ["All in on one dream","Keep options open"],
    ["Bet entirely on yourself","Build a strong safety net"],
    ["Five-year plan","A living vision board"],
    ["Choose a theme for each year","Choose a word for each year"],
    ["Affirm yourself every morning","Reflect on yourself every evening"],
    ["Visualize success vividly","Simply do the work"],
    ["Let purpose drive you","Let your values drive you"],
    ["Build a personal brand","Let your work speak quietly"],
    ["Teach thousands of people","Mentor one person deeply"],
    ["Academic mastery","Wisdom from living"],
    ["Fight hunger in the world","Fight climate change"],
    ["Be a full-time artist","Keep art as your sacred space"],
    ["Speak on great stages","Host intimate powerful gatherings"],
    ["Seek recognition","Find deep satisfaction within"],
    ["Found a charity","Quietly give generously always"],
    ["Semi-retire at 40","Never stop doing meaningful work"],
    ["Build wealth and give it away","Give as you earn always"],
    ["Real estate","Index fund investing"],
    ["Joint finances together","Separate finances, shared dreams"],
    ["Full financial transparency","Healthy financial independence"],
    ["Homeowner before 30","Homeowner in perfect timing"],
    ["Car-free city life","Car as freedom"],
    ["Urban density and energy","Space and sky and quiet"],
    ["Open-plan living","Defined rooms and spaces"],
    ["Minimalist interiors","Warm maximalist home"],
    ["Neutral calming tones","Rich bold colors"],
    ["Art on every wall","One perfect meaningful piece"],
    ["Plants in every corner","Clean architectural lines"],
    ["A room full of books","A home gym"],
    ["Home cinema","A simple beautiful TV"],
    ["Thoughtful smart home","A purely analog home"],
    ["Solar and sustainable","Whatever works best"],
    ["A kitchen garden","A window herb garden"],
    ["Fruit trees in the yard","A flower garden"],
    ["Cottage and countryside","Studio in a beautiful city"],
    ["Desert landscape","Rainforest green"],
    ["Beside the sea","Beside a mountain"],
    ["Heritage building with history","New architecture with vision"],
    ["Renovation project","Move-in ready home"],
    ["Build it with your hands","Have it designed beautifully"],
    ["Know your neighbors well","Peaceful private life"],
    ["Be the host everyone loves","Be the guest everyone loves"],
    ["Community garden","Your own private garden"],
    ["Work from the perfect home office","Work from beautiful cafés"],
    ["Beach town life","Mountain town life"],
    ["Island forever","Always the mainland"],
    ["Expat adventure","Deep local roots"],
    ["A bilingual home","One rich language at home"],
    ["Children who speak many languages","Children who speak one language deeply"],
    ["International education","The best local education"],
    ["Gap year before university","Straight to the dream"],
    ["A trade and a craft","A degree and a career"],
    ["Portfolio over everything","The right credentials"],
    ["Your network opens every door","Your skills open every door"],
    ["Always a side project","Complete focus on one thing"],
    ["Freelance freedom","The security of something great"],
    ["Remote work forever","An office that inspires you"],
    ["Four-day work week","Five days of doing what you love"],
    ["Work from anywhere in the world","Work from one beautiful city"],
    ["Digital nomad chapter","Then settle somewhere perfect"],
    ["Minimalist everything","A life of beautiful abundance"],
    ["Own less own better","Have what brings you joy"],
    ["Experience over objects","The right objects matter too"],
    ["Nomadic and free","Rooted and flourishing"],
    ["Designed life","Organic life"],
  ],

  "💋 Flirty": [
    ["Slow burn","Electric from the start"],
    ["Soft gentle kisses","Deep passionate kisses"],
    ["Always make the first move","Love being pursued"],
    ["Flirty teasing texts","Warm sweet texts"],
    ["Tease them first","Love being teased"],
    ["Hold eye contact","Look away and smile"],
    ["Hold hands everywhere","Hold hands in meaningful moments"],
    ["Forehead kisses","Neck kisses"],["Back hug","Front hug"],
    ["Cuddle close after","Need a little space after"],
    ["Whisper sweet things","Say nothing, just feel it"],
    ["Morning","Night"],["Completely spontaneous","Build it slowly all day"],
    ["Lead","Be led"],["Soft and tender","Passionate and intense"],
    ["Slow and close","Urgent and electric"],
    ["Eyes open","Eyes closed and lost in it"],
    ["Candles and a playlist","Just the two of you, nothing else"],
    ["Talk and laugh during","Silent and completely present"],
    ["Compliment them during","Touch speaks louder than words"],
    ["Tell them they're beautiful","Show them with every touch"],
    ["Physical attraction came first","Emotional connection came first"],
    ["Flirt with your body","Flirt with your words"],
    ["Long slow eye contact","Quick glance and look away"],
    ["Slow dance close without music","Dance free then pull them close"],
    ["Run fingers through their hair","Hold their face gently"],
    ["Trace your fingers across their skin","Wrap your arms around them"],
    ["Bite softly","Scratch softly"],
    ["Breathe on their neck","Whisper close to their ear"],
    ["Come up behind them","Always face to face"],
    ["A long massage first","Kiss your way there"],
    ["Build it slowly for a long time","Want them immediately"],
    ["Pull them impossibly close","Tease by stepping back"],
    ["Undress each other slowly","Let them undress you"],
    ["Dim warm lights","Complete and freeing darkness"],
    ["Soft candlelight","The light of the world outside"],
    ["Music always","Beautiful silence"],
    ["A playlist you made for this","No playlist needed"],
    ["A hotel room","Your own perfect bed"],
    ["Their place","Your place"],
    ["Breakfast in bed after","Go get coffee together after"],
    ["Stay in all day after","Step out into the world after"],
    ["Shower together after","Long shower alone after"],
    ["Fall asleep in their arms","Fall asleep touching"],
    ["Talk softly after","Let silence hold you after"],
    ["Say I love you after","Just hold each other after"],
    ["Playful and laughing","Deeply intense and present"],
    ["Spontaneous on a weekday","A ritual on weekends"],
    ["Late electric nights","Slow golden afternoons"],
    ["Say what you want first","Touch first then say it"],
    ["Build tension across a whole day","No buildup needed at all"],
    ["Dress up beautifully for them","Come exactly as you are"],
    ["Fragrance is everything","Their natural scent is everything"],
    ["Always freshly showered","Whenever the moment is right"],
    ["After a long conversation that moved you","After a night of laughing together"],
    ["After a workout together","After cooking a meal together"],
    ["After time apart","After a quiet lazy day"],
    ["A hug that becomes more","A kiss that becomes more"],
    ["Sleepy and tender","Wide awake and fully present"],
    ["Eyes that say everything","A smile that says everything"],
    ["A touch that asks","A touch that already knows"],
    ["Undress them slowly","Impatient and electric"],
    ["Savor every single moment","Completely lost in the moment"],
    ["Emotional intimacy leads","Physical intimacy leads"],
    ["Love that feels like home","Love that feels like discovery"],
    ["Beautifully predictable","Always somehow new"],
    ["Deeper and richer every time","Electric like it's always the first"],
    ["Know each other completely","Still discovering each other"],
    ["Comfort that needs no words","Passion that needs no explanation"],
    ["Take all the time","Can't wait another second"],
    ["Give more than you take","Take and give in equal measure"],
    ["Ask what feels right","Know intuitively what they need"],
    ["Check in and make sure","Flow without interruption"],
    ["Aftercare is the most important part","Ready for the next round"],
    ["Say it after","Show it after"],
    ["Make them breakfast after","Stay in bed longer after"],
    ["First thing is a kiss","First thing is pulling them close"],
    ["Lights on","Lights off"],["Slow and teasing","Fast and breathless"],
    ["Vocal and expressive","Quiet and intense"],
    ["Eyes open always","Eyes closed always"],
    ["Give first","Receive first"],
    ["Foreplay is the whole experience","Foreplay is the beginning"],
    ["Long slow buildup","Start immediately"],
    ["Blindfold them","See everything"],
    ["Take complete control","Surrender completely"],
    ["Bite softly","Scratch softly"],["Leave a mark","No marks"],
    ["Pull their hair gently","Never touch their hair"],
    ["Many different positions","Perfect the one you love"],
    ["Try something new","Master what you know"],
    ["Face to face always","From behind"],["On top","Underneath"],
    ["Against the wall","On the bed"],
    ["Take your time undressing them","Impatient to have them"],
    ["Lingerie matters","What's underneath doesn't matter"],
    ["Role play together","Just perfectly yourselves"],
    ["Plan a fantasy together","Act on pure impulse"],
    ["Talk about what you want","Let them discover it"],
    ["Guide their hands","Let them explore freely"],
    ["Tell them when it's perfect","Let your sounds tell them"],
    ["Encourage them with words","Encourage them with sounds"],
    ["Hold them tight","Let your fingertips trace them"],
    ["Kiss their shoulder","Bite their shoulder"],
    ["Trail kisses down their body","Kiss straight to their lips"],
    ["Explore every inch","Stay where it feels best"],
    ["Linger on their neck","Linger on their inner thigh"],
    ["Dominant energy","Submissive energy"],["Always switch","Always the same"],
    ["Give pleasure first","Receive pleasure first"],
    ["Toys together","Just each other always"],
    ["Multiple rounds","One perfect complete time"],
    ["Focus entirely on them","Take and give equally"],
    ["Make them wait","Give them everything immediately"],
    ["Praise them","Command them"],["Worship their body","Devour each other"],
    ["Tell them they feel incredible","Tell them they belong to you"],
    ["Love words during","Desire words during"],
    ["Tender ending","Explosive ending"],
    ["Hold each other at the end","Catch your breath first"],
    ["Immediate kiss after","Just breathe together after"],
    ["Laugh if something funny happens","Keep the mood completely"],
    ["Real unfiltered moments","The fantasy version of yourselves"],
    ["Every time brings you closer","Every time is its own world"],
    ["More familiar and beautiful","Always somehow surprising"],
    ["Trust is the deepest desire","Chemistry is the deepest desire"],
    ["Emotional safety first","Physical electricity first"],
    ["Their collarbone is your weakness","The small of their back is your weakness"],
    ["Inner thigh is your territory","Back of their neck is your territory"],
    ["Kiss behind their ear","Breathe on their neck"],
    ["Trace their lips with your finger","Bite their lower lip gently"],
    ["Hold their face while kissing","Your hands in their hair"],
    ["One hand on their heart","Fingers perfectly intertwined"],
    ["Be the big spoon","Be the little spoon"],
    ["Switch every night","Always the same and perfect"],
    ["Steal all the blanket","Share the blanket perfectly"],
    ["Cold feet on them","Keep your cold feet to yourself"],
    ["Phone off completely","Phone can wait but it's there"],
    ["Their scent is home","Their touch is home"],
    ["Fall asleep to their heartbeat","Fall asleep to their breath on you"],
    ["The warmth of their body","The weight of them beside you"],
    ["One long deep kiss","A hundred small kisses"],
    ["One endless embrace","Many quick kisses and hugs"],
    ["Close with no agenda","Present with pure intention"],
    ["Quiet love","Love that fills the room"],
    ["Tenderness over intensity","Intensity over tenderness"],
    ["Laughter is always part of it","Complete seriousness always"],
    ["The safety of the known","The electricity of the new"],
    ["Comfort is the greatest desire","Mystery is the greatest desire"],
  ],
};

// ═══════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════

const CAT_KEYS = Object.keys(QUESTIONS);
const FLIRTY_CAT = "💋 Flirty";

function makeRoomCode() {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

function createUsed() {
  const u = {};
  CAT_KEYS.forEach(k => (u[k] = new Set()));
  return u;
}

function pickQuestion(cat, usedSet) {
  const pool = QUESTIONS[cat];
  const avail = pool.filter((_, i) => !usedSet.has(i));
  const src = avail.length > 0 ? avail : pool;
  if (avail.length === 0) usedSet.clear();
  const q = src[Math.floor(Math.random() * src.length)];
  usedSet.add(pool.indexOf(q));
  return q;
}

// ═══════════════════════════════════════════════════
// CSS IN JS
// ═══════════════════════════════════════════════════

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0d0810;
    color: #f0e6d3;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
  }

  .app {
    min-height: 100vh;
    background: radial-gradient(ellipse at 20% 0%, #2d0a1f 0%, transparent 50%),
                radial-gradient(ellipse at 80% 100%, #0a0d2d 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, #1a0820 0%, transparent 80%),
                #0d0810;
    position: relative;
    overflow-x: hidden;
  }

  .petal {
    position: fixed;
    pointer-events: none;
    font-size: 1.1rem;
    animation: fall linear infinite;
    opacity: 0;
    z-index: 0;
  }
  @keyframes fall {
    0%   { transform: translateY(-60px) rotate(0deg);   opacity: 0; }
    10%  { opacity: 0.6; }
    90%  { opacity: 0.3; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }

  .screen {
    position: relative;
    z-index: 1;
    max-width: 520px;
    margin: 0 auto;
    padding: 2rem 1.25rem 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* TYPOGRAPHY */
  .serif { font-family: 'Cormorant Garamond', serif; }
  .display {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 8vw, 3.8rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 1.05;
    background: linear-gradient(135deg, #f7c5d5 0%, #e8a4c0 40%, #c77dff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sub {
    font-size: 0.82rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8a7a8f;
    font-weight: 300;
  }

  /* CARDS */
  .glass {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    backdrop-filter: blur(20px);
  }
  .glass-warm {
    background: rgba(247,197,213,0.05);
    border: 1px solid rgba(247,197,213,0.12);
    border-radius: 20px;
    backdrop-filter: blur(20px);
  }

  /* BUTTONS */
  .btn-primary {
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    background: linear-gradient(135deg, #c77dff, #e8a4c0, #f7c5d5);
    color: #1a0820;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(199,125,255,0.3); }
  .btn-primary:active { transform: translateY(0); }

  .btn-outline {
    width: 100%;
    padding: 0.9rem 1.5rem;
    border-radius: 50px;
    border: 1px solid rgba(247,197,213,0.3);
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: #c9a8b8;
    background: transparent;
    transition: all 0.3s;
    letter-spacing: 0.04em;
  }
  .btn-outline:hover { border-color: rgba(247,197,213,0.6); color: #f0d8e4; }

  .btn-ghost {
    background: none;
    border: none;
    color: #6b5b6f;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    padding: 0.4rem 0;
    transition: color 0.2s;
    letter-spacing: 0.03em;
  }
  .btn-ghost:hover { color: #c9a8b8; }

  /* INPUTS */
  .inp {
    width: 100%;
    padding: 0.85rem 1.1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 12px;
    color: #f0e6d3;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .inp:focus { border-color: rgba(247,197,213,0.35); }
  .inp::placeholder { color: #4a3f50; }

  /* CATEGORY GRID */
  .cat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.65rem;
  }
  .cat-btn {
    padding: 1.1rem 0.9rem;
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    cursor: pointer;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }
  .cat-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(199,125,255,0.08), rgba(247,197,213,0.05));
    opacity: 0;
    transition: opacity 0.25s;
  }
  .cat-btn:hover::before { opacity: 1; }
  .cat-btn:hover { border-color: rgba(247,197,213,0.2); transform: translateY(-2px); }
  .cat-btn.flirty {
    background: rgba(220,38,90,0.06);
    border-color: rgba(220,38,90,0.15);
  }
  .cat-btn.flirty:hover { border-color: rgba(220,38,90,0.3); }

  /* DIVIDER */
  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #3d3040;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.06);
  }

  /* GAME OPTION CARDS */
  .opt-card {
    flex: 1;
    padding: 1.3rem 0.85rem;
    background: rgba(255,255,255,0.04);
    border: 2px solid rgba(255,255,255,0.07);
    border-radius: 18px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    text-align: center;
    transition: all 0.25s;
    min-height: 96px;
    position: relative;
  }
  .opt-card:hover { border-color: rgba(247,197,213,0.25); background: rgba(247,197,213,0.05); }
  .opt-card.selected {
    background: rgba(199,125,255,0.12);
    border-color: #c77dff;
    transform: scale(1.03);
  }
  .opt-card.selected-flirty {
    background: rgba(220,38,90,0.12);
    border-color: #f43f5e;
    transform: scale(1.03);
  }
  .opt-card.faded { opacity: 0.3; }

  /* PARTNER BTNS */
  .p-btn {
    flex: 1;
    padding: 0.7rem 0.5rem;
    background: rgba(255,255,255,0.03);
    border: 1.5px solid rgba(199,125,255,0.15);
    border-radius: 12px;
    cursor: pointer;
    color: #b8a0c8;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 400;
    transition: all 0.2s;
  }
  .p-btn:hover { border-color: rgba(199,125,255,0.35); color: #d4c0e4; }
  .p-btn.p-sel {
    background: rgba(199,125,255,0.15);
    border-color: #c77dff;
    color: #e0c8f8;
    transform: scale(1.03);
  }
  .p-btn.p-sel-flirty {
    background: rgba(244,63,94,0.15);
    border-color: #f43f5e;
    color: #fda4af;
    transform: scale(1.03);
  }

  /* REVEAL BANNER */
  .reveal-match {
    border-radius: 14px;
    padding: 1rem;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 400;
    font-style: italic;
    background: linear-gradient(135deg, rgba(199,125,255,0.2), rgba(247,197,213,0.15));
    border: 1px solid rgba(199,125,255,0.25);
    color: #e8c8f8;
  }
  .reveal-diff {
    border-radius: 14px;
    padding: 1rem;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-style: italic;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    color: #8a7a8f;
  }

  /* SCORE BAR */
  .score-bar-bg {
    height: 4px;
    background: rgba(255,255,255,0.06);
    border-radius: 2px;
    overflow: hidden;
  }
  .score-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, #c77dff, #f7c5d5);
    transition: width 0.6s ease;
  }

  /* ROOM CODE */
  .room-code {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-align: center;
    color: #e8a4c0;
    padding: 1.5rem;
    background: rgba(247,197,213,0.06);
    border: 1px dashed rgba(247,197,213,0.25);
    border-radius: 18px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .room-code:hover { background: rgba(247,197,213,0.09); }

  /* RESULT */
  .result-pct {
    font-family: 'Cormorant Garamond', serif;
    font-size: 5rem;
    font-weight: 300;
    line-height: 1;
    background: linear-gradient(135deg, #f7c5d5, #c77dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ADVICE */
  .advice-item {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.85rem;
    background: rgba(255,255,255,0.02);
    border-radius: 12px;
    border-left: 2px solid rgba(199,125,255,0.3);
  }

  /* CAT BAR */
  .cat-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.5s ease forwards; }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .pulse { animation: pulse 2s ease infinite; }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }
  .heartbeat { animation: heartbeat 1.5s ease infinite; }

  /* HISTORY ITEM */
  .hist-item {
    padding: 0.8rem 1rem;
    background: rgba(255,255,255,0.02);
    border-radius: 12px;
    border-left: 2px solid rgba(247,197,213,0.2);
    margin-bottom: 0.5rem;
  }
  .hist-item.matched { border-left-color: rgba(199,125,255,0.5); }

  /* BADGE */
  .badge {
    display: inline-block;
    padding: 0.2rem 0.7rem;
    border-radius: 20px;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .badge-adult { background: rgba(220,38,90,0.2); color: #fda4af; border: 1px solid rgba(220,38,90,0.3); }
  .badge-room  { background: rgba(199,125,255,0.12); color: #c77dff; border: 1px solid rgba(199,125,255,0.2); }

  /* WAITING */
  .waiting-dots::after {
    content: '...';
    animation: dots 1.5s steps(4, end) infinite;
  }
  @keyframes dots {
    0%, 20%  { content: '.'; }
    40%      { content: '..'; }
    60%,100% { content: '...'; }
  }

  /* SCROLL */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

  /* COPIED TOAST */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.6rem 1.4rem;
    background: rgba(199,125,255,0.9);
    color: #1a0820;
    border-radius: 50px;
    font-size: 0.82rem;
    font-weight: 500;
    z-index: 999;
    animation: toastIn 0.3s ease;
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
`;

// ═══════════════════════════════════════════════════
// PETALS
// ═══════════════════════════════════════════════════

function Petals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 8.5) % 90}%`,
    delay: `${(i * 1.3) % 9}s`,
    duration: `${10 + (i * 2.7) % 8}s`,
    symbol: ["🌸","✨","💫","🌺","💕","⭐"][i % 6],
  }));
  return (
    <>
      {petals.map(p => (
        <div key={p.id} className="petal" style={{
          left: p.left,
          top: "-60px",
          animationDelay: p.delay,
          animationDuration: p.duration,
        }}>{p.symbol}</div>
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════════
// ADVICE ENGINE
// ═══════════════════════════════════════════════════

function buildAdvice(history) {
  if (!history.length) return null;
  const total = history.length;
  const matches = history.filter(h => h.isMatch).length;
  const pct = Math.round((matches / total) * 100);

  const byCat = {};
  history.forEach(h => {
    if (!byCat[h.cat]) byCat[h.cat] = { m: 0, t: 0 };
    byCat[h.cat].t++;
    if (h.isMatch) byCat[h.cat].m++;
  });

  const sorted = Object.entries(byCat).sort((a, b) => (b[1].m / b[1].t) - (a[1].m / a[1].t));
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];
  const diffs = history.filter(h => !h.isMatch);
  const sampleDiff = diffs[Math.floor(Math.random() * Math.min(diffs.length, 5))];

  let tier, emoji, headline, poem, tips;

  if (pct >= 85) {
    tier = "soulmates"; emoji = "💕";
    headline = "Two hearts, one language";
    poem = "You finish each other's sentences before they begin.";
    tips = [
      `Your strongest connection is in ${best?.[0]} — plan something meaningful around that.`,
      "Even the most aligned couples need novelty. Try one thing neither of you has ever done before.",
      "Write each other a letter about the first moment you knew. Don't send it — read it together.",
      "Your differences are rare and precious — celebrate them instead of wanting to match on everything.",
    ];
  } else if (pct >= 65) {
    tier = "deeply connected"; emoji = "🌸";
    headline = "Beautifully woven together";
    poem = "You agree on the things that matter and grow through the rest.";
    tips = [
      `${best?.[0]} is your richest common ground — return to it often.`,
      worst ? `In ${worst?.[0]}, your answers diverged most. Spend an evening exploring why — with curiosity, not debate.` : null,
      sampleDiff ? `On "${sampleDiff.q[0]} or ${sampleDiff.q[1]}" — you chose differently. Try their way once. Really try it.` : null,
      "Create a shared ritual — something small and yours alone — that you do every single week.",
    ].filter(Boolean);
  } else if (pct >= 40) {
    tier = "wonderfully different"; emoji = "✨";
    headline = "Opposites who light each other up";
    poem = "Your differences aren't distance. They're the electricity between you.";
    tips = [
      "Make a list of what the other person has shown you about life that you'd never have found alone.",
      worst ? `${worst?.[0]} holds your most interesting differences. Have a long slow conversation about them.` : null,
      sampleDiff ? `"${sampleDiff.q[0]} or ${sampleDiff.q[1]}" — you chose different sides. Let each of you speak for two minutes about why. Then say: I never saw it that way.` : null,
      "Plan one day where you enter completely into the other person's world. No judgment, just presence.",
    ].filter(Boolean);
  } else {
    tier = "two beautiful worlds"; emoji = "🌙";
    headline = "Two worlds discovering each other";
    poem = "You chose each other despite everything. That's the rarest kind of love.";
    tips = [
      "The fact that you're here, playing this together, says everything about your love.",
      "Write down three things about how they're different from you that you secretly love.",
      `${best?.[0]} is where your hearts speak the same language — live there more.`,
      "The lowest match scores make for the most beautiful conversations. Dig into them.",
    ];
  }

  return { pct, matches, total, tier, emoji, headline, poem, tips, byCat, best, worst };
}

// ═══════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════

export default function App() {
  const [screen, setScreen] = useState("home"); // home | setup | room | ageGate | game | result
  const [role, setRole] = useState(null); // creator | joiner | solo
  const [roomId, setRoomId] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const [myName, setMyName] = useState("");
  const [partnerName, setPartnerName] = useState("Partner");
  const [ageOK, setAgeOK] = useState(false);
  const [pendingCat, setPendingCat] = useState(null);
  const [cat, setCat] = useState(null);
  const [used] = useState(createUsed);
  const [q, setQ] = useState(null);
  const [myAns, setMyAns] = useState(null);
  const [partnerAns, setPartnerAns] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ m: 0, t: 0 });
  const [history, setHistory] = useState([]);
  const [catStats, setCatStats] = useState({});
  const [animOut, setAnimOut] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [toast, setToast] = useState(null);
  const roundRef = useRef(0);
  const pollRef = useRef(null);

  const isLDR = role === "creator" || role === "joiner";
  const isFlirty = cat === FLIRTY_CAT;
  const totalQs = CAT_KEYS.reduce((s, k) => s + QUESTIONS[k].length, 0);

  // Show toast
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // Storage helpers
  const saveRoom = useCallback(async (data) => {
    try { await window.storage.set(`ldr:${roomId}`, JSON.stringify(data), true); } catch {}
  }, [roomId]);

  const loadRoom = useCallback(async () => {
    try {
      const r = await window.storage.get(`ldr:${roomId}`, true);
      return r ? JSON.parse(r.value) : null;
    } catch { return null; }
  }, [roomId]);

  // Poll for partner answer
  useEffect(() => {
    if (!isLDR || !waiting || !roomId) return;
    pollRef.current = setInterval(async () => {
      const room = await loadRoom();
      if (!room) return;
      const rnd = roundRef.current;
      const ans = role === "creator" ? room[`j_${rnd}`] : room[`c_${rnd}`];
      if (ans) {
        setPartnerAns(ans);
        setWaiting(false);
        clearInterval(pollRef.current);
      }
    }, 2500);
    return () => clearInterval(pollRef.current);
  }, [waiting, isLDR, roomId, role, loadRoom]);

  // Auto reveal
  useEffect(() => {
    if (myAns && partnerAns && !revealed) setRevealed(true);
  }, [myAns, partnerAns, revealed]);

  // Next question
  const nextQ = useCallback((category) => {
    const question = pickQuestion(category, used[category]);
    setQ(question);
    setMyAns(null);
    setPartnerAns(null);
    setRevealed(false);
    setWaiting(false);
    roundRef.current += 1;
  }, [used]);

  // Start category
  const startCat = (c) => {
    if (c === FLIRTY_CAT && !ageOK) { setPendingCat(c); setScreen("ageGate"); return; }
    setCat(c);
    nextQ(c);
    setScreen("game");
  };

  // Confirm age
  const confirmAge = () => {
    setAgeOK(true);
    setCat(pendingCat);
    nextQ(pendingCat);
    setPendingCat(null);
    setScreen("game");
  };

  // My answer
  const handleAns = async (option) => {
    if (revealed || myAns) return;
    setMyAns(option);
    if (isLDR) {
      setSyncing(true);
      const room = (await loadRoom()) || {};
      const rnd = roundRef.current;
      room[role === "creator" ? `c_${rnd}` : `j_${rnd}`] = option;
      room[`q_${rnd}`] = q;
      await saveRoom(room);
      setSyncing(false);
      setWaiting(true);
    }
  };

  // Next round
  const handleNext = () => {
    if (!revealed) return;
    const isMatch = myAns === partnerAns;
    setScore(s => ({ m: s.m + (isMatch ? 1 : 0), t: s.t + 1 }));
    setHistory(h => [...h, { q, myAns, partnerAns, isMatch, cat }]);
    setCatStats(p => {
      const d = p[cat] || { m: 0, t: 0 };
      return { ...p, [cat]: { m: d.m + (isMatch ? 1 : 0), t: d.t + 1 } };
    });
    setAnimOut(true);
    setTimeout(() => { nextQ(cat); setAnimOut(false); }, 280);
  };

  const goHome = () => {
    clearInterval(pollRef.current);
    setScreen("home"); setCat(null); setMyAns(null);
    setPartnerAns(null); setQ(null); setRevealed(false); setWaiting(false);
  };

  const advice = screen === "result" ? buildAdvice(history) : null;
  const matchPct = score.t > 0 ? Math.round((score.m / score.t) * 100) : 0;

  // ─── AGE GATE ──────────────────────────────────────────────
  if (screen === "ageGate") return (
    <div className="app">
      <style>{css}</style>
      <Petals />
      <div className="screen" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
        <div style={{ fontSize: "3.5rem" }}>💋</div>
        <div>
          <div className="display" style={{ fontSize: "2.2rem" }}>Flirty Mode</div>
          <p className="sub" style={{ marginTop: "0.5rem" }}>for grown-ups only</p>
        </div>
        <div className="glass" style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}>
          <p style={{ color: "#c9a8b8", fontSize: "0.9rem", lineHeight: 1.8 }}>
            This category contains <strong style={{ color: "#f7c5d5" }}>intimate and adult questions</strong> made for couples 18 and over.
          </p>
        </div>
        <p style={{ color: "#5a4a60", fontSize: "0.82rem" }}>Please confirm you and your partner are both 18+ to continue.</p>
        <button className="btn-primary" onClick={confirmAge}>We're both 18+ — Let's go 🔓</button>
        <button className="btn-ghost" onClick={() => setScreen("home")}>Take me back</button>
      </div>
    </div>
  );

  // ─── SETUP ─────────────────────────────────────────────────
  if (screen === "setup") return (
    <div className="app">
      <style>{css}</style>
      <Petals />
      <div className="screen" style={{ gap: "1.25rem", paddingTop: "3rem" }}>
        <button className="btn-ghost" onClick={() => setScreen("home")} style={{ alignSelf: "flex-start" }}>← back</button>
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{role === "creator" ? "🏠" : "🔗"}</div>
          <div className="display" style={{ fontSize: "2rem" }}>{role === "creator" ? "Create a Room" : "Join a Room"}</div>
          <p className="sub" style={{ marginTop: "0.4rem" }}>
            {role === "creator" ? "Your partner will join with your code" : "Enter the code your partner shared"}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.78rem", color: "#6b5b6f", letterSpacing: "0.1em", textTransform: "uppercase" }}>Your name</label>
          <input className="inp" placeholder={role === "creator" ? "e.g. Kris" : "e.g. Alex"} value={myName} onChange={e => setMyName(e.target.value)} />
        </div>

        {role === "joiner" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.78rem", color: "#6b5b6f", letterSpacing: "0.1em", textTransform: "uppercase" }}>Room code</label>
            <input className="inp" placeholder="A1B2C" maxLength={5} value={roomInput}
              style={{ textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "1.3rem", textAlign: "center" }}
              onChange={e => setRoomInput(e.target.value.toUpperCase())} />
          </div>
        )}

        <button className="btn-primary" style={{ marginTop: "0.5rem" }} onClick={async () => {
          const name = myName.trim() || (role === "creator" ? "You" : "Partner");
          if (role === "creator") {
            const id = makeRoomCode();
            setRoomId(id);
            setMyName(name);
            try { await window.storage.set(`ldr:${id}`, JSON.stringify({ creator: name, ts: Date.now() }), true); } catch {}
            setScreen("room");
          } else {
            const id = roomInput.trim();
            if (!id) return;
            setRoomId(id);
            setMyName(name);
            try {
              const r = await window.storage.get(`ldr:${id}`, true);
              if (r) { const d = JSON.parse(r.value); setPartnerName(d.creator || "Partner"); }
            } catch {}
            setScreen("home");
          }
        }}>
          {role === "creator" ? "Create Room →" : "Join Room →"}
        </button>
      </div>
    </div>
  );

  // ─── ROOM CODE ─────────────────────────────────────────────
  if (screen === "room") return (
    <div className="app">
      <style>{css}</style>
      <Petals />
      <div className="screen" style={{ justifyContent: "center", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
        <div>
          <div className="display" style={{ fontSize: "2rem" }}>Share this code</div>
          <p className="sub" style={{ marginTop: "0.4rem" }}>with your partner ✦</p>
        </div>
        <div className="room-code" onClick={() => {
          try { navigator.clipboard.writeText(roomId); } catch {}
          showToast("Code copied!");
        }}>{roomId}</div>
        <p style={{ color: "#4a3f50", fontSize: "0.8rem" }}>Tap the code to copy it</p>
        <button className="btn-primary" onClick={() => setScreen("home")}>Continue →</button>
        <button className="btn-ghost" onClick={() => { setRole("solo"); setScreen("home"); }}>Skip — play solo instead</button>
        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );

  // ─── RESULT ────────────────────────────────────────────────
  if (screen === "result") return (
    <div className="app">
      <style>{css}</style>
      <Petals />
      <div className="screen" style={{ gap: "1.25rem" }}>
        <button className="btn-ghost" onClick={goHome} style={{ alignSelf: "flex-start" }}>← Home</button>

        <div className="glass-warm fade-up" style={{ padding: "1.75rem", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{advice?.emoji}</div>
          <div className="display" style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>{advice?.headline}</div>
          <p style={{ color: "#8a7a8f", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "1.25rem" }}>{advice?.poem}</p>
          <div className="result-pct">{advice?.pct}%</div>
          <p className="sub" style={{ marginTop: "0.25rem" }}>compatibility</p>
          <p style={{ color: "#5a4a60", fontSize: "0.8rem", marginTop: "0.4rem" }}>{advice?.matches} matches out of {advice?.total} questions</p>
        </div>

        <div className="glass fade-up" style={{ padding: "1.25rem", animationDelay: "0.1s" }}>
          <p style={{ fontSize: "0.72rem", color: "#6b5b6f", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.9rem" }}>For the two of you ✦</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {advice?.tips.map((tip, i) => (
              <div key={i} className="advice-item">
                <span style={{ color: "#c77dff", flexShrink: 0, fontSize: "0.9rem", marginTop: "0.1rem" }}>✦</span>
                <span style={{ color: "#c9a8b8", fontSize: "0.88rem", lineHeight: 1.65 }}
                  dangerouslySetInnerHTML={{ __html: tip.replace(/(\*\*|__)(.+?)(\*\*|__)/g, '<em style="color:#e8c8f8;font-style:italic">$2</em>') }} />
              </div>
            ))}
          </div>
        </div>

        {Object.keys(advice?.byCat || {}).length > 0 && (
          <div className="glass fade-up" style={{ padding: "1.25rem", animationDelay: "0.2s" }}>
            <p style={{ fontSize: "0.72rem", color: "#6b5b6f", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.9rem" }}>By category ✦</p>
            {Object.entries(advice.byCat).map(([c, d]) => {
              const p = Math.round((d.m / d.t) * 100);
              return (
                <div key={c} className="cat-row">
                  <span style={{ fontSize: "0.83rem", color: "#9a8a9f", flex: 1 }}>{c}</span>
                  <span style={{ fontSize: "0.75rem", color: "#5a4a60", minWidth: 36 }}>{d.m}/{d.t}</span>
                  <div className="score-bar-bg" style={{ width: 60 }}>
                    <div className="score-bar-fill" style={{ width: `${p}%` }} />
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#e8a4c0", minWidth: 34, textAlign: "right" }}>{p}%</span>
                </div>
              );
            })}
          </div>
        )}

        <div className="glass fade-up" style={{ padding: "1.25rem", animationDelay: "0.3s" }}>
          <p style={{ fontSize: "0.72rem", color: "#6b5b6f", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.9rem" }}>Round by round ✦</p>
          {[...history].reverse().map((h, i) => (
            <div key={i} className={`hist-item ${h.isMatch ? "matched" : ""}`}>
              <p style={{ fontSize: "0.87rem", color: "#d4c0e4", marginBottom: "0.3rem" }}>{h.q[0]} <span style={{ color: "#3d3040" }}>·</span> {h.q[1]}</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.78rem" }}>
                <span style={{ color: "#8a7a8f" }}>{myName || "You"}: <span style={{ color: "#e8a4c0" }}>{h.myAns}</span></span>
                <span style={{ color: "#8a7a8f" }}>{isLDR ? partnerName : "Partner"}: <span style={{ color: "#b8a0c8" }}>{h.partnerAns}</span></span>
                <span style={{ color: h.isMatch ? "#c77dff" : "#4a3f50" }}>{h.isMatch ? "💕 matched" : "· different"}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={goHome} style={{ marginTop: "0.5rem" }}>Play More ✦</button>
      </div>
    </div>
  );

  // ─── GAME ──────────────────────────────────────────────────
  if (screen === "game") {
    const accent = isFlirty ? "#f43f5e" : "#c77dff";
    const accentRgb = isFlirty ? "244,63,94" : "199,125,255";
    return (
      <div className="app" style={isFlirty ? {
        background: `radial-gradient(ellipse at 20% 0%, #2d050f 0%, transparent 50%),
                     radial-gradient(ellipse at 80% 100%, #1a0510 0%, transparent 50%),
                     #0d0508`
      } : {}}>
        <style>{css}</style>
        <Petals />
        <div className="screen" style={{ gap: "0.9rem" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <button className="btn-ghost" onClick={goHome}>← home</button>
            <div style={{ flex: 1, textAlign: "center" }}>
              <span style={{ fontSize: "0.8rem", color: isFlirty ? "#fda4af" : "#b8a0c8",
                background: `rgba(${accentRgb},0.1)`, padding: "0.25rem 0.75rem", borderRadius: 20,
                border: `1px solid rgba(${accentRgb},0.2)` }}>{cat}</span>
            </div>
            <span style={{ fontSize: "0.82rem", color: "#8a7a8f", whiteSpace: "nowrap" }}>{score.m}/{score.t}</span>
          </div>

          {/* Score bar */}
          {score.t > 0 && (
            <div className="score-bar-bg">
              <div className="score-bar-fill" style={{ width: `${matchPct}%`, background: isFlirty ? "linear-gradient(90deg, #f43f5e, #fda4af)" : undefined }} />
            </div>
          )}

          {/* LDR status */}
          {isLDR && (
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#4a3f50" }}>
              🔗 Room {roomId} · {myName}{waiting ? <span className="waiting-dots"> — waiting for {partnerName}</span> : syncing ? " — syncing..." : ""}
            </p>
          )}

          {/* Question card */}
          <div className="glass-warm fade-up" style={{ padding: "1.5rem 1.1rem", opacity: animOut ? 0 : 1, transform: animOut ? "scale(0.97)" : "scale(1)", transition: "all 0.28s ease" }}>
            {/* VS options */}
            <div style={{ display: "flex", gap: "0.75rem", position: "relative" }}>
              {[0, 1].map(idx => (
                <div key={idx}
                  className={`opt-card ${myAns === q?.[idx] ? (isFlirty ? "selected-flirty" : "selected") : ""} ${revealed && myAns !== q?.[idx] ? "faded" : ""}`}
                  onClick={() => handleAns(q?.[idx])}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 400, color: "#f0e6d3", lineHeight: 1.35 }}>{q?.[idx]}</p>
                  {revealed && myAns === q?.[idx] && <span style={{ fontSize: "0.65rem", color: accent, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{myName || "you"}</span>}
                  {revealed && partnerAns === q?.[idx] && <span style={{ fontSize: "0.65rem", color: "#9a8a9f", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{isLDR ? partnerName : "partner"}</span>}
                </div>
              ))}
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", fontSize: "0.7rem", fontWeight: 600, color: "#3d3040", background: "#0d0810", padding: "0.2rem 0.45rem", borderRadius: 6, letterSpacing: "0.1em", zIndex: 2 }}>OR</div>
            </div>

            {/* Partner pick (solo only) */}
            {!isLDR && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                <p style={{ fontSize: "0.72rem", color: "#4a3f50", textAlign: "center", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Partner's answer</p>
                <div style={{ display: "flex", gap: "0.65rem" }}>
                  {[0, 1].map(idx => (
                    <button key={idx}
                      className={`p-btn ${partnerAns === q?.[idx] ? (isFlirty ? "p-sel-flirty" : "p-sel") : ""}`}
                      onClick={() => !revealed && setPartnerAns(q?.[idx])}>
                      {q?.[idx]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Reveal */}
            {revealed && (
              <div className={myAns === partnerAns ? "reveal-match" : "reveal-diff"}>
                {myAns === partnerAns
                  ? (isFlirty ? "🔥 You desire the same things..." : "💕 Your hearts chose the same")
                  : "Two different answers — a conversation waiting to happen"}
              </div>
            )}

            {/* Next button */}
            {revealed && (
              <button className="btn-primary" onClick={handleNext}
                style={isFlirty ? { background: "linear-gradient(135deg, #f43f5e, #c77dff, #f43f5e)" } : {}}>
                Next Question →
              </button>
            )}

            {/* Hints */}
            {!myAns && !waiting && <p style={{ textAlign: "center", color: "#3d3040", fontSize: "0.78rem" }}>Tap your answer above</p>}
            {myAns && !isLDR && !partnerAns && !revealed && <p style={{ textAlign: "center", color: "#3d3040", fontSize: "0.78rem" }}>Now pick your partner's answer</p>}
          </div>

          {/* Seen counter */}
          <p style={{ textAlign: "center", color: "#2d2030", fontSize: "0.68rem" }}>
            {used[cat]?.size ?? 0} of {QUESTIONS[cat]?.length} questions seen · no repeats this session
          </p>

          {/* See results CTA */}
          {score.t >= 5 && (
            <button className="btn-outline" onClick={() => setScreen("result")}>
              See your results & advice ✦
            </button>
          )}
        </div>
      </div>
    );
  }

  // ─── HOME ──────────────────────────────────────────────────
  return (
    <div className="app">
      <style>{css}</style>
      <Petals />
      <div className="screen" style={{ gap: "1.25rem" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", padding: "1.5rem 0 0.5rem" }}>
          <div className="heartbeat" style={{ fontSize: "2.8rem", marginBottom: "0.75rem" }}>💕</div>
          <h1 className="display">This or That</h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#6b5b6f", fontSize: "1.05rem", marginTop: "0.4rem" }}>
            for long-distance lovers
          </p>

          {isLDR && (
            <div style={{ marginTop: "0.85rem" }}>
              <span className="badge badge-room">Room: {roomId}</span>
              <span style={{ fontSize: "0.8rem", color: "#5a4a60", marginLeft: "0.5rem" }}>{myName} {partnerName !== "Partner" ? `& ${partnerName}` : ""}</span>
            </div>
          )}

          {score.t > 0 && (
            <div style={{ marginTop: "0.75rem", padding: "0.5rem 1rem", display: "inline-block", background: "rgba(199,125,255,0.08)", border: "1px solid rgba(199,125,255,0.15)", borderRadius: 20 }}>
              <span style={{ fontSize: "0.82rem", color: "#b8a0c8" }}>Session: {score.m}/{score.t} matched · </span>
              <span style={{ fontSize: "0.82rem", color: "#e8a4c0" }}>{matchPct}% together</span>
            </div>
          )}
        </div>

        {/* LDR Room setup */}
        {!isLDR && (
          <div className="glass-warm" style={{ padding: "1.1rem 1.25rem" }}>
            <p style={{ fontSize: "0.72rem", color: "#6b5b6f", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.85rem", textAlign: "center" }}>Play together from anywhere ✦</p>
            <div style={{ display: "flex", gap: "0.65rem" }}>
              <button className="btn-primary" style={{ fontSize: "0.82rem", padding: "0.75rem 0.5rem" }}
                onClick={() => { setRole("creator"); setScreen("setup"); }}>
                🏠 Create a Room
              </button>
              <button className="btn-outline" style={{ fontSize: "0.82rem", padding: "0.75rem 0.5rem" }}
                onClick={() => { setRole("joiner"); setScreen("setup"); }}>
                🔗 Join a Room
              </button>
            </div>
            <div className="divider" style={{ margin: "0.85rem 0" }}>or</div>
            <button className="btn-ghost" style={{ width: "100%", textAlign: "center", fontSize: "0.82rem" }}
              onClick={() => { setRole("solo"); }}>
              Try it solo first ✦
            </button>
          </div>
        )}

        {/* Category grid */}
        <div>
          <p style={{ fontSize: "0.72rem", color: "#4a3f50", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: "0.75rem" }}>Choose a category</p>
          <div className="cat-grid">
            {CAT_KEYS.map(k => {
              const isAdult = k === FLIRTY_CAT;
              const st = catStats[k];
              const seenCnt = used[k]?.size ?? 0;
              const totalCnt = QUESTIONS[k].length;
              return (
                <button key={k} className={`cat-btn ${isAdult ? "flirty" : ""}`} onClick={() => startCat(k)}>
                  <span style={{ fontSize: "1.4rem", marginBottom: "0.15rem" }}>{k.split(" ")[0]}</span>
                  <span style={{ fontSize: "0.82rem", color: "#d4c0e4", fontWeight: 500 }}>{k.split(" ").slice(1).join(" ")}</span>
                  {isAdult && <span className="badge badge-adult" style={{ marginTop: "0.2rem" }}>18+</span>}
                  {st && <span style={{ fontSize: "0.7rem", color: "#8a7a8f" }}>{st.m}/{st.t} matched</span>}
                  <span style={{ fontSize: "0.65rem", color: "#3d3040" }}>{seenCnt}/{totalCnt} seen</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* See results */}
        {history.length > 0 && (
          <button className="btn-outline" onClick={() => setScreen("result")}>
            📊 See results & advice ({history.length} rounds)
          </button>
        )}

        <p style={{ textAlign: "center", color: "#2d2030", fontSize: "0.72rem" }}>
          ✦ {totalQs}+ questions · no repeats per session
        </p>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
