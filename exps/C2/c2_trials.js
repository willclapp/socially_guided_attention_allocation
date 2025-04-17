const stims_header = ["﻿id", "sentence", "PF01", "PF02", "PM01", "PM02"]

const trials = {
	BEL_0103_AMAZING: {
		code: "BEL_0103_AMAZING",
		sentence: "These brown mushrooms taste amazing.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0104_DANGEROUS: {
		code: "BEL_0104_DANGEROUS",
		sentence: "The train is fast and very dangerous.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0111_ALIVE: {
		code: "BEL_0111_ALIVE",
		sentence: "The weak plant is barely alive.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0114_SALT: {
		code: "BEL_0114_SALT",
		sentence: "The eggs need more salt.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0115_HOME: {
		code: "BEL_0115_HOME",
		sentence: "The old men missed home.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0120_TOYS: {
		code: "BEL_0120_TOYS",
		sentence: "His sister plays with beautiful toys.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0124_WEEKEND: {
		code: "BEL_0124_WEEKEND",
		sentence: "The bar sells beer on the weekend.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0201_NDPARENTS: {
		code: "BEL_0201_NDPARENTS",
		sentence: "The twins live with their grandparents.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0204_away: {
		code: "BEL_0204_away",
		sentence: "That bright light seems far away.",
		PF01: "2",
		PF02: "2",
		PM01: "1",
		PM02: "1"
	},
	BEL_0214_STREET: {
		code: "BEL_0214_STREET",
		sentence: "The lady walked down the street.",
		PF01: "2",
		PF02: "1",
		PM01: "1",
		PM02: "1"
	},
	BEL_0216_CHILD: {
		code: "BEL_0216_CHILD",
		sentence: "The scary monkey chased the child.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0218_FRESH: {
		code: "BEL_0218_FRESH",
		sentence: "The fruit and salad taste fresh.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0220_CRUEL: {
		code: "BEL_0220_CRUEL",
		sentence: "Her grandparents are serious and sometimes cruel.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0317_WINDOW: {
		code: "BEL_0317_WINDOW",
		sentence: "The baseball broke a glass window.",
		PF01: "1",
		PF02: "2",
		PM01: "2",
		PM02: "1"
	},
	BEL_0322_MORNING: {
		code: "BEL_0322_MORNING",
		sentence: "The bird sings songs in the morning.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0402_DAUGHTER: {
		code: "BEL_0402_DAUGHTER",
		sentence: "The father hugs his sad daughter.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0406_PARENTS: {
		code: "BEL_0406_PARENTS",
		sentence: "The rude joke upset my parents.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0414_WINDOW: {
		code: "BEL_0414_WINDOW",
		sentence: "The tomato plant grew by the window.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0417_HOME: {
		code: "BEL_0417_HOME",
		sentence: "The worried adult ran home.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0418_WEEKEND: {
		code: "BEL_0418_WEEKEND",
		sentence: "The newspaper comes every weekend.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0419_SONGS: {
		code: "BEL_0419_SONGS",
		sentence: "The talented musician knows many songs.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0420_GRASS: {
		code: "BEL_0420_GRASS",
		sentence: "The gray horse eats grass.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0423_WINE: {
		code: "BEL_0423_WINE",
		sentence: "The customer enjoyed the meal and wine.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0605_BABY: {
		code: "BEL_0605_BABY",
		sentence: "The strange animal scared the baby.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0613_FLOOR: {
		code: "BEL_0613_FLOOR",
		sentence: "The fat pig slept on the floor.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0617_BOX: {
		code: "BEL_0617_BOX",
		sentence: "The teenager lifted a heavy box.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0619_WATER: {
		code: "BEL_0619_WATER",
		sentence: "That man swims in the cold water.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0620_FIELD: {
		code: "BEL_0620_FIELD",
		sentence: "The baseball flew across the field.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0715_MORNING: {
		code: "BEL_0715_MORNING",
		sentence: "The news was on tv every morning.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0719_ROOM: {
		code: "BEL_0719_ROOM",
		sentence: "The people sit in the living room.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0720_WATER: {
		code: "BEL_0720_WATER",
		sentence: "The clean beaches have clear water.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0724_NOVEL: {
		code: "BEL_0724_NOVEL",
		sentence: "The professor read an interesting novel.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0804_EDUCATION: {
		code: "BEL_0804_EDUCATION",
		sentence: "The workers need better education.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0806_SCHOOL: {
		code: "BEL_0806_SCHOOL",
		sentence: "Her apartment was near the private school.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0811_CLOSE: {
		code: "BEL_0811_CLOSE",
		sentence: "The wooden door was hard to close.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0812_CARS: {
		code: "BEL_0812_CARS",
		sentence: "They bought three blue cars.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0823_PRIZE: {
		code: "BEL_0823_PRIZE",
		sentence: "That pretty girl won a prize.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0904_WELL: {
		code: "BEL_0904_WELL",
		sentence: "Their famous son danced well.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0908_TRIP: {
		code: "BEL_0908_TRIP",
		sentence: "The best worker went on the trip.",
		PF01: "2",
		PF02: "2",
		PM01: "2",
		PM02: "1"
	},
	BEL_0911_SCIENCE: {
		code: "BEL_0911_SCIENCE",
		sentence: "The class learned about earth science.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0916_PERFORMER: {
		code: "BEL_0916_PERFORMER",
		sentence: "The crowd watched the talented performer.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0920_STORIES: {
		code: "BEL_0920_STORIES",
		sentence: "Some writers tell interesting stories.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_0921_SCARY: {
		code: "BEL_0921_SCARY",
		sentence: "The black bear was big and scary.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1002_COURSES: {
		code: "BEL_1002_COURSES",
		sentence: "These colleges offer many courses.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1008_MILK: {
		code: "BEL_1008_MILK",
		sentence: "The thirsty cat drank milk.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1009_EXAM: {
		code: "BEL_1009_EXAM",
		sentence: "The young student took the final exam.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1011_THIN: {
		code: "BEL_1011_THIN",
		sentence: "The white onion was cut too thin.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1016_ATTENTION: {
		code: "BEL_1016_ATTENTION",
		sentence: "The noisy group attracts attention.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1020_LAKE: {
		code: "BEL_1020_LAKE",
		sentence: "The lonely duck swims in the lake.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1101_MINUTES: {
		code: "BEL_1101_MINUTES",
		sentence: "The meeting starts in twenty minutes.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1102_TEA: {
		code: "BEL_1102_TEA",
		sentence: "The customers hate black tea.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1104_HERE: {
		code: "BEL_1104_HERE",
		sentence: "That brown bird is always here.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1105_HOMEWORK: {
		code: "BEL_1105_HOMEWORK",
		sentence: "The three cousins did their math homework.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1108_ROOM: {
		code: "BEL_1108_ROOM",
		sentence: "The movie started in the small room.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1111_LATE: {
		code: "BEL_1111_LATE",
		sentence: "The birthday card was sent late.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1204_PATIENT: {
		code: "BEL_1204_PATIENT",
		sentence: "The doctor helped the sick patient.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1210_AIR: {
		code: "BEL_1210_AIR",
		sentence: "The strong wind cooled the air.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1211_ANGRY: {
		code: "BEL_1211_ANGRY",
		sentence: "The terrible customer was loud and angry.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1212_UPSET: {
		code: "BEL_1212_UPSET",
		sentence: "Her youngest son was always upset.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1217_HAIR: {
		code: "BEL_1217_HAIR",
		sentence: "She washed and dried her curly hair.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1220_STORY: {
		code: "BEL_1220_STORY",
		sentence: "The happy children laugh at the story.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1222_YEAR: {
		code: "BEL_1222_YEAR",
		sentence: "They took a school picture every year.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1304_PROJECT: {
		code: "BEL_1304_PROJECT",
		sentence: "The boss assigned a difficult project.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1311_CHAIR: {
		code: "BEL_1311_CHAIR",
		sentence: "The kitten sat on the wooden chair.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1313_HOURS: {
		code: "BEL_1313_HOURS",
		sentence: "The party lasted for three hours.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1319_WATER: {
		code: "BEL_1319_WATER",
		sentence: "The pasta boiled in the hot water.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1322_TRUTH: {
		code: "BEL_1322_TRUTH",
		sentence: "A good friend tells the truth.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1410_THIN: {
		code: "BEL_1410_THIN",
		sentence: "Their youngest daughter is tall and thin.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1414_HOME: {
		code: "BEL_1414_HOME",
		sentence: "The foreign lady dreamed of her home.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1416_TODAY: {
		code: "BEL_1416_TODAY",
		sentence: "The little girl was angry today.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1418_TREE: {
		code: "BEL_1418_TREE",
		sentence: "The happy monkey swings from the tree.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1419_SPORTS: {
		code: "BEL_1419_SPORTS",
		sentence: "The club members played sports.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1422_MOVIE: {
		code: "BEL_1422_MOVIE",
		sentence: "The twin sisters watched a movie.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1507_HELP: {
		code: "BEL_1507_HELP",
		sentence: "The unhappy child needs help.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1509_LUNCH: {
		code: "BEL_1509_LUNCH",
		sentence: "The vegetable soup was a healthy lunch.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1519_THEATER: {
		code: "BEL_1519_THEATER",
		sentence: "The actor sang loudly in the theater.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1523_PAN: {
		code: "BEL_1523_PAN",
		sentence: "They roasted salty meat in the pan.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1524_TODAY: {
		code: "BEL_1524_TODAY",
		sentence: "Those little kids are tired today.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1611_SWEET: {
		code: "BEL_1611_SWEET",
		sentence: "The cherry pie was warm and sweet.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1616_BANANAS: {
		code: "BEL_1616_BANANAS",
		sentence: "The monkey wants yellow bananas.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1707_MOUNTAIN: {
		code: "BEL_1707_MOUNTAIN",
		sentence: "The two friends hiked up the mountain.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1710_UGLY: {
		code: "BEL_1710_UGLY",
		sentence: "The blue hat was strange and ugly.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1715_MUSIC: {
		code: "BEL_1715_MUSIC",
		sentence: "The group heard slow music.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1719_GARDEN: {
		code: "BEL_1719_GARDEN",
		sentence: "The vegetables grew in the green garden.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1721_POOL: {
		code: "BEL_1721_POOL",
		sentence: "The hot sun warmed the pool.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1722_SALAD: {
		code: "BEL_1722_SALAD",
		sentence: "The chicken sandwich came with salad.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1723_BROKEN: {
		code: "BEL_1723_BROKEN",
		sentence: "The ten gifts were completely broken.",
		PF01: "1",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1806_MEAT: {
		code: "BEL_1806_MEAT",
		sentence: "The butcher sells italian meat.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1813_HELP: {
		code: "BEL_1813_HELP",
		sentence: "The sick neighbor asks for help.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1818_BOX: {
		code: "BEL_1818_BOX",
		sentence: "The keys disappeared in the orange box.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1907_BED: {
		code: "BEL_1907_BED",
		sentence: "The puppy slept peacefully on the bed.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1911_STORIES: {
		code: "BEL_1911_STORIES",
		sentence: "Their neighbors tell interesting stories.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_1919_NEWSPAPER: {
		code: "BEL_1919_NEWSPAPER",
		sentence: "Our business paid for the daily newspaper.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_2009_QUESTIONS: {
		code: "BEL_2009_QUESTIONS",
		sentence: "The teacher chooses difficult questions.",
		PF01: "2",
		PF02: "1",
		PM01: "2",
		PM02: "1"
	},
	BEL_2010_COLD: {
		code: "BEL_2010_COLD",
		sentence: "That deep lake is quite cold.",
		PF01: "2",
		PF02: "2",
		PM01: "2",
		PM02: "1"
	},
	BEL_2023_SOON: {
		code: "BEL_2023_SOON",
		sentence: "The funny movie will end soon.",
		PF01: "2",
		PF02: "2",
		PM01: "2",
		PM02: "1"
	}
}