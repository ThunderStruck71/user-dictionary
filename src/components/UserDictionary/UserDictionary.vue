<script setup lang="ts">
import { ref } from 'vue';
import type { IUserDictionaryOption } from './UserDictionaryOption.interface';

defineProps<{
	title: string,
	subTitle: string;
	options: IUserDictionaryOption[]
}>()

const el = ref();

const onFocus = () => {
	el.value.menu = true;
}

const toggle = () => {
	el.value.menu = false;
}

</script>

<template>
	<v-select ref="el" :label="title" :items="options" item-title="description" return-object
		v-on:update:focused="onFocus">
		<template v-slot:prepend-item>
			<v-list-item :title="subTitle">
				<template v-slot:append>
					<v-btn color="grey-lighten-1" icon="$clear" variant="text" @click="toggle"></v-btn>
				</template>
			</v-list-item>

			<v-divider class="mt-2"></v-divider>
		</template>
	</v-select>
</template>