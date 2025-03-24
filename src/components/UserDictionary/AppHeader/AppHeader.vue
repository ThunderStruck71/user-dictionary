<script setup lang="ts">
const props = defineProps(['msg']);
</script>

<template>
	<div class="text-center">
		<div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

		<h1 class="text-h2 font-weight-bold">{{ props.msg }}</h1>
	</div>
</template>