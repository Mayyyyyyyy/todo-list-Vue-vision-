var app = new Vue({
    el: "#app",
    data: {
        items: [],
        value:[],
    },
    methods: {
      submit: function(){
          this.items.push(this.value);
          this.value=[];
      },
      remove:function(index){
          this.items.splice(index,1);
      },
      clear: function(){
          this.items=[];
      }
    }

})