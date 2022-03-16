// TODO 支持在各个宽度下自定义css
<script>
	import { h } from 'vue';
	function notUndefined(value, string) {
		if (value !== undefined) {
			return string;
		}
	}

	function ifHidden(value) {
		if (value == 0) {
			return 'none';
		}
		return '';
	}
	export default {
		name: 'm-col',
		props: {
			tag: {
				type: String,
				default: 'div',
			},
			col: Number,
			xs: Number,
			sm: Number,
			md: Number,
			lg: Number,
			xl: Number,
			offset: Number,
			offsetXs: Number,
			offsetSm: Number,
			offsetMd: Number,
			offsetLg: Number,
			relativeToScreen: { type: Boolean, default: false },
		},
		methods: {
			calcWidth(number) {
				let num = (number * 100) / 24;
				return number
					? `${num}${this.relativeToScreen ? 'vw' : '%'}`
					: '';
			},
		},
		computed: {
			class() {
				return [
					notUndefined(this.xs, 'm-col-xs'),
					notUndefined(this.sm, 'm-col-sm'),
					notUndefined(this.md, 'm-col-md'),
					notUndefined(this.lg, 'm-col-lg'),
					notUndefined(this.lg, 'm-col-xl'),
					notUndefined(this.offset, 'offset'),
					notUndefined(this.offsetXs, 'offset-xs'),
					notUndefined(this.offsetSm, 'offset-sm'),
					notUndefined(this.offsetMd, 'offset-md'),
					notUndefined(this.offsetLg, 'offset-lg'),
					notUndefined(this.offsetLg, 'offset-xl'),
				];
			},
			style() {
				return {
					// col
					col: this.col ? this.calcWidth(this.col) : '100%',
					xs: this.calcWidth(this.xs),
					sm: this.calcWidth(this.sm),
					md: this.calcWidth(this.md),
					lg: this.calcWidth(this.lg),
					xl: this.calcWidth(this.xl),
					// offset
					offset: this.calcWidth(this.offset),
					offsetXs: this.calcWidth(this.offsetXs),
					offsetSm: this.calcWidth(this.offsetSm),
					offsetMd: this.calcWidth(this.offsetMd),
					offsetLg: this.calcWidth(this.offsetLg),
					offsetXl: this.calcWidth(this.offsetXl),
					// hidden
					hiddenOnXs: ifHidden(this.xs),
					hiddenOnSm: ifHidden(this.sm),
					hiddenOnMd: ifHidden(this.md),
					hiddenOnLg: ifHidden(this.lg),
					hiddenOnXl: ifHidden(this.xl),
				};
			},
		},
		render() {
			return h(
				this.tag,
				{
					class: ['m-col', ...this.class],
				},
				this.$slots
			);
		},
	};
</script>

<style>
	/* --常规设置-- */

	.m-col,
	.m-col-xs,
	.m-col-sm,
	.m-col-md,
	.m-col-lg {
		transition: 500ms var(--ease-in-out), color 0s;
		/* 内外边距和变宽将包含在总大小内 */
		box-sizing: border-box;
		display: inline-block;
		min-height: 1px;
	}

	.m-col {
		width: v-bind('style.col');
	}

	.m-col + * {
		padding-left: 8px;
	}

	/* 偏移 */
	.m-col.offset {
		margin-left: v-bind('style.offset');
	}

	.m-row.reverse > .offset {
		margin-right: v-bind('style.offset');
		margin-left: unset;
	}

	/* --响应式-- */

	/* xl */
	@media (min-width: 1200px) {
		.m-col-xl {
			width: v-bind('style.xl');
			display: v-bind('style.hiddenOnXl');
		}

		.m-col.offset-xl {
			margin-left: v-bind('style.offsetXl');
		}

		.row.reverse > .offset-xl {
			margin-right: v-bind('style.offsetXl');
		}
	}

	/* lg */
	@media (min-width: 993px) and (max-width: 1200px) {
		.m-col-lg {
			width: v-bind('style.lg');
			display: v-bind('style.hiddenOnLg');
		}

		.m-col.offset-lg {
			margin-left: v-bind('style.offsetLg');
		}

		.row.reverse > .offset-lg {
			margin-right: v-bind('style.offsetLg');
		}
	}

	/* md */
	@media (min-width: 769px) and (max-width: 992px) {
		.m-col-md {
			width: v-bind('style.md');
			display: v-bind('style.hiddenOnMd');
		}

		.m-col.offset-md {
			margin-left: v-bind('style.offsetMd');
		}

		.row.reverse > .offset-md {
			margin-right: v-bind('style.offsetMd');
		}
	}

	/* sm */
	@media (min-width: 579px) and (max-width: 768px) {
		.m-col-sm {
			width: v-bind('style.sm');
			display: v-bind('style.hiddenOnSm');
		}

		.m-col.offset-sm {
			margin-left: v-bind('style.offsetSm');
		}

		.row.reverse > .offset-sm {
			margin-right: v-bind('style.offsetSm');
		}
	}

	/* xs */
	@media (max-width: 578px) {
		.m-col-xs {
			width: v-bind('style.xs');
			display: v-bind('style.hiddenOnXs');
		}

		.m-col.offset-xs {
			margin-left: v-bind('style.offsetXs');
		}

		.row.reverse > .offset-xs {
			margin-right: v-bind('style.offsetXs');
			margin-left: unset;
		}
	}
</style>
