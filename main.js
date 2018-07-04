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
      this.playerHealthLeft = 100;
      this.monsterHealthLeft = 100;
    },
    attack: function() {
      let monsterDamage = Math.max(Math.floor((Math.random() * 10) + 1), 3);
      this.playerHealthLeft -= monsterDamage;
      this.resultLog.unshift("Monster counter with normal attack damage the player for " + monsterDamage);
      let playerDamage = Math.max(Math.floor((Math.random() * 12) + 1), 3);
      this.monsterHealthLeft -= playerDamage;
      this.resultLog.unshift("Player's normal attack hurt the monster for " + playerDamage);
      if (this.playerHealthLeft <= 0) {
        alert("You have lost!!")
      } else if (this.monsterHealthLeft <= 0) {
        alert("Congratulation!!")
      }
    },
    specialAttack: function() {
      let monsterDamage = Math.max(Math.floor((Math.random() * 24) + 1), 3);
      this.playerHealthLeft -= monsterDamage;
      this.resultLog.unshift("Monster counter with special attack damage the player for " + monsterDamage);
      let playerDamage = Math.max(Math.floor((Math.random() * 20) + 1), 5);
      this.monsterHealthLeft -= playerDamage;
      this.resultLog.unshift("Player's special attack hurt the monster for " + playerDamage);
      if (this.playerHealthLeft <= 0) {
        alert("You have lost!!")
      } else if (this.monsterHealthLeft <= 0) {
        alert("Congratulation!!")
      }
    },
    heal: function() {
      let healAmount = Math.max(Math.floor((Math.random() * 12) + 1), 2);
      this.playerHealthLeft += healAmount;
      this.resultLog.unshift("Player heals himself for " + healAmount);
      let monsterDamage = Math.max(Math.floor((Math.random() * 15) + 1), 5);
      this.playerHealthLeft -= monsterDamage;
      this.resultLog.unshift("Monster continue attacking for " + monsterDamage);
    },
    giveUp: function() {
      alert("Gave up already ?");
      this.resultLog = [];
    }
  }
});
