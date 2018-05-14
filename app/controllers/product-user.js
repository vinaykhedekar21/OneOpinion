import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    startQuiz:function(name){
      localStorage.setItem('pName', name);
      this.transitionToRoute('questionset')
    }
  }
});
