var TYPE_CHART_RBY = {
    Normal: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 0,
        Dragon: 1
    },
    Grass: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 0.5,
        Water: 2,
        Electric: 1,
        Ice: 1,
        Flying: 0.5,
        Bug: 0.5,
        Poison: 0.5,
        Ground: 2,
        Rock: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Fire: {
        category: 'Special',
        Normal: 1,
        Grass: 2,
        Fire: 0.5,
        Water: 0.5,
        Electric: 1,
        Ice: 2,
        Flying: 1,
        Bug: 2,
        Poison: 1,
        Ground: 1,
        Rock: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Water: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 2,
        Water: 0.5,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 2,
        Rock: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Electric: {
        category: 'Special',
        Normal: 1,
        Grass: 0.5,
        Fire: 1,
        Water: 2,
        Electric: 0.5,
        Ice: 1,
        Flying: 2,
        Bug: 1,
        Poison: 1,
        Ground: 0,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 0.5
    },
    Ice: {
        category: 'Special',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 0.5,
        Electric: 1,
        Ice: 0.5,
        Flying: 2,
        Bug: 1,
        Poison: 1,
        Ground: 2,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2
    },
    Flying: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 1,
        Electric: 0.5,
        Ice: 1,
        Flying: 1,
        Bug: 2,
        Poison: 1,
        Ground: 1,
        Rock: 0.5,
        Fighting: 2,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Bug: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 0.5,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 0.5,
        Bug: 1,
        Poison: 2,
        Ground: 1,
        Rock: 1,
        Fighting: 0.5,
        Psychic: 2,
        Ghost: 0.5,
        Dragon: 1
    },
    Poison: {
        category: 'Physical',
        Normal: 1,
        Grass: 2,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 2,
        Poison: 0.5,
        Ground: 0.5,
        Rock: 0.5,
        Fighting: 1,
        Psychic: 1,
        Ghost: 0.5,
        Dragon: 1
    },
    Ground: {
        category: 'Physical',
        Normal: 1,
        Grass: 0.5,
        Fire: 2,
        Water: 1,
        Electric: 2,
        Ice: 1,
        Flying: 0,
        Bug: 0.5,
        Poison: 2,
        Ground: 1,
        Rock: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Rock: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 2,
        Water: 1,
        Electric: 1,
        Ice: 2,
        Flying: 2,
        Bug: 2,
        Poison: 1,
        Ground: 0.5,
        Rock: 1,
        Fighting: 0.5,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1
    },
    Fighting: {
        category: 'Physical',
        Normal: 2,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 2,
        Flying: 0.5,
        Bug: 0.5,
        Poison: 0.5,
        Ground: 1,
        Rock: 2,
        Fighting: 1,
        Psychic: 0.5,
        Ghost: 0,
        Dragon: 1
    },
    Psychic: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 2,
        Ground: 1,
        Rock: 1,
        Fighting: 2,
        Psychic: 0.5,
        Ghost: 1,
        Dragon: 1
    },
    Ghost: {
        category: 'Physical',
        Normal: 0,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 1,
        Psychic: 0,
        Ghost: 2,
        Dragon: 1
    },
    Dragon: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2
    },
};

var TYPE_CHART_GSC = $.extend(true, {}, TYPE_CHART_RBY, {
    Normal: {
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Grass: {
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Fire: {
        Dark: 1,
        Steel: 2,
        Typeless: 1,
        '???': 1
    },
    Water: {
        Dark: 1,
        Steel: 1,
        Typeless: 1,
        '???': 1
    },
    Electric: {
        Dark: 1,
        Steel: 1,
        Typeless: 1,
        '???': 1
    },
    Ice: {
        Fire: 0.5,
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Flying: {
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Bug: {
        Poison: 0.5,
        Dark: 2,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Poison: {
        Bug: 1,
        Dark: 1,
        Steel: 0,
        Typeless: 1,
        '???': 1
    },
    Ground: {
        Dark: 1,
        Steel: 2,
        Typeless: 1,
        '???': 1
    },
    Rock: {
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Fighting: {
        Dark: 2,
        Steel: 2,
        Typeless: 1,
        '???': 1
    },
    Psychic: {
        Dark: 0,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Ghost: {
        Psychic: 2,
        Dark: 0.5,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Dragon: {
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Dark: {
        category: 'Special',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 0.5,
        Psychic: 2,
        Ghost: 2,
        Dragon: 1,
        Dark: 0.5,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    Steel: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 0.5,
        Water: 0.5,
        Electric: 0.5,
        Ice: 2,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 2,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 0.5,
        Typeless: 1,
        '???': 1
    },
    '???': {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Typeless: 1,
        '???': 1
    },
    Typeless: {
        category: 'Physical',
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Typeless: 1,
        '???': 1
    },
});

var TYPE_CHART_BW = $.extend(true, {}, TYPE_CHART_GSC, {});
delete TYPE_CHART_BW['???'];

var TYPE_CHART_XY = $.extend(true, {}, TYPE_CHART_BW, {
    Normal: {
        Fairy: 1
    },
    Grass: {
        Fairy: 1
    },
    Fire: {
        Fairy: 1
    },
    Water: {
        Fairy: 1
    },
    Electric: {
        Fairy: 1
    },
    Ice: {
        Fairy: 1
    },
    Flying: {
        Fairy: 1
    },
    Bug: {
        Fairy: 0.5
    },
    Poison: {
        Fairy: 2
    },
    Ground: {
        Fairy: 1
    },
    Rock: {
        Fairy: 1
    },
    Fighting: {
        Fairy: 0.5
    },
    Psychic: {
        Fairy: 1
    },
    Ghost: {
        Steel: 1,
        Fairy: 1
    },
    Dragon: {
        Fairy: 0
    },
    Dark: {
        Steel: 1,
        Fairy: 0.5
    },
    Steel: {
        Fairy: 2
    },
    Fairy: {
        Normal: 1,
        Grass: 1,
        Fire: 0.5,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 0.5,
        Ground: 1,
        Rock: 1,
        Fighting: 2,
        Psychic: 1,
        Ghost: 1,
        Dragon: 2,
        Dark: 2,
        Steel: 0.5,
        Typeless: 1,
        Fairy: 1
    },
    Typeless: {
        Fairy: 1
    }
});

var TYPE_CHART_SV = $.extend(true, {}, TYPE_CHART_XY, {
    Normal: {
        Stellar: 1
    },
    Grass: {
        Stellar: 1
    },
    Fire: {
        Stellar: 1
    },
    Water: {
        Stellar: 1
    },
    Electric: {
        Stellar: 1
    },
    Ice: {
        Stellar: 1
    },
    Flying: {
        Stellar: 1
    },
    Bug: {
        Stellar: 1
    },
    Poison: {
        Stellar: 1
    },
    Ground: {
        Stellar: 1
    },
    Rock: {
        Stellar: 1
    },
    Fighting: {
        Stellar: 1
    },
    Psychic: {
        Stellar: 1
    },
    Ghost: {
        Stellar: 1
    },
    Dragon: {
        Stellar: 1
    },
    Dark: {
        Stellar: 1
    },
    Steel: {
        Stellar: 1
    },
    Fairy: {
        Stellar: 1
    },
    Typeless: {
        Stellar: 1
    },
    Stellar: {
        Normal: 1,
        Grass: 1,
        Fire: 1,
        Water: 1,
        Electric: 1,
        Ice: 1,
        Flying: 1,
        Bug: 1,
        Poison: 1,
        Ground: 1,
        Rock: 1,
        Fighting: 1,
        Psychic: 1,
        Ghost: 1,
        Dragon: 1,
        Dark: 1,
        Steel: 1,
        Fairy: 1,
        Typeless: 1,
        Stellar: 1
    },
});