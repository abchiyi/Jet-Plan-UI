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
					<div class="page-index" v-show="$route.path == item.href">
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
<style>
	.item::marker {
		font-size: 0;
	}

	#links,
	.container {
		padding: unset;
	}
</style>
