import displayStyledText from './utils/displayStyledText.js';
import pointInsideRectangle from './utils/pointInsideRectangle.js';
import throttleProperty from './utils/throttleProperty.js';
import wrapTextLines from './utils/wrapTextLines.js';

class DialogBox {
  constructor(game, quest = {}) {
    this.game = game;
    this.quest = quest;
    if (quest.status === 'toTake') {
      this.npcDialog = wrapTextLines(quest.dialogToTakeQuest.npcDialog, 35);
      this.playerAnswers = quest.dialogToTakeQuest.answers;
    }
    else if (quest.status === 'active'){
      this.npcDialog = wrapTextLines(quest.dialogsDependentOnQuestState[quest.currentObjectiveIndex].npcDialog);
      this.playerAnswers = quest.dialogsDependentOnQuestState[quest.currentObjectiveIndex].answers;
    }
    else {
      this.npcDialog = 'Dodaj jakieś losowe dialogi';
    }
    this.sprite = new Image(800, 300);
    this.sprite.src = 'img/dialogbox.png';
    this.dialogState = true;
    this.answerState = false;
    this.textLinesCounter = 0;
    this.chosenAnswer = false;
    this.hoverAnswer;
    this.game.player.canMove = false;
    throttleProperty(this.game.player, 'canToggleWindow', false, 1000);
    this.game.input.subscribeSignal('click', this.onClick, this, 'dialogBoxClick');
    this.game.sceneManager.currentScene.activeNpc.canMove = false;
    this.game.sceneManager.currentScene.activeNpc.isActiv = true;
  }
  update(ctx) {
    if (this.dialogState) {
      if (this.game.input.keyboard.space.isDown && this.game.player.canToggleWindow) {
        this.textLinesCounter += 5;
        throttleProperty(this.game.player, 'canToggleWindow', false, 500);
        if (this.textLinesCounter >= this.npcDialog.length) {
          this.dialogState = false;
          if (this.playerAnswers) {
            this.answerState = true;
          }
        }
      }
    }
    else if (this.answerState && !this.chosenAnswer) {
      this.hoverAnswer = null;
      for (let i = 0; i < this.playerAnswers.length; i++) {
        if (pointInsideRectangle(
          this.game.input.mouse.x,
          this.game.input.mouse.y,
          {x: 152, y: 496 + i * 28, width: 696, height: 28}
        )) {
          this.hoverAnswer = i + 1;
        }
      }
      if (this.playerAnswers[0] && this.game.input.keyboard['1'].isDown) {
        this.onChooseAnswer(0);
      }
      else if (this.playerAnswers[1] && this.game.input.keyboard['2'].isDown) {
        this.onChooseAnswer(1);
      }
      else if (this.playerAnswers[2] && this.game.input.keyboard['3'].isDown) {
        this.onChooseAnswer(2);
      }
      else if (this.playerAnswers[3] && this.game.input.keyboard['4'].isDown) {
        this.onChooseAnswer(3);
      }
    }
    else {
      this.terminate();
    }
    this.draw(ctx);
  }
  draw(ctxHUD) {
    ctxHUD.drawImage(this.sprite, 100, 410, this.sprite.width, this.sprite.height);
    ctxHUD.fillStyle = 'white';
    ctxHUD.font = '22px Georgia';
    if (this.dialogState) {
      for (let i = this.textLinesCounter; i <= this.textLinesCounter + 4 && i < this.npcDialog.length; i++) {
        const row = this.npcDialog[i];
        let x = 175;
        const y = i * 30 + 516;
        displayStyledText(row, ctxHUD, x, y);
      }
      ctxHUD.fillText('<Spacja>', 460, 653);
    }
    else if (this.answerState && !this.chosenAnswer) {
      if (this.hoverAnswer) {
        ctxHUD.save();
        ctxHUD.globalAlpha = 0.6;
        ctxHUD.fillStyle = 'black';
        ctxHUD.fillRect(152, 496 + (this.hoverAnswer - 1) * 30, 696, 28);
        ctxHUD.restore();
      }
      for (let i = 0; i < this.playerAnswers.length; i++) {
        ctxHUD.fillText(this.playerAnswers[i].response, 175, 516 + 30 * i);
      }
    }
  }
  onClick({x, y}) {
    for (let i = 0; i < this.playerAnswers.length; i++) {
      if (pointInsideRectangle(
        x,
        y,
        {x: 152, y: 496 + i * 28, width: 696, height: 28}
      )) {
        this.onChooseAnswer(i);
      }
    }
  }
  onChooseAnswer(answerIndex) {
    this.chosenAnswer = true;
    for (const consequence of this.playerAnswers[answerIndex].consequences) {
      this.responseToAnswer(consequence.action, consequence.value);
    }
  }
  terminate() {
    this.game.player.canMove = true;
    this.game.sceneManager.currentScene.activeNpc.canMove = true;
    this.game.sceneManager.currentScene.activeNpc.isActiv = false;
    throttleProperty(this.game.player, 'canToggleWindow', false, 1000);
    this.game.input.removeCallback('dialogBoxClick', 'click');
    this.game.sceneManager.currentScene.activDialogBox = null;
  }
  responseToAnswer(action, value) {
    switch (action) {
      case 'end dialog':
        break;
      case 'accept quest':
        this.quest.status = 'active';
        this.quest.currentObjectiveIndex = 0;
        this.game.console.addMessage('Przyjęto zadanie: ' + this.quest.name);
        this.game.sceneManager.currentScene.activeNpc.hasQuestExclamationMark = false;
        break;
      default: break;
    }
  }
  checkDialogCondition(condition) {
    switch (condition) {
      case 'persuasion':
        return this.game.player.skills.skillCheck('persuasion');
      default:
        return;
    }
  }
}

export default DialogBox;
