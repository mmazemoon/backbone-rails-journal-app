window.JournalApp = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new JournalApp.Routers.Posts({ $rootEl: $("#content") });
    var newCollection = new JournalApp.Collections.Posts();
    newCollection.fetch();
    var indexView = new JournalApp.Views.PostsIndex({collection: newCollection});

    $("#sidebar").html(indexView.render().$el);

    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
