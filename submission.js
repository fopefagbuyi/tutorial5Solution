
/**
 * Task 1: Var and Scope
 * Calculates the average grade after late penalties
 * and returns the ID of the last graded assignment.
 */
function summarizeGrades(assignments) {
    let sum = 0;
    const count = assignments.length;

    // The late penalty is 20 percentage points per day.
    const LATE_PENALTY_PER_DAY = 20;

    // Declare assignment outside the loop so it remains accessible.
    let assignment;

    for (let i = 0; i < count; i++) {
        assignment = assignments[i];
        let grade = assignment.grade;

        if (assignment.daysLate > 0) {
            const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;

            // The minimum grade allowed is 0.
            grade = grade - latePenalty >= 0 ? grade - latePenalty : 0;
        }

        sum += grade;
    }

    const lastGraded = assignment;

    return {
        average: sum / count,
        lastGraded: lastGraded.id
    };
}


/**
 * Task 2: Closures
 * Returns a function that counts occurrences of a letter.
 * Capitalization is ignored only when requested.
 */
let letterCounter = function (letter, ignoreCapitalization) {
    return function (word) {
        let count = 0;

        // Convert both values to lowercase if capitalization is ignored.
        const targetLetter = ignoreCapitalization
            ? letter.toLowerCase()
            : letter;

        const targetWord = ignoreCapitalization
            ? word.toLowerCase()
            : word;

        for (let i = 0; i < targetWord.length; i++) {
            if (targetWord[i] === targetLetter) {
                count++;
            }
        }

        return count;
    };
};


/**
 * Creates a character with private farming and fishing skills.
 * Both skills start at 0 and cannot exceed 10.
 */
function makeCharacter(characterName) {
    let farmingSkill = 0;
    let fishingSkill = 0;

    // Increase the specified skill by 1, up to a maximum of 10.
    let levelUp = function (skill) {
        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < 10) {
            fishingSkill++;
        }
    };

    // Return the level of the requested skill.
    let showSkill = function (skill) {
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }
    };

    return {
        name: characterName,
        levelUp,
        showSkill
    };

    
}

// Task 1
const assignments = [
    { id: "1234", grade: 80, daysLate: 2 },
    { id: "5678", grade: 50, daysLate: 0 },
    { id: "9876", grade: 30, daysLate: 2 }
];

console.log(summarizeGrades(assignments));

// Task 2 - Letter Counter
const countA = letterCounter("a", false);
console.log(countA("Banana"));

const countAllA = letterCounter("a", true);
console.log(countAllA("BANANA"));

// Task 2 - Character
const player = makeCharacter("Alex");

