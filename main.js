new Vue({
  el: "#app",
  data: {
    isShown: false,
    playerHealthLeft : 100,
    monsterHealthLeft: 100,
    resultLog: [],
  },
  methods: {
    starNewGame: function() {
      this.resultLog = [];
      this.isShown = true;
      this.playerHealthLeft = 100;
      this.monsterHealthLeft = 100;
    },
    attack: function() {
      let playerDamage = this.damageCalculator(3, 12);
      this.monsterHealthLeft -= playerDamage;
      this.resultLog.unshift("Player's normal attack hurt the monster for " + playerDamage);
      this.monsterAttack();
      this.winCondition();
    },
    specialAttack: function() {
      let playerDamage = this.damageCalculator(3, 24);
      this.monsterHealthLeft -= playerDamage;
      this.resultLog.unshift("Player's special attack hurt the monster for " + playerDamage);
      this.monsterAttack();
      this.winCondition();
    },
    heal: function() {
      let healAmount = this.damageCalculator(2,12);
      this.playerHealthLeft += healAmount;
      this.resultLog.unshift("Player heals himself for " + healAmount);
      this.monsterAttack();
      this.winCondition();
    },
    giveUp: function() {
      this.playerHealthLeft = 0;
      this.winCondition();
    },
    monsterAttack : function() {
      let monsterDamage = this.damageCalculator(3, 12);
      this.playerHealthLeft -= monsterDamage;
      this.resultLog.unshift("Monster counter attack and damage the player for " + monsterDamage);
    },
    damageCalculator: function(min, max) {
      return Math.max(Math.floor((Math.random() * max) + 1), min);
    },
    winCondition: function() {
      if (this.playerHealthLeft <= 0) {
        alert("You have lost!!")
        this.starNewGame();
      } else if (this.monsterHealthLeft <= 0) {
        alert("Congratulation!!")
        this.starNewGame();
      }
    }
  }
});
