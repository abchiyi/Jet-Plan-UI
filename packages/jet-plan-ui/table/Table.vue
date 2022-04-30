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
                        tabIndex: key,
                        active: true,
                        hover: true,
                        focus: true,
                        maskOpacity: 0.2,
                        ...{
                            colorHover: 'var(--info)',
                            colorFocus: 'var(--primary)',
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

<style>
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
    background-color: var(--foreground);
    color: var(--text-hint);
    border: solid 2px var(--border);
    overflow: hidden;
    overflow-x: auto;
}

.j-table {
    border-radius: 7px;
}

.j-table .table-header {
    border-bottom: 2px solid var(--border);
    color: var(--text);
    font-size: 18px;
    background: var(--background);
}

.j-table tr:nth-child(odd) {
    background: var(--secondary);
}

/* chrome and Safari scrollbar */
.j-table::-webkit-scrollbar {
    height: 0.2em;
}
.j-table::-webkit-scrollbar-thumb {
    border-radius: 0.2em;
    background-color: var(--text-hint);
}
</style>
