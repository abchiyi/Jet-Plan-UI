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
		name: 'j-col',
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
					notUndefined(this.xs, 'j-col-xs'),
					notUndefined(this.sm, 'j-col-sm'),
					notUndefined(this.md, 'j-col-md'),
					notUndefined(this.lg, 'j-col-lg'),
					notUndefined(this.lg, 'j-col-xl'),
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
					col: this.col ? this.calcWidth(this.col) : 'auto',
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
					class: ['j-col', ...this.class],
				},
				this.$slots
			);
		},
	};
</script>

<style>
	/* --常规设置-- */

	.j-col,
	.j-col-xs,
	.j-col-sm,
	.j-col-md,
	.j-col-lg {
		transition: 500ms var(--ease-in-out), color 0s;
		/* 内外边距和变宽将包含在总大小内 */
		box-sizing: border-box;
		display: inline-block;
		min-height: 1px;
	}

	.j-col {
		width: v-bind('style.col');
	}

	.j-col + * {
		padding-left: 8px;
	}

	/* 偏移 */
	.j-col.offset {
		margin-left: v-bind('style.offset');
	}

	.j-row.reverse > .offset {
		margin-right: v-bind('style.offset');
		margin-left: unset;
	}

	/* --响应式-- */

	/* xl */
	@media (min-width: 1200px) {
		.j-col-xl {
			width: v-bind('style.xl');
			display: v-bind('style.hiddenOnXl');
		}

		.j-col.offset-xl {
			margin-left: v-bind('style.offsetXl');
		}

		.row.reverse > .offset-xl {
			margin-right: v-bind('style.offsetXl');
		}
	}

	/* lg */
	@media (min-width: 993px) and (max-width: 1200px) {
		.j-col-lg {
			width: v-bind('style.lg');
			display: v-bind('style.hiddenOnLg');
		}

		.j-col.offset-lg {
			margin-left: v-bind('style.offsetLg');
		}

		.row.reverse > .offset-lg {
			margin-right: v-bind('style.offsetLg');
		}
	}

	/* md */
	@media (min-width: 769px) and (max-width: 992px) {
		.j-col-md {
			width: v-bind('style.md');
			display: v-bind('style.hiddenOnMd');
		}

		.j-col.offset-md {
			margin-left: v-bind('style.offsetMd');
		}

		.row.reverse > .offset-md {
			margin-right: v-bind('style.offsetMd');
		}
	}

	/* sm */
	@media (min-width: 579px) and (max-width: 768px) {
		.j-col-sm {
			width: v-bind('style.sm');
			display: v-bind('style.hiddenOnSm');
		}

		.j-col.offset-sm {
			margin-left: v-bind('style.offsetSm');
		}

		.row.reverse > .offset-sm {
			margin-right: v-bind('style.offsetSm');
		}
	}

	/* xs */
	@media (max-width: 578px) {
		.j-col-xs {
			width: v-bind('style.xs');
			display: v-bind('style.hiddenOnXs');
		}

		.j-col.offset-xs {
			margin-left: v-bind('style.offsetXs');
		}

		.row.reverse > .offset-xs {
			margin-right: v-bind('style.offsetXs');
			margin-left: unset;
		}
	}
</style>
