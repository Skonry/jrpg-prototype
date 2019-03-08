class Quest {
  constructor(game, questData, status, currentObjectiveIndex, aimCounter) {
    this.game = game;
    this.name = questData.name;
    this.reward = questData.reward;
    this.objectives = questData.objectives;
    this.requirements = questData.requirements;
    this.ownerName = questData.ownerName;
    this.dialogToTakeQuest = questData.dialogToTakeQuest;
    this.dialogsDependentOnQuestState = questData.dialogsDependentOnQuestState;
    this.currentObjectiveIndex = currentObjectiveIndex;
    this.aimCounter = aimCounter;
    this.id = questData.id;
    this.status = status;
  }
  update(msg) {
    if (this.status === 'finished') {
      return;
    }
    if (
      msg.action === this.objectives[this.currentObjectiveIndex].action &&
      msg.target === this.objectives[this.currentObjectiveIndex].target
    ) {
      this.aimCounter++;
      if (this.aimCounter >= this.objectives[this.currentObjectiveIndex].number) {
        this.currentObjectiveIndex++;
        if (!this.objectives[this.currentObjectiveIndex]) {
          this.complete();
        }
        else {
          this.aimCounter = 0;
        }
      }
    }
  }
  complete() {
    console.log('TODO: implement complete quest');
    /*
    this.currentObjectiveIndex++;
    this.game.player.exp += this.reward.exp;
    this.game.player.gold += this.reward.gold;
    this.active = false;
    this.finished = true;
    this.status = 2;
    this.game.console.addMessage(
      "Wykonano zadanie " + this.name + ". Otrzymano " +
      this.reward.gold + " sztuk złota i " +
      this.reward.exp + " punktów doświadczenia."
    );
    */
  }
}

export default Quest;
