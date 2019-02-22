<template>
    <main id="verify">
        <section class="logo">
            <img  id="small" src="../assets/logo.svg" alt="logo">
            <p>staff</p>
        </section>
        <section class="img" v-if="verify">
            <img v-if="verify.verified" class="pass" src="../assets/pass.jpg" alt="stiffler tumbs up">
            <img v-if="!verify.verified" class="fail" src="../assets/fail.png" alt="stiffler finger!"> 
            <div><h2 class="h2-success" v-if="verify.verified">Verified</h2>
            <h2 class="h2-fail" v-if="!verify.verified">Fail</h2></div>
        </section>
        <section class="input">
            <input type="text" name="vertify" id="" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" @keypress.enter="verifyTicket" autocomplete="off">
        </section>
        <section class="btn">
            <button @click="verifyTicket">Vertify ticket!</button>
              <router-link class="link" to="/" >Start page</router-link>
        </section>
    </main>
</template>

<script>
import mainLink from '@/components/MainLink';
export default {
    name: 'verify',
    data (){
        return {
            code:'',
            codeLength: 5
        }
    },
    computed: {
        verify(){
            return this.$store.state.verifyData;
        }
    },
    methods: {
        verifyTicket(){
            this.$store.dispatch('verifyTicket', this.code);
        }
    }
}
</script>

 <style lang="scss" >
 @import '../scss/variable';
 @import url('https://fonts.googleapis.com/css?family=Fira+Sans');

 /* Kanske onödigt att ha grid när ändå allt bara ska ligga påvaranndra, men övning ger färdighet, så vi kör på de ändå!*/
body {
 
    #verify {
            background-color:$orange !important;
            max-width: 20rem;
            width: 100%;
            display: grid;
            grid-template-rows: 150px 230px 90px 90px;
            grid-template-areas:
            "logo"
            "img"
            "input"
            "btn"
        }

    .logo {
        margin-top: 1rem;
        grid-area: logo;
        filter: grayscale(100%);

         p {
            text-transform: uppercase;
            font-family: 'Fira Sans', sans-serif;
            font-size: 22px;
            text-align: center;
            letter-spacing: 0.3em;
        }  
        #small {
            width: 5rem;
        }
    }
    .img {
        grid-area: img;
        
        .pass {
            width: 10rem;
            border-radius: 50%;
        }  
        .fail {
            width: 10rem;
            border-radius: 50%;
        }
        div {
            h2 {
                color: $green;
                font-size: 2rem;
                margin-top: .2rem;
                text-shadow: 1px 2px 1px $greyich;
            }
            .h2-fail {
                color: $red;
            }
        }
    }
    .input {
        grid-area: input;
        border: 2px solid #231F42;
        input {
            width: 99%;
            height: 100%;
            font-family: 'Fira Sans', sans-serif;
            font-weight: bold;
            font-size: 30px;
            letter-spacing: .2em;
            color: #000;
            text-align: center;
        } 
    }
    .btn  {
        grid-area: btn;

        button {
        background-color: #231F42;
        width: 100%;
        height: 100%;
        font-family: 'Fira Sans', sans-serif;
        font-weight: bold;
        font-size: 26px;
        letter-spacing: .2em;
        color: #fff;
        margin-bottom: 1rem;
        }
        .link {
        text-decoration: none;
        bottom: 0;
        text-align: center;
        color:$greyich;
    } 
  }
}
</style>
