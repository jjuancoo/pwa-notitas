<template>
    <div class="hello">
        <h1>{{msg}}</h1>
    </div>

    <div class="notes">
        <ul>
            <v-card v-for="(page, index) in pages" class="page">
                <v-cart-title primary-title>
                    <div> 
                        <h3 class="headline mb-0">{{page.title}} tit + {{index}}</h3>
                        <div> {{page.content}} cont </div>
                    </div>
                </v-cart-title>
            </v-card>
            <v-btn fab dark color="indigo" @click="newNote()">
                <v-icon dark>add</v-icon>
            </v-btn>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'Notes',
        props: ['pages'],
        methods: {
            newNote(){
                this.$emit('new-note') 
            }
        }
    }
</script>

<style scoped>
    h3{
        margin: 40px 0 0;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #42b983;
    }
</style>