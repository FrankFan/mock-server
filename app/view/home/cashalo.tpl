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
    <li><a href="/cashalo/common/invitation/rewardsRule">/cashalo/common/invitation/rewardsRule</a></li>
    <li><a href="/cashalo/common/invitation/invitationResult">/cashalo/common/invitation/invitationResult</a></li>
    <li><a href="/cashalo/common/invitation/award/list">/cashalo/common/invitation/award/list</a></li>
    <li><a href="/cashalo/common/invitation/contents">/cashalo/common/invitation/contents</a></li>
  </ol>
</div
{% endblock%}