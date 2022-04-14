<template>
<!--  <ResourceIndex :resourceName="resourceName" />-->
  <div>
    Testing View
  </div>
</template>

<script>
import { mapProps } from 'laravel-nova'

export default {
  props: mapProps(['resourceName']),
  data: () => ({
    resourceName: Nova.config.menuBuilderUriKey,
  }),
  mounted(){
    console.log('Resource Name: ' + this.resourceName);
  }
};
</script>
