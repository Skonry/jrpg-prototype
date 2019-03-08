class Pet {
  constructor(game, spriteFile, x, y, width, height) {
    this.game = game;
    this.sprite = new Image(width, height);
    this.sprite.src = spriteFile;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 4;
    this.name;
    this.isJumping = true;
    this.isFalling = false;
    this.jumpHeightVar = 0;
    this.isMimicPlayerMoves = false;
  }
  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.x - this.width / 2,
      (this.y - this.height / 2) + this.jumpHeightVar,
      this.width,
      this.height
    );
  }
  update() {
    if (calculateDistance(this, this.game.player) > 150 ) {
      this.mimicPlayerMove();
    }
    else {
      this.isMimicPlayerMoves = false;
    }
    if (this.isMimicPlayerMoves) {
      if (this.isJumping) {
        this.jumpHeightVar += 2;
        if(this.jumpHeightVar > 50){
          this.isJumping = false;
          this.isFalling = true;
        }
      }
      if (this.isFalling) {
        this.jumpHeightVar -= 2;
        if (this.jumpHeightVar < 0) {
          this.isFalling = false;
          this.isJumping = true;
        }
      }
    }
    this.draw();
  }
  mimicPlayerMove() {
    this.isMimicPlayerMoves = true;
    this.x += this.game.player.lastMove.x;
    this.y += this.game.player.lastMove.y;
  }
}

export default Pet;
