{% extends "../layout/layout.tpl" %}

{% block navbar %}
<li class="nav-item">
    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="/cashalo">Cashalo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finmas">Finmas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finizi">Finizi</a>
  </li>
{% endblock %}

{% block content %}
<div class="content-view v-transition">
  <h2>Cashalo API:</h2>
  <ol>
    <li><a href="/cashalo/paymentOptions">/cashalo/paymentOptions</a></li>
    <li><a href="/cashalo/getPaymentUrl">/cashalo/getPaymentUrl</a></li>
    <li><a href="/cashalo/rewardsRule">/cashalo/rewardsRule</a></li>
    <li><a href="/cashalo/invitationResult">/cashalo/invitationResult</a></li>
    <li><a href="/cashalo/awardList">/cashalo/awardList</a></li>
  </ol>
</div
{% endblock%}