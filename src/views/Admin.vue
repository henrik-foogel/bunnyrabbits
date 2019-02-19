<template>
    <main id="admin">
        <section class="container">
            <table cellspacing="0">
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
            <aside class="form">
                <input type="text" placeholder="event name" v-model="newEvent.name">
                <input type="text" placeholder="event location" v-model="newEvent.where">
                <input type="text" placeholder="event start time" v-model="newEvent.when.from">
                <input type="text" placeholder="event end time" v-model="newEvent.when.to">
                <input type="number" placeholder="price" v-model="newEvent.price">
                <input type="number" placeholder="total tickets" v-model="newEvent.tickets.available">
                <a href="#" class="btn" @click="createEvent">Create event</a>
            </aside>
        </section>
    </main>    
</template>

<script>
import axios from 'axios'
export default {
    name: 'admin',
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
                price: 0,
                tickets: {
                    available: 0,
                    sold: 0
                }
            }
        }
    },
    methods: {
        async createEvent() {

            let resp = await axios.post('http://localhost:3000/events', this.newEvent)
            console.log(resp);

            this.$store.dispatch('getEvents');

        }
    },
    computed: {
        events() {
            return this.$store.state.events;
        }
    },
    beforeMount() {
        this.$store.dispatch('getEvents');
    }
}
</script>

<style lang="scss">

#admin {
    background-color: #231F42;
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
        grid-template-columns: 4fr 1fr;
        max-width: 1000px;
        width: 100%;
        color:#fff;

        table {
            background: rgba($color: #000000, $alpha: 0.3);
            padding: 1rem;
            text-align: left;

        thead {
            tr {
                th {
                    color:rosybrown;
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
            background: rgba($color: #000000, $alpha: 0.3);
            padding: 1rem;

            input {
                width: 100%;
                background: none;
                border: 1px solid #fff;
                border-radius: 4px;
                padding: .25rem;
                font-size: 1.2rem;
                color:#fff;
                margin: 0 0 1rem 0; 
            }

        }
    }
}

</style>
