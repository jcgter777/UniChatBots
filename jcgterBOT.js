var jcgterBOT = new Bot("jcgterBOT", "~");

function initializeBots() {
  jcgterBOT.register();
}

jcgterBOT.executeCommand = function(data) {
  var poster = data.poster;
  var message = data.message;
  var rawMessage = data.rawMessage;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
  function getArgs(m) {
    return m.split(' ');
  }
  if (message.startsWith("hello"))
    jcgterBOT.respond(poster + ": Hello to you too!");
  
  if (message.startsWith("i am sad"))
    jcgterBOT.respond(poster + ": Awww.");

  if (message.startsWith("jcgterinfo"))
    jcgterBOT.respond(poster + ": jcgterBOT is a bot made by jcgter777 on 1/20/2018 for the great UniChat!");

  if (message.startsWith("botssuck"))
    jcgterBOT.respond("That is RUDE, mean, and wrong.");

  if (message.startsWith("tanner"))
    jcgterBOT.respond("Stop abusing the bot.");

  if (message.startsWith("unichat"))
    jcgterBOT.respond("UniChat++ is awesome!");

  if (message.startsWith("botabuse"))
    jcgterBOT.respond("Stop abusing the bots.");

  if (message.startsWith("ninja'd"))
    jcgterBOT.respond("Someone typed faster to express the same sentiment.");

  if (message.startsWith("capslock") || message.startsWith("caps"))
    jcgterBOT.respond("Pro tip: The [caps lock] key to the left ot [a] allows you to type lowercase letters.");

  if (message.startsWith("kiwf"))
    jcgterBOT.respond("Kill it with FIRE 🔥!!!");
  
  if (message.startsWith("getrekt"))
    jcgterBOT.respond("Someone got chucked in a house in the middle of demolition?");
  
  if (message.startsWith("roasted"))
    jcgterBOT.respond("Someone's up for sale at the BBQ place?");
  
  if (message.startsWith("omg"))
    jcgterBOT.respond("Oh my gosh! WHat happened?");
  
  if (message.startsWith("dce"))
    jcgterBOT.respond("DoorsCE's been delayed because of all you noobs asking for it!!!!!!");
  
  if (message.startsWith("jcgter777"))
    jcgterBOT.respond("jcgter777: " + poster + " says hi!");
  
  if (message.startsWith("cookie"))
    jcgterBOT.respond("Someone wanted you to have this cookie.");
    
  if (message.startsWith("give"))
    jcgterBOT.respond(getArgs(rawMessage)[1] + ": " + "Someone wanted you to have this " + getArgs(rawMessage)[2]);
    
    
  
 //keep this at the end so nothing will go wrong
  if (message.startsWith("karme")) {
    if (poster == "jcgter777") {
      jcgterBOT.respond("Here you go: jctger777++! You're awesome!");
    } else if (poster == "_iPhoenix_") {
      jcgterBOT.respond("Here you go: _iPheonix_++! You're awesome!");
    } else if (poster == "LAX18") {
      jcgterBOT.respond("Here you go: LAX16++! You're awesome!");
    } else {
      jcgterBOT.respond("Here: " + poster + "+-" + " Because you suck, no offense. :P");
    }
  }
}
