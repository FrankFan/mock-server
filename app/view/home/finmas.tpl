{% extends "../layout/layout.tpl" %}

{% block navbar %}
<li class="nav-item">
    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/cashalo">Cashalo</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="/finmas">Finmas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finizi">Finizi</a>
  </li>
{% endblock %}

{% block content %}
finmas
{% endblock%}