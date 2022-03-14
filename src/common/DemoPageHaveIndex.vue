<template>
	<div class="demo-page-have-index">
		<ul class="container">
			<li class="item" v-for="item in paths" :key="item">
				<!-- Link -->
				<router-link-a :href="item.href" style="padding-left: 1.5rem">
					{{ item.name }}
				</router-link-a>
				<!-- Index -->
				<m-transition-folded>
					<div
						class="page-index"
						v-shadow:bottom="0.5"
						v-show="$route.path == item.href && item.index.length"
					>
						<m-button
							class="item"
							v-scroll-to:120="i.to"
							style="padding-left: 2.5rem"
							v-for="i in item.index"
							:key="i"
							active
							hover
							text
							row
						>
							{{ i.name }}
						</m-button>
					</div>
				</m-transition-folded>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'demo-page-have-index',
		data() {
			return {
				path: undefined,
			};
		},
		props: {
			paths: Object,
		},
	};
</script>
<style scoped>
	.item::marker {
		font-size: 0;
	}

	#links,
	.container {
		padding: unset;
	}
	.item {
		text-align: start;
	}
	.router-link-a + .page-index {
		margin-top: 5px;
	}
	.page-index {
		border-radius: var(--m-radius);
		background: var(--background);
		overflow: hidden;
		padding: 5px;
	}
</style>
