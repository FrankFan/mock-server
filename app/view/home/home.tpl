{% extends "../layout/layout.tpl" %}

{% block navbar %}
<li class="nav-item active">
    <a class="nav-link" href="javascript:void(0)">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/cashalo">Cashalo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finmas">Finmas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/finizi">Finizi</a>
  </li>
{% endblock %}

{% block carousel %}
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="first-slide" src="https://cn.bing.com/az/hprichbg/rb/RoundBales_ZH-CN8377464305_1920x1080.jpg" alt="First slide">
      <div class="container">
        <div class="carousel-caption text-left">
          <h1>Cashalo</h1>
          <p>cashalo</p>
          <p><a class="btn btn-lg btn-primary" href="/cashalo" role="button">cashalo &raquo;</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="second-slide" src="https://ws1.sinaimg.cn/large/006tNbRwgy1fv4ef1rwzyj31hc0u047n.jpg" alt="Second slide">
      <div class="container">
        <div class="carousel-caption">
          <h1>Finmas</h1>
          <p>finmas</p>
          <p><a class="btn btn-lg btn-primary" href="/finmas" role="button">finmas &raquo;</a></p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="third-slide" src="https://ws3.sinaimg.cn/large/006tNbRwgy1fv4efbm1nfj31hc0u0k0d.jpg" alt="Third slide">
      <div class="container">
        <div class="carousel-caption text-right">
          <h1>Finizi</h1>
          <p>finizi</p>
          <p><a class="btn btn-lg btn-primary" href="/finizi" role="button">finizi &raquo;</a></p>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{% endblock %}

{% block columns %}
<div class="row">
  <div class="col-lg-4">
    <img class="rounded-circle" src="/public/imgs/cashalo-logo.png" alt="" width="140" height="140">
    <h2>Cashalo</h2>
    <p>Philippines</p>
    <p><a class="btn btn-secondary" href="/cashalo" role="button">View details &raquo;</a></p>
  </div><!-- /.col-lg-4 -->
  <div class="col-lg-4">
    <img class="rounded-circle" src="/public/imgs/finmas-logo.png" alt="" width="140" height="140">
    <h2>Finmas</h2>
    <p>Indonesia</p>
    <p><a class="btn btn-secondary" href="/finmas" role="button">View details &raquo;</a></p>
  </div><!-- /.col-lg-4 -->
  <div class="col-lg-4">
    <img class="rounded-circle" src="/public/imgs/finizi-logo.png" alt="" width="140" height="140">
    <h2>Finizi</h2>
    <p>Vietnam</p>
    <p><a class="btn btn-secondary" href="/finizi" role="button">View details &raquo;</a></p>
  </div><!-- /.col-lg-4 -->
</div><!-- /.row -->
{% endblock%}