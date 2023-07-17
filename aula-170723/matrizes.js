// const vetores = [1, 2, 3, 4, 5];


// const vetor1 = [2, 4, 6, 8, 0]; //unidimensional
// const vetor2 = [1, 9, 6, 8, 7];
// const vetor3 = [5, 3, 2, 1, 0];


// const matriz = [vetores, vetor1, vetor2, vetor3]; // bidimensional

// console.log(matriz[1][0]);


const matriz3d = [ //matriz dentro de uma matriz que tem dentro vetores
    [
        [1,2], [3, 4]
    ],
    [
        [5, 6], [7, 8]
    ]
]
for (let x = 0; x < matriz3d.length;x++) {
    for (let y = 0; y < matriz3d[x].length; y++) {
        for (let z = 0; z < matriz3d[x][y].length; z++) {
            console.log(matriz3d[x][y][z]);
        }
    }
}

// console.log(matriz3d[1][0][0]); // Primeiro é o acesso que escolhe qual matriz roxa, segundo escolhe qual dos elementos dentro da matriz, terceiro escolhe o indice


const matriz3x3 = [
    [1, 0 ,4],
    [6, 5, 9],
    [2, 3, 7]
]

// console.log(matriz3x3[0][0]);
// console.log(matriz3x3[2][2]);

for (let x = 0; x < matriz3x3.length;x++) {
        for(let y = 0; y < matriz3x3[x].length; y++) {
            console.log(matriz3x3[x][y]);
        }
}