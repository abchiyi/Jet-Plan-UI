<template>
  <div>
    <j-row>
      <h2>主题</h2>
    </j-row>
    <hr />
    <br />
    <div id="theme-box">
      <!-- header -->
      <j-row Y="center">
        <h3>选择主题</h3>
      </j-row>
      <hr />
      <!-- themes -->
      <j-row id="all-theme" warp>
        <div class="theme-item">
          <j-all-theme />
        </div>
      </j-row>
    </div>
  </div>
</template>

<script>
import pdn from '@common/mix/popDemoName';
export default {
  mixins: [pdn],
  name: 'the-demo-style',
};
</script>

<style>
.theme-item > span {
  padding-left: 8px;
}

#theme-box {
  background-color: var(--foreground);
  border-radius: var(--m-radius);
  padding: 5px 20px;
}

#colors {
  background: var(--foreground);
}

#all-theme {
  padding: 5px 20px;
}

.color-box {
  align-items: top;
  display: flex;
}
.color-box > * {
  width: 130px;
  display: inline-block;
}
.color-box p {
  font-size: 19px;
}

.color {
  border: 3px solid var(--border);
  border-radius: var(--m-radius);
  height: 50px;
  width: 50px;
  margin: 5px;
}

.show-h-tag > *:last-child {
  margin-left: 10px;
}
.show-h-tag > * {
  display: inline-block;
}
.shadow {
  box-shadow: 0 2px 10px 1px var(--shadow);
}
</style>
