{% comment %}
评论系统：Giscus（基于 GitHub Discussions）。
仅当 _config.yml 中 giscus 的四项配置都填写后才渲染，否则整站不显示评论区。
原来的多说（duoshuo）已关停，脚本会报错，故替换。
{% endcomment %}
{% if site.giscus.repo and site.giscus.repo_id and site.giscus.category and site.giscus.category_id %}
<section id="comments" style="margin-top:2em;">
  <script src="https://giscus.app/client.js"
          data-repo="{{ site.giscus.repo }}"
          data-repo-id="{{ site.giscus.repo_id }}"
          data-category="{{ site.giscus.category }}"
          data-category-id="{{ site.giscus.category_id }}"
          data-mapping="pathname"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="light"
          data-lang="zh-CN"
          crossorigin="anonymous"
          async>
  </script>
</section>
{% endif %}
