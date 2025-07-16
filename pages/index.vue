<script setup>
import { useEnkaFetch } from '../composables/api/fetchUID';

const { data, error } = useEnkaFetch('701888050');
</script>
<template>
  <section>
    <pre>{{ error ? error.message : JSON.stringify(data, null, 2) }}</pre>
  </section>
</template>