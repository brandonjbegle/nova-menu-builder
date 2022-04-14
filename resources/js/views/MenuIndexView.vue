<template>
  <ResourceIndex :resourceName="resourceName"/>
</template>

<script>
// import { mapProps } from 'laravel-nova'

export default {
  // props: mapProps(['resourceName']),
  data: () => ({
    resourceName: Nova.appConfig.menuBuilderUriKey,
  }),
  mounted() {
    console.log(Nova);
    console.log('Resource Name: ' + this.resourceName);
  }
};
</script>
