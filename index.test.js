const translateToPigLatinSentence = require("./index");

test("Expected 'hello' to be translated to 'ellohay'.", () => {
  expect(translateToPigLatinSentence("hello")).toBe("ellohay");
});

test("Expected 'eat' to be translated to 'eatway'.", () => {
  expect(translateToPigLatinSentence("eat")).toBe("eatway");
});

test("Expected 'yellow' to be translated to 'yellowway'.", () => {
  expect(translateToPigLatinSentence("yellow")).toBe("yellowway");
});

test("Expected 'yellow' to be translated to 'ellowyay'.", () => {
  expect(translateToPigLatinSentence("yellow")).toBe("ellowyay");
});

test("Expected 'eat world' to be translated to 'eatway orldway'.", () => {
  expect(translateToPigLatinSentence("eat world")).toBe("eatway orldway");
});

test("Expected 'Hello' to be translated to 'Ellohay'.", () => {
  expect(translateToPigLatinSentence("Hello")).toBe("Ellohay");
});

test("Expected 'Apples' to be translated to 'Applesway'.", () => {
  expect(translateToPigLatinSentence("Apples")).toBe("Applesway");
});

test("Expected 'eat… world?!' to be translated to 'eatway… orldway?!'.", () => {
  expect(translateToPigLatinSentence("eat… world?!")).toBe("eatway… orldway?!");
});

test("Expected 'school' to be translated to 'oolschay'.", () => {
  expect(translateToPigLatinSentence("school")).toBe("oolschay");
});

test("Expected 'quick' to be translated to 'ickquay'.", () => {
  expect(translateToPigLatinSentence("quick")).toBe("ickquay");
});

test("Expected 'quick' to be translated to 'uickqay'.", () => {
  expect(translateToPigLatinSentence("quick")).toBe("uickqay");
});

test("Expected 'she’s great!' to be translated to 'e’sshay eatgray!'.", () => {
  expect(translateToPigLatinSentence("she’s great!")).toBe("e’sshay eatgray!");
});

test("Expected 'HELLO' to be translated to 'ELLOHAY'.", () => {
  expect(translateToPigLatinSentence("HELLO")).toBe("ELLOHAY");
});

test("Expected 'Hello There' to be translated to 'Ellohay Erethay'.", () => {
  expect(translateToPigLatinSentence("Hello There")).toBe("Ellohay Erethay");
});
