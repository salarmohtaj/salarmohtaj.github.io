---
layout: archive
title: "CV"
#excerpt: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[//]: # [Please click to download my Curriculum Vitae [PDF]](https://salarmohtaj.github.io/files/paper1.pdf)



Education
======
* B.S. in Information Technology, [Shahrood University of Technology](http://shahroodut.ac.ir/en/) , 2011
* M.S. in Information Technology Engineering, GitHub University, 2014
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)

Work experience
======
* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
[//]: # Talks
[//]: # ======
{% comment %}
<ul>{% for post in site.talks %}
{% include archive-single-talk-cv.html %}
{% endfor %}</ul>
{% endcomment %}
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
  {% if forloop.first %}
    {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}</ul>
  
[//]: # Service and leadership
[//]: # ======
[//]: # * Currently signed in to 43 different slack teams
