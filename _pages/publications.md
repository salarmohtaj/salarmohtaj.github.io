---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
{% if site.author.googlescholar %}
  You can also find my articles on my <a href="{{site.author.googlescholar}}">Google Scholar</a> profile.
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
{% capture counter %}
{{ forloop.index }} 
{% endcapture %}

  {% include archive-single.html counter=forloop.index %}
{% endfor %}
