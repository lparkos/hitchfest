const guests = [
    {
      firstName: "Varun",
      lastName: "Kapoor",
      guestAllotment: 1
    },
    {
      firstName: "Jeff & Bobbi",
      lastName: "Robotka",
      guestAllotment: 0
    },
    {
      firstName: "Chris & Sandy",
      lastName: "Schiefelbein",
      guestAllotment: 0
    },
    {
      firstName: "Dan & Lyn",
      lastName: "Sandbeck",
      guestAllotment: 0
    },
    {
      firstName: "Justin & Tanya",
      lastName: "Stoeklen/Lovejoy",
      guestAllotment: 0
    },
    {
      firstName: "Tyler and Chelby",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Laura & Bobby",
      lastName: "Appleby",
      guestAllotment: 0
    },
    {
      firstName: "Brittney & Guest",
      lastName: "Kernan",
      guestAllotment: 0
    },
    {
      firstName: "Pat",
      lastName: "Olson",
      guestAllotment: 0
    },
    {
      firstName: "Dan ",
      lastName: "Erhardt",
      guestAllotment: 0
    },
    {
      firstName: "Laura & Nick",
      lastName: "Meyer/Smith",
      guestAllotment: 0
    },
    {
      firstName: "Lindsay",
      lastName: "Brady",
      guestAllotment: 0
    },
    {
      firstName: "Kris",
      lastName: "Anderson",
      guestAllotment: 0
    },
    {
      firstName: "Scott",
      lastName: "Erickson",
      guestAllotment: 0
    },
    {
      firstName: "Sherri & Craig",
      lastName: "Mlejnek",
      guestAllotment: 0
    },
    {
      firstName: "Derek & Angela",
      lastName: "Birdsill/Marinello",
      guestAllotment: 0
    },
    {
      firstName: "Jacky",
      lastName: "Robarge",
      guestAllotment: 0
    },
    {
      firstName: "Ashley & Justin",
      lastName: "Kongshaug",
      guestAllotment: 0
    },
    {
      firstName: "Michelle & Guest",
      lastName: "Robotka",
      guestAllotment: 0
    },
    {
      firstName: "Sue & Ken",
      lastName: "Rosckes/Anderson",
      guestAllotment: 0
    },
    {
      firstName: "Natalie and Brian",
      lastName: "Smith",
      guestAllotment: 0
    },
    {
      firstName: "Lorraine & Lane",
      lastName: "Sandbeck/Moll",
      guestAllotment: 0
    },
    {
      firstName: "Mandy & Ricky",
      lastName: "Aumann",
      guestAllotment: 0
    },
    {
      firstName: "Kim ",
      lastName: "Haugen",
      guestAllotment: 1
    },
    {
      firstName: "Steve & Debbie",
      lastName: "Shepherd/Sandbeck",
      guestAllotment: 0
    },
    {
      firstName: "Stephen & Ashley ",
      lastName: "Kidd",
      guestAllotment: 0
    },
    {
      firstName: "Jennifer & Danielle",
      lastName: "Stubb",
      guestAllotment: 0
    },
    {
      firstName: "Tree & Dana",
      lastName: "Shepherd/Sorensen",
      guestAllotment: 0
    },
    {
      firstName: "Sarah & Jake",
      lastName: "Nesdahl",
      guestAllotment: 0
    },
    {
      firstName: "Stephanie & Jack",
      lastName: "Stubb",
      guestAllotment: 0
    },
    {
      firstName: "Veronica & Phil",
      lastName: "Stubb",
      guestAllotment: 0
    },
    {
      firstName: "Mike",
      lastName: "Stubb",
      guestAllotment: 0
    },
    {
      firstName: "Beth & Genna",
      lastName: "Natanzon",
      guestAllotment: 0
    },
    {
      firstName: "David",
      lastName: "Sandbeck",
      guestAllotment: 0
    },
    {
      firstName: "Andy & Terry",
      lastName: "Sandbeck",
      guestAllotment: 0
    },
    {
      firstName: "Amanda & Tom",
      lastName: "Hudson",
      guestAllotment: 0
    },
    {
      firstName: "Grandma & Greg",
      lastName: "Sandbeck",
      guestAllotment: 0
    },
    {
      firstName: "Tim/Kris & Family",
      lastName: "Parkos",
      guestAllotment: 0
    },
    {
      firstName: "Jack & Michelle ",
      lastName: "Parkos",
      guestAllotment: 0
    },
    {
      firstName: "Johnny",
      lastName: "Parkos",
      guestAllotment: 0
    },
    {
      firstName: "Chad & Sarah",
      lastName: "Parkos",
      guestAllotment: 0
    },
    {
      firstName: "Bonnie & Dale",
      lastName: "Haugen",
      guestAllotment: 0
    },
    {
      firstName: "Cory",
      lastName: "Parkos",
      guestAllotment: 0
    },
    {
      firstName: "Phillis",
      lastName: "Stoeklen",
      guestAllotment: 1
    },
    {
      firstName: "Shane & Cassi",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "John & Audi",
      lastName: "Robotka",
      guestAllotment: 0
    },
    {
      firstName: "Darcy & Jason",
      lastName: "Musil",
      guestAllotment: 0
    },
    {
      firstName: "Lou & Donnie",
      lastName: "Birdsill",
      guestAllotment: 0
    },
    {
      firstName: "Corey & Lindsey",
      lastName: "Birdsill/Von Feldt",
      guestAllotment: 0
    },
    {
      firstName: "Sally & Brian",
      lastName: "Widiker",
      guestAllotment: 0
    },
    {
      firstName: "Bob",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Lizzy",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Sue & Bob",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Stew & Nadine",
      lastName: "Williams",
      guestAllotment: 0
    },
    {
      firstName: "Bobby & Missy",
      lastName: "Robotka",
      guestAllotment: 0
    },
    {
      firstName: "Gerry & Janet",
      lastName: "Rainford",
      guestAllotment: 0
    },
    {
      firstName: "Becca & Eric",
      lastName: "Hrdlicka",
      guestAllotment: 0
    },
    {
      firstName: "Bill (Wheels) ",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Sandra & Bill",
      lastName: "Stoeklen",
      guestAllotment: 0
    },
    {
      firstName: "Ben & Jennifer",
      lastName: "Runchey",
      guestAllotment: 0
    },
    {
      firstName: "Gary",
      lastName: "Burch",
      guestAllotment: 0
    },
    {
      firstName: "Jody & Darren",
      lastName: "Skar",
      guestAllotment: 0
    },
    {
      firstName: "Randy ",
      lastName: "Seffinga",
      guestAllotment: 0
    },
    {
      firstName: "Rhonda & Greg",
      lastName: "Shultz/Hayes",
      guestAllotment: 0
    },
    {
      firstName: "Scott & Laura",
      lastName: "Dohmen",
      guestAllotment: 0
    },
    {
      firstName: "Matt & Sheila",
      lastName: "Springer",
      guestAllotment: 0
    },
    {
      firstName: "Justin & Shannon",
      lastName: "Pendleton",
      guestAllotment: 0
    },
    {
      firstName: "Tyler",
      lastName: "LeBrocq",
      guestAllotment: 0
    },
    {
      firstName: "Doreen & Charlie",
      lastName: "Marsh",
      guestAllotment: 0
    },
    {
      firstName: "Ally & Shane",
      lastName: "VanderBent",
      guestAllotment: 0
    },
    {
      firstName: "Nick & Jason",
      lastName: "Saastad",
      guestAllotment: 0
    },
    {
      firstName: "Anthony",
      lastName: "Rosemark",
      guestAllotment: 0
    },
    {
      firstName: "Ron & Laura ",
      lastName: "Schmuck",
      guestAllotment: 0
    },
    {
      firstName: "Stanton & Jeffrey",
      lastName: "Ware/Jungbauer",
      guestAllotment: 0
    },
    {
      firstName: "Heather (McT) & Guest",
      lastName: "McTavish",
      guestAllotment: 1
    },
    {
      firstName: "Kyle & Guest",
      lastName: "Perry",
      guestAllotment: 1
    },
    {
      firstName: "Anna & Michele",
      lastName: "Zhang/Lunati",
      guestAllotment: 0
    },
    {
      firstName: "Jessica ",
      lastName: "Danner",
      guestAllotment: 0
    },
    {
      firstName: "Maria",
      lastName: "Heinegg",
      guestAllotment: 0
    },
    {
      firstName: "Sophia",
      lastName: "Curtis",
      guestAllotment: 0
    },
    {
      firstName: "Taylor & Andy",
      lastName: "Sweetman",
      guestAllotment: 0
    },
    {
      firstName: "Clare & Dan",
      lastName: "Fleischhacker",
      guestAllotment: 0
    },
    {
      firstName: "Stephanie & Guest",
      lastName: "Sailor",
      guestAllotment: 0
    },
    {
      firstName: "Kelsey & Nick",
      lastName: "Karls",
      guestAllotment: 0
    },
    {
      firstName: "Ali & Vanessa",
      lastName: "Mina",
      guestAllotment: 0
    },
    {
      firstName: "Tommy",
      lastName: "Nowak",
      guestAllotment: 0
    },
    {
      firstName: "Liz (Krepps) & Ryan",
      lastName: "Best",
      guestAllotment: 0
    },
    {
      firstName: "Kylie & Husband",
      lastName: "Osmundson",
      guestAllotment: null
    },
    {
      firstName: "Julia & Kevin",
      lastName: "Flaherty",
      guestAllotment: 0
    },
    {
      firstName: "Shannon & Guest",
      lastName: "Durren",
      guestAllotment: 1
    },
    {
      firstName: "Becca and Bart",
      lastName: "Johnson",
      guestAllotment: 0
    },
    {
      firstName: "Hannah & James",
      lastName: "Mincks",
      guestAllotment: 0
    },
    {
      firstName: "Laura & Dave",
      lastName: "Anderson",
      guestAllotment: 0
    },
    {
      firstName: "Donna & Jim",
      lastName: "Shepherd/Carufel",
      guestAllotment: 0
    },
    {
      firstName: "Michelle & Nick",
      lastName: "Zielinski",
      guestAllotment: 0
    },
    {
      firstName: "John & Marine",
      lastName: "Maloney",
      guestAllotment: 0
    },
    {
      firstName: "Tom & Jody",
      lastName: "Bade",
      guestAllotment: 0
    },
    {
      firstName: "Ron & Kim",
      lastName: "Krueger",
      guestAllotment: 0
    },
    {
      firstName: "Peter & Alaura",
      lastName: "Krueger",
      guestAllotment: 0
    },
    {
      firstName: "Danny ",
      lastName: "Krueger",
      guestAllotment: 0
    },
    {
      firstName: "Bob & Lynn",
      lastName: "Krueger",
      guestAllotment: 0
    },
    {
      firstName: "Mark & Michelle",
      lastName: "Anderson",
      guestAllotment: 0
    },
    {
      firstName: "Bob",
      lastName: "Zimmerman",
      guestAllotment: 0
    },
    {
      firstName: "Stephanie",
      lastName: "Terhaar",
      guestAllotment: 0
    },
    {
      firstName: "Jeffery & Ashley",
      lastName: "Bennett",
      guestAllotment: 0
    },
    {
      firstName: "Davey & Jack",
      lastName: "Ek/Casson",
      guestAllotment: 0
    },
    {
      firstName: "Megan",
      lastName: "Weisenberger",
      guestAllotment: 0
    },
    {
      firstName: "Lilly",
      lastName: "Chow",
      guestAllotment: 0
    },
    {
      firstName: "Krista & Jason",
      lastName: "Paulus",
      guestAllotment: 0
    },
    {
      firstName: "Gerry & Janet",
      lastName: "Rainford",
      guestAllotment: 0
    },
    {
      firstName: "Kristin & Cory",
      lastName: "Lynch",
      guestAllotment: 0
    },
    {
      firstName: "Tammy & Wally",
      lastName: "Gifford",
      guestAllotment: 0
    },
    {
      firstName: "Jim & Connie",
      lastName: "Zimmerman",
      guestAllotment: 0
    },
    {
      firstName: "Sandra & Bill",
      lastName: "Walczak",
      guestAllotment: 0
    },
    {
      firstName: "Krista & Jason",
      lastName: "Paulus",
      guestAllotment: 0
    },
    {
      firstName: "Gerry & Janet",
      lastName: "Rainford",
      guestAllotment: 0
    },
    {
      firstName: "Kristin & Cory",
      lastName: "Lynch",
      guestAllotment: 0
    },
    {
      firstName: "Tammy & Wally",
      lastName: "Gifford",
      guestAllotment: 0
    },
    {
      firstName: "Jim & Connie",
      lastName: "Zimmerman",
      guestAllotment: 0
    },
    {
      firstName: "Mike & Wagner",
      lastName: "Regenery",
      guestAllotment: 0
    },
    {
      firstName: "Sandra & Bill",
      lastName: "Walczak",
      guestAllotment: 0
    }
   ]

export default guests