<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">

                <li class="page-item" :class="{'disabled': pagi_data.has_pre==false}"
                    @click.prevent="PagiGet(pagi_data.current_page - 1)">

                    <a class="page-link">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>

                </li>

                <li class="page-item" v-for="page in pagi_data.total_pages" :key='page'
                    :class="{'active': page==pagi_data.current_page }"
                    @click.prevent='PagiGet(page)'>

                    <a class="page-link">{{page}}</a>

                </li>

                <li class="page-item" :class="{'disabled': pagi_data.has_next==false}"
                    @click.prevent="PagiGet(pagi_data.current_page + 1)">

                    <a class="page-link">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>

                </li>

            </ul>
        </nav>
    </div>
</template>


<script>
    export default {
        name: 'paganation_cpt',
        props: ["pagi_data"],
        methods:
        {
            PagiGet(page){
                this.$emit('emit_function', page)
            }
        }
    }
</script>