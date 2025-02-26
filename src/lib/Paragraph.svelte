<script>
  export let paragraph;
  export let showFr1829;
  export let showFr1865;
</script>

<div class="paragraph es">{paragraph.es}</div>

<div class="paragraph fr1829" style="display: {showFr1829 ? 'block' : 'none'};">
  {paragraph.fr1829}
</div>

<div class="paragraph fr1865" style="display: {showFr1865 ? 'block' : 'none'};">
  {paragraph.fr1865}
</div>
