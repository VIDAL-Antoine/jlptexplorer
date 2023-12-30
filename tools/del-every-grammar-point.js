for (var jlptLevel of ['n1', 'n2', 'n3', 'n4', 'n5']) {
    db[`grammar_points_${jlptLevel.toLowerCase()}`].deleteMany({});
}

