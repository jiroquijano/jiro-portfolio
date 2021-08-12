const officeItemPositions =  {
    boards: [{posX: 50, posY: 0, width: 126, height: 100, collision: false}],
    emptyBoards: [{posX: 345, posY: 166, width: 126, height: 100, collision: false, zIndex: 167}],
    sideWalls: [
        {posX: 214, posY: 120, width: 25, height: 65, collision: false},
        {posX: 214, posY: 330, width: 25, height: 65, collision: false},
        {posX: 632, posY: 126, width: 25, height: 175, collision: true},
    ],
    walls: [
        {posX: 0, posY: 390, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
        {posX: 0, posY: 180, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
        {posX: 632, posY: 298, width: 357, height: 100, collision: true, border:'2px #3a3a4f solid'},
    ],
    couches: [
        {posX: 743, posY: 348, width: 180, height: 107, collision: true}
    ],
    receptions: [
        {posX: 480, posY: 380, width: 200, height: 120, collision: true}
    ],
    vendos: [
        {posX: 900, posY: 0, width: 89, height: 120, collision: true},
        {posX: 810, posY: 0, width: 89, height: 120, collision: true}
    ],
    windows: [
        {posX: 250, posY: 10, width: 180, height: 67, collision: false},
        {posX: 432, posY: 10, width: 180, height: 67, collision: false}
    ],
    sinks: [
        {posX: 705, posY: 24, width: 100, height: 85, collision: true, zIndex: 1}
    ],
    leftSofas: [
        {posX: 655, posY: 200, width: 54, height: 100, collision: true},
        {posX: 824, posY: 200, width: 54, height: 100, collision: true},
    ],
    rightSofas: [
        {posX: 770, posY: 200, width: 54, height: 100, collision: true},
        {posX: 939, posY: 200, width: 54, height: 100, collision: true},
    ],
    tables: [
        {posX: 60, posY: 120, width: 102, height: 80, collision: true},
        {posX: 10, posY: 330, width: 102, height: 80, collision: true},
        {posX: 107, posY: 330, width: 102, height: 80, collision: true},
        {posX: 330, posY: 260, width: 102, height: 80, collision: true},
        {posX: 330, posY: 166, width: 102, height: 80, collision: true},
        {posX: 429, posY: 260, width: 102, height: 80, collision: true},
        {posX: 429, posY: 166, width: 102, height: 80, collision: true},
    ],
    backChairs: [
        {posX: 130, posY: 340, width: 55, height: 75, collision: true},
        {posX: 30, posY: 340, width: 55, height: 75, collision: true},
        {posX: 350, posY: 275, width: 55, height: 75, collision: true},
        {posX: 460, posY: 175, width: 55, height: 75, collision: true},
    ],
    leftLaptops: [
        {posX: 18, posY: 315, width: 30, height: 50, collision: false, zIndex: 330},
    ],
    frontLaptops: [
        {posX: 165, posY: 320, width: 30, height: 39, collision: false, zIndex: 330},
        {posX: 115, posY: 115, width: 30, height: 39, collision: false, zIndex: 330}
    ],
    plant1s: [
        {posX: 690, posY: 360, width: 40, height: 78, collision: true},
        {posX: 937, posY: 360, width: 40, height: 78, collision: true}
    ],
    plant2s: [
        {posX: 0, posY: 440, width: 50, height: 80, collision: true},
        {posX: 0, posY: 512, width: 50, height: 80, collision: true},
    ],
    infoStands: [
        {posX: 170, posY: 411, width: 59, height: 100, collision: true}
    ],
    rails: [
        {posX: 63, posY: 460, width: 100, height: 48, collision: true, zIndex: 430}
    ],
    dividers: [
        {posX: 239, posY: 448, width: 172, height: 51, collision: true, zIndex: 430}
    ],
    painting1s: [
        {posX: 127, posY: 415, width: 35, height: 50, collision: false}
    ],
    certificates: [
        {posX: 65, posY: 425, width: 60, height: 30, collision: false}
    ],
    shelves: [
        {posX: 20, posY: 238, width: 100, height: 39, collision: false, zIndex: 200}
    ],
    phones: [
        {posX: 25, posY: 235, width: 40, height: 31, collision: false, zIndex: 200}
    ]
}

export default officeItemPositions;