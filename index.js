function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function allPlayers() {
    const game = gameObject();
    const players = {};

    for (let player in game.home.players) {
        players[player] = game.home.players[player];
    }

    for (let player in game.away.players) {
        players[player] = game.away.players[player];
    }

    return players;
}

// 1. Points scored
function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}

// 2. Shoe size
function shoeSize(playerName) {
    return allPlayers()[playerName].shoe;
}

// 3. Team colors
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}

// 4. Team names
function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}

// 5. Player numbers
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}

// 6. Player stats
function playerStats(playerName) {
    return allPlayers()[playerName];
}

// 7. Biggest shoe rebounds
function bigShoeRebounds() {
    const players = Object.values(allPlayers());
    let biggest = players[0];

    for (let player of players) {
        if (player.shoe > biggest.shoe) {
            biggest = player;
        }
    }

    return biggest.rebounds;
}

// BONUS

function mostPointsScored() {
    const players = Object.values(allPlayers());
    return players.reduce((max, player) =>
        player.points > max.points ? player : max
    ).points;
}

function winningTeam() {
    const game = gameObject();

    const teamPoints = team => {
        return Object.values(team.players)
            .reduce((sum, player) => sum + player.points, 0);
    };

    const homePoints = teamPoints(game.home);
    const awayPoints = teamPoints(game.away);

    return homePoints > awayPoints
        ? game.home.teamName
        : game.away.teamName;
}

function playerWithLongestName() {
    const players = Object.keys(allPlayers());
    return players.reduce((longest, name) =>
        name.length > longest.length ? name : longest
    );
}

function doesLongNameStealATon() {
    const players = allPlayers();

    const longestName = playerWithLongestName();
    const maxStealsPlayer = Object.entries(players).reduce((max, [name, stats]) =>
        stats.steals > max[1].steals ? [name, stats] : max
    );

    return longestName === maxStealsPlayer[0];
}
