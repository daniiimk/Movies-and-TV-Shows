const API_KEY = '74862a1a79562dbc6d4606ab1040966d';
const IMG = 'https://image.tmdb.org/t/p/w500';

/* =========================
   HERO DATA
========================= */
const heroItems = [
  { title: 'The Boys', type: 'tv', label: 'Prime Video' },
  { title: 'Reacher', type: 'tv', label: 'Action' },
  { title: 'Tracker', type: 'tv', label: 'Action-Drama' },
];

/* =========================
   DATA
========================= */
const sections = [
  {
    type: 'movie',
    heading: 'Favorite Movies',
    bigHeader: 'Movies',
    anchorId: 'movies',
    items: [
      { title: 'Thor', year: 2011, rating: '7.0' },
      { title: '6 Underground', year: 2019, rating: '6.1', desc: '2h 8m | 2019' },
      { title: 'Bad Boys', year: 1995, rating: '6.8', desc: '1h 59m | 1995' },
      { title: 'Deadpool', year: 2016, rating: '8.0', desc: '1h 48m | 2016' },
      { title: 'Now You See Me', year: 2013, rating: '7.2', desc: '1h 55m | 2013' },
      { title: 'American Assassin', year: 2017, rating: '6.2', desc: '1h 51m | 2017' },
      { title: 'Bullet Train', year: 2022, rating: '7.3', desc: '2h 7m | 2022' },
      { title: 'Catch Me If You Can', year: 2002, rating: '8.1', desc: '2h 21m | 2002' },
      { title: 'Code 8', year: 2019, rating: '6.1', desc: '1h 38m | 2019' },
      { title: 'Fight Club', year: 1999, rating: '8.8', desc: '2h 19m | 1999' },
      { title: 'Focus', year: 2015, rating: '6.6', desc: '1h 45m | 2015' },
      { title: 'The Gray Man', year: 2022, rating: '6.5', desc: '2h 2m | 2022' },
      { title: 'Operation Fortune', year: 2023, rating: '6.3', desc: '1h 54m | 2023' },
      { title: 'Zodiac', year: 2007, rating: '7.7', desc: '2h 37m | 2007' },
      { title: 'The Wolf of Wall Street', year: 2013, rating: '8.2', desc: '3h | 2013' },
      { title: 'Scarface', year: 1983, rating: '8.3', desc: '2h 50m | 1983' },
      { title: 'Shutter Island', year: 2010, rating: '8.2', desc: '2h 18m | 2010' },
      { title: 'Red Notice', year: 2021, rating: '6.3', desc: '1h 58m | 2021' },
      { title: 'Prisoners', year: 2013, rating: '8.1', desc: '2h 33m | 2013' },
    ],
  },
  {
    type: 'movie',
    heading: 'Fast & Furious',
    anchorId: 'movies',
    items: [
      { title: 'The Fast and the Furious', year: 2001, rating: '6.8', desc: '1h 46m | 2001' },
      { title: '2 Fast 2 Furious', year: 2003, rating: '5.9', desc: '1h 47m | 2003' },
      { title: 'The Fast and the Furious: Tokyo Drift', year: 2006, rating: '6.0', desc: '1h 44m | 2006' },
      { title: 'Fast & Furious', year: 2009, rating: '6.5', desc: '1h 47m | 2009' },
      { title: 'Fast Five', year: 2011, rating: '7.3', desc: '2h 10m | 2011' },
      { title: 'Fast & Furious 6', year: 2013, rating: '7.0', desc: '2h 10m | 2013' },
      { title: 'Furious 7', year: 2015, rating: '7.1', desc: '2h 17m | 2015' },
      { title: 'The Fate of the Furious', year: 2017, rating: '6.6', desc: '2h 16m | 2017' },
      { title: 'F9', year: 2021, rating: '5.2', desc: '2h 23m | 2021' },
      { title: 'Fast X', year: 2023, rating: '5.8', desc: '2h 21m | 2023' },
    ],
  },
  {
    type: 'movie',
    heading: 'Avengers',
    anchorId: 'movies',
    items: [
      { title: 'Iron Man', year: 2008, rating: '7.9', desc: '2h 6m | 2008' },
      { title: 'The Incredible Hulk', year: 2008, rating: '6.6', desc: '1h 52m | 2008' },
      { title: 'Iron Man 2', year: 2010, rating: '6.9', desc: '2h 4m | 2010' },
      { title: 'Thor', year: 2011, rating: '7.0', desc: '1h 55m | 2011' },
      { title: 'Captain America: The First Avenger', year: 2011, rating: '6.9', desc: '2h 4m | 2011' },
      { title: 'The Avengers', year: 2012, rating: '8.0', desc: '2h 23m | 2012' },
      { title: 'Iron Man 3', year: 2013, rating: '7.1', desc: '2h 10m | 2013' },
      { title: 'Thor: The Dark World', year: 2013, rating: '6.8', desc: '1h 52m | 2013' },
      { title: 'Captain America: The Winter Soldier', year: 2014, rating: '7.7', desc: '2h 16m | 2014' },
      { title: 'Guardians of the Galaxy', year: 2014, rating: '8.0', desc: '2h 1m | 2014' },
      { title: 'Avengers: Age of Ultron', year: 2015, rating: '7.3', desc: '2h 21m | 2015' },
      { title: 'Ant-Man', year: 2015, rating: '7.3', desc: '1h 57m | 2015' },
      { title: 'Captain America: Civil War', year: 2016, rating: '7.8', desc: '2h 27m | 2016' },
      { title: 'Doctor Strange', year: 2016, rating: '7.5', desc: '1h 55m | 2016' },
      { title: 'Guardians of the Galaxy Vol. 2', year: 2017, rating: '7.6', desc: '2h 16m | 2017' },
      { title: 'Spider-Man: Homecoming', year: 2017, rating: '7.4', desc: '2h 13m | 2017' },
      { title: 'Thor: Ragnarok', year: 2017, rating: '7.9', desc: '2h 10m | 2017' },
      { title: 'Avengers: Infinity War', year: 2018, rating: '8.4', desc: '2h 29m | 2018' },
      { title: 'Ant-Man and the Wasp', year: 2018, rating: '7.0', desc: '1h 58m | 2018' },
      { title: 'Avengers: Endgame', year: 2019, rating: '8.4', desc: '3h 1m | 2019' },
    ],
  },
  {
    type: 'movie',
    heading: 'Justice League',
    anchorId: 'movies',
    items: [
      { title: 'Wonder Woman', year: 2017, rating: '7.3', desc: '2h 21m | 2017' },
      { title: 'Wonder Woman 1984', year: 2020, rating: '5.4', desc: '2h 31m | 2020' },
      { title: 'Man of Steel', year: 2013, rating: '7.1', desc: '2h 23m | 2013' },
      { title: 'Batman v Superman: Dawn of Justice', year: 2016, rating: '6.5', desc: '2h 31m | 2016' },
      { title: 'Suicide Squad', year: 2016, rating: '5.9', desc: '2h 3m | 2016' },
      { title: 'Justice League', year: 2017, rating: '6.1', desc: '2h | 2017' },
      { title: 'Aquaman', year: 2018, rating: '6.8', desc: '2h 23m | 2018' },
      { title: 'Shazam!', year: 2019, rating: '7.0', desc: '2h 12m | 2019' },
      { title: 'The Suicide Squad', year: 2021, rating: '7.2', desc: '2h 12m | 2021' },
      { title: 'Black Adam', year: 2022, rating: '6.3', desc: '2h 5m | 2022' },
      { title: 'Shazam! Fury of the Gods', year: 2023, rating: '6.0', desc: '2h 10m | 2023' },
      { title: 'The Flash', year: 2023, rating: '6.7', desc: '2h 24m | 2023' },
      { title: 'Blue Beetle', year: 2023, rating: '6.0', desc: '2h 7m | 2023' },
    ],
  },
  {
    type: 'movie',
    heading: 'Transformers',
    anchorId: 'movies',
    items: [
      { title: 'Transformers', year: 2007, rating: '7.0', desc: '2h 24m | 2007' },
      { title: 'Transformers: Revenge of the Fallen', year: 2009, rating: '6.0', desc: '2h 29m | 2009' },
      { title: 'Transformers: Dark of the Moon', year: 2011, rating: '6.2', desc: '2h 34m | 2011' },
      { title: 'Transformers: Age of Extinction', year: 2014, rating: '5.6', desc: '2h 45m | 2014' },
      { title: 'Transformers: The Last Knight', year: 2017, rating: '5.2', desc: '2h 34m | 2017' },
      { title: 'Bumblebee', year: 2018, rating: '6.7', desc: '1h 54m | 2018' },
      { title: 'Transformers: Rise of the Beasts', year: 2023, rating: '6.8', desc: '2h 7m | 2023' },
    ],
  },
  {
    type: 'movie',
    heading: 'Jurassic Park',
    anchorId: 'movies',
    items: [
      { title: 'Jurassic Park', year: 1993, rating: '8.2', desc: '2h 7m | 1993' },
      { title: 'The Lost World: Jurassic Park', year: 1997, rating: '6.5', desc: '2h 9m | 1997' },
      { title: 'Jurassic Park III', year: 2001, rating: '5.9', desc: '1h 32m | 2001' },
      { title: 'Jurassic World', year: 2015, rating: '6.9', desc: '2h 4m | 2015' },
      { title: 'Jurassic World: Fallen Kingdom', year: 2018, rating: '6.1', desc: '2h 8m | 2018' },
      { title: 'Jurassic World Dominion', year: 2022, rating: '5.6', desc: '2h 27m | 2022' },
    ],
  },
  {
    type: 'movie',
    heading: 'X-Men',
    anchorId: 'movies',
    items: [
      { title: 'X-Men', year: 2000, rating: '7.3', desc: '1h 44m | 2000' },
      { title: 'X2', year: 2003, rating: '7.4', desc: '2h 14m | 2003' },
      { title: 'X-Men: The Last Stand', year: 2006, rating: '6.6', desc: '1h 44m | 2006' },
      { title: 'X-Men Origins: Wolverine', year: 2009, rating: '6.5', desc: '1h 47m | 2009' },
      { title: 'X-Men: First Class', year: 2011, rating: '7.7', desc: '2h 11m | 2011' },
      { title: 'The Wolverine', year: 2013, rating: '6.7', desc: '2h 6m | 2013' },
      { title: 'X-Men: Days of Future Past', year: 2014, rating: '7.9', desc: '2h 12m | 2014' },
      { title: 'X-Men: Apocalypse', year: 2016, rating: '6.9', desc: '2h 24m | 2016' },
      { title: 'Logan', year: 2017, rating: '8.1', desc: '2h 17m | 2017' },
      { title: 'Deadpool', year: 2016, rating: '8.0', desc: '1h 48m | 2016' },
      { title: 'Deadpool 2', year: 2018, rating: '7.6', desc: '1h 59m | 2018' },
      { title: 'The New Mutants', year: 2020, rating: '5.3', desc: '1h 34m | 2020' },
      { title: 'X-Men: Dark Phoenix', year: 2019, rating: '5.7', desc: '1h 53m | 2019' },
    ],
  },
  {
    type: 'movie',
    heading: 'Mission Impossible',
    anchorId: 'movies',
    items: [
      { title: 'Mission: Impossible', year: 1996, rating: '7.2', desc: '1h 50m | 1996' },
      { title: 'Mission: Impossible 2', year: 2000, rating: '6.1', desc: '2h 3m | 2000' },
      { title: 'Mission: Impossible III', year: 2006, rating: '6.9', desc: '2h 6m | 2006' },
      { title: 'Mission: Impossible - Ghost Protocol', year: 2011, rating: '7.4', desc: '2h 12m | 2011' },
      { title: 'Mission: Impossible - Rogue Nation', year: 2015, rating: '7.4', desc: '2h 11m | 2015' },
      { title: 'Mission: Impossible - Fallout', year: 2018, rating: '7.7', desc: '2h 27m | 2018' },
      { title: 'Mission: Impossible - Dead Reckoning Part One', year: 2023, rating: '7.7', desc: '2h 43m | 2023' },
    ],
  },
  {
    type: 'movie',
    heading: 'Comedy Movies',
    anchorId: 'movies',
    items: [
      { title: '21 Jump Street', year: 2012, rating: '7.2', desc: '1h 49m | 2012' },
      { title: '22 Jump Street', year: 2014, rating: '7.0', desc: '1h 52m | 2014' },
      { title: 'Ted', year: 2012, rating: '6.9', desc: '1h 46m | 2012' },
      { title: 'Ted 2', year: 2015, rating: '6.3', desc: '1h 55m | 2015' },
      { title: 'Scary Movie', year: 2000, rating: '6.3', desc: '1h 28m | 2000' },
      { title: 'Scary Movie 2', year: 2001, rating: '5.3', desc: '1h 23m | 2001' },
      { title: 'Scary Movie 3', year: 2003, rating: '5.5', desc: '1h 24m | 2003' },
      { title: 'Scary Movie 4', year: 2006, rating: '5.1', desc: '1h 23m | 2006' },
      { title: 'Scary Movie 5', year: 2013, rating: '3.5', desc: '1h 26m | 2013' },
      { title: 'The Hangover', year: 2009, rating: '7.7', desc: '1h 40m | 2009' },
      { title: 'The Hangover Part II', year: 2011, rating: '6.5', desc: '1h 42m | 2011' },
      { title: 'The Hangover Part III', year: 2013, rating: '5.8', desc: '1h 40m | 2013' },
      { title: 'Grown Ups', year: 2010, rating: '6.0', desc: '1h 42m | 2010' },
      { title: 'Grown Ups 2', year: 2013, rating: '5.4', desc: '1h 41m | 2013' },
      { title: 'Bad Boys', year: 1995, rating: '6.8', desc: '1h 59m | 1995' },
      { title: 'Bad Boys II', year: 2003, rating: '6.6', desc: '2h 27m | 2003' },
      { title: 'Bad Boys for Life', year: 2020, rating: '6.5', desc: '2h 4m | 2020' },
      { title: 'Ride Along', year: 2014, rating: '6.1', desc: '1h 39m | 2014' },
      { title: 'Ride Along 2', year: 2016, rating: '5.9', desc: '1h 42m | 2016' },
      { title: 'Kick-Ass', year: 2010, rating: '7.6', desc: '1h 57m | 2010' },
      { title: 'Kick-Ass 2', year: 2013, rating: '6.5', desc: '1h 43m | 2013' },
      { title: 'How High', year: 2001, rating: '6.2', desc: '1h 33m | 2001' },
      { title: 'How High 2', year: 2019, rating: '3.2', desc: '1h 28m | 2019' },
      { title: 'The Babysitter', year: 2017, rating: '6.4', desc: '1h 25m | 2017' },
      { title: 'The Babysitter: Killer Queen', year: 2020, rating: '5.8', desc: '1h 41m | 2020' },
      { title: 'Baywatch', year: 2017, rating: '5.5', desc: '1h 56m | 2017' },
      { title: 'Blockers', year: 2018, rating: '6.2', desc: '1h 42m | 2018' },
      { title: 'Central Intelligence', year: 2016, rating: '6.3', desc: '1h 47m | 2016' },
      { title: 'Click', year: 2006, rating: '6.4', desc: '1h 47m | 2006' },
      { title: "Daddy's Home", year: 2015, rating: '6.2', desc: '1h 36m | 2015' },
      { title: "Daddy's Home 2", year: 2017, rating: '6.0', desc: '1h 40m | 2017' },
      { title: 'Dirty Grandpa', year: 2016, rating: '5.9', desc: '1h 42m | 2016' },
      { title: "Don't Look Up", year: 2021, rating: '7.2', desc: '2h 18m | 2021' },
      { title: 'Free Guy', year: 2021, rating: '7.1', desc: '1h 55m | 2021' },
      { title: 'Friday', year: 1995, rating: '7.2', desc: '1h 31m | 1995' },
      { title: 'Friends with Benefits', year: 2011, rating: '6.5', desc: '1h 49m | 2011' },
      { title: 'Get Hard', year: 2015, rating: '6.0', desc: '1h 40m | 2015' },
      { title: 'Hancock', year: 2008, rating: '6.4', desc: '1h 32m | 2008' },
      { title: 'Hitch', year: 2005, rating: '6.6', desc: '1h 58m | 2005' },
      { title: 'Hubie Halloween', year: 2020, rating: '5.2', desc: '1h 43m | 2020' },
      { title: 'The Man from Toronto', year: 2022, rating: '5.8', desc: '1h 50m | 2022' },
      { title: 'Me Time', year: 2022, rating: '5.1', desc: '1h 41m | 2022' },
      { title: 'Night School', year: 2018, rating: '5.6', desc: '1h 51m | 2018' },
      { title: 'Not Another Teen Movie', year: 2001, rating: '5.8', desc: '1h 29m | 2001' },
      { title: 'The Proposal', year: 2009, rating: '6.8', desc: '1h 48m | 2009' },
      { title: 'The Truman Show', year: 1998, rating: '8.2', desc: '1h 43m | 1998' },
      { title: 'The Wedding Ringer', year: 2015, rating: '6.6', desc: '1h 41m | 2015' },
      { title: 'War Dogs', year: 2016, rating: '7.1', desc: '1h 54m | 2016' },
      { title: "We're the Millers", year: 2013, rating: '7.0', desc: '1h 50m | 2013' },
      { title: 'Men in Black', year: 1997, rating: '7.3', desc: '1h 38m | 1997' },
      { title: 'Men in Black II', year: 2002, rating: '6.2', desc: '1h 28m | 2002' },
      { title: 'Men in Black 3', year: 2012, rating: '6.8', desc: '1h 46m | 2012' },
      { title: 'Anyone but You', year: 2023, rating: '6.8', desc: '1h 43m | 2023' },
      { title: 'Crazy, Stupid, Love', year: 2011, rating: '7.4', desc: '1h 58m | 2011' },
      { title: 'A Million Ways to Die in the West', year: 2014, rating: '6.1', desc: '1h 56m | 2014' },
    ],
  },
  {
    type: 'movie',
    heading: 'Sci-Fi Movies',
    anchorId: 'movies',
    items: [
      { title: 'The Matrix', year: 1999, rating: '8.7', desc: '2h 16m | 1999' },
      { title: 'The Matrix Reloaded', year: 2003, rating: '7.2', desc: '2h 18m | 2003' },
      { title: 'The Matrix Revolutions', year: 2003, rating: '6.7', desc: '2h 9m | 2003' },
      { title: 'The Matrix Resurrections', year: 2021, rating: '5.7', desc: '2h 28m | 2021' },
      { title: 'Spider-Man', year: 2002, rating: '7.4', desc: '2h 1m | 2002' },
      { title: 'Spider-Man 2', year: 2004, rating: '7.4', desc: '2h 7m | 2004' },
      { title: 'Spider-Man 3', year: 2007, rating: '6.3', desc: '2h 19m | 2007' },
      { title: 'The Amazing Spider-Man', year: 2012, rating: '6.9', desc: '2h 16m | 2012' },
      { title: 'The Amazing Spider-Man 2', year: 2014, rating: '6.6', desc: '2h 22m | 2014' },
      { title: 'Maze Runner', year: 2014, rating: '6.8', desc: '1h 53m | 2014' },
      { title: 'Maze Runner: The Scorch Trials', year: 2015, rating: '6.3', desc: '2h 11m | 2015' },
      { title: 'Maze Runner: The Death Cure', year: 2018, rating: '6.3', desc: '2h 23m | 2018' },
      { title: 'Rise of the Planet of the Apes', year: 2011, rating: '7.6', desc: '1h 45m | 2011' },
      { title: 'Dawn of the Planet of the Apes', year: 2014, rating: '7.6', desc: '2h 10m | 2014' },
      { title: 'War for the Planet of the Apes', year: 2017, rating: '7.4', desc: '2h 20m | 2017' },
      { title: 'Kingdom of the Planet of the Apes', year: 2024, rating: '7.2', desc: '2h 25m | 2024' },
      { title: 'The Terminator', year: 1984, rating: '8.1', desc: '1h 47m | 1984' },
      { title: 'Terminator 2: Judgment Day', year: 1991, rating: '8.6', desc: '2h 17m | 1991' },
      { title: 'Terminator 3: Rise of the Machines', year: 2003, rating: '6.3', desc: '1h 49m | 2003' },
      { title: 'Terminator Salvation', year: 2009, rating: '6.5', desc: '1h 55m | 2009' },
      { title: 'Terminator Genisys', year: 2015, rating: '6.3', desc: '2h 6m | 2015' },
      { title: 'Terminator: Dark Fate', year: 2019, rating: '6.2', desc: '2h 8m | 2019' },
      { title: 'Arrival', year: 2016, rating: '7.9', desc: '1h 56m | 2016' },
      { title: 'Bloodshot', year: 2020, rating: '5.7', desc: '1h 49m | 2020' },
      { title: 'Code 8', year: 2019, rating: '6.1', desc: '1h 38m | 2019' },
      { title: 'Death Race', year: 2008, rating: '6.4', desc: '1h 45m | 2008' },
      { title: 'Donnie Darko', year: 2001, rating: '8.0', desc: '1h 53m | 2001' },
      { title: 'Edge of Tomorrow', year: 2014, rating: '7.9', desc: '1h 53m | 2014' },
      { title: 'Eternals', year: 2021, rating: '6.3', desc: '2h 36m | 2021' },
      { title: 'Gemini Man', year: 2019, rating: '5.7', desc: '1h 57m | 2019' },
      { title: 'Hancock', year: 2008, rating: '6.4', desc: '1h 32m | 2008' },
      { title: 'Inception', year: 2010, rating: '8.8', desc: '2h 28m | 2010' },
      { title: 'I Am Legend', year: 2007, rating: '7.2', desc: '1h 41m | 2007' },
      { title: 'Independence Day', year: 1996, rating: '7.0', desc: '2h 25m | 1996' },
      { title: 'Interstellar', year: 2014, rating: '8.7', desc: '2h 49m | 2014' },
      { title: 'Limitless', year: 2011, rating: '7.4', desc: '1h 45m | 2011' },
      { title: 'Love and Monsters', year: 2020, rating: '6.9', desc: '1h 49m | 2020' },
      { title: 'The Tomorrow War', year: 2021, rating: '6.6', desc: '2h 18m | 2021' },
      { title: 'Tenet', year: 2020, rating: '7.4', desc: '2h 30m | 2020' },
      { title: 'Venom', year: 2018, rating: '6.6', desc: '1h 52m | 2018' },
      { title: 'Venom: Let There Be Carnage', year: 2021, rating: '5.9', desc: '1h 37m | 2021' },
      { title: 'Subservience', year: 2024, rating: '5.4', desc: '2024' },
    ],
  },
  {
    type: 'movie',
    heading: 'Action Movies',
    anchorId: 'movies',
    items: [
      { title: 'John Wick', year: 2014, rating: '7.4', desc: '1h 41m | 2014' },
      { title: 'John Wick: Chapter 2', year: 2017, rating: '7.4', desc: '2h 2m | 2017' },
      { title: 'John Wick: Chapter 3 - Parabellum', year: 2019, rating: '7.4', desc: '2h 10m | 2019' },
      { title: 'John Wick: Chapter 4', year: 2023, rating: '7.6', desc: '2h 49m | 2023' },
      { title: 'Top Gun', year: 1986, rating: '6.9', desc: '1h 49m | 1986' },
      { title: 'Top Gun: Maverick', year: 2022, rating: '8.2', desc: '2h 10m | 2022' },
      { title: 'Creed', year: 2015, rating: '7.6', desc: '2h 13m | 2015' },
      { title: 'Creed II', year: 2018, rating: '7.1', desc: '2h 10m | 2018' },
      { title: 'Creed III', year: 2023, rating: '6.7', desc: '1h 56m | 2023' },
      { title: "The Hitman's Bodyguard", year: 2017, rating: '6.9', desc: '1h 58m | 2017' },
      { title: "The Hitman's Wife's Bodyguard", year: 2021, rating: '6.1', desc: '1h 40m | 2021' },
      { title: 'Extraction', year: 2020, rating: '6.8', desc: '1h 56m | 2020' },
      { title: 'Extraction 2', year: 2023, rating: '7.0', desc: '2h 2m | 2023' },
      { title: 'The Expendables', year: 2010, rating: '6.4', desc: '1h 43m | 2010' },
      { title: 'The Expendables 2', year: 2012, rating: '6.6', desc: '1h 43m | 2012' },
      { title: 'The Expendables 3', year: 2014, rating: '6.1', desc: '2h 6m | 2014' },
      { title: 'The Expendables 4', year: 2023, rating: '4.8', desc: '1h 43m | 2023' },
      { title: 'Jack Reacher', year: 2012, rating: '7.0', desc: '2h 10m | 2012' },
      { title: 'Jack Reacher: Never Go Back', year: 2016, rating: '6.2', desc: '1h 58m | 2016' },
      { title: 'Goodfellas', year: 1990, rating: '8.7', desc: '2h 25m | 1990' },
      { title: 'Shooter', year: 2007, rating: '7.1', desc: '2h 4m | 2007' },
      { title: 'San Andreas', year: 2015, rating: '6.1', desc: '1h 54m | 2015' },
      { title: 'The Mechanic', year: 2011, rating: '6.5', desc: '1h 33m | 2011' },
      { title: 'Mechanic: Resurrection', year: 2016, rating: '5.7', desc: '1h 38m | 2016' },
      { title: 'Need for Speed', year: 2014, rating: '6.4', desc: '2h 12m | 2014' },
      { title: 'Mr. & Mrs. Smith', year: 2005, rating: '6.5', desc: '2h | 2005' },
      { title: '6 Underground', year: 2019, rating: '6.1', desc: '2h 8m | 2019' },
      { title: 'Scarface', year: 1983, rating: '8.3', desc: '2h 50m | 1983' },
      { title: 'The Gentlemen', year: 2020, rating: '7.8', desc: '1h 53m | 2020' },
      { title: 'The Irishman', year: 2019, rating: '7.8', desc: '3h 29m | 2019' },
      { title: 'Baby Driver', year: 2017, rating: '7.5', desc: '1h 53m | 2017' },
      { title: 'Skyscraper', year: 2018, rating: '5.8', desc: '1h 42m | 2018' },
      { title: 'Speed', year: 1994, rating: '7.3', desc: '1h 56m | 1994' },
      { title: 'Bright', year: 2017, rating: '6.3', desc: '1h 57m | 2017' },
      { title: 'Snitch', year: 2013, rating: '6.4', desc: '1h 52m | 2013' },
      { title: '12 Strong', year: 2018, rating: '6.5', desc: '2h 10m | 2018' },
      { title: 'Knives Out', year: 2019, rating: '7.9', desc: '2h 10m | 2019' },
      { title: 'The Godfather', year: 1972, rating: '9.2', desc: '2h 55m | 1972' },
      { title: 'The Godfather Part II', year: 1974, rating: '9.0', desc: '3h 22m | 1974' },
      { title: 'The Godfather Part III', year: 1990, rating: '7.6', desc: '2h 42m | 1990' },
      { title: 'Drive', year: 2011, rating: '7.8', desc: '1h 40m | 2011' },
      { title: '2 Guns', year: 2013, rating: '6.7', desc: '1h 49m | 2013' },
      { title: 'Triple Frontier', year: 2019, rating: '6.4', desc: '2h 5m | 2019' },
      { title: 'Ambulance', year: 2022, rating: '6.1', desc: '2h 16m | 2022' },
      { title: 'The Beekeeper', year: 2024, rating: '6.3', desc: '1h 45m | 2024' },
      { title: 'Mile 22', year: 2018, rating: '6.1', desc: '1h 35m | 2018' },
      { title: 'Southpaw', year: 2015, rating: '7.3', desc: '2h 4m | 2015' },
      { title: 'Blue Story', year: 2019, rating: '6.3', desc: '1h 31m | 2019' },
      { title: 'The Transporter', year: 2002, rating: '6.8', desc: '1h 32m | 2002' },
      { title: 'Transporter 2', year: 2005, rating: '6.3', desc: '1h 27m | 2005' },
      { title: 'Transporter 3', year: 2008, rating: '6.1', desc: '1h 44m | 2008' },
    ],
  },
  {
    type: 'movie',
    heading: 'Drama Movies',
    anchorId: 'movies',
    items: [
      { title: 'The Shawshank Redemption', year: 1994, rating: '9.3', desc: '2h 22m | 1994' },
      { title: 'The Green Mile', year: 1999, rating: '8.6', desc: '3h 9m | 1999' },
      { title: 'The Wolf of Wall Street', year: 2013, rating: '8.2', desc: '3h | 2013' },
      { title: 'Interstellar', year: 2014, rating: '8.7', desc: '2h 49m | 2014' },
      { title: 'Oppenheimer', year: 2023, rating: '8.5', desc: '3h | 2023' },
      { title: 'The Truman Show', year: 1998, rating: '8.2', desc: '1h 43m | 1998' },
      { title: 'Pulp Fiction', year: 1994, rating: '8.9', desc: '2h 34m | 1994' },
      { title: 'The Social Network', year: 2010, rating: '7.7', desc: '2h | 2010' },
      { title: 'The Perks of Being a Wallflower', year: 2012, rating: '8.0', desc: '1h 43m | 2012' },
      { title: 'Boyz n the Hood', year: 1991, rating: '7.8', desc: '1h 52m | 1991' },
      { title: 'The Great Gatsby', year: 2013, rating: '7.2', desc: '2h 23m | 2013' },
      { title: 'Goodfellas', year: 1990, rating: '8.7', desc: '2h 25m | 1990' },
      { title: 'The Irishman', year: 2019, rating: '7.8', desc: '3h 29m | 2019' },
      { title: 'Fatherhood', year: 2021, rating: '6.7', desc: '1h 49m | 2021' },
      { title: '17 Again', year: 2009, rating: '6.4', desc: '1h 42m | 2009' },
      { title: 'Crazy, Stupid, Love', year: 2011, rating: '7.4', desc: '1h 58m | 2011' },
      { title: 'Focus', year: 2015, rating: '6.6', desc: '1h 45m | 2015' },
      { title: 'The Gentlemen', year: 2020, rating: '7.8', desc: '1h 53m | 2020' },
      { title: 'October Sky', year: 1999, rating: '7.8', desc: '1h 48m | 1999' },
      { title: 'A Working Man', year: 2025, rating: '5.7', desc: '2025' },
    ],
  },
  {
    type: 'movie',
    heading: 'Crime Movies',
    anchorId: 'movies',
    items: [
      { title: 'Scarface', year: 1983, rating: '8.3', desc: '2h 50m | 1983' },
      { title: 'The Godfather', year: 1972, rating: '9.2', desc: '2h 55m | 1972' },
      { title: 'The Godfather Part II', year: 1974, rating: '9.0', desc: '3h 22m | 1974' },
      { title: 'The Godfather Part III', year: 1990, rating: '7.6', desc: '2h 42m | 1990' },
      { title: 'Pulp Fiction', year: 1994, rating: '8.9', desc: '2h 34m | 1994' },
      { title: 'Catch Me If You Can', year: 2002, rating: '8.1', desc: '2h 21m | 2002' },
      { title: 'Straight Outta Compton', year: 2015, rating: '7.8', desc: '2h 27m | 2015' },
      { title: 'Rush Hour', year: 1998, rating: '7.0', desc: '1h 38m | 1998' },
      { title: 'Rush Hour 2', year: 2001, rating: '6.6', desc: '1h 30m | 2001' },
      { title: 'Rush Hour 3', year: 2007, rating: '6.2', desc: '1h 31m | 2007' },
      { title: 'Bad Boys', year: 1995, rating: '6.9', desc: '1h 59m | 1995' },
      { title: 'Bad Boys II', year: 2003, rating: '6.6', desc: '2h 27m | 2003' },
      { title: 'Bad Boys for Life', year: 2020, rating: '6.5', desc: '2h 4m | 2020' },
      { title: 'Bad Boys: Ride or Die', year: 2024, rating: '6.5', desc: '1h 55m | 2024' },
      { title: 'The Mechanic', year: 2011, rating: '6.6', desc: '1h 33m | 2011' },
      { title: 'Mechanic: Resurrection', year: 2016, rating: '5.7', desc: '1h 38m | 2016' },
      { title: 'Boyz n the Hood', year: 1991, rating: '7.8', desc: '1h 52m | 1991' },
      { title: 'The Gentlemen', year: 2020, rating: '7.8', desc: '1h 53m | 2020' },
      { title: 'Snitch', year: 2013, rating: '6.4', desc: '1h 52m | 2013' },
      { title: 'Den of Thieves', year: 2018, rating: '7.0', desc: '2h 20m | 2018' },
      { title: 'Den of Thieves 2: Pantera', year: 2025, rating: '6.3', desc: '2025' },
      { title: 'American Sniper', year: 2014, rating: '7.3', desc: '2h 12m | 2014' },
      { title: 'The Town', year: 2010, rating: '7.5', desc: '2h 5m | 2010' },
    ],
  },
  {
    type: 'movie',
    heading: 'Thriller Movies',
    anchorId: 'movies',
    items: [
      { title: 'Fight Club', year: 1999, rating: '8.8', desc: '2h 19m | 1999' },
      { title: 'Shutter Island', year: 2010, rating: '8.2', desc: '2h 18m | 2010' },
      { title: 'Nightcrawler', year: 2014, rating: '7.8', desc: '1h 57m | 2014' },
      { title: 'Prisoners', year: 2013, rating: '8.1', desc: '2h 33m | 2013' },
      { title: 'Zodiac', year: 2007, rating: '7.7', desc: '2h 37m | 2007' },
      { title: 'The Guest', year: 2014, rating: '6.7', desc: '1h 40m | 2014' },
      { title: 'Nerve', year: 2016, rating: '6.5', desc: '1h 36m | 2016' },
      { title: 'Uncut Gems', year: 2019, rating: '7.4', desc: '2h 15m | 2019' },
      { title: 'Tenet', year: 2020, rating: '7.4', desc: '2h 30m | 2020' },
      { title: 'Donnie Darko', year: 2001, rating: '8.0', desc: '1h 53m | 2001' },
      { title: 'The Gray Man', year: 2022, rating: '6.5', desc: '2h 2m | 2022' },
      { title: 'Sound of Freedom', year: 2023, rating: '7.6', desc: '2h 11m | 2023' },
      { title: 'Se7en', year: 1995, rating: '8.6', desc: '2h 7m | 1995' },
      { title: 'Twister', year: 1996, rating: '6.4', desc: '1h 53m | 1996' },
      { title: 'The Gorge', year: 2025, rating: '6.7', desc: '2025' },
      { title: 'Flight Risk', year: 2025, rating: '5.2', desc: '2025' },
      { title: 'Lift', year: 2024, rating: '5.5', desc: '1h 47m | 2024' },
    ],
  },

  // TV SHOWS
  {
    type: 'tv',
    heading: 'Favorite TV Shows',
    bigHeader: 'TV-Shows',
    anchorId: 'tv-shows',
    items: [
      { title: 'Reacher', rating: '8.1', desc: '2 Seasons | 2022-' },
      { title: 'Supernatural', rating: '8.4', desc: '15 Seasons | 2005-2020' },
      { title: 'The Boys', rating: '8.7', desc: '4 Seasons | 2019-' },
      { title: 'Tracker', rating: '7.1', desc: '2 Seasons | 2024-' },
      { title: 'Countdown', year: 2025, rating: '6.8', desc: '1 Season | 2025-' },
      { title: "Tom Clancy's Jack Ryan", rating: '8.0', desc: '4 Seasons | 2018-2023' },
      { title: 'SEAL Team', rating: '7.8', desc: '7 Seasons | 2017-2024' },
      { title: 'Walker', rating: '6.2', desc: '3 Seasons | 2021-' },
      { title: 'Vikings', rating: '8.5', desc: '6 Seasons | 2013-2020' },
      { title: 'The Walking Dead', rating: '8.1', desc: '11 Seasons | 2010-2022' },
      { title: 'The Originals', rating: '8.3', desc: '5 Seasons | 2013-2018' },
      { title: 'Teen Wolf', rating: '7.7', desc: '6 Seasons | 2011-2017' },
      { title: 'Suits', rating: '8.4', desc: '9 Seasons | 2011-2019' },
      { title: 'Sons of Anarchy', rating: '8.6', desc: '7 Seasons | 2008-2014' },
      { title: 'Outer Banks', rating: '7.5', desc: '4 Seasons | 2020-' },
      { title: 'New Amsterdam', rating: '8.0', desc: '5 Seasons | 2018-2023' },
      { title: 'Peacemaker', rating: '8.3', desc: '2 Seasons | 2022-' },
      { title: 'Power', rating: '8.1', desc: '6 Seasons | 2014-2020' },
      { title: 'The Mentalist', rating: '8.2', desc: '7 Seasons | 2008-2015' },
      { title: 'How I Met Your Mother', rating: '8.3', desc: '9 Seasons | 2005-2014' },
      { title: 'Friends', rating: '8.9', desc: '10 Seasons | 1994-2004' },
      { title: 'The Fresh Prince of Bel-Air', rating: '7.9', desc: '6 Seasons | 1990-1996' },
      { title: 'Criminal Minds', rating: '8.1', desc: '15 Seasons | 2005-2020' },
      { title: 'Blue Mountain State', rating: '8.3', desc: '3 Seasons | 2010-2011' },
      { title: 'Arrow', rating: '7.5', desc: '8 Seasons | 2012-2020' },
      { title: 'Power Book II: Ghost', rating: '7.5', desc: '4 Seasons | 2020-' },
    ],
  },
  {
    type: 'tv',
    heading: 'Action TV Shows',
    anchorId: 'tv-shows',
    items: [
      { title: 'Arrow', rating: '7.5', desc: '8 Seasons | 2012-2020' },
      { title: 'Agents of S.H.I.E.L.D.', rating: '7.5', desc: '7 Seasons | 2013-2020' },
      { title: 'Daredevil', rating: '8.6', desc: '3 Seasons | 2015-2018' },
      { title: 'The Defenders', year: 2017, rating: '7.3', desc: '1 Season | 2017' },
      { title: "Marvel's The Punisher", rating: '8.5', desc: '2 Seasons | 2017-2019' },
      { title: 'Titans', rating: '7.6', desc: '4 Seasons | 2018-2023' },
      { title: 'The Flash', rating: '7.5', desc: '9 Seasons | 2014-2023' },
      { title: 'The Originals', rating: '8.3', desc: '5 Seasons | 2013-2018' },
      { title: "DC's Legends of Tomorrow", rating: '6.8', desc: '7 Seasons | 2016-2022' },
      { title: 'Lucifer', rating: '8.1', desc: '6 Seasons | 2016-2021' },
      { title: 'Superman & Lois', rating: '7.8', desc: '4 Seasons | 2021-2024' },
      { title: 'Cobra Kai', rating: '8.5', desc: '6 Seasons | 2018-2024' },
      { title: 'Hawaii Five-0', rating: '7.4', desc: '10 Seasons | 2010-2020' },
      { title: 'Reacher', rating: '8.1', desc: '2 Seasons | 2022-' },
      { title: 'MacGyver', year: 2016, rating: '5.7', desc: '5 Seasons | 2016-2021' },
      { title: 'Prison Break', rating: '8.3', desc: '5 Seasons | 2005-2017' },
      { title: 'S.W.A.T.', year: 2017, rating: '7.1', desc: '7 Seasons | 2017-' },
      { title: 'The Witcher', rating: '8.2', desc: '3 Seasons | 2019-2023' },
      { title: 'Criminal Minds', rating: '8.1', desc: '15 Seasons | 2005-2020' },
      { title: 'Ragnarok', rating: '7.5', desc: '3 Seasons | 2020-2023' },
      { title: 'Shadowhunters', rating: '6.5', desc: '3 Seasons | 2016-2019' },
      { title: 'The Boys', rating: '8.7', desc: '4 Seasons | 2019-' },
      { title: 'Outer Banks', rating: '7.5', desc: '4 Seasons | 2020-' },
      { title: 'The Recruit', rating: '7.5', desc: '2 Seasons | 2022-' },
      { title: 'Vikings', rating: '8.5', desc: '6 Seasons | 2013-2020' },
      { title: 'Teen Wolf', rating: '7.7', desc: '6 Seasons | 2011-2017' },
      { title: 'Big Sky', rating: '6.8', desc: '3 Seasons | 2020-2023' },
      { title: 'Gen V', rating: '7.8', desc: '1 Season | 2023' },
      { title: '9-1-1', rating: '7.9', desc: '7 Seasons | 2018-' },
      { title: 'The Rookie', rating: '8.0', desc: '6 Seasons | 2018-' },
    ],
  },
  {
    type: 'tv',
    heading: 'Drama TV Shows',
    anchorId: 'tv-shows',
    items: [
      { title: '90210', year: 2008, rating: '6.0', desc: '5 Seasons | 2008-2013' },
      { title: "Dawson's Creek", rating: '6.6', desc: '6 Seasons | 1998-2003' },
      { title: 'Deadly Class', rating: '7.6', desc: '1 Season | 2019' },
      { title: 'Fate: The Winx Saga', rating: '6.8', desc: '2 Seasons | 2021-2022' },
      { title: 'Ginny & Georgia', rating: '7.5', desc: '3 Seasons | 2021-' },
      { title: 'The Good Doctor', rating: '8.0', desc: '7 Seasons | 2017-2024' },
      { title: 'Mad Men', rating: '8.7', desc: '7 Seasons | 2007-2015' },
      { title: 'Outer Banks', rating: '7.5', desc: '4 Seasons | 2020-' },
      { title: 'Pretty Little Liars', rating: '7.4', desc: '7 Seasons | 2010-2017' },
      { title: 'The Society', rating: '7.1', desc: '1 Season | 2019' },
      { title: 'The Tomorrow People', year: 2013, rating: '7.2', desc: '1 Season | 2013-2014' },
      { title: 'The O.C.', rating: '7.5', desc: '4 Seasons | 2003-2007' },
      { title: 'Timeless', rating: '7.6', desc: '2 Seasons | 2016-2018' },
      { title: 'Lucifer', rating: '8.1', desc: '6 Seasons | 2016-2021' },
      { title: 'Lost', rating: '8.3', desc: '6 Seasons | 2004-2010' },
      { title: 'Manifest', rating: '7.1', desc: '4 Seasons | 2018-2023' },
      { title: 'Modern Family', rating: '8.5', desc: '11 Seasons | 2009-2020' },
      { title: 'One of Us Is Lying', rating: '6.9', desc: '2 Seasons | 2021-2022' },
      { title: 'Stranger Things', rating: '8.7', desc: '4 Seasons | 2016-2025' },
      { title: 'Suits', rating: '8.4', desc: '9 Seasons | 2011-2019' },
      { title: 'Vampire Diaries', rating: '7.7', desc: '8 Seasons | 2009-2017' },
      { title: 'Walker', rating: '6.0', desc: '4 Seasons | 2021-' },
      { title: 'Power', rating: '8.1', desc: '6 Seasons | 2014-2020' },
      { title: 'Wednesday', rating: '8.1', desc: '2 Seasons | 2022-' },
      { title: 'You', rating: '7.7', desc: '4 Seasons | 2018-2024' },
      { title: 'Legacies', rating: '7.3', desc: '4 Seasons | 2018-2022' },
      { title: 'Smallville', rating: '7.5', desc: '10 Seasons | 2001-2011' },
      { title: 'The White Lotus', rating: '7.9', desc: '3 Seasons | 2021-' },
      { title: 'New Amsterdam', year: 2018, rating: '8.0', desc: '5 Seasons | 2018-2023' },
      { title: 'Hijack', rating: '7.6', desc: '1 Season | 2023' },
      { title: 'Exit', year: 2019, rating: '7.9', desc: '3 Seasons | 2019-2022' },
      { title: 'Big Sky', rating: '6.8', desc: '3 Seasons | 2020-2023' },
      { title: 'True Story', year: 2021, rating: '7.5', desc: '1 Season | 2021' },
      { title: 'Chicago Fire', rating: '8.0', desc: '12 Seasons | 2012-' },
      { title: 'Chicago Med', rating: '7.6', desc: '9 Seasons | 2015-' },
      { title: 'Fire Country', rating: '7.1', desc: '3 Seasons | 2022-' },
      { title: 'Yellowstone', rating: '8.6', desc: '5 Seasons | 2018-2024' },
      { title: 'One Tree Hill', rating: '7.8', desc: '9 Seasons | 2003-2012' },
      { title: 'The Resident', rating: '7.8', desc: '6 Seasons | 2018-2023' },
      { title: 'Defending Jacob', rating: '7.8', desc: '1 Season | 2020' },
      { title: 'Suits: LA', rating: '5.7', desc: '1 Season | 2025' },
    ],
  },
  {
    type: 'tv',
    heading: 'Comedy TV Shows',
    anchorId: 'tv-shows',
    items: [
      { title: 'Ballers', rating: '7.6', desc: '5 Seasons | 2015-2019' },
      { title: 'Blue Mountain State', rating: '8.3', desc: '3 Seasons | 2010-2011' },
      { title: 'Brooklyn Nine-Nine', rating: '8.4', desc: '8 Seasons | 2013-2021' },
      { title: 'Cougar Town', rating: '7.0', desc: '6 Seasons | 2009-2015' },
      { title: 'Friends', rating: '8.9', desc: '10 Seasons | 1994-2004' },
      { title: 'How I Met Your Mother', rating: '8.3', desc: '9 Seasons | 2005-2014' },
      { title: 'Modern Family', rating: '8.5', desc: '11 Seasons | 2009-2020' },
      { title: 'Superstore', rating: '7.8', desc: '6 Seasons | 2015-2021' },
      { title: 'Suits', rating: '8.4', desc: '9 Seasons | 2011-2019' },
      { title: 'Whose Line Is It Anyway?', rating: '8.5', desc: '17 Seasons | 1998-' },
      { title: 'The Fresh Prince of Bel-Air', rating: '7.9', desc: '6 Seasons | 1990-1996' },
      { title: 'Key & Peele', rating: '8.3', desc: '5 Seasons | 2012-2015' },
      { title: 'The King of Queens', rating: '7.3', desc: '9 Seasons | 1998-2007' },
      { title: 'The Big Bang Theory', rating: '8.2', desc: '12 Seasons | 2007-2019' },
      { title: 'Castle', rating: '8.1', desc: '8 Seasons | 2009-2016' },
      { title: 'The Office', rating: '9.0', desc: '9 Seasons | 2005-2013' },
      { title: 'Parks and Recreation', rating: '8.6', desc: '7 Seasons | 2009-2015' },
      { title: 'The Gentlemen', year: 2024, rating: '8.0', desc: '1 Season | 2024' },
      { title: 'Misfits', rating: '8.2', desc: '5 Seasons | 2009-2013' },
    ],
  },
  {
    type: 'tv',
    heading: 'Sci-Fi / Fantasy TV Shows',
    anchorId: 'tv-shows',
    items: [
      { title: 'Cloak & Dagger', rating: '6.7', desc: '2 Seasons | 2018-2019' },
      { title: 'Luke Cage', rating: '7.3', desc: '2 Seasons | 2016-2018' },
      { title: 'Lost', rating: '8.3', desc: '6 Seasons | 2004-2010' },
      { title: 'Lucifer', rating: '8.1', desc: '6 Seasons | 2016-2021' },
      { title: 'Manifest', rating: '7.1', desc: '4 Seasons | 2018-2023' },
      { title: 'Stranger Things', rating: '8.7', desc: '4 Seasons | 2016-2025' },
      { title: 'Supernatural', rating: '8.4', desc: '15 Seasons | 2005-2020' },
      { title: 'Shadowhunters', rating: '6.5', desc: '3 Seasons | 2016-2019' },
      { title: 'The Witcher', rating: '8.2', desc: '3 Seasons | 2019-2023' },
      { title: 'Moon Knight', rating: '7.3', desc: '1 Season | 2022' },
      { title: 'Timeless', rating: '7.6', desc: '2 Seasons | 2016-2018' },
      { title: 'Travelers', rating: '8.0', desc: '3 Seasons | 2016-2018' },
      { title: 'Under the Dome', rating: '6.6', desc: '3 Seasons | 2013-2015' },
      { title: 'The Gifted', rating: '7.3', desc: '2 Seasons | 2017-2019' },
      { title: 'Ragnarok', rating: '7.5', desc: '3 Seasons | 2020-2023' },
      { title: 'Superman & Lois', rating: '7.8', desc: '4 Seasons | 2021-2024' },
      { title: 'The Tomorrow People', year: 2013, rating: '7.2', desc: '1 Season | 2013-2014' },
      { title: 'The Flash', rating: '7.5', desc: '9 Seasons | 2014-2023' },
      { title: 'The Boys', rating: '8.7', desc: '4 Seasons | 2019-' },
      { title: 'Vampire Diaries', rating: '7.7', desc: '8 Seasons | 2009-2017' },
      { title: 'The Originals', rating: '8.3', desc: '5 Seasons | 2013-2018' },
      { title: 'Gen V', rating: '7.8', desc: '1 Season | 2023' },
      { title: 'The Walking Dead', rating: '8.2', desc: '11 Seasons | 2010-2022' },
      { title: 'Wolf Pack', rating: '6.5', desc: '1 Season | 2023' },
      { title: 'Upload', rating: '7.9', desc: '3 Seasons | 2020-2023' },
      { title: 'Siren', rating: '7.0', desc: '3 Seasons | 2018-2020' },
      { title: 'Westworld', rating: '8.4', desc: '4 Seasons | 2016-2022' },
      { title: 'Grimm', rating: '7.9', desc: '6 Seasons | 2011-2017' },
      { title: 'Heroes', rating: '7.5', desc: '4 Seasons | 2006-2010' },
      { title: 'Roswell', year: 1999, rating: '7.5', desc: '3 Seasons | 1999-2002' },
      { title: 'From', rating: '7.8', desc: '3 Seasons | 2022-' },
    ],
  },
  {
    type: 'tv',
    heading: 'Crime / Thriller TV Shows',
    anchorId: 'tv-shows',
    items: [
      { title: 'The Blacklist', rating: '8.0', desc: '10 Seasons | 2013-2023' },
      { title: 'Criminal Minds', rating: '8.1', desc: '15 Seasons | 2005-2020' },
      { title: 'Hawaii Five-0', rating: '7.4', desc: '10 Seasons | 2010-2020' },
      { title: 'S.W.A.T.', year: 2017, rating: '7.1', desc: '7 Seasons | 2017-' },
      { title: 'Bosch', rating: '8.4', desc: '7 Seasons | 2014-2021' },
      { title: 'Mr. Robot', rating: '8.5', desc: '4 Seasons | 2015-2019' },
      { title: 'Riverdale', rating: '6.7', desc: '7 Seasons | 2017-2023' },
      { title: 'Chicago P.D.', rating: '8.1', desc: '11 Seasons | 2014-' },
      { title: 'How to Get Away with Murder', rating: '8.1', desc: '6 Seasons | 2014-2020' },
      { title: 'Exit', year: 2019, rating: '7.9', desc: '3 Seasons | 2019-2022' },
      { title: 'Big Sky', rating: '6.8', desc: '3 Seasons | 2020-2023' },
      { title: 'True Story', year: 2021, rating: '7.5', desc: '1 Season | 2021' },
      { title: 'Heels', rating: '8.0', desc: '2 Seasons | 2021-2023' },
      { title: 'Power Book II: Ghost', rating: '7.5', desc: '4 Seasons | 2020-' },
      { title: 'Castle', rating: '8.1', desc: '8 Seasons | 2009-2016' },
      { title: 'Tulsa King', rating: '8.0', desc: '2 Seasons | 2022-' },
      { title: 'Dexter', rating: '8.6', desc: '8 Seasons | 2006-2013' },
      { title: 'Snowfall', rating: '8.4', desc: '6 Seasons | 2017-2023' },
      { title: 'Obliterated', rating: '6.8', desc: '1 Season | 2023' },
    ],
  },
];

/* =========================
   FETCH BACKDROP (HERO)
========================= */
async function fetchBackdrop(title, type) {
  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(title)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const backdrop = data.results?.[0]?.backdrop_path;
    return backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : '';
  } catch {
    return '';
  }
}

/* =========================
   FETCH POSTER (CARDS)
========================= */
async function fetchPoster(title, year, type) {
  const yearParam = year ? `&year=${year}` : '';
  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(title)}${yearParam}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results?.[0]?.poster_path || null;
  } catch {
    return null;
  }
}

/* =========================
   BUILD HERO
========================= */
async function buildHero() {
  const wrapper = document.getElementById('hero-wrapper');
  for (const item of heroItems) {
    const backdropUrl = await fetchBackdrop(item.title, item.type);
    wrapper.innerHTML += `
      <div class="swiper-slide container">
        <img src="${backdropUrl}" alt="${item.title}" />
        <div class="home-text">
          <span>${item.label}</span>
          <h1>${item.title}</h1>
          <a href="#" class="btn">Watch Now</a>
        </div>
      </div>
    `;
  }
  new Swiper('.home', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
}

/* =========================
   BUILD A CARD
========================= */
function buildCard(title, desc, rating, posterPath) {
  return `
    <div class="swiper-slide box">
      <div class="box-img-swiper">
        <img class="image__img" src="${posterPath ? IMG + posterPath : ''}"
             style="${!posterPath ? 'background:#1a1a1a;' : ''}" alt="${title}">
        <div class="image__overlay image__overlay--blur">
          <h1 class="image__title">${title}</h1>
          ${desc ? `<h2 class="image__description">${desc}</h2>` : ''}
          <p class="imdb_description">${rating}<i class="bx bxs-star"></i><span class="imdb">IMDB</span></p>
        </div>
      </div>
    </div>
  `;
}

/* =========================
   BUILD A SECTION
========================= */
function buildSection(section) {
  const el = document.createElement('section');
  el.classList.add('coming');
  el.id = section.anchorId;

  let html = '';
  if (section.bigHeader) {
    html += `<h1 class="${section.anchorId === 'movies' ? 'movies-header' : 'tvshows-header'}">${section.bigHeader}</h1>`;
  }
  html += `
    <h2 class="heading">${section.heading}</h2>
    <div class="coming-container swiper">
      <div class="swiper-wrapper" data-section-index="${section._index}"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  `;
  el.innerHTML = html;
  return el;
}

/* =========================
   INIT SWIPERS
========================= */
function initSwipers() {
  new Swiper('.coming-container', {
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      568: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      968: { slidesPerView: 5 },
      1168: { slidesPerView: 6 },
      1368: { slidesPerView: 6 },
    },
  });
}

/* =========================
   MAIN INIT
========================= */
async function init() {
  await buildHero();

  sections.forEach((section, i) => {
    section._index = i;
    const el = buildSection(section);
    // Insert before the script tag at the bottom of body
    document.body.appendChild(el);
  });

  initSwipers();

  for (const section of sections) {
    const wrapper = document.querySelector(`[data-section-index="${section._index}"]`);
    for (const item of section.items) {
      const posterPath = await fetchPoster(item.title, item.year, section.type);
      wrapper.innerHTML += buildCard(item.title, item.desc || '', item.rating, posterPath);
      await new Promise((r) => setTimeout(r, 50));
    }
    wrapper.closest('.coming-container').swiper?.update();
  }
}

/* =========================
   HEADER SCROLL
========================= */
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 2);
});

window.onbeforeunload = () => window.scrollTo(0, 0);

/* =========================
   SEARCH
========================= */
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Flatten all items from all sections into one searchable list
const allItems = sections.flatMap((section) => section.items.map((item) => ({ ...item, sectionType: section.type, sectionHeading: section.heading })));

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
    searchResults.style.display = 'none';
  }
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';

  if (!query) {
    searchResults.style.display = 'none';
    return;
  }

  const matches = allItems.filter((item) => item.title.toLowerCase().startsWith(query));

  if (matches.length === 0) {
    searchResults.style.display = 'none';
    return;
  }

  // Deduplicate by title
  const seen = new Set();
  const unique = matches.filter((item) => {
    if (seen.has(item.title)) return false;
    seen.add(item.title);
    return true;
  });

  unique.slice(0, 10).forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('search-result-item');
    div.innerHTML = `
      <img src="" alt="${item.title}" data-fetch="${item.title}" data-year="${item.year || ''}" data-type="${item.sectionType}">
      <div class="result-info">
        <p>${item.title}</p>
        <span>${item.sectionHeading} • ⭐ ${item.rating}</span>
      </div>
    `;
    // Lazy load the thumbnail
    const img = div.querySelector('img');
    fetchPoster(item.title, item.year, item.sectionType).then((path) => {
      if (path) img.src = IMG + path;
    });
    searchResults.appendChild(div);
  });

  searchResults.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#search-bar')) {
    searchResults.style.display = 'none';
    searchBar.classList.remove('open');
    searchInput.value = '';
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
