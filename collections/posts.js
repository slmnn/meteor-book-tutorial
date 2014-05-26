// No var keyword because we want 'Posts' to be global
Posts = new Meteor.Collection('posts');

// Allow client side posting
Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});