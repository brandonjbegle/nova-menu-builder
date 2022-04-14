<template>
  <ResourceIndex :resourceName="resourceName"
                 :shouldOverrideMeta="true"
                 :shouldEnableShortcut="true"></ResourceIndex>
</template>

<script>

export default {
  data: () => ({
    resourceName: Nova.appConfig.menuBuilderUriKey,
  })
};
</script>
