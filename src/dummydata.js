const tournamentSample = {
    date: "Sat Nov 20 2021",
    place: "@Westside",
    desc: [
        "All that was to be followed by an *epic* round robin. There were 6 groups in the First Division, and 7 groups in the Second Division. For a second consecutive Saturday, Alex Xue won Div. 2 in an almost flawless performance, defeating several previous Div 2 champions in the process.",
        "The matches in Div. 1 were amazing. Perhaps fueled by the excitement of the warm-up matches with our visitor from Finland, the guys played at an outstandingly high level. Each of the players in the quarter finals could have been potential winners, and both semis went to the fifth game at the end of which the players were exhausted.",
        "There was still a final to play! Once more highlighting the fact that table tennis can be played at a high level for a long, long time, Kevin in an energetic performance defeated players half his age to reach the final, dealing Yuhang his first defeat at a Westside Round Robin in his semifinal match.",
        "In the final both players managed to muster the energy to play a tight match. Here are the results:",
    ],
};

const matchesDivision1 = [
    {
        id: 1,
        nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        //tournamentRoundText: "4", // Text for Round Header
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "takato_tsuchiya", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Takato Tsuchiya",
            },
            {
                id: "kevin_choe",
                resultText: "1",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Kevin Choe",
            },
        ],
    },
    {
        id: 2,
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "li_yuhang", // Unique identifier of any kind
                resultText: "2", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Li Yuhang",
            },
            {
                id: "kevin_choe",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Kevin Choe",
            },
        ],
    },
    {
        id: 3,
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "takato_tsuchiya", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Takato Tsuchiya",
            },
            {
                id: "alex_wu",
                resultText: "2",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Alex Wu",
            },
        ],
    },
    {
        id: 4,
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "li_yuhang", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Li Yuhang",
            },
            {
                id: "david_chow",
                resultText: "2",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "David Chow",
            },
        ],
    },
    {
        id: 5,
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "kevin_choe", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Kevin Choe",
            },
            {
                id: "luigi_guslandi",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Luigi Guslandi",
            },
        ],
    },
    {
        id: 6,
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "alex_wu", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Alex Wu",
            },
            {
                id: "kevin_huang",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Kevin Huang",
            },
        ],
    },
    {
        id: 7,
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "robert_hershey", // Unique identifier of any kind
                resultText: "1", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Robert Hershey",
            },
            {
                id: "takato_tsuchiya",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Takato Tsuchiya",
            },
        ],
    },
    {
        id: 8,
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 9,
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 10,
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 11,
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "luigi_guslandi", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Luigi Guslandi",
            },
            {
                id: "han_hongbo",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Han Hongbo",
            },
        ],
    },
    {
        id: 12,
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 13,
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "kyaw_hsu_thway", // Unique identifier of any kind
                resultText: "0", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Kyaw Hsu Thway",
            },
            {
                id: "kevin_huang",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Kevin Huang",
            },
        ],
    },
    {
        id: 14,
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 15,
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
];
const matchesDivision2 = [
    {
        id: 1,
        nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        //tournamentRoundText: "4", // Text for Round Header
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "alex_xue", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Alex Xue",
            },
            {
                id: "amar_potturi",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Amar Potturi",
            },
        ],
    },
    {
        id: 2,
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "alfred_graham", // Unique identifier of any kind
                resultText: "0", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Alfred Graham",
            },
            {
                id: "alex_xue",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Alex Xue",
            },
        ],
    },
    {
        id: 3,
        nextMatchId: 1, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "lipton_ellner", // Unique identifier of any kind
                resultText: "2", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Lipton Ellner",
            },
            {
                id: "amar_potturi",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Amar Potturi",
            },
        ],
    },
    {
        id: 4,
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "alfred_graham", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Alfred Graham",
            },
            {
                id: "lin_yuyuan",
                resultText: "2",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Lin Yuyuan",
            },
        ],
    },
    {
        id: 5,
        nextMatchId: 2, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "yukiko_ishiwata", // Unique identifier of any kind
                resultText: "1", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Yukiko Ishiwata",
            },
            {
                id: "alex_xue",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Alex Xue",
            },
        ],
    },
    {
        id: 6,
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "soe_htike", // Unique identifier of any kind
                resultText: "2", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Soe Htike",
            },
            {
                id: "lipton_ellner",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Lipton Ellner",
            },
        ],
    },
    {
        id: 7,
        nextMatchId: 3, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "Quarter-final",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "amar_potturi", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Amar Potturi",
            },
            {
                id: "stan_sokol",
                resultText: "1",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Stan Sokol",
            },
        ],
    },
    {
        id: 8,
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 9,
        nextMatchId: 4, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "lin_yuyuan", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Lin Yuyuan",
            },
            {
                id: "denise_russo",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Denise Russo",
            },
        ],
    },
    {
        id: 10,
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "yukiko_ishiwata", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Yukiko Ishiwata",
            },
            {
                id: "jason",
                resultText: "2",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Jason",
            },
        ],
    },
    {
        id: 11,
        nextMatchId: 5, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 12,
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
    {
        id: 13,
        nextMatchId: 6, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "lipton_ellner", // Unique identifier of any kind
                resultText: "3", // Any string works
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Lipton Ellner",
            },
            {
                id: "vik_jayakumar",
                resultText: "0",
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Vik Jayakumar",
            },
        ],
    },
    {
        id: 14,
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                id: "shervin_rafie", // Unique identifier of any kind
                resultText: "2", // Any string works
                isWinner: false,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "Shervin Rafie",
            },
            {
                id: "amar_potturi",
                resultText: "3",
                isWinner: true,
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "Amar Potturi",
            },
        ],
    },
    {
        id: 15,
        nextMatchId: 7, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
        tournamentRoundText: "1",
        state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
                name: "BYE",
            },
            {
                status: "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
                name: "BYE",
            },
        ],
    },
];

export { matchesDivision1, matchesDivision2, tournamentSample };
