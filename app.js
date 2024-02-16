const fs = require('fs');

function main() {

    const allCombinations = generateCombinations(list1, list2);
    fs.writeFileSync('result.txt', allCombinations.join('\n'));

    console.log("DONE!")
}

const list1 = readListFromFile('list1.txt');
const list2 = readListFromFile('list2.txt');

function readListFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    return [];
  }
}

function generateCombinations(list1, list2) {
  const combinations = [];
  for (const item1 of list1) {
    for (const item2 of list2) {
      combinations.push(item1 + item2);
    }
  }
  return combinations;
}

// RUN
main()