![cover.jpeg](https://i.imgur.com/dk19hW8.jpeg)

[]{#titlepage.xhtml}

```{=html}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewbox="0 0 1203 1920" preserveaspectratio="none">
```
`<image width="1203" height="1920" xlink:href="cover.jpeg">`{=html}`</image>`{=html}
```{=html}
</svg>
```

[]{#part0001.xhtml}

Contents

[Introduction](#part0001.xhtml#a9H){.class_s9r}

[Supplies](#part0001.xhtml#a9J){.class_s9r}

[Circuit Connections](#part0001.xhtml#a9K){.class_s9r}

[Arduino Software Code](#part0001.xhtml#a9M){.class_s9r}

[Tinkercad Simulation](#part0001.xhtml#a9N){.class_s9r}

[Conclusion](#part0001.xhtml#a9P){.class_s9r}

# Introduction {#part0001.xhtml#a9H .heading_st}

In this project, we will show you how to create the popular T-Rex dinosaur game using an Arduino board and a 16x2 LCD. You might be familiar with this game from Google Chrome, where it appears when you have no internet connection. We\'ve managed to recreate it on Arduino, and now we\'ll guide you through the process. Let\'s dive in!

# Supplies {#part0001.xhtml#a9J .heading_st}

Arduino UNO

16x2 LCD

1K ohm Resistor

2 Pushbuttons - Some Wires

# Circuit Connections {#part0001.xhtml#a9K .heading_st}

To begin, let\'s start with the circuit connections. Here\'s how you can connect the Arduino Uno to the 16x2 LCD using 4 pins of data, enable, and register select:

1\. Arduino Uno:

\- Connect the Arduino Uno board to the 16x2 LCD module.

2\. LCD Connections:

\- Data Pins: Connect the data pins of the LCD module to the corresponding digital pins on the Arduino board.

\- Enable Pin: Connect the enable pin of the LCD module to an Arduino pin.

\- Register Select (RS) Pin: Connect the RS pin of the LCD module to an Arduino pin.

\- Read/Write Pin: Connect the read/write pin of the LCD module to an Arduino pin.

\- Contrast: Connect the contrast pin of the LCD module to the ground.

\- Power Pins: Connect the VCC and ground pins of the LCD module to 5 volts and ground respectively.

3\. Backlight LED:

\- Connect the backlight LED of the LCD module to the VCC pin for power.

\- Connect the negative terminal of the backlight LED to ground through a one kilo ohm resistor.

4\. Game Control:

\- Two Push Buttons: Connect the Enter and Select pushbuttons to Arduino pins 8 and 9 respectively.

\- Connect both push buttons to ground using the internal pull-up function.

::: {#part0001.xhtml#page_4 .class_s1s}
![image_rsrc9W.jpg](https://i.imgur.com/c4orftd.jpeg){.class_s1s1}
:::

# Arduino Software Code {#part0001.xhtml#a9M .heading_st}

Now, let\'s take a look at the code required for the game. Here\'s an overview of the code:

::: {#part0001.xhtml#page_5 .class_s1y}
![image_rsrc9X.jpg](https://i.imgur.com/ouDjNsd.jpeg){.class_s1y1}
:::

1\. Library Inclusion:

\- Include the necessary LCD library to enable communication with the LCD module.

2\. LCD Definition:

\- Define the LCD module and its pin connections.

3\. Bitmap and Character Definitions:

\- Define the bitmap array for the dinosaur character and the character for the tree.

4\. Button and Constant Definitions:

\- Define the buttons (enter and select) and other constants required for the game.

5\. Variable Definitions:

\- Define the variables used in the game.

6\. Initialization:

\- Initialize the LCD module and create special characters for the dinosaur and tree.

7\. Main Loop:

\- The main loop function begins by clearing the LCD.

\- The handle menu function contains the game logic, reading from the two push buttons for menu navigation.

\- The score function prints the score on the LCD.

\- The start game function initiates the game.

\- The game over function is called when the game ends.

\- The function for typing the name is included.

\- The show tree function and the definition for the dinosaur\'s position are provided.

\#include \<LiquidCrystal.h\>

// Defines the pins that will be used for the display

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

//bitmap array for the dino character

byte dino \[8\]

{ B00000,

B00111,

B00101,

B10111,

B11100,

B11111,

B01101,

B01100,

};

//character for the tree

byte tree \[8\]

{

B00011,

B11011,

B11011,

B11011,

B11011,

B11111,

B01110,

B01110

};

const int BUTTON_ENTER = 8;

const int BUTTON_SELECT = 9;

const int MENU_SIZE = 2;

const int LCD_COLUMN = 16;

const int TREE_CHAR = 6;

const int DINO_CHAR = 7;

const String ALPHABET\[26\] = { \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\" };

boolean isPlaying = false;

boolean isShowScore = false;

boolean isDinoOnGround = true;

int currentIndexMenu = 0;

int score = 0;

int scoreListSize = 0;

String scoreList\[20\];

void setup() {

lcd.begin(16, 2);

lcd.createChar(DINO_CHAR, dino);

lcd.createChar(TREE_CHAR, tree);

Serial.begin(9600);

pinMode(BUTTON_ENTER, INPUT_PULLUP);

pinMode(BUTTON_SELECT, INPUT_PULLUP);

}

void loop() {

lcd.clear();

handleMenu();

delay(300);

}

void handleMenu() {

String menu\[MENU_SIZE\] = { \"START\", \"SCORE\" };

for (int i = 0; i \< MENU_SIZE; i++) {

if (i == currentIndexMenu) {

lcd.setCursor(0, i);

lcd.print(\"-\> \");

}

lcd.setCursor(3, i);

lcd.print(menu\[i\]);

}

if (digitalRead(BUTTON_SELECT) == LOW) {

currentIndexMenu = currentIndexMenu == 0 ? 1 : 0;

}

if (digitalRead(BUTTON_ENTER) == LOW) {

currentIndexMenu == 0 ? startGame() : showScore();

}

}

void showScore () {

isShowScore = true;

delay(200);

int currentIndex = 0;

const int lastIndex = scoreListSize - 1;

printScore(currentIndex, lastIndex);

while (isShowScore) {

if (digitalRead(BUTTON_SELECT) == LOW) {

currentIndex = currentIndex \< lastIndex ? currentIndex + 1 : 0;

printScore(currentIndex, lastIndex);

}

if (digitalRead(BUTTON_ENTER) == LOW) {

isShowScore = false;

}

delay(200);

}

}

void printScore(int index, int lastIndex) {

lcd.clear();

if (lastIndex == -1) {

lcd.print(\"NO SCORE\");

}

else {

lcd.print(scoreList\[index\]);

if (index \< lastIndex) {

lcd.setCursor(0, 1);

lcd.print(scoreList\[index + 1\]);

}

}

}

void startGame () {

isPlaying = true;

while (isPlaying) {

handleGame();

}

}

void handleGame() {

lcd.clear();

int buttonPressedTimes = 0;

// Generate two random distances for the space between the trees

int secondPosition = random(4, 9);

int thirdPosition = random(4, 9);

int firstTreePosition = LCD_COLUMN;

const int columnValueToStopMoveTrees = -(secondPosition + thirdPosition);

// this loop is to make the trees move, this loop waiting until

// all the trees moved

for (; firstTreePosition \>= columnValueToStopMoveTrees; firstTreePosition\--) {

lcd.setCursor(13, 0);

lcd.print(score);

defineDinoPosition();

int secondTreePosition = firstTreePosition + secondPosition;

int thirdTreePosition = secondTreePosition + thirdPosition;

showTree(firstTreePosition);

showTree(secondTreePosition);

showTree(thirdTreePosition);

if (isDinoOnGround) {

if (firstTreePosition == 1 \|\| secondTreePosition == 1 \|\| thirdTreePosition == 1) {

handleGameOver();

delay(5000);

break;

}

buttonPressedTimes = 0;

} else {

if (buttonPressedTimes \> 3) {

score -= 3;

}

buttonPressedTimes++;

}

score++;

delay(500);

}

}

void handleGameOver () {

lcd.clear();

lcd.print(\"GAME OVER\");

lcd.setCursor(0, 1);

lcd.print(\"SCORE: \");

lcd.print(score);

delay(2000);

saveScore();

}

void saveScore () {

lcd.clear();

String nick = \"\";

int nameSize = 0;

int alphabetCurrentIndex = 0;

lcd.print(\"TYPE YOUR NAME\");

while (nameSize != 3) {

lcd.setCursor(nameSize, 1);

lcd.print(ALPHABET\[alphabetCurrentIndex\]);

if (digitalRead(BUTTON_SELECT) == LOW) {

alphabetCurrentIndex = alphabetCurrentIndex != 25 ? alphabetCurrentIndex + 1 : 0;

}

if (digitalRead(BUTTON_ENTER) == LOW) {

nick += ALPHABET\[alphabetCurrentIndex\];

nameSize++;

alphabetCurrentIndex = 0;

}

delay(300);

}

scoreList\[scoreListSize\] =  nick + \" \" + score;

scoreListSize++;

isPlaying = false;

score = 0;

}

void showTree (int position) {

lcd.setCursor(position, 1);

lcd.write(TREE_CHAR);

// clean the previous position

lcd.setCursor(position + 1, 1);

lcd.print(\" \");

}

void defineDinoPosition () {

int buttonState = digitalRead(BUTTON_ENTER);

buttonState == HIGH ? putDinoOnGround() : putDinoOnAir();

}

void putDinoOnGround () {

lcd.setCursor(1, 1);

lcd.write(DINO_CHAR);

lcd.setCursor(1, 0);

lcd.print(\" \");

isDinoOnGround = true;

}

void putDinoOnAir () {

lcd.setCursor(1, 0);

lcd.write(DINO_CHAR);

lcd.setCursor(1, 1);

lcd.print(\" \");

isDinoOnGround = false;

}

# Tinkercad Simulation {#part0001.xhtml#a9N .heading_st}

Now, let\'s start the Tinkercad simulation of the game. The simulation includes buttons for select and enter, which can be used to move the dinosaur over the obstacles. The simulation showcases the game over state, typing the name, and displaying the score.

::: {#part0001.xhtml#page_17 .class_s1s}
![image_rsrc9Y.jpg](https://i.imgur.com/Mff4FdI.jpeg){.class_s3}
:::

# Conclusion {#part0001.xhtml#a9P .heading_st}

Congratulations! You have successfully created the T-Rex dinosaur game using Arduino and a 16x2 LCD. In this guide, we covered the circuit connections, provided the necessary code, and demonstrated the game.
