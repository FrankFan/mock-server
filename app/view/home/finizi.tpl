{% extends "../layout/layout.tpl" %}

{% block navbar %}
<li class="nav-item">
    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/cashalo">Cashalo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finmas">Finmas</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="/finizi">Finizi</a>
  </li>
{% endblock %}

{% block content %}
<div class="content-view v-transition">
  <h2>Finizi API:</h2>
  <ol>
    <li><a href="/finizi/loan/capital">/finizi/loan/capital</li>
    <li><a href="/finizi/loan/capital/1/20">/finizi/loan/capital/:pageNo/:pageSize</li>
    <li><a href="/finizi/getPaymentUrl">/finizi/getPaymentUrl</a></li>
    <li><a href="/finizi/paymentOptions">/finizi/paymentOptions</a></li>
    <li><a href="/finizi/inviteList">/finizi/inviteList</a></li>
    <li><a href="/finizi/shareContent">/finizi/shareContent</a></li>
  </ol>
</div
{% endblock%}