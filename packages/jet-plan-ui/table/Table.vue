<script>
import { h } from 'vue';
import { ActionFeedback } from '../action-feedback';
export default {
    name: 'j-table',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    methods: {},
    computed: {
        renderHeader() {
            const tempTh = [];
            for (let key in this.data.list[0]) {
                tempTh.push(h('th', null, key));
            }
            return h(
                'tr',
                {
                    class: ['table-header'],
                },
                tempTh
            );
        },
        renderTable() {
            function renderItem(item, key) {
                function renderCol(v) {
                    return h('td', null, v);
                }
                const tempCol = [];
                for (let key in item) {
                    tempCol.push(renderCol(item[key]));
                }
                return h(
                    ActionFeedback,
                    {
                        tag: 'tr',
                        class: 'table-item',
                        tabIndex: key,
                        active: true,
                        hover: true,
                        focus: true,
                        maskOpacity: 0.2,
                        ...{
                            colorHover: 'var(--info)',
                            colorFocus: 'var(--primary-dark)',
                        },
                    },
                    {
                        default: () => tempCol,
                    }
                );
            }
            const data = this.data.list;
            const tempItem = [this.renderHeader];
            for (let key in data) {
                tempItem.push(renderItem(data[key], key + 1));
            }
            return tempItem;
        },
    },
    render() {
        return h(
            'div',
            {
                class: ['j-table'],
            },
            h('table', null, this.renderTable)
        );
    },
};
</script>

<style scoped >
.table-item.j-action-feedback:after {
    transition: 0.3s var(--ease-out);
    background: var(--info);
    color: var(--text-light);
    border-radius: 0.3em;
    margin: 1em 0;
    content: '';
    opacity: 0.7;
    width: 0.3em;
    left: -1em;
}

.table-item.j-action-feedback.focus:after {
    margin: 0.5em 0.15em;
    left: 0;
}
.table-item.j-action-feedback.focus {
    background: var(--border-dark);
    color: var(--text-dark);
}

.table-item.j-action-feedback.hover.focus::after {
    background: var(--white);
    margin: 0.3em 0.15em;
}
.table-item.j-action-feedback.hover {
    background: var(--info);
    color: var(--text-light);
}
table {
    border-collapse: collapse;
    width: 100%;
}

th {
    text-align: left;
}

th,
td {
    padding: 5px 10px;
}

.j-table {
    background-color: var(--white);
    color: var(--text-light);
    border: solid 2px var(--border-dark);
    overflow: hidden;
    overflow-x: auto;
}

.j-table {
    border-radius: 7px;
}

.j-table .table-header {
    border-bottom: 2px solid var(--border-dark);
    color: var(--text-dark);
    font-size: 18px;
    background: var(--page-background);
}

/* .j-table tr:nth-child(odd) {
    background: var(--border-dark);
} */
.j-table tr:nth-child(1) {
    background: var(--border-dark);
}

/* chrome and Safari scrollbar */
.j-table::-webkit-scrollbar {
    height: 0.2em;
}
.j-table::-webkit-scrollbar-thumb {
    border-radius: 0.2em;
    background-color: var(--text-light);
}
</style>
