<template>
    <main id="admin">
        <section class="container">
            <aside class="form">
            <h2>Add Event</h2>
                <input type="text" placeholder="Event name" :value="newEvent.name.toUpperCase()" @input="newEvent.name = $event.target.value.toUpperCase()">
                <input type="text" placeholder="Event location" v-model="newEvent.where">
                <input type="text" placeholder="Event start time" v-model="newEvent.when.from" :maxlength="5">
                <input type="text" placeholder="Event end time" v-model="newEvent.when.to" :maxlength="5">
                <input type="text" placeholder="Event month" :value="newEvent.date.month.toUpperCase()" @input="newEvent.date.month = $event.target.value.toUpperCase()" :maxlength="3">
                <input type="text" placeholder="Event day" v-model="newEvent.date.day" :maxlength="2">
                <input type="number" placeholder="Price" v-model="newEvent.price">
                <input type="number" placeholder="Total tickets" v-model="newEvent.tickets.available">
                <div><a href="#" class="btn" @click="createEvent">Create event</a></div>
            </aside>
            <table cellspacing="0" class="table">
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Where:</th>
                        <th>Tickets available:</th>
                        <th>Tickets sold:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event._id">
                    <td>{{ event.name }}</td>
                    <td>{{ event.where }}</td>
                    <td>{{ event.tickets.available }}</td>
                    <td>{{ event.tickets.sold }}</td>
                    </tr>
                </tbody>
            </table>
             <router-link class="link" to="/">Start page</router-link>
        </section>
    </main>    
</template>

<script>
import mainLink from '@/components/MainLink';
import axios from 'axios'
export default {
    name: 'admin',
    beforeMount() {
        this.$store.dispatch('getEvents');
        this.$store.state.tickets = []
    },
    data() {
        return {
            newEvent: {
                name: "",
                where: '',
                when: {
                    from: '',
                    to: ''
                },
                date: {
                    month: '',
                    day: ''
                },
                price: "",
                tickets: {
                    available: "",
                    sold: 0
                }
            }
        }
    },
    methods: {
        async createEvent() {

            await this.$store.dispatch('createEvents', this.newEvent);
            await this.$store.dispatch('getEvents');

            this.clearFields()

        },
        clearFields() {
            this.newEvent.name = '';
            this.newEvent.where = '';
            this.newEvent.when.from = '';
            this.newEvent.when.to = '';
            this.newEvent.date.month = '';
            this.newEvent.date.day = '';
            this.newEvent.price = '';
            this.newEvent.tickets.available = '';

        }
    },
    computed: {
        events() {
            return this.$store.state.events;
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../scss/variable';

#admin {
    background-color: $main_bg;
    display: flex;
    justify-content: center;

    .logo {
        position: fixed;
        margin: 2rem;
        left: 10px;
        top: 20px;
    }
    

    .container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 1000px;
        width: 100%;
        font-size: 1.5rem;
        color:#fff;
        grid-template-rows: auto auto;
        grid-template-areas: 
        "form"
        "table";

        table {
            grid-area: table;
            background: rgba($color: #000000, $alpha: 0.3);
            padding: 1rem;
            text-align: left;
            padding: 1.5rem;


            thead {
                tr {
                    th {
                        color: $pink;
                        font-weight: 500;
                        font-size: 1.2rem !important;
                        border-bottom: 1px solid #fff;
                        padding:1rem 0px;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        color: rgba($color: #fff, $alpha: 0.8);
                    }
                    &:nth-child(2n){
                        background:  #ffffff10;
                    }
                }
            }
        }

        .form {
            grid-area: form;
            padding: 1.5rem 2rem 1.5rem 1.5rem;
            background: rgba($color: #000000, $alpha: 0.3);
            margin: 0 0rem;

            h2 {
                margin-top: .2rem;
            }

            input {
                width: 30%;
                background: none;
                border: 1px solid #fff;
                border-radius: 4px;
                padding: .25rem;
                margin: 1rem; 
                color: #fff;
            }

            div {
                @extend %center;

                .btn {  
                    width: 30%;
                    border-radius: 15px;
                    background-color: $pink;
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 1.7rem;
                    cursor: pointer;
                    padding: .2rem;
                }
            }

        }
          .link {
      text-decoration: none;
      bottom: 0;
      text-align: center;
      color:$greyich;
      font-size: 16px;
      margin-top: .75rem;
    }
    }
}

</style>
