var cards = $(".better-github-card").toArray()

for(var i = 0; i < cards.length; i++) {
  process_card(cards[i])
}


function process_card(card) {
	var theme_name;
  const user = $($(card).find(".bgh-user")[0])
  const theme = $($(card).find(".bgh-config")[0])
  console.log(theme)
  console.log(theme.hasClass("bgh-config-custom"))
  if (theme.hasClass("bgh-config-custom")) {
  	theme_name = "custom";
  } else {
  	theme_name = theme.html()
  }
  if(theme_name !== undefined && user !== undefined) {
  	ghInject(card,user,theme)
  }
}

function ghInject(card,user,theme) {
  console.log("Injecting...")
	$.ajax("http://localhost:2000/get?user=" + user).done(function(card_html) {
    console.log("Done")
    console.log(card_html);
    $(card).html(card_html)
  });
}
