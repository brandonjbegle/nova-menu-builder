<template>
  <ResourceIndex :resourceName="resourceName" />
</template>

<script>
import { mapProps } from 'laravel-nova'

export default {
  props: mapProps(['resourceName']),
  data: () => ({
    resourceName: Nova.config.menuBuilderUriKey,
  }),
};
</script>
