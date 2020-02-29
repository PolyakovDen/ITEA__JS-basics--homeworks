function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    
    if (obj1 === null || obj2 === null) {
        return false;
    }
    
    if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined' ) {
        return false;
	}
    
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
		if (Object.keys(obj1).length !== Object.keys(obj2).length) {
			if (Object.keys(obj1) !== Object.keys(obj2) && Object.values(obj1) !== Object.values(obj2)) {
				return false;
			}
			return false;
		}
		for (var key in obj1) {
			if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
				if (obj1[key].toString() !== obj2[key].toString()) {
					return false;
				}
				return true;
			}

			if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
				if (obj1[key] !== obj2[key]) {
					return false;
				}
			}

			if (!deepEqual(obj1[key], obj2[key])) {
				return false;
			}
		}
		return true;
    }
    
    return false;
}
    
var first = {
    name: "Dima",
    age: 25,
    isAdmin: true,
    canSpeak: true,
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        mother: {
            name: "Катя",
            hobbies: ["Пляж", "Фото", "Море"],
            friends: [
                {
                    name: "Петр",
                    age: 49
                }
            ]
        },
        father: {
            name: "Виктор",
            hobbies: ["Бег", "Солнце", "Туризм"],
            friends: [
                {
                    name: "Алексей",
					age: 40,
					get : function(q, w) {
						return q * w;
					}
                }
            ]
        }
	},
	sum : function(a, b) {
		return a + b;
	}
};

var second = {
    name: "Dima",
    age: 25,
    isAdmin: true,
    canSpeak: true,
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        mother: {
            name: "Катя",
            hobbies: ["Пляж", "Фото", "Море"],
            friends: [
                {
                    name: "Петр",
                    age: 49
                }
            ]
        },
        father: {
            name: "Виктор",
            hobbies: ["Бег", "Солнце", "Туризм"],
            friends: [
                {
                    name: "Алексей",
					age: 40,
					get : function(q, w) {
						return q * w;
					}
                }
            ]
        }
	},
	sum : function(a, b) {
		return a + b;
	},
};

console.log(deepEqual(first, second));