
calculate_cro = () => {
  let weekly_ad_spend = parseFloat($('#ad_spend').val());
  let link_clicks = parseFloat($('#link_clicks').val());
  let cvr = parseFloat($('#cvr').val()) / 100.0;

  let denominator = link_clicks * cvr;

  if((link_clicks * cvr) > 0) {
    $('#cac').text(Math.round(100 * weekly_ad_spend / (link_clicks * cvr)) / 100);
  }
};

$(document).ready(function() {
  calculate_cro();
});
